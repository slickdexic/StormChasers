/*! For license information please see main.07e9ca72.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var r=n(43),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,i={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:c,props:i,_owner:l.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function b(){}function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var x=y.prototype=new b;x.constructor=y,g(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var o,i={},a=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,o)&&!_.hasOwnProperty(o)&&(i[o]=t[o]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===i[o]&&(i[o]=s[o]);return{$$typeof:n,type:e,key:a,ref:l,props:i,_owner:S.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function R(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function O(e,t,o,i,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return a=a(s=e),e=""===i?"."+R(s,0):i,w(a)?(o="",null!=e&&(o=e.replace(j,"$&/")+"/"),O(a,t,o,"",function(e){return e})):null!=a&&(C(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(j,"$&/")+"/")+e)),t.push(a)),1;if(s=0,i=""===i?".":i+":",w(e))for(var u=0;u<e.length;u++){var c=i+R(l=e[u],u);s+=O(l,t,o,c,a)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=O(l=l.value,t,o,c=i+R(l,u++),a);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function P(e,t,n){if(null==e)return e;var r=[],o=0;return O(e,r,"","",function(e){return t.call(n,e,o++)}),r}function T(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var z={current:null},N={transition:null},L={ReactCurrentDispatcher:z,ReactCurrentBatchConfig:N,ReactCurrentOwner:S};function A(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:P,forEach:function(e,t,n){P(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=a,t.PureComponent=y,t.StrictMode=i,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.act=A,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=g({},e.props),i=e.key,a=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,l=S.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)k.call(t,u)&&!_.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];o.children=s}return{$$typeof:n,type:e.type,key:i,ref:a,props:o,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=N.transition;N.transition={};try{e()}finally{N.transition=t}},t.unstable_act=A,t.useCallback=function(e,t){return z.current.useCallback(e,t)},t.useContext=function(e){return z.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return z.current.useDeferredValue(e)},t.useEffect=function(e,t){return z.current.useEffect(e,t)},t.useId=function(){return z.current.useId()},t.useImperativeHandle=function(e,t,n){return z.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return z.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return z.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return z.current.useMemo(e,t)},t.useReducer=function(e,t,n){return z.current.useReducer(e,t,n)},t.useRef=function(e){return z.current.useRef(e)},t.useState=function(e){return z.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return z.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return z.current.useTransition()},t.version="18.3.1"},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<i(o,t)))break e;e[r]=t,e[n]=o,n=r}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,a=o>>>1;r<a;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>i(s,n))u<o&&0>i(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<o&&0>i(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,f=null,p=3,h=!1,g=!1,m=!1,v="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(c);null!==t;){if(null===t.callback)o(c);else{if(!(t.startTime<=e))break;o(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(m=!1,x(e),!g)if(null!==r(u))g=!0,N(k);else{var t=r(c);null!==t&&L(w,t.startTime-e)}}function k(e,n){g=!1,m&&(m=!1,b(C),C=-1),h=!0;var i=p;try{for(x(n),f=r(u);null!==f&&(!(f.expirationTime>n)||e&&!O());){var a=f.callback;if("function"===typeof a){f.callback=null,p=f.priorityLevel;var l=a(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(u)&&o(u),x(n)}else o(u);f=r(u)}if(null!==f)var s=!0;else{var d=r(c);null!==d&&L(w,d.startTime-n),s=!1}return s}finally{f=null,p=i,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,_=!1,E=null,C=-1,j=5,R=-1;function O(){return!(t.unstable_now()-R<j)}function P(){if(null!==E){var e=t.unstable_now();R=e;var n=!0;try{n=E(!0,e)}finally{n?S():(_=!1,E=null)}}else _=!1}if("function"===typeof y)S=function(){y(P)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,z=T.port2;T.port1.onmessage=P,S=function(){z.postMessage(null)}}else S=function(){v(P,0)};function N(e){E=e,_||(_=!0,S())}function L(e,n){C=v(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){g||h||(g=!0,N(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,o,i){var a=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?a+i:a:i=a,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:i,expirationTime:l=i+l,sortIndex:-1},i>a?(e.sortIndex=i,n(c,e),null===r(u)&&e===r(c)&&(m?(b(C),C=-1):m=!0,L(w,i-a))):(e.sortIndex=l,n(u,e),g||h||(g=!0,N(k))),e},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},324:e=>{e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var u=i[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(o=n?n.call(r,c,d,u):void 0)||void 0===o&&c!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var r=n(43),o=n(853);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,l={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(l[e]=t,e=0;e<t.length;e++)a.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function g(e,t,n,r,o,i,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var m={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){m[e]=new g(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];m[t]=new g(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){m[e]=new g(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){m[e]=new g(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){m[e]=new g(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){m[e]=new g(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){m[e]=new g(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){m[e]=new g(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){m[e]=new g(e,5,!1,e.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}function y(e,t,n,r){var o=m.hasOwnProperty(t)?m[t]:null;(null!==o?0!==o.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,o,r)&&(n=null),r||null===o?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&"":n:(t=o.attributeName,r=o.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(o=o.type)||4===o&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(v,b);m[t]=new g(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(v,b);m[t]=new g(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(v,b);m[t]=new g(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){m[e]=new g(e,1,!1,e.toLowerCase(),null,!1,!1)}),m.xlinkHref=new g("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){m[e]=new g(e,1,!1,e.toLowerCase(),null,!0,!0)});var x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),j=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),z=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var N=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var L=Symbol.iterator;function A(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=L&&e[L]||e["@@iterator"])?e:null}var D,$=Object.assign;function I(e){if(void 0===D)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);D=t&&t[1]||""}return"\n"+D+e}var M=!1;function F(e,t){if(!e||M)return"";M=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var o=u.stack.split("\n"),i=r.stack.split("\n"),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(1!==a||1!==l)do{if(a--,0>--l||o[a]!==i[l]){var s="\n"+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=a&&0<=l);break}}}finally{M=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?I(e):""}function U(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=F(e.type,!1);case 11:return e=F(e.type.render,!1);case 1:return e=F(e.type,!0);default:return""}}function B(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case E:return"Profiler";case _:return"StrictMode";case O:return"Suspense";case P:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case j:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case R:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case T:return null!==(t=e.displayName||null)?t:B(e.type)||"Memo";case z:t=e._payload,e=e._init;try{return B(e(t))}catch(n){}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return B(t);case 8:return t===_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Y(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function q(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function K(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Q(e,t){var n=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function G(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=H(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function X(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function J(e,t){X(e,t);var n=H(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&K(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+H(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oe(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(i(92));if(te(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:H(n)}}function ie(e,t){var n=H(t.value),r=H(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return ce(e,t)})}:ce);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function ge(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function me(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=ge(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}Object.keys(pe).forEach(function(e){he.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]})});var ve=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function be(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(i(62))}}function ye(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,Se=null,_e=null;function Ee(e){if(e=xo(e)){if("function"!==typeof ke)throw Error(i(280));var t=e.stateNode;t&&(t=ko(t),ke(e.stateNode,e.type,t))}}function Ce(e){Se?_e?_e.push(e):_e=[e]:Se=e}function je(){if(Se){var e=Se,t=_e;if(_e=Se=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function Re(e,t){return e(t)}function Oe(){}var Pe=!1;function Te(e,t,n){if(Pe)return e(t,n);Pe=!0;try{return Re(e,t,n)}finally{Pe=!1,(null!==Se||null!==_e)&&(Oe(),je())}}function ze(e,t){var n=e.stateNode;if(null===n)return null;var r=ko(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var Ne=!1;if(c)try{var Le={};Object.defineProperty(Le,"passive",{get:function(){Ne=!0}}),window.addEventListener("test",Le,Le),window.removeEventListener("test",Le,Le)}catch(ce){Ne=!1}function Ae(e,t,n,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var De=!1,$e=null,Ie=!1,Me=null,Fe={onError:function(e){De=!0,$e=e}};function Ue(e,t,n,r,o,i,a,l,s){De=!1,$e=null,Ae.apply(Fe,arguments)}function Be(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function We(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function He(e){if(Be(e)!==e)throw Error(i(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Be(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var a=o.alternate;if(null===a){if(null!==(r=o.return)){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return He(o),e;if(a===r)return He(o),t;a=a.sibling}throw Error(i(188))}if(n.return!==r.return)n=o,r=a;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=a;break}if(s===r){l=!0,r=o,n=a;break}s=s.sibling}if(!l){for(s=a.child;s;){if(s===n){l=!0,n=a,r=o;break}if(s===r){l=!0,r=a,n=o;break}s=s.sibling}if(!l)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(e))?Ye(e):null}function Ye(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ye(e);if(null!==t)return t;e=e.sibling}return null}var qe=o.unstable_scheduleCallback,Ke=o.unstable_cancelCallback,Qe=o.unstable_shouldYield,Ge=o.unstable_requestPaint,Xe=o.unstable_now,Je=o.unstable_getCurrentPriorityLevel,Ze=o.unstable_ImmediatePriority,et=o.unstable_UserBlockingPriority,tt=o.unstable_NormalPriority,nt=o.unstable_LowPriority,rt=o.unstable_IdlePriority,ot=null,it=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=268435455&n;if(0!==a){var l=a&~o;0!==l?r=dt(l):0!==(i&=a)&&(r=dt(i))}else 0!==(a=n&~o)?r=dt(a):0!==i&&(r=dt(i));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&o)&&((o=r&-r)>=(i=t&-t)||16===o&&0!==(4194240&i)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)o=1<<(n=31-at(t)),r|=e[n],t&=~o;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function gt(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function mt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=n}function bt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var yt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,St,_t,Et,Ct=!1,jt=[],Rt=null,Ot=null,Pt=null,Tt=new Map,zt=new Map,Nt=[],Lt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function At(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":Tt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zt.delete(t.pointerId)}}function Dt(e,t,n,r,o,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},null!==t&&(null!==(t=xo(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function $t(e){var t=yo(e.target);if(null!==t){var n=Be(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=We(n)))return e.blockedOn=t,void Et(e.priority,function(){St(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function It(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=xo(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);xe=r,n.target.dispatchEvent(r),xe=null,t.shift()}return!0}function Mt(e,t,n){It(e)&&n.delete(t)}function Ft(){Ct=!1,null!==Rt&&It(Rt)&&(Rt=null),null!==Ot&&It(Ot)&&(Ot=null),null!==Pt&&It(Pt)&&(Pt=null),Tt.forEach(Mt),zt.forEach(Mt)}function Ut(e,t){e.blockedOn===t&&(e.blockedOn=null,Ct||(Ct=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ft)))}function Bt(e){function t(t){return Ut(t,e)}if(0<jt.length){Ut(jt[0],e);for(var n=1;n<jt.length;n++){var r=jt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Rt&&Ut(Rt,e),null!==Ot&&Ut(Ot,e),null!==Pt&&Ut(Pt,e),Tt.forEach(t),zt.forEach(t),n=0;n<Nt.length;n++)(r=Nt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Nt.length&&null===(n=Nt[0]).blockedOn;)$t(n),null===n.blockedOn&&Nt.shift()}var Wt=x.ReactCurrentBatchConfig,Ht=!0;function Vt(e,t,n,r){var o=yt,i=Wt.transition;Wt.transition=null;try{yt=1,qt(e,t,n,r)}finally{yt=o,Wt.transition=i}}function Yt(e,t,n,r){var o=yt,i=Wt.transition;Wt.transition=null;try{yt=4,qt(e,t,n,r)}finally{yt=o,Wt.transition=i}}function qt(e,t,n,r){if(Ht){var o=Qt(e,t,n,r);if(null===o)Hr(e,t,r,Kt,n),At(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return Rt=Dt(Rt,e,t,n,r,o),!0;case"dragenter":return Ot=Dt(Ot,e,t,n,r,o),!0;case"mouseover":return Pt=Dt(Pt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Tt.set(i,Dt(Tt.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,zt.set(i,Dt(zt.get(i)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(At(e,r),4&t&&-1<Lt.indexOf(e)){for(;null!==o;){var i=xo(o);if(null!==i&&wt(i),null===(i=Qt(e,t,n,r))&&Hr(e,t,r,Kt,n),i===o)break;o=i}null!==o&&r.stopPropagation()}else Hr(e,t,r,null,n)}}var Kt=null;function Qt(e,t,n,r){if(Kt=null,null!==(e=yo(e=we(r))))if(null===(t=Be(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=We(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kt=e,null}function Gt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Xt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,r=n.length,o="value"in Xt?Xt.value:Xt.textContent,i=o.length;for(e=0;e<r&&n[e]===o[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===o[i-t];t++);return Zt=o.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,o,i){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,ln,sn,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=on(un),dn=$({},un,{view:0,detail:0}),fn=on(dn),pn=$({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:En,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(an=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=an=0,sn=e),an)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=on(pn),gn=on($({},pn,{dataTransfer:0})),mn=on($({},dn,{relatedTarget:0})),vn=on($({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),bn=$({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yn=on(bn),xn=on($({},un,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _n(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function En(){return _n}var Cn=$({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:En,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),jn=on(Cn),Rn=on($({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),On=on($({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:En})),Pn=on($({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),Tn=$({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zn=on(Tn),Nn=[9,13,27,32],Ln=c&&"CompositionEvent"in window,An=null;c&&"documentMode"in document&&(An=document.documentMode);var Dn=c&&"TextEvent"in window&&!An,$n=c&&(!Ln||An&&8<An&&11>=An),In=String.fromCharCode(32),Mn=!1;function Fn(e,t){switch(e){case"keyup":return-1!==Nn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Un(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Bn=!1;var Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wn[e.type]:"textarea"===t}function Vn(e,t,n,r){Ce(r),0<(t=Yr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yn=null,qn=null;function Kn(e){Ir(e,0)}function Qn(e){if(q(wo(e)))return e}function Gn(e,t){if("change"===e)return t}var Xn=!1;if(c){var Jn;if(c){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Jn=Zn}else Jn=!1;Xn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){Yn&&(Yn.detachEvent("onpropertychange",nr),qn=Yn=null)}function nr(e){if("value"===e.propertyName&&Qn(qn)){var t=[];Vn(t,qn,e,we(e)),Te(Kn,t)}}function rr(e,t,n){"focusin"===e?(tr(),qn=n,(Yn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function or(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Qn(qn)}function ir(e,t){if("click"===e)return Qn(t)}function ar(e,t){if("input"===e||"change"===e)return Qn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!d.call(t,o)||!lr(e[o],t[o]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=K();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=K((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=void 0===r.end?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=cr(n,i);var a=cr(n,r);o&&a&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gr=c&&"documentMode"in document&&11>=document.documentMode,mr=null,vr=null,br=null,yr=!1;function xr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yr||null==mr||mr!==K(r)||("selectionStart"in(r=mr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},br&&sr(br,r)||(br=r,0<(r=Yr(vr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Sr={},_r={};function Er(e){if(Sr[e])return Sr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in _r)return Sr[e]=n[t];return e}c&&(_r=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var Cr=Er("animationend"),jr=Er("animationiteration"),Rr=Er("animationstart"),Or=Er("transitionend"),Pr=new Map,Tr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(e,t){Pr.set(e,t),s(t,[e])}for(var Nr=0;Nr<Tr.length;Nr++){var Lr=Tr[Nr];zr(Lr.toLowerCase(),"on"+(Lr[0].toUpperCase()+Lr.slice(1)))}zr(Cr,"onAnimationEnd"),zr(jr,"onAnimationIteration"),zr(Rr,"onAnimationStart"),zr("dblclick","onDoubleClick"),zr("focusin","onFocus"),zr("focusout","onBlur"),zr(Or,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));function $r(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,o,a,l,s,u){if(Ue.apply(this,arguments),De){if(!De)throw Error(i(198));var c=$e;De=!1,$e=null,Ie||(Ie=!0,Me=c)}}(r,t,void 0,e),e.currentTarget=null}function Ir(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;$r(o,l,u),i=s}else for(a=0;a<r.length;a++){if(s=(l=r[a]).instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;$r(o,l,u),i=s}}}if(Ie)throw e=Me,Ie=!1,Me=null,e}function Mr(e,t){var n=t[mo];void 0===n&&(n=t[mo]=new Set);var r=e+"__bubble";n.has(r)||(Wr(t,e,2,!1),n.add(r))}function Fr(e,t,n){var r=0;t&&(r|=4),Wr(n,e,r,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[Ur]){e[Ur]=!0,a.forEach(function(t){"selectionchange"!==t&&(Dr.has(t)||Fr(t,!1,e),Fr(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ur]||(t[Ur]=!0,Fr("selectionchange",!1,t))}}function Wr(e,t,n,r){switch(Gt(t)){case 1:var o=Vt;break;case 4:o=Yt;break;default:o=qt}n=o.bind(null,t,n,e),o=void 0,!Ne||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Hr(e,t,n,r,o){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var l=r.stateNode.containerInfo;if(l===o||8===l.nodeType&&l.parentNode===o)break;if(4===a)for(a=r.return;null!==a;){var s=a.tag;if((3===s||4===s)&&((s=a.stateNode.containerInfo)===o||8===s.nodeType&&s.parentNode===o))return;a=a.return}for(;null!==l;){if(null===(a=yo(l)))return;if(5===(s=a.tag)||6===s){r=i=a;continue e}l=l.parentNode}}r=r.return}Te(function(){var r=i,o=we(n),a=[];e:{var l=Pr.get(e);if(void 0!==l){var s=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=jn;break;case"focusin":u="focus",s=mn;break;case"focusout":u="blur",s=mn;break;case"beforeblur":case"afterblur":s=mn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=gn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=On;break;case Cr:case jr:case Rr:s=vn;break;case Or:s=Pn;break;case"scroll":s=fn;break;case"wheel":s=zn;break;case"copy":case"cut":case"paste":s=yn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Rn}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==l?l+"Capture":null:l;c=[];for(var p,h=r;null!==h;){var g=(p=h).stateNode;if(5===p.tag&&null!==g&&(p=g,null!==f&&(null!=(g=ze(h,f))&&c.push(Vr(h,g,p)))),d)break;h=h.return}0<c.length&&(l=new s(l,u,null,n,o),a.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===xe||!(u=n.relatedTarget||n.fromElement)||!yo(u)&&!u[go])&&(s||l)&&(l=o.window===o?o:(l=o.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?yo(u):null)&&(u!==(d=Be(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=hn,g="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=Rn,g="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:wo(s),p=null==u?l:wo(u),(l=new c(g,h+"leave",s,n,o)).target=d,l.relatedTarget=p,g=null,yo(o)===r&&((c=new c(f,h+"enter",u,n,o)).target=p,c.relatedTarget=d,g=c),d=g,s&&u)e:{for(f=u,h=0,p=c=s;p;p=qr(p))h++;for(p=0,g=f;g;g=qr(g))p++;for(;0<h-p;)c=qr(c),h--;for(;0<p-h;)f=qr(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break e;c=qr(c),f=qr(f)}c=null}else c=null;null!==s&&Kr(a,l,s,c,!1),null!==u&&null!==d&&Kr(a,d,u,c,!0)}if("select"===(s=(l=r?wo(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var m=Gn;else if(Hn(l))if(Xn)m=ar;else{m=or;var v=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(m=ir);switch(m&&(m=m(e,r))?Vn(a,m,n,o):(v&&v(e,l,r),"focusout"===e&&(v=l._wrapperState)&&v.controlled&&"number"===l.type&&ee(l,"number",l.value)),v=r?wo(r):window,e){case"focusin":(Hn(v)||"true"===v.contentEditable)&&(mr=v,vr=r,br=null);break;case"focusout":br=vr=mr=null;break;case"mousedown":yr=!0;break;case"contextmenu":case"mouseup":case"dragend":yr=!1,xr(a,n,o);break;case"selectionchange":if(gr)break;case"keydown":case"keyup":xr(a,n,o)}var b;if(Ln)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Bn?Fn(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&($n&&"ko"!==n.locale&&(Bn||"onCompositionStart"!==y?"onCompositionEnd"===y&&Bn&&(b=en()):(Jt="value"in(Xt=o)?Xt.value:Xt.textContent,Bn=!0)),0<(v=Yr(r,y)).length&&(y=new xn(y,e,null,n,o),a.push({event:y,listeners:v}),b?y.data=b:null!==(b=Un(n))&&(y.data=b))),(b=Dn?function(e,t){switch(e){case"compositionend":return Un(t);case"keypress":return 32!==t.which?null:(Mn=!0,In);case"textInput":return(e=t.data)===In&&Mn?null:e;default:return null}}(e,n):function(e,t){if(Bn)return"compositionend"===e||!Ln&&Fn(e,t)?(e=en(),Zt=Jt=Xt=null,Bn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $n&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Yr(r,"onBeforeInput")).length&&(o=new xn("onBeforeInput","beforeinput",null,n,o),a.push({event:o,listeners:r}),o.data=b))}Ir(a,t)})}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yr(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,i=o.stateNode;5===o.tag&&null!==i&&(o=i,null!=(i=ze(e,n))&&r.unshift(Vr(e,i,o)),null!=(i=ze(e,t))&&r.push(Vr(e,i,o))),e=e.return}return r}function qr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Kr(e,t,n,r,o){for(var i=t._reactName,a=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,o?null!=(s=ze(n,i))&&a.unshift(Vr(n,s,l)):o||null!=(s=ze(n,i))&&a.push(Vr(n,s,l))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Qr=/\r\n?/g,Gr=/\u0000|\uFFFD/g;function Xr(e){return("string"===typeof e?e:""+e).replace(Qr,"\n").replace(Gr,"")}function Jr(e,t,n){if(t=Xr(t),Xr(e)!==t&&n)throw Error(i(425))}function Zr(){}var eo=null,to=null;function no(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ro="function"===typeof setTimeout?setTimeout:void 0,oo="function"===typeof clearTimeout?clearTimeout:void 0,io="function"===typeof Promise?Promise:void 0,ao="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof io?function(e){return io.resolve(null).then(e).catch(lo)}:ro;function lo(e){setTimeout(function(){throw e})}function so(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType)if("/$"===(n=o.data)){if(0===r)return e.removeChild(o),void Bt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=o}while(n);Bt(t)}function uo(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function co(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var fo=Math.random().toString(36).slice(2),po="__reactFiber$"+fo,ho="__reactProps$"+fo,go="__reactContainer$"+fo,mo="__reactEvents$"+fo,vo="__reactListeners$"+fo,bo="__reactHandles$"+fo;function yo(e){var t=e[po];if(t)return t;for(var n=e.parentNode;n;){if(t=n[go]||n[po]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=co(e);null!==e;){if(n=e[po])return n;e=co(e)}return t}n=(e=n).parentNode}return null}function xo(e){return!(e=e[po]||e[go])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wo(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function ko(e){return e[ho]||null}var So=[],_o=-1;function Eo(e){return{current:e}}function Co(e){0>_o||(e.current=So[_o],So[_o]=null,_o--)}function jo(e,t){_o++,So[_o]=e.current,e.current=t}var Ro={},Oo=Eo(Ro),Po=Eo(!1),To=Ro;function zo(e,t){var n=e.type.contextTypes;if(!n)return Ro;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,i={};for(o in n)i[o]=t[o];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function No(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Lo(){Co(Po),Co(Oo)}function Ao(e,t,n){if(Oo.current!==Ro)throw Error(i(168));jo(Oo,t),jo(Po,n)}function Do(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in t))throw Error(i(108,W(e)||"Unknown",o));return $({},n,r)}function $o(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ro,To=Oo.current,jo(Oo,e),jo(Po,Po.current),!0}function Io(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(e=Do(e,t,To),r.__reactInternalMemoizedMergedChildContext=e,Co(Po),Co(Oo),jo(Oo,e)):Co(Po),jo(Po,n)}var Mo=null,Fo=!1,Uo=!1;function Bo(e){null===Mo?Mo=[e]:Mo.push(e)}function Wo(){if(!Uo&&null!==Mo){Uo=!0;var e=0,t=yt;try{var n=Mo;for(yt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Mo=null,Fo=!1}catch(o){throw null!==Mo&&(Mo=Mo.slice(e+1)),qe(Ze,Wo),o}finally{yt=t,Uo=!1}}return null}var Ho=[],Vo=0,Yo=null,qo=0,Ko=[],Qo=0,Go=null,Xo=1,Jo="";function Zo(e,t){Ho[Vo++]=qo,Ho[Vo++]=Yo,Yo=e,qo=t}function ei(e,t,n){Ko[Qo++]=Xo,Ko[Qo++]=Jo,Ko[Qo++]=Go,Go=e;var r=Xo;e=Jo;var o=32-at(r)-1;r&=~(1<<o),n+=1;var i=32-at(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Xo=1<<32-at(t)+o|n<<o|r,Jo=i+e}else Xo=1<<i|n<<o|r,Jo=e}function ti(e){null!==e.return&&(Zo(e,1),ei(e,1,0))}function ni(e){for(;e===Yo;)Yo=Ho[--Vo],Ho[Vo]=null,qo=Ho[--Vo],Ho[Vo]=null;for(;e===Go;)Go=Ko[--Qo],Ko[Qo]=null,Jo=Ko[--Qo],Ko[Qo]=null,Xo=Ko[--Qo],Ko[Qo]=null}var ri=null,oi=null,ii=!1,ai=null;function li(e,t){var n=Tu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function si(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ri=e,oi=uo(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ri=e,oi=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Go?{id:Xo,overflow:Jo}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Tu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ri=e,oi=null,!0);default:return!1}}function ui(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ci(e){if(ii){var t=oi;if(t){var n=t;if(!si(e,t)){if(ui(e))throw Error(i(418));t=uo(n.nextSibling);var r=ri;t&&si(e,t)?li(r,n):(e.flags=-4097&e.flags|2,ii=!1,ri=e)}}else{if(ui(e))throw Error(i(418));e.flags=-4097&e.flags|2,ii=!1,ri=e}}}function di(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ri=e}function fi(e){if(e!==ri)return!1;if(!ii)return di(e),ii=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!no(e.type,e.memoizedProps)),t&&(t=oi)){if(ui(e))throw pi(),Error(i(418));for(;t;)li(e,t),t=uo(t.nextSibling)}if(di(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){oi=uo(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}oi=null}}else oi=ri?uo(e.stateNode.nextSibling):null;return!0}function pi(){for(var e=oi;e;)e=uo(e.nextSibling)}function hi(){oi=ri=null,ii=!1}function gi(e){null===ai?ai=[e]:ai.push(e)}var mi=x.ReactCurrentBatchConfig;function vi(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var o=r,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=o.refs;null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function bi(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yi(e){return(0,e._init)(e._payload)}function xi(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=Nu(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=$u(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function u(e,t,n,r){var i=n.type;return i===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===z&&yi(i)===t.type)?((r=o(t,n.props)).ref=vi(e,t,n),r.return=e,r):((r=Lu(n.type,n.key,n.props,null,e.mode,r)).ref=vi(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Iu(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=Au(n,e.mode,r,i)).return=e,t):((t=o(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=$u(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Lu(t.type,t.key,t.props,null,e.mode,n)).ref=vi(e,null,t),n.return=e,n;case k:return(t=Iu(t,e.mode,n)).return=e,t;case z:return f(e,(0,t._init)(t._payload),n)}if(te(t)||A(t))return(t=Au(t,e.mode,n,null)).return=e,t;bi(e,t)}return null}function p(e,t,n,r){var o=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==o?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===o?u(e,t,n,r):null;case k:return n.key===o?c(e,t,n,r):null;case z:return p(e,t,(o=n._init)(n._payload),r)}if(te(n)||A(n))return null!==o?null:d(e,t,n,r,null);bi(e,n)}return null}function h(e,t,n,r,o){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,o);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,o);case k:return c(t,e=e.get(null===r.key?n:r.key)||null,r,o);case z:return h(e,t,n,(0,r._init)(r._payload),o)}if(te(r)||A(r))return d(t,e=e.get(n)||null,r,o,null);bi(t,r)}return null}function g(o,i,l,s){for(var u=null,c=null,d=i,g=i=0,m=null;null!==d&&g<l.length;g++){d.index>g?(m=d,d=null):m=d.sibling;var v=p(o,d,l[g],s);if(null===v){null===d&&(d=m);break}e&&d&&null===v.alternate&&t(o,d),i=a(v,i,g),null===c?u=v:c.sibling=v,c=v,d=m}if(g===l.length)return n(o,d),ii&&Zo(o,g),u;if(null===d){for(;g<l.length;g++)null!==(d=f(o,l[g],s))&&(i=a(d,i,g),null===c?u=d:c.sibling=d,c=d);return ii&&Zo(o,g),u}for(d=r(o,d);g<l.length;g++)null!==(m=h(d,o,g,l[g],s))&&(e&&null!==m.alternate&&d.delete(null===m.key?g:m.key),i=a(m,i,g),null===c?u=m:c.sibling=m,c=m);return e&&d.forEach(function(e){return t(o,e)}),ii&&Zo(o,g),u}function m(o,l,s,u){var c=A(s);if("function"!==typeof c)throw Error(i(150));if(null==(s=c.call(s)))throw Error(i(151));for(var d=c=null,g=l,m=l=0,v=null,b=s.next();null!==g&&!b.done;m++,b=s.next()){g.index>m?(v=g,g=null):v=g.sibling;var y=p(o,g,b.value,u);if(null===y){null===g&&(g=v);break}e&&g&&null===y.alternate&&t(o,g),l=a(y,l,m),null===d?c=y:d.sibling=y,d=y,g=v}if(b.done)return n(o,g),ii&&Zo(o,m),c;if(null===g){for(;!b.done;m++,b=s.next())null!==(b=f(o,b.value,u))&&(l=a(b,l,m),null===d?c=b:d.sibling=b,d=b);return ii&&Zo(o,m),c}for(g=r(o,g);!b.done;m++,b=s.next())null!==(b=h(g,o,m,b.value,u))&&(e&&null!==b.alternate&&g.delete(null===b.key?m:b.key),l=a(b,l,m),null===d?c=b:d.sibling=b,d=b);return e&&g.forEach(function(e){return t(o,e)}),ii&&Zo(o,m),c}return function e(r,i,a,s){if("object"===typeof a&&null!==a&&a.type===S&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case w:e:{for(var u=a.key,c=i;null!==c;){if(c.key===u){if((u=a.type)===S){if(7===c.tag){n(r,c.sibling),(i=o(c,a.props.children)).return=r,r=i;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===z&&yi(u)===c.type){n(r,c.sibling),(i=o(c,a.props)).ref=vi(r,c,a),i.return=r,r=i;break e}n(r,c);break}t(r,c),c=c.sibling}a.type===S?((i=Au(a.props.children,r.mode,s,a.key)).return=r,r=i):((s=Lu(a.type,a.key,a.props,null,r.mode,s)).ref=vi(r,i,a),s.return=r,r=s)}return l(r);case k:e:{for(c=a.key;null!==i;){if(i.key===c){if(4===i.tag&&i.stateNode.containerInfo===a.containerInfo&&i.stateNode.implementation===a.implementation){n(r,i.sibling),(i=o(i,a.children||[])).return=r,r=i;break e}n(r,i);break}t(r,i),i=i.sibling}(i=Iu(a,r.mode,s)).return=r,r=i}return l(r);case z:return e(r,i,(c=a._init)(a._payload),s)}if(te(a))return g(r,i,a,s);if(A(a))return m(r,i,a,s);bi(r,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==i&&6===i.tag?(n(r,i.sibling),(i=o(i,a)).return=r,r=i):(n(r,i),(i=$u(a,r.mode,s)).return=r,r=i),l(r)):n(r,i)}}var wi=xi(!0),ki=xi(!1),Si=Eo(null),_i=null,Ei=null,Ci=null;function ji(){Ci=Ei=_i=null}function Ri(e){var t=Si.current;Co(Si),e._currentValue=t}function Oi(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pi(e,t){_i=e,Ci=Ei=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(yl=!0),e.firstContext=null)}function Ti(e){var t=e._currentValue;if(Ci!==e)if(e={context:e,memoizedValue:t,next:null},null===Ei){if(null===_i)throw Error(i(308));Ei=e,_i.dependencies={lanes:0,firstContext:e}}else Ei=Ei.next=e;return t}var zi=null;function Ni(e){null===zi?zi=[e]:zi.push(e)}function Li(e,t,n,r){var o=t.interleaved;return null===o?(n.next=n,Ni(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ai(e,r)}function Ai(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Di=!1;function $i(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ii(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mi(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fi(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Rs)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ai(e,n)}return null===(o=r.interleaved)?(t.next=t,Ni(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ai(e,n)}function Ui(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}function Bi(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?o=i=a:i=i.next=a,n=n.next}while(null!==n);null===i?o=i=t:i=i.next=t}else o=i=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wi(e,t,n,r){var o=e.updateQueue;Di=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(null!==l){o.shared.pending=null;var s=l,u=s.next;s.next=null,null===a?i=u:a.next=u,a=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==i){var d=o.baseState;for(a=0,c=u=s=null,l=i;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,g=l;switch(f=t,p=n,g.tag){case 1:if("function"===typeof(h=g.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=g.payload)?h.call(p,d,f):h)||void 0===f)break e;d=$({},d,f);break e;case 2:Di=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=o.effects)?o.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,a|=f;if(null===(l=l.next)){if(null===(l=o.shared.pending))break;l=(f=l).next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}if(null===c&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=c,null!==(t=o.shared.interleaved)){o=t;do{a|=o.lane,o=o.next}while(o!==t)}else null===i&&(o.shared.lanes=0);Ds|=a,e.lanes=a,e.memoizedState=d}}function Hi(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(null!==o){if(r.callback=null,r=n,"function"!==typeof o)throw Error(i(191,o));o.call(r)}}}var Vi={},Yi=Eo(Vi),qi=Eo(Vi),Ki=Eo(Vi);function Qi(e){if(e===Vi)throw Error(i(174));return e}function Gi(e,t){switch(jo(Ki,t),jo(qi,e),jo(Yi,Vi),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Co(Yi),jo(Yi,t)}function Xi(){Co(Yi),Co(qi),Co(Ki)}function Ji(e){Qi(Ki.current);var t=Qi(Yi.current),n=se(t,e.type);t!==n&&(jo(qi,e),jo(Yi,n))}function Zi(e){qi.current===e&&(Co(Yi),Co(qi))}var ea=Eo(0);function ta(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=[];function ra(){for(var e=0;e<na.length;e++)na[e]._workInProgressVersionPrimary=null;na.length=0}var oa=x.ReactCurrentDispatcher,ia=x.ReactCurrentBatchConfig,aa=0,la=null,sa=null,ua=null,ca=!1,da=!1,fa=0,pa=0;function ha(){throw Error(i(321))}function ga(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function ma(e,t,n,r,o,a){if(aa=a,la=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oa.current=null===e||null===e.memoizedState?Za:el,e=n(r,o),da){a=0;do{if(da=!1,fa=0,25<=a)throw Error(i(301));a+=1,ua=sa=null,t.updateQueue=null,oa.current=tl,e=n(r,o)}while(da)}if(oa.current=Ja,t=null!==sa&&null!==sa.next,aa=0,ua=sa=la=null,ca=!1,t)throw Error(i(300));return e}function va(){var e=0!==fa;return fa=0,e}function ba(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ua?la.memoizedState=ua=e:ua=ua.next=e,ua}function ya(){if(null===sa){var e=la.alternate;e=null!==e?e.memoizedState:null}else e=sa.next;var t=null===ua?la.memoizedState:ua.next;if(null!==t)ua=t,sa=e;else{if(null===e)throw Error(i(310));e={memoizedState:(sa=e).memoizedState,baseState:sa.baseState,baseQueue:sa.baseQueue,queue:sa.queue,next:null},null===ua?la.memoizedState=ua=e:ua=ua.next=e}return ua}function xa(e,t){return"function"===typeof t?t(e):t}function wa(e){var t=ya(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=sa,o=r.baseQueue,a=n.pending;if(null!==a){if(null!==o){var l=o.next;o.next=a.next,a.next=l}r.baseQueue=o=a,n.pending=null}if(null!==o){a=o.next,r=r.baseState;var s=l=null,u=null,c=a;do{var d=c.lane;if((aa&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=f,l=r):u=u.next=f,la.lanes|=d,Ds|=d}c=c.next}while(null!==c&&c!==a);null===u?l=r:u.next=s,lr(r,t.memoizedState)||(yl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){o=e;do{a=o.lane,la.lanes|=a,Ds|=a,o=o.next}while(o!==e)}else null===o&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ka(e){var t=ya(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(null!==o){n.pending=null;var l=o=o.next;do{a=e(a,l.action),l=l.next}while(l!==o);lr(a,t.memoizedState)||(yl=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Sa(){}function _a(e,t){var n=la,r=ya(),o=t(),a=!lr(r.memoizedState,o);if(a&&(r.memoizedState=o,yl=!0),r=r.queue,Da(ja.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==ua&&1&ua.memoizedState.tag){if(n.flags|=2048,Ta(9,Ca.bind(null,n,r,o,t),void 0,null),null===Os)throw Error(i(349));0!==(30&aa)||Ea(n,t,o)}return o}function Ea(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=la.updateQueue)?(t={lastEffect:null,stores:null},la.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ca(e,t,n,r){t.value=n,t.getSnapshot=r,Ra(t)&&Oa(e)}function ja(e,t,n){return n(function(){Ra(t)&&Oa(e)})}function Ra(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function Oa(e){var t=Ai(e,1);null!==t&&nu(t,e,1,-1)}function Pa(e){var t=ba();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:e},t.queue=e,e=e.dispatch=Ka.bind(null,la,e),[t.memoizedState,e]}function Ta(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=la.updateQueue)?(t={lastEffect:null,stores:null},la.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function za(){return ya().memoizedState}function Na(e,t,n,r){var o=ba();la.flags|=e,o.memoizedState=Ta(1|t,n,void 0,void 0===r?null:r)}function La(e,t,n,r){var o=ya();r=void 0===r?null:r;var i=void 0;if(null!==sa){var a=sa.memoizedState;if(i=a.destroy,null!==r&&ga(r,a.deps))return void(o.memoizedState=Ta(t,n,i,r))}la.flags|=e,o.memoizedState=Ta(1|t,n,i,r)}function Aa(e,t){return Na(8390656,8,e,t)}function Da(e,t){return La(2048,8,e,t)}function $a(e,t){return La(4,2,e,t)}function Ia(e,t){return La(4,4,e,t)}function Ma(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Fa(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,La(4,4,Ma.bind(null,t,e),n)}function Ua(){}function Ba(e,t){var n=ya();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ga(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wa(e,t){var n=ya();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ga(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ha(e,t,n){return 0===(21&aa)?(e.baseState&&(e.baseState=!1,yl=!0),e.memoizedState=n):(lr(n,t)||(n=gt(),la.lanes|=n,Ds|=n,e.baseState=!0),t)}function Va(e,t){var n=yt;yt=0!==n&&4>n?n:4,e(!0);var r=ia.transition;ia.transition={};try{e(!1),t()}finally{yt=n,ia.transition=r}}function Ya(){return ya().memoizedState}function qa(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qa(e))Ga(t,n);else if(null!==(n=Li(e,t,n,r))){nu(n,e,r,eu()),Xa(n,t,r)}}function Ka(e,t,n){var r=tu(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qa(e))Ga(t,o);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,lr(l,a)){var s=t.interleaved;return null===s?(o.next=o,Ni(t)):(o.next=s.next,s.next=o),void(t.interleaved=o)}}catch(u){}null!==(n=Li(e,t,o,r))&&(nu(n,e,r,o=eu()),Xa(n,t,r))}}function Qa(e){var t=e.alternate;return e===la||null!==t&&t===la}function Ga(e,t){da=ca=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xa(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}var Ja={readContext:Ti,useCallback:ha,useContext:ha,useEffect:ha,useImperativeHandle:ha,useInsertionEffect:ha,useLayoutEffect:ha,useMemo:ha,useReducer:ha,useRef:ha,useState:ha,useDebugValue:ha,useDeferredValue:ha,useTransition:ha,useMutableSource:ha,useSyncExternalStore:ha,useId:ha,unstable_isNewReconciler:!1},Za={readContext:Ti,useCallback:function(e,t){return ba().memoizedState=[e,void 0===t?null:t],e},useContext:Ti,useEffect:Aa,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Na(4194308,4,Ma.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Na(4194308,4,e,t)},useInsertionEffect:function(e,t){return Na(4,2,e,t)},useMemo:function(e,t){var n=ba();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ba();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qa.bind(null,la,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},ba().memoizedState=e},useState:Pa,useDebugValue:Ua,useDeferredValue:function(e){return ba().memoizedState=e},useTransition:function(){var e=Pa(!1),t=e[0];return e=Va.bind(null,e[1]),ba().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=la,o=ba();if(ii){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===Os)throw Error(i(349));0!==(30&aa)||Ea(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Aa(ja.bind(null,r,a,e),[e]),r.flags|=2048,Ta(9,Ca.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=ba(),t=Os.identifierPrefix;if(ii){var n=Jo;t=":"+t+"R"+(n=(Xo&~(1<<32-at(Xo)-1)).toString(32)+n),0<(n=fa++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=pa++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Ti,useCallback:Ba,useContext:Ti,useEffect:Da,useImperativeHandle:Fa,useInsertionEffect:$a,useLayoutEffect:Ia,useMemo:Wa,useReducer:wa,useRef:za,useState:function(){return wa(xa)},useDebugValue:Ua,useDeferredValue:function(e){return Ha(ya(),sa.memoizedState,e)},useTransition:function(){return[wa(xa)[0],ya().memoizedState]},useMutableSource:Sa,useSyncExternalStore:_a,useId:Ya,unstable_isNewReconciler:!1},tl={readContext:Ti,useCallback:Ba,useContext:Ti,useEffect:Da,useImperativeHandle:Fa,useInsertionEffect:$a,useLayoutEffect:Ia,useMemo:Wa,useReducer:ka,useRef:za,useState:function(){return ka(xa)},useDebugValue:Ua,useDeferredValue:function(e){var t=ya();return null===sa?t.memoizedState=e:Ha(t,sa.memoizedState,e)},useTransition:function(){return[ka(xa)[0],ya().memoizedState]},useMutableSource:Sa,useSyncExternalStore:_a,useId:Ya,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=$({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:$({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var ol={isMounted:function(e){return!!(e=e._reactInternals)&&Be(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),o=tu(e),i=Mi(r,o);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Fi(e,i,o))&&(nu(t,e,o,r),Ui(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),o=tu(e),i=Mi(r,o);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Fi(e,i,o))&&(nu(t,e,o,r),Ui(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),o=Mi(n,r);o.tag=2,void 0!==t&&null!==t&&(o.callback=t),null!==(t=Fi(e,o,r))&&(nu(t,e,r,n),Ui(t,e,r))}};function il(e,t,n,r,o,i,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,a):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(o,i))}function al(e,t,n){var r=!1,o=Ro,i=t.contextType;return"object"===typeof i&&null!==i?i=Ti(i):(o=No(t)?To:Oo.current,i=(r=null!==(r=t.contextTypes)&&void 0!==r)?zo(e,o):Ro),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ol,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ol.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},$i(e);var i=t.contextType;"object"===typeof i&&null!==i?o.context=Ti(i):(i=No(t)?To:Oo.current,o.context=zo(e,i)),o.state=e.memoizedState,"function"===typeof(i=t.getDerivedStateFromProps)&&(rl(e,t,i,n),o.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(t=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&ol.enqueueReplaceState(o,o.state,null),Wi(e,n,o,r),o.state=e.memoizedState),"function"===typeof o.componentDidMount&&(e.flags|=4194308)}function ul(e,t){try{var n="",r=t;do{n+=U(r),r=r.return}while(r);var o=n}catch(i){o="\nError generating stack: "+i.message+"\n"+i.stack}return{value:e,source:t,stack:o,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fl="function"===typeof WeakMap?WeakMap:Map;function pl(e,t,n){(n=Mi(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hs||(Hs=!0,Vs=r),dl(0,t)},n}function hl(e,t,n){(n=Mi(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){dl(0,t)}}var i=e.stateNode;return null!==i&&"function"===typeof i.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Ys?Ys=new Set([this]):Ys.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function gl(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Eu.bind(null,e,t,n),t.then(e,e))}function ml(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vl(e,t,n,r,o){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Mi(-1,1)).tag=2,Fi(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var bl=x.ReactCurrentOwner,yl=!1;function xl(e,t,n,r){t.child=null===e?ki(t,null,n,r):wi(t,e.child,n,r)}function wl(e,t,n,r,o){n=n.render;var i=t.ref;return Pi(t,o),r=ma(e,t,n,r,i,o),n=va(),null===e||yl?(ii&&n&&ti(t),t.flags|=1,xl(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Hl(e,t,o))}function kl(e,t,n,r,o){if(null===e){var i=n.type;return"function"!==typeof i||zu(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Lu(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Sl(e,t,i,r,o))}if(i=e.child,0===(e.lanes&o)){var a=i.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(a,r)&&e.ref===t.ref)return Hl(e,t,o)}return t.flags|=1,(e=Nu(i,r)).ref=t.ref,e.return=t,t.child=e}function Sl(e,t,n,r,o){if(null!==e){var i=e.memoizedProps;if(sr(i,r)&&e.ref===t.ref){if(yl=!1,t.pendingProps=r=i,0===(e.lanes&o))return t.lanes=e.lanes,Hl(e,t,o);0!==(131072&e.flags)&&(yl=!0)}}return Cl(e,t,n,r,o)}function _l(e,t,n){var r=t.pendingProps,o=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},jo(Ns,zs),zs|=n;else{if(0===(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,jo(Ns,zs),zs|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,jo(Ns,zs),zs|=r}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,jo(Ns,zs),zs|=r;return xl(e,t,o,n),t.child}function El(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cl(e,t,n,r,o){var i=No(n)?To:Oo.current;return i=zo(t,i),Pi(t,o),n=ma(e,t,n,r,i,o),r=va(),null===e||yl?(ii&&r&&ti(t),t.flags|=1,xl(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Hl(e,t,o))}function jl(e,t,n,r,o){if(No(n)){var i=!0;$o(t)}else i=!1;if(Pi(t,o),null===t.stateNode)Wl(e,t),al(t,n,r),sl(t,n,r,o),r=!0;else if(null===e){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;"object"===typeof u&&null!==u?u=Ti(u):u=zo(t,u=No(n)?To:Oo.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof a.getSnapshotBeforeUpdate;d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(l!==r||s!==u)&&ll(t,a,r,u),Di=!1;var f=t.memoizedState;a.state=f,Wi(t,r,a,o),s=t.memoizedState,l!==r||f!==s||Po.current||Di?("function"===typeof c&&(rl(t,n,c,r),s=t.memoizedState),(l=Di||il(t,n,l,r,f,s,u))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ii(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:nl(t.type,l),a.props=u,d=t.pendingProps,f=a.context,"object"===typeof(s=n.contextType)&&null!==s?s=Ti(s):s=zo(t,s=No(n)?To:Oo.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(l!==d||f!==s)&&ll(t,a,r,s),Di=!1,f=t.memoizedState,a.state=f,Wi(t,r,a,o);var h=t.memoizedState;l!==d||f!==h||Po.current||Di?("function"===typeof p&&(rl(t,n,p,r),h=t.memoizedState),(u=Di||il(t,n,u,r,f,h,s)||!1)?(c||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,s),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=s,r=u):("function"!==typeof a.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Rl(e,t,n,r,i,o)}function Rl(e,t,n,r,o,i){El(e,t);var a=0!==(128&t.flags);if(!r&&!a)return o&&Io(t,n,!1),Hl(e,t,i);r=t.stateNode,bl.current=t;var l=a&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=wi(t,e.child,null,i),t.child=wi(t,null,l,i)):xl(e,t,l,i),t.memoizedState=r.state,o&&Io(t,n,!0),t.child}function Ol(e){var t=e.stateNode;t.pendingContext?Ao(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ao(0,t.context,!1),Gi(e,t.containerInfo)}function Pl(e,t,n,r,o){return hi(),gi(o),t.flags|=256,xl(e,t,n,r),t.child}var Tl,zl,Nl,Ll,Al={dehydrated:null,treeContext:null,retryLane:0};function Dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function $l(e,t,n){var r,o=t.pendingProps,a=ea.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&a)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),jo(ea,1&a),null===e)return ci(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=o.children,e=o.fallback,l?(o=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&o)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Du(s,o,0,null),e=Au(e,o,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Dl(n),t.memoizedState=Al,e):Il(t,s));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,o,a,l){if(n)return 256&t.flags?(t.flags&=-257,Ml(e,t,l,r=cl(Error(i(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=Du({mode:"visible",children:r.children},o,0,null),(a=Au(a,o,l,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!==(1&t.mode)&&wi(t,e.child,null,l),t.child.memoizedState=Dl(l),t.memoizedState=Al,a);if(0===(1&t.mode))return Ml(e,t,l,null);if("$!"===o.data){if(r=o.nextSibling&&o.nextSibling.dataset)var s=r.dgst;return r=s,Ml(e,t,l,r=cl(a=Error(i(419)),r,void 0))}if(s=0!==(l&e.childLanes),yl||s){if(null!==(r=Os)){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!==(o&(r.suspendedLanes|l))?0:o)&&o!==a.retryLane&&(a.retryLane=o,Ai(e,o),nu(r,e,o,-1))}return gu(),Ml(e,t,l,r=cl(Error(i(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=ju.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,oi=uo(o.nextSibling),ri=t,ii=!0,ai=null,null!==e&&(Ko[Qo++]=Xo,Ko[Qo++]=Jo,Ko[Qo++]=Go,Xo=e.id,Jo=e.overflow,Go=t),t=Il(t,r.children),t.flags|=4096,t)}(e,t,s,o,r,a,n);if(l){l=o.fallback,s=t.mode,r=(a=e.child).sibling;var u={mode:"hidden",children:o.children};return 0===(1&s)&&t.child!==a?((o=t.child).childLanes=0,o.pendingProps=u,t.deletions=null):(o=Nu(a,u)).subtreeFlags=14680064&a.subtreeFlags,null!==r?l=Nu(r,l):(l=Au(l,s,n,null)).flags|=2,l.return=t,o.return=t,o.sibling=l,t.child=o,o=l,l=t.child,s=null===(s=e.child.memoizedState)?Dl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Al,o}return e=(l=e.child).sibling,o=Nu(l,{mode:"visible",children:o.children}),0===(1&t.mode)&&(o.lanes=n),o.return=t,o.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Il(e,t){return(t=Du({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Ml(e,t,n,r){return null!==r&&gi(r),wi(t,e.child,null,n),(e=Il(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Fl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Oi(e.return,t,n)}function Ul(e,t,n,r,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Bl(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(xl(e,t,r.children,n),0!==(2&(r=ea.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Fl(e,n,t);else if(19===e.tag)Fl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(jo(ea,r),0===(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;null!==n;)null!==(e=n.alternate)&&null===ta(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ul(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===ta(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ul(t,!0,n,null,i);break;case"together":Ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ds|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Nu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Nu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vl(e,t){if(!ii)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Yl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=14680064&o.subtreeFlags,r|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ql(e,t,n){var r=t.pendingProps;switch(ni(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yl(t),null;case 1:case 17:return No(t.type)&&Lo(),Yl(t),null;case 3:return r=t.stateNode,Xi(),Co(Po),Co(Oo),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(fi(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ai&&(au(ai),ai=null))),zl(e,t),Yl(t),null;case 5:Zi(t);var o=Qi(Ki.current);if(n=t.type,null!==e&&null!=t.stateNode)Nl(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(i(166));return Yl(t),null}if(e=Qi(Yi.current),fi(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[po]=t,r[ho]=a,e=0!==(1&t.mode),n){case"dialog":Mr("cancel",r),Mr("close",r);break;case"iframe":case"object":case"embed":Mr("load",r);break;case"video":case"audio":for(o=0;o<Ar.length;o++)Mr(Ar[o],r);break;case"source":Mr("error",r);break;case"img":case"image":case"link":Mr("error",r),Mr("load",r);break;case"details":Mr("toggle",r);break;case"input":G(r,a),Mr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Mr("invalid",r);break;case"textarea":oe(r,a),Mr("invalid",r)}for(var s in be(n,a),o=null,a)if(a.hasOwnProperty(s)){var u=a[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==a.suppressHydrationWarning&&Jr(r.textContent,u,e),o=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==a.suppressHydrationWarning&&Jr(r.textContent,u,e),o=["children",""+u]):l.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Mr("scroll",r)}switch(n){case"input":Y(r),Z(r,a,!0);break;case"textarea":Y(r),ae(r);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(r.onclick=Zr)}r=o,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[po]=t,e[ho]=r,Tl(e,t,!1,!1),t.stateNode=e;e:{switch(s=ye(n,r),n){case"dialog":Mr("cancel",e),Mr("close",e),o=r;break;case"iframe":case"object":case"embed":Mr("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ar.length;o++)Mr(Ar[o],e);o=r;break;case"source":Mr("error",e),o=r;break;case"img":case"image":case"link":Mr("error",e),Mr("load",e),o=r;break;case"details":Mr("toggle",e),o=r;break;case"input":G(e,r),o=Q(e,r),Mr("invalid",e);break;case"option":default:o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=$({},r,{value:void 0}),Mr("invalid",e);break;case"textarea":oe(e,r),o=re(e,r),Mr("invalid",e)}for(a in be(n,o),u=o)if(u.hasOwnProperty(a)){var c=u[a];"style"===a?me(e,c):"dangerouslySetInnerHTML"===a?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===a?"string"===typeof c?("textarea"!==n||""!==c)&&fe(e,c):"number"===typeof c&&fe(e,""+c):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(l.hasOwnProperty(a)?null!=c&&"onScroll"===a&&Mr("scroll",e):null!=c&&y(e,a,c,s))}switch(n){case"input":Y(e),Z(e,r,!1);break;case"textarea":Y(e),ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+H(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?ne(e,!!r.multiple,a,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof o.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Yl(t),null;case 6:if(e&&null!=t.stateNode)Ll(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(i(166));if(n=Qi(Ki.current),Qi(Yi.current),fi(t)){if(r=t.stateNode,n=t.memoizedProps,r[po]=t,(a=r.nodeValue!==n)&&null!==(e=ri))switch(e.tag){case 3:Jr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!==(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[po]=t,t.stateNode=r}return Yl(t),null;case 13:if(Co(ea),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ii&&null!==oi&&0!==(1&t.mode)&&0===(128&t.flags))pi(),hi(),t.flags|=98560,a=!1;else if(a=fi(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(i(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(i(317));a[po]=t}else hi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Yl(t),a=!1}else null!==ai&&(au(ai),ai=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ea.current)?0===Ls&&(Ls=3):gu())),null!==t.updateQueue&&(t.flags|=4),Yl(t),null);case 4:return Xi(),zl(e,t),null===e&&Br(t.stateNode.containerInfo),Yl(t),null;case 10:return Ri(t.type._context),Yl(t),null;case 19:if(Co(ea),null===(a=t.memoizedState))return Yl(t),null;if(r=0!==(128&t.flags),null===(s=a.rendering))if(r)Vl(a,!1);else{if(0!==Ls||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ta(e))){for(t.flags|=128,Vl(a,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(s=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return jo(ea,1&ea.current|2),t.child}e=e.sibling}null!==a.tail&&Xe()>Bs&&(t.flags|=128,r=!0,Vl(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ta(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vl(a,!0),null===a.tail&&"hidden"===a.tailMode&&!s.alternate&&!ii)return Yl(t),null}else 2*Xe()-a.renderingStartTime>Bs&&1073741824!==n&&(t.flags|=128,r=!0,Vl(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=a.last)?n.sibling=s:t.child=s,a.last=s)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Xe(),t.sibling=null,n=ea.current,jo(ea,r?1&n|2:1&n),t):(Yl(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&zs)&&(Yl(t),6&t.subtreeFlags&&(t.flags|=8192)):Yl(t),null;case 24:case 25:return null}throw Error(i(156,t.tag))}function Kl(e,t){switch(ni(t),t.tag){case 1:return No(t.type)&&Lo(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Xi(),Co(Po),Co(Oo),ra(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zi(t),null;case 13:if(Co(ea),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));hi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Co(ea),null;case 4:return Xi(),null;case 10:return Ri(t.type._context),null;case 22:case 23:return du(),null;default:return null}}Tl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},zl=function(){},Nl=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Qi(Yi.current);var i,a=null;switch(n){case"input":o=Q(e,o),r=Q(e,r),a=[];break;case"select":o=$({},o,{value:void 0}),r=$({},r,{value:void 0}),a=[];break;case"textarea":o=re(e,o),r=re(e,r),a=[];break;default:"function"!==typeof o.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(c in be(n,r),n=null,o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&null!=o[c])if("style"===c){var s=o[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=o?o[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(a||(a=[]),a.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(a=a||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(a=a||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Mr("scroll",e),a||s===u||(a=[])):(a=a||[]).push(c,u))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}},Ll=function(e,t,n,r){n!==r&&(t.flags|=4)};var Ql=!1,Gl=!1,Xl="function"===typeof WeakSet?WeakSet:Set,Jl=null;function Zl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){_u(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){_u(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,void 0!==i&&es(t,n,i)}o=o.next}while(o!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function os(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function is(e){var t=e.alternate;null!==t&&(e.alternate=null,is(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[po],delete t[ho],delete t[mo],delete t[vo],delete t[bo])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function as(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||as(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function us(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(us(e,t,n),e=e.sibling;null!==e;)us(e,t,n),e=e.sibling}var cs=null,ds=!1;function fs(e,t,n){for(n=n.child;null!==n;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(it&&"function"===typeof it.onCommitFiberUnmount)try{it.onCommitFiberUnmount(ot,n)}catch(l){}switch(n.tag){case 5:Gl||Zl(n,t);case 6:var r=cs,o=ds;cs=null,fs(e,t,n),ds=o,null!==(cs=r)&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cs.removeChild(n.stateNode));break;case 18:null!==cs&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?so(e.parentNode,n):1===e.nodeType&&so(e,n),Bt(e)):so(cs,n.stateNode));break;case 4:r=cs,o=ds,cs=n.stateNode.containerInfo,ds=!0,fs(e,t,n),cs=r,ds=o;break;case 0:case 11:case 14:case 15:if(!Gl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,void 0!==a&&(0!==(2&i)||0!==(4&i))&&es(n,t,a),o=o.next}while(o!==r)}fs(e,t,n);break;case 1:if(!Gl&&(Zl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){_u(n,t,l)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(Gl=(r=Gl)||null!==n.memoizedState,fs(e,t,n),Gl=r):fs(e,t,n);break;default:fs(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Xl),t.forEach(function(t){var r=Ru.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function gs(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:cs=s.stateNode,ds=!1;break e;case 3:case 4:cs=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===cs)throw Error(i(160));ps(a,l,o),cs=null,ds=!1;var u=o.alternate;null!==u&&(u.return=null),o.return=null}catch(c){_u(o,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)ms(t,e),t=t.sibling}function ms(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gs(t,e),vs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(m){_u(e,e.return,m)}try{ns(5,e,e.return)}catch(m){_u(e,e.return,m)}}break;case 1:gs(t,e),vs(e),512&r&&null!==n&&Zl(n,n.return);break;case 5:if(gs(t,e),vs(e),512&r&&null!==n&&Zl(n,n.return),32&e.flags){var o=e.stateNode;try{fe(o,"")}catch(m){_u(e,e.return,m)}}if(4&r&&null!=(o=e.stateNode)){var a=e.memoizedProps,l=null!==n?n.memoizedProps:a,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===a.type&&null!=a.name&&X(o,a),ye(s,l);var c=ye(s,a);for(l=0;l<u.length;l+=2){var d=u[l],f=u[l+1];"style"===d?me(o,f):"dangerouslySetInnerHTML"===d?de(o,f):"children"===d?fe(o,f):y(o,d,f,c)}switch(s){case"input":J(o,a);break;case"textarea":ie(o,a);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var h=a.value;null!=h?ne(o,!!a.multiple,h,!1):p!==!!a.multiple&&(null!=a.defaultValue?ne(o,!!a.multiple,a.defaultValue,!0):ne(o,!!a.multiple,a.multiple?[]:"",!1))}o[ho]=a}catch(m){_u(e,e.return,m)}}break;case 6:if(gs(t,e),vs(e),4&r){if(null===e.stateNode)throw Error(i(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(m){_u(e,e.return,m)}}break;case 3:if(gs(t,e),vs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Bt(t.containerInfo)}catch(m){_u(e,e.return,m)}break;case 4:default:gs(t,e),vs(e);break;case 13:gs(t,e),vs(e),8192&(o=e.child).flags&&(a=null!==o.memoizedState,o.stateNode.isHidden=a,!a||null!==o.alternate&&null!==o.alternate.memoizedState||(Us=Xe())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Gl=(c=Gl)||d,gs(t,e),Gl=c):gs(t,e),vs(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Jl=e,d=e.child;null!==d;){for(f=Jl=d;null!==Jl;){switch(h=(p=Jl).child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:Zl(p,p.return);var g=p.stateNode;if("function"===typeof g.componentWillUnmount){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(m){_u(r,n,m)}}break;case 5:Zl(p,p.return);break;case 22:if(null!==p.memoizedState){ws(f);continue}}null!==h?(h.return=p,Jl=h):ws(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{o=f.stateNode,c?"function"===typeof(a=o.style).setProperty?a.setProperty("display","none","important"):a.display="none":(s=f.stateNode,l=void 0!==(u=f.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=ge("display",l))}catch(m){_u(e,e.return,m)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(m){_u(e,e.return,m)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:gs(t,e),vs(e),4&r&&hs(e);case 21:}}function vs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(as(n)){var r=n;break e}n=n.return}throw Error(i(160))}switch(r.tag){case 5:var o=r.stateNode;32&r.flags&&(fe(o,""),r.flags&=-33),us(e,ls(e),o);break;case 3:case 4:var a=r.stateNode.containerInfo;ss(e,ls(e),a);break;default:throw Error(i(161))}}catch(l){_u(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function bs(e,t,n){Jl=e,ys(e,t,n)}function ys(e,t,n){for(var r=0!==(1&e.mode);null!==Jl;){var o=Jl,i=o.child;if(22===o.tag&&r){var a=null!==o.memoizedState||Ql;if(!a){var l=o.alternate,s=null!==l&&null!==l.memoizedState||Gl;l=Ql;var u=Gl;if(Ql=a,(Gl=s)&&!u)for(Jl=o;null!==Jl;)s=(a=Jl).child,22===a.tag&&null!==a.memoizedState?ks(o):null!==s?(s.return=a,Jl=s):ks(o);for(;null!==i;)Jl=i,ys(i,t,n),i=i.sibling;Jl=o,Ql=l,Gl=u}xs(e)}else 0!==(8772&o.subtreeFlags)&&null!==i?(i.return=o,Jl=i):xs(e)}}function xs(e){for(;null!==Jl;){var t=Jl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Gl||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Gl)if(null===n)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&Hi(t,a,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Hi(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Bt(f)}}}break;default:throw Error(i(163))}Gl||512&t.flags&&os(t)}catch(p){_u(t,t.return,p)}}if(t===e){Jl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Jl=n;break}Jl=t.return}}function ws(e){for(;null!==Jl;){var t=Jl;if(t===e){Jl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Jl=n;break}Jl=t.return}}function ks(e){for(;null!==Jl;){var t=Jl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){_u(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var o=t.return;try{r.componentDidMount()}catch(s){_u(t,o,s)}}var i=t.return;try{os(t)}catch(s){_u(t,i,s)}break;case 5:var a=t.return;try{os(t)}catch(s){_u(t,a,s)}}}catch(s){_u(t,t.return,s)}if(t===e){Jl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Jl=l;break}Jl=t.return}}var Ss,_s=Math.ceil,Es=x.ReactCurrentDispatcher,Cs=x.ReactCurrentOwner,js=x.ReactCurrentBatchConfig,Rs=0,Os=null,Ps=null,Ts=0,zs=0,Ns=Eo(0),Ls=0,As=null,Ds=0,$s=0,Is=0,Ms=null,Fs=null,Us=0,Bs=1/0,Ws=null,Hs=!1,Vs=null,Ys=null,qs=!1,Ks=null,Qs=0,Gs=0,Xs=null,Js=-1,Zs=0;function eu(){return 0!==(6&Rs)?Xe():-1!==Js?Js:Js=Xe()}function tu(e){return 0===(1&e.mode)?1:0!==(2&Rs)&&0!==Ts?Ts&-Ts:null!==mi.transition?(0===Zs&&(Zs=gt()),Zs):0!==(e=yt)?e:e=void 0===(e=window.event)?16:Gt(e.type)}function nu(e,t,n,r){if(50<Gs)throw Gs=0,Xs=null,Error(i(185));vt(e,n,r),0!==(2&Rs)&&e===Os||(e===Os&&(0===(2&Rs)&&($s|=n),4===Ls&&lu(e,Ts)),ru(e,r),1===n&&0===Rs&&0===(1&t.mode)&&(Bs=Xe()+500,Fo&&Wo()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-at(i),l=1<<a,s=o[a];-1===s?0!==(l&n)&&0===(l&r)||(o[a]=pt(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}(e,t);var r=ft(e,e===Os?Ts:0);if(0===r)null!==n&&Ke(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ke(n),1===t)0===e.tag?function(e){Fo=!0,Bo(e)}(su.bind(null,e)):Bo(su.bind(null,e)),ao(function(){0===(6&Rs)&&Wo()}),n=null;else{switch(xt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Ou(n,ou.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ou(e,t){if(Js=-1,Zs=0,0!==(6&Rs))throw Error(i(327));var n=e.callbackNode;if(ku()&&e.callbackNode!==n)return null;var r=ft(e,e===Os?Ts:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=mu(e,r);else{t=r;var o=Rs;Rs|=2;var a=hu();for(Os===e&&Ts===t||(Ws=null,Bs=Xe()+500,fu(e,t));;)try{bu();break}catch(s){pu(e,s)}ji(),Es.current=a,Rs=o,null!==Ps?t=0:(Os=null,Ts=0,t=Ls)}if(0!==t){if(2===t&&(0!==(o=ht(e))&&(r=o,t=iu(e,o))),1===t)throw n=As,fu(e,0),lu(e,r),ru(e,Xe()),n;if(6===t)lu(e,r);else{if(o=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!lr(i(),o))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=mu(e,r))&&(0!==(a=ht(e))&&(r=a,t=iu(e,a))),1===t))throw n=As,fu(e,0),lu(e,r),ru(e,Xe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(i(345));case 2:case 5:wu(e,Fs,Ws);break;case 3:if(lu(e,r),(130023424&r)===r&&10<(t=Us+500-Xe())){if(0!==ft(e,0))break;if(((o=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ro(wu.bind(null,e,Fs,Ws),t);break}wu(e,Fs,Ws);break;case 4:if(lu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-at(r);a=1<<l,(l=t[l])>o&&(o=l),r&=~a}if(r=o,10<(r=(120>(r=Xe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_s(r/1960))-r)){e.timeoutHandle=ro(wu.bind(null,e,Fs,Ws),r);break}wu(e,Fs,Ws);break;default:throw Error(i(329))}}}return ru(e,Xe()),e.callbackNode===n?ou.bind(null,e):null}function iu(e,t){var n=Ms;return e.current.memoizedState.isDehydrated&&(fu(e,t).flags|=256),2!==(e=mu(e,t))&&(t=Fs,Fs=n,null!==t&&au(t)),e}function au(e){null===Fs?Fs=e:Fs.push.apply(Fs,e)}function lu(e,t){for(t&=~Is,t&=~$s,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function su(e){if(0!==(6&Rs))throw Error(i(327));ku();var t=ft(e,0);if(0===(1&t))return ru(e,Xe()),null;var n=mu(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=iu(e,r))}if(1===n)throw n=As,fu(e,0),lu(e,t),ru(e,Xe()),n;if(6===n)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wu(e,Fs,Ws),ru(e,Xe()),null}function uu(e,t){var n=Rs;Rs|=1;try{return e(t)}finally{0===(Rs=n)&&(Bs=Xe()+500,Fo&&Wo())}}function cu(e){null!==Ks&&0===Ks.tag&&0===(6&Rs)&&ku();var t=Rs;Rs|=1;var n=js.transition,r=yt;try{if(js.transition=null,yt=1,e)return e()}finally{yt=r,js.transition=n,0===(6&(Rs=t))&&Wo()}}function du(){zs=Ns.current,Co(Ns)}function fu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,oo(n)),null!==Ps)for(n=Ps.return;null!==n;){var r=n;switch(ni(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Lo();break;case 3:Xi(),Co(Po),Co(Oo),ra();break;case 5:Zi(r);break;case 4:Xi();break;case 13:case 19:Co(ea);break;case 10:Ri(r.type._context);break;case 22:case 23:du()}n=n.return}if(Os=e,Ps=e=Nu(e.current,null),Ts=zs=t,Ls=0,As=null,Is=$s=Ds=0,Fs=Ms=null,null!==zi){for(t=0;t<zi.length;t++)if(null!==(r=(n=zi[t]).interleaved)){n.interleaved=null;var o=r.next,i=n.pending;if(null!==i){var a=i.next;i.next=o,r.next=a}n.pending=r}zi=null}return e}function pu(e,t){for(;;){var n=Ps;try{if(ji(),oa.current=Ja,ca){for(var r=la.memoizedState;null!==r;){var o=r.queue;null!==o&&(o.pending=null),r=r.next}ca=!1}if(aa=0,ua=sa=la=null,da=!1,fa=0,Cs.current=null,null===n||null===n.return){Ls=1,As=t,Ps=null;break}e:{var a=e,l=n.return,s=n,u=t;if(t=Ts,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=ml(l);if(null!==h){h.flags&=-257,vl(h,l,s,0,t),1&h.mode&&gl(a,c,t),u=c;var g=(t=h).updateQueue;if(null===g){var m=new Set;m.add(u),t.updateQueue=m}else g.add(u);break e}if(0===(1&t)){gl(a,c,t),gu();break e}u=Error(i(426))}else if(ii&&1&s.mode){var v=ml(l);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vl(v,l,s,0,t),gi(ul(u,s));break e}}a=u=ul(u,s),4!==Ls&&(Ls=2),null===Ms?Ms=[a]:Ms.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Bi(a,pl(0,u,t));break e;case 1:s=u;var b=a.type,y=a.stateNode;if(0===(128&a.flags)&&("function"===typeof b.getDerivedStateFromError||null!==y&&"function"===typeof y.componentDidCatch&&(null===Ys||!Ys.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t,Bi(a,hl(a,s,t));break e}}a=a.return}while(null!==a)}xu(n)}catch(x){t=x,Ps===n&&null!==n&&(Ps=n=n.return);continue}break}}function hu(){var e=Es.current;return Es.current=Ja,null===e?Ja:e}function gu(){0!==Ls&&3!==Ls&&2!==Ls||(Ls=4),null===Os||0===(268435455&Ds)&&0===(268435455&$s)||lu(Os,Ts)}function mu(e,t){var n=Rs;Rs|=2;var r=hu();for(Os===e&&Ts===t||(Ws=null,fu(e,t));;)try{vu();break}catch(o){pu(e,o)}if(ji(),Rs=n,Es.current=r,null!==Ps)throw Error(i(261));return Os=null,Ts=0,Ls}function vu(){for(;null!==Ps;)yu(Ps)}function bu(){for(;null!==Ps&&!Qe();)yu(Ps)}function yu(e){var t=Ss(e.alternate,e,zs);e.memoizedProps=e.pendingProps,null===t?xu(e):Ps=t,Cs.current=null}function xu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=ql(n,t,zs)))return void(Ps=n)}else{if(null!==(n=Kl(n,t)))return n.flags&=32767,void(Ps=n);if(null===e)return Ls=6,void(Ps=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ps=t);Ps=t=e}while(null!==t);0===Ls&&(Ls=5)}function wu(e,t,n){var r=yt,o=js.transition;try{js.transition=null,yt=1,function(e,t,n,r){do{ku()}while(null!==Ks);if(0!==(6&Rs))throw Error(i(327));n=e.finishedWork;var o=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-at(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}(e,a),e===Os&&(Ps=Os=null,Ts=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||qs||(qs=!0,Ou(tt,function(){return ku(),null})),a=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||a){a=js.transition,js.transition=null;var l=yt;yt=1;var s=Rs;Rs|=4,Cs.current=null,function(e,t){if(eo=Ht,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(w){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==o&&3!==f.nodeType||(s=l+o),f!==a||0!==r&&3!==f.nodeType||(u=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===o&&(s=l),p===a&&++d===r&&(u=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(to={focusedElem:e,selectionRange:n},Ht=!1,Jl=t;null!==Jl;)if(e=(t=Jl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Jl=e;else for(;null!==Jl;){t=Jl;try{var g=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==g){var m=g.memoizedProps,v=g.memoizedState,b=t.stateNode,y=b.getSnapshotBeforeUpdate(t.elementType===t.type?m:nl(t.type,m),v);b.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(i(163))}}catch(w){_u(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Jl=e;break}Jl=t.return}g=ts,ts=!1}(e,n),ms(n,e),hr(to),Ht=!!eo,to=eo=null,e.current=n,bs(n,e,o),Ge(),Rs=s,yt=l,js.transition=a}else e.current=n;if(qs&&(qs=!1,Ks=e,Qs=o),a=e.pendingLanes,0===a&&(Ys=null),function(e){if(it&&"function"===typeof it.onCommitFiberRoot)try{it.onCommitFiberRoot(ot,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,Xe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Hs)throw Hs=!1,e=Vs,Vs=null,e;0!==(1&Qs)&&0!==e.tag&&ku(),a=e.pendingLanes,0!==(1&a)?e===Xs?Gs++:(Gs=0,Xs=e):Gs=0,Wo()}(e,t,n,r)}finally{js.transition=o,yt=r}return null}function ku(){if(null!==Ks){var e=xt(Qs),t=js.transition,n=yt;try{if(js.transition=null,yt=16>e?16:e,null===Ks)var r=!1;else{if(e=Ks,Ks=null,Qs=0,0!==(6&Rs))throw Error(i(331));var o=Rs;for(Rs|=4,Jl=e.current;null!==Jl;){var a=Jl,l=a.child;if(0!==(16&Jl.flags)){var s=a.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(Jl=c;null!==Jl;){var d=Jl;switch(d.tag){case 0:case 11:case 15:ns(8,d,a)}var f=d.child;if(null!==f)f.return=d,Jl=f;else for(;null!==Jl;){var p=(d=Jl).sibling,h=d.return;if(is(d),d===c){Jl=null;break}if(null!==p){p.return=h,Jl=p;break}Jl=h}}}var g=a.alternate;if(null!==g){var m=g.child;if(null!==m){g.child=null;do{var v=m.sibling;m.sibling=null,m=v}while(null!==m)}}Jl=a}}if(0!==(2064&a.subtreeFlags)&&null!==l)l.return=a,Jl=l;else e:for(;null!==Jl;){if(0!==(2048&(a=Jl).flags))switch(a.tag){case 0:case 11:case 15:ns(9,a,a.return)}var b=a.sibling;if(null!==b){b.return=a.return,Jl=b;break e}Jl=a.return}}var y=e.current;for(Jl=y;null!==Jl;){var x=(l=Jl).child;if(0!==(2064&l.subtreeFlags)&&null!==x)x.return=l,Jl=x;else e:for(l=y;null!==Jl;){if(0!==(2048&(s=Jl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(k){_u(s,s.return,k)}if(s===l){Jl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Jl=w;break e}Jl=s.return}}if(Rs=o,Wo(),it&&"function"===typeof it.onPostCommitFiberRoot)try{it.onPostCommitFiberRoot(ot,e)}catch(k){}r=!0}return r}finally{yt=n,js.transition=t}}return!1}function Su(e,t,n){e=Fi(e,t=pl(0,t=ul(n,t),1),1),t=eu(),null!==e&&(vt(e,1,t),ru(e,t))}function _u(e,t,n){if(3===e.tag)Su(e,e,n);else for(;null!==t;){if(3===t.tag){Su(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ys||!Ys.has(r))){t=Fi(t,e=hl(t,e=ul(n,e),1),1),e=eu(),null!==t&&(vt(t,1,e),ru(t,e));break}}t=t.return}}function Eu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,Os===e&&(Ts&n)===n&&(4===Ls||3===Ls&&(130023424&Ts)===Ts&&500>Xe()-Us?fu(e,0):Is|=n),ru(e,t)}function Cu(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=Ai(e,t))&&(vt(e,t,n),ru(e,n))}function ju(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Cu(e,n)}function Ru(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(i(314))}null!==r&&r.delete(t),Cu(e,n)}function Ou(e,t){return qe(e,t)}function Pu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tu(e,t,n,r){return new Pu(e,t,n,r)}function zu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Nu(e,t){var n=e.alternate;return null===n?((n=Tu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lu(e,t,n,r,o,a){var l=2;if(r=e,"function"===typeof e)zu(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case S:return Au(n.children,o,a,t);case _:l=8,o|=8;break;case E:return(e=Tu(12,n,t,2|o)).elementType=E,e.lanes=a,e;case O:return(e=Tu(13,n,t,o)).elementType=O,e.lanes=a,e;case P:return(e=Tu(19,n,t,o)).elementType=P,e.lanes=a,e;case N:return Du(n,o,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:l=10;break e;case j:l=9;break e;case R:l=11;break e;case T:l=14;break e;case z:l=16,r=null;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=Tu(l,n,t,o)).elementType=e,t.type=r,t.lanes=a,t}function Au(e,t,n,r){return(e=Tu(7,e,r,t)).lanes=n,e}function Du(e,t,n,r){return(e=Tu(22,e,r,t)).elementType=N,e.lanes=n,e.stateNode={isHidden:!1},e}function $u(e,t,n){return(e=Tu(6,e,null,t)).lanes=n,e}function Iu(e,t,n){return(t=Tu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mu(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mt(0),this.expirationTimes=mt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mt(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Fu(e,t,n,r,o,i,a,l,s){return e=new Mu(e,t,n,l,s),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Tu(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$i(i),e}function Uu(e){if(!e)return Ro;e:{if(Be(e=e._reactInternals)!==e||1!==e.tag)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(No(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(i(171))}if(1===e.tag){var n=e.type;if(No(n))return Do(e,n,t)}return t}function Bu(e,t,n,r,o,i,a,l,s){return(e=Fu(n,r,!0,e,0,i,0,l,s)).context=Uu(null),n=e.current,(i=Mi(r=eu(),o=tu(n))).callback=void 0!==t&&null!==t?t:null,Fi(n,i,o),e.current.lanes=o,vt(e,o,r),ru(e,r),e}function Wu(e,t,n,r){var o=t.current,i=eu(),a=tu(o);return n=Uu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Mi(i,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Fi(o,t,a))&&(nu(e,o,a,i),Ui(e,o,a)),a}function Hu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Yu(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}Ss=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Po.current)yl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return yl=!1,function(e,t,n){switch(t.tag){case 3:Ol(t),hi();break;case 5:Ji(t);break;case 1:No(t.type)&&$o(t);break;case 4:Gi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;jo(Si,r._currentValue),r._currentValue=o;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(jo(ea,1&ea.current),t.flags|=128,null):0!==(n&t.child.childLanes)?$l(e,t,n):(jo(ea,1&ea.current),null!==(e=Hl(e,t,n))?e.sibling:null);jo(ea,1&ea.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Bl(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),jo(ea,ea.current),r)break;return null;case 22:case 23:return t.lanes=0,_l(e,t,n)}return Hl(e,t,n)}(e,t,n);yl=0!==(131072&e.flags)}else yl=!1,ii&&0!==(1048576&t.flags)&&ei(t,qo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wl(e,t),e=t.pendingProps;var o=zo(t,Oo.current);Pi(t,n),o=ma(null,t,r,e,o,n);var a=va();return t.flags|=1,"object"===typeof o&&null!==o&&"function"===typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,No(r)?(a=!0,$o(t)):a=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,$i(t),o.updater=ol,t.stateNode=o,o._reactInternals=t,sl(t,r,e,n),t=Rl(null,t,r,!0,a,n)):(t.tag=0,ii&&a&&ti(t),xl(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wl(e,t),e=t.pendingProps,r=(o=r._init)(r._payload),t.type=r,o=t.tag=function(e){if("function"===typeof e)return zu(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===R)return 11;if(e===T)return 14}return 2}(r),e=nl(r,e),o){case 0:t=Cl(null,t,r,e,n);break e;case 1:t=jl(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=kl(null,t,r,nl(r.type,e),n);break e}throw Error(i(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,Cl(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 1:return r=t.type,o=t.pendingProps,jl(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 3:e:{if(Ol(t),null===e)throw Error(i(387));r=t.pendingProps,o=(a=t.memoizedState).element,Ii(e,t),Wi(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Pl(e,t,r,n,o=ul(Error(i(423)),t));break e}if(r!==o){t=Pl(e,t,r,n,o=ul(Error(i(424)),t));break e}for(oi=uo(t.stateNode.containerInfo.firstChild),ri=t,ii=!0,ai=null,n=ki(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(hi(),r===o){t=Hl(e,t,n);break e}xl(e,t,r,n)}t=t.child}return t;case 5:return Ji(t),null===e&&ci(t),r=t.type,o=t.pendingProps,a=null!==e?e.memoizedProps:null,l=o.children,no(r,o)?l=null:null!==a&&no(r,a)&&(t.flags|=32),El(e,t),xl(e,t,l,n),t.child;case 6:return null===e&&ci(t),null;case 13:return $l(e,t,n);case 4:return Gi(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wi(t,null,r,n):xl(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,wl(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 7:return xl(e,t,t.pendingProps,n),t.child;case 8:case 12:return xl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,l=o.value,jo(Si,r._currentValue),r._currentValue=l,null!==a)if(lr(a.value,l)){if(a.children===o.children&&!Po.current){t=Hl(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var s=a.dependencies;if(null!==s){l=a.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===a.tag){(u=Mi(-1,n&-n)).tag=2;var c=a.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}a.lanes|=n,null!==(u=a.alternate)&&(u.lanes|=n),Oi(a.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===a.tag)l=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(l=a.return))throw Error(i(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Oi(l,n,t),l=a.sibling}else l=a.child;if(null!==l)l.return=a;else for(l=a;null!==l;){if(l===t){l=null;break}if(null!==(a=l.sibling)){a.return=l.return,l=a;break}l=l.return}a=l}xl(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Pi(t,n),r=r(o=Ti(o)),t.flags|=1,xl(e,t,r,n),t.child;case 14:return o=nl(r=t.type,t.pendingProps),kl(e,t,r,o=nl(r.type,o),n);case 15:return Sl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:nl(r,o),Wl(e,t),t.tag=1,No(r)?(e=!0,$o(t)):e=!1,Pi(t,n),al(t,r,o),sl(t,r,o,n),Rl(null,t,r,!0,e,n);case 19:return Bl(e,t,n);case 22:return _l(e,t,n)}throw Error(i(156,t.tag))};var qu="function"===typeof reportError?reportError:function(e){console.error(e)};function Ku(e){this._internalRoot=e}function Qu(e){this._internalRoot=e}function Gu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Xu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Ju(){}function Zu(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if("function"===typeof o){var l=o;o=function(){var e=Hu(a);l.call(e)}}Wu(t,a,e,o)}else a=function(e,t,n,r,o){if(o){if("function"===typeof r){var i=r;r=function(){var e=Hu(a);i.call(e)}}var a=Bu(t,r,e,0,null,!1,0,"",Ju);return e._reactRootContainer=a,e[go]=a.current,Br(8===e.nodeType?e.parentNode:e),cu(),a}for(;o=e.lastChild;)e.removeChild(o);if("function"===typeof r){var l=r;r=function(){var e=Hu(s);l.call(e)}}var s=Fu(e,0,!1,null,0,!1,0,"",Ju);return e._reactRootContainer=s,e[go]=s.current,Br(8===e.nodeType?e.parentNode:e),cu(function(){Wu(t,s,n,r)}),s}(n,t,e,o,r);return Hu(a)}Qu.prototype.render=Ku.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Wu(e,t,null,null)},Qu.prototype.unmount=Ku.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu(function(){Wu(null,e,null,null)}),t[go]=null}},Qu.prototype.unstable_scheduleHydration=function(e){if(e){var t=_t();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nt.length&&0!==t&&t<Nt[n].priority;n++);Nt.splice(n,0,e),0===n&&$t(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(bt(t,1|n),ru(t,Xe()),0===(6&Rs)&&(Bs=Xe()+500,Wo()))}break;case 13:cu(function(){var t=Ai(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}}),Yu(e,1)}},kt=function(e){if(13===e.tag){var t=Ai(e,134217728);if(null!==t)nu(t,e,134217728,eu());Yu(e,134217728)}},St=function(e){if(13===e.tag){var t=tu(e),n=Ai(e,t);if(null!==n)nu(n,e,t,eu());Yu(e,t)}},_t=function(){return yt},Et=function(e,t){var n=yt;try{return yt=e,t()}finally{yt=n}},ke=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ko(r);if(!o)throw Error(i(90));q(r),J(r,o)}}}break;case"textarea":ie(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Re=uu,Oe=cu;var ec={usingClientEntryPoint:!1,Events:[xo,wo,ko,Ce,je,uu]},tc={findFiberByHostInstance:yo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{ot=rc.inject(nc),it=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Gu(t))throw Error(i(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Gu(e))throw Error(i(299));var n=!1,r="",o=qu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=Fu(e,1,!1,null,0,n,0,r,o),e[go]=t.current,Br(8===e.nodeType?e.parentNode:e),new Ku(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!Xu(t))throw Error(i(200));return Zu(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Gu(e))throw Error(i(405));var r=null!=n&&n.hydratedSources||null,o=!1,a="",l=qu;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(o=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Bu(t,null,e,1,null!=n?n:null,o,0,a,l),e[go]=t.current,Br(e),r)for(e=0;e<r.length;e++)o=(o=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Qu(t)},t.render=function(e,t,n){if(!Xu(t))throw Error(i(200));return Zu(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Xu(e))throw Error(i(40));return!!e._reactRootContainer&&(cu(function(){Zu(null,null,e,!1,function(){e._reactRootContainer=null,e[go]=null})}),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xu(n))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return Zu(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&r;("object"==typeof l||"function"==typeof l)&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach(e=>a[e]=()=>r[e]);return a.default=()=>r,n.d(i,a),i}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{"use strict";var e={};n.r(e),n.d(e,{Decoder:()=>It,Encoder:()=>Dt,PacketType:()=>At,protocol:()=>Lt});var t,r=n(43),o=n.t(r,2),i=n(391),a=n(950),l=n.t(a,2);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(t||(t={}));const u="popstate";function c(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function d(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function f(e,t){return{usr:e.state,key:e.key,idx:t}}function p(e,t,n,r){return void 0===n&&(n=null),s({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?g(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function h(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function g(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function m(e,n,r,o){void 0===o&&(o={});let{window:i=document.defaultView,v5Compat:a=!1}=o,l=i.history,d=t.Pop,g=null,m=v();function v(){return(l.state||{idx:null}).idx}function b(){d=t.Pop;let e=v(),n=null==e?null:e-m;m=e,g&&g({action:d,location:x.location,delta:n})}function y(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"===typeof e?e:h(e);return n=n.replace(/ $/,"%20"),c(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==m&&(m=0,l.replaceState(s({},l.state,{idx:m}),""));let x={get action(){return d},get location(){return e(i,l)},listen(e){if(g)throw new Error("A history only accepts one active listener");return i.addEventListener(u,b),g=e,()=>{i.removeEventListener(u,b),g=null}},createHref:e=>n(i,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,n){d=t.Push;let o=p(x.location,e,n);r&&r(o,e),m=v()+1;let s=f(o,m),u=x.createHref(o);try{l.pushState(s,"",u)}catch(c){if(c instanceof DOMException&&"DataCloneError"===c.name)throw c;i.location.assign(u)}a&&g&&g({action:d,location:x.location,delta:1})},replace:function(e,n){d=t.Replace;let o=p(x.location,e,n);r&&r(o,e),m=v();let i=f(o,m),s=x.createHref(o);l.replaceState(i,"",s),a&&g&&g({action:d,location:x.location,delta:0})},go:e=>l.go(e)};return x}var v;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(v||(v={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function b(e,t,n){return void 0===n&&(n="/"),y(e,t,n,!1)}function y(e,t,n,r){let o=N(("string"===typeof t?g(t):t).pathname||"/",n);if(null==o)return null;let i=x(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(i);let a=null;for(let l=0;null==a&&l<i.length;++l){let e=z(o);a=P(i[l],e,r)}return a}function x(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let o=(e,o,i)=>{let a={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};a.relativePath.startsWith("/")&&(c(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),a.relativePath=a.relativePath.slice(r.length));let l=I([r,a.relativePath]),s=n.concat(a);e.children&&e.children.length>0&&(c(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),x(e.children,t,s,l)),(null!=e.path||e.index)&&t.push({path:l,score:O(l,e.index),routesMeta:s})};return e.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of w(e.path))o(e,t,r);else o(e,t)}),t}function w(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return o?[i,""]:[i];let a=w(r.join("/")),l=[];return l.push(...a.map(e=>""===e?i:[i,e].join("/"))),o&&l.push(...a),l.map(t=>e.startsWith("/")&&""===t?"/":t)}const k=/^:[\w-]+$/,S=3,_=2,E=1,C=10,j=-2,R=e=>"*"===e;function O(e,t){let n=e.split("/"),r=n.length;return n.some(R)&&(r+=j),t&&(r+=_),n.filter(e=>!R(e)).reduce((e,t)=>e+(k.test(t)?S:""===t?E:C),r)}function P(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,o={},i="/",a=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,u="/"===i?t:t.slice(i.length)||"/",c=T({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},u),d=e.route;if(!c&&s&&n&&!r[r.length-1].route.index&&(c=T({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(o,c.params),a.push({params:o,pathname:I([i,c.pathname]),pathnameBase:M(I([i,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(i=I([i,c.pathnameBase]))}return a}function T(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);d("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));e.endsWith("*")?(r.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))");let i=new RegExp(o,t?void 0:"i");return[i,r]}(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1),s=r.reduce((e,t,n)=>{let{paramName:r,isOptional:o}=t;if("*"===r){let e=l[n]||"";a=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=o&&!s?void 0:(s||"").replace(/%2F/g,"/"),e},{});return{params:s,pathname:i,pathnameBase:a,pattern:e}}function z(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return d(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function N(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function L(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function A(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function D(e,t){let n=A(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function $(e,t,n,r){let o;void 0===r&&(r=!1),"string"===typeof e?o=g(e):(o=s({},e),c(!o.pathname||!o.pathname.includes("?"),L("?","pathname","search",o)),c(!o.pathname||!o.pathname.includes("#"),L("#","pathname","hash",o)),c(!o.search||!o.search.includes("#"),L("#","search","hash",o)));let i,a=""===e||""===o.pathname,l=a?"/":o.pathname;if(null==l)i=n;else{let e=t.length-1;if(!r&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}i=e>=0?t[e]:"/"}let u=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:o=""}="string"===typeof e?g(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:F(r),hash:U(o)}}(o,i),d=l&&"/"!==l&&l.endsWith("/"),f=(a||"."===l)&&n.endsWith("/");return u.pathname.endsWith("/")||!d&&!f||(u.pathname+="/"),u}const I=e=>e.join("/").replace(/\/\/+/g,"/"),M=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),F=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",U=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function B(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const W=["post","put","patch","delete"],H=(new Set(W),["get",...W]);new Set(H),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(this,arguments)}const Y=r.createContext(null);const q=r.createContext(null);const K=r.createContext(null);const Q=r.createContext(null);const G=r.createContext({outlet:null,matches:[],isDataRoute:!1});const X=r.createContext(null);function J(){return null!=r.useContext(Q)}function Z(){return J()||c(!1),r.useContext(Q).location}function ee(e){r.useContext(K).static||r.useLayoutEffect(e)}function te(){let{isDataRoute:e}=r.useContext(G);return e?function(){let{router:e}=ce(se.UseNavigateStable),t=fe(ue.UseNavigateStable),n=r.useRef(!1);return ee(()=>{n.current=!0}),r.useCallback(function(r,o){void 0===o&&(o={}),n.current&&("number"===typeof r?e.navigate(r):e.navigate(r,V({fromRouteId:t},o)))},[e,t])}():function(){J()||c(!1);let e=r.useContext(Y),{basename:t,future:n,navigator:o}=r.useContext(K),{matches:i}=r.useContext(G),{pathname:a}=Z(),l=JSON.stringify(D(i,n.v7_relativeSplatPath)),s=r.useRef(!1);return ee(()=>{s.current=!0}),r.useCallback(function(n,r){if(void 0===r&&(r={}),!s.current)return;if("number"===typeof n)return void o.go(n);let i=$(n,JSON.parse(l),a,"path"===r.relative);null==e&&"/"!==t&&(i.pathname="/"===i.pathname?t:I([t,i.pathname])),(r.replace?o.replace:o.push)(i,r.state,r)},[t,o,l,a,e])}()}function ne(e,n,o,i){J()||c(!1);let{navigator:a}=r.useContext(K),{matches:l}=r.useContext(G),s=l[l.length-1],u=s?s.params:{},d=(s&&s.pathname,s?s.pathnameBase:"/");s&&s.route;let f,p=Z();if(n){var h;let e="string"===typeof n?g(n):n;"/"===d||(null==(h=e.pathname)?void 0:h.startsWith(d))||c(!1),f=e}else f=p;let m=f.pathname||"/",v=m;if("/"!==d){let e=d.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(e.length).join("/")}let y=b(e,{pathname:v});let x=le(y&&y.map(e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:I([d,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:I([d,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),l,o,i);return n&&x?r.createElement(Q.Provider,{value:{location:V({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:t.Pop}},x):x}function re(){let e=function(){var e;let t=r.useContext(X),n=de(ue.UseRouteError),o=fe(ue.UseRouteError);if(void 0!==t)return t;return null==(e=n.errors)?void 0:e[o]}(),t=B(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:o};return r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:i},n):null,null)}const oe=r.createElement(re,null);class ie extends r.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?r.createElement(G.Provider,{value:this.props.routeContext},r.createElement(X.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ae(e){let{routeContext:t,match:n,children:o}=e,i=r.useContext(Y);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),r.createElement(G.Provider,{value:t},o)}function le(e,t,n,o){var i;if(void 0===t&&(t=[]),void 0===n&&(n=null),void 0===o&&(o=null),null==e){var a;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(a=o)&&a.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let l=e,s=null==(i=n)?void 0:i.errors;if(null!=s){let e=l.findIndex(e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id]));e>=0||c(!1),l=l.slice(0,Math.min(l.length,e+1))}let u=!1,d=-1;if(n&&o&&o.v7_partialHydration)for(let r=0;r<l.length;r++){let e=l[r];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=r),e.route.id){let{loaderData:t,errors:r}=n,o=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||o){u=!0,l=d>=0?l.slice(0,d+1):[l[0]];break}}}return l.reduceRight((e,o,i)=>{let a,c=!1,f=null,p=null;var h;n&&(a=s&&o.route.id?s[o.route.id]:void 0,f=o.route.errorElement||oe,u&&(d<0&&0===i?(h="route-fallback",!1||pe[h]||(pe[h]=!0),c=!0,p=null):d===i&&(c=!0,p=o.route.hydrateFallbackElement||null)));let g=t.concat(l.slice(0,i+1)),m=()=>{let t;return t=a?f:c?p:o.route.Component?r.createElement(o.route.Component,null):o.route.element?o.route.element:e,r.createElement(ae,{match:o,routeContext:{outlet:e,matches:g,isDataRoute:null!=n},children:t})};return n&&(o.route.ErrorBoundary||o.route.errorElement||0===i)?r.createElement(ie,{location:n.location,revalidation:n.revalidation,component:f,error:a,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var se=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(se||{}),ue=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ue||{});function ce(e){let t=r.useContext(Y);return t||c(!1),t}function de(e){let t=r.useContext(q);return t||c(!1),t}function fe(e){let t=function(){let e=r.useContext(G);return e||c(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||c(!1),n.route.id}const pe={};function he(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}o.startTransition;function ge(e){let{to:t,replace:n,state:o,relative:i}=e;J()||c(!1);let{future:a,static:l}=r.useContext(K),{matches:s}=r.useContext(G),{pathname:u}=Z(),d=te(),f=$(t,D(s,a.v7_relativeSplatPath),u,"path"===i),p=JSON.stringify(f);return r.useEffect(()=>d(JSON.parse(p),{replace:n,state:o,relative:i}),[d,p,i,n,o]),null}function me(e){c(!1)}function ve(e){let{basename:n="/",children:o=null,location:i,navigationType:a=t.Pop,navigator:l,static:s=!1,future:u}=e;J()&&c(!1);let d=n.replace(/^\/*/,"/"),f=r.useMemo(()=>({basename:d,navigator:l,static:s,future:V({v7_relativeSplatPath:!1},u)}),[d,u,l,s]);"string"===typeof i&&(i=g(i));let{pathname:p="/",search:h="",hash:m="",state:v=null,key:b="default"}=i,y=r.useMemo(()=>{let e=N(p,d);return null==e?null:{location:{pathname:e,search:h,hash:m,state:v,key:b},navigationType:a}},[d,p,h,m,v,b,a]);return null==y?null:r.createElement(K.Provider,{value:f},r.createElement(Q.Provider,{children:o,value:y}))}function be(e){let{children:t,location:n}=e;return ne(ye(t),n)}new Promise(()=>{});r.Component;function ye(e,t){void 0===t&&(t=[]);let n=[];return r.Children.forEach(e,(e,o)=>{if(!r.isValidElement(e))return;let i=[...t,o];if(e.type===r.Fragment)return void n.push.apply(n,ye(e.props.children,i));e.type!==me&&c(!1),e.props.index&&e.props.children&&c(!1);let a={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=ye(e.props.children,i)),n.push(a)}),n}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);try{window.__reactRouterVersion="6"}catch(au){}new Map;const xe=o.startTransition;l.flushSync,o.useId;function we(e){let{basename:t,children:n,future:o,window:i}=e,a=r.useRef();var l;null==a.current&&(a.current=(void 0===(l={window:i,v5Compat:!0})&&(l={}),m(function(e,t){let{pathname:n,search:r,hash:o}=e.location;return p("",{pathname:n,search:r,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"===typeof t?t:h(t)},null,l)));let s=a.current,[u,c]=r.useState({action:s.action,location:s.location}),{v7_startTransition:d}=o||{},f=r.useCallback(e=>{d&&xe?xe(()=>c(e)):c(e)},[c,d]);return r.useLayoutEffect(()=>s.listen(f),[s,f]),r.useEffect(()=>he(o),[o]),r.createElement(ve,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:s,future:o})}"undefined"!==typeof window&&"undefined"!==typeof window.document&&window.document.createElement;var ke,Se;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ke||(ke={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Se||(Se={}));const _e=Object.create(null);_e.open="0",_e.close="1",_e.ping="2",_e.pong="3",_e.message="4",_e.upgrade="5",_e.noop="6";const Ee=Object.create(null);Object.keys(_e).forEach(e=>{Ee[_e[e]]=e});const Ce={type:"error",data:"parser error"},je="function"===typeof Blob||"undefined"!==typeof Blob&&"[object BlobConstructor]"===Object.prototype.toString.call(Blob),Re="function"===typeof ArrayBuffer,Oe=e=>"function"===typeof ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,Pe=(e,t,n)=>{let{type:r,data:o}=e;return je&&o instanceof Blob?t?n(o):Te(o,n):Re&&(o instanceof ArrayBuffer||Oe(o))?t?n(o):Te(new Blob([o]),n):n(_e[r]+(o||""))},Te=(e,t)=>{const n=new FileReader;return n.onload=function(){const e=n.result.split(",")[1];t("b"+(e||""))},n.readAsDataURL(e)};function ze(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let Ne;const Le="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ae="undefined"===typeof Uint8Array?[]:new Uint8Array(256);for(let n=0;n<64;n++)Ae[Le.charCodeAt(n)]=n;const De="function"===typeof ArrayBuffer,$e=(e,t)=>{if("string"!==typeof e)return{type:"message",data:Me(e,t)};const n=e.charAt(0);if("b"===n)return{type:"message",data:Ie(e.substring(1),t)};return Ee[n]?e.length>1?{type:Ee[n],data:e.substring(1)}:{type:Ee[n]}:Ce},Ie=(e,t)=>{if(De){const n=(e=>{let t,n,r,o,i,a=.75*e.length,l=e.length,s=0;"="===e[e.length-1]&&(a--,"="===e[e.length-2]&&a--);const u=new ArrayBuffer(a),c=new Uint8Array(u);for(t=0;t<l;t+=4)n=Ae[e.charCodeAt(t)],r=Ae[e.charCodeAt(t+1)],o=Ae[e.charCodeAt(t+2)],i=Ae[e.charCodeAt(t+3)],c[s++]=n<<2|r>>4,c[s++]=(15&r)<<4|o>>2,c[s++]=(3&o)<<6|63&i;return u})(e);return Me(n,t)}return{base64:!0,data:e}},Me=(e,t)=>"blob"===t?e instanceof Blob?e:new Blob([e]):e instanceof ArrayBuffer?e:e.buffer,Fe=String.fromCharCode(30);function Ue(){return new TransformStream({transform(e,t){!function(e,t){je&&e.data instanceof Blob?e.data.arrayBuffer().then(ze).then(t):Re&&(e.data instanceof ArrayBuffer||Oe(e.data))?t(ze(e.data)):Pe(e,!1,e=>{Ne||(Ne=new TextEncoder),t(Ne.encode(e))})}(e,n=>{const r=n.length;let o;if(r<126)o=new Uint8Array(1),new DataView(o.buffer).setUint8(0,r);else if(r<65536){o=new Uint8Array(3);const e=new DataView(o.buffer);e.setUint8(0,126),e.setUint16(1,r)}else{o=new Uint8Array(9);const e=new DataView(o.buffer);e.setUint8(0,127),e.setBigUint64(1,BigInt(r))}e.data&&"string"!==typeof e.data&&(o[0]|=128),t.enqueue(o),t.enqueue(n)})}})}let Be;function We(e){return e.reduce((e,t)=>e+t.length,0)}function He(e,t){if(e[0].length===t)return e.shift();const n=new Uint8Array(t);let r=0;for(let o=0;o<t;o++)n[o]=e[0][r++],r===e[0].length&&(e.shift(),r=0);return e.length&&r<e[0].length&&(e[0]=e[0].slice(r)),n}function Ve(e){if(e)return function(e){for(var t in Ve.prototype)e[t]=Ve.prototype[t];return e}(e)}Ve.prototype.on=Ve.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},Ve.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this},Ve.prototype.off=Ve.prototype.removeListener=Ve.prototype.removeAllListeners=Ve.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,r=this._callbacks["$"+e];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+e],this;for(var o=0;o<r.length;o++)if((n=r[o])===t||n.fn===t){r.splice(o,1);break}return 0===r.length&&delete this._callbacks["$"+e],this},Ve.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),n=this._callbacks["$"+e],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(n){r=0;for(var o=(n=n.slice(0)).length;r<o;++r)n[r].apply(this,t)}return this},Ve.prototype.emitReserved=Ve.prototype.emit,Ve.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},Ve.prototype.hasListeners=function(e){return!!this.listeners(e).length};const Ye="function"===typeof Promise&&"function"===typeof Promise.resolve?e=>Promise.resolve().then(e):(e,t)=>t(e,0),qe="undefined"!==typeof self?self:"undefined"!==typeof window?window:Function("return this")();function Ke(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.reduce((t,n)=>(e.hasOwnProperty(n)&&(t[n]=e[n]),t),{})}const Qe=qe.setTimeout,Ge=qe.clearTimeout;function Xe(e,t){t.useNativeTimers?(e.setTimeoutFn=Qe.bind(qe),e.clearTimeoutFn=Ge.bind(qe)):(e.setTimeoutFn=qe.setTimeout.bind(qe),e.clearTimeoutFn=qe.clearTimeout.bind(qe))}function Je(e){return"string"===typeof e?function(e){let t=0,n=0;for(let r=0,o=e.length;r<o;r++)t=e.charCodeAt(r),t<128?n+=1:t<2048?n+=2:t<55296||t>=57344?n+=3:(r++,n+=4);return n}(e):Math.ceil(1.33*(e.byteLength||e.size))}function Ze(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}class et extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type="TransportError"}}class tt extends Ve{constructor(e){super(),this.writable=!1,Xe(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,n){return super.emitReserved("error",new et(e,t,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this}send(e){"open"===this.readyState&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=$e(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return-1===e.indexOf(":")?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(443!==this.opts.port)||!this.opts.secure&&80!==Number(this.opts.port))?":"+this.opts.port:""}_query(e){const t=function(e){let t="";for(let n in e)e.hasOwnProperty(n)&&(t.length&&(t+="&"),t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t}(e);return t.length?"?"+t:""}}class nt extends tt{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let e=0;this._polling&&(e++,this.once("pollComplete",function(){--e||t()})),this.writable||(e++,this.once("drain",function(){--e||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){((e,t)=>{const n=e.split(Fe),r=[];for(let o=0;o<n.length;o++){const e=$e(n[o],t);if(r.push(e),"error"===e.type)break}return r})(e,this.socket.binaryType).forEach(e=>{if("opening"===this.readyState&&"open"===e.type&&this.onOpen(),"close"===e.type)return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(e)}),"closed"!==this.readyState&&(this._polling=!1,this.emitReserved("pollComplete"),"open"===this.readyState&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};"open"===this.readyState?e():this.once("open",e)}write(e){this.writable=!1,((e,t)=>{const n=e.length,r=new Array(n);let o=0;e.forEach((e,i)=>{Pe(e,!1,e=>{r[i]=e,++o===n&&t(r.join(Fe))})})})(e,e=>{this.doWrite(e,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return!1!==this.opts.timestampRequests&&(t[this.opts.timestampParam]=Ze()),this.supportsBinary||t.sid||(t.b64=1),this.createUri(e,t)}}let rt=!1;try{rt="undefined"!==typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(lu){}const ot=rt;function it(){}class at extends nt{constructor(e){if(super(e),"undefined"!==typeof location){const t="https:"===location.protocol;let n=location.port;n||(n=t?"443":"80"),this.xd="undefined"!==typeof location&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,t){const n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",(e,t)=>{this.onError("xhr post error",e,t)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(e,t)=>{this.onError("xhr poll error",e,t)}),this.pollXhr=e}}class lt extends Ve{constructor(e,t,n){super(),this.createRequest=e,Xe(this,n),this._opts=n,this._method=n.method||"GET",this._uri=t,this._data=void 0!==n.data?n.data:null,this._create()}_create(){var e;const t=Ke(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(t);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let e in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(e)&&n.setRequestHeader(e,this._opts.extraHeaders[e])}}catch(au){}if("POST"===this._method)try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(au){}try{n.setRequestHeader("Accept","*/*")}catch(au){}null===(e=this._opts.cookieJar)||void 0===e||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var e;3===n.readyState&&(null===(e=this._opts.cookieJar)||void 0===e||e.parseCookies(n.getResponseHeader("set-cookie"))),4===n.readyState&&(200===n.status||1223===n.status?this._onLoad():this.setTimeoutFn(()=>{this._onError("number"===typeof n.status?n.status:0)},0))},n.send(this._data)}catch(au){return void this.setTimeoutFn(()=>{this._onError(au)},0)}"undefined"!==typeof document&&(this._index=lt.requestsCount++,lt.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if("undefined"!==typeof this._xhr&&null!==this._xhr){if(this._xhr.onreadystatechange=it,e)try{this._xhr.abort()}catch(au){}"undefined"!==typeof document&&delete lt.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;null!==e&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}if(lt.requestsCount=0,lt.requests={},"undefined"!==typeof document)if("function"===typeof attachEvent)attachEvent("onunload",st);else if("function"===typeof addEventListener){addEventListener("onpagehide"in qe?"pagehide":"unload",st,!1)}function st(){for(let e in lt.requests)lt.requests.hasOwnProperty(e)&&lt.requests[e].abort()}const ut=function(){const e=ct({xdomain:!1});return e&&null!==e.responseType}();function ct(e){const t=e.xdomain;try{if("undefined"!==typeof XMLHttpRequest&&(!t||ot))return new XMLHttpRequest}catch(au){}if(!t)try{return new(qe[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(au){}}const dt="undefined"!==typeof navigator&&"string"===typeof navigator.product&&"reactnative"===navigator.product.toLowerCase();class ft extends tt{get name(){return"websocket"}doOpen(){const e=this.uri(),t=this.opts.protocols,n=dt?{}:Ke(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,n)}catch(lu){return this.emitReserved("error",lu)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],r=t===e.length-1;Pe(n,this.supportsBinary,e=>{try{this.doWrite(n,e)}catch(au){}r&&Ye(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){"undefined"!==typeof this.ws&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=Ze()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}}const pt=qe.WebSocket||qe.MozWebSocket;const ht={websocket:class extends ft{createSocket(e,t,n){return dt?new pt(e,t,n):t?new pt(e,t):new pt(e)}doWrite(e,t){this.ws.send(t)}},webtransport:class extends tt{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(lu){return this.emitReserved("error",lu)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const t=function(e,t){Be||(Be=new TextDecoder);const n=[];let r=0,o=-1,i=!1;return new TransformStream({transform(a,l){for(n.push(a);;){if(0===r){if(We(n)<1)break;const e=He(n,1);i=128===(128&e[0]),o=127&e[0],r=o<126?3:126===o?1:2}else if(1===r){if(We(n)<2)break;const e=He(n,2);o=new DataView(e.buffer,e.byteOffset,e.length).getUint16(0),r=3}else if(2===r){if(We(n)<8)break;const e=He(n,8),t=new DataView(e.buffer,e.byteOffset,e.length),i=t.getUint32(0);if(i>Math.pow(2,21)-1){l.enqueue(Ce);break}o=i*Math.pow(2,32)+t.getUint32(4),r=3}else{if(We(n)<o)break;const e=He(n,o);l.enqueue($e(i?e:Be.decode(e),t)),r=0}if(0===o||o>e){l.enqueue(Ce);break}}}})}(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(t).getReader(),r=Ue();r.readable.pipeTo(e.writable),this._writer=r.writable.getWriter();const o=()=>{n.read().then(e=>{let{done:t,value:n}=e;t||(this.onPacket(n),o())}).catch(e=>{})};o();const i={type:"open"};this.query.sid&&(i.data=`{"sid":"${this.query.sid}"}`),this._writer.write(i).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],r=t===e.length-1;this._writer.write(n).then(()=>{r&&Ye(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;null===(e=this._transport)||void 0===e||e.close()}},polling:class extends at{constructor(e){super(e);const t=e&&e.forceBase64;this.supportsBinary=ut&&!t}request(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign(e,{xd:this.xd},this.opts),new lt(ct,this.uri(),e)}}},gt=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,mt=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function vt(e){if(e.length>8e3)throw"URI too long";const t=e,n=e.indexOf("["),r=e.indexOf("]");-1!=n&&-1!=r&&(e=e.substring(0,n)+e.substring(n,r).replace(/:/g,";")+e.substring(r,e.length));let o=gt.exec(e||""),i={},a=14;for(;a--;)i[mt[a]]=o[a]||"";return-1!=n&&-1!=r&&(i.source=t,i.host=i.host.substring(1,i.host.length-1).replace(/;/g,":"),i.authority=i.authority.replace("[","").replace("]","").replace(/;/g,":"),i.ipv6uri=!0),i.pathNames=function(e,t){const n=/\/{2,9}/g,r=t.replace(n,"/").split("/");"/"!=t.slice(0,1)&&0!==t.length||r.splice(0,1);"/"==t.slice(-1)&&r.splice(r.length-1,1);return r}(0,i.path),i.queryKey=function(e,t){const n={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(e,t,r){t&&(n[t]=r)}),n}(0,i.query),i}const bt="function"===typeof addEventListener&&"function"===typeof removeEventListener,yt=[];bt&&addEventListener("offline",()=>{yt.forEach(e=>e())},!1);class xt extends Ve{constructor(e,t){if(super(),this.binaryType="arraybuffer",this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&"object"===typeof e&&(t=e,e=null),e){const n=vt(e);t.hostname=n.host,t.secure="https"===n.protocol||"wss"===n.protocol,t.port=n.port,n.query&&(t.query=n.query)}else t.host&&(t.hostname=vt(t.host).host);Xe(this,t),this.secure=null!=t.secure?t.secure:"undefined"!==typeof location&&"https:"===location.protocol,t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||("undefined"!==typeof location?location.hostname:"localhost"),this.port=t.port||("undefined"!==typeof location&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},t.transports.forEach(e=>{const t=e.prototype.name;this.transports.push(t),this._transportsByName[t]=e}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),"string"===typeof this.opts.query&&(this.opts.query=function(e){let t={},n=e.split("&");for(let r=0,o=n.length;r<o;r++){let e=n[r].split("=");t[decodeURIComponent(e[0])]=decodeURIComponent(e[1])}return t}(this.opts.query)),bt&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),"localhost"!==this.hostname&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},yt.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=4,t.transport=e,this.id&&(t.sid=this.id);const n=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(0===this.transports.length)return void this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);const e=this.opts.rememberUpgrade&&xt.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket")?"websocket":this.transports[0];this.readyState="opening";const t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",e=>this._onClose("transport close",e))}onOpen(){this.readyState="open",xt.priorWebsocketSuccess="websocket"===this.transport.name,this.emitReserved("open"),this.flush()}_onPacket(e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data)}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),"closed"!==this.readyState&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,0===this.writeBuffer.length?this.emitReserved("drain"):this.flush()}flush(){if("closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&"polling"===this.transport.name&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let t=0;t<this.writeBuffer.length;t++){const n=this.writeBuffer[t].data;if(n&&(e+=Je(n)),t>0&&e>this._maxPayload)return this.writeBuffer.slice(0,t);e+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Ye(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,t,n){return this._sendPacket("message",e,t,n),this}send(e,t,n){return this._sendPacket("message",e,t,n),this}_sendPacket(e,t,n,r){if("function"===typeof t&&(r=t,t=void 0),"function"===typeof n&&(r=n,n=null),"closing"===this.readyState||"closed"===this.readyState)return;(n=n||{}).compress=!1!==n.compress;const o={type:e,data:t,options:n};this.emitReserved("packetCreate",o),this.writeBuffer.push(o),r&&this.once("flush",r),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return"opening"!==this.readyState&&"open"!==this.readyState||(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(e){if(xt.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&"opening"===this.readyState)return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),bt&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const e=yt.indexOf(this._offlineEventListener);-1!==e&&yt.splice(e,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}}xt.protocol=4;class wt extends xt{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),"open"===this.readyState&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let t=this.createTransport(e),n=!1;xt.priorWebsocketSuccess=!1;const r=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",e=>{if(!n)if("pong"===e.type&&"probe"===e.data){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;xt.priorWebsocketSuccess="websocket"===t.name,this.transport.pause(()=>{n||"closed"!==this.readyState&&(u(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const e=new Error("probe error");e.transport=t.name,this.emitReserved("upgradeError",e)}}))};function o(){n||(n=!0,u(),t.close(),t=null)}const i=e=>{const n=new Error("probe error: "+e);n.transport=t.name,o(),this.emitReserved("upgradeError",n)};function a(){i("transport closed")}function l(){i("socket closed")}function s(e){t&&e.name!==t.name&&o()}const u=()=>{t.removeListener("open",r),t.removeListener("error",i),t.removeListener("close",a),this.off("close",l),this.off("upgrading",s)};t.once("open",r),t.once("error",i),t.once("close",a),this.once("close",l),this.once("upgrading",s),-1!==this._upgrades.indexOf("webtransport")&&"webtransport"!==e?this.setTimeoutFn(()=>{n||t.open()},200):t.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const t=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}}class kt extends wt{constructor(e){const t="object"===typeof e?e:arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(!t.transports||t.transports&&"string"===typeof t.transports[0])&&(t.transports=(t.transports||["polling","websocket","webtransport"]).map(e=>ht[e]).filter(e=>!!e)),super(e,t)}}const St="function"===typeof ArrayBuffer,_t=Object.prototype.toString,Et="function"===typeof Blob||"undefined"!==typeof Blob&&"[object BlobConstructor]"===_t.call(Blob),Ct="function"===typeof File||"undefined"!==typeof File&&"[object FileConstructor]"===_t.call(File);function jt(e){return St&&(e instanceof ArrayBuffer||(e=>"function"===typeof ArrayBuffer.isView?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer)(e))||Et&&e instanceof Blob||Ct&&e instanceof File}function Rt(e,t){if(!e||"object"!==typeof e)return!1;if(Array.isArray(e)){for(let t=0,n=e.length;t<n;t++)if(Rt(e[t]))return!0;return!1}if(jt(e))return!0;if(e.toJSON&&"function"===typeof e.toJSON&&1===arguments.length)return Rt(e.toJSON(),!0);for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&Rt(e[n]))return!0;return!1}function Ot(e){const t=[],n=e.data,r=e;return r.data=Pt(n,t),r.attachments=t.length,{packet:r,buffers:t}}function Pt(e,t){if(!e)return e;if(jt(e)){const n={_placeholder:!0,num:t.length};return t.push(e),n}if(Array.isArray(e)){const n=new Array(e.length);for(let r=0;r<e.length;r++)n[r]=Pt(e[r],t);return n}if("object"===typeof e&&!(e instanceof Date)){const n={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=Pt(e[r],t));return n}return e}function Tt(e,t){return e.data=zt(e.data,t),delete e.attachments,e}function zt(e,t){if(!e)return e;if(e&&!0===e._placeholder){if("number"===typeof e.num&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}if(Array.isArray(e))for(let n=0;n<e.length;n++)e[n]=zt(e[n],t);else if("object"===typeof e)for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(e[n]=zt(e[n],t));return e}const Nt=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Lt=5;var At;!function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"}(At||(At={}));class Dt{constructor(e){this.replacer=e}encode(e){return e.type!==At.EVENT&&e.type!==At.ACK||!Rt(e)?[this.encodeAsString(e)]:this.encodeAsBinary({type:e.type===At.EVENT?At.BINARY_EVENT:At.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id})}encodeAsString(e){let t=""+e.type;return e.type!==At.BINARY_EVENT&&e.type!==At.BINARY_ACK||(t+=e.attachments+"-"),e.nsp&&"/"!==e.nsp&&(t+=e.nsp+","),null!=e.id&&(t+=e.id),null!=e.data&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=Ot(e),n=this.encodeAsString(t.packet),r=t.buffers;return r.unshift(n),r}}function $t(e){return"[object Object]"===Object.prototype.toString.call(e)}class It extends Ve{constructor(e){super(),this.reviver=e}add(e){let t;if("string"===typeof e){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const n=t.type===At.BINARY_EVENT;n||t.type===At.BINARY_ACK?(t.type=n?At.EVENT:At.ACK,this.reconstructor=new Mt(t),0===t.attachments&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else{if(!jt(e)&&!e.base64)throw new Error("Unknown type: "+e);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t))}}decodeString(e){let t=0;const n={type:Number(e.charAt(0))};if(void 0===At[n.type])throw new Error("unknown packet type "+n.type);if(n.type===At.BINARY_EVENT||n.type===At.BINARY_ACK){const r=t+1;for(;"-"!==e.charAt(++t)&&t!=e.length;);const o=e.substring(r,t);if(o!=Number(o)||"-"!==e.charAt(t))throw new Error("Illegal attachments");n.attachments=Number(o)}if("/"===e.charAt(t+1)){const r=t+1;for(;++t;){if(","===e.charAt(t))break;if(t===e.length)break}n.nsp=e.substring(r,t)}else n.nsp="/";const r=e.charAt(t+1);if(""!==r&&Number(r)==r){const r=t+1;for(;++t;){const n=e.charAt(t);if(null==n||Number(n)!=n){--t;break}if(t===e.length)break}n.id=Number(e.substring(r,t+1))}if(e.charAt(++t)){const r=this.tryParse(e.substr(t));if(!It.isPayloadValid(n.type,r))throw new Error("invalid payload");n.data=r}return n}tryParse(e){try{return JSON.parse(e,this.reviver)}catch(au){return!1}}static isPayloadValid(e,t){switch(e){case At.CONNECT:return $t(t);case At.DISCONNECT:return void 0===t;case At.CONNECT_ERROR:return"string"===typeof t||$t(t);case At.EVENT:case At.BINARY_EVENT:return Array.isArray(t)&&("number"===typeof t[0]||"string"===typeof t[0]&&-1===Nt.indexOf(t[0]));case At.ACK:case At.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Mt{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const e=Tt(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Ft(e,t,n){return e.on(t,n),function(){e.off(t,n)}}const Ut=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Bt extends Ve{constructor(e,t,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Ft(e,"open",this.onopen.bind(this)),Ft(e,"packet",this.onpacket.bind(this)),Ft(e,"error",this.onerror.bind(this)),Ft(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected||(this.subEvents(),this.io._reconnecting||this.io.open(),"open"===this.io._readyState&&this.onopen()),this}open(){return this.connect()}send(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.unshift("message"),this.emit.apply(this,t),this}emit(e){var t,n,r;if(Ut.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');for(var o=arguments.length,i=new Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];if(i.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(i),this;const l={type:At.EVENT,data:i,options:{}};if(l.options.compress=!1!==this.flags.compress,"function"===typeof i[i.length-1]){const e=this.ids++,t=i.pop();this._registerAckCallback(e,t),l.id=e}const s=null===(n=null===(t=this.io.engine)||void 0===t?void 0:t.transport)||void 0===n?void 0:n.writable,u=this.connected&&!(null===(r=this.io.engine)||void 0===r?void 0:r._hasPingExpired());return this.flags.volatile&&!s||(u?(this.notifyOutgoingListeners(l),this.packet(l)):this.sendBuffer.push(l)),this.flags={},this}_registerAckCallback(e,t){var n,r=this;const o=null!==(n=this.flags.timeout)&&void 0!==n?n:this._opts.ackTimeout;if(void 0===o)return void(this.acks[e]=t);const i=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let t=0;t<this.sendBuffer.length;t++)this.sendBuffer[t].id===e&&this.sendBuffer.splice(t,1);t.call(this,new Error("operation has timed out"))},o),a=function(){r.io.clearTimeoutFn(i);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];t.apply(r,n)};a.withError=!0,this.acks[e]=a}emitWithAck(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Promise((t,r)=>{const o=(e,n)=>e?r(e):t(n);o.withError=!0,n.push(o),this.emit(e,...n)})}_addToQueue(e){var t=this;let n;"function"===typeof e[e.length-1]&&(n=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push(function(e){if(r!==t._queue[0])return;if(null!==e)r.tryCount>t._opts.retries&&(t._queue.shift(),n&&n(e));else if(t._queue.shift(),n){for(var o=arguments.length,i=new Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];n(null,...i)}return r.pending=!1,t._drainQueue()}),this._queue.push(r),this._drainQueue()}_drainQueue(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.connected||0===this._queue.length)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){"function"==typeof this.auth?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:At.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(t=>String(t.id)===e)){const t=this.acks[e];delete this.acks[e],t.withError&&t.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case At.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case At.EVENT:case At.BINARY_EVENT:this.onevent(e);break;case At.ACK:case At.BINARY_ACK:this.onack(e);break;case At.DISCONNECT:this.ondisconnect();break;case At.CONNECT_ERROR:this.destroy();const t=new Error(e.data.message);t.data=e.data.data,this.emitReserved("connect_error",t)}}onevent(e){const t=e.data||[];null!=e.id&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const n of t)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&"string"===typeof e[e.length-1]&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let n=!1;return function(){if(!n){n=!0;for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];t.packet({type:At.ACK,id:e,data:o})}}}onack(e){const t=this.acks[e.id];"function"===typeof t&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:At.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const n of t)n.apply(this,e.data)}}}function Wt(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}Wt.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),n=Math.floor(t*this.jitter*e);e=0==(1&Math.floor(10*t))?e-n:e+n}return 0|Math.min(e,this.max)},Wt.prototype.reset=function(){this.attempts=0},Wt.prototype.setMin=function(e){this.ms=e},Wt.prototype.setMax=function(e){this.max=e},Wt.prototype.setJitter=function(e){this.jitter=e};class Ht extends Ve{constructor(t,n){var r;super(),this.nsps={},this.subs=[],t&&"object"===typeof t&&(n=t,t=void 0),(n=n||{}).path=n.path||"/socket.io",this.opts=n,Xe(this,n),this.reconnection(!1!==n.reconnection),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor(null!==(r=n.randomizationFactor)&&void 0!==r?r:.5),this.backoff=new Wt({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==n.timeout?2e4:n.timeout),this._readyState="closed",this.uri=t;const o=n.parser||e;this.encoder=new o.Encoder,this.decoder=new o.Decoder,this._autoConnect=!1!==n.autoConnect,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return void 0===e?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return void 0===e?this._reconnectionDelay:(this._reconnectionDelay=e,null===(t=this.backoff)||void 0===t||t.setMin(e),this)}randomizationFactor(e){var t;return void 0===e?this._randomizationFactor:(this._randomizationFactor=e,null===(t=this.backoff)||void 0===t||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return void 0===e?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,null===(t=this.backoff)||void 0===t||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new kt(this.uri,this.opts);const t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const r=Ft(t,"open",function(){n.onopen(),e&&e()}),o=t=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",t),e?e(t):this.maybeReconnectOnOpen()},i=Ft(t,"error",o);if(!1!==this._timeout){const e=this._timeout,n=this.setTimeoutFn(()=>{r(),o(new Error("timeout")),t.close()},e);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}return this.subs.push(r),this.subs.push(i),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Ft(e,"ping",this.onping.bind(this)),Ft(e,"data",this.ondata.bind(this)),Ft(e,"error",this.onerror.bind(this)),Ft(e,"close",this.onclose.bind(this)),Ft(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(au){this.onclose("parse error",au)}}ondecoded(e){Ye(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new Bt(this,e,t),this.nsps[e]=n),n}_destroy(e){const t=Object.keys(this.nsps);for(const n of t){if(this.nsps[n].active)return}this._close()}_packet(e){const t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var n;this.cleanup(),null===(n=this.engine)||void 0===n||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),e.skipReconnect||e.open(t=>{t?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",t)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Vt={};function Yt(e,t){"object"===typeof e&&(t=e,e=void 0);const n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=e;n=n||"undefined"!==typeof location&&location,null==e&&(e=n.protocol+"//"+n.host),"string"===typeof e&&("/"===e.charAt(0)&&(e="/"===e.charAt(1)?n.protocol+e:n.host+e),/^(https?|wss?):\/\//.test(e)||(e="undefined"!==typeof n?n.protocol+"//"+e:"https://"+e),r=vt(e)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const o=-1!==r.host.indexOf(":")?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+o+":"+r.port+t,r.href=r.protocol+"://"+o+(n&&n.port===r.port?"":":"+r.port),r}(e,(t=t||{}).path||"/socket.io"),r=n.source,o=n.id,i=n.path,a=Vt[o]&&i in Vt[o].nsps;let l;return t.forceNew||t["force new connection"]||!1===t.multiplex||a?l=new Ht(r,t):(Vt[o]||(Vt[o]=new Ht(r,t)),l=Vt[o]),n.query&&!t.query&&(t.query=n.queryKey),l.socket(n.path,t)}Object.assign(Yt,{Manager:Ht,Socket:Bt,io:Yt,connect:Yt});var qt=n(579);const Kt=(0,r.createContext)(),Qt={socket:null,isConnected:!1,player:null,playerId:null,currentRoom:null,availableRooms:[],currentView:"welcome",loading:!1,error:null,messages:[],gameState:null,stormResults:null};function Gt(e,t){var n;switch(t.type){case"SET_SOCKET":return{...e,socket:t.payload};case"SET_CONNECTED":return{...e,isConnected:t.payload};case"SET_PLAYER":return{...e,player:t.payload,playerId:(null===(n=t.payload)||void 0===n?void 0:n.id)||null};case"SET_CURRENT_VIEW":return{...e,currentView:t.payload};case"SET_LOADING":return{...e,loading:t.payload};case"SET_ERROR":return{...e,error:t.payload};case"SET_AVAILABLE_ROOMS":return{...e,availableRooms:t.payload};case"SET_CURRENT_ROOM":return{...e,currentRoom:t.payload};case"UPDATE_ROOM":return{...e,currentRoom:e.currentRoom?{...e.currentRoom,...t.payload}:null};case"UPDATE_ROOM_WITH_PLAYER_DATA":const r=t.payload,o=r.myPlayerData,{myPlayerData:i,...a}=r;return{...e,currentRoom:e.currentRoom?{...e.currentRoom,...a}:null,player:o?{...e.player,...o}:e.player};case"ADD_MESSAGE":return{...e,messages:[...e.messages,t.payload]};case"CLEAR_MESSAGES":return{...e,messages:[]};case"SET_GAME_STATE":return{...e,gameState:t.payload};case"STORM_STAGE_COMPLETE":return{...e,stormResults:t.payload.results,currentRoom:e.currentRoom?{...e.currentRoom,...t.payload.room}:null};case"RESET_GAME":return{...e,currentRoom:null,messages:[],gameState:null,currentView:"lobby"};default:return e}}function Xt(e){let{children:t}=e;const[n,o]=(0,r.useReducer)(Gt,Qt);(0,r.useEffect)(()=>{const e=Yt("http://localhost:3501",{transports:["websocket"],upgrade:!1});return o({type:"SET_SOCKET",payload:e}),e.on("connect",()=>{console.log("Connected to server"),o({type:"SET_CONNECTED",payload:!0})}),e.on("disconnect",()=>{console.log("Disconnected from server"),o({type:"SET_CONNECTED",payload:!1})}),e.on("lobby-joined",e=>{o({type:"SET_PLAYER",payload:e.player}),o({type:"SET_CURRENT_VIEW",payload:"lobby"}),o({type:"SET_LOADING",payload:!1})}),e.on("room-list-updated",e=>{o({type:"SET_AVAILABLE_ROOMS",payload:e})}),e.on("room-created",e=>{o({type:"SET_CURRENT_ROOM",payload:e.room}),o({type:"SET_CURRENT_VIEW",payload:"room"}),o({type:"SET_LOADING",payload:!1})}),e.on("room-joined",e=>{o({type:"SET_CURRENT_ROOM",payload:e.room}),o({type:"SET_CURRENT_VIEW",payload:"room"}),o({type:"SET_LOADING",payload:!1})}),e.on("room-updated",e=>{o({type:"UPDATE_ROOM",payload:e.room})}),e.on("player-joined",e=>{o({type:"UPDATE_ROOM",payload:e.room})}),e.on("player-left",e=>{o({type:"UPDATE_ROOM",payload:e.room})}),e.on("player-updated",e=>{o({type:"UPDATE_ROOM",payload:e.room})}),e.on("chat-message",e=>{o({type:"ADD_MESSAGE",payload:e})}),e.on("game-started",e=>{o({type:"UPDATE_ROOM",payload:e.room}),o({type:"SET_CURRENT_VIEW",payload:"game"})}),e.on("dealer-card-selected",e=>{o({type:"UPDATE_ROOM",payload:e.room})}),e.on("dealer-determined",e=>{o({type:"UPDATE_ROOM",payload:e.room})}),e.on("storm-started",e=>{o({type:"UPDATE_ROOM_WITH_PLAYER_DATA",payload:e.room}),setTimeout(()=>{o({type:"CLEAR_ANIMATIONS"})},2e3)}),e.on("card-played",e=>{console.log("\ud83d\udce5 Received card-played event:",e),o({type:"UPDATE_ROOM_WITH_PLAYER_DATA",payload:e.room})}),e.on("cards-drawn",e=>{console.log("\ud83d\udce5 Received cards-drawn event:",e),o({type:"UPDATE_ROOM_WITH_PLAYER_DATA",payload:e.room})}),e.on("storm-stage-complete",e=>{console.log("\ud83c\udfaf Storm stage complete:",e),o({type:"STORM_STAGE_COMPLETE",payload:e})}),e.on("player-finished-storm",e=>{console.log("\ud83c\udfc6 Player finished Storm:",e),o({type:"UPDATE_ROOM",payload:e.room})}),e.on("stage-advanced",e=>{console.log("\ud83c\udfaf Stage advanced:",e),o({type:"UPDATE_ROOM_WITH_PLAYER_DATA",payload:e})}),e.on("lane-selected",e=>{console.log("\ud83c\udfc1 Lane selected:",e),o({type:"UPDATE_ROOM",payload:e.room})}),e.on("lane-selection-complete",e=>{console.log("\ud83c\udfc1 Lane selection complete:",e),o({type:"UPDATE_ROOM",payload:e.room})}),e.on("coin-placed",e=>{console.log("\ud83e\ude99 Coin placed:",e),o({type:"UPDATE_ROOM",payload:e.room})}),e.on("coin-stage-complete",e=>{console.log("\ud83e\ude99 Coin stage complete:",e),o({type:"UPDATE_ROOM",payload:e.room})}),e.on("dice-rolled",e=>{console.log("\ud83c\udfb2 Dice rolled:",e),o({type:"UPDATE_ROOM_WITH_PLAYER_DATA",payload:e.room})}),e.on("player-moved",e=>{console.log("\ud83d\ude97 Player moved:",e),o({type:"UPDATE_ROOM",payload:e.room})}),e.on("player-finished-race",e=>{console.log("\ud83c\udfc1 Player finished race:",e),o({type:"UPDATE_ROOM",payload:e.room})}),e.on("race-round-complete",e=>{console.log("\ud83c\udfc6 Race round complete:",e),o({type:"UPDATE_ROOM",payload:e.room})}),e.on("stage-advanced",e=>{console.log("\ud83d\udcc8 Stage advanced:",e),o({type:"UPDATE_ROOM",payload:e.room})}),e.on("error",e=>{o({type:"SET_ERROR",payload:e.message}),o({type:"SET_LOADING",payload:!1})}),()=>{e.disconnect()}},[]);const i={joinLobby:e=>{n.socket&&(o({type:"SET_LOADING",payload:!0}),n.socket.emit("join-lobby",{name:e}))},createRoom:(e,t)=>{n.socket&&(o({type:"SET_LOADING",payload:!0}),n.socket.emit("create-room",{name:e,settings:t}))},joinRoom:e=>{n.socket&&(o({type:"SET_LOADING",payload:!0}),n.socket.emit("join-room",{roomId:e}))},leaveRoom:()=>{n.socket&&(n.socket.emit("leave-room"),o({type:"RESET_GAME"}))},sendRoomMessage:e=>{n.socket&&e.trim()&&n.socket.emit("room-chat",{message:e.trim()})},sendPrivateMessage:(e,t)=>{n.socket&&t.trim()&&n.socket.emit("private-message",{targetPlayerId:e,message:t.trim()})},changeColor:e=>{n.socket&&n.socket.emit("change-color",{color:e})},startGame:()=>{n.socket&&n.socket.emit("start-game")},selectDealerCard:e=>{n.socket&&n.socket.emit("select-dealer-card",{cardIndex:e})},updateSettings:e=>{n.socket&&n.socket.emit("update-settings",e)},clearError:()=>{o({type:"SET_ERROR",payload:null})},setCurrentView:e=>{o({type:"SET_CURRENT_VIEW",payload:e})},drawCards:()=>{console.log("\ud83c\udfb2 Client: Attempting to draw cards"),n.socket&&n.socket.emit("draw-cards",{})},playCard:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;console.log("\ud83c\udccf Client: Attempting to play card:",e,t),n.socket&&n.socket.emit("play-card",{cardId:e,calledSuit:t})},continueToNextStage:()=>{console.log("\ud83c\udfaf Client: Continuing to next stage"),n.socket&&(n.socket.emit("continue-to-next-stage"),o({type:"STORM_STAGE_COMPLETE",payload:{results:null}}))},placeCoin:(e,t,r)=>{console.log("\ud83e\ude99 Client: Attempting to place coin:",e,"at position:",t,"lane:",r),n.socket&&n.socket.emit("place-coin",{coinId:e,position:t,lane:r})},continueToRacing:()=>{console.log("\ud83c\udfc1 Client: Continue to racing stage"),n.socket&&n.socket.emit("continue-to-racing",{})},rollDice:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"movement";console.log("\ud83c\udfb2 Client: Rolling dice:",e),n.socket&&n.socket.emit("roll-dice",{diceType:e})},chooseMovement:e=>{console.log("\ud83d\ude97 Client: Choosing movement:",e),n.socket&&n.socket.emit("choose-movement",e)},selectLane:e=>{console.log("\ud83d\udee3\ufe0f Client: Selecting lane:",e),n.socket&&n.socket.emit("select-lane",{laneId:e})}},a={...n,...i};return(0,qt.jsx)(Kt.Provider,{value:a,children:t})}function Jt(){const e=(0,r.useContext)(Kt);if(!e)throw new Error("useGame must be used within a GameProvider");return e}var Zt=function(){return Zt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Zt.apply(this,arguments)};Object.create;function en(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var tn=n(324),nn=n.n(tn),rn="-ms-",on="-moz-",an="-webkit-",ln="comm",sn="rule",un="decl",cn="@keyframes",dn=Math.abs,fn=String.fromCharCode,pn=Object.assign;function hn(e){return e.trim()}function gn(e,t){return(e=t.exec(e))?e[0]:e}function mn(e,t,n){return e.replace(t,n)}function vn(e,t,n){return e.indexOf(t,n)}function bn(e,t){return 0|e.charCodeAt(t)}function yn(e,t,n){return e.slice(t,n)}function xn(e){return e.length}function wn(e){return e.length}function kn(e,t){return t.push(e),e}function Sn(e,t){return e.filter(function(e){return!gn(e,t)})}var _n=1,En=1,Cn=0,jn=0,Rn=0,On="";function Pn(e,t,n,r,o,i,a,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:_n,column:En,length:a,return:"",siblings:l}}function Tn(e,t){return pn(Pn("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function zn(e){for(;e.root;)e=Tn(e.root,{children:[e]});kn(e,e.siblings)}function Nn(){return Rn=jn>0?bn(On,--jn):0,En--,10===Rn&&(En=1,_n--),Rn}function Ln(){return Rn=jn<Cn?bn(On,jn++):0,En++,10===Rn&&(En=1,_n++),Rn}function An(){return bn(On,jn)}function Dn(){return jn}function $n(e,t){return yn(On,e,t)}function In(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Mn(e){return _n=En=1,Cn=xn(On=e),jn=0,[]}function Fn(e){return On="",e}function Un(e){return hn($n(jn-1,Hn(91===e?e+2:40===e?e+1:e)))}function Bn(e){for(;(Rn=An())&&Rn<33;)Ln();return In(e)>2||In(Rn)>3?"":" "}function Wn(e,t){for(;--t&&Ln()&&!(Rn<48||Rn>102||Rn>57&&Rn<65||Rn>70&&Rn<97););return $n(e,Dn()+(t<6&&32==An()&&32==Ln()))}function Hn(e){for(;Ln();)switch(Rn){case e:return jn;case 34:case 39:34!==e&&39!==e&&Hn(Rn);break;case 40:41===e&&Hn(e);break;case 92:Ln()}return jn}function Vn(e,t){for(;Ln()&&e+Rn!==57&&(e+Rn!==84||47!==An()););return"/*"+$n(t,jn-1)+"*"+fn(47===e?e:Ln())}function Yn(e){for(;!In(An());)Ln();return $n(e,jn)}function qn(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Kn(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case un:return e.return=e.return||e.value;case ln:return"";case cn:return e.return=e.value+"{"+qn(e.children,r)+"}";case sn:if(!xn(e.value=e.props.join(",")))return""}return xn(n=qn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Qn(e,t,n){switch(function(e,t){return 45^bn(e,0)?(((t<<2^bn(e,0))<<2^bn(e,1))<<2^bn(e,2))<<2^bn(e,3):0}(e,t)){case 5103:return an+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return an+e+e;case 4789:return on+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return an+e+on+e+rn+e+e;case 5936:switch(bn(e,t+11)){case 114:return an+e+rn+mn(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return an+e+rn+mn(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return an+e+rn+mn(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return an+e+rn+e+e;case 6165:return an+e+rn+"flex-"+e+e;case 5187:return an+e+mn(e,/(\w+).+(:[^]+)/,an+"box-$1$2"+rn+"flex-$1$2")+e;case 5443:return an+e+rn+"flex-item-"+mn(e,/flex-|-self/g,"")+(gn(e,/flex-|baseline/)?"":rn+"grid-row-"+mn(e,/flex-|-self/g,""))+e;case 4675:return an+e+rn+"flex-line-pack"+mn(e,/align-content|flex-|-self/g,"")+e;case 5548:return an+e+rn+mn(e,"shrink","negative")+e;case 5292:return an+e+rn+mn(e,"basis","preferred-size")+e;case 6060:return an+"box-"+mn(e,"-grow","")+an+e+rn+mn(e,"grow","positive")+e;case 4554:return an+mn(e,/([^-])(transform)/g,"$1"+an+"$2")+e;case 6187:return mn(mn(mn(e,/(zoom-|grab)/,an+"$1"),/(image-set)/,an+"$1"),e,"")+e;case 5495:case 3959:return mn(e,/(image-set\([^]*)/,an+"$1$`$1");case 4968:return mn(mn(e,/(.+:)(flex-)?(.*)/,an+"box-pack:$3"+rn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+an+e+e;case 4200:if(!gn(e,/flex-|baseline/))return rn+"grid-column-align"+yn(e,t)+e;break;case 2592:case 3360:return rn+mn(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,gn(e.props,/grid-\w+-end/)})?~vn(e+(n=n[t].value),"span",0)?e:rn+mn(e,"-start","")+e+rn+"grid-row-span:"+(~vn(n,"span",0)?gn(n,/\d+/):+gn(n,/\d+/)-+gn(e,/\d+/))+";":rn+mn(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return gn(e.props,/grid-\w+-start/)})?e:rn+mn(mn(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return mn(e,/(.+)-inline(.+)/,an+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xn(e)-1-t>6)switch(bn(e,t+1)){case 109:if(45!==bn(e,t+4))break;case 102:return mn(e,/(.+:)(.+)-([^]+)/,"$1"+an+"$2-$3$1"+on+(108==bn(e,t+3)?"$3":"$2-$3"))+e;case 115:return~vn(e,"stretch",0)?Qn(mn(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return mn(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,o,i,a,l){return rn+n+":"+r+l+(o?rn+n+"-span:"+(i?a:+a-+r)+l:"")+e});case 4949:if(121===bn(e,t+6))return mn(e,":",":"+an)+e;break;case 6444:switch(bn(e,45===bn(e,14)?18:11)){case 120:return mn(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+an+(45===bn(e,14)?"inline-":"")+"box$3$1"+an+"$2$3$1"+rn+"$2box$3")+e;case 100:return mn(e,":",":"+rn)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return mn(e,"scroll-","scroll-snap-")+e}return e}function Gn(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case un:return void(e.return=Qn(e.value,e.length,n));case cn:return qn([Tn(e,{value:mn(e.value,"@","@"+an)})],r);case sn:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(gn(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":zn(Tn(e,{props:[mn(t,/:(read-\w+)/,":-moz-$1")]})),zn(Tn(e,{props:[t]})),pn(e,{props:Sn(n,r)});break;case"::placeholder":zn(Tn(e,{props:[mn(t,/:(plac\w+)/,":"+an+"input-$1")]})),zn(Tn(e,{props:[mn(t,/:(plac\w+)/,":-moz-$1")]})),zn(Tn(e,{props:[mn(t,/:(plac\w+)/,rn+"input-$1")]})),zn(Tn(e,{props:[t]})),pn(e,{props:Sn(n,r)})}return""})}}function Xn(e){return Fn(Jn("",null,null,null,[""],e=Mn(e),0,[0],e))}function Jn(e,t,n,r,o,i,a,l,s){for(var u=0,c=0,d=a,f=0,p=0,h=0,g=1,m=1,v=1,b=0,y="",x=o,w=i,k=r,S=y;m;)switch(h=b,b=Ln()){case 40:if(108!=h&&58==bn(S,d-1)){-1!=vn(S+=mn(Un(b),"&","&\f"),"&\f",dn(u?l[u-1]:0))&&(v=-1);break}case 34:case 39:case 91:S+=Un(b);break;case 9:case 10:case 13:case 32:S+=Bn(h);break;case 92:S+=Wn(Dn()-1,7);continue;case 47:switch(An()){case 42:case 47:kn(er(Vn(Ln(),Dn()),t,n,s),s);break;default:S+="/"}break;case 123*g:l[u++]=xn(S)*v;case 125*g:case 59:case 0:switch(b){case 0:case 125:m=0;case 59+c:-1==v&&(S=mn(S,/\f/g,"")),p>0&&xn(S)-d&&kn(p>32?tr(S+";",r,n,d-1,s):tr(mn(S," ","")+";",r,n,d-2,s),s);break;case 59:S+=";";default:if(kn(k=Zn(S,t,n,u,c,o,l,y,x=[],w=[],d,i),i),123===b)if(0===c)Jn(S,t,k,k,x,i,d,l,w);else switch(99===f&&110===bn(S,3)?100:f){case 100:case 108:case 109:case 115:Jn(e,k,k,r&&kn(Zn(e,k,k,0,0,o,l,y,o,x=[],d,w),w),o,w,d,l,r?x:w);break;default:Jn(S,k,k,k,[""],w,0,l,w)}}u=c=p=0,g=v=1,y=S="",d=a;break;case 58:d=1+xn(S),p=h;default:if(g<1)if(123==b)--g;else if(125==b&&0==g++&&125==Nn())continue;switch(S+=fn(b),b*g){case 38:v=c>0?1:(S+="\f",-1);break;case 44:l[u++]=(xn(S)-1)*v,v=1;break;case 64:45===An()&&(S+=Un(Ln())),f=An(),c=d=xn(y=S+=Yn(Dn())),b++;break;case 45:45===h&&2==xn(S)&&(g=0)}}return i}function Zn(e,t,n,r,o,i,a,l,s,u,c,d){for(var f=o-1,p=0===o?i:[""],h=wn(p),g=0,m=0,v=0;g<r;++g)for(var b=0,y=yn(e,f+1,f=dn(m=a[g])),x=e;b<h;++b)(x=hn(m>0?p[b]+" "+y:mn(y,/&\f/g,p[b])))&&(s[v++]=x);return Pn(e,t,n,0===o?sn:l,s,u,c,d)}function er(e,t,n,r){return Pn(e,t,n,ln,fn(Rn),yn(e,2,-2),0,r)}function tr(e,t,n,r,o){return Pn(e,t,n,un,yn(e,0,r),yn(e,r+1,-1),r,o)}var nr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},rr="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",or="active",ir="data-styled-version",ar="6.1.19",lr="/*!sc*/\n",sr="undefined"!=typeof window&&"undefined"!=typeof document,ur=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),cr=(new Set,Object.freeze([])),dr=Object.freeze({});function fr(e,t,n){return void 0===n&&(n=dr),e.theme!==n.theme&&e.theme||t||n.theme}var pr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,gr=/(^-|-$)/g;function mr(e){return e.replace(hr,"-").replace(gr,"")}var vr=/(a)(d)/gi,br=function(e){return String.fromCharCode(e+(e>25?39:97))};function yr(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=br(t%52)+n;return(br(t%52)+n).replace(vr,"$1-$2")}var xr,wr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},kr=function(e){return wr(5381,e)};function Sr(e){return yr(kr(e)>>>0)}function _r(e){return e.displayName||e.name||"Component"}function Er(e){return"string"==typeof e&&!0}var Cr="function"==typeof Symbol&&Symbol.for,jr=Cr?Symbol.for("react.memo"):60115,Rr=Cr?Symbol.for("react.forward_ref"):60112,Or={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Pr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Tr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zr=((xr={})[Rr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xr[jr]=Tr,xr);function Nr(e){return("type"in(t=e)&&t.type.$$typeof)===jr?Tr:"$$typeof"in e?zr[e.$$typeof]:Or;var t}var Lr=Object.defineProperty,Ar=Object.getOwnPropertyNames,Dr=Object.getOwnPropertySymbols,$r=Object.getOwnPropertyDescriptor,Ir=Object.getPrototypeOf,Mr=Object.prototype;function Fr(e,t,n){if("string"!=typeof t){if(Mr){var r=Ir(t);r&&r!==Mr&&Fr(e,r,n)}var o=Ar(t);Dr&&(o=o.concat(Dr(t)));for(var i=Nr(e),a=Nr(t),l=0;l<o.length;++l){var s=o[l];if(!(s in Pr||n&&n[s]||a&&s in a||i&&s in i)){var u=$r(t,s);try{Lr(e,s,u)}catch(e){}}}}return e}function Ur(e){return"function"==typeof e}function Br(e){return"object"==typeof e&&"styledComponentId"in e}function Wr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Hr(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Vr(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Yr(e,t,n){if(void 0===n&&(n=!1),!n&&!Vr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Yr(e[r],t[r]);else if(Vr(t))for(var r in t)e[r]=Yr(e[r],t[r]);return e}function qr(e,t){Object.defineProperty(e,"toString",{value:t})}function Kr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Qr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw Kr(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),l=(i=0,t.length);i<l;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(lr);return t},e}(),Gr=new Map,Xr=new Map,Jr=1,Zr=function(e){if(Gr.has(e))return Gr.get(e);for(;Xr.has(Jr);)Jr++;var t=Jr++;return Gr.set(e,t),Xr.set(t,e),t},eo=function(e,t){Jr=t+1,Gr.set(e,t),Xr.set(t,e)},to="style[".concat(rr,"][").concat(ir,'="').concat(ar,'"]'),no=new RegExp("^".concat(rr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ro=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},oo=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(lr),o=[],i=0,a=r.length;i<a;i++){var l=r[i].trim();if(l){var s=l.match(no);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(eo(c,u),ro(e,c,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(l)}}},io=function(e){for(var t=document.querySelectorAll(to),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(rr)!==or&&(oo(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function ao(){return n.nc}var lo=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(rr,"]")));return t[t.length-1]}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(rr,or),r.setAttribute(ir,ar);var a=ao();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},so=function(){function e(e){this.element=lo(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw Kr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),uo=function(){function e(e){this.element=lo(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),co=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),fo=sr,po={isServer:!sr,useCSSOMInjection:!ur},ho=function(){function e(e,t,n){void 0===e&&(e=dr),void 0===t&&(t={});var r=this;this.options=Zt(Zt({},po),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&sr&&fo&&(fo=!1,io(this)),qr(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return Xr.get(e)}(n);if(void 0===o)return"continue";var i=e.names.get(o),a=t.getGroup(n);if(void 0===i||!i.size||0===a.length)return"continue";var l="".concat(rr,".g").concat(n,'[id="').concat(o,'"]'),s="";void 0!==i&&i.forEach(function(e){e.length>0&&(s+="".concat(e,","))}),r+="".concat(a).concat(l,'{content:"').concat(s,'"}').concat(lr)},i=0;i<n;i++)o(i);return r}(r)})}return e.registerId=function(e){return Zr(e)},e.prototype.rehydrate=function(){!this.server&&sr&&io(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Zt(Zt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new co(n):t?new so(n):new uo(n)}(this.options),new Qr(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Zr(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Zr(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Zr(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),go=/&/g,mo=/^\s*\/\/.*$/gm;function vo(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=vo(e.children,t)),e})}function bo(e){var t,n,r,o=void 0===e?dr:e,i=o.options,a=void 0===i?dr:i,l=o.plugins,s=void 0===l?cr:l,u=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push(function(e){e.type===sn&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(go,n).replace(r,u))}),a.prefix&&c.push(Gn),c.push(Kn);var d=function(e,o,i,l){void 0===o&&(o=""),void 0===i&&(i=""),void 0===l&&(l="&"),t=l,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(mo,""),u=Xn(i||o?"".concat(i," ").concat(o," { ").concat(s," }"):s);a.namespace&&(u=vo(u,a.namespace));var d,f=[];return qn(u,function(e){var t=wn(e);return function(n,r,o,i){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,i)||"";return a}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=s.length?s.reduce(function(e,t){return t.name||Kr(15),wr(e,t.name)},5381).toString():"",d}var yo=new ho,xo=bo(),wo=r.createContext({shouldForwardProp:void 0,styleSheet:yo,stylis:xo}),ko=(wo.Consumer,r.createContext(void 0));function So(){return(0,r.useContext)(wo)}function _o(e){var t=(0,r.useState)(e.stylisPlugins),n=t[0],o=t[1],i=So().styleSheet,a=(0,r.useMemo)(function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,i]),l=(0,r.useMemo)(function(){return bo({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);(0,r.useEffect)(function(){nn()(n,e.stylisPlugins)||o(e.stylisPlugins)},[e.stylisPlugins]);var s=(0,r.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:l}},[e.shouldForwardProp,a,l]);return r.createElement(wo.Provider,{value:s},r.createElement(ko.Provider,{value:l},e.children))}var Eo=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=xo);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,qr(this,function(){throw Kr(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=xo),this.name+e.hash},e}(),Co=function(e){return e>="A"&&e<="Z"};function jo(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Co(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ro=function(e){return null==e||!1===e||""===e},Oo=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Ro(i)&&(Array.isArray(i)&&i.isCss||Ur(i)?r.push("".concat(jo(o),":"),i,";"):Vr(i)?r.push.apply(r,en(en(["".concat(o," {")],Oo(i),!1),["}"],!1)):r.push("".concat(jo(o),": ").concat((t=o,null==(n=i)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in nr||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Po(e,t,n,r){return Ro(e)?[]:Br(e)?[".".concat(e.styledComponentId)]:Ur(e)?!Ur(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:Po(e(t),t,n,r):e instanceof Eo?n?(e.inject(n,r),[e.getName(r)]):[e]:Vr(e)?Oo(e):Array.isArray(e)?Array.prototype.concat.apply(cr,e.map(function(e){return Po(e,t,n,r)})):[e.toString()];var o}function To(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ur(n)&&!Br(n))return!1}return!0}var zo=kr(ar),No=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&To(e),this.componentId=t,this.baseHash=wr(zo,t),this.baseStyle=n,ho.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Wr(r,this.staticRulesId);else{var o=Hr(Po(this.rules,e,t,n)),i=yr(wr(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=n(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}r=Wr(r,i),this.staticRulesId=i}else{for(var l=wr(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=Hr(Po(c,e,t,n));l=wr(l,d+u),s+=d}}if(s){var f=yr(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=Wr(r,f)}}return r},e}(),Lo=r.createContext(void 0);Lo.Consumer;var Ao={};new Set;function Do(e,t,n){var o=Br(e),i=e,a=!Er(e),l=t.attrs,s=void 0===l?cr:l,u=t.componentId,c=void 0===u?function(e,t){var n="string"!=typeof e?"sc":mr(e);Ao[n]=(Ao[n]||0)+1;var r="".concat(n,"-").concat(Sr(ar+n+Ao[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):u,d=t.displayName,f=void 0===d?function(e){return Er(e)?"styled.".concat(e):"Styled(".concat(_r(e),")")}(e):d,p=t.displayName&&t.componentId?"".concat(mr(t.displayName),"-").concat(t.componentId):t.componentId||c,h=o&&i.attrs?i.attrs.concat(s).filter(Boolean):s,g=t.shouldForwardProp;if(o&&i.shouldForwardProp){var m=i.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;g=function(e,t){return m(e,t)&&v(e,t)}}else g=m}var b=new No(n,p,o?i.componentStyle:void 0);function y(e,t){return function(e,t,n){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,u=e.target,c=r.useContext(Lo),d=So(),f=e.shouldForwardProp||d.shouldForwardProp,p=fr(t,c,a)||dr,h=function(e,t,n){for(var r,o=Zt(Zt({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var a=Ur(r=e[i])?r(o):r;for(var l in a)o[l]="className"===l?Wr(o[l],a[l]):"style"===l?Zt(Zt({},o[l]),a[l]):a[l]}return t.className&&(o.className=Wr(o.className,t.className)),o}(o,t,p),g=h.as||u,m={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v&&h.theme===p||("forwardedAs"===v?m.as=h.forwardedAs:f&&!f(v,g)||(m[v]=h[v]));var b=function(e,t){var n=So();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,h),y=Wr(l,s);return b&&(y+=" "+b),h.className&&(y+=" "+h.className),m[Er(g)&&!pr.has(g)?"class":"className"]=y,n&&(m.ref=n),(0,r.createElement)(g,m)}(x,e,t)}y.displayName=f;var x=r.forwardRef(y);return x.attrs=h,x.componentStyle=b,x.displayName=f,x.shouldForwardProp=g,x.foldedComponentIds=o?Wr(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=p,x.target=o?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)Yr(e,o[r],!0);return e}({},i.defaultProps,e):e}}),qr(x,function(){return".".concat(x.styledComponentId)}),a&&Fr(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function $o(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Io=function(e){return Object.assign(e,{isCss:!0})};function Mo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ur(e)||Vr(e))return Io(Po($o(cr,en([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Po(r):Io(Po($o(r,t)))}function Fo(e,t,n){if(void 0===n&&(n=dr),!t)throw Kr(1,t);var r=function(r){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,n,Mo.apply(void 0,en([r],o,!1)))};return r.attrs=function(r){return Fo(e,t,Zt(Zt({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Fo(e,t,Zt(Zt({},n),r))},r}var Uo=function(e){return Fo(Do,e)},Bo=Uo;pr.forEach(function(e){Bo[e]=Uo(e)});!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=To(e),ho.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var o=r(Hr(Po(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&ho.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();function Wo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Hr(Mo.apply(void 0,en([e],t,!1))),o=Sr(r);return new Eo(o,r)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=ao(),r=Hr([n&&'nonce="'.concat(n,'"'),"".concat(rr,'="true"'),"".concat(ir,'="').concat(ar,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Kr(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Kr(2);var n=e.instance.toString();if(!n)return[];var o=((t={})[rr]="",t[ir]=ar,t.dangerouslySetInnerHTML={__html:n},t),i=ao();return i&&(o.nonce=i),[r.createElement("style",Zt({},o,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new ho({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Kr(2);return r.createElement(_o,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Kr(3)}})(),"__sc-".concat(rr,"__");const Ho=Wo`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,Vo=Wo`
  0%, 100% { text-shadow: 0 0 20px #00d4ff; }
  50% { text-shadow: 0 0 40px #00d4ff, 0 0 60px #00d4ff; }
`,Yo=Bo.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
  position: relative;
  overflow: hidden;
`,qo=Bo.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 56, 56, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(255, 215, 0, 0.05) 0%, transparent 50%);
  z-index: 0;
`,Ko=Bo.div`
  z-index: 1;
  text-align: center;
  animation: ${Ho} 1s ease-out;
`,Qo=Bo.h1`
  font-family: 'Orbitron', monospace;
  font-size: 4rem;
  font-weight: 900;
  color: #00d4ff;
  margin-bottom: 1rem;
  animation: ${Vo} 3s ease-in-out infinite;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Go=Bo.h2`
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 3rem;
  opacity: 0.9;
`,Xo=Bo.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`,Jo=Bo.div`
  margin-bottom: 2rem;
  text-align: left;
`,Zo=Bo.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.1rem;
`,ei=Bo.div`
  position: relative;
  width: 100%;
`,ti=Bo.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
  margin: 0;
  padding: 0;
  list-style: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
`,ni=Bo.li`
  padding: 12px 15px;
  color: white;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 212, 255, 0.2);
  }

  &:last-child {
    border-bottom: none;
  }
`,ri=Bo.input`
  width: 100%;
  padding: 15px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-family: 'Rajdhani', sans-serif;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00d4ff;
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`,oi=Bo.button`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(45deg, #00d4ff, #ff3838);
  color: white;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover:not(:disabled) {
    background: linear-gradient(45deg, #ff3838, #00d4ff);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 212, 255, 0.4);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;const ii=function(){const{joinLobby:e}=Jt(),[t,n]=(0,r.useState)(""),[o,i]=(0,r.useState)([]),[a,l]=(0,r.useState)(!1),s=(0,r.useRef)(null),u=(0,r.useRef)(null);(0,r.useEffect)(()=>{const e=localStorage.getItem("havoc-speedway-player-names");if(e)try{i(JSON.parse(e))}catch(au){console.error("Error loading previous names:",au)}},[]),(0,r.useEffect)(()=>{const e=e=>{u.current&&!u.current.contains(e.target)&&l(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const c=o.filter(e=>e.toLowerCase().includes(t.toLowerCase()));return(0,qt.jsxs)(Yo,{children:[(0,qt.jsx)(qo,{}),(0,qt.jsxs)(Ko,{children:[(0,qt.jsx)(Qo,{children:"HAVOC SPEEDWAY"}),(0,qt.jsx)(Go,{children:"Multiplayer Racing Championship"}),(0,qt.jsx)(Xo,{children:(0,qt.jsxs)("form",{onSubmit:n=>{n.preventDefault(),t.trim()&&((e=>{const t=e.trim();if(!t)return;const n=[t,...o.filter(e=>e!==t)].slice(0,10);i(n),localStorage.setItem("havoc-speedway-player-names",JSON.stringify(n))})(t),e(t.trim()))},children:[(0,qt.jsxs)(Jo,{children:[(0,qt.jsx)(Zo,{children:"Enter Your Racing Name"}),(0,qt.jsxs)(ei,{ref:u,children:[(0,qt.jsx)(ri,{ref:s,type:"text",value:t,onChange:e=>{const t=e.target.value;n(t),l(t.length>0&&o.length>0)},onFocus:()=>{o.length>0&&l(!0)},placeholder:"Enter your name...",maxLength:20,required:!0}),a&&c.length>0&&(0,qt.jsx)(ti,{children:c.map((e,t)=>(0,qt.jsx)(ni,{onClick:()=>(e=>{var t;n(e),l(!1),null===(t=s.current)||void 0===t||t.focus()})(e),children:e},t))})]})]}),(0,qt.jsx)(oi,{type:"submit",disabled:!t.trim(),children:"Join the Lobby"})]})})]})]})},ai=Bo.div`
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
`,li=Bo.header`
  text-align: center;
  margin-bottom: 2rem;
`,si=Bo.h1`
  font-family: 'Orbitron', monospace;
  font-size: 2.5rem;
  color: #00d4ff;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 20px #00d4ff;
`,ui=Bo.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`,ci=Bo.span`
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
`,di=Bo.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,fi=Bo.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
`,pi=Bo.h2`
  font-family: 'Orbitron', monospace;
  color: #00d4ff;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`,hi=Bo.button`
  width: 100%;
  padding: 15px;
  margin-bottom: 2rem;
  border: none;
  border-radius: 10px;
  background: linear-gradient(45deg, #00d4ff, #ff3838);
  color: white;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;

  &:hover {
    background: linear-gradient(45deg, #ff3838, #00d4ff);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 212, 255, 0.4);
  }
`,gi=Bo.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 500px;
  overflow-y: auto;
`,mi=Bo.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-2px);
  }
`,vi=Bo.div`
  display: flex;
  justify-content: between;
  align-items: center;
  margin-bottom: 1rem;
`,bi=Bo.h3`
  color: white;
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.2rem;
  margin: 0;
  flex: 1;
`,yi=Bo.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${e=>"Waiting to start"===e.status?"#00ff88":"#ff8c00"};
  color: ${e=>"Waiting to start"===e.status?"#000":"#fff"};
`,xi=Bo.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`,wi=Bo.button`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  background: #00ff88;
  color: #000;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: #00e67a;
    transform: translateY(-1px);
  }

  &:disabled {
    background: #666;
    color: #999;
    cursor: not-allowed;
  }
`,ki=Bo.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  height: fit-content;
`,Si=Bo.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,_i=Bo.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Ei=Bo.label`
  color: white;
  font-weight: 600;
`,Ci=Bo.input`
  padding: 10px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-family: 'Rajdhani', sans-serif;

  &:focus {
    outline: none;
    border-color: #00d4ff;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`,ji=Bo.div`
  position: relative;
  width: 100%;
`,Ri=Bo.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  max-height: 150px;
  overflow-y: auto;
  z-index: 10;
  margin: 0;
  padding: 0;
  list-style: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
`,Oi=Bo.li`
  padding: 10px;
  color: white;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 212, 255, 0.2);
  }

  &:last-child {
    border-bottom: none;
  }
`,Pi=Bo.select`
  padding: 10px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-family: 'Rajdhani', sans-serif;

  &:focus {
    outline: none;
    border-color: #00d4ff;
  }

  option {
    background: #1a1a2e;
    color: white;
  }
`,Ti=Bo.button`
  padding: 12px;
  border: none;
  border-radius: 6px;
  background: #00d4ff;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: #0099cc;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,zi=Bo.div`
  text-align: center;
  padding: 3rem;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
`;const Ni=function(){const{player:e,availableRooms:t,createRoom:n,joinRoom:o}=Jt(),[i,a]=(0,r.useState)(!1),[l,s]=(0,r.useState)({roomName:"",numberOfLaps:3,numberOfDice:1,numberOfDecks:1,cardsPerHand:4,numberOfCoins:2}),[u,c]=(0,r.useState)([]),[d,f]=(0,r.useState)(!1),p=(0,r.useRef)(null),h=(0,r.useRef)(null);(0,r.useEffect)(()=>{const e=localStorage.getItem("havoc-speedway-room-names");if(e)try{c(JSON.parse(e))}catch(au){console.error("Error loading previous room names:",au)}},[]),(0,r.useEffect)(()=>{const e=e=>{h.current&&!h.current.contains(e.target)&&f(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const g=u.filter(e=>e.toLowerCase().includes(l.roomName.toLowerCase()));return(0,qt.jsxs)(ai,{children:[(0,qt.jsxs)(li,{children:[(0,qt.jsx)(si,{children:"Race Lobby"}),(0,qt.jsx)(ui,{children:(0,qt.jsxs)(ci,{children:["Welcome, ",null===e||void 0===e?void 0:e.name,"!"]})})]}),(0,qt.jsxs)(di,{children:[(0,qt.jsxs)(fi,{children:[(0,qt.jsx)(pi,{children:"Active Racing Rooms"}),0===t.length?(0,qt.jsx)(zi,{children:"No active rooms. Create one to start racing!"}):(0,qt.jsx)(gi,{children:t.map(e=>{var t;return(0,qt.jsxs)(mi,{children:[(0,qt.jsxs)(vi,{children:[(0,qt.jsx)(bi,{children:e.name}),(0,qt.jsx)(yi,{status:e.status,children:e.status})]}),(0,qt.jsxs)(xi,{children:[(0,qt.jsxs)("span",{children:["Host: ",e.hostName]}),(0,qt.jsxs)("span",{children:[e.playerCount,"/",e.maxPlayers," players"]}),(0,qt.jsxs)("span",{children:[(null===(t=e.settings)||void 0===t?void 0:t.numberOfLaps)||3," laps"]})]}),(0,qt.jsx)(wi,{onClick:()=>{return t=e.id,void o(t);var t},disabled:!e.canJoin,children:e.canJoin?"Join Race":"Room Full"})]},e.id)})})]}),(0,qt.jsxs)(ki,{children:[(0,qt.jsx)(pi,{children:"Create New Room"}),i?(0,qt.jsxs)(Si,{onSubmit:e=>{e.preventDefault(),l.roomName.trim()&&((e=>{const t=e.trim();if(!t)return;const n=[t,...u.filter(e=>e!==t)].slice(0,10);c(n),localStorage.setItem("havoc-speedway-room-names",JSON.stringify(n))})(l.roomName),n(l.roomName.trim(),{numberOfLaps:parseInt(l.numberOfLaps),numberOfDice:parseInt(l.numberOfDice),numberOfDecks:parseInt(l.numberOfDecks),cardsPerHand:parseInt(l.cardsPerHand),numberOfCoins:parseInt(l.numberOfCoins)}),s({...l,roomName:""}),a(!1))},children:[(0,qt.jsxs)(_i,{children:[(0,qt.jsx)(Ei,{children:"Room Name"}),(0,qt.jsxs)(ji,{ref:h,children:[(0,qt.jsx)(Ci,{ref:p,type:"text",value:l.roomName,onChange:e=>{const t=e.target.value;s({...l,roomName:t}),f(t.length>0&&u.length>0)},onFocus:()=>{u.length>0&&f(!0)},placeholder:"Enter room name...",maxLength:30,required:!0}),d&&g.length>0&&(0,qt.jsx)(Ri,{children:g.map((e,t)=>(0,qt.jsx)(Oi,{onClick:()=>(e=>{var t;s({...l,roomName:e}),f(!1),null===(t=p.current)||void 0===t||t.focus()})(e),children:e},t))})]})]}),(0,qt.jsxs)(_i,{children:[(0,qt.jsx)(Ei,{children:"Number of Laps"}),(0,qt.jsx)(Pi,{value:l.numberOfLaps,onChange:e=>s({...l,numberOfLaps:e.target.value}),children:[1,2,3,4,5].map(e=>(0,qt.jsxs)("option",{value:e,children:[e," lap",1!==e?"s":""]},e))})]}),(0,qt.jsxs)(_i,{children:[(0,qt.jsx)(Ei,{children:"Movement Dice"}),(0,qt.jsxs)(Pi,{value:l.numberOfDice,onChange:e=>s({...l,numberOfDice:e.target.value}),children:[(0,qt.jsx)("option",{value:1,children:"1 die"}),(0,qt.jsx)("option",{value:2,children:"2 dice"})]})]}),(0,qt.jsxs)(_i,{children:[(0,qt.jsx)(Ei,{children:"Card Decks"}),(0,qt.jsxs)(Pi,{value:l.numberOfDecks,onChange:e=>s({...l,numberOfDecks:e.target.value}),children:[(0,qt.jsx)("option",{value:1,children:"Single deck"}),(0,qt.jsx)("option",{value:2,children:"Double deck"})]})]}),(0,qt.jsxs)(_i,{children:[(0,qt.jsx)(Ei,{children:"Cards per Hand"}),(0,qt.jsx)(Pi,{value:l.cardsPerHand,onChange:e=>s({...l,cardsPerHand:e.target.value}),children:[3,4,5].map(e=>(0,qt.jsxs)("option",{value:e,children:[e," cards"]},e))})]}),(0,qt.jsxs)(_i,{children:[(0,qt.jsx)(Ei,{children:"Coins per Round"}),(0,qt.jsx)(Pi,{value:l.numberOfCoins,onChange:e=>s({...l,numberOfCoins:e.target.value}),children:[1,2,3].map(e=>(0,qt.jsxs)("option",{value:e,children:[e," coin",1!==e?"s":""]},e))})]}),(0,qt.jsxs)("div",{style:{display:"flex",gap:"0.5rem"},children:[(0,qt.jsx)(Ti,{type:"submit",disabled:!l.roomName.trim(),children:"Create Room"}),(0,qt.jsx)(Ti,{type:"button",onClick:()=>a(!1),style:{background:"#666"},children:"Cancel"})]})]}):(0,qt.jsx)(hi,{onClick:()=>a(!0),children:"Create Racing Room"})]})]})]})},Li=Bo.div`
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
`,Ai=Bo.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
`,Di=Bo.h1`
  font-family: 'Orbitron', monospace;
  color: #00d4ff;
  font-size: 2rem;
  margin: 0;
`,$i=Bo.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: #ff4757;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ff3742;
    transform: translateY(-1px);
  }
`,Ii=Bo.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,Mi=Bo.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
`,Fi=Bo.h2`
  font-family: 'Orbitron', monospace;
  color: #00d4ff;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`,Ui=Bo.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
`,Bi=Bo.div`
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid ${e=>e.filled?"rgba(0, 212, 255, 0.3)":"rgba(255, 255, 255, 0.1)"};
  border-radius: 12px;
  padding: 1.5rem;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 0.3s ease;

  ${e=>e.filled&&"\n    &:hover {\n      transform: translateY(-2px);\n      box-shadow: 0 5px 15px rgba(0, 212, 255, 0.2);\n    }\n  "}
`,Wi=Bo.div`
  text-align: center;
  width: 100%;
`,Hi=Bo.h3`
  color: white;
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`,Vi=Bo.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${e=>e.color};
  border: 3px solid white;
  margin: 0 auto 0.5rem;
`,Yi=Bo.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${e=>e.isHost?"#ffd700":"#00ff88"};
  color: #000;
`,qi=Bo.div`
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
  text-align: center;
`,Ki=Bo.button`
  margin-top: 0.5rem;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`,Qi=Bo.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`,Gi=Bo.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`,Xi=Bo.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 0.9rem;
`,Ji=Bo.span`
  color: rgba(255, 255, 255, 0.8);
`,Zi=Bo.span`
  font-weight: 600;
  color: #00d4ff;
`,ea=Bo.select`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  color: #00d4ff;
  padding: 5px 10px;
  font-size: 0.9rem;
  font-weight: 600;
  
  &:focus {
    outline: none;
    border-color: #00d4ff;
  }
  
  option {
    background: #1a1a2e;
    color: white;
  }
`,ta=(Bo.input`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  color: #00d4ff;
  padding: 5px 10px;
  font-size: 0.9rem;
  font-weight: 600;
  width: 60px;
  text-align: center;
  
  &:focus {
    outline: none;
    border-color: #00d4ff;
  }
`,Bo.button`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(45deg, #00ff88, #00d4ff);
  color: #000;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;

  &:hover:not(:disabled) {
    background: linear-gradient(45deg, #00d4ff, #00ff88);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 255, 136, 0.4);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`),na=Bo.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  height: 600px;
`,ra=Bo.div`
  display: flex;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,oa=Bo.button`
  padding: 8px 16px;
  border: none;
  background: ${e=>e.active?"rgba(0, 212, 255, 0.2)":"transparent"};
  color: ${e=>e.active?"#00d4ff":"rgba(255, 255, 255, 0.7)"};
  border-bottom: 2px solid ${e=>e.active?"#00d4ff":"transparent"};
  cursor: pointer;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    color: #00d4ff;
    background: rgba(0, 212, 255, 0.1);
  }
`,ia=Bo.select`
  padding: 8px;
  margin-bottom: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  font-family: 'Rajdhani', sans-serif;

  &:focus {
    outline: none;
    border-color: #00d4ff;
  }

  option {
    background: #1a1a2e;
    color: white;
  }
`,aa=Bo.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,la=Bo.div`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${e=>e.isPrivate?"rgba(255, 215, 0, 0.1)":"rgba(255, 255, 255, 0.05)"};
  border-left: 3px solid ${e=>e.isPrivate?"#ffd700":"#00d4ff"};
`,sa=Bo.div`
  font-size: 0.8rem;
  color: ${e=>e.isPrivate?"#ffd700":"#00d4ff"};
  margin-bottom: 0.2rem;
`,ua=Bo.div`
  color: white;
  font-size: 0.9rem;
`,ca=Bo.input`
  padding: 10px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-family: 'Rajdhani', sans-serif;

  &:focus {
    outline: none;
    border-color: #00d4ff;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`,da=Bo.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  z-index: 100;
`,fa=Bo.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid ${e=>e.selected?"#ffffff":"transparent"};
  background: ${e=>e.color};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;const pa=function(){var e,t,n,o,i,a,l,s,u,c,d,f,p,h,g,m,v,b,y,x,w,k,S,_,E,C,j,R,O,P;const{currentRoom:T,player:z,messages:N,leaveRoom:L,sendRoomMessage:A,sendPrivateMessage:D,changeColor:$,startGame:I,updateSettings:M}=Jt(),[F,U]=(0,r.useState)(""),[B,W]=(0,r.useState)(null),[H,V]=(0,r.useState)("room"),[Y,q]=(0,r.useState)(""),K={yellow:"#ffd700",orange:"#ff8c00",red:"#ff3838",pink:"#ff69b4",purple:"#9b59b6",blue:"#00d4ff",green:"#00ff88",black:"#2c3e50"},Q=["yellow","orange","red","pink","purple","blue","green","black"],G=(e,t)=>{const n={...null===T||void 0===T?void 0:T.settings,[e]:parseInt(t)};M(n)},X=(null===T||void 0===T||null===(e=T.host)||void 0===e?void 0:e.id)===(null===z||void 0===z?void 0:z.id)&&(null===T||void 0===T||null===(t=T.players)||void 0===t?void 0:t.length)>=2&&"lobby"===(null===T||void 0===T||null===(n=T.gameState)||void 0===n?void 0:n.currentStage),J=()=>{const e=(()=>{var e;return(null===T||void 0===T||null===(e=T.players)||void 0===e?void 0:e.map(e=>e.color).filter(Boolean))||[]})();return Q.filter(t=>!e.includes(t)||t===(null===z||void 0===z?void 0:z.color))};return(0,qt.jsxs)(Li,{children:[(0,qt.jsxs)(Ai,{children:[(0,qt.jsx)(Di,{children:null===T||void 0===T?void 0:T.name}),(0,qt.jsx)($i,{onClick:L,children:"Leave Room"})]}),(0,qt.jsxs)(Ii,{children:[(0,qt.jsxs)(Mi,{children:[(0,qt.jsxs)(Fi,{children:["Players (",(null===T||void 0===T||null===(o=T.players)||void 0===o?void 0:o.length)||0,"/4)"]}),(0,qt.jsx)(Ui,{children:[0,1,2,3].map(e=>{var t;const n=null===T||void 0===T||null===(t=T.players)||void 0===t?void 0:t[e];return(0,qt.jsx)(Bi,{filled:!!n,children:n?(0,qt.jsxs)(Wi,{children:[(0,qt.jsx)(Vi,{color:K[n.color]||"#666"}),(0,qt.jsx)(Hi,{children:n.name}),(0,qt.jsx)(Yi,{isHost:n.isHost,children:n.isHost?"Host":"Player"}),n.id===(null===z||void 0===z?void 0:z.id)&&(0,qt.jsxs)("div",{style:{position:"relative"},children:[(0,qt.jsx)(Ki,{onClick:()=>W(B===e?null:e),children:"Change Color"}),B===e&&(0,qt.jsx)(da,{children:J().map(e=>(0,qt.jsx)(fa,{color:K[e],selected:(null===z||void 0===z?void 0:z.color)===e,onClick:()=>(e=>{$(e),W(null)})(e)},e))})]})]}):(0,qt.jsx)(qi,{children:"Waiting for player..."})},e)})}),(0,qt.jsxs)(Qi,{children:[(0,qt.jsx)(Fi,{style:{fontSize:"1.2rem",marginBottom:"1rem"},children:"Game Settings"}),(0,qt.jsxs)(Gi,{children:[(0,qt.jsxs)(Xi,{children:[(0,qt.jsx)(Ji,{children:"Laps:"}),(null===T||void 0===T||null===(i=T.host)||void 0===i?void 0:i.id)===(null===z||void 0===z?void 0:z.id)&&"lobby"===(null===T||void 0===T||null===(a=T.gameState)||void 0===a?void 0:a.currentStage)?(0,qt.jsxs)(ea,{value:(null===T||void 0===T||null===(l=T.settings)||void 0===l?void 0:l.numberOfLaps)||3,onChange:e=>G("numberOfLaps",e.target.value),children:[(0,qt.jsx)("option",{value:1,children:"1"}),(0,qt.jsx)("option",{value:2,children:"2"}),(0,qt.jsx)("option",{value:3,children:"3"}),(0,qt.jsx)("option",{value:4,children:"4"}),(0,qt.jsx)("option",{value:5,children:"5"})]}):(0,qt.jsx)(Zi,{children:(null===T||void 0===T||null===(s=T.settings)||void 0===s?void 0:s.numberOfLaps)||3})]}),(0,qt.jsxs)(Xi,{children:[(0,qt.jsx)(Ji,{children:"Movement Dice:"}),(null===T||void 0===T||null===(u=T.host)||void 0===u?void 0:u.id)===(null===z||void 0===z?void 0:z.id)&&"lobby"===(null===T||void 0===T||null===(c=T.gameState)||void 0===c?void 0:c.currentStage)?(0,qt.jsxs)(ea,{value:(null===T||void 0===T||null===(d=T.settings)||void 0===d?void 0:d.numberOfDice)||1,onChange:e=>G("numberOfDice",e.target.value),children:[(0,qt.jsx)("option",{value:1,children:"1 die"}),(0,qt.jsx)("option",{value:2,children:"2 dice"})]}):(0,qt.jsx)(Zi,{children:2===(null===T||void 0===T||null===(f=T.settings)||void 0===f?void 0:f.numberOfDice)?"2 dice":"1 die"})]}),(0,qt.jsxs)(Xi,{children:[(0,qt.jsx)(Ji,{children:"Card Decks:"}),(null===T||void 0===T||null===(p=T.host)||void 0===p?void 0:p.id)===(null===z||void 0===z?void 0:z.id)&&"lobby"===(null===T||void 0===T||null===(h=T.gameState)||void 0===h?void 0:h.currentStage)?(0,qt.jsxs)(ea,{value:(null===T||void 0===T||null===(g=T.settings)||void 0===g?void 0:g.numberOfDecks)||1,onChange:e=>G("numberOfDecks",e.target.value),children:[(0,qt.jsx)("option",{value:1,children:"Single"}),(0,qt.jsx)("option",{value:2,children:"Double"})]}):(0,qt.jsx)(Zi,{children:2===(null===T||void 0===T||null===(m=T.settings)||void 0===m?void 0:m.numberOfDecks)?"Double":"Single"})]}),(0,qt.jsxs)(Xi,{children:[(0,qt.jsx)(Ji,{children:"Cards per Hand:"}),(null===T||void 0===T||null===(v=T.host)||void 0===v?void 0:v.id)===(null===z||void 0===z?void 0:z.id)&&"lobby"===(null===T||void 0===T||null===(b=T.gameState)||void 0===b?void 0:b.currentStage)?(0,qt.jsxs)(ea,{value:(null===T||void 0===T||null===(y=T.settings)||void 0===y?void 0:y.cardsPerHand)||4,onChange:e=>G("cardsPerHand",e.target.value),children:[(0,qt.jsx)("option",{value:3,children:"3"}),(0,qt.jsx)("option",{value:4,children:"4"}),(0,qt.jsx)("option",{value:5,children:"5"})]}):(0,qt.jsx)(Zi,{children:(null===T||void 0===T||null===(x=T.settings)||void 0===x?void 0:x.cardsPerHand)||4})]}),(0,qt.jsxs)(Xi,{children:[(0,qt.jsx)(Ji,{children:"Coins per Round:"}),(null===T||void 0===T||null===(w=T.host)||void 0===w?void 0:w.id)===(null===z||void 0===z?void 0:z.id)&&"lobby"===(null===T||void 0===T||null===(k=T.gameState)||void 0===k?void 0:k.currentStage)?(0,qt.jsxs)(ea,{value:(null===T||void 0===T||null===(S=T.settings)||void 0===S?void 0:S.numberOfCoins)||2,onChange:e=>G("numberOfCoins",e.target.value),children:[(0,qt.jsx)("option",{value:1,children:"1"}),(0,qt.jsx)("option",{value:2,children:"2"}),(0,qt.jsx)("option",{value:3,children:"3"})]}):(0,qt.jsx)(Zi,{children:(null===T||void 0===T||null===(_=T.settings)||void 0===_?void 0:_.numberOfCoins)||2})]})]})]}),(null===T||void 0===T||null===(E=T.host)||void 0===E?void 0:E.id)===(null===z||void 0===z?void 0:z.id)&&(0,qt.jsx)(ta,{onClick:I,disabled:!X,children:X?"Start Race!":(null===T||void 0===T||null===(C=T.players)||void 0===C?void 0:C.length)<2?"Need at least 2 players":"Game in progress"})]}),(0,qt.jsxs)(na,{children:[(0,qt.jsxs)(ra,{children:[(0,qt.jsx)(oa,{active:"room"===H,onClick:()=>V("room"),children:"Room Chat"}),(0,qt.jsx)(oa,{active:"private"===H,onClick:()=>V("private"),children:"Private Message"})]}),"private"===H&&(0,qt.jsxs)(ia,{value:Y,onChange:e=>q(e.target.value),children:[(0,qt.jsx)("option",{value:"",children:"Select player..."}),null===T||void 0===T||null===(j=T.players)||void 0===j||null===(R=j.filter(e=>e.id!==(null===z||void 0===z?void 0:z.id)))||void 0===R?void 0:R.map(e=>(0,qt.jsx)("option",{value:e.id,children:e.name},e.id))]}),(0,qt.jsx)(aa,{children:N.filter(e=>"room"===H?"room"===e.type:"private"===e.type).map(e=>(0,qt.jsxs)(la,{isPrivate:"private"===e.type,children:[(0,qt.jsxs)(sa,{isPrivate:"private"===e.type,children:["private"===e.type?"[Private] ":"",e.playerName,":"]}),(0,qt.jsx)(ua,{children:e.message})]},e.id))}),(0,qt.jsx)("form",{onSubmit:e=>{e.preventDefault(),F.trim()&&("room"===H?A(F):"private"===H&&Y&&D(Y,F),U(""))},children:(0,qt.jsx)(ca,{type:"text",value:F,onChange:e=>U(e.target.value),placeholder:"room"===H?"Type a message...":Y?`Private message to ${(null===T||void 0===T||null===(O=T.players)||void 0===O||null===(P=O.find(e=>e.id===Y))||void 0===P?void 0:P.name)||"player"}...`:"Select a player first...",maxLength:200,disabled:"private"===H&&!Y})})]})]})]})},ha=Wo`
  0%, 100% { box-shadow: 0 0 15px rgba(0, 212, 255, 0.6); }
  50% { box-shadow: 0 0 25px rgba(0, 212, 255, 0.9), 0 0 35px rgba(0, 212, 255, 0.4); }
`,ga=Wo`
  0%, 100% { box-shadow: 0 0 10px rgba(255, 215, 0, 0.6); }
  50% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.9); }
`,ma=Wo`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-2px); }
`,va=Wo`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
`,ba=Wo`
  0% { transform: scale(0) rotate(-180deg); opacity: 0; }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
`,ya=Bo.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: linear-gradient(
    135deg, 
    rgba(12, 12, 12, 0.98) 0%, 
    rgba(26, 26, 46, 0.98) 50%, 
    rgba(22, 33, 62, 0.98) 100%
  );
  backdrop-filter: blur(25px);
  border-bottom: 3px solid rgba(0, 212, 255, 0.4);
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
  min-height: 140px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`,xa=Bo.div`
  position: relative;
  width: 220px;
  height: 100px;
  background: linear-gradient(
    135deg, 
    rgba(255, 255, 255, 0.12) 0%, 
    rgba(0, 212, 255, 0.08) 30%, 
    rgba(255, 255, 255, 0.05) 70%, 
    rgba(0, 212, 255, 0.06) 100%
  );
  border: 3px solid ${e=>e.isCurrentPlayer?"#00d4ff":"rgba(255, 255, 255, 0.15)"};
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: visible;
  
  ${e=>e.isCurrentPlayer&&Mo`
    animation: ${ha} 2.5s ease-in-out infinite;
    background: linear-gradient(
      135deg, 
      rgba(0, 212, 255, 0.2) 0%, 
      rgba(0, 212, 255, 0.12) 30%, 
      rgba(0, 212, 255, 0.08) 70%, 
      rgba(0, 212, 255, 0.15) 100%
    );
    border-color: #00d4ff;
    box-shadow: 0 0 25px rgba(0, 212, 255, 0.5);
  `}

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(0, 212, 255, 0.3);
  }
`,wa=Bo.div`
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  color: #000;
  padding: 6px 12px;
  border-radius: 15px;
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: 0.7rem;
  text-transform: uppercase;
  border: 2px solid #ffcc00;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.6);
  animation: ${ga} 2s ease-in-out infinite;
  z-index: 10;
`,ka=Bo.div`
  position: absolute;
  top: -6px;
  left: -6px;
  width: 24px;
  height: 24px;
  background: ${e=>{switch(e.position){case 1:return"linear-gradient(45deg, #ffd700, #ffed4e)";case 2:return"linear-gradient(45deg, #c0c0c0, #e8e8e8)";case 3:return"linear-gradient(45deg, #cd7f32, #deb887)";case 4:return"linear-gradient(45deg, #4a5568, #718096)";default:return"#666"}}};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: 0.8rem;
  color: ${e=>e.position<=3?"#000":"#fff"};
  border: 2px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  animation: ${ba} 0.5s ease-out;
  z-index: 10;
`,Sa=Bo.div`
  position: absolute;
  top: -6px;
  right: -6px;
  background: rgba(0, 212, 255, 0.9);
  color: white;
  padding: 4px 8px;
  border-radius: 10px;
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: 0.7rem;
  border: 2px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 8px rgba(0, 212, 255, 0.4);
`,_a=Bo.div`
  font-family: 'Orbitron', monospace;
  font-weight: 600;
  font-size: 0.9rem;
  color: white;
  text-align: center;
  margin-bottom: 4px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
`,Ea=Bo.div`
  width: 36px;
  height: 36px;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  background: linear-gradient(145deg, ${e=>e.color||"#666"}, ${e=>{const t=e.color||"#666";return"yellow"===t?"#cc9900":"orange"===t?"#cc6600":"red"===t?"#cc0000":"pink"===t?"#cc6699":"purple"===t?"#6600cc":"blue"===t?"#0066cc":"green"===t?"#00cc66":"black"===t?"#333333":"#444"}});
  border: 3px solid rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: 1rem;
  color: ${e=>["yellow","orange","pink"].includes(e.color)?"black":"white"};
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.4),
    inset 0 2px 4px rgba(255, 255, 255, 0.3);
  position: relative;
  z-index: 5;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 8px;
    background: ${e=>e.color||"#666"};
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.9);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 50%;
    transform: translateX(-50%);
    width: 24px;
    height: 6px;
    background: linear-gradient(145deg, ${e=>e.color||"#666"}, ${e=>{const t=e.color||"#666";return"yellow"===t?"#cc9900":"orange"===t?"#cc6600":"red"===t?"#cc0000":"pink"===t?"#cc6699":"purple"===t?"#6600cc":"blue"===t?"#0066cc":"green"===t?"#00cc66":"black"===t?"#333333":"#444"}});
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  }
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 
      0 6px 16px rgba(0, 0, 0, 0.5),
      inset 0 2px 4px rgba(255, 255, 255, 0.4);
  }
`,Ca=Bo.span`
  font-size: 0.9rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`,ja=Bo.div`
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 6px;
`,Ra=Bo.div`
  display: flex;
  position: relative;
  height: 35px;
  
  .card {
    width: 20px;
    height: 30px;
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 4px;
    margin-left: -12px;
    animation: ${ma} 3s ease-in-out infinite;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      right: 2px;
      bottom: 2px;
      background: linear-gradient(135deg, #2c3e50, #34495e);
      border-radius: 2px;
    }
    
    &:first-child {
      margin-left: 0;
    }
    
    &:nth-child(1) { animation-delay: 0s; transform: rotate(-15deg); }
    &:nth-child(2) { animation-delay: 0.2s; transform: rotate(-10deg); }
    &:nth-child(3) { animation-delay: 0.4s; transform: rotate(-5deg); }
    &:nth-child(4) { animation-delay: 0.6s; transform: rotate(0deg); }
    &:nth-child(5) { animation-delay: 0.8s; transform: rotate(5deg); }
    &:nth-child(6) { animation-delay: 1.0s; transform: rotate(10deg); }
    &:nth-child(7) { animation-delay: 1.2s; transform: rotate(15deg); }
    &:nth-child(8) { animation-delay: 1.4s; transform: rotate(20deg); }
  }
`,Oa=Bo.div`
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  color: #000;
  padding: 4px 10px;
  border-radius: 12px;
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: 0.9rem;
  border: 2px solid #ffcc00;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  position: absolute;
  top: -5px;
  right: -10px;
  z-index: 10;
`,Pa=Bo.div`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 4px;
  z-index: 5;
`,Ta=Bo.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${e=>e.faceUp?"gold"===e.type?"linear-gradient(45deg, #ffd700, #ffed4e)":"silver"===e.type?"linear-gradient(45deg, #c0c0c0, #e8e8e8)":"linear-gradient(45deg, #cd7f32, #deb887)":"linear-gradient(45deg, #2c3e50, #34495e)"};
  border: 2px solid rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: 0.6rem;
  color: ${e=>e.faceUp&&"bronze"!==e.type?"#000":"#fff"};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  animation: ${va} 2s linear infinite;
  animation-play-state: ${e=>e.isSelected?"running":"paused"};
  cursor: ${e=>e.isSelectable?"pointer":"default"};
  
  &:hover {
    transform: ${e=>e.isSelectable?"scale(1.1)":"none"};
    box-shadow: ${e=>e.isSelectable?"0 0 10px rgba(255, 215, 0, 0.6)":"0 2px 6px rgba(0, 0, 0, 0.3)"};
  }
`,za=Bo.div`
  position: absolute;
  bottom: -20px;
  right: -5px;
  display: flex;
  gap: 3px;
  z-index: 5;
`,Na=Bo.div`
  width: 20px;
  height: 20px;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  border: 2px solid #333;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: 0.8rem;
  color: #333;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
`;const La=function(e){let{players:t=[],currentPlayer:n,gameStage:r="lobby",onCoinSelect:o}=e;const i=e=>{const t=[];if(e.dealerButton&&t.push((0,qt.jsx)(wa,{children:"DEALER"},"dealer")),e.stormFinishOrder&&e.stormFinishOrder>0&&t.push((0,qt.jsx)(ka,{position:e.stormFinishOrder,children:e.stormFinishOrder},"badge")),(r.includes("racing")||r.includes("coin"))&&t.push((0,qt.jsxs)(Sa,{children:["L",e.lap||1]},"lap")),"storm"===r&&"number"===typeof e.cardCount){const n=e.cardCount,r=Math.min(n,8),o=[];for(let e=0;e<r;e++)o.push((0,qt.jsx)("div",{className:"card"},e));t.push((0,qt.jsx)(ja,{children:(0,qt.jsxs)(Ra,{children:[o,(0,qt.jsx)(Oa,{children:n})]})},"cards"))}return"coin"===r&&e.drawnCoins&&e.drawnCoins.length>0&&t.push((0,qt.jsx)(Pa,{children:e.drawnCoins.map((t,n)=>(0,qt.jsx)(Ta,{type:t.type,faceUp:t.faceUp,isSelected:t.isSelected,isSelectable:t.isSelectable,onClick:()=>t.isSelectable&&o&&o(e.id,n),children:t.faceUp?t.value:"?"},n))},"coins")),"racing"===r&&e.lastDiceRoll&&e.lastDiceRoll.length>0&&t.push((0,qt.jsx)(za,{children:e.lastDiceRoll.map((e,t)=>(0,qt.jsx)(Na,{children:e},t))},"dice")),t};return(0,qt.jsx)(ya,{children:t.map(e=>(0,qt.jsxs)(xa,{isCurrentPlayer:n===e.id,children:[i(e),(0,qt.jsx)(_a,{children:e.name}),(0,qt.jsx)(Ea,{color:e.color,children:(0,qt.jsx)(Ca,{children:"\u265f"})})]},e.id))})},Aa=Wo`
  0% { transform: rotateY(0deg); }
  50% { transform: rotateY(90deg); }
  100% { transform: rotateY(0deg); }
`,Da=(Wo`
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-8px) scale(1.05); }
`,Wo`
  0%, 100% { box-shadow: 0 0 10px rgba(0, 212, 255, 0.3); }
  50% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.6), 0 0 30px rgba(0, 212, 255, 0.2); }
`),$a=Bo.div`
  width: ${e=>"large"===e.size?"120px":"medium"===e.size?"80px":"60px"};
  height: ${e=>"large"===e.size?"168px":"medium"===e.size?"112px":"84px"};
  perspective: 1000px;
  cursor: ${e=>e.interactive?"pointer":"default"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${e=>e.interactive&&"\n    &:hover {\n      transform: translateY(-12px) scale(1.05);\n      filter: drop-shadow(0 12px 25px rgba(0, 0, 0, 0.4));\n    }\n  "}
  
  ${e=>e.isPlayable&&Mo`
    animation: ${Da} 2s ease-in-out infinite;
  `}
  
  ${e=>e.isAnimating&&Mo`
    animation: ${Aa} 0.6s ease-in-out;
  `}
`,Ia=Bo.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${e=>e.isFlipped&&"\n    transform: rotateY(180deg);\n  "}
`,Ma=Bo.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.3),
    0 1px 6px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 50%,
      rgba(0, 0, 0, 0.1) 100%
    );
    pointer-events: none;
  }
`,Fa=Bo(Ma)`
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    #f8f9fa 50%,
    #e9ecef 100%
  );
  color: ${e=>function(e){switch(e){case"hearts":case"diamonds":return"#e74c3c";default:return"#2c3e50"}}(e.suit)};
  transform: rotateY(0deg);
