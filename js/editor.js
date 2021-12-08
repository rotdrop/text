(self["webpackChunktext"] = self["webpackChunktext"] || []).push([["editor"],{

/***/ "./img/checkbox-mark.svg":
/*!*******************************!*\
  !*** ./img/checkbox-mark.svg ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld2JveD0iMCAwIDE2IDE2IiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPjxwYXRoIGQ9Ik0xMS45MjQgNC4wNjZsLTQuOTMyIDQuOTctMi44MjgtMi44M0wyLjc1IDcuNjE4bDQuMjQyIDQuMjQzIDYuMzY1LTYuMzY1LTEuNDMzLTEuNDMyeiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPgo=";

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CollisionResolveDialog.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CollisionResolveDialog.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'CollisionResolveDialog'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var escape_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! escape-html */ "./node_modules/escape-html/index.js");
/* harmony import */ var escape_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(escape_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/moment */ "./node_modules/@nextcloud/moment/dist/index.js");
/* harmony import */ var _nextcloud_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_SyncService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/SyncService */ "./src/services/SyncService.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../helpers */ "./src/helpers/index.js");
/* harmony import */ var _helpers_mappings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/mappings */ "./src/helpers/mappings.js");
/* harmony import */ var _EditorFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../EditorFactory */ "./src/EditorFactory.js");
/* harmony import */ var _tiptap_vue_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tiptap/vue-2 */ "./node_modules/@tiptap/vue-2/dist/tiptap-vue-2.esm.js");
/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../extensions */ "./src/extensions/index.js");
/* harmony import */ var _mixins_isMobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../mixins/isMobile */ "./src/mixins/isMobile.js");
/* harmony import */ var _mixins_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../mixins/store */ "./src/mixins/store.js");
/* harmony import */ var _nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nextcloud/vue/dist/Directives/Tooltip */ "./node_modules/@nextcloud/vue/dist/Directives/Tooltip.js");
/* harmony import */ var _nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prosemirror_collab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prosemirror-collab */ "./node_modules/prosemirror-collab/dist/index.es.js");
/* harmony import */ var prosemirror_transform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prosemirror-transform */ "./node_modules/prosemirror-transform/dist/index.es.js");
/* provided dependency */ var console = __webpack_require__(/*! console-browserify */ "./node_modules/console-browserify/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







 // import { Emoji, Keymap, UserColor } from './../extensions'







var EDITOR_PUSH_DEBOUNCE = 200;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'EditorWrapper',
  components: {
    EditorContent: _tiptap_vue_2__WEBPACK_IMPORTED_MODULE_6__.EditorContent,
    MenuBar: function MenuBar() {
      return Promise.all(/*! import() | editor-rich */[__webpack_require__.e("vendors"), __webpack_require__.e("editor-rich")]).then(__webpack_require__.bind(__webpack_require__, /*! ./MenuBar */ "./src/components/MenuBar.vue"));
    },
    // MenuBubble: () => import(/* webpackChunkName: "editor-rich" */'./MenuBubble'),
    ReadOnlyEditor: function ReadOnlyEditor() {
      return Promise.all(/*! import() | editor */[__webpack_require__.e("vendors"), __webpack_require__.e("editor")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ReadOnlyEditor */ "./src/components/ReadOnlyEditor.vue"));
    },
    CollisionResolveDialog: function CollisionResolveDialog() {
      return Promise.all(/*! import() | editor */[__webpack_require__.e("vendors"), __webpack_require__.e("editor")]).then(__webpack_require__.bind(__webpack_require__, /*! ./CollisionResolveDialog */ "./src/components/CollisionResolveDialog.vue"));
    },
    // GuestNameDialog: () => import(/* webpackChunkName: "editor-guest" */'./GuestNameDialog'),
    SessionList: function SessionList() {
      return Promise.all(/*! import() | editor-collab */[__webpack_require__.e("vendors"), __webpack_require__.e("editor-collab")]).then(__webpack_require__.bind(__webpack_require__, /*! ./SessionList */ "./src/components/SessionList.vue"));
    }
  },
  directives: {
    Tooltip: (_nextcloud_vue_dist_Directives_Tooltip__WEBPACK_IMPORTED_MODULE_10___default())
  },
  mixins: [_mixins_isMobile__WEBPACK_IMPORTED_MODULE_8__.default, _mixins_store__WEBPACK_IMPORTED_MODULE_9__.default],
  props: {
    initialSession: {
      type: Object,
      default: null
    },
    relativePath: {
      type: String,
      default: ''
    },
    fileId: {
      type: Number,
      default: null
    },
    active: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: true
    },
    shareToken: {
      type: String,
      default: null
    },
    mime: {
      type: String,
      default: null
    },
    autohide: {
      type: Boolean,
      default: false
    },
    isDirectEditing: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      IDLE_TIMEOUT: _services_SyncService__WEBPACK_IMPORTED_MODULE_2__.IDLE_TIMEOUT,
      tiptap: null,

      /** @type {SyncService} */
      syncService: null,
      document: null,
      sessions: [],
      currentSession: null,
      filteredSessions: {},
      idle: false,
      dirty: false,
      initialLoading: false,
      lastSavedString: '',
      syncError: null,
      hasConnectionIssue: false,
      readOnly: true,
      forceRecreate: false,
      saveStatusPolling: null
    };
  },
  computed: {
    showAuthorAnnotations: function showAuthorAnnotations() {
      return this.$store.state.showAuthorAnnotations;
    },
    lastSavedStatus: function lastSavedStatus() {
      return this.dirtyStateIndicator ? t('text', 'Saving …') : t('text', 'Saved');
    },
    lastSavedStatusClass: function lastSavedStatusClass() {
      return this.syncError && this.lastSavedString !== '' ? 'error' : '';
    },
    dirtyStateIndicator: function dirtyStateIndicator() {
      return this.hasUnpushedChanges || this.hasUnsavedChanges;
    },
    lastSavedStatusTooltip: function lastSavedStatusTooltip() {
      var message = t('text', 'Last saved {lastSaved}', {
        lastSaved: this.lastSavedString
      });

      if (this.hasSyncCollission) {
        message = t('text', 'The document has been changed outside of the editor. The changes cannot be applied.');
      }

      if (this.hasUnpushedChanges || this.hasUnsavedChanges) {
        message += ' - ' + t('text', 'Unsaved changes');
      }

      return {
        content: message,
        placement: 'bottom'
      };
    },
    hasSyncCollission: function hasSyncCollission() {
      return this.syncError && this.syncError.type === _services_SyncService__WEBPACK_IMPORTED_MODULE_2__.ERROR_TYPE.SAVE_COLLISSION;
    },
    hasUnpushedChanges: function hasUnpushedChanges() {
      return this.dirty;
    },
    hasUnsavedChanges: function hasUnsavedChanges() {
      return this.document && this.document.lastSavedVersion < this.document.currentVersion;
    },
    backendUrl: function backendUrl() {
      var _this = this;

      return function (endpoint) {
        return (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.endpointUrl)(endpoint, !!_this.shareToken);
      };
    },
    hasDocumentParameters: function hasDocumentParameters() {
      return this.fileId || this.shareToken || this.initialSession;
    },
    isPublic: function isPublic() {
      return this.isDirectEditing || document.getElementById('isPublic') && document.getElementById('isPublic').value === '1';
    },
    isRichEditor: function isRichEditor() {
      return this.mime === 'text/markdown';
    },
    fileExtension: function fileExtension() {
      return this.relativePath ? this.relativePath.split('/').pop().split('.').pop() : 'txt';
    },
    currentDirectory: function currentDirectory() {
      return this.relativePath ? this.relativePath.split('/').slice(0, -1).join('/') : '/';
    }
  },
  watch: {
    lastSavedStatus: function lastSavedStatus() {
      this.$refs.menubar && this.$refs.menubar.redrawMenuBar();
    }
  },
  mounted: function mounted() {
    if (this.active && this.hasDocumentParameters) {
      this.initSession();
    }

    this.$parent.$emit('update:loaded', true);
  },
  created: function created() {
    var _this2 = this;

    this.saveStatusPolling = setInterval(function () {
      _this2.updateLastSavedStatus();
    }, 2000);
  },
  beforeDestroy: function beforeDestroy() {
    this.close();
  },
  methods: {
    close: function close() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                clearInterval(_this3.saveStatusPolling);

                if (!(_this3.currentSession && _this3.syncService)) {
                  _context.next = 11;
                  break;
                }

                _context.prev = 2;
                _context.next = 5;
                return _this3.syncService.close();

              case 5:
                _this3.currentSession = null;
                _this3.syncService = null;
                _context.next = 11;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);

              case 11:
                return _context.abrupt("return", true);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 9]]);
      }))();
    },
    updateLastSavedStatus: function updateLastSavedStatus() {
      if (this.document) {
        this.lastSavedString = _nextcloud_moment__WEBPACK_IMPORTED_MODULE_1___default()(this.document.lastSavedVersionTime * 1000).fromNow();
      }
    },
    initSession: function initSession() {
      var _this4 = this;

      if (!this.hasDocumentParameters) {
        this.$parent.$emit('error', 'No valid file provided');
        return;
      }

      var guestName = localStorage.getItem('nick') ? localStorage.getItem('nick') : (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.getRandomGuestName)();
      this.syncService = new _services_SyncService__WEBPACK_IMPORTED_MODULE_2__.SyncService({
        shareToken: this.shareToken,
        filePath: this.relativePath,
        guestName: guestName,
        forceRecreate: this.forceRecreate,
        serialize: function serialize(document) {
          if (_this4.isRichEditor) {
            var _this4$tiptap$schema = _this4.tiptap.schema,
                nodes = _this4$tiptap$schema.nodes,
                marks = _this4$tiptap$schema.marks;
            return (0,_EditorFactory__WEBPACK_IMPORTED_MODULE_5__.createMarkdownSerializer)(nodes, marks).serialize(document);
          }

          return (0,_EditorFactory__WEBPACK_IMPORTED_MODULE_5__.serializePlainText)(_this4.tiptap);
        }
      }).on('opened', function (_ref) {
        var document = _ref.document,
            session = _ref.session;
        _this4.currentSession = session;
        _this4.document = document;
        _this4.readOnly = document.readOnly;
        localStorage.setItem('nick', _this4.currentSession.guestName);
      }).on('change', function (_ref2) {
        var document = _ref2.document,
            sessions = _ref2.sessions;

        if (_this4.document.baseVersionEtag !== '' && document.baseVersionEtag !== _this4.document.baseVersionEtag) {
          _this4.resolveUseServerVersion();

          return;
        }

        _this4.updateSessions.bind(_this4)(sessions);

        _this4.document = document;
        _this4.syncError = null;

        _this4.tiptap.setOptions({
          editable: !_this4.readOnly
        });
      }).on('loaded', function (_ref3) {
        var documentSource = _ref3.documentSource;
        _this4.hasConnectionIssue = false;
        (0,_EditorFactory__WEBPACK_IMPORTED_MODULE_5__.loadSyntaxHighlight)(_helpers_mappings__WEBPACK_IMPORTED_MODULE_4__.extensionHighlight[_this4.fileExtension] ? _helpers_mappings__WEBPACK_IMPORTED_MODULE_4__.extensionHighlight[_this4.fileExtension] : _this4.fileExtension).then(function (languages) {
          _this4.tiptap = (0,_EditorFactory__WEBPACK_IMPORTED_MODULE_5__.createEditor)({
            content: _this4.isRichEditor ? _EditorFactory__WEBPACK_IMPORTED_MODULE_5__.markdownit.render(documentSource) : '<pre>' + escape_html__WEBPACK_IMPORTED_MODULE_0___default()(documentSource) + '</pre>',
            onCreate: function onCreate(_ref4) {
              var editor = _ref4.editor;
              _this4.syncService.state = editor.state;

              _this4.syncService.startSync();
            },
            onUpdate: function onUpdate(_ref5) {
              var editor = _ref5.editor;
              _this4.syncService.state = editor.state;
            },
            extensions: [_extensions__WEBPACK_IMPORTED_MODULE_7__.Collaboration.configure({
              // the initial version we start with
              // version is an integer which is incremented with every change
              version: _this4.document.initialVersion,
              clientID: _this4.currentSession.id,
              // debounce changes so we can save some bandwidth
              debounce: EDITOR_PUSH_DEBOUNCE,
              onSendable: function onSendable(_ref6) {
                var sendable = _ref6.sendable;

                if (_this4.syncService) {
                  _this4.syncService.sendSteps();
                }
              },
              update: function update(_ref7) {
                var steps = _ref7.steps,
                    version = _ref7.version,
                    editor = _ref7.editor;
                var state = editor.state,
                    view = editor.view,
                    schema = editor.schema;

                if ((0,prosemirror_collab__WEBPACK_IMPORTED_MODULE_11__.getVersion)(state) > version) {
                  return;
                }

                var tr = (0,prosemirror_collab__WEBPACK_IMPORTED_MODULE_11__.receiveTransaction)(state, steps.map(function (item) {
                  return prosemirror_transform__WEBPACK_IMPORTED_MODULE_12__.Step.fromJSON(schema, item.step);
                }), steps.map(function (item) {
                  return item.clientID;
                }));
                tr.setMeta('clientID', steps.map(function (item) {
                  return item.clientID;
                }));
                view.dispatch(tr);
              }
            }), _extensions__WEBPACK_IMPORTED_MODULE_7__.Keymap.configure({
              'Mod-s': function ModS() {
                _this4.syncService.save();

                return true;
              }
            })],

            /* TODO: bring back our extensions
            	new UserColor({
            		clientID: this.currentSession.id,
            		color: (clientID) => {
            			const session = this.sessions.find(item => '' + item.id === '' + clientID)
            			return session?.color
            		},
            		name: (clientID) => {
            			const session = this.sessions.find(item => '' + item.id === '' + clientID)
            			return session?.userId ? session.userId : session?.guestName
            		},
            	}),
            	new Emoji(),
            ],
            */
            enableRichEditing: _this4.isRichEditor,
            languages: languages,
            currentDirectory: _this4.currentDirectory
          });

          _this4.tiptap.on('focus', function () {
            _this4.$emit('focus');
          });

          _this4.tiptap.on('blur', function () {
            _this4.$emit('blur');
          });

          _this4.syncService.state = _this4.tiptap.state;
        });
      }).on('sync', function (_ref8) {
        var steps = _ref8.steps,
            document = _ref8.document;
        _this4.hasConnectionIssue = false;

        try {
          var collaboration = _this4.tiptap.extensionManager.extensions.find(function (e) {
            return e.name === 'collaboration';
          });

          collaboration.options.update({
            version: document.currentVersion,
            steps: steps,
            editor: _this4.tiptap
          });
          _this4.syncService.state = _this4.tiptap.state;

          _this4.updateLastSavedStatus();
        } catch (e) {
          console.error('Failed to update steps in collaboration plugin', e); // TODO: we should recreate the editing session when this happens
        }

        _this4.document = document;
      }).on('error', function (error, data) {
        _this4.tiptap.setOptions({
          editable: false
        });

        if (error === _services_SyncService__WEBPACK_IMPORTED_MODULE_2__.ERROR_TYPE.SAVE_COLLISSION && (!_this4.syncError || _this4.syncError.type !== _services_SyncService__WEBPACK_IMPORTED_MODULE_2__.ERROR_TYPE.SAVE_COLLISSION)) {
          _this4.initialLoading = true;
          _this4.syncError = {
            type: error,
            data: data
          };
        }

        if (error === _services_SyncService__WEBPACK_IMPORTED_MODULE_2__.ERROR_TYPE.CONNECTION_FAILED && !_this4.hasConnectionIssue) {
          _this4.hasConnectionIssue = true; // FIXME: ideally we just try to reconnect in the service, so we don't loose steps

          OC.Notification.showTemporary('Connection failed, reconnecting');

          if (data.retry !== false) {
            setTimeout(_this4.reconnect.bind(_this4), 5000);
          }
        }

        if (error === _services_SyncService__WEBPACK_IMPORTED_MODULE_2__.ERROR_TYPE.SOURCE_NOT_FOUND) {
          _this4.hasConnectionIssue = true;
        }

        _this4.$emit('ready');
      }).on('stateChange', function (state) {
        if (state.initialLoading && !_this4.initialLoading) {
          _this4.initialLoading = true;

          if (_this4.autofocus) {
            _this4.tiptap.focus('start');
          }

          _this4.$emit('ready');

          _this4.$parent.$emit('ready', true);
        }

        if (Object.prototype.hasOwnProperty.call(state, 'dirty')) {
          _this4.dirty = state.dirty;
        }
      }).on('idle', function () {
        _this4.syncService.close();

        _this4.idle = true;
        _this4.readOnly = true;

        _this4.tiptap.setOptions({
          editable: !_this4.readOnly
        });
      });

      if (this.initialSession === null) {
        this.syncService.open({
          fileId: this.fileId,
          filePath: this.relativePath
        }).catch(function (e) {
          _this4.hasConnectionIssue = true;
        });
      } else {
        this.syncService.open({
          initialSession: this.initialSession
        }).catch(function (e) {
          _this4.hasConnectionIssue = true;
        });
      }

      this.forceRecreate = false;
    },
    resolveUseThisVersion: function resolveUseThisVersion() {
      this.syncService.forceSave();
      this.tiptap.setOptions({
        editable: !this.readOnly
      });
    },
    resolveUseServerVersion: function resolveUseServerVersion() {
      this.forceRecreate = true;
      this.reconnect();
    },
    reconnect: function reconnect() {
      var _this5 = this;

      this.initialLoading = false;
      this.hasConnectionIssue = false;

      if (this.syncService) {
        this.syncService.close().then(function () {
          _this5.syncService = null;

          _this5.tiptap.destroy();

          _this5.initSession();
        }).catch(function (e) {// Ignore issues closing the session since those might happen due to network issues
        });
      } else {
        this.syncService = null;
        this.tiptap.destroy();
        this.initSession();
      }

      this.idle = false;
    },
    updateSessions: function updateSessions(sessions) {
      var _this6 = this;

      this.sessions = sessions.sort(function (a, b) {
        return b.lastContact - a.lastContact;
      }); // Make sure we get our own session updated
      // This should ideally be part of a global store where we can have that updated on the actual name change for guests

      var currentUpdatedSession = this.sessions.find(function (session) {
        return session.id === _this6.currentSession.id;
      });
      vue__WEBPACK_IMPORTED_MODULE_13__.default.set(this, 'currentSession', currentUpdatedSession);
      var currentSessionIds = this.sessions.map(function (session) {
        return session.userId;
      });
      var currentGuestIds = this.sessions.map(function (session) {
        return session.guestId;
      });
      var removedSessions = Object.keys(this.filteredSessions).filter(function (sessionId) {
        return !currentSessionIds.includes(sessionId) && !currentGuestIds.includes(sessionId);
      });

      for (var index in removedSessions) {
        vue__WEBPACK_IMPORTED_MODULE_13__.default.delete(this.filteredSessions, removedSessions[index]);
      }

      for (var _index in this.sessions) {
        var session = this.sessions[_index];
        var sessionKey = session.displayName ? session.userId : session.id;

        if (this.filteredSessions[sessionKey]) {
          // update timestamp if relevant
          if (this.filteredSessions[sessionKey].lastContact < session.lastContact) {
            vue__WEBPACK_IMPORTED_MODULE_13__.default.set(this.filteredSessions[sessionKey], 'lastContact', session.lastContact);
          }
        } else {
          vue__WEBPACK_IMPORTED_MODULE_13__.default.set(this.filteredSessions, sessionKey, session);
        }

        if (session.id === this.currentSession.id) {
          vue__WEBPACK_IMPORTED_MODULE_13__.default.set(this.filteredSessions[sessionKey], 'isCurrent', true);
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiptap_vue_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/vue-2 */ "./node_modules/@tiptap/vue-2/dist/tiptap-vue-2.esm.js");
/* harmony import */ var escape_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! escape-html */ "./node_modules/escape-html/index.js");
/* harmony import */ var escape_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(escape_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _EditorFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../EditorFactory */ "./src/EditorFactory.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ReadOnlyEditor',
  components: {
    EditorContent: _tiptap_vue_2__WEBPACK_IMPORTED_MODULE_0__.EditorContent
  },
  props: {
    content: {
      type: String,
      required: true
    },
    isRichEditor: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      editor: null
    };
  },
  mounted: function mounted() {
    this.editor = (0,_EditorFactory__WEBPACK_IMPORTED_MODULE_2__.createEditor)({
      content: this.isRichEditor ? _EditorFactory__WEBPACK_IMPORTED_MODULE_2__.markdownit.render(this.content) : '<pre>' + escape_html__WEBPACK_IMPORTED_MODULE_1___default()(this.content) + '</pre>',
      enableRichEditing: this.isRichEditor
    });
    this.editor.setOptions({
      editable: false
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.editor.destroy();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/DirectEditing.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/DirectEditing.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _components_EditorWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/EditorWrapper */ "./src/components/EditorWrapper.vue");
/* provided dependency */ var console = __webpack_require__(/*! console-browserify */ "./node_modules/console-browserify/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var log = vue__WEBPACK_IMPORTED_MODULE_1__.default.observable({
  messages: [],
  mtime: 0
});

var callMobileMessage = function callMobileMessage(messageName, attributes) {
  console.debug('callMobileMessage ' + messageName, attributes);
  var message = messageName;

  if (typeof attributes !== 'undefined') {
    message = {
      MessageName: messageName,
      Values: attributes
    };
  }

  var attributesString = null;

  try {
    attributesString = JSON.stringify(attributes);
  } catch (e) {
    attributesString = null;
  } // Forward to mobile handler


  if (window.DirectEditingMobileInterface && typeof window.DirectEditingMobileInterface[messageName] === 'function') {
    if (attributesString === null || typeof attributesString === 'undefined') {
      window.DirectEditingMobileInterface[messageName]();
    } else {
      window.DirectEditingMobileInterface[messageName](attributesString);
    }
  } // iOS webkit fallback


  if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.DirectEditingMobileInterface) {
    window.webkit.messageHandlers.DirectEditingMobileInterface.postMessage(message);
  }

  window.postMessage(message);
};

window.addEventListener('message', function (message) {
  log.messages.push(message.data);
  console.debug('postMessage', message);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DirectEditing',
  components: {
    EditorWrapper: _components_EditorWrapper__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      initial: OCP.InitialState.loadState('text', 'file'),
      messages: log.messages,
      log: log,
      saving: false
    };
  },
  computed: {
    initialSession: function initialSession() {
      return JSON.parse(this.initial.session) || null;
    }
  },
  beforeMount: function beforeMount() {
    callMobileMessage('loading');
  },
  mounted: function mounted() {
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
  },
  methods: {
    close: function close() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.saving = true;
                setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return _this.$refs.editor.close();

                        case 2:
                          callMobileMessage('close');

                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                })), 0);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    share: function share() {
      callMobileMessage('share');
    },
    loaded: function loaded() {
      callMobileMessage('loaded');
    }
  }
});

