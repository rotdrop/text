/*
 * @copyright Copyright (c) 2022 Max <max@nextcloud.com>
 *
 * @author Max <max@nextcloud.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

import { generateUrl, generateRemoteUrl } from '@nextcloud/router'
import path from 'path'

export default class ImageResolver {

	#session
	#user
	#shareToken
	#currentDirectory

	constructor({ session, user, shareToken, currentDirectory }) {
		this.#session = session
		this.#user = user
		this.#shareToken = shareToken
		this.#currentDirectory = currentDirectory
	}

	/*
	 * Resolve a given src.
	 * @param { string } the original src in the node.
	 * @returns { Array<string> } - resolved urls to try.
	 *
	 * Currently returns either one or two urls.
	 */
	resolve(src) {
		if (src.startsWith('text://')) {
			const imageFileName = getQueryVariable(src, 'imageFileName')
			return [this.#getAttachmentUrl(imageFileName)]
		}
		if (src.startsWith(`.attachments.${this.#session?.documentId}/`)) {
			const imageFileName = decodeURIComponent(src.replace(`.attachments.${this.#session?.documentId}/`, '').split('?')[0])
			return [this.#getAttachmentUrl(imageFileName)]
		}
		if (isDirectUrl(src)) {
			return [src]
		}
		if (hasPreview(src)) { // && this.#mime !== 'image/gif') {
			return [this.#previewUrl(src)]
		}

		// if it starts with '.attachments.1234/'
		if (src.match(/^\.attachments\.\d+\//)) {
			const imageFileName = decodeURIComponent(src.replace(/\.attachments\.\d+\//, '').split('?')[0])
			const attachmentUrl = this.#getAttachmentUrl(imageFileName)
			// try the webdav url and attachment API if the fails
			return [this.#davUrl(src), attachmentUrl]
		}
		return [this.#davUrl(src)]
	}

	#getAttachmentUrl(imageFileName) {
		if (this.#user || !this.#shareToken) {
			return generateUrl('/apps/text/image?documentId={documentId}&sessionId={sessionId}&sessionToken={sessionToken}&imageFileName={imageFileName}', {
				...this.#textApiParams(),
				imageFileName,
			})
		}
		return generateUrl('/apps/text/image?documentId={documentId}&sessionId={sessionId}&sessionToken={sessionToken}&imageFileName={imageFileName}&shareToken={shareToken}', {
			...this.#textApiParams(),
			imageFileName,
			shareToken: this.#shareToken,
		})
	}

	#textApiParams() {
		if (this.#session) {
			return {
				documentId: this.#session.documentId,
				sessionId: this.#session.id,
				sessionToken: this.#session.token,
			}
		}
	}

	#previewUrl(src) {
		const imageFileId = getQueryVariable(src, 'fileId')
		const path = this.#filePath(src)
		const fileQuery = (imageFileId)
			? `?fileId=${imageFileId}&file=${encodeURIComponent(path)}`
			: `?file=${encodeURIComponent(path)}`
		const query = fileQuery + '&x=1024&y=1024&a=true'
		if (this.#user) {
			return generateUrl('/core/preview') + query
		} else {
			return generateUrl(`/apps/files_sharing/publicpreview/${this.#shareToken}${query}`)
		}
	}

	#filePath(src) {
		const f = [
			this.#currentDirectory,
			basename(src),
		].join('/')
		return path.normalize(f)
	}

	#davUrl(src) {
		if (this.#user) {
			const uid = this.#user.uid
			const encoded = encodeURI(this.#filePath(src))
			return generateRemoteUrl(`dav/files/${uid}${encoded}`)
		} else {
			return generateUrl('/s/{token}/download?path={dirname}&files={basename}', {
				token: this.#shareToken,
				dirname: this.#currentDirectory,
				basename: basename(src),
			})
		}
	}

}

/**
 * Check if a url can be loaded directly - i.e. is one of
 * - remote url
 * - data url
 * - preview url
 *
 * @param {string} src - the url to check
 */
function isDirectUrl(src) {
	return src.startsWith('http://')
		|| src.startsWith('https://')
		|| src.startsWith('data:')
		|| src.match(/^(\/index.php)?\/core\/preview/)
		|| src.match(/^(\/index.php)?\/apps\/files_sharing\/publicpreview\//)
}

/**
 * Check if the given url has a preview
 *
 * @param {string} src - the url to check
 */
function hasPreview(src) {
	return getQueryVariable(src, 'hasPreview') === 'true'
}

/**
 * Return the relative path as specified in the url
 *
 * @param {string} src - the url to extract path from
 */
function basename(src) {
	return decodeURI(src.split('?')[0])
}

/**
 * Extract the value of a query variable from the given url
 *
 * @param {string} src - the url to extract query variable from
 * @param {string} variable - name of the variable to read out
 */
function getQueryVariable(src, variable) {
	const query = src.split('?')[1]
	if (typeof query === 'undefined') {
		return
	}
	const vars = query.split(/[&#]/)
	if (typeof vars === 'undefined') {
		return
	}
	for (let i = 0; i < vars.length; i++) {
		const pair = vars[i].split('=')
		if (decodeURIComponent(pair[0]) === variable) {
			return decodeURIComponent(pair[1])
		}
	}
}