`,Ua=Bo(Ma)`
  background: linear-gradient(
    135deg,
    #1a1a2e 0%,
    #16213e 50%,
    #0f1419 100%
  );
  transform: rotateY(180deg);
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
    height: 60%;
    transform: translate(-50%, -50%);
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="4" height="4"><path d="M 0,4 l 4,-4 M -1,1 l 2,-2 M 3,5 l 2,-2" stroke="%2300d4ff" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23diagonalHatch)" opacity="0.3"/></svg>') no-repeat center;
    background-size: contain;
    border-radius: 8px;
    border: 1px solid rgba(0, 212, 255, 0.3);
  }
`,Ba=Bo.div`
  font-size: ${e=>"large"===e.size?"24px":"medium"===e.size?"18px":"14px"};
  font-weight: bold;
  font-family: 'Rajdhani', sans-serif;
  position: absolute;
  top: 8px;
  left: 8px;
  line-height: 1;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`,Wa=Bo.div`
  font-size: ${e=>"large"===e.size?"48px":"medium"===e.size?"32px":"24px"};
  line-height: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.3));
`,Ha=Bo.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  font-size: ${e=>"large"===e.size?"16px":"medium"===e.size?"12px":"10px"};
  font-weight: bold;
  font-family: 'Rajdhani', sans-serif;
  transform: rotate(180deg);
  opacity: 0.7;
`,Va=Bo.div`
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border-radius: 14px;
  background: ${e=>"Q"===e.rank?"linear-gradient(45deg, #9b59b6, #8e44ad)":"7"===e.rank?"linear-gradient(45deg, #e74c3c, #c0392b)":"A"===e.rank?"linear-gradient(45deg, #f39c12, #e67e22)":"transparent"};
  opacity: ${e=>e.isSpecial?"0.3":"0"};
  transition: opacity 0.3s ease;
  pointer-events: none;
  
  ${$a}:hover & {
    opacity: ${e=>e.isSpecial?"0.6":"0"};
  }
`;function Ya(e){switch(e){case"hearts":return"\u2665";case"diamonds":return"\u2666";case"spades":return"\u2660";case"clubs":return"\u2663";default:return""}}function qa(e){return["Q","7","A"].includes(e)}const Ka=e=>{let{rank:t,suit:n,id:r,isBack:o=!1,size:i="medium",interactive:a=!1,isPlayable:l=!1,isAnimating:s=!1,onClick:u,style:c={}}=e;return(0,qt.jsx)($a,{size:i,interactive:a,isPlayable:l,isAnimating:s,onClick:()=>{a&&u&&u({rank:t,suit:n,id:r})},style:c,children:(0,qt.jsxs)(Ia,{isFlipped:o,children:[(0,qt.jsxs)(Fa,{suit:n,children:[(0,qt.jsx)(Va,{rank:t,isSpecial:qa(t)}),(0,qt.jsx)(Ba,{size:i,children:t}),(0,qt.jsx)(Wa,{size:i,children:Ya(n)}),(0,qt.jsx)(Ha,{size:i,children:t})]}),(0,qt.jsx)(Ua,{})]})})},Qa=(Bo.div`
  position: relative;
  display: inline-block;
`,Bo.div`
  position: absolute;
  top: ${e=>-2*e.index}px;
  left: ${e=>-1*e.index}px;
  transform: rotate(${e=>2*(e.index-1)}deg);
  z-index: ${e=>10-e.index};
`,Bo.div`
  display: flex;
  gap: ${e=>"large"===e.size?"-30px":"medium"===e.size?"-20px":"-15px"};
  padding: 20px;
  align-items: center;
  justify-content: center;
  
  & > *:hover {
    z-index: 100;
    position: relative;
  }
`),Ga=e=>{let{cards:t,size:n="medium",interactive:r=!1,playableCards:o=[],onCardClick:i}=e;return(0,qt.jsx)(Qa,{size:n,children:t.map((e,a)=>(0,qt.jsx)(Ka,{rank:e.rank,suit:e.suit,id:e.id,size:n,interactive:r,isPlayable:o.some(t=>t.rank===e.rank&&t.suit===e.suit),onClick:i,style:{transform:`rotate(${8*(a-(t.length-1)/2)}deg)`,zIndex:a}},e.id||`${e.rank}-${e.suit}-${a}`))})},Xa=Ka,Ja=Wo`
  0% { transform: rotateY(0deg); }
  50% { transform: rotateY(90deg); }
  100% { transform: rotateY(180deg); }
`,Za=Wo`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
`,el=Wo`
  0%, 100% { box-shadow: 0 0 15px rgba(255, 215, 0, 0.4); }
  50% { box-shadow: 0 0 25px rgba(255, 215, 0, 0.7), 0 0 35px rgba(255, 215, 0, 0.3); }
`,tl=Wo`
  0%, 100% { opacity: 0; transform: rotate(0deg) scale(0.5); }
  50% { opacity: 1; transform: rotate(180deg) scale(1); }
`,nl=Bo.div`
  width: ${e=>"large"===e.size?"60px":"medium"===e.size?"40px":"30px"};
  height: ${e=>"large"===e.size?"60px":"medium"===e.size?"40px":"30px"};
  position: relative;
  cursor: ${e=>e.interactive?"pointer":"default"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${e=>e.isFloating&&Mo`
    animation: ${Za} 2s ease-in-out infinite;
  `}
  
  ${e=>e.isFlipping&&Mo`
    animation: ${Ja} 0.8s ease-in-out;
  `}
  
  ${e=>e.interactive&&Mo`
    &:hover {
      transform: scale(1.1);
      animation: ${el} 1.5s ease-in-out infinite;
    }
  `}
`,rl=Bo.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  background: ${e=>{switch(e.type){case"gold":default:return"linear-gradient(45deg, #ffd700 0%, #ffed4e 30%, #ffc107 70%, #ff8f00 100%)";case"silver":return"linear-gradient(45deg, #c0c0c0 0%, #e8e8e8 30%, #d3d3d3 70%, #a8a8a8 100%)";case"bronze":return"linear-gradient(45deg, #cd7f32 0%, #d4a574 30%, #b87333 70%, #996515 100%)"}}};
  border: 3px solid ${e=>{switch(e.type){case"gold":default:return"#b8860b";case"silver":return"#999999";case"bronze":return"#8b4513"}}};
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.3),
    inset 0 2px 5px rgba(255, 255, 255, 0.3),
    inset 0 -2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  color: ${e=>{switch(e.type){case"gold":default:return"#8b6914";case"silver":return"#555555";case"bronze":return"#5d2f0a"}}};
  font-size: ${e=>"large"===e.size?"20px":"medium"===e.size?"14px":"10px"};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 10%;
    left: 10%;
    width: 30%;
    height: 30%;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 100%
    );
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 40%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 60%
    );
    ${Mo`animation: ${tl} 3s ease-in-out infinite;`}
  }
