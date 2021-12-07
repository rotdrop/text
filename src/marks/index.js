/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
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

import Bold from '@tiptap/extension-bold'
import TipTapItalic from '@tiptap/extension-italic'
import TipTapStrike from '@tiptap/extension-strike'
import Link from './Link'

/**
 * This file maps prosemirror mark names to tiptap classes,
 * so we can reuse the prosemirror-markdown default parser for now
 */
const Strong = Bold.extend({
	name: 'strong',
})

const Italic = TipTapItalic.extend({
	name: 'em',
})

/** Strike is currently unsupported by prosemirror-markdown */
const Strike = TipTapStrike.extend({
	parseDOM: [
		{
			tag: 's',
		},
		{
			tag: 'del',
		},
		{
			tag: 'strike',
		},
		{
			style: 'text-decoration',
			getAttrs: value => value === 'line-through',
		},
	],
	toDOM: () => ['s', 0],
	toMarkdown: {
		open: '~~',
		close: '~~',
		mixable: true,
		expelEnclosingWhitespace: true,
	},
})

export {
	Strong,
	Italic,
	Strike,
	Link,
}
