var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.useDocument=exports.getDocument=void 0;var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _swr=_interopRequireWildcard(require("swr"));var _context4=require("../context");var _react=require("react");var _empty=require("../helpers/empty");var _Cache=require("../classes/Cache");var _isDev=require("../helpers/is-dev");var _docDateParser=require("../helpers/doc-date-parser");var _staticMutations=require("./static-mutations");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var getDocument=function getDocument(path){var _ref,parseDates,_ref$ignoreFirestoreD,ignoreFirestoreDocumentSnapshotField,data,collection,_args=arguments;return _regenerator.default.async(function getDocument$(_context){while(1){switch(_context.prev=_context.next){case 0:_ref=_args.length>1&&_args[1]!==undefined?_args[1]:_empty.empty.object,parseDates=_ref.parseDates,_ref$ignoreFirestoreD=_ref.ignoreFirestoreDocumentSnapshotField,ignoreFirestoreDocumentSnapshotField=_ref$ignoreFirestoreD===void 0?true:_ref$ignoreFirestoreD;_context.next=3;return _regenerator.default.awrap(_context4.fuego.db.doc(path).get().then(function(doc){var _doc$data;var docData=(_doc$data=doc.data({serverTimestamps:'estimate'}))!==null&&_doc$data!==void 0?_doc$data:_empty.empty.object;if(_isDev.isDev&&(docData.exists||docData.id||docData.hasPendingWrites)){console.warn('[get-document] warning: Your document, ',doc.id,' is using one of the following reserved fields: [exists, id, hasPendingWrites]. These fields are reserved. Please remove them from your documents.');}return(0,_docDateParser.withDocumentDatesParsed)(_objectSpread({},docData,{id:doc.id,exists:doc.exists,hasPendingWrites:doc.metadata.hasPendingWrites,__snapshot:ignoreFirestoreDocumentSnapshotField?undefined:doc}),parseDates);}));case 3:data=_context.sent;collection=path.split("/".concat(data.id));collection.pop();collection=collection.join('/');if(collection){_Cache.collectionCache.getSWRKeysFromCollectionPath(collection).forEach(function(key){(0,_swr.mutate)(key,function(){var currentState=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_empty.empty.array;if(!currentState.some(function(doc){return doc.id===data.id;})){return currentState;}return currentState.map(function(document){if(document.id===data.id){return data;}return document;});},false);});}return _context.abrupt("return",data);case 9:case"end":return _context.stop();}}},null,null,null,Promise);};exports.getDocument=getDocument;var createListenerAsync=function createListenerAsync(path){var _ref2,parseDates,_ref2$ignoreFirestore,ignoreFirestoreDocumentSnapshotField,_args2=arguments;return _regenerator.default.async(function createListenerAsync$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_ref2=_args2.length>1&&_args2[1]!==undefined?_args2[1]:{},parseDates=_ref2.parseDates,_ref2$ignoreFirestore=_ref2.ignoreFirestoreDocumentSnapshotField,ignoreFirestoreDocumentSnapshotField=_ref2$ignoreFirestore===void 0?true:_ref2$ignoreFirestore;_context2.next=3;return _regenerator.default.awrap(new Promise(function(resolve){var unsubscribe=_context4.fuego.db.doc(path).onSnapshot(function(doc){var _doc$data2;var docData=(_doc$data2=doc.data())!==null&&_doc$data2!==void 0?_doc$data2:_empty.empty.object;var data=(0,_docDateParser.withDocumentDatesParsed)(_objectSpread({},docData,{id:doc.id,exists:doc.exists,hasPendingWrites:doc.metadata.hasPendingWrites,__snapshot:ignoreFirestoreDocumentSnapshotField?undefined:doc}),parseDates);(0,_swr.mutate)(path,data,false);if(_isDev.isDev&&(docData.exists||docData.id||docData.hasPendingWrites)){console.warn('[use-document] warning: Your document, ',doc.id,' is using one of the following reserved fields: [exists, id, hasPendingWrites]. These fields are reserved. Please remove them from your documents.');}var collection=path.split("/".concat(doc.id)).filter(Boolean);collection.pop();collection=collection.join('/');if(collection){_Cache.collectionCache.getSWRKeysFromCollectionPath(collection).forEach(function(key){(0,_swr.mutate)(key,function(){var currentState=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_empty.empty.array;if(!currentState.some(function(doc){return doc.id&&doc.id===data.id;})){return currentState;}return currentState.map(function(document){if(document.id===data.id){return data;}return document;});},false);});}resolve({initialData:data,unsubscribe:unsubscribe});});}));case 3:return _context2.abrupt("return",_context2.sent);case 4:case"end":return _context2.stop();}}},null,null,null,Promise);};var useDocument=function useDocument(path){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:_empty.empty.object;var unsubscribeRef=(0,_react.useRef)(null);var _options$listen=options.listen,listen=_options$listen===void 0?false:_options$listen,parseDates=options.parseDates,_options$ignoreFirest=options.ignoreFirestoreDocumentSnapshotField,ignoreFirestoreDocumentSnapshotField=_options$ignoreFirest===void 0?true:_options$ignoreFirest,opts=(0,_objectWithoutProperties2.default)(options,["listen","parseDates","ignoreFirestoreDocumentSnapshotField"]);var _options$refreshInter=options.refreshInterval,refreshInterval=_options$refreshInter===void 0?listen?0:undefined:_options$refreshInter,_options$refreshWhenH=options.refreshWhenHidden,refreshWhenHidden=_options$refreshWhenH===void 0?listen?false:undefined:_options$refreshWhenH,_options$refreshWhenO=options.refreshWhenOffline,refreshWhenOffline=_options$refreshWhenO===void 0?listen?false:undefined:_options$refreshWhenO,_options$revalidateOn=options.revalidateOnFocus,revalidateOnFocus=_options$revalidateOn===void 0?listen?false:undefined:_options$revalidateOn,_options$revalidateOn2=options.revalidateOnReconnect,revalidateOnReconnect=_options$revalidateOn2===void 0?listen?false:undefined:_options$revalidateOn2,_options$dedupingInte=options.dedupingInterval,dedupingInterval=_options$dedupingInte===void 0?listen?0:undefined:_options$dedupingInte;var swrOptions=_objectSpread({},opts,{refreshInterval:refreshInterval,refreshWhenHidden:refreshWhenHidden,refreshWhenOffline:refreshWhenOffline,revalidateOnFocus:revalidateOnFocus,revalidateOnReconnect:revalidateOnReconnect,dedupingInterval:dedupingInterval});var shouldListen=(0,_react.useRef)(listen);(0,_react.useEffect)(function(){shouldListen.current=listen;},[listen]);var datesToParse=(0,_react.useRef)(parseDates);(0,_react.useEffect)(function(){datesToParse.current=parseDates;},[parseDates]);var shouldIgnoreSnapshot=(0,_react.useRef)(ignoreFirestoreDocumentSnapshotField);(0,_react.useEffect)(function(){shouldIgnoreSnapshot.current=ignoreFirestoreDocumentSnapshotField;},[ignoreFirestoreDocumentSnapshotField]);var swr=(0,_swr.default)(path,function _callee(path){var _await$createListener,unsubscribe,initialData,data;return _regenerator.default.async(function _callee$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:if(!shouldListen.current){_context3.next=9;break;}if(unsubscribeRef.current){unsubscribeRef.current();unsubscribeRef.current=null;}_context3.next=4;return _regenerator.default.awrap(createListenerAsync(path,{parseDates:datesToParse.current,ignoreFirestoreDocumentSnapshotField:shouldIgnoreSnapshot.current}));case 4:_await$createListener=_context3.sent;unsubscribe=_await$createListener.unsubscribe;initialData=_await$createListener.initialData;unsubscribeRef.current=unsubscribe;return _context3.abrupt("return",initialData);case 9:_context3.next=11;return _regenerator.default.awrap(getDocument(path,{parseDates:datesToParse.current,ignoreFirestoreDocumentSnapshotField:shouldIgnoreSnapshot.current}));case 11:data=_context3.sent;return _context3.abrupt("return",data);case 13:case"end":return _context3.stop();}}},null,null,null,Promise);},swrOptions);var data=swr.data,isValidating=swr.isValidating,revalidate=swr.revalidate,connectedMutate=swr.mutate,error=swr.error;var mounted=(0,_react.useRef)(false);(0,_react.useEffect)(function(){if(mounted.current)revalidateRef.current();else mounted.current=true;},[listen]);var revalidateRef=(0,_react.useRef)(swr.revalidate);(0,_react.useEffect)(function(){revalidateRef.current=swr.revalidate;});(0,_react.useEffect)(function(){return function(){if(unsubscribeRef.current){unsubscribeRef.current();unsubscribeRef.current=null;}};},[path,listen]);var set=(0,_react.useCallback)(function(data,options){if(!listen){connectedMutate(function(){var prevState=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_empty.empty.object;if(!(options===null||options===void 0?void 0:options.merge))return data;return _objectSpread({},prevState,{},data);});}if(!path)return null;return _context4.fuego.db.doc(path).set(data,options);},[path,listen,connectedMutate]);var update=(0,_react.useCallback)(function(data){if(!listen){connectedMutate(function(){var prevState=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_empty.empty.object;return _objectSpread({},prevState,{},data);});}if(!path)return null;return _context4.fuego.db.doc(path).update(data);},[listen,path,connectedMutate]);var connectedDelete=(0,_react.useCallback)(function(){return(0,_staticMutations.deleteDocument)(path,listen);},[path,listen]);return{data:data,isValidating:isValidating,revalidate:revalidate,mutate:connectedMutate,error:error,set:set,update:update,loading:!data&&!error,deleteDocument:connectedDelete,unsubscribe:unsubscribeRef.current};};exports.useDocument=useDocument;
//# sourceMappingURL=use-swr-document.js.map