`,ol=Bo.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;
`,il=Bo.div`
  font-size: ${e=>"large"===e.size?"24px":"medium"===e.size?"16px":"12px"};
  margin-bottom: ${e=>"large"===e.size?"2px":"1px"};
`,al=Bo.div`
  font-size: ${e=>"large"===e.size?"12px":"medium"===e.size?"10px":"8px"};
  opacity: 0.8;
`,ll=Bo.div`
  position: relative;
  display: inline-block;
`,sl=Bo.div`
  position: absolute;
  top: ${e=>-3*e.index}px;
  left: ${e=>-1*e.index}px;
  z-index: ${e=>10-e.index};
  transform: rotate(${e=>5*e.index}deg);
`,ul=Bo.div`
  position: absolute;
  top: -8px;
  right: -8px;
  background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
  border: 2px solid white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  z-index: 100;
`,cl=e=>{let{type:t="gold",value:n=1,size:r="medium",interactive:o=!1,isFloating:i=!1,isFlipping:a=!1,onClick:l,showValue:s=!0}=e;return(0,qt.jsx)(nl,{size:r,interactive:o,isFloating:i,isFlipping:a,onClick:()=>{o&&l&&l({type:t,value:n})},children:(0,qt.jsx)(rl,{type:t,size:r,children:(0,qt.jsxs)(ol,{size:r,children:[(0,qt.jsx)(il,{size:r,children:(()=>{switch(t){case"gold":default:return"$";case"silver":return"\xa2";case"bronze":return"\u220e"}})()}),s&&(0,qt.jsx)(al,{size:r,children:n})]})})})},dl=e=>{let{coins:t,size:n="medium",maxVisible:r=5,showCount:o=!0}=e;const i=t.slice(0,r),a=Math.max(0,t.length-r);return(0,qt.jsxs)(ll,{children:[i.map((e,t)=>(0,qt.jsx)(sl,{index:t,children:(0,qt.jsx)(cl,{type:e.type,value:e.value,size:n,showValue:0===t})},t)),o&&a>0&&(0,qt.jsxs)(ul,{children:["+",a]})]})},fl=Bo.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  border: 2px solid rgba(255, 215, 0, 0.2);
  backdrop-filter: blur(5px);