/***/ }),

/***/ "./src/EditorFactory.js":
/*!******************************!*\
  !*** ./src/EditorFactory.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "markdownit": () => (/* binding */ markdownit),
/* harmony export */   "createEditor": () => (/* binding */ createEditor),
/* harmony export */   "createMarkdownSerializer": () => (/* binding */ createMarkdownSerializer),
/* harmony export */   "serializePlainText": () => (/* binding */ serializePlainText),
/* harmony export */   "loadSyntaxHighlight": () => (/* binding */ loadSyntaxHighlight)
/* harmony export */ });
/* harmony import */ var _tiptap_extension_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/extension-document */ "./node_modules/@tiptap/extension-document/dist/tiptap-extension-document.esm.js");
/* harmony import */ var _tiptap_extension_paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tiptap/extension-paragraph */ "./node_modules/@tiptap/extension-paragraph/dist/tiptap-extension-paragraph.esm.js");
/* harmony import */ var _tiptap_extension_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tiptap/extension-text */ "./node_modules/@tiptap/extension-text/dist/tiptap-extension-text.esm.js");
/* harmony import */ var _tiptap_extension_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tiptap/extension-heading */ "./node_modules/@tiptap/extension-heading/dist/tiptap-extension-heading.esm.js");
/* harmony import */ var _tiptap_extension_history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tiptap/extension-history */ "./node_modules/@tiptap/extension-history/dist/tiptap-extension-history.esm.js");
/* harmony import */ var _tiptap_extension_blockquote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tiptap/extension-blockquote */ "./node_modules/@tiptap/extension-blockquote/dist/tiptap-extension-blockquote.esm.js");
/* harmony import */ var _tiptap_extension_code_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tiptap/extension-code-block */ "./node_modules/@tiptap/extension-code-block/dist/tiptap-extension-code-block.esm.js");
/* harmony import */ var _tiptap_extension_placeholder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tiptap/extension-placeholder */ "./node_modules/@tiptap/extension-placeholder/dist/tiptap-extension-placeholder.esm.js");
/* harmony import */ var _tiptap_extension_ordered_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tiptap/extension-ordered-list */ "./node_modules/@tiptap/extension-ordered-list/dist/tiptap-extension-ordered-list.esm.js");
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/tiptap-core.esm.js");
/* harmony import */ var _marks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./marks */ "./src/marks/index.js");
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nodes */ "./src/nodes/index.js");
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js");
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var markdown_it_task_lists__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! markdown-it-task-lists */ "./node_modules/markdown-it-task-lists/index.js");
/* harmony import */ var markdown_it_task_lists__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(markdown_it_task_lists__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.js");
/* harmony import */ var proxy_polyfill__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! proxy-polyfill */ "./node_modules/proxy-polyfill/src/index.js");
/* harmony import */ var proxy_polyfill__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(proxy_polyfill__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var prosemirror_markdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prosemirror-markdown */ "./node_modules/prosemirror-markdown/dist/index.es.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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











 // import { Image, PlainTextDocument, ListItem, BulletList } from './nodes'







var loadSyntaxHighlight = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(language) {
    var languages, modules, i, lang;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            languages = [language];
            modules = {};
            i = 0;

          case 3:
            if (!(i < languages.length)) {
              _context.next = 17;
              break;
            }

            _context.prev = 4;
            _context.next = 7;
            return __webpack_require__("./node_modules/highlight.js/lib/languages lazy recursive ^\\.\\/.*$")("./" + languages[i]);

          case 7:
            lang = _context.sent;
            modules[languages[i]] = lang.default;
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](4);
            return _context.abrupt("return", undefined);

          case 14:
            i++;
            _context.next = 3;
            break;

          case 17:
            if (!(Object.keys(modules).length === 0 && modules.constructor === Object)) {
              _context.next = 19;
              break;
            }

            return _context.abrupt("return", undefined);

          case 19:
            return _context.abrupt("return", {
              languages: modules
            });

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 11]]);
  }));

  return function loadSyntaxHighlight(_x) {
    return _ref.apply(this, arguments);
  };
}();

var createEditor = function createEditor(_ref2) {
  var content = _ref2.content,
      onCreate = _ref2.onCreate,
      onUpdate = _ref2.onUpdate,
      extensions = _ref2.extensions,
      enableRichEditing = _ref2.enableRichEditing,
      languages = _ref2.languages,
      currentDirectory = _ref2.currentDirectory;
  var richEditingExtensions = [];

  if (enableRichEditing) {
    richEditingExtensions = [_tiptap_extension_heading__WEBPACK_IMPORTED_MODULE_3__.default, _marks__WEBPACK_IMPORTED_MODULE_10__.Strong, _marks__WEBPACK_IMPORTED_MODULE_10__.Italic, _marks__WEBPACK_IMPORTED_MODULE_10__.Strike, _marks__WEBPACK_IMPORTED_MODULE_10__.Link.configure({
      openOnClick: true
    }), _tiptap_extension_blockquote__WEBPACK_IMPORTED_MODULE_5__.default, _tiptap_extension_code_block__WEBPACK_IMPORTED_MODULE_6__.default.extend({
      name: 'code_block'
    }), _tiptap_extension_ordered_list__WEBPACK_IMPORTED_MODULE_8__.default.extend({
      name: 'ordered_list',
      content: 'list_item+',
      addCommands: function addCommands() {
        var _this = this;

        return {
          toggleOrderedList: function toggleOrderedList() {
            return function (_ref3) {
              var commands = _ref3.commands;
              return commands.toggleList(_this.name, 'list_item');
            };
          }
        };
      }
    }), _nodes__WEBPACK_IMPORTED_MODULE_11__.BulletList, _nodes__WEBPACK_IMPORTED_MODULE_11__.ListItem,
    /*
    new Image({ currentDirectory }),
    */
    _tiptap_extension_placeholder__WEBPACK_IMPORTED_MODULE_7__.default.configure({
      emptyNodeClass: 'is-empty',
      placeholder: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_14__.translate)('text', 'Add notes, lists or links …'),
      showOnlyWhenEditable: true
    }) // TODO: replace this
    // https://github.com/ueberdosis/tiptap/tree/main/demos/src/Experiments/TrailingNode
    // new TrailingNode({ node: 'paragraph', notAfter: ['paragraph'], }),
    ];
  } else {
    richEditingExtensions = [// disable our custom extensions for now
      // PlainTextDocument,
      // FIXME: Do we want to use CodeBlockLowlight instead?
      // new CodeBlockHighlight({ ...languages, }),
    ];
  }

  extensions = extensions || [];
  return new _tiptap_core__WEBPACK_IMPORTED_MODULE_9__.Editor({
    content: content,
    onCreate: onCreate,
    onUpdate: onUpdate,
    extensions: [_tiptap_extension_document__WEBPACK_IMPORTED_MODULE_0__.default, _tiptap_extension_paragraph__WEBPACK_IMPORTED_MODULE_1__.default, _tiptap_extension_text__WEBPACK_IMPORTED_MODULE_2__.default, _tiptap_extension_history__WEBPACK_IMPORTED_MODULE_4__.default].concat(_toConsumableArray(richEditingExtensions)).concat(extensions)
  });
};

var markdownit = markdown_it__WEBPACK_IMPORTED_MODULE_12___default()('commonmark', {
  html: false,
  breaks: false
}).enable('strikethrough').use((markdown_it_task_lists__WEBPACK_IMPORTED_MODULE_13___default()), {
  enable: true,
  labelAfter: true
});

var SerializeException = function SerializeException(message) {
  this.message = message;
};

var createMarkdownSerializer = function createMarkdownSerializer(_nodes, _marks) {
  var nodes = Object.entries(_nodes).filter(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        node = _ref5[1];

    return node.toMarkdown;
  }).reduce(function (items, _ref6) {
    var _ref7 = _slicedToArray(_ref6, 2),
        name = _ref7[0],
        toMarkdown = _ref7[1].toMarkdown;

    return _objectSpread(_objectSpread({}, items), {}, _defineProperty({}, name, toMarkdown));
  }, {});
  var marks = Object.entries(_marks).filter(function (_ref8) {
    var _ref9 = _slicedToArray(_ref8, 2),
        node = _ref9[1];

    return node.toMarkdown;
  }).reduce(function (items, _ref10) {
    var _ref11 = _slicedToArray(_ref10, 2),
        name = _ref11[0],
        toMarkdown = _ref11[1].toMarkdown;

    return _objectSpread(_objectSpread({}, items), {}, _defineProperty({}, name, toMarkdown));
  }, {});
  return {
    serializer: new prosemirror_markdown__WEBPACK_IMPORTED_MODULE_16__.MarkdownSerializer(_objectSpread(_objectSpread({}, prosemirror_markdown__WEBPACK_IMPORTED_MODULE_16__.defaultMarkdownSerializer.nodes), nodes), _objectSpread(_objectSpread({}, prosemirror_markdown__WEBPACK_IMPORTED_MODULE_16__.defaultMarkdownSerializer.marks), marks)),
    serialize: function serialize(content, options) {
      return this.serializer.serialize(content, _objectSpread(_objectSpread({}, options), {}, {
        tightLists: true
      })).split('\\[').join('[').split('\\]').join(']');
    }
  };
};

var serializePlainText = function serializePlainText(tiptap) {
  var doc = tiptap.getJSON();

  if (doc.content.length !== 1 || typeof doc.content[0].content === 'undefined' || doc.content[0].content.length !== 1) {
    if (doc.content[0].type === 'code_block' && typeof doc.content[0].content === 'undefined') {
      return '';
    }

    throw new SerializeException('Failed to serialize document to plain text');
  }

  var codeBlock = doc.content[0].content[0];

  if (codeBlock.type !== 'text') {
    throw new SerializeException('Failed to serialize document to plain text');
  }

  return codeBlock.text;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEditor);


/***/ }),

/***/ "./src/commands/index.js":
/*!*******************************!*\
  !*** ./src/commands/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listInputRule": () => (/* reexport safe */ _listInputRule__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _listInputRule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listInputRule */ "./src/commands/listInputRule.js");
/*
 * @copyright Copyright (c) 2021 Jonas Meurer <jonas@freesources.org>
 *
 * @author Jonas Meurer <jonas@freesources.org>
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



/***/ }),

/***/ "./src/commands/listInputRule.js":
/*!***************************************!*\
  !*** ./src/commands/listInputRule.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/tiptap-core.esm.js");
/*
 * @copyright Copyright (c) 2021 Jonas Meurer <jonas@freesources.org>
 *
 * @author Jonas Meurer <jonas@freesources.org>
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

/**
 * Wrapping input handler that will append the content of the last match
 *
 * @param {RegExp} find find param for the wrapping input rule
 * @param {object} type Node Type object
 * @param {*} getAttributes handler to get the attributes
 */

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(find, type, getAttributes) {
  var handler = function handler(_ref) {
    var state = _ref.state,
        range = _ref.range,
        match = _ref.match;
    var wrap = (0,_tiptap_core__WEBPACK_IMPORTED_MODULE_0__.wrappingInputRule)({
      find: find,
      type: type,
      getAttributes: getAttributes
    });
    wrap.handler({
      state: state,
      range: range,
      match: match
    }); // Insert the first character after bullet if there is one

    if (match.length >= 3) {
      state.tr.insertText(match[2]);
    }
  };

  return new _tiptap_core__WEBPACK_IMPORTED_MODULE_0__.InputRule({
    find: find,
    handler: handler
  });
}

/***/ }),

/***/ "./src/extensions/Collaboration.js":
/*!*****************************************!*\
  !*** ./src/extensions/Collaboration.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/tiptap-core.esm.js");
/* harmony import */ var prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-transform */ "./node_modules/prosemirror-transform/dist/index.es.js");
/* harmony import */ var prosemirror_collab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prosemirror-collab */ "./node_modules/prosemirror-collab/dist/index.es.js");



var timeout;

var debounce = function debounce(fn, delay) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(function () {
      fn.apply(void 0, args);
      timeout = null;
    }, delay);
  };
};

var Collaboration = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__.Extension.create({
  name: 'collaboration',
  onCreate: function onCreate() {
    var _this = this;

    this.getSendableSteps = debounce(function (state) {
      var sendable = (0,prosemirror_collab__WEBPACK_IMPORTED_MODULE_2__.sendableSteps)(state);

      if (sendable) {
        _this.options.onSendable({
          editor: _this.editor,
          sendable: {
            version: sendable.version,
            steps: sendable.steps.map(function (step) {
              return step.toJSON();
            }),
            clientID: sendable.clientID
          }
        });
      }
    }, this.options.debounce);
    this.editor.on('transaction', function (_ref) {
      var editor = _ref.editor;

      _this.getSendableSteps(editor.state);
    });
  },
  addOptions: function addOptions() {
    var _this2 = this;

    return {
      version: 0,
      clientID: Math.floor(Math.random() * 0xFFFFFFFF),
      debounce: 250,
      onSendable: function onSendable() {},
      update: function update(_ref2) {
        var steps = _ref2.steps,
            version = _ref2.version;
        var _this2$editor = _this2.editor,
            state = _this2$editor.state,
            view = _this2$editor.view,
            schema = _this2$editor.schema;

        if ((0,prosemirror_collab__WEBPACK_IMPORTED_MODULE_2__.getVersion)(state) > version) {
          return;
        }

        view.dispatch((0,prosemirror_collab__WEBPACK_IMPORTED_MODULE_2__.receiveTransaction)(state, steps.map(function (item) {
          return prosemirror_transform__WEBPACK_IMPORTED_MODULE_1__.Step.fromJSON(schema, item.step);
        }), steps.map(function (item) {
          return item.clientID;
        })));
      }
    };
  },
  addProseMirrorPlugins: function addProseMirrorPlugins() {
    return [(0,prosemirror_collab__WEBPACK_IMPORTED_MODULE_2__.collab)({
      version: this.options.version,
      clientID: this.options.clientID
    })];
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collaboration);

/***/ }),

/***/ "./src/extensions/Keymap.js":
/*!**********************************!*\
  !*** ./src/extensions/Keymap.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/tiptap-core.esm.js");
/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-state */ "./node_modules/prosemirror-state/dist/index.es.js");
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


var Keymap = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__.Extension.create({
  name: 'customkeymap',
  addKeyboardShortcuts: function addKeyboardShortcuts() {
    return this.options;
  },
  addProseMirrorPlugins: function addProseMirrorPlugins() {
    return [new prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.Plugin({
      props: {
        handleKeyDown: function handleKeyDown(view, event) {
          var key = event.key || event.keyCode;

          if ((event.ctrlKey || event.metaKey) && !event.shiftKey && (key === 'f' || key === 70)) {
            // We need to stop propagation and dispatch the event on the window
            // in order to force triggering the browser native search in the text editor
            event.stopPropagation();
            window.dispatchEvent(event);
            return true;
          }
        }
      }
    })];
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Keymap);

/***/ }),

/***/ "./src/extensions/index.js":
/*!*********************************!*\
  !*** ./src/extensions/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Keymap": () => (/* reexport safe */ _Keymap__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "Collaboration": () => (/* reexport safe */ _Collaboration__WEBPACK_IMPORTED_MODULE_1__.default)
/* harmony export */ });
/* harmony import */ var _Keymap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Keymap */ "./src/extensions/Keymap.js");
/* harmony import */ var _Collaboration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collaboration */ "./src/extensions/Collaboration.js");
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
// import Emoji from './Emoji'
 // import UserColor from './UserColor'




/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "documentReady": () => (/* binding */ documentReady),
/* harmony export */   "endpointUrl": () => (/* binding */ endpointUrl),
/* harmony export */   "getRandomGuestName": () => (/* binding */ getRandomGuestName)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
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

/**
 * Callback that should be executed after the document is ready
 *
 * @param callback
 */


var documentReady = function documentReady(callback) {
  var fn = function fn() {
    return setTimeout(callback, 0);
  };

  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
};

var _baseUrl = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)('/apps/text');

var endpointUrl = function endpointUrl(endpoint) {
  var isPublic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (isPublic) {
    return "".concat(_baseUrl, "/public/").concat(endpoint);
  }

  return "".concat(_baseUrl, "/").concat(endpoint);
};

var randomGuestNames = ['Artichoke', 'Arugula', 'Asparagus', 'Avocado', 'Bamboo Shoot', 'Bean Sprout', 'Bean', 'Beet', 'Belgian Endive', 'Bell Pepper', 'Bitter Melon', 'Bitter Gourd', 'Bok Choy', 'Broccoli', 'Brussels Sprout', 'Burdock Root', 'Cabbage', 'Calabash', 'Caper', 'Carrot', 'Cassava', 'Cauliflower', 'Celery', 'Celery Root', 'Celtuce', 'Chayote', 'Chinese Broccoli', 'Corn', 'Baby Corn', 'Cucumber', 'English Cucumber', 'Gherkin', 'Pickling Cucumber', 'Daikon Radish', 'Edamame', 'Eggplant', 'Elephant Garlic', 'Endive', 'Curly', 'Escarole', 'Fennel', 'Fiddlehead', 'Galangal', 'Garlic', 'Ginger', 'Grape Leave', 'Green Bean', 'Wax Bean', 'Green', 'Amaranth Leave', 'Beet Green', 'Collard Green', 'Dandelion Green', 'Kale', 'Kohlrabi Green', 'Mustard Green', 'Rapini', 'Spinach', 'Swiss Chard', 'Turnip Green', 'Hearts of Palm', 'Horseradish', 'Jerusalem Artichoke', 'Jícama', 'Kale', 'Curly', 'Lacinato', 'Ornamental', 'Kohlrabi', 'Leeks', 'Lemongrass', 'Lettuce', 'Butterhead', 'Iceberg', 'Leaf', 'Romaine', 'Lotus Root', 'Lotus Seed', 'Mushroom', 'Napa Cabbage', 'Nopales', 'Okra', 'Olive', 'Onion', 'Green Onion', 'Parsley', 'Parsley Root', 'Parsnip', 'Pepper', 'Plantain', 'Potato', 'Pumpkin', 'Purslane', 'Radicchio', 'Radish', 'Rutabaga', 'Shallots', 'Spinach', 'Squash', 'Sweet Potato', 'Swiss Chard', 'Taro', 'Tomatillo', 'Tomato', 'Turnip', 'Water Chestnut', 'Water Spinach', 'Watercress', 'Winter Melon', 'Yams', 'Zucchini'];

var getRandomGuestName = function getRandomGuestName() {
  return randomGuestNames[Math.floor(Math.random() * randomGuestNames.length)];
};



/***/ }),

/***/ "./src/helpers/links.js":
/*!******************************!*\
  !*** ./src/helpers/links.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domHref": () => (/* binding */ domHref),
/* harmony export */   "parseHref": () => (/* binding */ parseHref)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @copyright Copyright (c) 2020 Azul <azul@riseup.net>
 *
 * @author Azul <azul@riseup.net>
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


var absolutePath = function absolutePath(base, rel) {
  if (!rel) {
    return base;
  }

  if (rel[0] === '/') {
    return rel;
  }

  base = base.split('/');
  rel = rel.split('/');

  while (rel[0] === '..' || rel[0] === '.') {
    if (rel[0] === '..') {
      base.pop();
    }

    rel.shift();
  }

  return base.concat(rel).join('/');
};