`,pl=Bo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,hl=Bo.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,gl=e=>{let{coins:t,size:n="medium",interactive:r=!1,onCoinClick:o,groupByType:i=!0}=e;if(i){const e=t.reduce((e,t)=>(e[t.type]||(e[t.type]=[]),e[t.type].push(t),e),{});return(0,qt.jsx)(fl,{children:Object.entries(e).map(e=>{let[t,r]=e;return(0,qt.jsxs)(pl,{children:[(0,qt.jsx)(hl,{children:t}),(0,qt.jsx)(dl,{coins:r,size:n,maxVisible:3})]},t)})})}return(0,qt.jsx)(fl,{children:t.map((e,t)=>(0,qt.jsx)(cl,{type:e.type,value:e.value,size:n,interactive:r,onClick:o,isFloating:r},t))})},ml=Wo`
  0% { transform: translateX(-2px) translateY(-1px); }
  50% { transform: translateX(2px) translateY(1px); }
  100% { transform: translateX(-2px) translateY(-1px); }
`,vl=Wo`
  0%, 100% { box-shadow: 0 0 10px rgba(255, 165, 0, 0.3); }
  50% { box-shadow: 0 0 20px rgba(255, 165, 0, 0.6), 0 0 30px rgba(255, 165, 0, 0.2); }
`,bl=Wo`
  0%, 100% { 
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.6),
               0 0 30px rgba(255, 215, 0, 0.3),
               inset 0 0 10px rgba(255, 215, 0, 0.2);
  }
  50% { 
    box-shadow: 0 0 25px rgba(255, 215, 0, 0.8),
               0 0 50px rgba(255, 215, 0, 0.5),
               inset 0 0 15px rgba(255, 215, 0, 0.4);
  }
`,yl=Bo.div`
  width: 100%;
  height: 600px;
  position: relative;
  background: 
    radial-gradient(circle at 25% 25%, rgba(0, 212, 255, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(255, 56, 56, 0.08) 0%, transparent 50%),
    linear-gradient(135deg, #0f0f23 0%, #1a1a3a 50%, #1e2139 100%);
  border-radius: 20px;
  border: 3px solid rgba(0, 212, 255, 0.4);
  overflow: hidden;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.2);
  cursor: ${e=>e.panEnabled?"grab":"default"};
  
  &:active {
    cursor: ${e=>e.panEnabled?"grabbing":"default"};
  }
`,xl=Bo.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  transform-origin: center center;
  transition: ${e=>e.animating?"transform 1s cubic-bezier(0.4, 0, 0.2, 1)":"none"};
  transform: ${e=>`translate(${e.panX}px, ${e.panY}px) scale(${e.zoom})`};
`,wl=Bo.svg`
  width: 1000px;
  height: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: visible;
`,kl=Bo.ellipse`
  fill: #1a1a2e;
  stroke: rgba(0, 212, 255, 0.2);
  stroke-width: 2;
`,Sl=Bo.ellipse`
  fill: none;
  stroke: #2a2a3e;
  stroke-width: ${e=>e.width||80};
`,_l=Bo.ellipse`
  fill: none;
  stroke: rgba(255, 255, 255, 0.15);
  stroke-width: 1;
  stroke-dasharray: 8, 8;
`,El=Bo.rect`
  fill: url(#startFinishGradient);
  stroke: white;
  stroke-width: 1;
`,Cl=Bo.rect`
  fill: rgba(255, 165, 0, 0.15);
  stroke: #ffa500;
  stroke-width: 1;
  rx: 3;
  ${Mo`animation: ${vl} 4s ease-in-out infinite;`}
`,jl=Bo.rect`
  fill: rgba(255, 165, 0, 0.1);
  stroke: rgba(255, 165, 0, 0.5);
  stroke-width: 1;
  stroke-dasharray: 4, 4;
  rx: 2;
`,Rl=Bo.circle`
  fill: ${e=>e.highlighted?"rgba(255, 215, 0, 0.3)":"rgba(255, 255, 255, 0.1)"};
  stroke: ${e=>e.highlighted?"#ffd700":"rgba(255, 255, 255, 0.3)"};
  stroke-width: ${e=>e.highlighted?2:1};
  cursor: ${e=>e.selectable?"pointer":"default"};
  transition: all 0.3s ease;
  
  ${e=>e.highlighted&&Mo`
    animation: ${bl} 2s ease-in-out infinite;
  `}
  
  &:hover {
    fill: ${e=>e.selectable?"rgba(255, 215, 0, 0.5)":e.highlighted?"rgba(255, 215, 0, 0.3)":"rgba(255, 255, 255, 0.1)"};
    stroke-width: ${e=>e.selectable?3:e.highlighted?2:1};
  }
`,Ol=Bo.div`
  position: absolute;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: linear-gradient(135deg, ${e=>e.color||"#00d4ff"}, ${e=>e.color||"#00d4ff"}cc);
  border: 2px solid white;
  box-shadow: 
    0 3px 8px rgba(0, 0, 0, 0.4),
    0 0 0 1px ${e=>e.color||"#00d4ff"},
    0 0 15px ${e=>e.color||"#00d4ff"}60;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Rajdhani', sans-serif;
  font-weight: bold;
  font-size: 11px;
  color: ${e=>["#ffd700","#ff8c00","#ff69b4"].includes(e.color)?"#000":"#fff"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 100;
  transform-origin: center center;
  
  ${e=>e.isMoving&&Mo`
    animation: ${ml} 0.4s ease-in-out;
  `}
  
  ${e=>e.isActive&&Mo`
    transform: scale(1.2);
    box-shadow: 
      0 5px 15px rgba(0, 0, 0, 0.5),
      0 0 0 2px ${e.color||"#00d4ff"},
      0 0 25px ${e.color||"#00d4ff"}80;
  `}
`,Pl=Bo.div`
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${e=>e.faceUp?"linear-gradient(135deg, #ffd700, #ffed4e)":"linear-gradient(135deg, #8b4513, #a0522d)"};
  border: 1px solid ${e=>e.faceUp?"#e6c200":"#654321"};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  font-size: 8px;
  color: ${e=>e.faceUp?"#8b4513":"#fff"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  z-index: 50;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.2);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  }
`,Tl=Bo.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 200;
`,zl=Bo.button`
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid rgba(0, 212, 255, 0.5);
  border-radius: 8px;
  color: white;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    background: rgba(0, 212, 255, 0.2);
    border-color: rgba(0, 212, 255, 0.8);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Nl=Bo.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.9);
  border: 2px solid rgba(0, 212, 255, 0.5);
  border-radius: 15px;
  padding: 15px 20px;
  color: white;
  font-family: 'Orbitron', monospace;
  z-index: 200;
  
  .title {
    font-size: 14px;
    font-weight: bold;
    color: #00d4ff;
    margin-bottom: 8px;
  }
  
  .info {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 4px;
  }