var basedir = function basedir(file) {
  var end = file.lastIndexOf('/');
  return end > 0 ? file.slice(0, end) : file.slice(0, end + 1); // basedir('/toplevel') should return '/'
};

var domHref = function domHref(node) {
  var ref = node.attrs.href;

  if (!ref) {
    return ref;
  }

  if (ref.match(/^[a-zA-Z]*:/)) {
    return ref;
  }

  var match = ref.match(/^([^?]*)\?fileId=(\d+)/);

  if (match) {
    var _match = _slicedToArray(match, 3),
        relPath = _match[1],
        id = _match[2];

    var currentDir = basedir(OCA.Viewer.file);
    var dir = absolutePath(currentDir, basedir(relPath));
    return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)("/apps/files/?dir=".concat(dir, "&openfile=").concat(id, "#relPath=").concat(relPath));
  }
};

var parseHref = function parseHref(dom) {
  var ref = dom.getAttribute('href');

  if (!ref) {
    return ref;
  }

  var match = ref.match(/\?dir=([^&]*)&openfile=([^&]*)#relPath=([^&]*)/);

  if (match) {
    var _match2 = _slicedToArray(match, 4),
        id = _match2[2],
        path = _match2[3];

    return "".concat(path, "?fileId=").concat(id);
  }

  return ref;
};



/***/ }),

/***/ "./src/helpers/mappings.js":
/*!*********************************!*\
  !*** ./src/helpers/mappings.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "extensionHighlight": () => (/* binding */ extensionHighlight)
/* harmony export */ });
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
var extensionHighlight = {
  py: 'python',
  gyp: 'python',
  wsgi: 'python',
  htm: 'html',
  xhtml: 'html',
  erl: 'erlang',
  jsp: 'java',
  pl: 'perl',
  rss: 'xml',
  atom: 'xml',
  xsl: 'xml',
  plist: 'xml',
  rb: 'ruby',
  builder: 'ruby',
  gemspec: 'ruby',
  podspec: 'ruby',
  thor: 'ruby',
  diff: 'patch',
  hs: 'haskell',
  icl: 'haskell',
  php3: 'php',
  php4: 'php',
  php5: 'php',
  php6: 'php',
  sh: 'bash',
  zsh: 'bash',
  st: 'smalltalk',
  as: 'actionscript',
  apacheconf: 'apache',
  osacript: 'applescript',
  b: 'brainfuck',
  bf: 'brainfuck',
  clj: 'clojure',
  'cmake.in': 'cmake',
  coffee: 'coffeescript',
  cson: 'coffescript',
  iced: 'coffescript',
  c: 'cpp',
  h: 'cpp',
  'c++': 'cpp',
  'h++': 'cpp',
  hh: 'cpp',
  jinja: 'django',
  bat: 'dos',
  cmd: 'dos',
  fs: 'fsharp',
  hbs: 'handlebars',
  'html.hbs': 'handlebars',
  'html.handlebars': 'handlebars',
  sublime_metrics: 'json',
  sublime_session: 'json',
  'sublime-keymap': 'json',
  'sublime-mousemap': 'json',
  'sublime-project': 'json',
  'sublime-settings': 'json',
  'sublime-workspace': 'json',
  mk: 'makefile',
  mak: 'makefile',
  md: 'markdown',
  mkdown: 'markdown',
  mkd: 'markdown',
  nginxconf: 'nginx',
  m: 'objectivec',
  mm: 'objectivec',
  ml: 'ocaml',
  rs: 'rust',
  sci: 'scilab',
  vb: 'vbnet',
  vbs: 'vbscript'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extensionHighlight);


/***/ }),

/***/ "./src/marks/Link.js":
/*!***************************!*\
  !*** ./src/marks/Link.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiptap_extension_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/extension-link */ "./node_modules/@tiptap/extension-link/dist/tiptap-extension-link.esm.js");
/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prosemirror-state */ "./node_modules/prosemirror-state/dist/index.es.js");
/* harmony import */ var _helpers_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helpers/links */ "./src/helpers/links.js");
/* harmony import */ var _EditorFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../EditorFactory */ "./src/EditorFactory.js");
/* provided dependency */ var console = __webpack_require__(/*! console-browserify */ "./node_modules/console-browserify/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @copyright Copyright (c) 2019 Azul <azul@riseup.net>
 *
 * @author Azul <azul@riseup.net>
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




var Link = _tiptap_extension_link__WEBPACK_IMPORTED_MODULE_0__.default.extend({
  attrs: {
    href: {
      default: null
    }
  },
  inclusive: false,
  parseDOM: [{
    tag: 'a[href]',
    getAttrs: function getAttrs(dom) {
      return {
        href: (0,_helpers_links__WEBPACK_IMPORTED_MODULE_2__.parseHref)(dom)
      };
    }
  }],
  toDOM: function toDOM(node) {
    return ['a', _objectSpread(_objectSpread({}, node.attrs), {}, {
      href: (0,_helpers_links__WEBPACK_IMPORTED_MODULE_2__.domHref)(node),
      title: node.attrs.href,
      rel: 'noopener noreferrer nofollow'
    }), 0];
  },
  addProseMirrorPlugins: function addProseMirrorPlugins() {
    var _this = this;

    if (!this.options.openOnClick) {
      return [];
    }

    return [new prosemirror_state__WEBPACK_IMPORTED_MODULE_1__.Plugin({
      props: {
        handleClick: function handleClick(view, pos, event) {
          var attrs = _this.editor.getAttributes('link');

          var isLink = event.target instanceof HTMLAnchorElement || event.target.parentElement instanceof HTMLAnchorElement;

          if (attrs.href && isLink) {
            var linkElement = event.target.parentElement instanceof HTMLAnchorElement ? event.target.parentElement : event.target;
            event.stopPropagation();
            var htmlHref = linkElement.href;

            if (event.button === 0 && !event.ctrlKey && htmlHref.startsWith(window.location.origin)) {
              var query = OC.parseQueryString(htmlHref);
              var fragment = OC.parseQueryString(htmlHref.split('#').pop());

              if (query.dir && fragment.relPath) {
                var filename = fragment.relPath.split('/').pop();
                var path = "".concat(query.dir, "/").concat(filename);
                document.title = "".concat(filename, " - ").concat(OC.theme.title);

                if (window.location.pathname.match(/apps\/files\/$/)) {// The files app still lacks a popState handler
                  // to allow for using the back button
                  // OC.Util.History.pushState('', htmlHref)
                }

                OCA.Viewer.open({
                  path: path
                });
                return;
              }
            }

            if (!_EditorFactory__WEBPACK_IMPORTED_MODULE_3__.markdownit.validateLink(htmlHref)) {
              console.error('Invalid link', htmlHref);
              return;
            }

            window.open(htmlHref);
          }
        }
      }
    })];
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);

/***/ }),

/***/ "./src/marks/index.js":
/*!****************************!*\
  !*** ./src/marks/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Strong": () => (/* binding */ Strong),
/* harmony export */   "Italic": () => (/* binding */ Italic),
/* harmony export */   "Strike": () => (/* binding */ Strike),
/* harmony export */   "Link": () => (/* reexport safe */ _Link__WEBPACK_IMPORTED_MODULE_3__.default)
/* harmony export */ });
/* harmony import */ var _tiptap_extension_bold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/extension-bold */ "./node_modules/@tiptap/extension-bold/dist/tiptap-extension-bold.esm.js");
/* harmony import */ var _tiptap_extension_italic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tiptap/extension-italic */ "./node_modules/@tiptap/extension-italic/dist/tiptap-extension-italic.esm.js");
/* harmony import */ var _tiptap_extension_strike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tiptap/extension-strike */ "./node_modules/@tiptap/extension-strike/dist/tiptap-extension-strike.esm.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Link */ "./src/marks/Link.js");
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




/**
 * This file maps prosemirror mark names to tiptap classes,
 * so we can reuse the prosemirror-markdown default parser for now
 */

var Strong = _tiptap_extension_bold__WEBPACK_IMPORTED_MODULE_0__.default.extend({
  name: 'strong'
});
var Italic = _tiptap_extension_italic__WEBPACK_IMPORTED_MODULE_1__.default.extend({
  name: 'em'
});
/** Strike is currently unsupported by prosemirror-markdown */

var Strike = _tiptap_extension_strike__WEBPACK_IMPORTED_MODULE_2__.default.extend({
  parseDOM: [{
    tag: 's'
  }, {
    tag: 'del'
  }, {
    tag: 'strike'
  }, {
    style: 'text-decoration',
    getAttrs: function getAttrs(value) {
      return value === 'line-through';
    }
  }],
  toDOM: function toDOM() {
    return ['s', 0];
  },
  toMarkdown: {
    open: '~~',
    close: '~~',
    mixable: true,
    expelEnclosingWhitespace: true
  }
});


/***/ }),

/***/ "./src/mixins/isMobile.js":
/*!********************************!*\
  !*** ./src/mixins/isMobile.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isMobile: this._isMobile()
    };
  },
  beforeMount: function beforeMount() {
    window.addEventListener('resize', this._onResize);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this._onResize);
  },
  methods: {
    _onResize: function _onResize() {
      // Update mobile mode
      this.isMobile = this._isMobile();
    },
    _isMobile: function _isMobile() {
      // check if content width is under 768px
      return document.documentElement.clientWidth < 768;
    }
  }
});

/***/ }),

/***/ "./src/mixins/store.js":
/*!*****************************!*\
  !*** ./src/mixins/store.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./src/store.js");
/*
 * @copyright Copyright (c) 2021 Julius Härtl <jus@bitgrid.net>
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

/**
 * This mixin is required since we cannot be sure that the root Vue instance has
 * registered the global store. This might be the case if the text app components
 * are mounted in other apps e.g. viewer
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      $store: _store__WEBPACK_IMPORTED_MODULE_0__.default
    };
  },
  beforeMount: function beforeMount() {
    if (typeof this.$store === 'undefined') {
      this.$store = _store__WEBPACK_IMPORTED_MODULE_0__.default;
    }
  }
});

/***/ }),

/***/ "./src/nodes/BulletList.js":
/*!*********************************!*\
  !*** ./src/nodes/BulletList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiptap_extension_bullet_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/extension-bullet-list */ "./node_modules/@tiptap/extension-bullet-list/dist/tiptap-extension-bullet-list.esm.js");
/*
 * @copyright Copyright (c) 2020 Julius Härtl <jus@bitgrid.net>
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

/* We want to allow for mixed lists with todo items and bullet points.
 * Therefore the list input rules are handled in the ListItem node.
 * This way we can make sure that "- [ ]" can still trigger todo list items
 * even inside a list with bullet points.
 */

var BulletList = _tiptap_extension_bullet_list__WEBPACK_IMPORTED_MODULE_0__.default.extend({
  name: 'bullet_list',
  content: 'list_item+',
  addInputRules: function addInputRules() {
    return [];
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BulletList);

/***/ }),

/***/ "./src/nodes/ListItem.js":
/*!*******************************!*\
  !*** ./src/nodes/ListItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tiptap_extension_list_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/extension-list-item */ "./node_modules/@tiptap/extension-list-item/dist/tiptap-extension-list-item.esm.js");
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/tiptap-core.esm.js");
/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prosemirror-state */ "./node_modules/prosemirror-state/dist/index.es.js");
/* harmony import */ var prosemirror_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prosemirror-utils */ "./node_modules/prosemirror-utils/dist/index.js");
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../commands */ "./src/commands/index.js");
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





var TYPES = {
  BULLET: 0,
  CHECKBOX: 1
};

var getParentList = function getParentList(schema, selection) {
  return (0,prosemirror_utils__WEBPACK_IMPORTED_MODULE_3__.findParentNode)(function (node) {
    return node.type === schema.nodes.list_item;
  })(selection);
};

var ListItem = _tiptap_extension_list_item__WEBPACK_IMPORTED_MODULE_0__.default.extend({
  name: 'list_item',
  addOptions: function addOptions() {
    return {
      nested: true
    };
  },
  addAttributes: function addAttributes() {
    return {
      done: {
        default: false
      },
      type: {
        default: TYPES.BULLET
      }
    };
  },
  draggable: false,
  content: 'paragraph block*',
  renderHTML: function renderHTML(_ref) {
    var node = _ref.node,
        HTMLAttributes = _ref.HTMLAttributes;

    if (node.attrs.type === TYPES.BULLET) {
      return ['li', HTMLAttributes, 0];
    }

    var listAttributes = {
      class: 'checkbox-item'
    };
    var checkboxAttributes = {
      type: 'checkbox',
      class: '',
      contenteditable: false
    };

    if (node.attrs.done) {
      checkboxAttributes.checked = true;
      listAttributes.class += ' checked';
    }

    return ['li', (0,_tiptap_core__WEBPACK_IMPORTED_MODULE_1__.mergeAttributes)(HTMLAttributes, listAttributes), ['input', checkboxAttributes], ['label', 0]];
  },
  parseHTML: [{
    priority: 100,
    tag: 'li',
    getAttrs: function getAttrs(el) {
      var checkbox = el.querySelector('input[type=checkbox]');
      return {
        done: checkbox && checkbox.checked,
        type: checkbox ? TYPES.CHECKBOX : TYPES.BULLET
      };
    }
  }],
  toMarkdown: function toMarkdown(state, node) {
    if (node.attrs.type === TYPES.CHECKBOX) {
      state.write("[".concat(node.attrs.done ? 'x' : ' ', "] "));
    }

    state.renderContent(node);
  },
  addCommands: function addCommands() {
    return {
      bulletListItem: function bulletListItem() {
        return function (_ref2) {
          var commands = _ref2.commands;
          return commands.toggleList('bullet_list', 'list_item');
        };
      },
      todo_item: function todo_item() {
        return function (_ref3) {
          var chain = _ref3.chain,
              commands = _ref3.commands,
              state = _ref3.state;
          var schema = state.schema;
          var selection = state.selection;
          var $from = selection.$from;
          var $to = selection.$to;
          var range = $from.blockRange($to);

          if (!range) {
            return false;
          }

          var parentList = getParentList(schema, selection);
          var start = typeof parentList === 'undefined' ? chain().bulletListItem() : chain();
          start.command(function (_ref4) {
            var tr = _ref4.tr;

            if (typeof parentList === 'undefined') {
              parentList = getParentList(schema, tr.selection);
            }

            if (typeof parentList === 'undefined') {
              return false;
            }

            tr.setNodeMarkup(parentList.pos, schema.nodes.list_item, {
              type: parentList.node.attrs.type === TYPES.CHECKBOX ? TYPES.BULLET : TYPES.CHECKBOX
            });
            tr.scrollIntoView();
          }).run();
        };
      }
    };
  },
  addInputRules: function addInputRules() {
    return [(0,_tiptap_core__WEBPACK_IMPORTED_MODULE_1__.wrappingInputRule)({
      find: /^\s*([-+*])\s(\[(x|X| ?)\])\s$/,
      type: TYPES.CHECKBOX,
      getAttributes: function getAttributes(match) {
        return {
          done: 'xX'.includes(match[match.length - 1])
        };
      }
    }), (0,_commands__WEBPACK_IMPORTED_MODULE_4__.listInputRule)(/^\s*([-+*])\s([^\s[])$/, this.type)];
  },
  addProseMirrorPlugins: function addProseMirrorPlugins() {
    return [new prosemirror_state__WEBPACK_IMPORTED_MODULE_2__.Plugin({
      props: {
        handleClick: function handleClick(view, pos, event) {
          var state = view.state;
          var schema = state.schema;
          var coordinates = view.posAtCoords({
            left: event.clientX,
            top: event.clientY
          });
          var position = state.doc.resolve(coordinates.pos);
          var parentList = (0,prosemirror_utils__WEBPACK_IMPORTED_MODULE_3__.findParentNodeClosestToPos)(position, function (node) {
            return node.type === schema.nodes.list_item;
          });
          var isListClicked = event.target.tagName.toLowerCase() === 'li';

          if (typeof parentList === 'undefined' || parentList.node.attrs.type !== TYPES.CHECKBOX || !isListClicked) {
            return;
          }

          var tr = state.tr;
          tr.setNodeMarkup(parentList.pos, schema.nodes.list_item, {
            done: !parentList.node.attrs.done,
            type: TYPES.CHECKBOX
          });
          view.dispatch(tr);
        }
      }
    })];
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItem);

/***/ }),

/***/ "./src/nodes/index.js":
/*!****************************!*\
  !*** ./src/nodes/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListItem": () => (/* reexport safe */ _ListItem__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "BulletList": () => (/* reexport safe */ _BulletList__WEBPACK_IMPORTED_MODULE_1__.default)
/* harmony export */ });
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItem */ "./src/nodes/ListItem.js");
/* harmony import */ var _BulletList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BulletList */ "./src/nodes/BulletList.js");
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
// import Image from './Image'
// import PlainTextDocument from './PlainTextDocument'




/***/ }),

/***/ "./src/services/PollingBackend.js":
/*!****************************************!*\
  !*** ./src/services/PollingBackend.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");
/* harmony import */ var _SyncService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SyncService */ "./src/services/SyncService.js");
/* harmony import */ var prosemirror_collab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prosemirror-collab */ "./node_modules/prosemirror-collab/dist/index.es.js");
/* provided dependency */ var console = __webpack_require__(/*! console-browserify */ "./node_modules/console-browserify/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */




/**
 * Minimum inverval to refetch the document changes
 *
 * @type {number} time in ms
 */

var FETCH_INTERVAL = 300;
/**
 * Maximum interval between refetches of document state if multiple users have joined
 *
 * @type {number} time in ms
 */

var FETCH_INTERVAL_MAX = 5000;
/**
 * Interval to check for changes when there is only one user joined
 *
 * @type {number} time in ms
 */

var FETCH_INTERVAL_SINGLE_EDITOR = 5000;
/**
 * Interval to fetch for changes when a browser window is considered invisible by the
 * page visibility API https://developer.mozilla.org/de/docs/Web/API/Page_Visibility_API
 *
 * @type {number} time in ms
 */

var FETCH_INTERVAL_INVISIBLE = 60000;
var MIN_PUSH_RETRY = 500;
var MAX_PUSH_RETRY = 10000;
/* Timeout after that a PUSH_FAILURE error is emitted */

var WARNING_PUSH_RETRY = 5000;
/* Maximum number of retries for fetching before emitting a connection error */

var MAX_RETRY_FETCH_COUNT = 5;
/**
 * Timeout for sessions to be marked as disconnected
 * Make sure that this is higher than any FETCH_INTERVAL_ values
 */

var COLLABORATOR_DISCONNECT_TIME = FETCH_INTERVAL_INVISIBLE * 1.5;

var PollingBackend = /*#__PURE__*/function () {
  function PollingBackend(authority) {
    _classCallCheck(this, PollingBackend);

    /** @type {SyncService} */
    this._authority = authority;
    this.fetchInterval = FETCH_INTERVAL;
    this.retryTime = MIN_PUSH_RETRY;
    this.lock = false;
    this.fetchRetryCounter = 0;
  }

  _createClass(PollingBackend, [{
    key: "connect",
    value: function connect() {
      this.initialLoadingFinished = false;
      this.fetcher = setInterval(this._fetchSteps.bind(this), 50);
      document.addEventListener('visibilitychange', this.visibilitychange.bind(this));
    }
  }, {
    key: "_isPublic",
    value: function _isPublic() {
      return !!this._authority.options.shareToken;
    }
  }, {
    key: "forceSave",
    value: function forceSave() {
      this._forcedSave = true;
      this.fetchSteps();
    }
  }, {
    key: "save",
    value: function save() {
      this._manualSave = true;
      this.fetchSteps();
    }
  }, {
    key: "fetchSteps",
    value: function fetchSteps() {
      this._fetchSteps();
    }
    /**
     * This method is only called though the timer
     */

  }, {
    key: "_fetchSteps",
    value: function _fetchSteps() {
      var _this = this;

      if (this.lock || !this.fetcher) {
        return;
      }

      this.lock = true;
      var autosaveContent;

      if (this._forcedSave || this._manualSave || !(0,prosemirror_collab__WEBPACK_IMPORTED_MODULE_3__.sendableSteps)(this._authority.state) && this._authority._getVersion() !== this._authority.document.lastSavedVersion) {
        autosaveContent = this._authority._getContent();
      }

      _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__.default.post((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.endpointUrl)('session/sync', this._isPublic()), {
        documentId: this._authority.document.id,
        sessionId: this._authority.session.id,
        sessionToken: this._authority.session.token,
        version: this._authority._getVersion(),
        autosaveContent: autosaveContent,
        force: !!this._forcedSave,
        manualSave: !!this._manualSave,
        token: this._authority.options.shareToken,
        filePath: this._authority.options.filePath
      }).then(function (response) {
        _this.fetchRetryCounter = 0;

        if (_this._authority.document.lastSavedVersion < response.data.document.lastSavedVersion) {
          console.debug('Saved document', response.data.document);

          _this._authority.emit('save', {
            document: response.data.document,
            sessions: response.data.sessions
          });
        }

        _this._authority.emit('change', {
          document: response.data.document,
          sessions: response.data.sessions
        });

        _this._authority.document = response.data.document;
        _this._authority.sessions = response.data.sessions;

        if (response.data.steps.length === 0) {
          if (!_this.initialLoadingFinished) {
            _this.initialLoadingFinished = true;
          }

          if (_this._authority.checkIdle()) {
            return;
          }

          _this.lock = false;

          if (response.data.sessions.filter(function (session) {
            return session.lastContact > Date.now() / 1000 - COLLABORATOR_DISCONNECT_TIME;
          }).length < 2) {
            _this.maximumRefetchTimer();
          } else {
            _this.increaseRefetchTimer();
          }

          _this._authority.emit('stateChange', {
            dirty: false
          });

          _this._authority.emit('stateChange', {
            initialLoading: true
          });

          return;
        }

        _this._authority._receiveSteps(response.data);

        _this.lock = false;
        _this._forcedSave = false;

        if (_this.initialLoadingFinished) {
          _this.resetRefetchTimer();
        }
      }).catch(function (e) {
        _this.lock = false;

        if (!e.response || e.code === 'ECONNABORTED') {
          if (_this.fetchRetryCounter++ >= MAX_RETRY_FETCH_COUNT) {
            console.error('[PollingBackend:fetchSteps] Network error when fetching steps, emitting CONNECTION_FAILED');

            _this._authority.emit('error', _SyncService__WEBPACK_IMPORTED_MODULE_2__.ERROR_TYPE.CONNECTION_FAILED, {
              retry: false
            });
          } else {
            console.error("[PollingBackend:fetchSteps] Network error when fetching steps, retry ".concat(_this.fetchRetryCounter));
          }
        } else if (e.response.status === 409 && e.response.data.document.currentVersion === _this._authority.document.currentVersion) {
          // Only emit conflict event if we have synced until the latest version
          console.error('Conflict during file save, please resolve');

          _this._authority.emit('error', _SyncService__WEBPACK_IMPORTED_MODULE_2__.ERROR_TYPE.SAVE_COLLISSION, {
            outsideChange: e.response.data.outsideChange
          });
        } else if (e.response.status === 403) {
          _this._authority.emit('error', _SyncService__WEBPACK_IMPORTED_MODULE_2__.ERROR_TYPE.SOURCE_NOT_FOUND, {});

          _this.disconnect();
        } else if (e.response.status === 404) {
          _this._authority.emit('error', _SyncService__WEBPACK_IMPORTED_MODULE_2__.ERROR_TYPE.SOURCE_NOT_FOUND, {});

          _this.disconnect();
        } else if (e.response.status === 503) {
          _this.increaseRefetchTimer();

          _this._authority.emit('error', _SyncService__WEBPACK_IMPORTED_MODULE_2__.ERROR_TYPE.CONNECTION_FAILED, {
            retry: false
          });

          console.error('Failed to fetch steps due to unavailable service', e);
        } else {
          _this.disconnect();

          _this._authority.emit('error', _SyncService__WEBPACK_IMPORTED_MODULE_2__.ERROR_TYPE.CONNECTION_FAILED, {
            retry: false
          });

          console.error('Failed to fetch steps due to other reason', e);
        }
      });
      this._manualSave = false;
      this._forcedSave = false;
    }
  }, {
    key: "sendSteps",
    value: function sendSteps(_sendable) {
      var _this2 = this;

      this._authority.emit('stateChange', {
        dirty: true
      });

      if (this.lock) {
        setTimeout(function () {
          _this2._authority.sendSteps();
        }, 100);
        return;
      }

      this.lock = true;
      var sendable = typeof _sendable === 'function' ? _sendable() : _sendable;
      var steps = sendable.steps;
      _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__.default.post((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.endpointUrl)('session/push', !!this._authority.options.shareToken), {
        documentId: this._authority.document.id,
        sessionId: this._authority.session.id,
        sessionToken: this._authority.session.token,
        steps: steps.map(function (s) {
          return s.toJSON ? s.toJSON() : s;
        }) || [],
        version: sendable.version,
        token: this._authority.options.shareToken,
        filePath: this._authority.options.filePath
      }).then(function (response) {
        _this2.carefulRetryReset();

        _this2.lock = false;

        _this2.fetchSteps();
      }).catch(function (e) {
        console.error('failed to apply steps due to collission, retrying');
        _this2.lock = false;

        if (!e.response || e.code === 'ECONNABORTED') {
          _this2._authority.emit('error', _SyncService__WEBPACK_IMPORTED_MODULE_2__.ERROR_TYPE.CONNECTION_FAILED, {});

          return;
        } else if (e.response.status === 403 && e.response.data.document.currentVersion === _this2._authority.document.currentVersion) {
          // Only emit conflict event if we have synced until the latest version
          _this2._authority.emit('error', _SyncService__WEBPACK_IMPORTED_MODULE_2__.ERROR_TYPE.PUSH_FAILURE, {});

          OC.Notification.showTemporary('Changes could not be sent yet');
        }

        _this2.fetchSteps();

        _this2.carefulRetry();
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      clearInterval(this.fetcher);
      this.fetcher = 0;
      document.removeEventListener('visibilitychange', this.visibilitychange.bind(this));
    }
  }, {
    key: "resetRefetchTimer",
    value: function resetRefetchTimer() {
      if (this.fetcher === 0) {
        return;
      }

      this.fetchInterval = FETCH_INTERVAL;
      clearInterval(this.fetcher);
      this.fetcher = setInterval(this._fetchSteps.bind(this), this.fetchInterval);
    }
  }, {
    key: "increaseRefetchTimer",
    value: function increaseRefetchTimer() {
      if (this.fetcher === 0) {
        return;
      }

      this.fetchInterval = Math.min(this.fetchInterval * 2, FETCH_INTERVAL_MAX);
      clearInterval(this.fetcher);
      this.fetcher = setInterval(this._fetchSteps.bind(this), this.fetchInterval);
    }
  }, {
    key: "maximumRefetchTimer",
    value: function maximumRefetchTimer() {
      if (this.fetcher === 0) {
        return;
      }

      this.fetchInterval = FETCH_INTERVAL_SINGLE_EDITOR;
      clearInterval(this.fetcher);
      this.fetcher = setInterval(this._fetchSteps.bind(this), this.fetchInterval);
    }
  }, {
    key: "visibilitychange",
    value: function visibilitychange() {
      if (this.fetcher === 0) {
        return;
      }

      if (document.visibilityState === 'hidden') {
        this.fetchInterval = FETCH_INTERVAL_INVISIBLE;
        clearInterval(this.fetcher);
        this.fetcher = setInterval(this._fetchSteps.bind(this), this.fetchInterval);
      } else {
        this.resetRefetchTimer();
      }
    }
  }, {
    key: "carefulRetry",
    value: function carefulRetry() {
      var newRetry = this.retryTime ? Math.min(this.retryTime * 2, MAX_PUSH_RETRY) : MIN_PUSH_RETRY;

      if (newRetry > WARNING_PUSH_RETRY && this.retryTime < WARNING_PUSH_RETRY) {
        OC.Notification.showTemporary('Changes could not be sent yet');

        this._authority.emit('error', _SyncService__WEBPACK_IMPORTED_MODULE_2__.ERROR_TYPE.PUSH_FAILURE, {});
      }

      this.retryTime = newRetry;
    }
  }, {
    key: "carefulRetryReset",
    value: function carefulRetryReset() {
      this.retryTime = MIN_PUSH_RETRY;
    }
  }]);

  return PollingBackend;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PollingBackend);

/***/ }),

/***/ "./src/services/SyncService.js":
/*!*************************************!*\
  !*** ./src/services/SyncService.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "SyncService": () => (/* binding */ SyncService),
/* harmony export */   "ERROR_TYPE": () => (/* binding */ ERROR_TYPE),
/* harmony export */   "IDLE_TIMEOUT": () => (/* binding */ IDLE_TIMEOUT)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.js");
/* harmony import */ var _PollingBackend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PollingBackend */ "./src/services/PollingBackend.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helpers */ "./src/helpers/index.js");
/* harmony import */ var prosemirror_collab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prosemirror-collab */ "./node_modules/prosemirror-collab/dist/index.es.js");
/* provided dependency */ var console = __webpack_require__(/*! console-browserify */ "./node_modules/console-browserify/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */




var defaultOptions = {
  shareToken: null,
  forceRecreate: false,
  serialize: function serialize(document) {
    return document;
  }
};
/**
 * Timeout after which the editor will consider a document without changes being synced as idle
 * The session will be terminated and the document will stay open in read-only mode with a button to reconnect if needed
 *
 * @type {number}
 */

var IDLE_TIMEOUT = 30;
var ERROR_TYPE = {
  /**
   * Failed to save collaborative document due to external change
   * collission needs to be resolved manually
   */
  SAVE_COLLISSION: 0,

  /**
   * Failed to push changes for MAX_REBASE_RETRY times
   */
  PUSH_FAILURE: 1,
  LOAD_ERROR: 2,
  CONNECTION_FAILED: 3,
  SOURCE_NOT_FOUND: 4
};

var SyncService = /*#__PURE__*/function () {
  function SyncService(options) {
    _classCallCheck(this, SyncService);

    this.eventHandlers = {
      /* Document state */
      opened: [],
      loaded: [],

      /* All initial steps fetched */
      fetched: [],

      /* received new steps */
      sync: [],

      /* state changed (dirty) */
      stateChange: [],

      /* error */
      error: [],

      /* Events for session and document meta data */
      change: [],

      /* Emitted after successful save */
      save: [],

      /* Emitted once a document becomes idle */
      idle: []
    };
    this.backend = new _PollingBackend__WEBPACK_IMPORTED_MODULE_1__.default(this);
    this.options = Object.assign({}, defaultOptions, options);
    this.document = null;
    this.session = null;
    this.sessions = [];
    this.steps = [];
    this.stepClientIDs = [];
    this.lastStepPush = Date.now();
    return this;
  }

  _createClass(SyncService, [{
    key: "open",
    value: function () {
      var _open = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var _this2 = this;

        var fileId, filePath, initialSession, connectionData, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fileId = _ref.fileId, filePath = _ref.filePath, initialSession = _ref.initialSession;
                connectionData = null;

                if (!(typeof initialSession === 'undefined')) {
                  _context.next = 16;
                  break;
                }

                _context.prev = 3;
                _context.next = 6;
                return this._openDocument({
                  fileId: fileId,
                  filePath: filePath
                });

              case 6:
                response = _context.sent;
                connectionData = response.data;
                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](3);

                if (!_context.t0.response || _context.t0.code === 'ECONNABORTED') {
                  this.emit('error', ERROR_TYPE.CONNECTION_FAILED, {});
                } else {
                  this.emit('error', ERROR_TYPE.LOAD_ERROR, _context.t0.response.status);
                }

                throw _context.t0;

              case 14:
                _context.next = 17;
                break;

              case 16:
                connectionData = initialSession;

              case 17:
                this.document = connectionData.document;
                this.document.readOnly = connectionData.readOnly;
                this.session = connectionData.session;
                this.emit('opened', {
                  document: this.document,
                  session: this.session
                });
                return _context.abrupt("return", this._fetchDocument().then(function (_ref2) {
                  var data = _ref2.data;

                  _this2.emit('loaded', {
                    document: _this2.document,
                    session: _this2.session,
                    documentSource: '' + data
                  });
                }));

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 10]]);
      }));

      function open(_x) {
        return _open.apply(this, arguments);
      }

      return open;
    }()
  }, {
    key: "startSync",
    value: function startSync() {
      this.backend.connect();
    }
  }, {
    key: "_openDocument",
    value: function _openDocument(_ref3) {
      var fileId = _ref3.fileId,
          filePath = _ref3.filePath;
      return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__.default.put((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.endpointUrl)('session/create', !!this.options.shareToken), {
        fileId: fileId,
        filePath: filePath,
        token: this.options.shareToken,
        guestName: this.options.guestName,
        forceRecreate: this.options.forceRecreate
      });
    }
  }, {
    key: "_fetchDocument",
    value: function _fetchDocument() {
      return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__.default.post((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.endpointUrl)('session/fetch', !!this.options.shareToken), {
        documentId: this.document.id,
        sessionId: this.session.id,
        sessionToken: this.session.token,
        token: this.options.shareToken
      }, {
        transformResponse: [function (data) {
          return data;
        }]
      });
    }
  }, {
    key: "updateSession",
    value: function updateSession(guestName) {
      var _this3 = this;

      if (!this.isPublic()) {
        return;
      }

      return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__.default.post((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.endpointUrl)('session', !!this.options.shareToken), {
        documentId: this.document.id,
        sessionId: this.session.id,
        sessionToken: this.session.token,
        token: this.options.shareToken,
        guestName: guestName
      }).then(function (_ref4) {
        var data = _ref4.data;
        _this3.session = data;
        return data;
      }).catch(function (error) {
        console.error('Failed to update the session', error);
        return Promise.reject(error);
      });
    }
  }, {
    key: "sendSteps",
    value: function sendSteps(_sendable) {
      var sendable = _sendable || (0,prosemirror_collab__WEBPACK_IMPORTED_MODULE_3__.sendableSteps)(this.state);

      if (!sendable) {
        return;
      }

      return this.backend.sendSteps(sendable);
    }
  }, {
    key: "stepsSince",
    value: function stepsSince(version) {
      return {
        steps: this.steps.slice(version),
        clientIDs: this.stepClientIDs.slice(version)
      };
    }
  }, {
    key: "_receiveSteps",
    value: function _receiveSteps(_ref5) {
      var _this4 = this;

      var steps = _ref5.steps,
          document = _ref5.document;
      var newSteps = [];

      var _loop = function _loop(i) {
        var singleSteps = steps[i].data;

        if (!Array.isArray(singleSteps)) {
          console.error('Invalid step data, skipping step', steps[i]); // TODO: recover

          return "continue";
        }

        singleSteps.forEach(function (step) {
          _this4.steps.push(step);

          newSteps.push({
            step: step,
            clientID: steps[i].sessionId
          });
        });
      };

      for (var i = 0; i < steps.length; i++) {
        var _ret = _loop(i);

        if (_ret === "continue") continue;
      }

      this.lastStepPush = Date.now();
      this.emit('sync', {
        steps: newSteps,
        document: document
      });
      console.debug('receivedSteps', 'newVersion', this._getVersion());
    }
  }, {
    key: "checkIdle",
    value: function checkIdle() {
      var lastPushMinutesAgo = (Date.now() - this.lastStepPush) / 1000 / 60;

      if (lastPushMinutesAgo > IDLE_TIMEOUT) {
        console.debug("[SyncService] Document is idle for ".concat(this.IDLE_TIMEOUT, " minutes, suspending connection"));
        this.emit('idle');
      }
    }
  }, {
    key: "_getVersion",
    value: function _getVersion() {
      if (this.state) {
        return (0,prosemirror_collab__WEBPACK_IMPORTED_MODULE_3__.getVersion)(this.state);
      }

      return 0;
    }
  }, {
    key: "_getDocument",
    value: function _getDocument() {
      if (this.state) {
        return this.state.doc;
      }
    }
  }, {
    key: "_getContent",
    value: function _getContent() {
      return this.options.serialize(this._getDocument());
    }
  }, {
    key: "save",
    value: function save() {
      if (this.backend.save) {
        this.backend.save();
      }
    }
  }, {
    key: "forceSave",
    value: function forceSave() {
      if (this.backend.forceSave) {
        this.backend.forceSave();
      }
    }
  }, {
    key: "close",
    value: function close() {
      var _this5 = this;

      var closed = false;
      return new Promise(function (resolve, reject) {
        _this5.on('save', function () {
          _this5._close().then(function () {
            closed = true;
            resolve();
          }).catch(function () {
            return resolve();
          });
        });

        setTimeout(function () {
          if (!closed) {
            _this5._close().then(function () {
              resolve();
            }).catch(function () {
              return resolve();
            });
          }
        }, 2000);

        _this5.save();
      });
    }
  }, {
    key: "_close",
    value: function _close() {
      if (this.document === null || this.session === null) {
        return Promise.resolve();
      }

      this.backend.disconnect();
      return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__.default.post((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.endpointUrl)('session/close', !!this.options.shareToken), {
        documentId: this.document.id,
        sessionId: this.session.id,
        sessionToken: this.session.token,
        token: this.options.shareToken
      });
    }
  }, {
    key: "on",
    value: function on(event, callback, _this) {
      this.eventHandlers[event].push(callback.bind(_this));
      return this;
    }
  }, {
    key: "emit",
    value: function emit(event, data, additionalData) {
      if (typeof this.eventHandlers[event] !== 'undefined') {
        this.eventHandlers[event].forEach(function (callback) {
          callback(data, additionalData);
        });
      } else {
        console.error('Event not found', event);
      }
    }
  }, {
    key: "isPublic",
    value: function isPublic() {
      return !!this.options.shareToken;
    }
  }]);

  return SyncService;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SyncService);