`,Ll=e=>{var t;let{players:n=[],currentLap:o=1,totalLaps:i=3,playerPositions:a={},placedCoins:l={},activePlayerId:s=null,stage:u="racing",onLaneSelect:c=null,onCoinPlace:d=null,panZoomEnabled:f=!0,focusOnPolePosition:p=!1,showPositionNumbers:h=!1}=e;const[g,m]=(0,r.useState)(0),[v,b]=(0,r.useState)(0),[y,x]=(0,r.useState)(1),[w,k]=(0,r.useState)(!1),[S,_]=(0,r.useState)({x:0,y:0}),[E,C]=(0,r.useState)(!1),j=(0,r.useRef)(),R={yellow:"#ffd700",orange:"#ff8c00",red:"#ff3838",pink:"#ff69b4",purple:"#9b59b6",blue:"#00d4ff",green:"#00ff88",black:"#2c3e50"},O=(0,r.useCallback)(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const n={1:200,2:220,3:240,4:260},r=-((e-1)/96*2*Math.PI)+Math.PI/2,o=n[t]||n[1],i=.6*o;return{x:500+o*Math.cos(r),y:400+i*Math.sin(r)}},[]),P=function(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?{x:750+8*(e-1),y:380+15*e}:{x:700,y:380+20*e}};(0,r.useEffect)(()=>{if(p&&"lane-selection"===u){var e;const t=O(96,1),n=null===(e=j.current)||void 0===e?void 0:e.getBoundingClientRect();n&&(C(!0),m(n.width/2-t.x),b(n.height/2-t.y),x(2),setTimeout(()=>C(!1),1e3))}else p||(C(!0),m(0),b(0),x(1),setTimeout(()=>C(!1),1e3))},[p,u,O]);const T=()=>{k(!1)};return(0,qt.jsxs)(yl,{ref:j,panEnabled:f,onMouseDown:e=>{f&&(k(!0),_({x:e.clientX,y:e.clientY}))},onMouseMove:e=>{if(!w||!f)return;const t=e.clientX-S.x,n=e.clientY-S.y;m(e=>e+t),b(e=>e+n),_({x:e.clientX,y:e.clientY})},onMouseUp:T,onMouseLeave:T,onWheel:e=>{if(!f)return;e.preventDefault();const t=e.deltaY>0?.9:1.1;x(e=>Math.max(.5,Math.min(3,e*t)))},children:[(0,qt.jsxs)(xl,{panX:g,panY:v,zoom:y,animating:E,children:[(0,qt.jsxs)(wl,{viewBox:"0 0 1000 800",children:[(0,qt.jsxs)("defs",{children:[(0,qt.jsxs)("linearGradient",{id:"startFinishGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[(0,qt.jsx)("stop",{offset:"0%",stopColor:"#ff0000"}),(0,qt.jsx)("stop",{offset:"20%",stopColor:"#ffffff"}),(0,qt.jsx)("stop",{offset:"40%",stopColor:"#ff0000"}),(0,qt.jsx)("stop",{offset:"60%",stopColor:"#ffffff"}),(0,qt.jsx)("stop",{offset:"80%",stopColor:"#ff0000"}),(0,qt.jsx)("stop",{offset:"100%",stopColor:"#ffffff"})]}),(0,qt.jsxs)("filter",{id:"glow",children:[(0,qt.jsx)("feGaussianBlur",{stdDeviation:"3",result:"coloredBlur"}),(0,qt.jsxs)("feMerge",{children:[(0,qt.jsx)("feMergeNode",{in:"coloredBlur"}),(0,qt.jsx)("feMergeNode",{in:"SourceGraphic"})]})]})]}),(0,qt.jsx)(kl,{cx:"500",cy:"400",rx:"280",ry:"170"}),(0,qt.jsx)(Sl,{cx:"500",cy:"400",rx:"200",ry:"120",width:"20"}),(0,qt.jsx)(Sl,{cx:"500",cy:"400",rx:"220",ry:"132",width:"20"}),(0,qt.jsx)(Sl,{cx:"500",cy:"400",rx:"240",ry:"144",width:"20"}),(0,qt.jsx)(Sl,{cx:"500",cy:"400",rx:"260",ry:"156",width:"20"}),(0,qt.jsx)(_l,{cx:"500",cy:"400",rx:"210",ry:"126"}),(0,qt.jsx)(_l,{cx:"500",cy:"400",rx:"230",ry:"138"}),(0,qt.jsx)(_l,{cx:"500",cy:"400",rx:"250",ry:"150"}),(0,qt.jsx)(El,{x:O(96,1).x-2,y:O(96,1).y-30,width:"4",height:"60"}),(0,qt.jsx)(Cl,{x:"680",y:"350",width:"60",height:"100"}),(0,qt.jsx)(jl,{x:"750",y:"380",width:"40",height:"120"}),"coin"===u&&Array.from({length:24},(e,t)=>{const n=4*t+1;return[1,2,3,4].map(e=>{const t=O(n,e);return(0,qt.jsx)("circle",{cx:t.x,cy:t.y,r:"20",fill:"transparent",stroke:"rgba(255, 215, 0, 0.2)",strokeWidth:"1",strokeDasharray:"3, 3",style:{cursor:"pointer"},onClick:()=>d&&d(n,e),onMouseEnter:e=>{e.target.setAttribute("stroke","rgba(255, 215, 0, 0.8)"),e.target.setAttribute("fill","rgba(255, 215, 0, 0.1)")},onMouseLeave:e=>{e.target.setAttribute("stroke","rgba(255, 215, 0, 0.2)"),e.target.setAttribute("fill","transparent")}},`clickable-${n}-${e}`)})}),"lane-selection"===u&&[1,2,3,4].map(e=>{const t=O(96,e);return(0,qt.jsx)(Rl,{cx:t.x,cy:t.y,r:"12",highlighted:!0,selectable:!0,onClick:()=>c&&c(e)},`lane-${e}`)}),h&&Array.from({length:24},(e,t)=>{const n=4*t+1,r=O(n,1);return(0,qt.jsxs)("g",{children:[(0,qt.jsx)("circle",{cx:r.x,cy:r.y,r:"8",fill:"rgba(255, 255, 255, 0.1)",stroke:"rgba(255, 255, 255, 0.3)",strokeWidth:"1"}),(0,qt.jsx)("text",{x:r.x,y:r.y+2,textAnchor:"middle",fontSize:"8",fill:"rgba(255, 255, 255, 0.7)",fontFamily:"Rajdhani, sans-serif",fontWeight:"bold",children:n})]},`pos-${n}`)})]}),Object.entries(l).map(e=>{let[t,n]=e;const[r,o]=t.split("-").map(Number),i=O(r,o);return(0,qt.jsx)(Pl,{faceUp:n.placedBy===s,style:{left:i.x-8+"px",top:i.y-8+"px"},title:n.placedBy===s?n.value:"Hidden coin",children:n.placedBy===s?n.value.charAt(0):"?"},t)}),n.map(e=>{const t=a[e.id];if(!t)return null;let n;return n=t.inPit?P(t.position||1,!1):t.inPitLane?P(t.position||1,!0):O(t.position||96,t.lane||1),(0,qt.jsx)(Ol,{color:R[e.color],isActive:e.id===s,style:{left:n.x-14+"px",top:n.y-14+"px"},title:`${e.name} - Lap ${t.lap||0}`,children:(r=e.name,r.split(" ").map(e=>e[0]).join("").toUpperCase().slice(0,2))},e.id);var r})]}),f&&(0,qt.jsxs)(Tl,{children:[(0,qt.jsx)(zl,{onClick:()=>{C(!0),m(0),b(0),x(1),setTimeout(()=>C(!1),500)},children:"Reset View"}),(0,qt.jsx)(zl,{onClick:()=>x(e=>Math.min(3,1.2*e)),children:"Zoom In"}),(0,qt.jsx)(zl,{onClick:()=>x(e=>Math.max(.5,.8*e)),children:"Zoom Out"})]}),(0,qt.jsxs)(Nl,{children:[(0,qt.jsxs)("div",{className:"title",children:["lane-selection"===u&&"Lane Selection","coin"===u&&"Coin Placement","racing"===u&&`Lap ${o}/${i}`]}),"lane-selection"===u&&(0,qt.jsx)("div",{className:"info",children:"Select your starting lane"}),"coin"===u&&(0,qt.jsx)("div",{className:"info",children:"Place coins strategically"}),"racing"===u&&(0,qt.jsxs)(qt.Fragment,{children:[(0,qt.jsxs)("div",{className:"info",children:["Players: ",n.length]}),(0,qt.jsxs)("div",{className:"info",children:["Active: ",(null===(t=n.find(e=>e.id===s))||void 0===t?void 0:t.name)||"None"]})]})]})]})},Al=Wo`
  0% { transform: rotateX(0deg) rotateY(0deg); }
  25% { transform: rotateX(90deg) rotateY(0deg); }
  50% { transform: rotateX(180deg) rotateY(90deg); }
  75% { transform: rotateX(270deg) rotateY(180deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
`,Dl=Wo`
  0%, 100% { box-shadow: 0 0 15px rgba(255, 255, 255, 0.3); }
  50% { box-shadow: 0 0 25px rgba(255, 255, 255, 0.6), 0 0 35px rgba(255, 255, 255, 0.2); }
`,$l=Wo`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`,Il=(Bo.div`
  perspective: 200px;
  display: inline-block;
  margin: 10px;
`,Bo.div`
  width: ${e=>"large"===e.size?"80px":"medium"===e.size?"60px":"40px"};
  height: ${e=>"large"===e.size?"80px":"medium"===e.size?"60px":"40px"};
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: ${e=>e.interactive?"pointer":"default"};
  
  ${e=>e.isRolling&&Mo`
    animation: ${Al} 1s ease-in-out;
  `}
  
  ${e=>e.interactive&&Mo`
    &:hover {
      animation: ${$l} 0.5s ease-in-out;
    }
  `}
  
  ${e=>e.isGlowing&&Mo`
    animation: ${Dl} 2s ease-in-out infinite;
  `}
`,Bo.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%);
  border: 2px solid #333;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.3),
    inset 0 2px 5px rgba(255, 255, 255, 0.5);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.3) 0%,
      transparent 50%,
      rgba(0, 0, 0, 0.1) 100%
    );
    border-radius: 6px;
    pointer-events: none;
  }
`),Ml=(Bo(Il)`
  transform: rotateY(0deg) translateZ(${e=>"large"===e.size?"40px":"medium"===e.size?"30px":"20px"});
`,Bo(Il)`
  transform: rotateY(180deg) translateZ(${e=>"large"===e.size?"40px":"medium"===e.size?"30px":"20px"});
`,Bo(Il)`
  transform: rotateY(90deg) translateZ(${e=>"large"===e.size?"40px":"medium"===e.size?"30px":"20px"});
`,Bo(Il)`
  transform: rotateY(-90deg) translateZ(${e=>"large"===e.size?"40px":"medium"===e.size?"30px":"20px"});
`,Bo(Il)`
  transform: rotateX(90deg) translateZ(${e=>"large"===e.size?"40px":"medium"===e.size?"30px":"20px"});
`,Bo(Il)`
  transform: rotateX(-90deg) translateZ(${e=>"large"===e.size?"40px":"medium"===e.size?"30px":"20px"});
`,Bo.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2px;
  padding: 8px;
  position: relative;
  z-index: 2;
`,Bo.div`
  width: ${e=>"large"===e.size?"8px":"medium"===e.size?"6px":"4px"};
  height: ${e=>"large"===e.size?"8px":"medium"===e.size?"6px":"4px"};
  border-radius: 50%;
  background: #333;
  justify-self: center;
  align-self: center;
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(0, 0, 0, 0.1);
`,Bo.div`
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: ${e=>"large"===e.size?"32px":"medium"===e.size?"24px":"16px"};
  color: #333;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
`,Bo.button`
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(45deg, #00d4ff, #0099cc);
  color: white;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 1rem;
  
  &:hover:not(:disabled) {
    background: linear-gradient(45deg, #0099cc, #00d4ff);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 212, 255, 0.4);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`,Bo.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  margin-top: 1rem;
`,Bo.div`
  color: white;
  font-family: 'Rajdhani', sans-serif;
  font-size: 18px;
  font-weight: 600;
`,Bo.div`
  font-family: 'Orbitron', monospace;
  font-size: 24px;
  font-weight: bold;
  color: #ffd700;
  text-shadow: 0 0 10px #ffd700;
`,Wo`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`),Fl=Wo`
  0% { transform: translateX(100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`,Ul=Wo`
  0%, 100% { box-shadow: 0 0 10px rgba(0, 212, 255, 0.3); }
  50% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.6), 0 0 30px rgba(0, 212, 255, 0.2); }
`,Bl=(Wo`
  0% { 
    transform: scale(1.3) translateY(0px) rotate(0deg); 
    filter: drop-shadow(0 10px 20px rgba(0, 212, 255, 0.5));
  }
  50% { 
    transform: scale(1.4) translateY(-10px) rotate(5deg); 
    filter: drop-shadow(0 15px 25px rgba(0, 212, 255, 0.7));
  }
  100% { 
    transform: scale(1.3) translateY(0px) rotate(0deg); 
    filter: drop-shadow(0 10px 20px rgba(0, 212, 255, 0.5));
  }
`,Wo`
  0% { 
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% { 
    transform: translate(-50%, -50%) translateY(300px) scale(0.7);
    opacity: 0.8;
  }
`,Wo`
  0% { 
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% { 
    transform: translate(-50%, -50%) translateX(400px) scale(0.7);
    opacity: 0.8;
  }
`,Wo`
  0% { 
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% { 
    transform: translate(-50%, -50%) translateY(-300px) scale(0.7);
    opacity: 0.8;
  }
`,Wo`
  0% { 
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% { 
    transform: translate(-50%, -50%) translateX(-400px) scale(0.7);
    opacity: 0.8;
  }
`,Bo.div`
  min-height: 100vh;
  padding-top: 140px; /* Account for fixed header */
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  background: 
    radial-gradient(circle at 20% 30%, rgba(0, 212, 255, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(255, 56, 56, 0.05) 0%, transparent 50%),
    linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
  ${Mo`animation: ${Ml} 0.8s ease-out;`}
`),Wl=Bo.div`
  max-width: 1400px;
  margin: 0 auto;
  ${Mo`animation: ${Ml} 0.6s ease-out;`}
`,Hl=Bo.h1`
  font-family: 'Orbitron', monospace;
  font-size: 2.5rem;
  color: #00d4ff;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 
    0 0 20px #00d4ff,
    0 0 40px rgba(0, 212, 255, 0.5);
  ${Mo`animation: ${Ul} 3s ease-in-out infinite;`}
`,Vl=Bo.p`
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`,Yl=Bo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`,ql=Bo.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 2px solid rgba(0, 212, 255, 0.3);
  border-radius: 20px;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1000px;
  min-height: 400px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  margin: 0 auto;
`,Kl=Bo.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 5px; /* Add padding to prevent overlap */
  box-sizing: border-box;
`,Ql=Bo.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 1.5rem 2rem;
  border-radius: 15px;
  border: 2px solid rgba(255, 215, 0, 0.5);
  color: white;
  text-align: center;
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  ${Mo`animation: ${Fl} 0.5s ease-out;`}
`,Gl=Bo.div`
  position: absolute;
  top: -30px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  pointer-events: none;
`,Xl=Bo.div`
  color: ${e=>e.color||"#fff"};
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px ${e=>e.color||"#fff"};
`,Jl=Bo.div`
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  color: #000;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: 0.8rem;
  text-transform: uppercase;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
  animation: ${Fl} 0.5s ease-out, pulse 2s infinite;
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`,Zl=Bo.div`
  animation: winnerGlow 3s ease-in-out;
  transform-origin: center;
  
  @keyframes winnerGlow {
    0% { 
      transform: scale(1); 
      filter: brightness(1);
      box-shadow: 0 0 0 rgba(255, 215, 0, 0);
    }
    50% { 
      transform: scale(1.3); 
      filter: brightness(1.8) saturate(1.5);
      box-shadow: 0 0 50px rgba(255, 215, 0, 0.9), 0 0 100px rgba(255, 215, 0, 0.6);
    }
    100% { 
      transform: scale(1.1); 
      filter: brightness(1.4) saturate(1.2);
      box-shadow: 0 0 30px rgba(255, 215, 0, 0.8), 0 0 60px rgba(255, 215, 0, 0.4);
    }
  }
`,es=Bo.div`
  perspective: 1000px;
  width: 80px; /* Fixed width to match medium card size */
  height: 112px; /* Fixed height to match medium card size */
  min-height: 112px;
  position: relative;
  box-sizing: border-box;
`,ts=Bo.div`
  position: relative;
  width: 80px; /* Fixed width to match medium card size */
  height: 112px; /* Fixed height to match medium card size */
  min-height: 112px;
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform-style: preserve-3d;
  transform: ${e=>e.isFlipped?"rotateY(180deg)":"rotateY(0deg)"};
  box-sizing: border-box;
`,ns=Bo.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
`,rs=Bo(ns)`
  transform: rotateY(0deg);
`,os=Bo(ns)`
  transform: rotateY(180deg);
`,is=Bo.button`
  padding: 20px 40px;
  background: linear-gradient(45deg, #00ff88, #00d4ff);
  border: none;
  border-radius: 15px;
  color: #000;
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(0, 255, 136, 0.4);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 255, 136, 0.6);
    background: linear-gradient(45deg, #00d4ff, #00ff88);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`,as=Bo.div`
  background: rgba(0, 0, 0, 0.9);
  padding: 2rem;
  border-radius: 20px;
  border: 3px solid #ffd700;
  text-align: center;
  box-shadow: 0 0 50px rgba(255, 215, 0, 0.6);
  
  h3 {
    color: #ffd700;
    font-family: 'Orbitron', monospace;
    font-size: 1.8rem;
    margin: 0 0 1rem 0;
    text-shadow: 0 0 20px #ffd700;
  }
  
  p {
    color: white;
    font-family: 'Rajdhani', sans-serif;
    font-size: 1.2rem;
    margin: 0 0 2rem 0;
  }
`,ls=(Bo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  border: 2px solid rgba(255, 215, 0, 0.4);
  
  h4 {
    color: #ffd700;
    font-size: 1.2rem;
    margin: 0;
  }
`,Bo.div`
  color: #ffd700;
  font-size: 1.4rem;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`,Bo.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0;
  flex-wrap: wrap;
`),ss=Bo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.2);
`,us=Bo.div`
  color: ${e=>"black"===e.color?"white":e.color};
  font-weight: bold;
  font-size: 0.9rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`,cs=Bo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffd700;
  font-weight: bold;
  text-align: center;
  
  span {
    font-size: 0.8rem;
    margin-bottom: 0.25rem;
  }
  
  small {
    font-size: 0.7rem;
    opacity: 0.8;
  }
`,ds=Bo.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  animation: ${Ml} 0.6s ease-out;
  position: relative;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,fs=Bo.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,ps=Bo.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 2px solid rgba(0, 212, 255, 0.3);
  border-radius: 20px;
  padding: 2rem;
  min-height: 200px;
`,hs=(Bo.div`
  margin-bottom: 1rem;
  text-align: center;
`,Bo.div`
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 1rem;
`),gs=(Bo.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Bo.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1.5rem;
`),ms=Bo.h3`
  font-family: 'Orbitron', monospace;
  color: #00d4ff;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`,vs=Bo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`,bs=Bo.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 800px;
  width: 100%;
`,ys=Bo.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 3px solid ${e=>e.selected?"#00d4ff":"rgba(255, 255, 255, 0.2)"};
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #00d4ff;
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
  }
  
  ${e=>e.selected&&Mo`
    background: rgba(0, 212, 255, 0.1);
    animation: ${Ul} 2s ease-in-out infinite;
  `}
`,xs=Bo.div`
  font-family: 'Orbitron', monospace;
  font-size: 3rem;
  font-weight: bold;
  color: #00d4ff;
  margin-bottom: 1rem;
  text-shadow: 0 0 20px #00d4ff;
`,ws=Bo.div`
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.1rem;
  line-height: 1.4;
`,ks=Bo.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,Ss=Bo.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 2px solid rgba(255, 215, 0, 0.3);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  justify-content: center;
  min-height: 300px;
`,_s=Bo.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,Es=(Bo.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`,Bo.button`
  padding: 15px 30px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(45deg, #00d4ff, #0099cc);
  color: white;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover:not(:disabled) {
    background: linear-gradient(45deg, #0099cc, #00d4ff);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 212, 255, 0.4);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`),Cs=(Bo.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  border: 2px solid rgba(255, 255, 255, 0.2);
`,Bo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  
  h3 {
    color: #ffd700;
    margin: 0;
    font-size: 1.5rem;
  }
`),js=Bo.button`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 200px;
  
  &:hover {
    background: linear-gradient(135deg, #00b8e6, #007399);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  strong {
    font-size: 1.2rem;
  }
  
  small {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.8rem;
  }
`,Rs=Bo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  
  h3 {
    color: #ffd700;
    margin: 0;
    font-size: 1.5rem;
  }
  
  p {
    color: #fff;
    margin: 0;
    font-size: 1rem;
    text-transform: capitalize;
  }
`,Os=Bo.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  animation: ${Ml} 0.3s ease-out;
`,Ps=Bo.div`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%);
  border: 3px solid #ffd700;
  border-radius: 20px;
  padding: 3rem;
  min-width: 500px;
  max-width: 600px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);

  h2 {
    color: #ffd700;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  }
`,Ts=Bo.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`,zs=Bo.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1.5rem;
  align-items: center;
  padding: 1rem 1.5rem;
  background: ${e=>1===e.$position?"linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)":2===e.$position?"linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 100%)":3===e.$position?"linear-gradient(135deg, #cd7f32 0%, #e6a85c 100%)":"linear-gradient(135deg, #4a4a4a 0%, #6a6a6a 100%)"};
  color: ${e=>e.$position<=3?"#000":"#fff"};
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.1rem;

  .position {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .player-name {
    text-align: left;
  }

  .card-count {
    font-size: 0.9rem;
    opacity: 0.8;
  }
`,Ns=Bo.div`
  color: #ffd700;
  font-size: 1.1rem;
  font-style: italic;
  opacity: 0.8;
`;const Ls=function(){var e,t,n,o;const{currentRoom:i,player:a,gameState:l,socket:s,leaveRoom:u,selectDealerCard:c,drawCards:d,playCard:f,stormResults:p,continueToNextStage:h,placeCoin:g,continueToRacing:m,selectLane:v,rollDice:b,chooseMovement:y}=Jt(),[x,w]=(0,r.useState)(null),[k,S]=(0,r.useState)([1,1]),[_,E]=(0,r.useState)(null),[C,j]=(0,r.useState)(null),[R,O]=(0,r.useState)(null),P=(null===i||void 0===i||null===(e=i.gameState)||void 0===e?void 0:e.currentStage)||"lobby",T=(null===i||void 0===i?void 0:i.players)||[],z=T.map(e=>{var t;return{...e,cardCount:e.cardCount||(null===(t=e.cards)||void 0===t?void 0:t.length)||0}}),N=(null===i||void 0===i||null===(t=i.host)||void 0===t?void 0:t.id)===(null===a||void 0===a?void 0:a.id),L=(null===a||void 0===a?void 0:a.drawnCoins)||[],A=(null===a||void 0===a||a.id,function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"movement";S(e),b(t),console.log("Dice rolled:",e,"type:",t)});return(0,qt.jsxs)(Bl,{children:[(0,qt.jsx)(La,{players:z,currentPlayer:null===i||void 0===i||null===(n=i.gameState)||void 0===n?void 0:n.currentPlayer,gameStage:P}),(0,qt.jsx)(Wl,{children:(()=>{var e,t,n,r,o,l,c,p,b,k,S,z,D,$,I,M,F,U,B,W,H,V,Y,q,K,Q,G,X,J,Z,ee,te,ne,re,oe,ie,ae,le,se,ue,ce,de,fe,pe,he,ge,me,ve,be,ye,xe,we,ke,Se;switch(P){case"dealer-selection":const P=(null===i||void 0===i||null===(e=i.gameState)||void 0===e?void 0:e.dealerSelectionCards)||[],Ee=((null===i||void 0===i||null===(t=i.gameState)||void 0===t?void 0:t.selectedDealerCards)||new Map,null===i||void 0===i||null===(n=i.players)||void 0===n?void 0:n.find(e=>e.dealerButton)),Ce=null===i||void 0===i||null===(r=i.players)||void 0===r?void 0:r.every(e=>null!==e.selectedDealerCard);return(0,qt.jsxs)(Yl,{children:[(0,qt.jsx)(Hl,{children:"Dealer Selection"}),(0,qt.jsx)(Vl,{children:"Players take turns selecting one face-down card. The player with the lowest card becomes the first dealer."}),(0,qt.jsx)(ql,{children:P.map((e,t)=>{var n,r,o;const l=e.selected,u=e.selectedBy,c=u?null===i||void 0===i||null===(n=i.players)||void 0===n?void 0:n.find(e=>e.id===u):null,d=Ee&&u===Ee.id;return(0,qt.jsxs)(Kl,{children:[(0,qt.jsx)(es,{children:(0,qt.jsxs)(ts,{isFlipped:l,children:[(0,qt.jsx)(rs,{children:(0,qt.jsx)(Xa,{isBack:!0,size:"medium",interactive:!l&&(null===i||void 0===i||null===(r=i.gameState)||void 0===r?void 0:r.currentPlayer)===(null===a||void 0===a?void 0:a.id),isPlayable:!l&&(null===i||void 0===i||null===(o=i.gameState)||void 0===o?void 0:o.currentPlayer)===(null===a||void 0===a?void 0:a.id),onClick:()=>!l&&(e=>{var t;(null===i||void 0===i||null===(t=i.gameState)||void 0===t?void 0:t.currentPlayer)===(null===a||void 0===a?void 0:a.id)&&s&&s.emit("select-dealer-card",{cardIndex:e})})(t)})}),(0,qt.jsx)(os,{children:d?(0,qt.jsx)(Zl,{children:(0,qt.jsx)(Xa,{rank:e.rank,suit:e.suit,size:"medium",interactive:!1})}):(0,qt.jsx)(Xa,{rank:e.rank,suit:e.suit,size:"medium",interactive:!1})})]})}),l&&c&&(0,qt.jsxs)(Gl,{children:[(0,qt.jsx)(Xl,{color:"black"===c.color?"#fff":c.color,children:c.name}),d&&(0,qt.jsx)(Jl,{children:"DEALER"})]})]},t)})}),Ee&&Ce?(0,qt.jsxs)(as,{children:[(0,qt.jsx)("h3",{children:"\ud83c\udfc6 Dealer Selection Results"}),(0,qt.jsx)(ls,{children:null===i||void 0===i||null===(o=i.players)||void 0===o?void 0:o.map((e,t)=>e.selectedDealerCard&&(0,qt.jsxs)(ss,{children:[(0,qt.jsx)(us,{color:"black"===e.color?"white":e.color,children:e.name}),(0,qt.jsx)(Xa,{rank:e.selectedDealerCard.rank,suit:e.selectedDealerCard.suit,size:"medium",style:{boxShadow:e.dealerButton?"0 0 20px rgba(255, 215, 0, 0.8)":"none",border:e.dealerButton?"3px solid #ffd700":"none"}}),e.dealerButton&&(0,qt.jsxs)(cs,{children:[(0,qt.jsx)("span",{children:"\ud83c\udfc6 DEALER"}),(0,qt.jsx)("small",{children:"Lowest Card (7 low, Ace high)"})]})]},e.id))}),(0,qt.jsxs)("p",{style:{marginTop:"1.5rem",fontSize:"1.2rem"},children:[(0,qt.jsx)("strong",{children:Ee.name})," becomes the first dealer!"]}),(null===i||void 0===i||null===(l=i.host)||void 0===l?void 0:l.id)===(null===a||void 0===a?void 0:a.id)&&(0,qt.jsx)(is,{onClick:()=>null===s||void 0===s?void 0:s.emit("continue-to-storm"),children:"Continue to Storm Stage"}),(null===i||void 0===i||null===(c=i.host)||void 0===c?void 0:c.id)!==(null===a||void 0===a?void 0:a.id)&&(0,qt.jsx)("p",{style:{color:"#00d4ff",fontSize:"1rem"},children:"Waiting for host to continue..."})]}):(0,qt.jsx)(Ql,{children:(null===i||void 0===i||null===(p=i.gameState)||void 0===p?void 0:p.currentPlayer)===(null===a||void 0===a?void 0:a.id)?"Your turn - select a card!":`Waiting for ${(null===i||void 0===i||null===(b=i.players)||void 0===b||null===(k=b.find(e=>{var t;return e.id===(null===i||void 0===i||null===(t=i.gameState)||void 0===t?void 0:t.currentPlayer)}))||void 0===k?void 0:k.name)||"player"} to select a card...`})]});case"storm":if(null===i||void 0===i||null===(S=i.players)||void 0===S?void 0:S.every(e=>null!==e.stormFinishOrder)){var _e;const e=[...(null===i||void 0===i?void 0:i.players)||[]].sort((e,t)=>e.stormFinishOrder-t.stormFinishOrder);return(0,qt.jsx)(ds,{children:(0,qt.jsxs)(fs,{children:[(0,qt.jsx)(Hl,{children:"\ud83c\udfc6 Storm Results"}),(0,qt.jsxs)("div",{style:{background:"rgba(255,255,255,0.1)",borderRadius:"15px",padding:"2rem",margin:"2rem auto",maxWidth:"600px"},children:[(0,qt.jsx)("h3",{style:{color:"white",textAlign:"center",marginBottom:"1.5rem"},children:"Final Rankings"}),e.map((e,t)=>(0,qt.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"1rem",background:0===t?"rgba(255,215,0,0.2)":"rgba(255,255,255,0.05)",borderRadius:"10px",marginBottom:"0.5rem",border:0===t?"2px solid gold":"1px solid rgba(255,255,255,0.2)"},children:[(0,qt.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[(0,qt.jsx)("div",{style:{width:"30px",height:"30px",borderRadius:"50%",background:1===e.stormFinishOrder?"gold":2===e.stormFinishOrder?"silver":3===e.stormFinishOrder?"#cd7f32":"#666",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",color:"white"},children:e.stormFinishOrder}),(0,qt.jsx)("span",{style:{color:"white",fontSize:"1.1rem",fontWeight:"bold"},children:e.name})]}),(0,qt.jsx)("div",{style:{color:"#00d4ff",fontSize:"0.9rem"},children:1===e.stormFinishOrder?"\ud83c\udfc6 Winner!":2===e.stormFinishOrder?"\ud83e\udd48 Second Place":3===e.stormFinishOrder?"\ud83e\udd49 Third Place":"4th Place"})]},e.id))]}),null!==a&&void 0!==a&&a.isHost?(0,qt.jsx)("div",{style:{textAlign:"center",marginTop:"2rem"},children:(0,qt.jsxs)(is,{onClick:()=>{var e;console.log(`\ud83c\udfaf Continuing to next stage from Storm round ${null===i||void 0===i||null===(e=i.gameState)||void 0===e?void 0:e.stormRound}`),h()},children:["Continue to ",1===(null===i||void 0===i||null===(_e=i.gameState)||void 0===_e?void 0:_e.stormRound)?"Lane Selection":"Coin Stage"]})}):(0,qt.jsx)("div",{style:{textAlign:"center",marginTop:"2rem",color:"white"},children:(0,qt.jsx)("p",{children:"\ud83d\udd52 Waiting for host to continue..."})})]})})}return(0,qt.jsx)(ds,{children:(0,qt.jsxs)(fs,{children:[(0,qt.jsx)(Hl,{children:"Storm Stage"}),(0,qt.jsx)(ps,{children:(0,qt.jsxs)("div",{style:{display:"flex",gap:"4rem",alignItems:"flex-start",justifyContent:"center"},children:[(0,qt.jsxs)("div",{style:{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",position:"relative"},children:[(0,qt.jsx)("h4",{style:{color:"white",marginBottom:"1rem"},children:"Discard Pile"}),(0,qt.jsx)(Xa,{rank:(null===i||void 0===i||null===(z=i.gameState)||void 0===z||null===(D=z.topCard)||void 0===D?void 0:D.rank)||"8",suit:(null===i||void 0===i||null===($=i.gameState)||void 0===$||null===(I=$.topCard)||void 0===I?void 0:I.suit)||"spades",size:"large"}),"Q"===(null===i||void 0===i||null===(M=i.gameState)||void 0===M||null===(F=M.topCard)||void 0===F?void 0:F.rank)&&(null===i||void 0===i||null===(U=i.gameState)||void 0===U?void 0:U.currentSuit)&&(0,qt.jsxs)("div",{style:{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",pointerEvents:"none",zIndex:5},children:[(0,qt.jsxs)("div",{style:{position:"absolute",top:"8px",left:"8px",background:"rgba(255,255,255,0.9)",borderRadius:"4px",padding:"2px 6px",fontSize:"0.8rem",fontWeight:"bold",color:"#333"},children:["Q","hearts"===i.gameState.topCard.suit?"\u2665\ufe0f":"diamonds"===i.gameState.topCard.suit?"\u2666\ufe0f":"spades"===i.gameState.topCard.suit?"\u2660\ufe0f":"\u2663\ufe0f"]}),(0,qt.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"3rem",textShadow:"0 0 4px rgba(0,0,0,0.5)"},children:"hearts"===i.gameState.currentSuit?"\u2665\ufe0f":"diamonds"===i.gameState.currentSuit?"\u2666\ufe0f":"spades"===i.gameState.currentSuit?"\u2660\ufe0f":"\u2663\ufe0f"})]}),_&&C===(null===a||void 0===a?void 0:a.id)&&(0,qt.jsxs)("div",{style:{position:"absolute",left:"-120px",top:"50%",transform:"translateY(-50%)",background:"white",border:"2px solid #333",borderRadius:"15px",padding:"10px",minWidth:"100px",boxShadow:"0 4px 8px rgba(0,0,0,0.3)",zIndex:10},children:[(0,qt.jsx)("div",{style:{color:"#333",fontWeight:"bold",marginBottom:"8px",fontSize:"0.9rem"},children:"Call Suit:"}),(0,qt.jsx)("div",{style:{display:"flex",gap:"8px",justifyContent:"center"},children:["hearts","diamonds","spades","clubs"].map(e=>(0,qt.jsx)("button",{onClick:()=>{console.log("\ud83d\udc78 Playing Queen with suit:",e,"Card ID:",_.id),f(_.id,e),E(null),j(null)},style:{background:"none",border:"1px solid #333",borderRadius:"4px",padding:"4px",cursor:"pointer",fontSize:"20px"},children:"hearts"===e?"\u2665\ufe0f":"diamonds"===e?"\u2666\ufe0f":"spades"===e?"\u2660\ufe0f":"\u2663\ufe0f"},e))}),(0,qt.jsx)("button",{onClick:()=>{E(null),j(null)},style:{marginTop:"8px",background:"#ff4444",color:"white",border:"none",borderRadius:"4px",padding:"4px 8px",cursor:"pointer",fontSize:"0.8rem",width:"100%"},children:"Cancel"}),(0,qt.jsx)("div",{style:{position:"absolute",right:"-10px",top:"50%",transform:"translateY(-50%)",width:0,height:0,borderTop:"10px solid transparent",borderBottom:"10px solid transparent",borderLeft:"10px solid white"}})]})]}),(0,qt.jsxs)("div",{style:{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,qt.jsxs)("div",{style:{marginBottom:"1rem"},children:[(0,qt.jsxs)("div",{style:{color:(null===i||void 0===i||null===(B=i.gameState)||void 0===B?void 0:B.toxicSevenCount)>0?"#ff4444":"white",fontSize:"1.1rem",fontWeight:"bold",textShadow:(null===i||void 0===i||null===(W=i.gameState)||void 0===W?void 0:W.toxicSevenCount)>0?"0 0 10px #ff4444":"none"},children:["Draw ",(null===i||void 0===i||null===(H=i.gameState)||void 0===H?void 0:H.toxicSevenCount)>0?2*i.gameState.toxicSevenCount:1]}),(0,qt.jsxs)("div",{style:{color:"rgba(255,255,255,0.8)",fontSize:"0.9rem"},children:[(null===i||void 0===i||null===(V=i.gameState)||void 0===V?void 0:V.deckSize)||0," cards remaining"]})]}),(0,qt.jsx)("div",{style:{position:"relative",display:"inline-block"},children:(0,qt.jsx)(Xa,{isBack:!0,size:"large",interactive:(null===i||void 0===i||null===(Y=i.gameState)||void 0===Y?void 0:Y.currentPlayer)===(null===a||void 0===a?void 0:a.id),onClick:()=>{var e;(null===i||void 0===i||null===(e=i.gameState)||void 0===e?void 0:e.currentPlayer)===(null===a||void 0===a?void 0:a.id)&&d()},style:{cursor:(null===i||void 0===i||null===(q=i.gameState)||void 0===q?void 0:q.currentPlayer)===(null===a||void 0===a?void 0:a.id)?"pointer":"default",filter:(null===i||void 0===i||null===(K=i.gameState)||void 0===K?void 0:K.toxicSevenCount)>0?"sepia(1) hue-rotate(320deg) saturate(2)":"none",boxShadow:(null===i||void 0===i||null===(Q=i.gameState)||void 0===Q?void 0:Q.toxicSevenCount)>0?"0 0 20px #ff4444":"none"}})})]})]})}),(0,qt.jsxs)(hs,{children:[(0,qt.jsxs)("h4",{style:{color:(null===i||void 0===i||null===(G=i.gameState)||void 0===G?void 0:G.currentPlayer)===(null===a||void 0===a?void 0:a.id)?"#00d4ff":"white",marginBottom:"1rem",textAlign:"center",fontSize:(null===i||void 0===i||null===(X=i.gameState)||void 0===X?void 0:X.currentPlayer)===(null===a||void 0===a?void 0:a.id)?"1.3rem":"1rem",textShadow:(null===i||void 0===i||null===(J=i.gameState)||void 0===J?void 0:J.currentPlayer)===(null===a||void 0===a?void 0:a.id)?"0 0 10px #00d4ff":"none",transition:"all 0.3s ease"},children:["Your Hand (",(null===a||void 0===a||null===(Z=a.cards)||void 0===Z?void 0:Z.length)||0," cards)",(null===i||void 0===i||null===(ee=i.gameState)||void 0===ee?void 0:ee.currentPlayer)===(null===a||void 0===a?void 0:a.id)&&(0,qt.jsx)("span",{style:{display:"block",fontSize:"0.9rem",color:"#00d4ff",marginTop:"0.5rem"},children:"\ud83c\udfaf YOUR TURN"})]}),(0,qt.jsx)("div",{style:{transform:(null===i||void 0===i||null===(te=i.gameState)||void 0===te?void 0:te.currentPlayer)===(null===a||void 0===a?void 0:a.id)?"scale(1.4)":"scale(1)",transition:"transform 0.3s ease",filter:(null===i||void 0===i||null===(ne=i.gameState)||void 0===ne?void 0:ne.currentPlayer)===(null===a||void 0===a?void 0:a.id)?"drop-shadow(0 0 15px rgba(0, 212, 255, 0.5))":"none"},children:(0,qt.jsx)(Ga,{cards:(null===a||void 0===a?void 0:a.cards)||[],size:"large",interactive:(null===i||void 0===i||null===(re=i.gameState)||void 0===re?void 0:re.currentPlayer)===(null===a||void 0===a?void 0:a.id),playableCards:(null===a||void 0===a?void 0:a.cards)||[],onCardClick:e=>{var t,n;if((null===i||void 0===i||null===(t=i.gameState)||void 0===t?void 0:t.currentPlayer)===(null===a||void 0===a?void 0:a.id))if(console.log("\ud83c\udccf Card clicked:",e),console.log("\ud83c\udccf Card structure:",JSON.stringify(e,null,2)),e&&e.id)if(console.log("\u2705 Playing card with ID:",e.id),"Q"===e.rank){var r,o;const t=(null===i||void 0===i||null===(r=i.players)||void 0===r?void 0:r.filter(e=>!e.stormFinishOrder))||[],n=1===(null===a||void 0===a||null===(o=a.cards)||void 0===o?void 0:o.length);2===t.length&&n?(console.log("\ud83d\udc78 Two-player endgame: Queen can be played without suit selection"),f(e.id)):(console.log("\ud83d\udc78 Queen selected - showing suit selection"),E(e),j(null===a||void 0===a?void 0:a.id))}else f(e.id);else console.log("\u274c Card missing ID or invalid card object:",e),console.log("\u274c Player cards:",null===a||void 0===a?void 0:a.cards),alert("Card is missing ID - this is a bug. Please refresh.");else console.log("\u274c Not your turn, current player:",null===i||void 0===i||null===(n=i.gameState)||void 0===n?void 0:n.currentPlayer),console.log("\u274c Your player ID:",null===a||void 0===a?void 0:a.id)}})})]})]})});case"lane-selection":const je=null===i||void 0===i||null===(oe=i.players)||void 0===oe?void 0:oe.find(e=>e.isActive),Re=(null===je||void 0===je?void 0:je.id)===(null===a||void 0===a?void 0:a.id);return(0,qt.jsxs)(vs,{children:[(0,qt.jsx)(Hl,{children:"Lane Selection"}),(0,qt.jsxs)(Vl,{children:["Choose your starting lane for the race. Lane 1 (inside) is shortest but most crowded.",Re?" Your turn to select!":` Waiting for ${(null===je||void 0===je?void 0:je.name)||"player"} to select...`]}),(0,qt.jsx)(Ll,{players:T,currentLap:0,totalLaps:(null===i||void 0===i||null===(ie=i.settings)||void 0===ie?void 0:ie.numberOfLaps)||3,playerPositions:(null===i||void 0===i||null===(ae=i.gameState)||void 0===ae?void 0:ae.trackPositions)||{},placedCoins:(null===i||void 0===i||null===(le=i.gameState)||void 0===le?void 0:le.placedCoins)||{},activePlayerId:null===je||void 0===je?void 0:je.id,stage:"lane-selection",onLaneSelect:e=>{Re&&(w(e),v(e))},panZoomEnabled:!1,focusOnPolePosition:!0,showPositionNumbers:!1}),(0,qt.jsx)(bs,{children:[1,2,3,4].map(e=>{var t;const n=null===i||void 0===i||null===(t=i.players)||void 0===t?void 0:t.some(t=>t.lane===e);return(0,qt.jsxs)(ys,{selected:x===e,onClick:()=>{Re&&!n&&(w(e),v(e))},style:{opacity:n?.5:1,cursor:!Re||n?"not-allowed":"pointer"},children:[(0,qt.jsx)(xs,{children:e}),(0,qt.jsxs)(ws,{children:[1===e&&"Inside lane - Shortest distance",2===e&&"Second lane - Good balance",3===e&&"Third lane - Less congestion",4===e&&"Outside lane - Most room",n&&(0,qt.jsx)("div",{style:{color:"#ff4444",fontWeight:"bold",marginTop:"0.5rem"},children:"TAKEN"})]})]},e)})}),!Re&&(0,qt.jsxs)("div",{style:{textAlign:"center",color:"#00d4ff",fontSize:"1.1rem",marginTop:"2rem"},children:["\ud83d\udd52 Waiting for ",(null===je||void 0===je?void 0:je.name)||"player"," to select their lane..."]})]});case"coin-stage":return(0,qt.jsxs)(ks,{children:[(0,qt.jsx)(Hl,{children:"\ud83e\ude99 Coin Placement Stage"}),(0,qt.jsx)(Vl,{children:"Place your coins strategically on the race track. Coins affect movement during racing."}),(0,qt.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 300px",gap:"2rem"},children:[(0,qt.jsxs)(Ss,{children:[(0,qt.jsx)("h3",{style:{color:"#ffd700",marginBottom:"1rem"},children:"Race Track"}),(0,qt.jsx)(Ll,{players:(null===i||void 0===i?void 0:i.players)||[],currentLap:0,totalLaps:(null===i||void 0===i||null===(se=i.settings)||void 0===se?void 0:se.numberOfLaps)||3,playerPositions:(null===i||void 0===i||null===(ue=i.gameState)||void 0===ue?void 0:ue.trackPositions)||{},placedCoins:(null===i||void 0===i||null===(ce=i.gameState)||void 0===ce?void 0:ce.placedCoins)||{},activePlayerId:null===a||void 0===a?void 0:a.id,stage:"coin",onCoinPlace:(e,t)=>{R&&(g(R.id,`${e}-${t}`),O(null))},panZoomEnabled:!0,focusOnPolePosition:!1,showPositionNumbers:!0})]}),(0,qt.jsxs)(gs,{children:[(0,qt.jsxs)(ms,{children:["Your Coins (",L.length,")"]}),L.length>0?(0,qt.jsx)(gl,{coins:L,size:"large",interactive:!0,groupByType:!0,onCoinSelect:e=>{O(e)}}):(0,qt.jsxs)("div",{style:{color:"#888",fontStyle:"italic",padding:"2rem",textAlign:"center"},children:["No coins available",(0,qt.jsx)("br",{}),(0,qt.jsx)("small",{children:"Coins are distributed based on Storm stage finishing order"})]}),R&&(0,qt.jsxs)("div",{style:{marginTop:"1rem",padding:"1rem",background:"rgba(255, 215, 0, 0.1)",border:"2px solid #ffd700",borderRadius:"8px",textAlign:"center"},children:[(0,qt.jsxs)("strong",{children:["Selected Coin: ",R.value]}),(0,qt.jsx)("br",{}),(0,qt.jsx)("small",{children:"Click on the track to place it"})]}),N&&(null===i||void 0===i||null===(de=i.players)||void 0===de?void 0:de.every(e=>0===(e.drawnCoins||[]).length))&&(0,qt.jsx)("div",{style:{marginTop:"2rem"},children:(0,qt.jsx)(is,{onClick:m,children:"Continue to Racing \ud83c\udfc1"})}),(0,qt.jsxs)("div",{style:{marginTop:"1rem",fontSize:"0.9rem",color:"#aaa"},children:[(0,qt.jsx)("strong",{children:"Coin Values:"}),(0,qt.jsx)("br",{}),"\u2022 Positive: Move forward",(0,qt.jsx)("br",{}),"\u2022 Negative: Move backward",(0,qt.jsx)("br",{}),"\u2022 Tow-to-Pit: Special effect"]})]})]})]});case"racing":const Oe=(null===i||void 0===i||null===(fe=i.gameState)||void 0===fe?void 0:fe.activePlayerId)===(null===a||void 0===a?void 0:a.id),Pe=null===i||void 0===i||null===(pe=i.gameState)||void 0===pe||null===(he=pe.trackPositions)||void 0===he?void 0:he[null===a||void 0===a?void 0:a.id],Te=null===a||void 0===a?void 0:a.lastDiceRoll;return(0,qt.jsxs)(_s,{children:[(0,qt.jsx)(Hl,{children:"Racing Stage"}),(0,qt.jsx)(Vl,{children:Oe?"It's your turn! Choose your dice type and roll.":`Waiting for ${(null===i||void 0===i||null===(ge=i.players)||void 0===ge||null===(me=ge.find(e=>{var t;return e.id===(null===i||void 0===i||null===(t=i.gameState)||void 0===t?void 0:t.activePlayerId)}))||void 0===me?void 0:me.name)||"player"} to move.`}),(0,qt.jsx)(Ll,{players:T,currentLap:(null===Pe||void 0===Pe?void 0:Pe.lap)||0,totalLaps:(null===i||void 0===i||null===(ve=i.settings)||void 0===ve?void 0:ve.numberOfLaps)||3,playerPositions:(null===i||void 0===i||null===(be=i.gameState)||void 0===be?void 0:be.trackPositions)||{},placedCoins:(null===i||void 0===i||null===(ye=i.gameState)||void 0===ye?void 0:ye.placedCoins)||{},activePlayerId:null===i||void 0===i||null===(xe=i.gameState)||void 0===xe?void 0:xe.activePlayerId,stage:"racing",panZoomEnabled:!0,focusOnPolePosition:!1,showPositionNumbers:!1}),Oe&&!Te&&(0,qt.jsxs)(Cs,{children:[(0,qt.jsx)("h3",{children:"Choose Your Dice Type"}),(0,qt.jsxs)(js,{onClick:()=>A([],"movement"),children:[(0,qt.jsx)("strong",{children:"Movement Dice"}),(0,qt.jsx)("br",{}),(0,qt.jsx)("small",{children:null!==Pe&&void 0!==Pe&&Pe.inPit?"1 die (pit rule)":`${(null===i||void 0===i||null===(we=i.settings)||void 0===we?void 0:we.numberOfDice)||1} die(s)`})]}),!(null!==Pe&&void 0!==Pe&&Pe.inPit)&&(0,qt.jsxs)(js,{onClick:()=>A([],"lane-change"),children:[(0,qt.jsx)("strong",{children:"Lane-Change Die"}),(0,qt.jsx)("br",{}),(0,qt.jsx)("small",{children:"Change lanes or check engine"})]})]}),Oe&&Te&&(0,qt.jsxs)(Rs,{children:[(0,qt.jsxs)("h3",{children:["Dice Result: ",Te.values.join(", ")]}),(0,qt.jsxs)("p",{children:["Type: ",Te.type]}),(0,qt.jsx)(Es,{onClick:()=>y({action:"move"}),children:"Confirm Movement"})]}),!Oe&&(0,qt.jsxs)("div",{style:{textAlign:"center",padding:"2rem",color:"#888"},children:[(0,qt.jsx)("p",{children:"Waiting for other players..."}),(0,qt.jsxs)("small",{children:["Current turn: ",(null===i||void 0===i||null===(ke=i.players)||void 0===ke||null===(Se=ke.find(e=>{var t;return e.id===(null===i||void 0===i||null===(t=i.gameState)||void 0===t?void 0:t.activePlayerId)}))||void 0===Se?void 0:Se.name)||"Unknown"]})]})]});default:return(0,qt.jsxs)("div",{style:{textAlign:"center",padding:"4rem"},children:[(0,qt.jsx)(Hl,{children:"Game Starting..."}),(0,qt.jsx)(Vl,{children:"Preparing the race. Please wait for all players to be ready."}),(0,qt.jsx)(Es,{onClick:u,children:"Return to Lobby"})]})}})()}),p&&(0,qt.jsx)(Os,{children:(0,qt.jsxs)(Ps,{children:[(0,qt.jsx)("h2",{children:"\ud83c\udfc6 Storm Stage Complete!"}),(0,qt.jsx)(Ts,{children:p.map((e,t)=>(0,qt.jsxs)(zs,{$position:e.finishOrder,children:[(0,qt.jsxs)("div",{className:"position",children:["#",e.finishOrder]}),(0,qt.jsx)("div",{className:"player-name",children:e.playerName}),(0,qt.jsx)("div",{className:"card-count",children:e.cardCount>0?`${e.cardCount} cards left`:"Finished!"})]},e.playerId))}),N&&(0,qt.jsxs)(is,{onClick:h,children:["Continue to ",1===(null===i||void 0===i||null===(o=i.gameState)||void 0===o?void 0:o.stormRound)?"Lane Selection":"Coin Stage"]}),!N&&(0,qt.jsx)(Ns,{children:"Waiting for host to continue..."})]})})]})},As=Wo`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,Ds=Bo.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: #ff4757;
  color: white;
  padding: 16px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(255, 71, 87, 0.3);
  z-index: 1000;
  animation: ${As} 0.3s ease;
  max-width: 400px;
  display: flex;
  align-items: center;
  gap: 12px;
`,$s=Bo.span`
  font-size: 20px;
  font-weight: bold;
`,Is=Bo.span`
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  flex: 1;
`,Ms=Bo.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;const Fs=function(e){let{message:t}=e;const{clearError:n}=Jt();return(0,r.useEffect)(()=>{const e=setTimeout(()=>{n()},5e3);return()=>clearTimeout(e)},[n]),t?(0,qt.jsxs)(Ds,{children:[(0,qt.jsx)($s,{children:"\u26a0"}),(0,qt.jsx)(Is,{children:t}),(0,qt.jsx)(Ms,{onClick:n,children:"\xd7"})]}):null},Us=Wo`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,Bs=Wo`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
`,Ws=Wo`
  0%, 100% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.5); }
  50% { box-shadow: 0 0 40px rgba(0, 212, 255, 0.8), 0 0 60px rgba(0, 212, 255, 0.3); }
`,Hs=Wo`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`,Vs=Wo`
  0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
  50% { opacity: 1; transform: scale(1) rotate(180deg); }
`,Ys=Bo.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 30% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(255, 56, 56, 0.1) 0%, transparent 50%),
    rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(15px);
`,qs=Bo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(0, 212, 255, 0.3);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
  ${Mo`animation: ${Hs} 3s ease-in-out infinite;`}
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 40%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 60%
    );
    ${Mo`animation: ${Vs} 4s ease-in-out infinite;`}
  }
`,Ks=Bo.div`
  position: relative;
  width: 80px;
  height: 80px;
`,Qs=Bo.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border: 4px solid rgba(0, 212, 255, 0.1);
  border-top: 4px solid #00d4ff;
  border-radius: 50%;
  ${Mo`animation: ${Us} 1.5s linear infinite;`}
`,Gs=Bo.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 60px;
  height: 60px;
  border: 3px solid rgba(255, 215, 0, 0.1);
  border-right: 3px solid #ffd700;
  border-radius: 50%;
  ${Mo`animation: ${Us} 1s linear infinite reverse;`}
`,Xs=Bo.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  background: linear-gradient(45deg, #00d4ff, #0099cc);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${Mo`animation: ${Ws} 2s ease-in-out infinite;`}
  
  &::after {
    content: '⚡';
    font-size: 20px;
    color: white;
    text-shadow: 0 0 10px white;
  }
`,Js=Bo.div`
  color: white;
  font-family: 'Orbitron', monospace;
  font-size: 20px;
  font-weight: 700;
  ${Mo`animation: ${Bs} 2s ease-in-out infinite;`}
  text-align: center;
  text-shadow: 
    0 0 10px #00d4ff,
    0 0 20px rgba(0, 212, 255, 0.5);
  position: relative;
  z-index: 2;
`,Zs=Bo.div`
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Rajdhani', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  position: relative;
  z-index: 2;
`,eu=Bo.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
`,tu=Bo.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #00d4ff;
  ${Mo`animation: ${Bs} 1.5s ease-in-out infinite;`}
  animation-delay: ${e=>e.delay}s;
`,nu=Bo.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,ru=Bo.div`
  width: 24px;
  height: 24px;
  border: 2px solid rgba(0, 212, 255, 0.2);
  border-top: 2px solid #00d4ff;
  border-radius: 50%;
  ${Mo`animation: ${Us} 1s linear infinite;`}
`;const ou=function(e){let{overlay:t=!1,text:n="Loading Havoc Speedway...",subtext:r="Preparing your racing experience",inline:o=!1}=e;if(o)return(0,qt.jsx)(nu,{children:(0,qt.jsx)(ru,{})});const i=(0,qt.jsxs)(qs,{children:[(0,qt.jsxs)(Ks,{children:[(0,qt.jsx)(Qs,{}),(0,qt.jsx)(Gs,{}),(0,qt.jsx)(Xs,{})]}),(0,qt.jsxs)("div",{children:[(0,qt.jsx)(Js,{children:n}),r&&(0,qt.jsx)(Zs,{children:r}),(0,qt.jsxs)(eu,{children:[(0,qt.jsx)(tu,{delay:0}),(0,qt.jsx)(tu,{delay:.2}),(0,qt.jsx)(tu,{delay:.4})]})]})]});return t?(0,qt.jsx)(Ys,{children:i}):i};const iu=function(){const{currentView:e,loading:t,error:n,isConnected:r}=Jt();return r?(0,qt.jsxs)("div",{className:"App",children:[n&&(0,qt.jsx)(Fs,{message:n}),t&&(0,qt.jsx)(ou,{overlay:!0}),(0,qt.jsxs)(be,{children:[(0,qt.jsx)(me,{path:"/",element:"welcome"===e?(0,qt.jsx)(ii,{}):"lobby"===e?(0,qt.jsx)(Ni,{}):"room"===e?(0,qt.jsx)(pa,{}):"game"===e?(0,qt.jsx)(Ls,{}):(0,qt.jsx)(ge,{to:"/",replace:!0})}),(0,qt.jsx)(me,{path:"*",element:(0,qt.jsx)(ge,{to:"/",replace:!0})})]})]}):(0,qt.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",flexDirection:"column",gap:"20px"},children:[(0,qt.jsx)(ou,{}),(0,qt.jsx)("p",{children:"Connecting to Havoc Speedway..."})]})};i.createRoot(document.getElementById("root")).render((0,qt.jsx)(r.StrictMode,{children:(0,qt.jsx)(we,{children:(0,qt.jsx)(Xt,{children:(0,qt.jsx)(iu,{})})})}))})()})();
//# sourceMappingURL=main.07e9ca72.js.map