/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _nextcloud_browser_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/browser-storage */ "./node_modules/@nextcloud/browser-storage/dist/index.js");
/*
 * @copyright Copyright (c) 2020 Julius Härtl <jus@bitgrid.net>
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



var persistentStorage = (0,_nextcloud_browser_storage__WEBPACK_IMPORTED_MODULE_0__.getBuilder)('text').persist().build();
vue__WEBPACK_IMPORTED_MODULE_1__.default.use(vuex__WEBPACK_IMPORTED_MODULE_2__.default);
var store = new vuex__WEBPACK_IMPORTED_MODULE_2__.default.Store({
  state: {
    showAuthorAnnotations: persistentStorage.getItem('showAuthorAnnotations') === 'true'
  },
  mutations: {
    SET_SHOW_AUTHOR_ANNOTATIONS: function SET_SHOW_AUTHOR_ANNOTATIONS(state, value) {
      state.showAuthorAnnotations = value;
      persistentStorage.setItem('showAuthorAnnotations', '' + value);
    }
  },
  actions: {
    setShowAuthorAnnotations: function setShowAuthorAnnotations(_ref, value) {
      var commit = _ref.commit;
      store.commit('SET_SHOW_AUTHOR_ANNOTATIONS', value);
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#resolve-conflicts[data-v-5ffe7972] {\n  display: flex;\n  position: fixed;\n  z-index: 10000;\n  bottom: 0;\n  max-width: 900px;\n  width: 100vw;\n  margin: auto;\n  padding: 20px 0;\n}\n#resolve-conflicts button[data-v-5ffe7972] {\n  margin: auto;\n  box-shadow: 0 0 10px var(--color-box-shadow);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=0&id=76135766&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=0&id=76135766&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#editor-container[data-v-76135766] {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  left: 0;\n  top: 50px;\n  margin: 0 auto;\n  position: relative;\n  background-color: var(--color-main-background);\n}\n#editor-wrapper[data-v-76135766] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n}\n#editor-wrapper.show-color-annotations[data-v-76135766] .author-annotation {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n#editor-wrapper[data-v-76135766]:not(.show-color-annotations) .author-annotation, #editor-wrapper[data-v-76135766]:not(.show-color-annotations) .image {\n  background-color: transparent !important;\n  color: var(--color-main-text) !important;\n}\n#editor-wrapper .ProseMirror[data-v-76135766] {\n  margin-top: 0 !important;\n}\n#editor-wrapper.icon-loading #editor[data-v-76135766] {\n  opacity: 0.3;\n}\n#editor[data-v-76135766], .editor[data-v-76135766] {\n  background: var(--color-main-background);\n  color: var(--color-main-text);\n  background-clip: padding-box;\n  border-radius: var(--border-radius);\n  padding: 0;\n  position: relative;\n  overflow-y: auto;\n  overflow-x: hidden;\n  width: 100%;\n}\n.document-status[data-v-76135766] {\n  position: relative;\n  background-color: var(--color-main-background);\n}\n.document-status .msg[data-v-76135766] {\n  padding: 12px;\n  background-position: 8px center;\n  color: var(--color-text-maxcontrast);\n}\n.document-status .msg.icon-error[data-v-76135766] {\n  padding-left: 30px;\n}\n.document-status .msg .button[data-v-76135766] {\n  margin-left: 8px;\n}\n.save-status[data-v-76135766] {\n  display: inline-flex;\n  padding: 0;\n  text-overflow: ellipsis;\n  color: var(--color-text-lighter);\n  position: relative;\n  top: 10px;\n  min-width: 85px;\n}\n.save-status.error[data-v-76135766] {\n  background-color: var(--color-error);\n  color: var(--color-main-background);\n  border-radius: 3px;\n}\n#editor-container #editor-wrapper.has-conflicts[data-v-76135766] {\n  height: calc(100% - 50px);\n}\n#editor-container #editor-wrapper.has-conflicts #editor[data-v-76135766], #editor-container #editor-wrapper.has-conflicts #read-only-editor[data-v-76135766] {\n  width: 50%;\n  height: 100%;\n}\n#editor-session-list[data-v-76135766] {\n  display: flex;\n}\n#editor-session-list input[data-v-76135766], #editor-session-list div[data-v-76135766] {\n  vertical-align: middle;\n  margin-left: 3px;\n}\n.editor__content[data-v-76135766] {\n  max-width: 670px;\n  margin: auto;\n  position: relative;\n}\n#body-public[data-v-76135766] {\n  height: auto;\n}\n#files-public-content #editor-container[data-v-76135766] {\n  top: 0;\n  width: 100%;\n}\n#files-public-content #editor-container #editor[data-v-76135766] .menubar {\n  position: sticky;\n  top: 0px;\n  width: 100%;\n}\n#files-public-content #editor-container #editor[data-v-76135766] {\n  overflow: auto;\n  z-index: 20;\n}\n#files-public-content #editor-container .has-conflicts #editor[data-v-76135766] {\n  padding-top: 0;\n}\n.ie #editor[data-v-76135766] .menubar {\n  position: fixed;\n  top: 50px;\n  width: 100%;\n}\n.ie .editor__content[data-v-76135766] .ProseMirror {\n  padding-top: 50px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=1&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=1&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/checkbox-mark.svg */ "./img/checkbox-mark.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal-container #editor-container {\n  position: absolute;\n}\n.ProseMirror-hideselection *::selection {\n  background: transparent;\n  color: var(--color-main-text);\n}\n.ProseMirror-hideselection *::-moz-selection {\n  background: transparent;\n  color: var(--color-main-text);\n}\n.ProseMirror-hideselection {\n  caret-color: transparent;\n  color: var(--color-main-text);\n}\n.ProseMirror-selectednode {\n  outline: 2px solid #8cf;\n}\n\n/* Make sure li selections wrap around markers */\nli.ProseMirror-selectednode {\n  outline: none;\n}\nli.ProseMirror-selectednode:after {\n  content: \"\";\n  position: absolute;\n  left: -32px;\n  right: -2px;\n  top: -2px;\n  bottom: -2px;\n  border: 2px solid #8cf;\n  pointer-events: none;\n}\n.has-conflicts .ProseMirror-menubar,\n#editor-wrapper.icon-loading .ProseMirror-menubar {\n  display: none;\n}\n.ProseMirror-gapcursor {\n  display: none;\n  pointer-events: none;\n  position: absolute;\n}\n.ProseMirror-gapcursor:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: -2px;\n  width: 20px;\n  border-top: 1px solid var(--color-main-text);\n  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;\n}\n@keyframes ProseMirror-cursor-blink {\nto {\n    visibility: hidden;\n}\n}\n#editor-wrapper {\n  /* Document rendering styles */\n}\n#editor-wrapper div.ProseMirror {\n  margin-top: 44px;\n  height: 100%;\n  position: relative;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  -webkit-font-variant-ligatures: none;\n  font-variant-ligatures: none;\n  padding: 4px 8px 200px 14px;\n  line-height: 150%;\n  font-size: 14px;\n  outline: none;\n}\n#editor-wrapper div.ProseMirror[contenteditable=true], #editor-wrapper div.ProseMirror[contenteditable=false],\n#editor-wrapper div.ProseMirror [contenteditable=true],\n#editor-wrapper div.ProseMirror [contenteditable=false] {\n  border: none !important;\n  width: 100%;\n  background-color: transparent;\n  color: var(--color-main-text);\n  opacity: 1;\n  -webkit-user-select: text;\n  user-select: text;\n  font-size: 14px;\n}\n#editor-wrapper div.ProseMirror .checkbox-item {\n  display: flex;\n  align-items: start;\n  margin-left: -23px;\n}\n#editor-wrapper div.ProseMirror .checkbox-item input[type=checkbox] {\n  display: none;\n}\n#editor-wrapper div.ProseMirror .checkbox-item:before {\n  content: \"\";\n  vertical-align: middle;\n  margin: 3px 6px 3px 2px;\n  border: 1px solid var(--color-text-maxcontrast);\n  position: relative;\n  display: block;\n  border-radius: var(--border-radius);\n  height: 14px;\n  width: 14px;\n  box-shadow: none !important;\n  background-position: center;\n  cursor: pointer;\n}\n#editor-wrapper div.ProseMirror .checkbox-item.checked:before {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-color: var(--color-primary-element);\n  border-color: var(--color-primary-element);\n}\n#editor-wrapper div.ProseMirror .checkbox-item label {\n  display: block;\n  flex-grow: 1;\n  max-width: calc(100% - 28px);\n}\n#editor-wrapper div.ProseMirror > *:first-child {\n  margin-top: 10px;\n}\n#editor-wrapper div.ProseMirror a {\n  color: var(--color-primary-element);\n  text-decoration: underline;\n  padding: 0.5em 0;\n}\n#editor-wrapper div.ProseMirror p {\n  margin-bottom: 1em;\n  line-height: 150%;\n}\n#editor-wrapper div.ProseMirror em {\n  font-style: italic;\n}\n#editor-wrapper div.ProseMirror h1,\n#editor-wrapper div.ProseMirror h2,\n#editor-wrapper div.ProseMirror h3,\n#editor-wrapper div.ProseMirror h4,\n#editor-wrapper div.ProseMirror h5,\n#editor-wrapper div.ProseMirror h6 {\n  font-weight: 600;\n  line-height: 120%;\n  margin-top: 24px;\n  margin-bottom: 12px;\n  color: var(--color-main-text);\n}\n#editor-wrapper div.ProseMirror h1 {\n  font-size: 36px;\n  margin-top: 48px;\n}\n#editor-wrapper div.ProseMirror h2 {\n  font-size: 30px;\n  margin-top: 48px;\n}\n#editor-wrapper div.ProseMirror h3 {\n  font-size: 24px;\n}\n#editor-wrapper div.ProseMirror h4 {\n  font-size: 21px;\n}\n#editor-wrapper div.ProseMirror h5 {\n  font-size: 17px;\n}\n#editor-wrapper div.ProseMirror h6 {\n  font-size: 14px;\n}\n#editor-wrapper div.ProseMirror img {\n  cursor: default;\n  max-width: 100%;\n}\n#editor-wrapper div.ProseMirror hr {\n  padding: 2px 0;\n  border: none;\n  margin: 3em 0;\n  width: 100%;\n}\n#editor-wrapper div.ProseMirror hr:after {\n  content: \"\";\n  display: block;\n  height: 1px;\n  background-color: var(--color-border-dark);\n  line-height: 2px;\n}\n#editor-wrapper div.ProseMirror pre {\n  white-space: pre-wrap;\n  background-color: var(--color-background-dark);\n  border-radius: var(--border-radius);\n  padding: 1em 1.3em;\n  margin-bottom: 1em;\n}\n#editor-wrapper div.ProseMirror p code {\n  background-color: var(--color-background-dark);\n  border-radius: var(--border-radius);\n  padding: 0.1em 0.3em;\n}\n#editor-wrapper div.ProseMirror li {\n  position: relative;\n  padding-left: 3px;\n}\n#editor-wrapper div.ProseMirror li p {\n  margin-bottom: 0.5em;\n}\n#editor-wrapper div.ProseMirror ul, #editor-wrapper div.ProseMirror ol {\n  padding-left: 10px;\n  margin-left: 10px;\n  margin-bottom: 1em;\n}\n#editor-wrapper div.ProseMirror ul li {\n  list-style-type: disc;\n}\n#editor-wrapper div.ProseMirror ul > li > ul > li {\n  list-style-type: circle;\n}\n#editor-wrapper div.ProseMirror ul > li > ul > li ul li {\n  list-style-type: square;\n}\n#editor-wrapper div.ProseMirror blockquote {\n  padding-left: 1em;\n  border-left: 4px solid var(--color-primary-element);\n  color: var(--color-text-maxcontrast);\n  margin-left: 0;\n  margin-right: 0;\n}\n#editor-wrapper .ProseMirror-focused .ProseMirror-gapcursor {\n  display: block;\n}\n#editor-wrapper .editor__content p.is-empty:first-child::before {\n  content: attr(data-empty-text);\n  float: left;\n  color: var(--color-text-maxcontrast);\n  pointer-events: none;\n  height: 0;\n}\n#editor-wrapper .editor__content {\n  tab-size: 4;\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre {\n  background-color: var(--color-main-background);\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre::before {\n  content: attr(data-language);\n  text-transform: uppercase;\n  display: block;\n  text-align: right;\n  font-weight: bold;\n  font-size: 0.6rem;\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-comment,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-quote {\n  color: #999999;\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-variable,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-template-variable,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-attribute,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-tag,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-name,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-regexp,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-link,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-selector-id,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-selector-class {\n  color: #f2777a;\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-number,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-meta,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-built_in,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-builtin-name,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-literal,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-type,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-params {\n  color: #f99157;\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-string,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-symbol,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-bullet {\n  color: #99cc99;\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-title,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-section {\n  color: #ffcc66;\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-keyword,\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-selector-tag {\n  color: #6699cc;\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-emphasis {\n  font-style: italic;\n}\n#editor-wrapper:not(.richEditor) .ProseMirror pre code .hljs-strong {\n  font-weight: 700;\n}\n#editor-wrapper #editor .content-wrapper {\n  position: relative;\n}\n#files-public-content {\n  height: 100%;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/checkbox-mark.svg */ "./img/checkbox-mark.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#read-only-editor {\n  /* Document rendering styles */\n  overflow: scroll;\n}\n#read-only-editor div.ProseMirror {\n  margin-top: 44px;\n  height: 100%;\n  position: relative;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  -webkit-font-variant-ligatures: none;\n  font-variant-ligatures: none;\n  padding: 4px 8px 200px 14px;\n  line-height: 150%;\n  font-size: 14px;\n  outline: none;\n}\n#read-only-editor div.ProseMirror[contenteditable=true], #read-only-editor div.ProseMirror[contenteditable=false],\n#read-only-editor div.ProseMirror [contenteditable=true],\n#read-only-editor div.ProseMirror [contenteditable=false] {\n  border: none !important;\n  width: 100%;\n  background-color: transparent;\n  color: var(--color-main-text);\n  opacity: 1;\n  -webkit-user-select: text;\n  user-select: text;\n  font-size: 14px;\n}\n#read-only-editor div.ProseMirror .checkbox-item {\n  display: flex;\n  align-items: start;\n  margin-left: -23px;\n}\n#read-only-editor div.ProseMirror .checkbox-item input[type=checkbox] {\n  display: none;\n}\n#read-only-editor div.ProseMirror .checkbox-item:before {\n  content: \"\";\n  vertical-align: middle;\n  margin: 3px 6px 3px 2px;\n  border: 1px solid var(--color-text-maxcontrast);\n  position: relative;\n  display: block;\n  border-radius: var(--border-radius);\n  height: 14px;\n  width: 14px;\n  box-shadow: none !important;\n  background-position: center;\n  cursor: pointer;\n}\n#read-only-editor div.ProseMirror .checkbox-item.checked:before {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-color: var(--color-primary-element);\n  border-color: var(--color-primary-element);\n}\n#read-only-editor div.ProseMirror .checkbox-item label {\n  display: block;\n  flex-grow: 1;\n  max-width: calc(100% - 28px);\n}\n#read-only-editor div.ProseMirror > *:first-child {\n  margin-top: 10px;\n}\n#read-only-editor div.ProseMirror a {\n  color: var(--color-primary-element);\n  text-decoration: underline;\n  padding: 0.5em 0;\n}\n#read-only-editor div.ProseMirror p {\n  margin-bottom: 1em;\n  line-height: 150%;\n}\n#read-only-editor div.ProseMirror em {\n  font-style: italic;\n}\n#read-only-editor div.ProseMirror h1,\n#read-only-editor div.ProseMirror h2,\n#read-only-editor div.ProseMirror h3,\n#read-only-editor div.ProseMirror h4,\n#read-only-editor div.ProseMirror h5,\n#read-only-editor div.ProseMirror h6 {\n  font-weight: 600;\n  line-height: 120%;\n  margin-top: 24px;\n  margin-bottom: 12px;\n  color: var(--color-main-text);\n}\n#read-only-editor div.ProseMirror h1 {\n  font-size: 36px;\n  margin-top: 48px;\n}\n#read-only-editor div.ProseMirror h2 {\n  font-size: 30px;\n  margin-top: 48px;\n}\n#read-only-editor div.ProseMirror h3 {\n  font-size: 24px;\n}\n#read-only-editor div.ProseMirror h4 {\n  font-size: 21px;\n}\n#read-only-editor div.ProseMirror h5 {\n  font-size: 17px;\n}\n#read-only-editor div.ProseMirror h6 {\n  font-size: 14px;\n}\n#read-only-editor div.ProseMirror img {\n  cursor: default;\n  max-width: 100%;\n}\n#read-only-editor div.ProseMirror hr {\n  padding: 2px 0;\n  border: none;\n  margin: 3em 0;\n  width: 100%;\n}\n#read-only-editor div.ProseMirror hr:after {\n  content: \"\";\n  display: block;\n  height: 1px;\n  background-color: var(--color-border-dark);\n  line-height: 2px;\n}\n#read-only-editor div.ProseMirror pre {\n  white-space: pre-wrap;\n  background-color: var(--color-background-dark);\n  border-radius: var(--border-radius);\n  padding: 1em 1.3em;\n  margin-bottom: 1em;\n}\n#read-only-editor div.ProseMirror p code {\n  background-color: var(--color-background-dark);\n  border-radius: var(--border-radius);\n  padding: 0.1em 0.3em;\n}\n#read-only-editor div.ProseMirror li {\n  position: relative;\n  padding-left: 3px;\n}\n#read-only-editor div.ProseMirror li p {\n  margin-bottom: 0.5em;\n}\n#read-only-editor div.ProseMirror ul, #read-only-editor div.ProseMirror ol {\n  padding-left: 10px;\n  margin-left: 10px;\n  margin-bottom: 1em;\n}\n#read-only-editor div.ProseMirror ul li {\n  list-style-type: disc;\n}\n#read-only-editor div.ProseMirror ul > li > ul > li {\n  list-style-type: circle;\n}\n#read-only-editor div.ProseMirror ul > li > ul > li ul li {\n  list-style-type: square;\n}\n#read-only-editor div.ProseMirror blockquote {\n  padding-left: 1em;\n  border-left: 4px solid var(--color-primary-element);\n  color: var(--color-text-maxcontrast);\n  margin-left: 0;\n  margin-right: 0;\n}\n#read-only-editor .ProseMirror-focused .ProseMirror-gapcursor {\n  display: block;\n}\n#read-only-editor .editor__content p.is-empty:first-child::before {\n  content: attr(data-empty-text);\n  float: left;\n  color: var(--color-text-maxcontrast);\n  pointer-events: none;\n  height: 0;\n}\n#read-only-editor .editor__content {\n  tab-size: 4;\n}\n.thumbnailContainer #read-only-editor {\n  width: 100%;\n}\n.thumbnailContainer #read-only-editor .ProseMirror {\n  height: auto;\n  margin: 0 0 0 0;\n  padding: 0;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/checkbox-mark.svg */ "./img/checkbox-mark.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Document rendering styles */\ndiv.ProseMirror {\n  margin-top: 44px;\n  height: 100%;\n  position: relative;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  -webkit-font-variant-ligatures: none;\n  font-variant-ligatures: none;\n  padding: 4px 8px 200px 14px;\n  line-height: 150%;\n  font-size: 14px;\n  outline: none;\n}\ndiv.ProseMirror[contenteditable=true], div.ProseMirror[contenteditable=false],\ndiv.ProseMirror [contenteditable=true],\ndiv.ProseMirror [contenteditable=false] {\n  border: none !important;\n  width: 100%;\n  background-color: transparent;\n  color: var(--color-main-text);\n  opacity: 1;\n  -webkit-user-select: text;\n  user-select: text;\n  font-size: 14px;\n}\ndiv.ProseMirror .checkbox-item {\n  display: flex;\n  align-items: start;\n  margin-left: -23px;\n}\ndiv.ProseMirror .checkbox-item input[type=checkbox] {\n  display: none;\n}\ndiv.ProseMirror .checkbox-item:before {\n  content: \"\";\n  vertical-align: middle;\n  margin: 3px 6px 3px 2px;\n  border: 1px solid var(--color-text-maxcontrast);\n  position: relative;\n  display: block;\n  border-radius: var(--border-radius);\n  height: 14px;\n  width: 14px;\n  box-shadow: none !important;\n  background-position: center;\n  cursor: pointer;\n}\ndiv.ProseMirror .checkbox-item.checked:before {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-color: var(--color-primary-element);\n  border-color: var(--color-primary-element);\n}\ndiv.ProseMirror .checkbox-item label {\n  display: block;\n  flex-grow: 1;\n  max-width: calc(100% - 28px);\n}\ndiv.ProseMirror > *:first-child {\n  margin-top: 10px;\n}\ndiv.ProseMirror a {\n  color: var(--color-primary-element);\n  text-decoration: underline;\n  padding: 0.5em 0;\n}\ndiv.ProseMirror p {\n  margin-bottom: 1em;\n  line-height: 150%;\n}\ndiv.ProseMirror em {\n  font-style: italic;\n}\ndiv.ProseMirror h1,\ndiv.ProseMirror h2,\ndiv.ProseMirror h3,\ndiv.ProseMirror h4,\ndiv.ProseMirror h5,\ndiv.ProseMirror h6 {\n  font-weight: 600;\n  line-height: 120%;\n  margin-top: 24px;\n  margin-bottom: 12px;\n  color: var(--color-main-text);\n}\ndiv.ProseMirror h1 {\n  font-size: 36px;\n  margin-top: 48px;\n}\ndiv.ProseMirror h2 {\n  font-size: 30px;\n  margin-top: 48px;\n}\ndiv.ProseMirror h3 {\n  font-size: 24px;\n}\ndiv.ProseMirror h4 {\n  font-size: 21px;\n}\ndiv.ProseMirror h5 {\n  font-size: 17px;\n}\ndiv.ProseMirror h6 {\n  font-size: 14px;\n}\ndiv.ProseMirror img {\n  cursor: default;\n  max-width: 100%;\n}\ndiv.ProseMirror hr {\n  padding: 2px 0;\n  border: none;\n  margin: 3em 0;\n  width: 100%;\n}\ndiv.ProseMirror hr:after {\n  content: \"\";\n  display: block;\n  height: 1px;\n  background-color: var(--color-border-dark);\n  line-height: 2px;\n}\ndiv.ProseMirror pre {\n  white-space: pre-wrap;\n  background-color: var(--color-background-dark);\n  border-radius: var(--border-radius);\n  padding: 1em 1.3em;\n  margin-bottom: 1em;\n}\ndiv.ProseMirror p code {\n  background-color: var(--color-background-dark);\n  border-radius: var(--border-radius);\n  padding: 0.1em 0.3em;\n}\ndiv.ProseMirror li {\n  position: relative;\n  padding-left: 3px;\n}\ndiv.ProseMirror li p {\n  margin-bottom: 0.5em;\n}\ndiv.ProseMirror ul, div.ProseMirror ol {\n  padding-left: 10px;\n  margin-left: 10px;\n  margin-bottom: 1em;\n}\ndiv.ProseMirror ul li {\n  list-style-type: disc;\n}\ndiv.ProseMirror ul > li > ul > li {\n  list-style-type: circle;\n}\ndiv.ProseMirror ul > li > ul > li ul li {\n  list-style-type: square;\n}\ndiv.ProseMirror blockquote {\n  padding-left: 1em;\n  border-left: 4px solid var(--color-primary-element);\n  color: var(--color-text-maxcontrast);\n  margin-left: 0;\n  margin-right: 0;\n}\n.ProseMirror-focused .ProseMirror-gapcursor {\n  display: block;\n}\n.editor__content p.is-empty:first-child::before {\n  content: attr(data-empty-text);\n  float: left;\n  color: var(--color-text-maxcontrast);\n  pointer-events: none;\n  height: 0;\n}\n.editor__content {\n  tab-size: 4;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/DirectEditing.vue?vue&type=style&index=0&id=37e36225&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/DirectEditing.vue?vue&type=style&index=0&id=37e36225&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body[data-v-37e36225] {\n  position: fixed;\n}\n#direct-editor[data-v-37e36225] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  overflow: hidden;\n}\n#direct-editor[data-v-37e36225] #editor-container {\n  height: 100%;\n  top: 0;\n}\n#direct-editor[data-v-37e36225] #editor-wrapper div.ProseMirror {\n  margin-top: 0;\n}\npre[data-v-37e36225] {\n  width: 100%;\n  max-width: 700px;\n  margin: auto;\n  background-color: var(--color-background-dark);\n}\nbutton[data-v-37e36225] {\n  width: 44px;\n  height: 44px;\n  margin: 0;\n  background-size: 16px;\n  border: 0;\n  background-color: transparent;\n  opacity: 0.5;\n  color: var(--color-main-text);\n  background-position: center center;\n  vertical-align: top;\n}\nbutton[data-v-37e36225]:hover, button[data-v-37e36225]:focus, button[data-v-37e36225]:active {\n  background-color: var(--color-background-dark);\n}\nbutton.is-active[data-v-37e36225], button[data-v-37e36225]:hover, button[data-v-37e36225]:focus {\n  opacity: 1;\n}\nbutton.icon-undo[data-v-37e36225], button.icon-redo[data-v-37e36225] {\n  opacity: 0.4;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/highlight.js/lib/languages lazy recursive ^\\.\\/.*$":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/ lazy ^\.\/.*$ chunkName: highlight/[request] namespace object ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./1c": [
		"./node_modules/highlight.js/lib/languages/1c.js",
		"highlight/1c"
	],
	"./1c.js": [
		"./node_modules/highlight.js/lib/languages/1c.js",
		"highlight/1c"
	],
	"./abnf": [
		"./node_modules/highlight.js/lib/languages/abnf.js",
		"highlight/abnf"
	],
	"./abnf.js": [
		"./node_modules/highlight.js/lib/languages/abnf.js",
		"highlight/abnf"
	],
	"./accesslog": [
		"./node_modules/highlight.js/lib/languages/accesslog.js",
		"highlight/accesslog"
	],
	"./accesslog.js": [
		"./node_modules/highlight.js/lib/languages/accesslog.js",
		"highlight/accesslog"
	],
	"./actionscript": [
		"./node_modules/highlight.js/lib/languages/actionscript.js",
		"highlight/actionscript"
	],
	"./actionscript.js": [
		"./node_modules/highlight.js/lib/languages/actionscript.js",
		"highlight/actionscript"
	],
	"./ada": [
		"./node_modules/highlight.js/lib/languages/ada.js",
		"highlight/ada"
	],
	"./ada.js": [
		"./node_modules/highlight.js/lib/languages/ada.js",
		"highlight/ada"
	],
	"./angelscript": [
		"./node_modules/highlight.js/lib/languages/angelscript.js",
		"highlight/angelscript"
	],
	"./angelscript.js": [
		"./node_modules/highlight.js/lib/languages/angelscript.js",
		"highlight/angelscript"
	],
	"./apache": [
		"./node_modules/highlight.js/lib/languages/apache.js",
		"highlight/apache"
	],
	"./apache.js": [
		"./node_modules/highlight.js/lib/languages/apache.js",
		"highlight/apache"
	],
	"./applescript": [
		"./node_modules/highlight.js/lib/languages/applescript.js",
		"highlight/applescript"
	],
	"./applescript.js": [
		"./node_modules/highlight.js/lib/languages/applescript.js",
		"highlight/applescript"
	],
	"./arcade": [
		"./node_modules/highlight.js/lib/languages/arcade.js",
		"highlight/arcade"
	],
	"./arcade.js": [
		"./node_modules/highlight.js/lib/languages/arcade.js",
		"highlight/arcade"
	],
	"./arduino": [
		"./node_modules/highlight.js/lib/languages/arduino.js",
		"highlight/arduino"
	],
	"./arduino.js": [
		"./node_modules/highlight.js/lib/languages/arduino.js",
		"highlight/arduino"
	],
	"./armasm": [
		"./node_modules/highlight.js/lib/languages/armasm.js",
		"highlight/armasm"
	],
	"./armasm.js": [
		"./node_modules/highlight.js/lib/languages/armasm.js",
		"highlight/armasm"
	],
	"./asciidoc": [
		"./node_modules/highlight.js/lib/languages/asciidoc.js",
		"highlight/asciidoc"
	],
	"./asciidoc.js": [
		"./node_modules/highlight.js/lib/languages/asciidoc.js",
		"highlight/asciidoc"
	],
	"./aspectj": [
		"./node_modules/highlight.js/lib/languages/aspectj.js",
		"highlight/aspectj"
	],
	"./aspectj.js": [
		"./node_modules/highlight.js/lib/languages/aspectj.js",
		"highlight/aspectj"
	],
	"./autohotkey": [
		"./node_modules/highlight.js/lib/languages/autohotkey.js",
		"highlight/autohotkey"
	],
	"./autohotkey.js": [
		"./node_modules/highlight.js/lib/languages/autohotkey.js",
		"highlight/autohotkey"
	],
	"./autoit": [
		"./node_modules/highlight.js/lib/languages/autoit.js",
		"highlight/autoit"
	],
	"./autoit.js": [
		"./node_modules/highlight.js/lib/languages/autoit.js",
		"highlight/autoit"
	],
	"./avrasm": [
		"./node_modules/highlight.js/lib/languages/avrasm.js",
		"highlight/avrasm"
	],
	"./avrasm.js": [
		"./node_modules/highlight.js/lib/languages/avrasm.js",
		"highlight/avrasm"
	],
	"./awk": [
		"./node_modules/highlight.js/lib/languages/awk.js",
		"highlight/awk"
	],
	"./awk.js": [
		"./node_modules/highlight.js/lib/languages/awk.js",
		"highlight/awk"
	],
	"./axapta": [
		"./node_modules/highlight.js/lib/languages/axapta.js",
		"highlight/axapta"
	],
	"./axapta.js": [
		"./node_modules/highlight.js/lib/languages/axapta.js",
		"highlight/axapta"
	],
	"./bash": [
		"./node_modules/highlight.js/lib/languages/bash.js",
		"highlight/bash"
	],
	"./bash.js": [
		"./node_modules/highlight.js/lib/languages/bash.js",
		"highlight/bash"
	],
	"./basic": [
		"./node_modules/highlight.js/lib/languages/basic.js",
		"highlight/basic"
	],
	"./basic.js": [
		"./node_modules/highlight.js/lib/languages/basic.js",
		"highlight/basic"
	],
	"./bnf": [
		"./node_modules/highlight.js/lib/languages/bnf.js",
		"highlight/bnf"
	],
	"./bnf.js": [
		"./node_modules/highlight.js/lib/languages/bnf.js",
		"highlight/bnf"
	],
	"./brainfuck": [
		"./node_modules/highlight.js/lib/languages/brainfuck.js",
		"highlight/brainfuck"
	],
	"./brainfuck.js": [
		"./node_modules/highlight.js/lib/languages/brainfuck.js",
		"highlight/brainfuck"
	],
	"./c": [
		"./node_modules/highlight.js/lib/languages/c.js",
		"highlight/c"
	],
	"./c-like": [
		"./node_modules/highlight.js/lib/languages/c-like.js",
		"highlight/c-like"
	],
	"./c-like.js": [
		"./node_modules/highlight.js/lib/languages/c-like.js",
		"highlight/c-like"
	],
	"./c.js": [
		"./node_modules/highlight.js/lib/languages/c.js",
		"highlight/c"
	],
	"./cal": [
		"./node_modules/highlight.js/lib/languages/cal.js",
		"highlight/cal"
	],
	"./cal.js": [
		"./node_modules/highlight.js/lib/languages/cal.js",
		"highlight/cal"
	],
	"./capnproto": [
		"./node_modules/highlight.js/lib/languages/capnproto.js",
		"highlight/capnproto"
	],
	"./capnproto.js": [
		"./node_modules/highlight.js/lib/languages/capnproto.js",
		"highlight/capnproto"
	],
	"./ceylon": [
		"./node_modules/highlight.js/lib/languages/ceylon.js",
		"highlight/ceylon"
	],
	"./ceylon.js": [
		"./node_modules/highlight.js/lib/languages/ceylon.js",
		"highlight/ceylon"
	],
	"./clean": [
		"./node_modules/highlight.js/lib/languages/clean.js",
		"highlight/clean"
	],
	"./clean.js": [
		"./node_modules/highlight.js/lib/languages/clean.js",
		"highlight/clean"
	],
	"./clojure": [
		"./node_modules/highlight.js/lib/languages/clojure.js",
		"highlight/clojure"
	],
	"./clojure-repl": [
		"./node_modules/highlight.js/lib/languages/clojure-repl.js",
		"highlight/clojure-repl"
	],
	"./clojure-repl.js": [
		"./node_modules/highlight.js/lib/languages/clojure-repl.js",
		"highlight/clojure-repl"
	],
	"./clojure.js": [
		"./node_modules/highlight.js/lib/languages/clojure.js",
		"highlight/clojure"
	],
	"./cmake": [
		"./node_modules/highlight.js/lib/languages/cmake.js",
		"highlight/cmake"
	],
	"./cmake.js": [
		"./node_modules/highlight.js/lib/languages/cmake.js",
		"highlight/cmake"
	],
	"./coffeescript": [
		"./node_modules/highlight.js/lib/languages/coffeescript.js",
		"highlight/coffeescript"
	],
	"./coffeescript.js": [
		"./node_modules/highlight.js/lib/languages/coffeescript.js",
		"highlight/coffeescript"
	],
	"./coq": [
		"./node_modules/highlight.js/lib/languages/coq.js",
		"highlight/coq"
	],
	"./coq.js": [
		"./node_modules/highlight.js/lib/languages/coq.js",
		"highlight/coq"
	],
	"./cos": [
		"./node_modules/highlight.js/lib/languages/cos.js",
		"highlight/cos"
	],
	"./cos.js": [
		"./node_modules/highlight.js/lib/languages/cos.js",
		"highlight/cos"
	],
	"./cpp": [
		"./node_modules/highlight.js/lib/languages/cpp.js",
		"highlight/cpp"
	],
	"./cpp.js": [
		"./node_modules/highlight.js/lib/languages/cpp.js",
		"highlight/cpp"
	],
	"./crmsh": [
		"./node_modules/highlight.js/lib/languages/crmsh.js",
		"highlight/crmsh"
	],
	"./crmsh.js": [
		"./node_modules/highlight.js/lib/languages/crmsh.js",
		"highlight/crmsh"
	],
	"./crystal": [
		"./node_modules/highlight.js/lib/languages/crystal.js",
		"highlight/crystal"
	],
	"./crystal.js": [
		"./node_modules/highlight.js/lib/languages/crystal.js",
		"highlight/crystal"
	],
	"./csharp": [
		"./node_modules/highlight.js/lib/languages/csharp.js",
		"highlight/csharp"
	],
	"./csharp.js": [
		"./node_modules/highlight.js/lib/languages/csharp.js",
		"highlight/csharp"
	],
	"./csp": [
		"./node_modules/highlight.js/lib/languages/csp.js",
		"highlight/csp"
	],
	"./csp.js": [
		"./node_modules/highlight.js/lib/languages/csp.js",
		"highlight/csp"
	],
	"./css": [
		"./node_modules/highlight.js/lib/languages/css.js",
		"highlight/css"
	],
	"./css.js": [
		"./node_modules/highlight.js/lib/languages/css.js",
		"highlight/css"
	],
	"./d": [
		"./node_modules/highlight.js/lib/languages/d.js",
		"highlight/d"
	],
	"./d.js": [
		"./node_modules/highlight.js/lib/languages/d.js",
		"highlight/d"
	],
	"./dart": [
		"./node_modules/highlight.js/lib/languages/dart.js",
		"highlight/dart"
	],
	"./dart.js": [
		"./node_modules/highlight.js/lib/languages/dart.js",
		"highlight/dart"
	],
	"./delphi": [
		"./node_modules/highlight.js/lib/languages/delphi.js",
		"highlight/delphi"
	],
	"./delphi.js": [
		"./node_modules/highlight.js/lib/languages/delphi.js",
		"highlight/delphi"
	],
	"./diff": [
		"./node_modules/highlight.js/lib/languages/diff.js",
		"highlight/diff"
	],
	"./diff.js": [
		"./node_modules/highlight.js/lib/languages/diff.js",
		"highlight/diff"
	],
	"./django": [
		"./node_modules/highlight.js/lib/languages/django.js",
		"highlight/django"
	],
	"./django.js": [
		"./node_modules/highlight.js/lib/languages/django.js",
		"highlight/django"
	],
	"./dns": [
		"./node_modules/highlight.js/lib/languages/dns.js",
		"highlight/dns"
	],
	"./dns.js": [
		"./node_modules/highlight.js/lib/languages/dns.js",
		"highlight/dns"
	],
	"./dockerfile": [
		"./node_modules/highlight.js/lib/languages/dockerfile.js",
		"highlight/dockerfile"
	],
	"./dockerfile.js": [
		"./node_modules/highlight.js/lib/languages/dockerfile.js",
		"highlight/dockerfile"
	],
	"./dos": [
		"./node_modules/highlight.js/lib/languages/dos.js",
		"highlight/dos"
	],
	"./dos.js": [
		"./node_modules/highlight.js/lib/languages/dos.js",
		"highlight/dos"
	],
	"./dsconfig": [
		"./node_modules/highlight.js/lib/languages/dsconfig.js",
		"highlight/dsconfig"
	],
	"./dsconfig.js": [
		"./node_modules/highlight.js/lib/languages/dsconfig.js",
		"highlight/dsconfig"
	],
	"./dts": [
		"./node_modules/highlight.js/lib/languages/dts.js",
		"highlight/dts"
	],
	"./dts.js": [
		"./node_modules/highlight.js/lib/languages/dts.js",
		"highlight/dts"
	],
	"./dust": [
		"./node_modules/highlight.js/lib/languages/dust.js",
		"highlight/dust"
	],
	"./dust.js": [
		"./node_modules/highlight.js/lib/languages/dust.js",
		"highlight/dust"
	],
	"./ebnf": [
		"./node_modules/highlight.js/lib/languages/ebnf.js",
		"highlight/ebnf"
	],
	"./ebnf.js": [
		"./node_modules/highlight.js/lib/languages/ebnf.js",
		"highlight/ebnf"
	],
	"./elixir": [
		"./node_modules/highlight.js/lib/languages/elixir.js",
		"highlight/elixir"
	],
	"./elixir.js": [
		"./node_modules/highlight.js/lib/languages/elixir.js",
		"highlight/elixir"
	],
	"./elm": [
		"./node_modules/highlight.js/lib/languages/elm.js",
		"highlight/elm"
	],
	"./elm.js": [
		"./node_modules/highlight.js/lib/languages/elm.js",
		"highlight/elm"
	],
	"./erb": [
		"./node_modules/highlight.js/lib/languages/erb.js",
		"highlight/erb"
	],
	"./erb.js": [
		"./node_modules/highlight.js/lib/languages/erb.js",
		"highlight/erb"
	],
	"./erlang": [
		"./node_modules/highlight.js/lib/languages/erlang.js",
		"highlight/erlang"
	],
	"./erlang-repl": [
		"./node_modules/highlight.js/lib/languages/erlang-repl.js",
		"highlight/erlang-repl"
	],
	"./erlang-repl.js": [
		"./node_modules/highlight.js/lib/languages/erlang-repl.js",
		"highlight/erlang-repl"
	],
	"./erlang.js": [
		"./node_modules/highlight.js/lib/languages/erlang.js",
		"highlight/erlang"
	],
	"./excel": [
		"./node_modules/highlight.js/lib/languages/excel.js",
		"highlight/excel"
	],
	"./excel.js": [
		"./node_modules/highlight.js/lib/languages/excel.js",
		"highlight/excel"
	],
	"./fix": [
		"./node_modules/highlight.js/lib/languages/fix.js",
		"highlight/fix"
	],
	"./fix.js": [
		"./node_modules/highlight.js/lib/languages/fix.js",
		"highlight/fix"
	],
	"./flix": [
		"./node_modules/highlight.js/lib/languages/flix.js",
		"highlight/flix"
	],
	"./flix.js": [
		"./node_modules/highlight.js/lib/languages/flix.js",
		"highlight/flix"
	],
	"./fortran": [
		"./node_modules/highlight.js/lib/languages/fortran.js",
		"highlight/fortran"
	],
	"./fortran.js": [
		"./node_modules/highlight.js/lib/languages/fortran.js",
		"highlight/fortran"
	],
	"./fsharp": [
		"./node_modules/highlight.js/lib/languages/fsharp.js",
		"highlight/fsharp"
	],
	"./fsharp.js": [
		"./node_modules/highlight.js/lib/languages/fsharp.js",
		"highlight/fsharp"
	],
	"./gams": [
		"./node_modules/highlight.js/lib/languages/gams.js",
		"highlight/gams"
	],
	"./gams.js": [
		"./node_modules/highlight.js/lib/languages/gams.js",
		"highlight/gams"
	],
	"./gauss": [
		"./node_modules/highlight.js/lib/languages/gauss.js",
		"highlight/gauss"
	],
	"./gauss.js": [
		"./node_modules/highlight.js/lib/languages/gauss.js",
		"highlight/gauss"
	],
	"./gcode": [
		"./node_modules/highlight.js/lib/languages/gcode.js",
		"highlight/gcode"
	],
	"./gcode.js": [
		"./node_modules/highlight.js/lib/languages/gcode.js",
		"highlight/gcode"
	],
	"./gherkin": [
		"./node_modules/highlight.js/lib/languages/gherkin.js",
		"highlight/gherkin"
	],
	"./gherkin.js": [
		"./node_modules/highlight.js/lib/languages/gherkin.js",
		"highlight/gherkin"
	],
	"./glsl": [
		"./node_modules/highlight.js/lib/languages/glsl.js",
		"highlight/glsl"
	],
	"./glsl.js": [
		"./node_modules/highlight.js/lib/languages/glsl.js",
		"highlight/glsl"
	],
	"./gml": [
		"./node_modules/highlight.js/lib/languages/gml.js",
		"highlight/gml"
	],
	"./gml.js": [
		"./node_modules/highlight.js/lib/languages/gml.js",
		"highlight/gml"
	],
	"./go": [
		"./node_modules/highlight.js/lib/languages/go.js",
		"highlight/go"
	],
	"./go.js": [
		"./node_modules/highlight.js/lib/languages/go.js",
		"highlight/go"
	],
	"./golo": [
		"./node_modules/highlight.js/lib/languages/golo.js",
		"highlight/golo"
	],
	"./golo.js": [
		"./node_modules/highlight.js/lib/languages/golo.js",
		"highlight/golo"
	],
	"./gradle": [
		"./node_modules/highlight.js/lib/languages/gradle.js",
		"highlight/gradle"
	],
	"./gradle.js": [
		"./node_modules/highlight.js/lib/languages/gradle.js",
		"highlight/gradle"
	],
	"./groovy": [
		"./node_modules/highlight.js/lib/languages/groovy.js",
		"highlight/groovy"
	],
	"./groovy.js": [
		"./node_modules/highlight.js/lib/languages/groovy.js",
		"highlight/groovy"
	],
	"./haml": [
		"./node_modules/highlight.js/lib/languages/haml.js",
		"highlight/haml"
	],
	"./haml.js": [
		"./node_modules/highlight.js/lib/languages/haml.js",
		"highlight/haml"
	],
	"./handlebars": [
		"./node_modules/highlight.js/lib/languages/handlebars.js",
		"highlight/handlebars"
	],
	"./handlebars.js": [
		"./node_modules/highlight.js/lib/languages/handlebars.js",
		"highlight/handlebars"
	],
	"./haskell": [
		"./node_modules/highlight.js/lib/languages/haskell.js",
		"highlight/haskell"
	],
	"./haskell.js": [
		"./node_modules/highlight.js/lib/languages/haskell.js",
		"highlight/haskell"
	],
	"./haxe": [
		"./node_modules/highlight.js/lib/languages/haxe.js",
		"highlight/haxe"
	],
	"./haxe.js": [
		"./node_modules/highlight.js/lib/languages/haxe.js",
		"highlight/haxe"
	],
	"./hsp": [
		"./node_modules/highlight.js/lib/languages/hsp.js",
		"highlight/hsp"
	],
	"./hsp.js": [
		"./node_modules/highlight.js/lib/languages/hsp.js",
		"highlight/hsp"
	],
	"./htmlbars": [
		"./node_modules/highlight.js/lib/languages/htmlbars.js",
		"highlight/htmlbars"
	],
	"./htmlbars.js": [
		"./node_modules/highlight.js/lib/languages/htmlbars.js",
		"highlight/htmlbars"
	],
	"./http": [
		"./node_modules/highlight.js/lib/languages/http.js",
		"highlight/http"
	],
	"./http.js": [
		"./node_modules/highlight.js/lib/languages/http.js",
		"highlight/http"
	],
	"./hy": [
		"./node_modules/highlight.js/lib/languages/hy.js",
		"highlight/hy"
	],
	"./hy.js": [
		"./node_modules/highlight.js/lib/languages/hy.js",
		"highlight/hy"
	],
	"./inform7": [
		"./node_modules/highlight.js/lib/languages/inform7.js",
		"highlight/inform7"
	],
	"./inform7.js": [
		"./node_modules/highlight.js/lib/languages/inform7.js",
		"highlight/inform7"
	],
	"./ini": [
		"./node_modules/highlight.js/lib/languages/ini.js",
		"highlight/ini"
	],
	"./ini.js": [
		"./node_modules/highlight.js/lib/languages/ini.js",
		"highlight/ini"
	],
	"./irpf90": [
		"./node_modules/highlight.js/lib/languages/irpf90.js",
		"highlight/irpf90"
	],
	"./irpf90.js": [
		"./node_modules/highlight.js/lib/languages/irpf90.js",
		"highlight/irpf90"
	],
	"./isbl": [
		"./node_modules/highlight.js/lib/languages/isbl.js",
		"highlight/isbl"
	],
	"./isbl.js": [
		"./node_modules/highlight.js/lib/languages/isbl.js",
		"highlight/isbl"
	],
	"./java": [
		"./node_modules/highlight.js/lib/languages/java.js",
		"highlight/java"
	],
	"./java.js": [
		"./node_modules/highlight.js/lib/languages/java.js",
		"highlight/java"
	],
	"./javascript": [
		"./node_modules/highlight.js/lib/languages/javascript.js",
		"highlight/javascript"
	],
	"./javascript.js": [
		"./node_modules/highlight.js/lib/languages/javascript.js",
		"highlight/javascript"
	],
	"./jboss-cli": [
		"./node_modules/highlight.js/lib/languages/jboss-cli.js",
		"highlight/jboss-cli"
	],
	"./jboss-cli.js": [
		"./node_modules/highlight.js/lib/languages/jboss-cli.js",
		"highlight/jboss-cli"
	],
	"./json": [
		"./node_modules/highlight.js/lib/languages/json.js",
		"highlight/json"
	],
	"./json.js": [
		"./node_modules/highlight.js/lib/languages/json.js",
		"highlight/json"
	],
	"./julia": [
		"./node_modules/highlight.js/lib/languages/julia.js",
		"highlight/julia"
	],
	"./julia-repl": [
		"./node_modules/highlight.js/lib/languages/julia-repl.js",
		"highlight/julia-repl"
	],
	"./julia-repl.js": [
		"./node_modules/highlight.js/lib/languages/julia-repl.js",
		"highlight/julia-repl"
	],
	"./julia.js": [
		"./node_modules/highlight.js/lib/languages/julia.js",
		"highlight/julia"
	],
	"./kotlin": [
		"./node_modules/highlight.js/lib/languages/kotlin.js",
		"highlight/kotlin"
	],
	"./kotlin.js": [
		"./node_modules/highlight.js/lib/languages/kotlin.js",
		"highlight/kotlin"
	],
	"./lasso": [
		"./node_modules/highlight.js/lib/languages/lasso.js",
		"highlight/lasso"
	],
	"./lasso.js": [
		"./node_modules/highlight.js/lib/languages/lasso.js",
		"highlight/lasso"
	],
	"./latex": [
		"./node_modules/highlight.js/lib/languages/latex.js",
		"highlight/latex"
	],
	"./latex.js": [
		"./node_modules/highlight.js/lib/languages/latex.js",
		"highlight/latex"
	],
	"./ldif": [
		"./node_modules/highlight.js/lib/languages/ldif.js",
		"highlight/ldif"
	],
	"./ldif.js": [
		"./node_modules/highlight.js/lib/languages/ldif.js",
		"highlight/ldif"
	],
	"./leaf": [
		"./node_modules/highlight.js/lib/languages/leaf.js",
		"highlight/leaf"
	],
	"./leaf.js": [
		"./node_modules/highlight.js/lib/languages/leaf.js",
		"highlight/leaf"
	],
	"./less": [
		"./node_modules/highlight.js/lib/languages/less.js",
		"highlight/less"
	],
	"./less.js": [
		"./node_modules/highlight.js/lib/languages/less.js",
		"highlight/less"
	],
	"./lisp": [
		"./node_modules/highlight.js/lib/languages/lisp.js",
		"highlight/lisp"
	],
	"./lisp.js": [
		"./node_modules/highlight.js/lib/languages/lisp.js",
		"highlight/lisp"
	],
	"./livecodeserver": [
		"./node_modules/highlight.js/lib/languages/livecodeserver.js",
		"highlight/livecodeserver"
	],
	"./livecodeserver.js": [
		"./node_modules/highlight.js/lib/languages/livecodeserver.js",
		"highlight/livecodeserver"
	],
	"./livescript": [
		"./node_modules/highlight.js/lib/languages/livescript.js",
		"highlight/livescript"
	],
	"./livescript.js": [
		"./node_modules/highlight.js/lib/languages/livescript.js",
		"highlight/livescript"
	],
	"./llvm": [
		"./node_modules/highlight.js/lib/languages/llvm.js",
		"highlight/llvm"
	],
	"./llvm.js": [
		"./node_modules/highlight.js/lib/languages/llvm.js",
		"highlight/llvm"
	],
	"./lsl": [
		"./node_modules/highlight.js/lib/languages/lsl.js",
		"highlight/lsl"
	],
	"./lsl.js": [
		"./node_modules/highlight.js/lib/languages/lsl.js",
		"highlight/lsl"
	],
	"./lua": [
		"./node_modules/highlight.js/lib/languages/lua.js",
		"highlight/lua"
	],
	"./lua.js": [
		"./node_modules/highlight.js/lib/languages/lua.js",
		"highlight/lua"
	],
	"./makefile": [
		"./node_modules/highlight.js/lib/languages/makefile.js",
		"highlight/makefile"
	],
	"./makefile.js": [
		"./node_modules/highlight.js/lib/languages/makefile.js",
		"highlight/makefile"
	],
	"./markdown": [
		"./node_modules/highlight.js/lib/languages/markdown.js",
		"highlight/markdown"
	],
	"./markdown.js": [
		"./node_modules/highlight.js/lib/languages/markdown.js",
		"highlight/markdown"
	],
	"./mathematica": [
		"./node_modules/highlight.js/lib/languages/mathematica.js",
		"highlight/mathematica"
	],
	"./mathematica.js": [
		"./node_modules/highlight.js/lib/languages/mathematica.js",
		"highlight/mathematica"
	],
	"./matlab": [
		"./node_modules/highlight.js/lib/languages/matlab.js",
		"highlight/matlab"
	],
	"./matlab.js": [
		"./node_modules/highlight.js/lib/languages/matlab.js",
		"highlight/matlab"
	],
	"./maxima": [
		"./node_modules/highlight.js/lib/languages/maxima.js",
		"highlight/maxima"
	],
	"./maxima.js": [
		"./node_modules/highlight.js/lib/languages/maxima.js",
		"highlight/maxima"
	],
	"./mel": [
		"./node_modules/highlight.js/lib/languages/mel.js",
		"highlight/mel"
	],
	"./mel.js": [
		"./node_modules/highlight.js/lib/languages/mel.js",
		"highlight/mel"
	],
	"./mercury": [
		"./node_modules/highlight.js/lib/languages/mercury.js",
		"highlight/mercury"
	],
	"./mercury.js": [
		"./node_modules/highlight.js/lib/languages/mercury.js",
		"highlight/mercury"
	],
	"./mipsasm": [
		"./node_modules/highlight.js/lib/languages/mipsasm.js",
		"highlight/mipsasm"
	],
	"./mipsasm.js": [
		"./node_modules/highlight.js/lib/languages/mipsasm.js",
		"highlight/mipsasm"
	],
	"./mizar": [
		"./node_modules/highlight.js/lib/languages/mizar.js",
		"highlight/mizar"
	],
	"./mizar.js": [
		"./node_modules/highlight.js/lib/languages/mizar.js",
		"highlight/mizar"
	],
	"./mojolicious": [
		"./node_modules/highlight.js/lib/languages/mojolicious.js",
		"highlight/mojolicious"
	],
	"./mojolicious.js": [
		"./node_modules/highlight.js/lib/languages/mojolicious.js",
		"highlight/mojolicious"
	],
	"./monkey": [
		"./node_modules/highlight.js/lib/languages/monkey.js",
		"highlight/monkey"
	],
	"./monkey.js": [
		"./node_modules/highlight.js/lib/languages/monkey.js",
		"highlight/monkey"
	],
	"./moonscript": [
		"./node_modules/highlight.js/lib/languages/moonscript.js",
		"highlight/moonscript"
	],
	"./moonscript.js": [
		"./node_modules/highlight.js/lib/languages/moonscript.js",
		"highlight/moonscript"
	],
	"./n1ql": [
		"./node_modules/highlight.js/lib/languages/n1ql.js",
		"highlight/n1ql"
	],
	"./n1ql.js": [
		"./node_modules/highlight.js/lib/languages/n1ql.js",
		"highlight/n1ql"
	],
	"./nginx": [
		"./node_modules/highlight.js/lib/languages/nginx.js",
		"highlight/nginx"
	],
	"./nginx.js": [
		"./node_modules/highlight.js/lib/languages/nginx.js",
		"highlight/nginx"
	],
	"./nim": [
		"./node_modules/highlight.js/lib/languages/nim.js",
		"highlight/nim"
	],
	"./nim.js": [
		"./node_modules/highlight.js/lib/languages/nim.js",
		"highlight/nim"
	],
	"./nix": [
		"./node_modules/highlight.js/lib/languages/nix.js",
		"highlight/nix"
	],
	"./nix.js": [
		"./node_modules/highlight.js/lib/languages/nix.js",
		"highlight/nix"
	],
	"./node-repl": [
		"./node_modules/highlight.js/lib/languages/node-repl.js",
		"highlight/node-repl"
	],
	"./node-repl.js": [
		"./node_modules/highlight.js/lib/languages/node-repl.js",
		"highlight/node-repl"
	],
	"./nsis": [
		"./node_modules/highlight.js/lib/languages/nsis.js",
		"highlight/nsis"
	],
	"./nsis.js": [
		"./node_modules/highlight.js/lib/languages/nsis.js",
		"highlight/nsis"
	],
	"./objectivec": [
		"./node_modules/highlight.js/lib/languages/objectivec.js",
		"highlight/objectivec"
	],
	"./objectivec.js": [
		"./node_modules/highlight.js/lib/languages/objectivec.js",
		"highlight/objectivec"
	],
	"./ocaml": [
		"./node_modules/highlight.js/lib/languages/ocaml.js",
		"highlight/ocaml"
	],
	"./ocaml.js": [
		"./node_modules/highlight.js/lib/languages/ocaml.js",
		"highlight/ocaml"
	],
	"./openscad": [
		"./node_modules/highlight.js/lib/languages/openscad.js",
		"highlight/openscad"
	],
	"./openscad.js": [
		"./node_modules/highlight.js/lib/languages/openscad.js",
		"highlight/openscad"
	],
	"./oxygene": [
		"./node_modules/highlight.js/lib/languages/oxygene.js",
		"highlight/oxygene"
	],
	"./oxygene.js": [
		"./node_modules/highlight.js/lib/languages/oxygene.js",
		"highlight/oxygene"
	],
	"./parser3": [
		"./node_modules/highlight.js/lib/languages/parser3.js",
		"highlight/parser3"
	],
	"./parser3.js": [
		"./node_modules/highlight.js/lib/languages/parser3.js",
		"highlight/parser3"
	],
	"./perl": [
		"./node_modules/highlight.js/lib/languages/perl.js",
		"highlight/perl"
	],
	"./perl.js": [
		"./node_modules/highlight.js/lib/languages/perl.js",
		"highlight/perl"
	],
	"./pf": [
		"./node_modules/highlight.js/lib/languages/pf.js",
		"highlight/pf"
	],
	"./pf.js": [
		"./node_modules/highlight.js/lib/languages/pf.js",
		"highlight/pf"
	],
	"./pgsql": [
		"./node_modules/highlight.js/lib/languages/pgsql.js",
		"highlight/pgsql"
	],
	"./pgsql.js": [
		"./node_modules/highlight.js/lib/languages/pgsql.js",
		"highlight/pgsql"
	],
	"./php": [
		"./node_modules/highlight.js/lib/languages/php.js",
		"highlight/php"
	],
	"./php-template": [
		"./node_modules/highlight.js/lib/languages/php-template.js",
		"highlight/php-template"
	],
	"./php-template.js": [
		"./node_modules/highlight.js/lib/languages/php-template.js",
		"highlight/php-template"
	],
	"./php.js": [
		"./node_modules/highlight.js/lib/languages/php.js",
		"highlight/php"
	],
	"./plaintext": [
		"./node_modules/highlight.js/lib/languages/plaintext.js",
		"highlight/plaintext"
	],
	"./plaintext.js": [
		"./node_modules/highlight.js/lib/languages/plaintext.js",
		"highlight/plaintext"
	],
	"./pony": [
		"./node_modules/highlight.js/lib/languages/pony.js",
		"highlight/pony"
	],
	"./pony.js": [
		"./node_modules/highlight.js/lib/languages/pony.js",
		"highlight/pony"
	],
	"./powershell": [
		"./node_modules/highlight.js/lib/languages/powershell.js",
		"highlight/powershell"
	],
	"./powershell.js": [
		"./node_modules/highlight.js/lib/languages/powershell.js",
		"highlight/powershell"
	],
	"./processing": [
		"./node_modules/highlight.js/lib/languages/processing.js",
		"highlight/processing"
	],
	"./processing.js": [
		"./node_modules/highlight.js/lib/languages/processing.js",
		"highlight/processing"
	],
	"./profile": [
		"./node_modules/highlight.js/lib/languages/profile.js",
		"highlight/profile"
	],
	"./profile.js": [
		"./node_modules/highlight.js/lib/languages/profile.js",
		"highlight/profile"
	],
	"./prolog": [
		"./node_modules/highlight.js/lib/languages/prolog.js",
		"highlight/prolog"
	],
	"./prolog.js": [
		"./node_modules/highlight.js/lib/languages/prolog.js",
		"highlight/prolog"
	],
	"./properties": [
		"./node_modules/highlight.js/lib/languages/properties.js",
		"highlight/properties"
	],
	"./properties.js": [
		"./node_modules/highlight.js/lib/languages/properties.js",
		"highlight/properties"
	],
	"./protobuf": [
		"./node_modules/highlight.js/lib/languages/protobuf.js",
		"highlight/protobuf"
	],
	"./protobuf.js": [
		"./node_modules/highlight.js/lib/languages/protobuf.js",
		"highlight/protobuf"
	],
	"./puppet": [
		"./node_modules/highlight.js/lib/languages/puppet.js",
		"highlight/puppet"
	],
	"./puppet.js": [
		"./node_modules/highlight.js/lib/languages/puppet.js",
		"highlight/puppet"
	],
	"./purebasic": [
		"./node_modules/highlight.js/lib/languages/purebasic.js",
		"highlight/purebasic"
	],
	"./purebasic.js": [
		"./node_modules/highlight.js/lib/languages/purebasic.js",
		"highlight/purebasic"
	],
	"./python": [
		"./node_modules/highlight.js/lib/languages/python.js",
		"highlight/python"
	],
	"./python-repl": [
		"./node_modules/highlight.js/lib/languages/python-repl.js",
		"highlight/python-repl"
	],
	"./python-repl.js": [
		"./node_modules/highlight.js/lib/languages/python-repl.js",
		"highlight/python-repl"
	],
	"./python.js": [
		"./node_modules/highlight.js/lib/languages/python.js",
		"highlight/python"
	],
	"./q": [
		"./node_modules/highlight.js/lib/languages/q.js",
		"highlight/q"
	],
	"./q.js": [
		"./node_modules/highlight.js/lib/languages/q.js",
		"highlight/q"
	],
	"./qml": [
		"./node_modules/highlight.js/lib/languages/qml.js",
		"highlight/qml"
	],
	"./qml.js": [
		"./node_modules/highlight.js/lib/languages/qml.js",
		"highlight/qml"
	],
	"./r": [
		"./node_modules/highlight.js/lib/languages/r.js",
		"highlight/r"
	],
	"./r.js": [
		"./node_modules/highlight.js/lib/languages/r.js",
		"highlight/r"
	],
	"./reasonml": [
		"./node_modules/highlight.js/lib/languages/reasonml.js",
		"highlight/reasonml"
	],
	"./reasonml.js": [
		"./node_modules/highlight.js/lib/languages/reasonml.js",
		"highlight/reasonml"
	],
	"./rib": [
		"./node_modules/highlight.js/lib/languages/rib.js",
		"highlight/rib"
	],
	"./rib.js": [
		"./node_modules/highlight.js/lib/languages/rib.js",
		"highlight/rib"
	],
	"./roboconf": [
		"./node_modules/highlight.js/lib/languages/roboconf.js",
		"highlight/roboconf"
	],
	"./roboconf.js": [
		"./node_modules/highlight.js/lib/languages/roboconf.js",
		"highlight/roboconf"
	],
	"./routeros": [
		"./node_modules/highlight.js/lib/languages/routeros.js",
		"highlight/routeros"
	],
	"./routeros.js": [
		"./node_modules/highlight.js/lib/languages/routeros.js",
		"highlight/routeros"
	],
	"./rsl": [
		"./node_modules/highlight.js/lib/languages/rsl.js",
		"highlight/rsl"
	],
	"./rsl.js": [
		"./node_modules/highlight.js/lib/languages/rsl.js",
		"highlight/rsl"
	],
	"./ruby": [
		"./node_modules/highlight.js/lib/languages/ruby.js",
		"highlight/ruby"
	],
	"./ruby.js": [
		"./node_modules/highlight.js/lib/languages/ruby.js",
		"highlight/ruby"
	],
	"./ruleslanguage": [
		"./node_modules/highlight.js/lib/languages/ruleslanguage.js",
		"highlight/ruleslanguage"
	],
	"./ruleslanguage.js": [
		"./node_modules/highlight.js/lib/languages/ruleslanguage.js",
		"highlight/ruleslanguage"
	],
	"./rust": [
		"./node_modules/highlight.js/lib/languages/rust.js",
		"highlight/rust"
	],
	"./rust.js": [
		"./node_modules/highlight.js/lib/languages/rust.js",
		"highlight/rust"
	],
	"./sas": [
		"./node_modules/highlight.js/lib/languages/sas.js",
		"highlight/sas"
	],
	"./sas.js": [
		"./node_modules/highlight.js/lib/languages/sas.js",
		"highlight/sas"
	],
	"./scala": [
		"./node_modules/highlight.js/lib/languages/scala.js",
		"highlight/scala"
	],
	"./scala.js": [
		"./node_modules/highlight.js/lib/languages/scala.js",
		"highlight/scala"
	],
	"./scheme": [
		"./node_modules/highlight.js/lib/languages/scheme.js",
		"highlight/scheme"
	],
	"./scheme.js": [
		"./node_modules/highlight.js/lib/languages/scheme.js",
		"highlight/scheme"
	],
	"./scilab": [
		"./node_modules/highlight.js/lib/languages/scilab.js",
		"highlight/scilab"
	],
	"./scilab.js": [
		"./node_modules/highlight.js/lib/languages/scilab.js",
		"highlight/scilab"
	],
	"./scss": [
		"./node_modules/highlight.js/lib/languages/scss.js",
		"highlight/scss"
	],
	"./scss.js": [
		"./node_modules/highlight.js/lib/languages/scss.js",
		"highlight/scss"
	],
	"./shell": [
		"./node_modules/highlight.js/lib/languages/shell.js",
		"highlight/shell"
	],
	"./shell.js": [
		"./node_modules/highlight.js/lib/languages/shell.js",
		"highlight/shell"
	],
	"./smali": [
		"./node_modules/highlight.js/lib/languages/smali.js",
		"highlight/smali"
	],
	"./smali.js": [
		"./node_modules/highlight.js/lib/languages/smali.js",
		"highlight/smali"
	],
	"./smalltalk": [
		"./node_modules/highlight.js/lib/languages/smalltalk.js",
		"highlight/smalltalk"
	],
	"./smalltalk.js": [
		"./node_modules/highlight.js/lib/languages/smalltalk.js",
		"highlight/smalltalk"
	],
	"./sml": [
		"./node_modules/highlight.js/lib/languages/sml.js",
		"highlight/sml"
	],
	"./sml.js": [
		"./node_modules/highlight.js/lib/languages/sml.js",
		"highlight/sml"
	],
	"./sqf": [
		"./node_modules/highlight.js/lib/languages/sqf.js",
		"highlight/sqf"
	],
	"./sqf.js": [
		"./node_modules/highlight.js/lib/languages/sqf.js",
		"highlight/sqf"
	],
	"./sql": [
		"./node_modules/highlight.js/lib/languages/sql.js",
		"highlight/sql"
	],
	"./sql.js": [
		"./node_modules/highlight.js/lib/languages/sql.js",
		"highlight/sql"
	],
	"./sql_more": [
		"./node_modules/highlight.js/lib/languages/sql_more.js",
		"highlight/sql_more"
	],
	"./sql_more.js": [
		"./node_modules/highlight.js/lib/languages/sql_more.js",
		"highlight/sql_more"
	],
	"./stan": [
		"./node_modules/highlight.js/lib/languages/stan.js",
		"highlight/stan"
	],
	"./stan.js": [
		"./node_modules/highlight.js/lib/languages/stan.js",
		"highlight/stan"
	],
	"./stata": [
		"./node_modules/highlight.js/lib/languages/stata.js",
		"highlight/stata"
	],
	"./stata.js": [
		"./node_modules/highlight.js/lib/languages/stata.js",
		"highlight/stata"
	],
	"./step21": [
		"./node_modules/highlight.js/lib/languages/step21.js",
		"highlight/step21"
	],
	"./step21.js": [
		"./node_modules/highlight.js/lib/languages/step21.js",
		"highlight/step21"
	],
	"./stylus": [
		"./node_modules/highlight.js/lib/languages/stylus.js",
		"highlight/stylus"
	],
	"./stylus.js": [
		"./node_modules/highlight.js/lib/languages/stylus.js",
		"highlight/stylus"
	],
	"./subunit": [
		"./node_modules/highlight.js/lib/languages/subunit.js",
		"highlight/subunit"
	],
	"./subunit.js": [
		"./node_modules/highlight.js/lib/languages/subunit.js",
		"highlight/subunit"
	],
	"./swift": [
		"./node_modules/highlight.js/lib/languages/swift.js",
		"highlight/swift"
	],
	"./swift.js": [
		"./node_modules/highlight.js/lib/languages/swift.js",
		"highlight/swift"
	],
	"./taggerscript": [
		"./node_modules/highlight.js/lib/languages/taggerscript.js",
		"highlight/taggerscript"
	],
	"./taggerscript.js": [
		"./node_modules/highlight.js/lib/languages/taggerscript.js",
		"highlight/taggerscript"
	],
	"./tap": [
		"./node_modules/highlight.js/lib/languages/tap.js",
		"highlight/tap"
	],
	"./tap.js": [
		"./node_modules/highlight.js/lib/languages/tap.js",
		"highlight/tap"
	],
	"./tcl": [
		"./node_modules/highlight.js/lib/languages/tcl.js",
		"highlight/tcl"
	],
	"./tcl.js": [
		"./node_modules/highlight.js/lib/languages/tcl.js",
		"highlight/tcl"
	],
	"./thrift": [
		"./node_modules/highlight.js/lib/languages/thrift.js",
		"highlight/thrift"
	],
	"./thrift.js": [
		"./node_modules/highlight.js/lib/languages/thrift.js",
		"highlight/thrift"
	],
	"./tp": [
		"./node_modules/highlight.js/lib/languages/tp.js",
		"highlight/tp"
	],
	"./tp.js": [
		"./node_modules/highlight.js/lib/languages/tp.js",
		"highlight/tp"
	],
	"./twig": [
		"./node_modules/highlight.js/lib/languages/twig.js",
		"highlight/twig"
	],
	"./twig.js": [
		"./node_modules/highlight.js/lib/languages/twig.js",
		"highlight/twig"
	],
	"./typescript": [
		"./node_modules/highlight.js/lib/languages/typescript.js",
		"highlight/typescript"
	],
	"./typescript.js": [
		"./node_modules/highlight.js/lib/languages/typescript.js",
		"highlight/typescript"
	],
	"./vala": [
		"./node_modules/highlight.js/lib/languages/vala.js",
		"highlight/vala"
	],
	"./vala.js": [
		"./node_modules/highlight.js/lib/languages/vala.js",
		"highlight/vala"
	],
	"./vbnet": [
		"./node_modules/highlight.js/lib/languages/vbnet.js",
		"highlight/vbnet"
	],
	"./vbnet.js": [
		"./node_modules/highlight.js/lib/languages/vbnet.js",
		"highlight/vbnet"
	],
	"./vbscript": [
		"./node_modules/highlight.js/lib/languages/vbscript.js",
		"highlight/vbscript"
	],
	"./vbscript-html": [
		"./node_modules/highlight.js/lib/languages/vbscript-html.js",
		"highlight/vbscript-html"
	],
	"./vbscript-html.js": [
		"./node_modules/highlight.js/lib/languages/vbscript-html.js",
		"highlight/vbscript-html"
	],
	"./vbscript.js": [
		"./node_modules/highlight.js/lib/languages/vbscript.js",
		"highlight/vbscript"
	],
	"./verilog": [
		"./node_modules/highlight.js/lib/languages/verilog.js",
		"highlight/verilog"
	],
	"./verilog.js": [
		"./node_modules/highlight.js/lib/languages/verilog.js",
		"highlight/verilog"
	],
	"./vhdl": [
		"./node_modules/highlight.js/lib/languages/vhdl.js",
		"highlight/vhdl"
	],
	"./vhdl.js": [
		"./node_modules/highlight.js/lib/languages/vhdl.js",
		"highlight/vhdl"
	],
	"./vim": [
		"./node_modules/highlight.js/lib/languages/vim.js",
		"highlight/vim"
	],
	"./vim.js": [
		"./node_modules/highlight.js/lib/languages/vim.js",
		"highlight/vim"
	],
	"./x86asm": [
		"./node_modules/highlight.js/lib/languages/x86asm.js",
		"highlight/x86asm"
	],
	"./x86asm.js": [
		"./node_modules/highlight.js/lib/languages/x86asm.js",
		"highlight/x86asm"
	],
	"./xl": [
		"./node_modules/highlight.js/lib/languages/xl.js",
		"highlight/xl"
	],
	"./xl.js": [
		"./node_modules/highlight.js/lib/languages/xl.js",
		"highlight/xl"
	],
	"./xml": [
		"./node_modules/highlight.js/lib/languages/xml.js",
		"highlight/xml"
	],
	"./xml.js": [
		"./node_modules/highlight.js/lib/languages/xml.js",
		"highlight/xml"
	],
	"./xquery": [
		"./node_modules/highlight.js/lib/languages/xquery.js",
		"highlight/xquery"
	],
	"./xquery.js": [
		"./node_modules/highlight.js/lib/languages/xquery.js",
		"highlight/xquery"
	],
	"./yaml": [
		"./node_modules/highlight.js/lib/languages/yaml.js",
		"highlight/yaml"
	],
	"./yaml.js": [
		"./node_modules/highlight.js/lib/languages/yaml.js",
		"highlight/yaml"
	],
	"./zephir": [
		"./node_modules/highlight.js/lib/languages/zephir.js",
		"highlight/zephir"
	],
	"./zephir.js": [
		"./node_modules/highlight.js/lib/languages/zephir.js",
		"highlight/zephir"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 7 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./node_modules/highlight.js/lib/languages lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_style_index_0_id_5ffe7972_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_style_index_0_id_5ffe7972_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_style_index_0_id_5ffe7972_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_style_index_0_id_5ffe7972_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_style_index_0_id_5ffe7972_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=0&id=76135766&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=0&id=76135766&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_0_id_76135766_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditorWrapper.vue?vue&type=style&index=0&id=76135766&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=0&id=76135766&scoped=true&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_0_id_76135766_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_0_id_76135766_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_0_id_76135766_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_0_id_76135766_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=1&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=1&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditorWrapper.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=1&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/DirectEditing.vue?vue&type=style&index=0&id=37e36225&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/DirectEditing.vue?vue&type=style&index=0&id=37e36225&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectEditing_vue_vue_type_style_index_0_id_37e36225_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DirectEditing.vue?vue&type=style&index=0&id=37e36225&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/DirectEditing.vue?vue&type=style&index=0&id=37e36225&scoped=true&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectEditing_vue_vue_type_style_index_0_id_37e36225_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectEditing_vue_vue_type_style_index_0_id_37e36225_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectEditing_vue_vue_type_style_index_0_id_37e36225_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectEditing_vue_vue_type_style_index_0_id_37e36225_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./src/components/CollisionResolveDialog.vue":
/*!***************************************************!*\
  !*** ./src/components/CollisionResolveDialog.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CollisionResolveDialog_vue_vue_type_template_id_5ffe7972_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollisionResolveDialog.vue?vue&type=template&id=5ffe7972&scoped=true& */ "./src/components/CollisionResolveDialog.vue?vue&type=template&id=5ffe7972&scoped=true&");
/* harmony import */ var _CollisionResolveDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CollisionResolveDialog.vue?vue&type=script&lang=js& */ "./src/components/CollisionResolveDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _CollisionResolveDialog_vue_vue_type_style_index_0_id_5ffe7972_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss& */ "./src/components/CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _CollisionResolveDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CollisionResolveDialog_vue_vue_type_template_id_5ffe7972_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CollisionResolveDialog_vue_vue_type_template_id_5ffe7972_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5ffe7972",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/CollisionResolveDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/EditorWrapper.vue":
/*!******************************************!*\
  !*** ./src/components/EditorWrapper.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditorWrapper_vue_vue_type_template_id_76135766_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditorWrapper.vue?vue&type=template&id=76135766&scoped=true& */ "./src/components/EditorWrapper.vue?vue&type=template&id=76135766&scoped=true&");
/* harmony import */ var _EditorWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditorWrapper.vue?vue&type=script&lang=js& */ "./src/components/EditorWrapper.vue?vue&type=script&lang=js&");
/* harmony import */ var _EditorWrapper_vue_vue_type_style_index_0_id_76135766_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditorWrapper.vue?vue&type=style&index=0&id=76135766&scoped=true&lang=scss& */ "./src/components/EditorWrapper.vue?vue&type=style&index=0&id=76135766&scoped=true&lang=scss&");
/* harmony import */ var _EditorWrapper_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditorWrapper.vue?vue&type=style&index=1&lang=scss& */ "./src/components/EditorWrapper.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__.default)(
  _EditorWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EditorWrapper_vue_vue_type_template_id_76135766_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditorWrapper_vue_vue_type_template_id_76135766_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "76135766",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/EditorWrapper.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/ReadOnlyEditor.vue":
/*!*******************************************!*\
  !*** ./src/components/ReadOnlyEditor.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ReadOnlyEditor_vue_vue_type_template_id_41c92d1f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReadOnlyEditor.vue?vue&type=template&id=41c92d1f& */ "./src/components/ReadOnlyEditor.vue?vue&type=template&id=41c92d1f&");
/* harmony import */ var _ReadOnlyEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReadOnlyEditor.vue?vue&type=script&lang=js& */ "./src/components/ReadOnlyEditor.vue?vue&type=script&lang=js&");
/* harmony import */ var _ReadOnlyEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss& */ "./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _ReadOnlyEditor_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss& */ "./src/components/ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__.default)(
  _ReadOnlyEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ReadOnlyEditor_vue_vue_type_template_id_41c92d1f___WEBPACK_IMPORTED_MODULE_0__.render,
  _ReadOnlyEditor_vue_vue_type_template_id_41c92d1f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/ReadOnlyEditor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/views/DirectEditing.vue":
/*!*************************************!*\
  !*** ./src/views/DirectEditing.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DirectEditing_vue_vue_type_template_id_37e36225_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DirectEditing.vue?vue&type=template&id=37e36225&scoped=true& */ "./src/views/DirectEditing.vue?vue&type=template&id=37e36225&scoped=true&");
/* harmony import */ var _DirectEditing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DirectEditing.vue?vue&type=script&lang=js& */ "./src/views/DirectEditing.vue?vue&type=script&lang=js&");
/* harmony import */ var _DirectEditing_vue_vue_type_style_index_0_id_37e36225_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DirectEditing.vue?vue&type=style&index=0&id=37e36225&scoped=true&lang=scss& */ "./src/views/DirectEditing.vue?vue&type=style&index=0&id=37e36225&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _DirectEditing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _DirectEditing_vue_vue_type_template_id_37e36225_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _DirectEditing_vue_vue_type_template_id_37e36225_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "37e36225",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/DirectEditing.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/CollisionResolveDialog.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./src/components/CollisionResolveDialog.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CollisionResolveDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CollisionResolveDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/components/EditorWrapper.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/components/EditorWrapper.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditorWrapper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/components/ReadOnlyEditor.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/components/ReadOnlyEditor.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReadOnlyEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/views/DirectEditing.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/views/DirectEditing.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectEditing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DirectEditing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/DirectEditing.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectEditing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/components/CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss&":
/*!*************************************************************************************************************!*\
  !*** ./src/components/CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_style_index_0_id_5ffe7972_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CollisionResolveDialog.vue?vue&type=style&index=0&id=5ffe7972&scoped=true&lang=scss&");


/***/ }),

/***/ "./src/components/EditorWrapper.vue?vue&type=style&index=0&id=76135766&scoped=true&lang=scss&":
/*!****************************************************************************************************!*\
  !*** ./src/components/EditorWrapper.vue?vue&type=style&index=0&id=76135766&scoped=true&lang=scss& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_0_id_76135766_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditorWrapper.vue?vue&type=style&index=0&id=76135766&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=0&id=76135766&scoped=true&lang=scss&");


/***/ }),

/***/ "./src/components/EditorWrapper.vue?vue&type=style&index=1&lang=scss&":
/*!****************************************************************************!*\
  !*** ./src/components/EditorWrapper.vue?vue&type=style&index=1&lang=scss& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditorWrapper.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=style&index=1&lang=scss&");


/***/ }),

/***/ "./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************!*\
  !*** ./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./src/components/ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss&":
/*!*****************************************************************************!*\
  !*** ./src/components/ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss&");


/***/ }),

/***/ "./src/views/DirectEditing.vue?vue&type=style&index=0&id=37e36225&scoped=true&lang=scss&":
/*!***********************************************************************************************!*\
  !*** ./src/views/DirectEditing.vue?vue&type=style&index=0&id=37e36225&scoped=true&lang=scss& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectEditing_vue_vue_type_style_index_0_id_37e36225_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DirectEditing.vue?vue&type=style&index=0&id=37e36225&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/DirectEditing.vue?vue&type=style&index=0&id=37e36225&scoped=true&lang=scss&");


/***/ }),

/***/ "./src/components/CollisionResolveDialog.vue?vue&type=template&id=5ffe7972&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./src/components/CollisionResolveDialog.vue?vue&type=template&id=5ffe7972&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_template_id_5ffe7972_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_template_id_5ffe7972_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollisionResolveDialog_vue_vue_type_template_id_5ffe7972_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CollisionResolveDialog.vue?vue&type=template&id=5ffe7972&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CollisionResolveDialog.vue?vue&type=template&id=5ffe7972&scoped=true&");


/***/ }),

/***/ "./src/components/EditorWrapper.vue?vue&type=template&id=76135766&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./src/components/EditorWrapper.vue?vue&type=template&id=76135766&scoped=true& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_template_id_76135766_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_template_id_76135766_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_template_id_76135766_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditorWrapper.vue?vue&type=template&id=76135766&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=template&id=76135766&scoped=true&");


/***/ }),

/***/ "./src/components/ReadOnlyEditor.vue?vue&type=template&id=41c92d1f&":
/*!**************************************************************************!*\
  !*** ./src/components/ReadOnlyEditor.vue?vue&type=template&id=41c92d1f& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_template_id_41c92d1f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_template_id_41c92d1f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_template_id_41c92d1f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReadOnlyEditor.vue?vue&type=template&id=41c92d1f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=template&id=41c92d1f&");


/***/ }),

/***/ "./src/views/DirectEditing.vue?vue&type=template&id=37e36225&scoped=true&":
/*!********************************************************************************!*\
  !*** ./src/views/DirectEditing.vue?vue&type=template&id=37e36225&scoped=true& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectEditing_vue_vue_type_template_id_37e36225_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectEditing_vue_vue_type_template_id_37e36225_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectEditing_vue_vue_type_template_id_37e36225_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DirectEditing.vue?vue&type=template&id=37e36225&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/DirectEditing.vue?vue&type=template&id=37e36225&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CollisionResolveDialog.vue?vue&type=template&id=5ffe7972&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CollisionResolveDialog.vue?vue&type=template&id=5ffe7972&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "collision-resolve-dialog",
      attrs: { id: "resolve-conflicts" }
    },
    [
      _c(
        "button",
        {
          on: {
            click: function($event) {
              return _vm.$emit("resolve-use-this-version")
            }
          }
        },
        [
          _vm._v(
            "\n\t\t" + _vm._s(_vm.t("text", "Use current version")) + "\n\t"
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          on: {
            click: function($event) {
              return _vm.$emit("resolve-use-server-version")
            }
          }
        },
        [
          _vm._v(
            "\n\t\t" + _vm._s(_vm.t("text", "Use the saved version")) + "\n\t"
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=template&id=76135766&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/EditorWrapper.vue?vue&type=template&id=76135766&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "editor-container" } },
    [
      _vm.currentSession && _vm.active
        ? _c("div", { staticClass: "document-status" }, [
            _vm.idle
              ? _c("p", { staticClass: "msg" }, [
                  _vm._v(
                    "\n\t\t\t" +
                      _vm._s(
                        _vm.t(
                          "text",
                          "Document idle for {timeout} minutes, click to continue editing",
                          { timeout: _vm.IDLE_TIMEOUT }
                        )
                      ) +
                      " "
                  ),
                  _c(
                    "a",
                    {
                      staticClass: "button primary",
                      on: { click: _vm.reconnect }
                    },
                    [_vm._v(_vm._s(_vm.t("text", "Reconnect")))]
                  )
                ])
              : _vm.hasSyncCollission
              ? _c("p", { staticClass: "msg icon-error" }, [
                  _vm._v(
                    "\n\t\t\t" +
                      _vm._s(
                        _vm.t(
                          "text",
                          "The document has been changed outside of the editor. The changes cannot be applied."
                        )
                      ) +
                      "\n\t\t"
                  )
                ])
              : _vm.hasConnectionIssue
              ? _c("p", { staticClass: "msg" }, [
                  _vm._v(
                    "\n\t\t\t" +
                      _vm._s(
                        _vm.t(
                          "text",
                          "File could not be loaded. Please check your internet connection."
                        )
                      ) +
                      " "
                  ),
                  _c(
                    "a",
                    {
                      staticClass: "button primary",
                      on: { click: _vm.reconnect }
                    },
                    [_vm._v(_vm._s(_vm.t("text", "Reconnect")))]
                  )
                ])
              : _vm._e()
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.currentSession && _vm.active
        ? _c(
            "div",
            {
              class: {
                "has-conflicts": _vm.hasSyncCollission,
                "icon-loading": !_vm.initialLoading && !_vm.hasConnectionIssue,
                richEditor: _vm.isRichEditor,
                "show-color-annotations": _vm.showAuthorAnnotations
              },
              attrs: { id: "editor-wrapper" }
            },
            [
              _c(
                "div",
                { attrs: { id: "editor" } },
                [
                  _vm.tiptap && !_vm.syncError && !_vm.readOnly
                    ? _c(
                        "MenuBar",
                        {
                          ref: "menubar",
                          attrs: {
                            editor: _vm.tiptap,
                            "file-path": _vm.relativePath,
                            "is-rich-editor": _vm.isRichEditor,
                            "is-public": _vm.isPublic,
                            autohide: _vm.autohide
                          }
                        },
                        [
                          _vm.currentSession && _vm.active
                            ? _c(
                                "div",
                                { attrs: { id: "editor-session-list" } },
                                [
                                  _c(
                                    "div",
                                    {
                                      directives: [
                                        {
                                          name: "tooltip",
                                          rawName: "v-tooltip",
                                          value: _vm.lastSavedStatusTooltip,
                                          expression: "lastSavedStatusTooltip"
                                        }
                                      ],
                                      staticClass: "save-status",
                                      class: _vm.lastSavedStatusClass
                                    },
                                    [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t" +
                                          _vm._s(_vm.lastSavedStatus) +
                                          "\n\t\t\t\t\t"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "SessionList",
                                    {
                                      attrs: { sessions: _vm.filteredSessions }
                                    },
                                    [
                                      _vm.isPublic &&
                                      _vm.currentSession.guestName
                                        ? _c("GuestNameDialog", {
                                            attrs: {
                                              "sync-service": _vm.syncService
                                            }
                                          })
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm._t("header")
                        ],
                        2
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "content-wrapper" },
                    [
                      _c("EditorContent", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.initialLoading,
                            expression: "initialLoading"
                          }
                        ],
                        staticClass: "editor__content",
                        attrs: { editor: _vm.tiptap }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.hasSyncCollission
                ? _c("ReadOnlyEditor", {
                    attrs: {
                      content: _vm.syncError.data.outsideChange,
                      "is-rich-editor": _vm.isRichEditor
                    }
                  })
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.hasSyncCollission && !_vm.readOnly
        ? _c("CollisionResolveDialog", {
            on: {
              "resolve-use-this-version": _vm.resolveUseThisVersion,
              "resolve-use-server-version": _vm.resolveUseServerVersion
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=template&id=41c92d1f&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=template&id=41c92d1f& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.editor
    ? _c("EditorContent", {
        attrs: { id: "read-only-editor", editor: _vm.editor }
      })
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/DirectEditing.vue?vue&type=template&id=37e36225&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/DirectEditing.vue?vue&type=template&id=37e36225&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: { "icon-loading": _vm.saving }, attrs: { id: "direct-editor" } },
    [
      _c("EditorWrapper", {
        ref: "editor",
        attrs: {
          "initial-session": _vm.initialSession,
          active: true,
          mime: _vm.initial.mimetype,
          "is-direct-editing": true
        },
        on: { ready: _vm.loaded },
        scopedSlots: _vm._u([
          {
            key: "header",
            fn: function() {
              return [
                _c("button", {
                  staticClass: "icon-share",
                  on: { click: _vm.share }
                }),
                _vm._v(" "),
                _c("button", {
                  staticClass: "icon-close",
                  on: { click: _vm.close }
                })
              ]
            },
            proxy: true
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=editor.js.map?v=aba53ca4783bfda98d75