/*! For license information please see main.11ffdf6e.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var r=n(43),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,a={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:i,type:e,key:u,ref:c,props:a,_owner:s.current}}t.jsx=u,t.jsxs=u},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function b(){}function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var x=y.prototype=new b;x.constructor=y,g(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var i,a={},o=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(o=""+t.key),t)k.call(t,i)&&!_.hasOwnProperty(i)&&(a[i]=t[i]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===a[i]&&(a[i]=l[i]);return{$$typeof:n,type:e,key:o,ref:s,props:a,_owner:S.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function R(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function T(e,t,i,a,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return o=o(l=e),e=""===a?"."+R(l,0):a,w(o)?(i="",null!=e&&(i=e.replace(j,"$&/")+"/"),T(o,t,i,"",function(e){return e})):null!=o&&(C(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,i+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(j,"$&/")+"/")+e)),t.push(o)),1;if(l=0,a=""===a?".":a+":",w(e))for(var u=0;u<e.length;u++){var c=a+R(s=e[u],u);l+=T(s,t,i,c,o)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(s=e.next()).done;)l+=T(s=s.value,t,i,c=a+R(s,u++),o);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function O(e,t,n){if(null==e)return e;var r=[],i=0;return T(e,r,"","",function(e){return t.call(n,e,i++)}),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var z={current:null},N={transition:null},L={ReactCurrentDispatcher:z,ReactCurrentBatchConfig:N,ReactCurrentOwner:S};function A(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:O,forEach:function(e,t,n){O(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return O(e,function(){t++}),t},toArray:function(e){return O(e,function(e){return e})||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=i,t.Profiler=o,t.PureComponent=y,t.StrictMode=a,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.act=A,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=g({},e.props),a=e.key,o=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,s=S.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)k.call(t,u)&&!_.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];i.children=l}return{$$typeof:n,type:e.type,key:a,ref:o,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=N.transition;N.transition={};try{e()}finally{N.transition=t}},t.unstable_act=A,t.useCallback=function(e,t){return z.current.useCallback(e,t)},t.useContext=function(e){return z.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return z.current.useDeferredValue(e)},t.useEffect=function(e,t){return z.current.useEffect(e,t)},t.useId=function(){return z.current.useId()},t.useImperativeHandle=function(e,t,n){return z.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return z.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return z.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return z.current.useMemo(e,t)},t.useReducer=function(e,t,n){return z.current.useReducer(e,t,n)},t.useRef=function(e){return z.current.useRef(e)},t.useState=function(e){return z.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return z.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return z.current.useTransition()},t.version="18.3.1"},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<a(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,o=i>>>1;r<o;){var s=2*(r+1)-1,l=e[s],u=s+1,c=e[u];if(0>a(l,n))u<i&&0>a(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[s]=n,r=s);else{if(!(u<i&&0>a(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var u=[],c=[],d=1,f=null,p=3,h=!1,g=!1,m=!1,v="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(c);null!==t;){if(null===t.callback)i(c);else{if(!(t.startTime<=e))break;i(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(m=!1,x(e),!g)if(null!==r(u))g=!0,N(k);else{var t=r(c);null!==t&&L(w,t.startTime-e)}}function k(e,n){g=!1,m&&(m=!1,b(C),C=-1),h=!0;var a=p;try{for(x(n),f=r(u);null!==f&&(!(f.expirationTime>n)||e&&!T());){var o=f.callback;if("function"===typeof o){f.callback=null,p=f.priorityLevel;var s=o(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof s?f.callback=s:f===r(u)&&i(u),x(n)}else i(u);f=r(u)}if(null!==f)var l=!0;else{var d=r(c);null!==d&&L(w,d.startTime-n),l=!1}return l}finally{f=null,p=a,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,_=!1,E=null,C=-1,j=5,R=-1;function T(){return!(t.unstable_now()-R<j)}function O(){if(null!==E){var e=t.unstable_now();R=e;var n=!0;try{n=E(!0,e)}finally{n?S():(_=!1,E=null)}}else _=!1}if("function"===typeof y)S=function(){y(O)};else if("undefined"!==typeof MessageChannel){var P=new MessageChannel,z=P.port2;P.port1.onmessage=O,S=function(){z.postMessage(null)}}else S=function(){v(O,0)};function N(e){E=e,_||(_=!0,S())}function L(e,n){C=v(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){g||h||(g=!0,N(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,i,a){var o=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?o+a:o:a=o,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:a,expirationTime:s=a+s,sortIndex:-1},a>o?(e.sortIndex=a,n(c,e),null===r(u)&&e===r(c)&&(m?(b(C),C=-1):m=!0,L(w,a-o))):(e.sortIndex=s,n(u,e),g||h||(g=!0,N(k))),e},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var u=a[l];if(!s(u))return!1;var c=e[u],d=t[u];if(!1===(i=n?n.call(r,c,d,u):void 0)||void 0===i&&c!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var r=n(43),i=n(853);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,s={};function l(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(s[e]=t,e=0;e<t.length;e++)o.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function g(e,t,n,r,i,a,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var m={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){m[e]=new g(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];m[t]=new g(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){m[e]=new g(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){m[e]=new g(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){m[e]=new g(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){m[e]=new g(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){m[e]=new g(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){m[e]=new g(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){m[e]=new g(e,5,!1,e.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}function y(e,t,n,r){var i=m.hasOwnProperty(t)?m[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(v,b);m[t]=new g(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(v,b);m[t]=new g(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(v,b);m[t]=new g(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){m[e]=new g(e,1,!1,e.toLowerCase(),null,!1,!1)}),m.xlinkHref=new g("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){m[e]=new g(e,1,!1,e.toLowerCase(),null,!0,!0)});var x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),j=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),z=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var N=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var L=Symbol.iterator;function A(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=L&&e[L]||e["@@iterator"])?e:null}var D,I=Object.assign;function $(e){if(void 0===D)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);D=t&&t[1]||""}return"\n"+D+e}var F=!1;function M(e,t){if(!e||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var i=u.stack.split("\n"),a=r.stack.split("\n"),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(1!==o||1!==s)do{if(o--,0>--s||i[o]!==a[s]){var l="\n"+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=o&&0<=s);break}}}finally{F=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?$(e):""}function B(e){switch(e.tag){case 5:return $(e.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return e=M(e.type,!1);case 11:return e=M(e.type.render,!1);case 1:return e=M(e.type,!0);default:return""}}function U(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case E:return"Profiler";case _:return"StrictMode";case T:return"Suspense";case O:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case j:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case R:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case P:return null!==(t=e.displayName||null)?t:U(e.type)||"Memo";case z:t=e._payload,e=e._init;try{return U(e(t))}catch(n){}}return null}function H(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return U(t);case 8:return t===_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function q(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Y(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Q(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function K(e,t){var n=t.checked;return I({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function G(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=W(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function X(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function J(e,t){X(e,t);var n=W(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,W(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Q(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+W(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return I({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(a(92));if(te(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:W(n)}}function ae(e,t){var n=W(t.value),r=W(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return ce(e,t)})}:ce);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function ge(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function me(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=ge(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(pe).forEach(function(e){he.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]})});var ve=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function be(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(a(62))}}function ye(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,Se=null,_e=null;function Ee(e){if(e=yi(e)){if("function"!==typeof ke)throw Error(a(280));var t=e.stateNode;t&&(t=wi(t),ke(e.stateNode,e.type,t))}}function Ce(e){Se?_e?_e.push(e):_e=[e]:Se=e}function je(){if(Se){var e=Se,t=_e;if(_e=Se=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function Re(e,t){return e(t)}function Te(){}var Oe=!1;function Pe(e,t,n){if(Oe)return e(t,n);Oe=!0;try{return Re(e,t,n)}finally{Oe=!1,(null!==Se||null!==_e)&&(Te(),je())}}function ze(e,t){var n=e.stateNode;if(null===n)return null;var r=wi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var Ne=!1;if(c)try{var Le={};Object.defineProperty(Le,"passive",{get:function(){Ne=!0}}),window.addEventListener("test",Le,Le),window.removeEventListener("test",Le,Le)}catch(ce){Ne=!1}function Ae(e,t,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var De=!1,Ie=null,$e=!1,Fe=null,Me={onError:function(e){De=!0,Ie=e}};function Be(e,t,n,r,i,a,o,s,l){De=!1,Ie=null,Ae.apply(Me,arguments)}function Ue(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function He(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function We(e){if(Ue(e)!==e)throw Error(a(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ue(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(r=i.return)){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return We(i),e;if(o===r)return We(i),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(e))?qe(e):null}function qe(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=qe(e);if(null!==t)return t;e=e.sibling}return null}var Ye=i.unstable_scheduleCallback,Qe=i.unstable_cancelCallback,Ke=i.unstable_shouldYield,Ge=i.unstable_requestPaint,Xe=i.unstable_now,Je=i.unstable_getCurrentPriorityLevel,Ze=i.unstable_ImmediatePriority,et=i.unstable_UserBlockingPriority,tt=i.unstable_NormalPriority,nt=i.unstable_LowPriority,rt=i.unstable_IdlePriority,it=null,at=null;var ot=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/lt|0)|0},st=Math.log,lt=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=268435455&n;if(0!==o){var s=o&~i;0!==s?r=dt(s):0!==(a&=o)&&(r=dt(a))}else 0!==(o=n&~i)?r=dt(o):0!==a&&(r=dt(a));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(a=t&-t)||16===i&&0!==(4194240&a)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-ot(t)),r|=e[n],t&=~i;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function gt(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function mt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-ot(t)]=n}function bt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var yt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,St,_t,Et,Ct=!1,jt=[],Rt=null,Tt=null,Ot=null,Pt=new Map,zt=new Map,Nt=[],Lt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function At(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Pt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zt.delete(t.pointerId)}}function Dt(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},null!==t&&(null!==(t=yi(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function It(e){var t=bi(e.target);if(null!==t){var n=Ue(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=He(n)))return e.blockedOn=t,void Et(e.priority,function(){St(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function $t(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Kt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=yi(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);xe=r,n.target.dispatchEvent(r),xe=null,t.shift()}return!0}function Ft(e,t,n){$t(e)&&n.delete(t)}function Mt(){Ct=!1,null!==Rt&&$t(Rt)&&(Rt=null),null!==Tt&&$t(Tt)&&(Tt=null),null!==Ot&&$t(Ot)&&(Ot=null),Pt.forEach(Ft),zt.forEach(Ft)}function Bt(e,t){e.blockedOn===t&&(e.blockedOn=null,Ct||(Ct=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Mt)))}function Ut(e){function t(t){return Bt(t,e)}if(0<jt.length){Bt(jt[0],e);for(var n=1;n<jt.length;n++){var r=jt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Rt&&Bt(Rt,e),null!==Tt&&Bt(Tt,e),null!==Ot&&Bt(Ot,e),Pt.forEach(t),zt.forEach(t),n=0;n<Nt.length;n++)(r=Nt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Nt.length&&null===(n=Nt[0]).blockedOn;)It(n),null===n.blockedOn&&Nt.shift()}var Ht=x.ReactCurrentBatchConfig,Wt=!0;function Vt(e,t,n,r){var i=yt,a=Ht.transition;Ht.transition=null;try{yt=1,Yt(e,t,n,r)}finally{yt=i,Ht.transition=a}}function qt(e,t,n,r){var i=yt,a=Ht.transition;Ht.transition=null;try{yt=4,Yt(e,t,n,r)}finally{yt=i,Ht.transition=a}}function Yt(e,t,n,r){if(Wt){var i=Kt(e,t,n,r);if(null===i)Wr(e,t,r,Qt,n),At(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Rt=Dt(Rt,e,t,n,r,i),!0;case"dragenter":return Tt=Dt(Tt,e,t,n,r,i),!0;case"mouseover":return Ot=Dt(Ot,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Pt.set(a,Dt(Pt.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,zt.set(a,Dt(zt.get(a)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(At(e,r),4&t&&-1<Lt.indexOf(e)){for(;null!==i;){var a=yi(i);if(null!==a&&wt(a),null===(a=Kt(e,t,n,r))&&Wr(e,t,r,Qt,n),a===i)break;i=a}null!==i&&r.stopPropagation()}else Wr(e,t,r,null,n)}}var Qt=null;function Kt(e,t,n,r){if(Qt=null,null!==(e=bi(e=we(r))))if(null===(t=Ue(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=He(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qt=e,null}function Gt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Xt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,r=n.length,i="value"in Xt?Xt.value:Xt.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[a-t];t++);return Zt=i.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,sn,ln,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=an(un),dn=I({},un,{view:0,detail:0}),fn=an(dn),pn=I({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:En,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ln&&(ln&&"mousemove"===e.type?(on=e.screenX-ln.screenX,sn=e.screenY-ln.screenY):sn=on=0,ln=e),on)},movementY:function(e){return"movementY"in e?e.movementY:sn}}),hn=an(pn),gn=an(I({},pn,{dataTransfer:0})),mn=an(I({},dn,{relatedTarget:0})),vn=an(I({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),bn=I({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yn=an(bn),xn=an(I({},un,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _n(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function En(){return _n}var Cn=I({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:En,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),jn=an(Cn),Rn=an(I({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Tn=an(I({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:En})),On=an(I({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),Pn=I({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zn=an(Pn),Nn=[9,13,27,32],Ln=c&&"CompositionEvent"in window,An=null;c&&"documentMode"in document&&(An=document.documentMode);var Dn=c&&"TextEvent"in window&&!An,In=c&&(!Ln||An&&8<An&&11>=An),$n=String.fromCharCode(32),Fn=!1;function Mn(e,t){switch(e){case"keyup":return-1!==Nn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Un=!1;var Hn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Hn[e.type]:"textarea"===t}function Vn(e,t,n,r){Ce(r),0<(t=qr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qn=null,Yn=null;function Qn(e){$r(e,0)}function Kn(e){if(Y(xi(e)))return e}function Gn(e,t){if("change"===e)return t}var Xn=!1;if(c){var Jn;if(c){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Jn=Zn}else Jn=!1;Xn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){qn&&(qn.detachEvent("onpropertychange",nr),Yn=qn=null)}function nr(e){if("value"===e.propertyName&&Kn(Yn)){var t=[];Vn(t,Yn,e,we(e)),Pe(Qn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Yn=n,(qn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ir(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Kn(Yn)}function ar(e,t){if("click"===e)return Kn(t)}function or(e,t){if("input"===e||"change"===e)return Kn(t)}var sr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function lr(e,t){if(sr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!d.call(t,i)||!sr(e[i],t[i]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=Q();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Q((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=void 0===r.end?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=cr(n,a);var o=cr(n,r);i&&o&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gr=c&&"documentMode"in document&&11>=document.documentMode,mr=null,vr=null,br=null,yr=!1;function xr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yr||null==mr||mr!==Q(r)||("selectionStart"in(r=mr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},br&&lr(br,r)||(br=r,0<(r=qr(vr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Sr={},_r={};function Er(e){if(Sr[e])return Sr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in _r)return Sr[e]=n[t];return e}c&&(_r=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var Cr=Er("animationend"),jr=Er("animationiteration"),Rr=Er("animationstart"),Tr=Er("transitionend"),Or=new Map,Pr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(e,t){Or.set(e,t),l(t,[e])}for(var Nr=0;Nr<Pr.length;Nr++){var Lr=Pr[Nr];zr(Lr.toLowerCase(),"on"+(Lr[0].toUpperCase()+Lr.slice(1)))}zr(Cr,"onAnimationEnd"),zr(jr,"onAnimationIteration"),zr(Rr,"onAnimationStart"),zr("dblclick","onDoubleClick"),zr("focusin","onFocus"),zr("focusout","onBlur"),zr(Tr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));function Ir(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,o,s,l,u){if(Be.apply(this,arguments),De){if(!De)throw Error(a(198));var c=Ie;De=!1,Ie=null,$e||($e=!0,Fe=c)}}(r,t,void 0,e),e.currentTarget=null}function $r(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Ir(i,s,u),a=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Ir(i,s,u),a=l}}}if($e)throw e=Fe,$e=!1,Fe=null,e}function Fr(e,t){var n=t[gi];void 0===n&&(n=t[gi]=new Set);var r=e+"__bubble";n.has(r)||(Hr(t,e,2,!1),n.add(r))}function Mr(e,t,n){var r=0;t&&(r|=4),Hr(n,e,r,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[Br]){e[Br]=!0,o.forEach(function(t){"selectionchange"!==t&&(Dr.has(t)||Mr(t,!1,e),Mr(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Br]||(t[Br]=!0,Mr("selectionchange",!1,t))}}function Hr(e,t,n,r){switch(Gt(t)){case 1:var i=Vt;break;case 4:i=qt;break;default:i=Yt}n=i.bind(null,t,n,e),i=void 0,!Ne||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Wr(e,t,n,r,i){var a=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===o)for(o=r.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;o=o.return}for(;null!==s;){if(null===(o=bi(s)))return;if(5===(l=o.tag)||6===l){r=a=o;continue e}s=s.parentNode}}r=r.return}Pe(function(){var r=a,i=we(n),o=[];e:{var s=Or.get(e);if(void 0!==s){var l=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":l=jn;break;case"focusin":u="focus",l=mn;break;case"focusout":u="blur",l=mn;break;case"beforeblur":case"afterblur":l=mn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=gn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Tn;break;case Cr:case jr:case Rr:l=vn;break;case Tr:l=On;break;case"scroll":l=fn;break;case"wheel":l=zn;break;case"copy":case"cut":case"paste":l=yn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Rn}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==s?s+"Capture":null:s;c=[];for(var p,h=r;null!==h;){var g=(p=h).stateNode;if(5===p.tag&&null!==g&&(p=g,null!==f&&(null!=(g=ze(h,f))&&c.push(Vr(h,g,p)))),d)break;h=h.return}0<c.length&&(s=new l(s,u,null,n,i),o.push({event:s,listeners:c}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===xe||!(u=n.relatedTarget||n.fromElement)||!bi(u)&&!u[hi])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?bi(u):null)&&(u!==(d=Ue(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=hn,g="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=Rn,g="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==l?s:xi(l),p=null==u?s:xi(u),(s=new c(g,h+"leave",l,n,i)).target=d,s.relatedTarget=p,g=null,bi(i)===r&&((c=new c(f,h+"enter",u,n,i)).target=p,c.relatedTarget=d,g=c),d=g,l&&u)e:{for(f=u,h=0,p=c=l;p;p=Yr(p))h++;for(p=0,g=f;g;g=Yr(g))p++;for(;0<h-p;)c=Yr(c),h--;for(;0<p-h;)f=Yr(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break e;c=Yr(c),f=Yr(f)}c=null}else c=null;null!==l&&Qr(o,s,l,c,!1),null!==u&&null!==d&&Qr(o,d,u,c,!0)}if("select"===(l=(s=r?xi(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var m=Gn;else if(Wn(s))if(Xn)m=or;else{m=ir;var v=rr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(m=ar);switch(m&&(m=m(e,r))?Vn(o,m,n,i):(v&&v(e,s,r),"focusout"===e&&(v=s._wrapperState)&&v.controlled&&"number"===s.type&&ee(s,"number",s.value)),v=r?xi(r):window,e){case"focusin":(Wn(v)||"true"===v.contentEditable)&&(mr=v,vr=r,br=null);break;case"focusout":br=vr=mr=null;break;case"mousedown":yr=!0;break;case"contextmenu":case"mouseup":case"dragend":yr=!1,xr(o,n,i);break;case"selectionchange":if(gr)break;case"keydown":case"keyup":xr(o,n,i)}var b;if(Ln)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Un?Mn(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(In&&"ko"!==n.locale&&(Un||"onCompositionStart"!==y?"onCompositionEnd"===y&&Un&&(b=en()):(Jt="value"in(Xt=i)?Xt.value:Xt.textContent,Un=!0)),0<(v=qr(r,y)).length&&(y=new xn(y,e,null,n,i),o.push({event:y,listeners:v}),b?y.data=b:null!==(b=Bn(n))&&(y.data=b))),(b=Dn?function(e,t){switch(e){case"compositionend":return Bn(t);case"keypress":return 32!==t.which?null:(Fn=!0,$n);case"textInput":return(e=t.data)===$n&&Fn?null:e;default:return null}}(e,n):function(e,t){if(Un)return"compositionend"===e||!Ln&&Mn(e,t)?(e=en(),Zt=Jt=Xt=null,Un=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return In&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=qr(r,"onBeforeInput")).length&&(i=new xn("onBeforeInput","beforeinput",null,n,i),o.push({event:i,listeners:r}),i.data=b))}$r(o,t)})}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,a=i.stateNode;5===i.tag&&null!==a&&(i=a,null!=(a=ze(e,n))&&r.unshift(Vr(e,a,i)),null!=(a=ze(e,t))&&r.push(Vr(e,a,i))),e=e.return}return r}function Yr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Qr(e,t,n,r,i){for(var a=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==u&&(s=u,i?null!=(l=ze(n,a))&&o.unshift(Vr(n,l,s)):i||null!=(l=ze(n,a))&&o.push(Vr(n,l,s))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Kr=/\r\n?/g,Gr=/\u0000|\uFFFD/g;function Xr(e){return("string"===typeof e?e:""+e).replace(Kr,"\n").replace(Gr,"")}function Jr(e,t,n){if(t=Xr(t),Xr(e)!==t&&n)throw Error(a(425))}function Zr(){}var ei=null,ti=null;function ni(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ri="function"===typeof setTimeout?setTimeout:void 0,ii="function"===typeof clearTimeout?clearTimeout:void 0,ai="function"===typeof Promise?Promise:void 0,oi="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ai?function(e){return ai.resolve(null).then(e).catch(si)}:ri;function si(e){setTimeout(function(){throw e})}function li(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Ut(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Ut(t)}function ui(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ci(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),fi="__reactFiber$"+di,pi="__reactProps$"+di,hi="__reactContainer$"+di,gi="__reactEvents$"+di,mi="__reactListeners$"+di,vi="__reactHandles$"+di;function bi(e){var t=e[fi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[hi]||n[fi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ci(e);null!==e;){if(n=e[fi])return n;e=ci(e)}return t}n=(e=n).parentNode}return null}function yi(e){return!(e=e[fi]||e[hi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function xi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function wi(e){return e[pi]||null}var ki=[],Si=-1;function _i(e){return{current:e}}function Ei(e){0>Si||(e.current=ki[Si],ki[Si]=null,Si--)}function Ci(e,t){Si++,ki[Si]=e.current,e.current=t}var ji={},Ri=_i(ji),Ti=_i(!1),Oi=ji;function Pi(e,t){var n=e.type.contextTypes;if(!n)return ji;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,a={};for(i in n)a[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function zi(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Ni(){Ei(Ti),Ei(Ri)}function Li(e,t,n){if(Ri.current!==ji)throw Error(a(168));Ci(Ri,t),Ci(Ti,n)}function Ai(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(a(108,H(e)||"Unknown",i));return I({},n,r)}function Di(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ji,Oi=Ri.current,Ci(Ri,e),Ci(Ti,Ti.current),!0}function Ii(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=Ai(e,t,Oi),r.__reactInternalMemoizedMergedChildContext=e,Ei(Ti),Ei(Ri),Ci(Ri,e)):Ei(Ti),Ci(Ti,n)}var $i=null,Fi=!1,Mi=!1;function Bi(e){null===$i?$i=[e]:$i.push(e)}function Ui(){if(!Mi&&null!==$i){Mi=!0;var e=0,t=yt;try{var n=$i;for(yt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}$i=null,Fi=!1}catch(i){throw null!==$i&&($i=$i.slice(e+1)),Ye(Ze,Ui),i}finally{yt=t,Mi=!1}}return null}var Hi=[],Wi=0,Vi=null,qi=0,Yi=[],Qi=0,Ki=null,Gi=1,Xi="";function Ji(e,t){Hi[Wi++]=qi,Hi[Wi++]=Vi,Vi=e,qi=t}function Zi(e,t,n){Yi[Qi++]=Gi,Yi[Qi++]=Xi,Yi[Qi++]=Ki,Ki=e;var r=Gi;e=Xi;var i=32-ot(r)-1;r&=~(1<<i),n+=1;var a=32-ot(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Gi=1<<32-ot(t)+i|n<<i|r,Xi=a+e}else Gi=1<<a|n<<i|r,Xi=e}function ea(e){null!==e.return&&(Ji(e,1),Zi(e,1,0))}function ta(e){for(;e===Vi;)Vi=Hi[--Wi],Hi[Wi]=null,qi=Hi[--Wi],Hi[Wi]=null;for(;e===Ki;)Ki=Yi[--Qi],Yi[Qi]=null,Xi=Yi[--Qi],Yi[Qi]=null,Gi=Yi[--Qi],Yi[Qi]=null}var na=null,ra=null,ia=!1,aa=null;function oa(e,t){var n=Pu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function sa(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,na=e,ra=ui(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,na=e,ra=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Ki?{id:Gi,overflow:Xi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Pu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,na=e,ra=null,!0);default:return!1}}function la(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ua(e){if(ia){var t=ra;if(t){var n=t;if(!sa(e,t)){if(la(e))throw Error(a(418));t=ui(n.nextSibling);var r=na;t&&sa(e,t)?oa(r,n):(e.flags=-4097&e.flags|2,ia=!1,na=e)}}else{if(la(e))throw Error(a(418));e.flags=-4097&e.flags|2,ia=!1,na=e}}}function ca(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;na=e}function da(e){if(e!==na)return!1;if(!ia)return ca(e),ia=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ni(e.type,e.memoizedProps)),t&&(t=ra)){if(la(e))throw fa(),Error(a(418));for(;t;)oa(e,t),t=ui(t.nextSibling)}if(ca(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ra=ui(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ra=null}}else ra=na?ui(e.stateNode.nextSibling):null;return!0}function fa(){for(var e=ra;e;)e=ui(e.nextSibling)}function pa(){ra=na=null,ia=!1}function ha(e){null===aa?aa=[e]:aa.push(e)}var ga=x.ReactCurrentBatchConfig;function ma(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var i=r,o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=i.refs;null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!==typeof e)throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function va(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ba(e){return(0,e._init)(e._payload)}function ya(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Nu(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Iu(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function u(e,t,n,r){var a=n.type;return a===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===z&&ba(a)===t.type)?((r=i(t,n.props)).ref=ma(e,t,n),r.return=e,r):((r=Lu(n.type,n.key,n.props,null,e.mode,r)).ref=ma(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=$u(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,a){return null===t||7!==t.tag?((t=Au(n,e.mode,r,a)).return=e,t):((t=i(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Iu(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Lu(t.type,t.key,t.props,null,e.mode,n)).ref=ma(e,null,t),n.return=e,n;case k:return(t=$u(t,e.mode,n)).return=e,t;case z:return f(e,(0,t._init)(t._payload),n)}if(te(t)||A(t))return(t=Au(t,e.mode,n,null)).return=e,t;va(e,t)}return null}function p(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===i?u(e,t,n,r):null;case k:return n.key===i?c(e,t,n,r):null;case z:return p(e,t,(i=n._init)(n._payload),r)}if(te(n)||A(n))return null!==i?null:d(e,t,n,r,null);va(e,n)}return null}function h(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case k:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case z:return h(e,t,n,(0,r._init)(r._payload),i)}if(te(r)||A(r))return d(t,e=e.get(n)||null,r,i,null);va(t,r)}return null}function g(i,a,s,l){for(var u=null,c=null,d=a,g=a=0,m=null;null!==d&&g<s.length;g++){d.index>g?(m=d,d=null):m=d.sibling;var v=p(i,d,s[g],l);if(null===v){null===d&&(d=m);break}e&&d&&null===v.alternate&&t(i,d),a=o(v,a,g),null===c?u=v:c.sibling=v,c=v,d=m}if(g===s.length)return n(i,d),ia&&Ji(i,g),u;if(null===d){for(;g<s.length;g++)null!==(d=f(i,s[g],l))&&(a=o(d,a,g),null===c?u=d:c.sibling=d,c=d);return ia&&Ji(i,g),u}for(d=r(i,d);g<s.length;g++)null!==(m=h(d,i,g,s[g],l))&&(e&&null!==m.alternate&&d.delete(null===m.key?g:m.key),a=o(m,a,g),null===c?u=m:c.sibling=m,c=m);return e&&d.forEach(function(e){return t(i,e)}),ia&&Ji(i,g),u}function m(i,s,l,u){var c=A(l);if("function"!==typeof c)throw Error(a(150));if(null==(l=c.call(l)))throw Error(a(151));for(var d=c=null,g=s,m=s=0,v=null,b=l.next();null!==g&&!b.done;m++,b=l.next()){g.index>m?(v=g,g=null):v=g.sibling;var y=p(i,g,b.value,u);if(null===y){null===g&&(g=v);break}e&&g&&null===y.alternate&&t(i,g),s=o(y,s,m),null===d?c=y:d.sibling=y,d=y,g=v}if(b.done)return n(i,g),ia&&Ji(i,m),c;if(null===g){for(;!b.done;m++,b=l.next())null!==(b=f(i,b.value,u))&&(s=o(b,s,m),null===d?c=b:d.sibling=b,d=b);return ia&&Ji(i,m),c}for(g=r(i,g);!b.done;m++,b=l.next())null!==(b=h(g,i,m,b.value,u))&&(e&&null!==b.alternate&&g.delete(null===b.key?m:b.key),s=o(b,s,m),null===d?c=b:d.sibling=b,d=b);return e&&g.forEach(function(e){return t(i,e)}),ia&&Ji(i,m),c}return function e(r,a,o,l){if("object"===typeof o&&null!==o&&o.type===S&&null===o.key&&(o=o.props.children),"object"===typeof o&&null!==o){switch(o.$$typeof){case w:e:{for(var u=o.key,c=a;null!==c;){if(c.key===u){if((u=o.type)===S){if(7===c.tag){n(r,c.sibling),(a=i(c,o.props.children)).return=r,r=a;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===z&&ba(u)===c.type){n(r,c.sibling),(a=i(c,o.props)).ref=ma(r,c,o),a.return=r,r=a;break e}n(r,c);break}t(r,c),c=c.sibling}o.type===S?((a=Au(o.props.children,r.mode,l,o.key)).return=r,r=a):((l=Lu(o.type,o.key,o.props,null,r.mode,l)).ref=ma(r,a,o),l.return=r,r=l)}return s(r);case k:e:{for(c=o.key;null!==a;){if(a.key===c){if(4===a.tag&&a.stateNode.containerInfo===o.containerInfo&&a.stateNode.implementation===o.implementation){n(r,a.sibling),(a=i(a,o.children||[])).return=r,r=a;break e}n(r,a);break}t(r,a),a=a.sibling}(a=$u(o,r.mode,l)).return=r,r=a}return s(r);case z:return e(r,a,(c=o._init)(o._payload),l)}if(te(o))return g(r,a,o,l);if(A(o))return m(r,a,o,l);va(r,o)}return"string"===typeof o&&""!==o||"number"===typeof o?(o=""+o,null!==a&&6===a.tag?(n(r,a.sibling),(a=i(a,o)).return=r,r=a):(n(r,a),(a=Iu(o,r.mode,l)).return=r,r=a),s(r)):n(r,a)}}var xa=ya(!0),wa=ya(!1),ka=_i(null),Sa=null,_a=null,Ea=null;function Ca(){Ea=_a=Sa=null}function ja(e){var t=ka.current;Ei(ka),e._currentValue=t}function Ra(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ta(e,t){Sa=e,Ea=_a=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(ys=!0),e.firstContext=null)}function Oa(e){var t=e._currentValue;if(Ea!==e)if(e={context:e,memoizedValue:t,next:null},null===_a){if(null===Sa)throw Error(a(308));_a=e,Sa.dependencies={lanes:0,firstContext:e}}else _a=_a.next=e;return t}var Pa=null;function za(e){null===Pa?Pa=[e]:Pa.push(e)}function Na(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,za(t)):(n.next=i.next,i.next=n),t.interleaved=n,La(e,r)}function La(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Aa=!1;function Da(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ia(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $a(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fa(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Rl)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,La(e,n)}return null===(i=r.interleaved)?(t.next=t,za(r)):(t.next=i.next,i.next=t),r.interleaved=t,La(e,n)}function Ma(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}function Ba(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?i=a=o:a=a.next=o,n=n.next}while(null!==n);null===a?i=a=t:a=a.next=t}else i=a=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ua(e,t,n,r){var i=e.updateQueue;Aa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,u=l.next;l.next=null,null===o?a=u:o.next=u,o=l;var c=e.alternate;null!==c&&((s=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===s?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(null!==a){var d=i.baseState;for(o=0,c=u=l=null,s=a;;){var f=s.lane,p=s.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,g=s;switch(f=t,p=n,g.tag){case 1:if("function"===typeof(h=g.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=g.payload)?h.call(p,d,f):h)||void 0===f)break e;d=I({},d,f);break e;case 2:Aa=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(f=i.effects)?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===c?(u=c=p,l=d):c=c.next=p,o|=f;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(f=s).next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}if(null===c&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do{o|=i.lane,i=i.next}while(i!==t)}else null===a&&(i.shared.lanes=0);Dl|=o,e.lanes=o,e.memoizedState=d}}function Ha(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!==typeof i)throw Error(a(191,i));i.call(r)}}}var Wa={},Va=_i(Wa),qa=_i(Wa),Ya=_i(Wa);function Qa(e){if(e===Wa)throw Error(a(174));return e}function Ka(e,t){switch(Ci(Ya,t),Ci(qa,e),Ci(Va,Wa),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ei(Va),Ci(Va,t)}function Ga(){Ei(Va),Ei(qa),Ei(Ya)}function Xa(e){Qa(Ya.current);var t=Qa(Va.current),n=le(t,e.type);t!==n&&(Ci(qa,e),Ci(Va,n))}function Ja(e){qa.current===e&&(Ei(Va),Ei(qa))}var Za=_i(0);function eo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function no(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var ro=x.ReactCurrentDispatcher,io=x.ReactCurrentBatchConfig,ao=0,oo=null,so=null,lo=null,uo=!1,co=!1,fo=0,po=0;function ho(){throw Error(a(321))}function go(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sr(e[n],t[n]))return!1;return!0}function mo(e,t,n,r,i,o){if(ao=o,oo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=null===e||null===e.memoizedState?Zo:es,e=n(r,i),co){o=0;do{if(co=!1,fo=0,25<=o)throw Error(a(301));o+=1,lo=so=null,t.updateQueue=null,ro.current=ts,e=n(r,i)}while(co)}if(ro.current=Jo,t=null!==so&&null!==so.next,ao=0,lo=so=oo=null,uo=!1,t)throw Error(a(300));return e}function vo(){var e=0!==fo;return fo=0,e}function bo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===lo?oo.memoizedState=lo=e:lo=lo.next=e,lo}function yo(){if(null===so){var e=oo.alternate;e=null!==e?e.memoizedState:null}else e=so.next;var t=null===lo?oo.memoizedState:lo.next;if(null!==t)lo=t,so=e;else{if(null===e)throw Error(a(310));e={memoizedState:(so=e).memoizedState,baseState:so.baseState,baseQueue:so.baseQueue,queue:so.queue,next:null},null===lo?oo.memoizedState=lo=e:lo=lo.next=e}return lo}function xo(e,t){return"function"===typeof t?t(e):t}function wo(e){var t=yo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=so,i=r.baseQueue,o=n.pending;if(null!==o){if(null!==i){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(null!==i){o=i.next,r=r.baseState;var l=s=null,u=null,c=o;do{var d=c.lane;if((ao&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(l=u=f,s=r):u=u.next=f,oo.lanes|=d,Dl|=d}c=c.next}while(null!==c&&c!==o);null===u?s=r:u.next=l,sr(r,t.memoizedState)||(ys=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{o=i.lane,oo.lanes|=o,Dl|=o,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ko(e){var t=yo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{o=e(o,s.action),s=s.next}while(s!==i);sr(o,t.memoizedState)||(ys=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function So(){}function _o(e,t){var n=oo,r=yo(),i=t(),o=!sr(r.memoizedState,i);if(o&&(r.memoizedState=i,ys=!0),r=r.queue,Do(jo.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||null!==lo&&1&lo.memoizedState.tag){if(n.flags|=2048,Po(9,Co.bind(null,n,r,i,t),void 0,null),null===Tl)throw Error(a(349));0!==(30&ao)||Eo(n,t,i)}return i}function Eo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Co(e,t,n,r){t.value=n,t.getSnapshot=r,Ro(t)&&To(e)}function jo(e,t,n){return n(function(){Ro(t)&&To(e)})}function Ro(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sr(e,n)}catch(r){return!0}}function To(e){var t=La(e,1);null!==t&&nu(t,e,1,-1)}function Oo(e){var t=bo();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:e},t.queue=e,e=e.dispatch=Qo.bind(null,oo,e),[t.memoizedState,e]}function Po(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function zo(){return yo().memoizedState}function No(e,t,n,r){var i=bo();oo.flags|=e,i.memoizedState=Po(1|t,n,void 0,void 0===r?null:r)}function Lo(e,t,n,r){var i=yo();r=void 0===r?null:r;var a=void 0;if(null!==so){var o=so.memoizedState;if(a=o.destroy,null!==r&&go(r,o.deps))return void(i.memoizedState=Po(t,n,a,r))}oo.flags|=e,i.memoizedState=Po(1|t,n,a,r)}function Ao(e,t){return No(8390656,8,e,t)}function Do(e,t){return Lo(2048,8,e,t)}function Io(e,t){return Lo(4,2,e,t)}function $o(e,t){return Lo(4,4,e,t)}function Fo(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Mo(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Lo(4,4,Fo.bind(null,t,e),n)}function Bo(){}function Uo(e,t){var n=yo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&go(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ho(e,t){var n=yo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&go(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wo(e,t,n){return 0===(21&ao)?(e.baseState&&(e.baseState=!1,ys=!0),e.memoizedState=n):(sr(n,t)||(n=gt(),oo.lanes|=n,Dl|=n,e.baseState=!0),t)}function Vo(e,t){var n=yt;yt=0!==n&&4>n?n:4,e(!0);var r=io.transition;io.transition={};try{e(!1),t()}finally{yt=n,io.transition=r}}function qo(){return yo().memoizedState}function Yo(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ko(e))Go(t,n);else if(null!==(n=Na(e,t,n,r))){nu(n,e,r,eu()),Xo(n,t,r)}}function Qo(e,t,n){var r=tu(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ko(e))Go(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,sr(s,o)){var l=t.interleaved;return null===l?(i.next=i,za(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(u){}null!==(n=Na(e,t,i,r))&&(nu(n,e,r,i=eu()),Xo(n,t,r))}}function Ko(e){var t=e.alternate;return e===oo||null!==t&&t===oo}function Go(e,t){co=uo=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xo(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}var Jo={readContext:Oa,useCallback:ho,useContext:ho,useEffect:ho,useImperativeHandle:ho,useInsertionEffect:ho,useLayoutEffect:ho,useMemo:ho,useReducer:ho,useRef:ho,useState:ho,useDebugValue:ho,useDeferredValue:ho,useTransition:ho,useMutableSource:ho,useSyncExternalStore:ho,useId:ho,unstable_isNewReconciler:!1},Zo={readContext:Oa,useCallback:function(e,t){return bo().memoizedState=[e,void 0===t?null:t],e},useContext:Oa,useEffect:Ao,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,No(4194308,4,Fo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return No(4194308,4,e,t)},useInsertionEffect:function(e,t){return No(4,2,e,t)},useMemo:function(e,t){var n=bo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yo.bind(null,oo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},bo().memoizedState=e},useState:Oo,useDebugValue:Bo,useDeferredValue:function(e){return bo().memoizedState=e},useTransition:function(){var e=Oo(!1),t=e[0];return e=Vo.bind(null,e[1]),bo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oo,i=bo();if(ia){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===Tl)throw Error(a(349));0!==(30&ao)||Eo(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ao(jo.bind(null,r,o,e),[e]),r.flags|=2048,Po(9,Co.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=bo(),t=Tl.identifierPrefix;if(ia){var n=Xi;t=":"+t+"R"+(n=(Gi&~(1<<32-ot(Gi)-1)).toString(32)+n),0<(n=fo++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=po++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},es={readContext:Oa,useCallback:Uo,useContext:Oa,useEffect:Do,useImperativeHandle:Mo,useInsertionEffect:Io,useLayoutEffect:$o,useMemo:Ho,useReducer:wo,useRef:zo,useState:function(){return wo(xo)},useDebugValue:Bo,useDeferredValue:function(e){return Wo(yo(),so.memoizedState,e)},useTransition:function(){return[wo(xo)[0],yo().memoizedState]},useMutableSource:So,useSyncExternalStore:_o,useId:qo,unstable_isNewReconciler:!1},ts={readContext:Oa,useCallback:Uo,useContext:Oa,useEffect:Do,useImperativeHandle:Mo,useInsertionEffect:Io,useLayoutEffect:$o,useMemo:Ho,useReducer:ko,useRef:zo,useState:function(){return ko(xo)},useDebugValue:Bo,useDeferredValue:function(e){var t=yo();return null===so?t.memoizedState=e:Wo(t,so.memoizedState,e)},useTransition:function(){return[ko(xo)[0],yo().memoizedState]},useMutableSource:So,useSyncExternalStore:_o,useId:qo,unstable_isNewReconciler:!1};function ns(e,t){if(e&&e.defaultProps){for(var n in t=I({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:I({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var is={isMounted:function(e){return!!(e=e._reactInternals)&&Ue(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),i=tu(e),a=$a(r,i);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Fa(e,a,i))&&(nu(t,e,i,r),Ma(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),i=tu(e),a=$a(r,i);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Fa(e,a,i))&&(nu(t,e,i,r),Ma(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),i=$a(n,r);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=Fa(e,i,r))&&(nu(t,e,r,n),Ma(t,e,r))}};function as(e,t,n,r,i,a,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!lr(n,r)||!lr(i,a))}function os(e,t,n){var r=!1,i=ji,a=t.contextType;return"object"===typeof a&&null!==a?a=Oa(a):(i=zi(t)?Oi:Ri.current,a=(r=null!==(r=t.contextTypes)&&void 0!==r)?Pi(e,i):ji),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=is,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function ss(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&is.enqueueReplaceState(t,t.state,null)}function ls(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Da(e);var a=t.contextType;"object"===typeof a&&null!==a?i.context=Oa(a):(a=zi(t)?Oi:Ri.current,i.context=Pi(e,a)),i.state=e.memoizedState,"function"===typeof(a=t.getDerivedStateFromProps)&&(rs(e,t,a,n),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&is.enqueueReplaceState(i,i.state,null),Ua(e,n,i,r),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function us(e,t){try{var n="",r=t;do{n+=B(r),r=r.return}while(r);var i=n}catch(a){i="\nError generating stack: "+a.message+"\n"+a.stack}return{value:e,source:t,stack:i,digest:null}}function cs(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ds(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fs="function"===typeof WeakMap?WeakMap:Map;function ps(e,t,n){(n=$a(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wl||(Wl=!0,Vl=r),ds(0,t)},n}function hs(e,t,n){(n=$a(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ds(0,t)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(n.callback=function(){ds(0,t),"function"!==typeof r&&(null===ql?ql=new Set([this]):ql.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function gs(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fs;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Eu.bind(null,e,t,n),t.then(e,e))}function ms(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vs(e,t,n,r,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=$a(-1,1)).tag=2,Fa(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var bs=x.ReactCurrentOwner,ys=!1;function xs(e,t,n,r){t.child=null===e?wa(t,null,n,r):xa(t,e.child,n,r)}function ws(e,t,n,r,i){n=n.render;var a=t.ref;return Ta(t,i),r=mo(e,t,n,r,a,i),n=vo(),null===e||ys?(ia&&n&&ea(t),t.flags|=1,xs(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ws(e,t,i))}function ks(e,t,n,r,i){if(null===e){var a=n.type;return"function"!==typeof a||zu(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Lu(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,Ss(e,t,a,r,i))}if(a=e.child,0===(e.lanes&i)){var o=a.memoizedProps;if((n=null!==(n=n.compare)?n:lr)(o,r)&&e.ref===t.ref)return Ws(e,t,i)}return t.flags|=1,(e=Nu(a,r)).ref=t.ref,e.return=t,t.child=e}function Ss(e,t,n,r,i){if(null!==e){var a=e.memoizedProps;if(lr(a,r)&&e.ref===t.ref){if(ys=!1,t.pendingProps=r=a,0===(e.lanes&i))return t.lanes=e.lanes,Ws(e,t,i);0!==(131072&e.flags)&&(ys=!0)}}return Cs(e,t,n,r,i)}function _s(e,t,n){var r=t.pendingProps,i=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ci(Nl,zl),zl|=n;else{if(0===(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ci(Nl,zl),zl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==a?a.baseLanes:n,Ci(Nl,zl),zl|=r}else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,Ci(Nl,zl),zl|=r;return xs(e,t,i,n),t.child}function Es(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cs(e,t,n,r,i){var a=zi(n)?Oi:Ri.current;return a=Pi(t,a),Ta(t,i),n=mo(e,t,n,r,a,i),r=vo(),null===e||ys?(ia&&r&&ea(t),t.flags|=1,xs(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ws(e,t,i))}function js(e,t,n,r,i){if(zi(n)){var a=!0;Di(t)}else a=!1;if(Ta(t,i),null===t.stateNode)Hs(e,t),os(t,n,r),ls(t,n,r,i),r=!0;else if(null===e){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;"object"===typeof u&&null!==u?u=Oa(u):u=Pi(t,u=zi(n)?Oi:Ri.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof o.getSnapshotBeforeUpdate;d||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(s!==r||l!==u)&&ss(t,o,r,u),Aa=!1;var f=t.memoizedState;o.state=f,Ua(t,r,o,i),l=t.memoizedState,s!==r||f!==l||Ti.current||Aa?("function"===typeof c&&(rs(t,n,c,r),l=t.memoizedState),(s=Aa||as(t,n,s,r,f,l,u))?(d||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Ia(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:ns(t.type,s),o.props=u,d=t.pendingProps,f=o.context,"object"===typeof(l=n.contextType)&&null!==l?l=Oa(l):l=Pi(t,l=zi(n)?Oi:Ri.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(s!==d||f!==l)&&ss(t,o,r,l),Aa=!1,f=t.memoizedState,o.state=f,Ua(t,r,o,i);var h=t.memoizedState;s!==d||f!==h||Ti.current||Aa?("function"===typeof p&&(rs(t,n,p,r),h=t.memoizedState),(u=Aa||as(t,n,u,r,f,h,l)||!1)?(c||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,h,l),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,h,l)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),o.props=r,o.state=h,o.context=l,r=u):("function"!==typeof o.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Rs(e,t,n,r,a,i)}function Rs(e,t,n,r,i,a){Es(e,t);var o=0!==(128&t.flags);if(!r&&!o)return i&&Ii(t,n,!1),Ws(e,t,a);r=t.stateNode,bs.current=t;var s=o&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=xa(t,e.child,null,a),t.child=xa(t,null,s,a)):xs(e,t,s,a),t.memoizedState=r.state,i&&Ii(t,n,!0),t.child}function Ts(e){var t=e.stateNode;t.pendingContext?Li(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Li(0,t.context,!1),Ka(e,t.containerInfo)}function Os(e,t,n,r,i){return pa(),ha(i),t.flags|=256,xs(e,t,n,r),t.child}var Ps,zs,Ns,Ls,As={dehydrated:null,treeContext:null,retryLane:0};function Ds(e){return{baseLanes:e,cachePool:null,transitions:null}}function Is(e,t,n){var r,i=t.pendingProps,o=Za.current,s=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&o)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),Ci(Za,1&o),null===e)return ua(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=i.children,e=i.fallback,s?(i=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&i)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=Du(l,i,0,null),e=Au(e,i,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ds(n),t.memoizedState=As,e):$s(t,l));if(null!==(o=e.memoizedState)&&null!==(r=o.dehydrated))return function(e,t,n,r,i,o,s){if(n)return 256&t.flags?(t.flags&=-257,Fs(e,t,s,r=cs(Error(a(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Du({mode:"visible",children:r.children},i,0,null),(o=Au(o,i,s,null)).flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,0!==(1&t.mode)&&xa(t,e.child,null,s),t.child.memoizedState=Ds(s),t.memoizedState=As,o);if(0===(1&t.mode))return Fs(e,t,s,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var l=r.dgst;return r=l,Fs(e,t,s,r=cs(o=Error(a(419)),r,void 0))}if(l=0!==(s&e.childLanes),ys||l){if(null!==(r=Tl)){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|s))?0:i)&&i!==o.retryLane&&(o.retryLane=i,La(e,i),nu(r,e,i,-1))}return gu(),Fs(e,t,s,r=cs(Error(a(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=ju.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ra=ui(i.nextSibling),na=t,ia=!0,aa=null,null!==e&&(Yi[Qi++]=Gi,Yi[Qi++]=Xi,Yi[Qi++]=Ki,Gi=e.id,Xi=e.overflow,Ki=t),t=$s(t,r.children),t.flags|=4096,t)}(e,t,l,i,r,o,n);if(s){s=i.fallback,l=t.mode,r=(o=e.child).sibling;var u={mode:"hidden",children:i.children};return 0===(1&l)&&t.child!==o?((i=t.child).childLanes=0,i.pendingProps=u,t.deletions=null):(i=Nu(o,u)).subtreeFlags=14680064&o.subtreeFlags,null!==r?s=Nu(r,s):(s=Au(s,l,n,null)).flags|=2,s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,l=null===(l=e.child.memoizedState)?Ds(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=As,i}return e=(s=e.child).sibling,i=Nu(s,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function $s(e,t){return(t=Du({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fs(e,t,n,r){return null!==r&&ha(r),xa(t,e.child,null,n),(e=$s(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ms(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ra(e.return,t,n)}function Bs(e,t,n,r,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Us(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(xs(e,t,r.children,n),0!==(2&(r=Za.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ms(e,n,t);else if(19===e.tag)Ms(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ci(Za,r),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===eo(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bs(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===eo(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bs(t,!0,n,null,a);break;case"together":Bs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hs(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ws(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Dl|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=Nu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Nu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vs(e,t){if(!ia)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qs(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ys(e,t,n){var r=t.pendingProps;switch(ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qs(t),null;case 1:case 17:return zi(t.type)&&Ni(),qs(t),null;case 3:return r=t.stateNode,Ga(),Ei(Ti),Ei(Ri),no(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(da(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==aa&&(ou(aa),aa=null))),zs(e,t),qs(t),null;case 5:Ja(t);var i=Qa(Ya.current);if(n=t.type,null!==e&&null!=t.stateNode)Ns(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(a(166));return qs(t),null}if(e=Qa(Va.current),da(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[fi]=t,r[pi]=o,e=0!==(1&t.mode),n){case"dialog":Fr("cancel",r),Fr("close",r);break;case"iframe":case"object":case"embed":Fr("load",r);break;case"video":case"audio":for(i=0;i<Ar.length;i++)Fr(Ar[i],r);break;case"source":Fr("error",r);break;case"img":case"image":case"link":Fr("error",r),Fr("load",r);break;case"details":Fr("toggle",r);break;case"input":G(r,o),Fr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Fr("invalid",r);break;case"textarea":ie(r,o),Fr("invalid",r)}for(var l in be(n,o),i=null,o)if(o.hasOwnProperty(l)){var u=o[l];"children"===l?"string"===typeof u?r.textContent!==u&&(!0!==o.suppressHydrationWarning&&Jr(r.textContent,u,e),i=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==o.suppressHydrationWarning&&Jr(r.textContent,u,e),i=["children",""+u]):s.hasOwnProperty(l)&&null!=u&&"onScroll"===l&&Fr("scroll",r)}switch(n){case"input":q(r),Z(r,o,!0);break;case"textarea":q(r),oe(r);break;case"select":case"option":break;default:"function"===typeof o.onClick&&(r.onclick=Zr)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{l=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),"select"===n&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[fi]=t,e[pi]=r,Ps(e,t,!1,!1),t.stateNode=e;e:{switch(l=ye(n,r),n){case"dialog":Fr("cancel",e),Fr("close",e),i=r;break;case"iframe":case"object":case"embed":Fr("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ar.length;i++)Fr(Ar[i],e);i=r;break;case"source":Fr("error",e),i=r;break;case"img":case"image":case"link":Fr("error",e),Fr("load",e),i=r;break;case"details":Fr("toggle",e),i=r;break;case"input":G(e,r),i=K(e,r),Fr("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=I({},r,{value:void 0}),Fr("invalid",e);break;case"textarea":ie(e,r),i=re(e,r),Fr("invalid",e)}for(o in be(n,i),u=i)if(u.hasOwnProperty(o)){var c=u[o];"style"===o?me(e,c):"dangerouslySetInnerHTML"===o?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===o?"string"===typeof c?("textarea"!==n||""!==c)&&fe(e,c):"number"===typeof c&&fe(e,""+c):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(s.hasOwnProperty(o)?null!=c&&"onScroll"===o&&Fr("scroll",e):null!=c&&y(e,o,c,l))}switch(n){case"input":q(e),Z(e,r,!1);break;case"textarea":q(e),oe(e);break;case"option":null!=r.value&&e.setAttribute("value",""+W(r.value));break;case"select":e.multiple=!!r.multiple,null!=(o=r.value)?ne(e,!!r.multiple,o,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return qs(t),null;case 6:if(e&&null!=t.stateNode)Ls(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(a(166));if(n=Qa(Ya.current),Qa(Va.current),da(t)){if(r=t.stateNode,n=t.memoizedProps,r[fi]=t,(o=r.nodeValue!==n)&&null!==(e=na))switch(e.tag){case 3:Jr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!==(1&e.mode))}o&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fi]=t,t.stateNode=r}return qs(t),null;case 13:if(Ei(Za),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ia&&null!==ra&&0!==(1&t.mode)&&0===(128&t.flags))fa(),pa(),t.flags|=98560,o=!1;else if(o=da(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(a(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(a(317));o[fi]=t}else pa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;qs(t),o=!1}else null!==aa&&(ou(aa),aa=null),o=!0;if(!o)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&Za.current)?0===Ll&&(Ll=3):gu())),null!==t.updateQueue&&(t.flags|=4),qs(t),null);case 4:return Ga(),zs(e,t),null===e&&Ur(t.stateNode.containerInfo),qs(t),null;case 10:return ja(t.type._context),qs(t),null;case 19:if(Ei(Za),null===(o=t.memoizedState))return qs(t),null;if(r=0!==(128&t.flags),null===(l=o.rendering))if(r)Vs(o,!1);else{if(0!==Ll||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=eo(e))){for(t.flags|=128,Vs(o,!1),null!==(r=l.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(o=n).flags&=14680066,null===(l=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ci(Za,1&Za.current|2),t.child}e=e.sibling}null!==o.tail&&Xe()>Ul&&(t.flags|=128,r=!0,Vs(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=eo(l))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vs(o,!0),null===o.tail&&"hidden"===o.tailMode&&!l.alternate&&!ia)return qs(t),null}else 2*Xe()-o.renderingStartTime>Ul&&1073741824!==n&&(t.flags|=128,r=!0,Vs(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=o.last)?n.sibling=l:t.child=l,o.last=l)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Xe(),t.sibling=null,n=Za.current,Ci(Za,r?1&n|2:1&n),t):(qs(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&zl)&&(qs(t),6&t.subtreeFlags&&(t.flags|=8192)):qs(t),null;case 24:case 25:return null}throw Error(a(156,t.tag))}function Qs(e,t){switch(ta(t),t.tag){case 1:return zi(t.type)&&Ni(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Ga(),Ei(Ti),Ei(Ri),no(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Ja(t),null;case 13:if(Ei(Za),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));pa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ei(Za),null;case 4:return Ga(),null;case 10:return ja(t.type._context),null;case 22:case 23:return du(),null;default:return null}}Ps=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},zs=function(){},Ns=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Qa(Va.current);var a,o=null;switch(n){case"input":i=K(e,i),r=K(e,r),o=[];break;case"select":i=I({},i,{value:void 0}),r=I({},r,{value:void 0}),o=[];break;case"textarea":i=re(e,i),r=re(e,r),o=[];break;default:"function"!==typeof i.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(c in be(n,r),n=null,i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&null!=i[c])if("style"===c){var l=i[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(s.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(l=null!=i?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(null!=u||null!=l))if("style"===c)if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(o||(o=[]),o.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,l=l?l.__html:void 0,null!=u&&l!==u&&(o=o||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(o=o||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(s.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Fr("scroll",e),o||l===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}},Ls=function(e,t,n,r){n!==r&&(t.flags|=4)};var Ks=!1,Gs=!1,Xs="function"===typeof WeakSet?WeakSet:Set,Js=null;function Zs(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){_u(e,t,r)}else n.current=null}function el(e,t,n){try{n()}catch(r){_u(e,t,r)}}var tl=!1;function nl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,void 0!==a&&el(t,n,a)}i=i.next}while(i!==r)}}function rl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function il(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function al(e){var t=e.alternate;null!==t&&(e.alternate=null,al(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fi],delete t[pi],delete t[gi],delete t[mi],delete t[vi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ol(e){return 5===e.tag||3===e.tag||4===e.tag}function sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ol(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ll(e,t,n),e=e.sibling;null!==e;)ll(e,t,n),e=e.sibling}function ul(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(ul(e,t,n),e=e.sibling;null!==e;)ul(e,t,n),e=e.sibling}var cl=null,dl=!1;function fl(e,t,n){for(n=n.child;null!==n;)pl(e,t,n),n=n.sibling}function pl(e,t,n){if(at&&"function"===typeof at.onCommitFiberUnmount)try{at.onCommitFiberUnmount(it,n)}catch(s){}switch(n.tag){case 5:Gs||Zs(n,t);case 6:var r=cl,i=dl;cl=null,fl(e,t,n),dl=i,null!==(cl=r)&&(dl?(e=cl,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cl.removeChild(n.stateNode));break;case 18:null!==cl&&(dl?(e=cl,n=n.stateNode,8===e.nodeType?li(e.parentNode,n):1===e.nodeType&&li(e,n),Ut(e)):li(cl,n.stateNode));break;case 4:r=cl,i=dl,cl=n.stateNode.containerInfo,dl=!0,fl(e,t,n),cl=r,dl=i;break;case 0:case 11:case 14:case 15:if(!Gs&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,void 0!==o&&(0!==(2&a)||0!==(4&a))&&el(n,t,o),i=i.next}while(i!==r)}fl(e,t,n);break;case 1:if(!Gs&&(Zs(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){_u(n,t,s)}fl(e,t,n);break;case 21:fl(e,t,n);break;case 22:1&n.mode?(Gs=(r=Gs)||null!==n.memoizedState,fl(e,t,n),Gs=r):fl(e,t,n);break;default:fl(e,t,n)}}function hl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Xs),t.forEach(function(t){var r=Ru.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function gl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:cl=l.stateNode,dl=!1;break e;case 3:case 4:cl=l.stateNode.containerInfo,dl=!0;break e}l=l.return}if(null===cl)throw Error(a(160));pl(o,s,i),cl=null,dl=!1;var u=i.alternate;null!==u&&(u.return=null),i.return=null}catch(c){_u(i,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)ml(t,e),t=t.sibling}function ml(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gl(t,e),vl(e),4&r){try{nl(3,e,e.return),rl(3,e)}catch(m){_u(e,e.return,m)}try{nl(5,e,e.return)}catch(m){_u(e,e.return,m)}}break;case 1:gl(t,e),vl(e),512&r&&null!==n&&Zs(n,n.return);break;case 5:if(gl(t,e),vl(e),512&r&&null!==n&&Zs(n,n.return),32&e.flags){var i=e.stateNode;try{fe(i,"")}catch(m){_u(e,e.return,m)}}if(4&r&&null!=(i=e.stateNode)){var o=e.memoizedProps,s=null!==n?n.memoizedProps:o,l=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===l&&"radio"===o.type&&null!=o.name&&X(i,o),ye(l,s);var c=ye(l,o);for(s=0;s<u.length;s+=2){var d=u[s],f=u[s+1];"style"===d?me(i,f):"dangerouslySetInnerHTML"===d?de(i,f):"children"===d?fe(i,f):y(i,d,f,c)}switch(l){case"input":J(i,o);break;case"textarea":ae(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;null!=h?ne(i,!!o.multiple,h,!1):p!==!!o.multiple&&(null!=o.defaultValue?ne(i,!!o.multiple,o.defaultValue,!0):ne(i,!!o.multiple,o.multiple?[]:"",!1))}i[pi]=o}catch(m){_u(e,e.return,m)}}break;case 6:if(gl(t,e),vl(e),4&r){if(null===e.stateNode)throw Error(a(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(m){_u(e,e.return,m)}}break;case 3:if(gl(t,e),vl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ut(t.containerInfo)}catch(m){_u(e,e.return,m)}break;case 4:default:gl(t,e),vl(e);break;case 13:gl(t,e),vl(e),8192&(i=e.child).flags&&(o=null!==i.memoizedState,i.stateNode.isHidden=o,!o||null!==i.alternate&&null!==i.alternate.memoizedState||(Bl=Xe())),4&r&&hl(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Gs=(c=Gs)||d,gl(t,e),Gs=c):gl(t,e),vl(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Js=e,d=e.child;null!==d;){for(f=Js=d;null!==Js;){switch(h=(p=Js).child,p.tag){case 0:case 11:case 14:case 15:nl(4,p,p.return);break;case 1:Zs(p,p.return);var g=p.stateNode;if("function"===typeof g.componentWillUnmount){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(m){_u(r,n,m)}}break;case 5:Zs(p,p.return);break;case 22:if(null!==p.memoizedState){wl(f);continue}}null!==h?(h.return=p,Js=h):wl(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{i=f.stateNode,c?"function"===typeof(o=i.style).setProperty?o.setProperty("display","none","important"):o.display="none":(l=f.stateNode,s=void 0!==(u=f.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,l.style.display=ge("display",s))}catch(m){_u(e,e.return,m)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(m){_u(e,e.return,m)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:gl(t,e),vl(e),4&r&&hl(e);case 21:}}function vl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(ol(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(fe(i,""),r.flags&=-33),ul(e,sl(e),i);break;case 3:case 4:var o=r.stateNode.containerInfo;ll(e,sl(e),o);break;default:throw Error(a(161))}}catch(s){_u(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function bl(e,t,n){Js=e,yl(e,t,n)}function yl(e,t,n){for(var r=0!==(1&e.mode);null!==Js;){var i=Js,a=i.child;if(22===i.tag&&r){var o=null!==i.memoizedState||Ks;if(!o){var s=i.alternate,l=null!==s&&null!==s.memoizedState||Gs;s=Ks;var u=Gs;if(Ks=o,(Gs=l)&&!u)for(Js=i;null!==Js;)l=(o=Js).child,22===o.tag&&null!==o.memoizedState?kl(i):null!==l?(l.return=o,Js=l):kl(i);for(;null!==a;)Js=a,yl(a,t,n),a=a.sibling;Js=i,Ks=s,Gs=u}xl(e)}else 0!==(8772&i.subtreeFlags)&&null!==a?(a.return=i,Js=a):xl(e)}}function xl(e){for(;null!==Js;){var t=Js;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Gs||rl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Gs)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ns(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Ha(t,o,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ha(t,s,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Ut(f)}}}break;default:throw Error(a(163))}Gs||512&t.flags&&il(t)}catch(p){_u(t,t.return,p)}}if(t===e){Js=null;break}if(null!==(n=t.sibling)){n.return=t.return,Js=n;break}Js=t.return}}function wl(e){for(;null!==Js;){var t=Js;if(t===e){Js=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Js=n;break}Js=t.return}}function kl(e){for(;null!==Js;){var t=Js;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(l){_u(t,n,l)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){_u(t,i,l)}}var a=t.return;try{il(t)}catch(l){_u(t,a,l)}break;case 5:var o=t.return;try{il(t)}catch(l){_u(t,o,l)}}}catch(l){_u(t,t.return,l)}if(t===e){Js=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Js=s;break}Js=t.return}}var Sl,_l=Math.ceil,El=x.ReactCurrentDispatcher,Cl=x.ReactCurrentOwner,jl=x.ReactCurrentBatchConfig,Rl=0,Tl=null,Ol=null,Pl=0,zl=0,Nl=_i(0),Ll=0,Al=null,Dl=0,Il=0,$l=0,Fl=null,Ml=null,Bl=0,Ul=1/0,Hl=null,Wl=!1,Vl=null,ql=null,Yl=!1,Ql=null,Kl=0,Gl=0,Xl=null,Jl=-1,Zl=0;function eu(){return 0!==(6&Rl)?Xe():-1!==Jl?Jl:Jl=Xe()}function tu(e){return 0===(1&e.mode)?1:0!==(2&Rl)&&0!==Pl?Pl&-Pl:null!==ga.transition?(0===Zl&&(Zl=gt()),Zl):0!==(e=yt)?e:e=void 0===(e=window.event)?16:Gt(e.type)}function nu(e,t,n,r){if(50<Gl)throw Gl=0,Xl=null,Error(a(185));vt(e,n,r),0!==(2&Rl)&&e===Tl||(e===Tl&&(0===(2&Rl)&&(Il|=n),4===Ll&&su(e,Pl)),ru(e,r),1===n&&0===Rl&&0===(1&t.mode)&&(Ul=Xe()+500,Fi&&Ui()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-ot(a),s=1<<o,l=i[o];-1===l?0!==(s&n)&&0===(s&r)||(i[o]=pt(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}(e,t);var r=ft(e,e===Tl?Pl:0);if(0===r)null!==n&&Qe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Qe(n),1===t)0===e.tag?function(e){Fi=!0,Bi(e)}(lu.bind(null,e)):Bi(lu.bind(null,e)),oi(function(){0===(6&Rl)&&Ui()}),n=null;else{switch(xt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Tu(n,iu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function iu(e,t){if(Jl=-1,Zl=0,0!==(6&Rl))throw Error(a(327));var n=e.callbackNode;if(ku()&&e.callbackNode!==n)return null;var r=ft(e,e===Tl?Pl:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=mu(e,r);else{t=r;var i=Rl;Rl|=2;var o=hu();for(Tl===e&&Pl===t||(Hl=null,Ul=Xe()+500,fu(e,t));;)try{bu();break}catch(l){pu(e,l)}Ca(),El.current=o,Rl=i,null!==Ol?t=0:(Tl=null,Pl=0,t=Ll)}if(0!==t){if(2===t&&(0!==(i=ht(e))&&(r=i,t=au(e,i))),1===t)throw n=Al,fu(e,0),su(e,r),ru(e,Xe()),n;if(6===t)su(e,r);else{if(i=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!sr(a(),i))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=mu(e,r))&&(0!==(o=ht(e))&&(r=o,t=au(e,o))),1===t))throw n=Al,fu(e,0),su(e,r),ru(e,Xe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:case 5:wu(e,Ml,Hl);break;case 3:if(su(e,r),(130023424&r)===r&&10<(t=Bl+500-Xe())){if(0!==ft(e,0))break;if(((i=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ri(wu.bind(null,e,Ml,Hl),t);break}wu(e,Ml,Hl);break;case 4:if(su(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ot(r);o=1<<s,(s=t[s])>i&&(i=s),r&=~o}if(r=i,10<(r=(120>(r=Xe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_l(r/1960))-r)){e.timeoutHandle=ri(wu.bind(null,e,Ml,Hl),r);break}wu(e,Ml,Hl);break;default:throw Error(a(329))}}}return ru(e,Xe()),e.callbackNode===n?iu.bind(null,e):null}function au(e,t){var n=Fl;return e.current.memoizedState.isDehydrated&&(fu(e,t).flags|=256),2!==(e=mu(e,t))&&(t=Ml,Ml=n,null!==t&&ou(t)),e}function ou(e){null===Ml?Ml=e:Ml.push.apply(Ml,e)}function su(e,t){for(t&=~$l,t&=~Il,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function lu(e){if(0!==(6&Rl))throw Error(a(327));ku();var t=ft(e,0);if(0===(1&t))return ru(e,Xe()),null;var n=mu(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=au(e,r))}if(1===n)throw n=Al,fu(e,0),su(e,t),ru(e,Xe()),n;if(6===n)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wu(e,Ml,Hl),ru(e,Xe()),null}function uu(e,t){var n=Rl;Rl|=1;try{return e(t)}finally{0===(Rl=n)&&(Ul=Xe()+500,Fi&&Ui())}}function cu(e){null!==Ql&&0===Ql.tag&&0===(6&Rl)&&ku();var t=Rl;Rl|=1;var n=jl.transition,r=yt;try{if(jl.transition=null,yt=1,e)return e()}finally{yt=r,jl.transition=n,0===(6&(Rl=t))&&Ui()}}function du(){zl=Nl.current,Ei(Nl)}function fu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ii(n)),null!==Ol)for(n=Ol.return;null!==n;){var r=n;switch(ta(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Ni();break;case 3:Ga(),Ei(Ti),Ei(Ri),no();break;case 5:Ja(r);break;case 4:Ga();break;case 13:case 19:Ei(Za);break;case 10:ja(r.type._context);break;case 22:case 23:du()}n=n.return}if(Tl=e,Ol=e=Nu(e.current,null),Pl=zl=t,Ll=0,Al=null,$l=Il=Dl=0,Ml=Fl=null,null!==Pa){for(t=0;t<Pa.length;t++)if(null!==(r=(n=Pa[t]).interleaved)){n.interleaved=null;var i=r.next,a=n.pending;if(null!==a){var o=a.next;a.next=i,r.next=o}n.pending=r}Pa=null}return e}function pu(e,t){for(;;){var n=Ol;try{if(Ca(),ro.current=Jo,uo){for(var r=oo.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}uo=!1}if(ao=0,lo=so=oo=null,co=!1,fo=0,Cl.current=null,null===n||null===n.return){Ll=1,Al=t,Ol=null;break}e:{var o=e,s=n.return,l=n,u=t;if(t=Pl,l.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=l,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=ms(s);if(null!==h){h.flags&=-257,vs(h,s,l,0,t),1&h.mode&&gs(o,c,t),u=c;var g=(t=h).updateQueue;if(null===g){var m=new Set;m.add(u),t.updateQueue=m}else g.add(u);break e}if(0===(1&t)){gs(o,c,t),gu();break e}u=Error(a(426))}else if(ia&&1&l.mode){var v=ms(s);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vs(v,s,l,0,t),ha(us(u,l));break e}}o=u=us(u,l),4!==Ll&&(Ll=2),null===Fl?Fl=[o]:Fl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Ba(o,ps(0,u,t));break e;case 1:l=u;var b=o.type,y=o.stateNode;if(0===(128&o.flags)&&("function"===typeof b.getDerivedStateFromError||null!==y&&"function"===typeof y.componentDidCatch&&(null===ql||!ql.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t,Ba(o,hs(o,l,t));break e}}o=o.return}while(null!==o)}xu(n)}catch(x){t=x,Ol===n&&null!==n&&(Ol=n=n.return);continue}break}}function hu(){var e=El.current;return El.current=Jo,null===e?Jo:e}function gu(){0!==Ll&&3!==Ll&&2!==Ll||(Ll=4),null===Tl||0===(268435455&Dl)&&0===(268435455&Il)||su(Tl,Pl)}function mu(e,t){var n=Rl;Rl|=2;var r=hu();for(Tl===e&&Pl===t||(Hl=null,fu(e,t));;)try{vu();break}catch(i){pu(e,i)}if(Ca(),Rl=n,El.current=r,null!==Ol)throw Error(a(261));return Tl=null,Pl=0,Ll}function vu(){for(;null!==Ol;)yu(Ol)}function bu(){for(;null!==Ol&&!Ke();)yu(Ol)}function yu(e){var t=Sl(e.alternate,e,zl);e.memoizedProps=e.pendingProps,null===t?xu(e):Ol=t,Cl.current=null}function xu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Ys(n,t,zl)))return void(Ol=n)}else{if(null!==(n=Qs(n,t)))return n.flags&=32767,void(Ol=n);if(null===e)return Ll=6,void(Ol=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ol=t);Ol=t=e}while(null!==t);0===Ll&&(Ll=5)}function wu(e,t,n){var r=yt,i=jl.transition;try{jl.transition=null,yt=1,function(e,t,n,r){do{ku()}while(null!==Ql);if(0!==(6&Rl))throw Error(a(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ot(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}(e,o),e===Tl&&(Ol=Tl=null,Pl=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Yl||(Yl=!0,Tu(tt,function(){return ku(),null})),o=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||o){o=jl.transition,jl.transition=null;var s=yt;yt=1;var l=Rl;Rl|=4,Cl.current=null,function(e,t){if(ei=Wt,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(w){n=null;break e}var s=0,l=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==i&&3!==f.nodeType||(l=s+i),f!==o||0!==r&&3!==f.nodeType||(u=s+r),3===f.nodeType&&(s+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===i&&(l=s),p===o&&++d===r&&(u=s),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===l||-1===u?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ti={focusedElem:e,selectionRange:n},Wt=!1,Js=t;null!==Js;)if(e=(t=Js).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Js=e;else for(;null!==Js;){t=Js;try{var g=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==g){var m=g.memoizedProps,v=g.memoizedState,b=t.stateNode,y=b.getSnapshotBeforeUpdate(t.elementType===t.type?m:ns(t.type,m),v);b.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(a(163))}}catch(w){_u(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Js=e;break}Js=t.return}g=tl,tl=!1}(e,n),ml(n,e),hr(ti),Wt=!!ei,ti=ei=null,e.current=n,bl(n,e,i),Ge(),Rl=l,yt=s,jl.transition=o}else e.current=n;if(Yl&&(Yl=!1,Ql=e,Kl=i),o=e.pendingLanes,0===o&&(ql=null),function(e){if(at&&"function"===typeof at.onCommitFiberRoot)try{at.onCommitFiberRoot(it,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,Xe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wl)throw Wl=!1,e=Vl,Vl=null,e;0!==(1&Kl)&&0!==e.tag&&ku(),o=e.pendingLanes,0!==(1&o)?e===Xl?Gl++:(Gl=0,Xl=e):Gl=0,Ui()}(e,t,n,r)}finally{jl.transition=i,yt=r}return null}function ku(){if(null!==Ql){var e=xt(Kl),t=jl.transition,n=yt;try{if(jl.transition=null,yt=16>e?16:e,null===Ql)var r=!1;else{if(e=Ql,Ql=null,Kl=0,0!==(6&Rl))throw Error(a(331));var i=Rl;for(Rl|=4,Js=e.current;null!==Js;){var o=Js,s=o.child;if(0!==(16&Js.flags)){var l=o.deletions;if(null!==l){for(var u=0;u<l.length;u++){var c=l[u];for(Js=c;null!==Js;){var d=Js;switch(d.tag){case 0:case 11:case 15:nl(8,d,o)}var f=d.child;if(null!==f)f.return=d,Js=f;else for(;null!==Js;){var p=(d=Js).sibling,h=d.return;if(al(d),d===c){Js=null;break}if(null!==p){p.return=h,Js=p;break}Js=h}}}var g=o.alternate;if(null!==g){var m=g.child;if(null!==m){g.child=null;do{var v=m.sibling;m.sibling=null,m=v}while(null!==m)}}Js=o}}if(0!==(2064&o.subtreeFlags)&&null!==s)s.return=o,Js=s;else e:for(;null!==Js;){if(0!==(2048&(o=Js).flags))switch(o.tag){case 0:case 11:case 15:nl(9,o,o.return)}var b=o.sibling;if(null!==b){b.return=o.return,Js=b;break e}Js=o.return}}var y=e.current;for(Js=y;null!==Js;){var x=(s=Js).child;if(0!==(2064&s.subtreeFlags)&&null!==x)x.return=s,Js=x;else e:for(s=y;null!==Js;){if(0!==(2048&(l=Js).flags))try{switch(l.tag){case 0:case 11:case 15:rl(9,l)}}catch(k){_u(l,l.return,k)}if(l===s){Js=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,Js=w;break e}Js=l.return}}if(Rl=i,Ui(),at&&"function"===typeof at.onPostCommitFiberRoot)try{at.onPostCommitFiberRoot(it,e)}catch(k){}r=!0}return r}finally{yt=n,jl.transition=t}}return!1}function Su(e,t,n){e=Fa(e,t=ps(0,t=us(n,t),1),1),t=eu(),null!==e&&(vt(e,1,t),ru(e,t))}function _u(e,t,n){if(3===e.tag)Su(e,e,n);else for(;null!==t;){if(3===t.tag){Su(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===ql||!ql.has(r))){t=Fa(t,e=hs(t,e=us(n,e),1),1),e=eu(),null!==t&&(vt(t,1,e),ru(t,e));break}}t=t.return}}function Eu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,Tl===e&&(Pl&n)===n&&(4===Ll||3===Ll&&(130023424&Pl)===Pl&&500>Xe()-Bl?fu(e,0):$l|=n),ru(e,t)}function Cu(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=La(e,t))&&(vt(e,t,n),ru(e,n))}function ju(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Cu(e,n)}function Ru(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}null!==r&&r.delete(t),Cu(e,n)}function Tu(e,t){return Ye(e,t)}function Ou(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pu(e,t,n,r){return new Ou(e,t,n,r)}function zu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Nu(e,t){var n=e.alternate;return null===n?((n=Pu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lu(e,t,n,r,i,o){var s=2;if(r=e,"function"===typeof e)zu(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case S:return Au(n.children,i,o,t);case _:s=8,i|=8;break;case E:return(e=Pu(12,n,t,2|i)).elementType=E,e.lanes=o,e;case T:return(e=Pu(13,n,t,i)).elementType=T,e.lanes=o,e;case O:return(e=Pu(19,n,t,i)).elementType=O,e.lanes=o,e;case N:return Du(n,i,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:s=10;break e;case j:s=9;break e;case R:s=11;break e;case P:s=14;break e;case z:s=16,r=null;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=Pu(s,n,t,i)).elementType=e,t.type=r,t.lanes=o,t}function Au(e,t,n,r){return(e=Pu(7,e,r,t)).lanes=n,e}function Du(e,t,n,r){return(e=Pu(22,e,r,t)).elementType=N,e.lanes=n,e.stateNode={isHidden:!1},e}function Iu(e,t,n){return(e=Pu(6,e,null,t)).lanes=n,e}function $u(e,t,n){return(t=Pu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mt(0),this.expirationTimes=mt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mu(e,t,n,r,i,a,o,s,l){return e=new Fu(e,t,n,s,l),1===t?(t=1,!0===a&&(t|=8)):t=0,a=Pu(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Da(a),e}function Bu(e){if(!e)return ji;e:{if(Ue(e=e._reactInternals)!==e||1!==e.tag)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(zi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(a(171))}if(1===e.tag){var n=e.type;if(zi(n))return Ai(e,n,t)}return t}function Uu(e,t,n,r,i,a,o,s,l){return(e=Mu(n,r,!0,e,0,a,0,s,l)).context=Bu(null),n=e.current,(a=$a(r=eu(),i=tu(n))).callback=void 0!==t&&null!==t?t:null,Fa(n,a,i),e.current.lanes=i,vt(e,i,r),ru(e,r),e}function Hu(e,t,n,r){var i=t.current,a=eu(),o=tu(i);return n=Bu(n),null===t.context?t.context=n:t.pendingContext=n,(t=$a(a,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Fa(i,t,o))&&(nu(e,i,o,a),Ma(e,i,o)),o}function Wu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function qu(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}Sl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ti.current)ys=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return ys=!1,function(e,t,n){switch(t.tag){case 3:Ts(t),pa();break;case 5:Xa(t);break;case 1:zi(t.type)&&Di(t);break;case 4:Ka(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ci(ka,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ci(Za,1&Za.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Is(e,t,n):(Ci(Za,1&Za.current),null!==(e=Ws(e,t,n))?e.sibling:null);Ci(Za,1&Za.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Us(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ci(Za,Za.current),r)break;return null;case 22:case 23:return t.lanes=0,_s(e,t,n)}return Ws(e,t,n)}(e,t,n);ys=0!==(131072&e.flags)}else ys=!1,ia&&0!==(1048576&t.flags)&&Zi(t,qi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hs(e,t),e=t.pendingProps;var i=Pi(t,Ri.current);Ta(t,n),i=mo(null,t,r,e,i,n);var o=vo();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,zi(r)?(o=!0,Di(t)):o=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Da(t),i.updater=is,t.stateNode=i,i._reactInternals=t,ls(t,r,e,n),t=Rs(null,t,r,!0,o,n)):(t.tag=0,ia&&o&&ea(t),xs(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hs(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"===typeof e)return zu(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===R)return 11;if(e===P)return 14}return 2}(r),e=ns(r,e),i){case 0:t=Cs(null,t,r,e,n);break e;case 1:t=js(null,t,r,e,n);break e;case 11:t=ws(null,t,r,e,n);break e;case 14:t=ks(null,t,r,ns(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Cs(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 1:return r=t.type,i=t.pendingProps,js(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 3:e:{if(Ts(t),null===e)throw Error(a(387));r=t.pendingProps,i=(o=t.memoizedState).element,Ia(e,t),Ua(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Os(e,t,r,n,i=us(Error(a(423)),t));break e}if(r!==i){t=Os(e,t,r,n,i=us(Error(a(424)),t));break e}for(ra=ui(t.stateNode.containerInfo.firstChild),na=t,ia=!0,aa=null,n=wa(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(pa(),r===i){t=Ws(e,t,n);break e}xs(e,t,r,n)}t=t.child}return t;case 5:return Xa(t),null===e&&ua(t),r=t.type,i=t.pendingProps,o=null!==e?e.memoizedProps:null,s=i.children,ni(r,i)?s=null:null!==o&&ni(r,o)&&(t.flags|=32),Es(e,t),xs(e,t,s,n),t.child;case 6:return null===e&&ua(t),null;case 13:return Is(e,t,n);case 4:return Ka(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=xa(t,null,r,n):xs(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,ws(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 7:return xs(e,t,t.pendingProps,n),t.child;case 8:case 12:return xs(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Ci(ka,r._currentValue),r._currentValue=s,null!==o)if(sr(o.value,s)){if(o.children===i.children&&!Ti.current){t=Ws(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var l=o.dependencies;if(null!==l){s=o.child;for(var u=l.firstContext;null!==u;){if(u.context===r){if(1===o.tag){(u=$a(-1,n&-n)).tag=2;var c=o.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}o.lanes|=n,null!==(u=o.alternate)&&(u.lanes|=n),Ra(o.return,n,t),l.lanes|=n;break}u=u.next}}else if(10===o.tag)s=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(s=o.return))throw Error(a(341));s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),Ra(s,n,t),s=o.sibling}else s=o.child;if(null!==s)s.return=o;else for(s=o;null!==s;){if(s===t){s=null;break}if(null!==(o=s.sibling)){o.return=s.return,s=o;break}s=s.return}o=s}xs(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ta(t,n),r=r(i=Oa(i)),t.flags|=1,xs(e,t,r,n),t.child;case 14:return i=ns(r=t.type,t.pendingProps),ks(e,t,r,i=ns(r.type,i),n);case 15:return Ss(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ns(r,i),Hs(e,t),t.tag=1,zi(r)?(e=!0,Di(t)):e=!1,Ta(t,n),os(t,r,i),ls(t,r,i,n),Rs(null,t,r,!0,e,n);case 19:return Us(e,t,n);case 22:return _s(e,t,n)}throw Error(a(156,t.tag))};var Yu="function"===typeof reportError?reportError:function(e){console.error(e)};function Qu(e){this._internalRoot=e}function Ku(e){this._internalRoot=e}function Gu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Xu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Ju(){}function Zu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if("function"===typeof i){var s=i;i=function(){var e=Wu(o);s.call(e)}}Hu(t,o,e,i)}else o=function(e,t,n,r,i){if(i){if("function"===typeof r){var a=r;r=function(){var e=Wu(o);a.call(e)}}var o=Uu(t,r,e,0,null,!1,0,"",Ju);return e._reactRootContainer=o,e[hi]=o.current,Ur(8===e.nodeType?e.parentNode:e),cu(),o}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof r){var s=r;r=function(){var e=Wu(l);s.call(e)}}var l=Mu(e,0,!1,null,0,!1,0,"",Ju);return e._reactRootContainer=l,e[hi]=l.current,Ur(8===e.nodeType?e.parentNode:e),cu(function(){Hu(t,l,n,r)}),l}(n,t,e,i,r);return Wu(o)}Ku.prototype.render=Qu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Hu(e,t,null,null)},Ku.prototype.unmount=Qu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu(function(){Hu(null,e,null,null)}),t[hi]=null}},Ku.prototype.unstable_scheduleHydration=function(e){if(e){var t=_t();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nt.length&&0!==t&&t<Nt[n].priority;n++);Nt.splice(n,0,e),0===n&&It(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(bt(t,1|n),ru(t,Xe()),0===(6&Rl)&&(Ul=Xe()+500,Ui()))}break;case 13:cu(function(){var t=La(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}}),qu(e,1)}},kt=function(e){if(13===e.tag){var t=La(e,134217728);if(null!==t)nu(t,e,134217728,eu());qu(e,134217728)}},St=function(e){if(13===e.tag){var t=tu(e),n=La(e,t);if(null!==n)nu(n,e,t,eu());qu(e,t)}},_t=function(){return yt},Et=function(e,t){var n=yt;try{return yt=e,t()}finally{yt=n}},ke=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wi(r);if(!i)throw Error(a(90));Y(r),J(r,i)}}}break;case"textarea":ae(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Re=uu,Te=cu;var ec={usingClientEntryPoint:!1,Events:[yi,xi,wi,Ce,je,uu]},tc={findFiberByHostInstance:bi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{it=rc.inject(nc),at=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Gu(t))throw Error(a(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Gu(e))throw Error(a(299));var n=!1,r="",i=Yu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Mu(e,1,!1,null,0,n,0,r,i),e[hi]=t.current,Ur(8===e.nodeType?e.parentNode:e),new Qu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!Xu(t))throw Error(a(200));return Zu(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Gu(e))throw Error(a(405));var r=null!=n&&n.hydratedSources||null,i=!1,o="",s=Yu;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=Uu(t,null,e,1,null!=n?n:null,i,0,o,s),e[hi]=t.current,Ur(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ku(t)},t.render=function(e,t,n){if(!Xu(t))throw Error(a(200));return Zu(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Xu(e))throw Error(a(40));return!!e._reactRootContainer&&(cu(function(){Zu(null,null,e,!1,function(){e._reactRootContainer=null,e[hi]=null})}),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xu(n))throw Error(a(200));if(null==e||void 0===e._reactInternals)throw Error(a(38));return Zu(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&r;("object"==typeof s||"function"==typeof s)&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach(e=>o[e]=()=>r[e]);return o.default=()=>r,n.d(a,o),a}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{"use strict";var e={};n.r(e),n.d(e,{Decoder:()=>$t,Encoder:()=>Dt,PacketType:()=>At,protocol:()=>Lt});var t,r=n(43),i=n.t(r,2),a=n(391),o=n(950),s=n.t(o,2);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(t||(t={}));const u="popstate";function c(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function d(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function f(e,t){return{usr:e.state,key:e.key,idx:t}}function p(e,t,n,r){return void 0===n&&(n=null),l({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?g(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function h(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function g(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function m(e,n,r,i){void 0===i&&(i={});let{window:a=document.defaultView,v5Compat:o=!1}=i,s=a.history,d=t.Pop,g=null,m=v();function v(){return(s.state||{idx:null}).idx}function b(){d=t.Pop;let e=v(),n=null==e?null:e-m;m=e,g&&g({action:d,location:x.location,delta:n})}function y(e){let t="null"!==a.location.origin?a.location.origin:a.location.href,n="string"===typeof e?e:h(e);return n=n.replace(/ $/,"%20"),c(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==m&&(m=0,s.replaceState(l({},s.state,{idx:m}),""));let x={get action(){return d},get location(){return e(a,s)},listen(e){if(g)throw new Error("A history only accepts one active listener");return a.addEventListener(u,b),g=e,()=>{a.removeEventListener(u,b),g=null}},createHref:e=>n(a,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,n){d=t.Push;let i=p(x.location,e,n);r&&r(i,e),m=v()+1;let l=f(i,m),u=x.createHref(i);try{s.pushState(l,"",u)}catch(c){if(c instanceof DOMException&&"DataCloneError"===c.name)throw c;a.location.assign(u)}o&&g&&g({action:d,location:x.location,delta:1})},replace:function(e,n){d=t.Replace;let i=p(x.location,e,n);r&&r(i,e),m=v();let a=f(i,m),l=x.createHref(i);s.replaceState(a,"",l),o&&g&&g({action:d,location:x.location,delta:0})},go:e=>s.go(e)};return x}var v;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(v||(v={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function b(e,t,n){return void 0===n&&(n="/"),y(e,t,n,!1)}function y(e,t,n,r){let i=N(("string"===typeof t?g(t):t).pathname||"/",n);if(null==i)return null;let a=x(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(a);let o=null;for(let s=0;null==o&&s<a.length;++s){let e=z(i);o=O(a[s],e,r)}return o}function x(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,a)=>{let o={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};o.relativePath.startsWith("/")&&(c(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(r.length));let s=$([r,o.relativePath]),l=n.concat(o);e.children&&e.children.length>0&&(c(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),x(e.children,t,l,s)),(null!=e.path||e.index)&&t.push({path:s,score:T(s,e.index),routesMeta:l})};return e.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of w(e.path))i(e,t,r);else i(e,t)}),t}function w(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return i?[a,""]:[a];let o=w(r.join("/")),s=[];return s.push(...o.map(e=>""===e?a:[a,e].join("/"))),i&&s.push(...o),s.map(t=>e.startsWith("/")&&""===t?"/":t)}const k=/^:[\w-]+$/,S=3,_=2,E=1,C=10,j=-2,R=e=>"*"===e;function T(e,t){let n=e.split("/"),r=n.length;return n.some(R)&&(r+=j),t&&(r+=_),n.filter(e=>!R(e)).reduce((e,t)=>e+(k.test(t)?S:""===t?E:C),r)}function O(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,i={},a="/",o=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,u="/"===a?t:t.slice(a.length)||"/",c=P({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},u),d=e.route;if(!c&&l&&n&&!r[r.length-1].route.index&&(c=P({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:$([a,c.pathname]),pathnameBase:F($([a,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(a=$([a,c.pathnameBase]))}return o}function P(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);d("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let a=new RegExp(i,t?void 0:"i");return[a,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1),l=r.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=s[n]||"";o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e},{});return{params:l,pathname:a,pathnameBase:o,pattern:e}}function z(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return d(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function N(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function L(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function A(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function D(e,t){let n=A(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function I(e,t,n,r){let i;void 0===r&&(r=!1),"string"===typeof e?i=g(e):(i=l({},e),c(!i.pathname||!i.pathname.includes("?"),L("?","pathname","search",i)),c(!i.pathname||!i.pathname.includes("#"),L("#","pathname","hash",i)),c(!i.search||!i.search.includes("#"),L("#","search","hash",i)));let a,o=""===e||""===i.pathname,s=o?"/":i.pathname;if(null==s)a=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}a=e>=0?t[e]:"/"}let u=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"===typeof e?g(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:M(r),hash:B(i)}}(i,a),d=s&&"/"!==s&&s.endsWith("/"),f=(o||"."===s)&&n.endsWith("/");return u.pathname.endsWith("/")||!d&&!f||(u.pathname+="/"),u}const $=e=>e.join("/").replace(/\/\/+/g,"/"),F=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),M=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",B=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function U(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const H=["post","put","patch","delete"],W=(new Set(H),["get",...H]);new Set(W),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(this,arguments)}const q=r.createContext(null);const Y=r.createContext(null);const Q=r.createContext(null);const K=r.createContext(null);const G=r.createContext({outlet:null,matches:[],isDataRoute:!1});const X=r.createContext(null);function J(){return null!=r.useContext(K)}function Z(){return J()||c(!1),r.useContext(K).location}function ee(e){r.useContext(Q).static||r.useLayoutEffect(e)}function te(){let{isDataRoute:e}=r.useContext(G);return e?function(){let{router:e}=ce(le.UseNavigateStable),t=fe(ue.UseNavigateStable),n=r.useRef(!1);return ee(()=>{n.current=!0}),r.useCallback(function(r,i){void 0===i&&(i={}),n.current&&("number"===typeof r?e.navigate(r):e.navigate(r,V({fromRouteId:t},i)))},[e,t])}():function(){J()||c(!1);let e=r.useContext(q),{basename:t,future:n,navigator:i}=r.useContext(Q),{matches:a}=r.useContext(G),{pathname:o}=Z(),s=JSON.stringify(D(a,n.v7_relativeSplatPath)),l=r.useRef(!1);return ee(()=>{l.current=!0}),r.useCallback(function(n,r){if(void 0===r&&(r={}),!l.current)return;if("number"===typeof n)return void i.go(n);let a=I(n,JSON.parse(s),o,"path"===r.relative);null==e&&"/"!==t&&(a.pathname="/"===a.pathname?t:$([t,a.pathname])),(r.replace?i.replace:i.push)(a,r.state,r)},[t,i,s,o,e])}()}function ne(e,n,i,a){J()||c(!1);let{navigator:o}=r.useContext(Q),{matches:s}=r.useContext(G),l=s[s.length-1],u=l?l.params:{},d=(l&&l.pathname,l?l.pathnameBase:"/");l&&l.route;let f,p=Z();if(n){var h;let e="string"===typeof n?g(n):n;"/"===d||(null==(h=e.pathname)?void 0:h.startsWith(d))||c(!1),f=e}else f=p;let m=f.pathname||"/",v=m;if("/"!==d){let e=d.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(e.length).join("/")}let y=b(e,{pathname:v});let x=se(y&&y.map(e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:$([d,o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:$([d,o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),s,i,a);return n&&x?r.createElement(K.Provider,{value:{location:V({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:t.Pop}},x):x}function re(){let e=function(){var e;let t=r.useContext(X),n=de(ue.UseRouteError),i=fe(ue.UseRouteError);if(void 0!==t)return t;return null==(e=n.errors)?void 0:e[i]}(),t=U(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i};return r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:a},n):null,null)}const ie=r.createElement(re,null);class ae extends r.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?r.createElement(G.Provider,{value:this.props.routeContext},r.createElement(X.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function oe(e){let{routeContext:t,match:n,children:i}=e,a=r.useContext(q);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),r.createElement(G.Provider,{value:t},i)}function se(e,t,n,i){var a;if(void 0===t&&(t=[]),void 0===n&&(n=null),void 0===i&&(i=null),null==e){var o;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(o=i)&&o.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let s=e,l=null==(a=n)?void 0:a.errors;if(null!=l){let e=s.findIndex(e=>e.route.id&&void 0!==(null==l?void 0:l[e.route.id]));e>=0||c(!1),s=s.slice(0,Math.min(s.length,e+1))}let u=!1,d=-1;if(n&&i&&i.v7_partialHydration)for(let r=0;r<s.length;r++){let e=s[r];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=r),e.route.id){let{loaderData:t,errors:r}=n,i=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||i){u=!0,s=d>=0?s.slice(0,d+1):[s[0]];break}}}return s.reduceRight((e,i,a)=>{let o,c=!1,f=null,p=null;var h;n&&(o=l&&i.route.id?l[i.route.id]:void 0,f=i.route.errorElement||ie,u&&(d<0&&0===a?(h="route-fallback",!1||pe[h]||(pe[h]=!0),c=!0,p=null):d===a&&(c=!0,p=i.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,a+1)),m=()=>{let t;return t=o?f:c?p:i.route.Component?r.createElement(i.route.Component,null):i.route.element?i.route.element:e,r.createElement(oe,{match:i,routeContext:{outlet:e,matches:g,isDataRoute:null!=n},children:t})};return n&&(i.route.ErrorBoundary||i.route.errorElement||0===a)?r.createElement(ae,{location:n.location,revalidation:n.revalidation,component:f,error:o,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var le=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(le||{}),ue=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ue||{});function ce(e){let t=r.useContext(q);return t||c(!1),t}function de(e){let t=r.useContext(Y);return t||c(!1),t}function fe(e){let t=function(){let e=r.useContext(G);return e||c(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||c(!1),n.route.id}const pe={};function he(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}i.startTransition;function ge(e){let{to:t,replace:n,state:i,relative:a}=e;J()||c(!1);let{future:o,static:s}=r.useContext(Q),{matches:l}=r.useContext(G),{pathname:u}=Z(),d=te(),f=I(t,D(l,o.v7_relativeSplatPath),u,"path"===a),p=JSON.stringify(f);return r.useEffect(()=>d(JSON.parse(p),{replace:n,state:i,relative:a}),[d,p,a,n,i]),null}function me(e){c(!1)}function ve(e){let{basename:n="/",children:i=null,location:a,navigationType:o=t.Pop,navigator:s,static:l=!1,future:u}=e;J()&&c(!1);let d=n.replace(/^\/*/,"/"),f=r.useMemo(()=>({basename:d,navigator:s,static:l,future:V({v7_relativeSplatPath:!1},u)}),[d,u,s,l]);"string"===typeof a&&(a=g(a));let{pathname:p="/",search:h="",hash:m="",state:v=null,key:b="default"}=a,y=r.useMemo(()=>{let e=N(p,d);return null==e?null:{location:{pathname:e,search:h,hash:m,state:v,key:b},navigationType:o}},[d,p,h,m,v,b,o]);return null==y?null:r.createElement(Q.Provider,{value:f},r.createElement(K.Provider,{children:i,value:y}))}function be(e){let{children:t,location:n}=e;return ne(ye(t),n)}new Promise(()=>{});r.Component;function ye(e,t){void 0===t&&(t=[]);let n=[];return r.Children.forEach(e,(e,i)=>{if(!r.isValidElement(e))return;let a=[...t,i];if(e.type===r.Fragment)return void n.push.apply(n,ye(e.props.children,a));e.type!==me&&c(!1),e.props.index&&e.props.children&&c(!1);let o={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(o.children=ye(e.props.children,a)),n.push(o)}),n}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);try{window.__reactRouterVersion="6"}catch(Wl){}new Map;const xe=i.startTransition;s.flushSync,i.useId;function we(e){let{basename:t,children:n,future:i,window:a}=e,o=r.useRef();var s;null==o.current&&(o.current=(void 0===(s={window:a,v5Compat:!0})&&(s={}),m(function(e,t){let{pathname:n,search:r,hash:i}=e.location;return p("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"===typeof t?t:h(t)},null,s)));let l=o.current,[u,c]=r.useState({action:l.action,location:l.location}),{v7_startTransition:d}=i||{},f=r.useCallback(e=>{d&&xe?xe(()=>c(e)):c(e)},[c,d]);return r.useLayoutEffect(()=>l.listen(f),[l,f]),r.useEffect(()=>he(i),[i]),r.createElement(ve,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:l,future:i})}"undefined"!==typeof window&&"undefined"!==typeof window.document&&window.document.createElement;var ke,Se;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ke||(ke={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Se||(Se={}));const _e=Object.create(null);_e.open="0",_e.close="1",_e.ping="2",_e.pong="3",_e.message="4",_e.upgrade="5",_e.noop="6";const Ee=Object.create(null);Object.keys(_e).forEach(e=>{Ee[_e[e]]=e});const Ce={type:"error",data:"parser error"},je="function"===typeof Blob||"undefined"!==typeof Blob&&"[object BlobConstructor]"===Object.prototype.toString.call(Blob),Re="function"===typeof ArrayBuffer,Te=e=>"function"===typeof ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,Oe=(e,t,n)=>{let{type:r,data:i}=e;return je&&i instanceof Blob?t?n(i):Pe(i,n):Re&&(i instanceof ArrayBuffer||Te(i))?t?n(i):Pe(new Blob([i]),n):n(_e[r]+(i||""))},Pe=(e,t)=>{const n=new FileReader;return n.onload=function(){const e=n.result.split(",")[1];t("b"+(e||""))},n.readAsDataURL(e)};function ze(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let Ne;const Le="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ae="undefined"===typeof Uint8Array?[]:new Uint8Array(256);for(let n=0;n<64;n++)Ae[Le.charCodeAt(n)]=n;const De="function"===typeof ArrayBuffer,Ie=(e,t)=>{if("string"!==typeof e)return{type:"message",data:Fe(e,t)};const n=e.charAt(0);if("b"===n)return{type:"message",data:$e(e.substring(1),t)};return Ee[n]?e.length>1?{type:Ee[n],data:e.substring(1)}:{type:Ee[n]}:Ce},$e=(e,t)=>{if(De){const n=(e=>{let t,n,r,i,a,o=.75*e.length,s=e.length,l=0;"="===e[e.length-1]&&(o--,"="===e[e.length-2]&&o--);const u=new ArrayBuffer(o),c=new Uint8Array(u);for(t=0;t<s;t+=4)n=Ae[e.charCodeAt(t)],r=Ae[e.charCodeAt(t+1)],i=Ae[e.charCodeAt(t+2)],a=Ae[e.charCodeAt(t+3)],c[l++]=n<<2|r>>4,c[l++]=(15&r)<<4|i>>2,c[l++]=(3&i)<<6|63&a;return u})(e);return Fe(n,t)}return{base64:!0,data:e}},Fe=(e,t)=>"blob"===t?e instanceof Blob?e:new Blob([e]):e instanceof ArrayBuffer?e:e.buffer,Me=String.fromCharCode(30);function Be(){return new TransformStream({transform(e,t){!function(e,t){je&&e.data instanceof Blob?e.data.arrayBuffer().then(ze).then(t):Re&&(e.data instanceof ArrayBuffer||Te(e.data))?t(ze(e.data)):Oe(e,!1,e=>{Ne||(Ne=new TextEncoder),t(Ne.encode(e))})}(e,n=>{const r=n.length;let i;if(r<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,r);else if(r<65536){i=new Uint8Array(3);const e=new DataView(i.buffer);e.setUint8(0,126),e.setUint16(1,r)}else{i=new Uint8Array(9);const e=new DataView(i.buffer);e.setUint8(0,127),e.setBigUint64(1,BigInt(r))}e.data&&"string"!==typeof e.data&&(i[0]|=128),t.enqueue(i),t.enqueue(n)})}})}let Ue;function He(e){return e.reduce((e,t)=>e+t.length,0)}function We(e,t){if(e[0].length===t)return e.shift();const n=new Uint8Array(t);let r=0;for(let i=0;i<t;i++)n[i]=e[0][r++],r===e[0].length&&(e.shift(),r=0);return e.length&&r<e[0].length&&(e[0]=e[0].slice(r)),n}function Ve(e){if(e)return function(e){for(var t in Ve.prototype)e[t]=Ve.prototype[t];return e}(e)}Ve.prototype.on=Ve.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},Ve.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this},Ve.prototype.off=Ve.prototype.removeListener=Ve.prototype.removeAllListeners=Ve.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,r=this._callbacks["$"+e];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+e],this;for(var i=0;i<r.length;i++)if((n=r[i])===t||n.fn===t){r.splice(i,1);break}return 0===r.length&&delete this._callbacks["$"+e],this},Ve.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),n=this._callbacks["$"+e],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(n){r=0;for(var i=(n=n.slice(0)).length;r<i;++r)n[r].apply(this,t)}return this},Ve.prototype.emitReserved=Ve.prototype.emit,Ve.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},Ve.prototype.hasListeners=function(e){return!!this.listeners(e).length};const qe="function"===typeof Promise&&"function"===typeof Promise.resolve?e=>Promise.resolve().then(e):(e,t)=>t(e,0),Ye="undefined"!==typeof self?self:"undefined"!==typeof window?window:Function("return this")();function Qe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.reduce((t,n)=>(e.hasOwnProperty(n)&&(t[n]=e[n]),t),{})}const Ke=Ye.setTimeout,Ge=Ye.clearTimeout;function Xe(e,t){t.useNativeTimers?(e.setTimeoutFn=Ke.bind(Ye),e.clearTimeoutFn=Ge.bind(Ye)):(e.setTimeoutFn=Ye.setTimeout.bind(Ye),e.clearTimeoutFn=Ye.clearTimeout.bind(Ye))}function Je(e){return"string"===typeof e?function(e){let t=0,n=0;for(let r=0,i=e.length;r<i;r++)t=e.charCodeAt(r),t<128?n+=1:t<2048?n+=2:t<55296||t>=57344?n+=3:(r++,n+=4);return n}(e):Math.ceil(1.33*(e.byteLength||e.size))}function Ze(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}class et extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type="TransportError"}}class tt extends Ve{constructor(e){super(),this.writable=!1,Xe(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,n){return super.emitReserved("error",new et(e,t,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this}send(e){"open"===this.readyState&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=Ie(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return-1===e.indexOf(":")?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(443!==this.opts.port)||!this.opts.secure&&80!==Number(this.opts.port))?":"+this.opts.port:""}_query(e){const t=function(e){let t="";for(let n in e)e.hasOwnProperty(n)&&(t.length&&(t+="&"),t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t}(e);return t.length?"?"+t:""}}class nt extends tt{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let e=0;this._polling&&(e++,this.once("pollComplete",function(){--e||t()})),this.writable||(e++,this.once("drain",function(){--e||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){((e,t)=>{const n=e.split(Me),r=[];for(let i=0;i<n.length;i++){const e=Ie(n[i],t);if(r.push(e),"error"===e.type)break}return r})(e,this.socket.binaryType).forEach(e=>{if("opening"===this.readyState&&"open"===e.type&&this.onOpen(),"close"===e.type)return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(e)}),"closed"!==this.readyState&&(this._polling=!1,this.emitReserved("pollComplete"),"open"===this.readyState&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};"open"===this.readyState?e():this.once("open",e)}write(e){this.writable=!1,((e,t)=>{const n=e.length,r=new Array(n);let i=0;e.forEach((e,a)=>{Oe(e,!1,e=>{r[a]=e,++i===n&&t(r.join(Me))})})})(e,e=>{this.doWrite(e,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return!1!==this.opts.timestampRequests&&(t[this.opts.timestampParam]=Ze()),this.supportsBinary||t.sid||(t.b64=1),this.createUri(e,t)}}let rt=!1;try{rt="undefined"!==typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(Vl){}const it=rt;function at(){}class ot extends nt{constructor(e){if(super(e),"undefined"!==typeof location){const t="https:"===location.protocol;let n=location.port;n||(n=t?"443":"80"),this.xd="undefined"!==typeof location&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,t){const n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",(e,t)=>{this.onError("xhr post error",e,t)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(e,t)=>{this.onError("xhr poll error",e,t)}),this.pollXhr=e}}class st extends Ve{constructor(e,t,n){super(),this.createRequest=e,Xe(this,n),this._opts=n,this._method=n.method||"GET",this._uri=t,this._data=void 0!==n.data?n.data:null,this._create()}_create(){var e;const t=Qe(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(t);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let e in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(e)&&n.setRequestHeader(e,this._opts.extraHeaders[e])}}catch(Wl){}if("POST"===this._method)try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(Wl){}try{n.setRequestHeader("Accept","*/*")}catch(Wl){}null===(e=this._opts.cookieJar)||void 0===e||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var e;3===n.readyState&&(null===(e=this._opts.cookieJar)||void 0===e||e.parseCookies(n.getResponseHeader("set-cookie"))),4===n.readyState&&(200===n.status||1223===n.status?this._onLoad():this.setTimeoutFn(()=>{this._onError("number"===typeof n.status?n.status:0)},0))},n.send(this._data)}catch(Wl){return void this.setTimeoutFn(()=>{this._onError(Wl)},0)}"undefined"!==typeof document&&(this._index=st.requestsCount++,st.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if("undefined"!==typeof this._xhr&&null!==this._xhr){if(this._xhr.onreadystatechange=at,e)try{this._xhr.abort()}catch(Wl){}"undefined"!==typeof document&&delete st.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;null!==e&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}if(st.requestsCount=0,st.requests={},"undefined"!==typeof document)if("function"===typeof attachEvent)attachEvent("onunload",lt);else if("function"===typeof addEventListener){addEventListener("onpagehide"in Ye?"pagehide":"unload",lt,!1)}function lt(){for(let e in st.requests)st.requests.hasOwnProperty(e)&&st.requests[e].abort()}const ut=function(){const e=ct({xdomain:!1});return e&&null!==e.responseType}();function ct(e){const t=e.xdomain;try{if("undefined"!==typeof XMLHttpRequest&&(!t||it))return new XMLHttpRequest}catch(Wl){}if(!t)try{return new(Ye[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(Wl){}}const dt="undefined"!==typeof navigator&&"string"===typeof navigator.product&&"reactnative"===navigator.product.toLowerCase();class ft extends tt{get name(){return"websocket"}doOpen(){const e=this.uri(),t=this.opts.protocols,n=dt?{}:Qe(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,n)}catch(Vl){return this.emitReserved("error",Vl)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],r=t===e.length-1;Oe(n,this.supportsBinary,e=>{try{this.doWrite(n,e)}catch(Wl){}r&&qe(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){"undefined"!==typeof this.ws&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=Ze()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}}const pt=Ye.WebSocket||Ye.MozWebSocket;const ht={websocket:class extends ft{createSocket(e,t,n){return dt?new pt(e,t,n):t?new pt(e,t):new pt(e)}doWrite(e,t){this.ws.send(t)}},webtransport:class extends tt{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(Vl){return this.emitReserved("error",Vl)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const t=function(e,t){Ue||(Ue=new TextDecoder);const n=[];let r=0,i=-1,a=!1;return new TransformStream({transform(o,s){for(n.push(o);;){if(0===r){if(He(n)<1)break;const e=We(n,1);a=128===(128&e[0]),i=127&e[0],r=i<126?3:126===i?1:2}else if(1===r){if(He(n)<2)break;const e=We(n,2);i=new DataView(e.buffer,e.byteOffset,e.length).getUint16(0),r=3}else if(2===r){if(He(n)<8)break;const e=We(n,8),t=new DataView(e.buffer,e.byteOffset,e.length),a=t.getUint32(0);if(a>Math.pow(2,21)-1){s.enqueue(Ce);break}i=a*Math.pow(2,32)+t.getUint32(4),r=3}else{if(He(n)<i)break;const e=We(n,i);s.enqueue(Ie(a?e:Ue.decode(e),t)),r=0}if(0===i||i>e){s.enqueue(Ce);break}}}})}(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(t).getReader(),r=Be();r.readable.pipeTo(e.writable),this._writer=r.writable.getWriter();const i=()=>{n.read().then(e=>{let{done:t,value:n}=e;t||(this.onPacket(n),i())}).catch(e=>{})};i();const a={type:"open"};this.query.sid&&(a.data=`{"sid":"${this.query.sid}"}`),this._writer.write(a).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],r=t===e.length-1;this._writer.write(n).then(()=>{r&&qe(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;null===(e=this._transport)||void 0===e||e.close()}},polling:class extends ot{constructor(e){super(e);const t=e&&e.forceBase64;this.supportsBinary=ut&&!t}request(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign(e,{xd:this.xd},this.opts),new st(ct,this.uri(),e)}}},gt=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,mt=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function vt(e){if(e.length>8e3)throw"URI too long";const t=e,n=e.indexOf("["),r=e.indexOf("]");-1!=n&&-1!=r&&(e=e.substring(0,n)+e.substring(n,r).replace(/:/g,";")+e.substring(r,e.length));let i=gt.exec(e||""),a={},o=14;for(;o--;)a[mt[o]]=i[o]||"";return-1!=n&&-1!=r&&(a.source=t,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a.pathNames=function(e,t){const n=/\/{2,9}/g,r=t.replace(n,"/").split("/");"/"!=t.slice(0,1)&&0!==t.length||r.splice(0,1);"/"==t.slice(-1)&&r.splice(r.length-1,1);return r}(0,a.path),a.queryKey=function(e,t){const n={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(e,t,r){t&&(n[t]=r)}),n}(0,a.query),a}const bt="function"===typeof addEventListener&&"function"===typeof removeEventListener,yt=[];bt&&addEventListener("offline",()=>{yt.forEach(e=>e())},!1);class xt extends Ve{constructor(e,t){if(super(),this.binaryType="arraybuffer",this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&"object"===typeof e&&(t=e,e=null),e){const n=vt(e);t.hostname=n.host,t.secure="https"===n.protocol||"wss"===n.protocol,t.port=n.port,n.query&&(t.query=n.query)}else t.host&&(t.hostname=vt(t.host).host);Xe(this,t),this.secure=null!=t.secure?t.secure:"undefined"!==typeof location&&"https:"===location.protocol,t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||("undefined"!==typeof location?location.hostname:"localhost"),this.port=t.port||("undefined"!==typeof location&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},t.transports.forEach(e=>{const t=e.prototype.name;this.transports.push(t),this._transportsByName[t]=e}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),"string"===typeof this.opts.query&&(this.opts.query=function(e){let t={},n=e.split("&");for(let r=0,i=n.length;r<i;r++){let e=n[r].split("=");t[decodeURIComponent(e[0])]=decodeURIComponent(e[1])}return t}(this.opts.query)),bt&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),"localhost"!==this.hostname&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},yt.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=4,t.transport=e,this.id&&(t.sid=this.id);const n=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(0===this.transports.length)return void this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);const e=this.opts.rememberUpgrade&&xt.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket")?"websocket":this.transports[0];this.readyState="opening";const t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",e=>this._onClose("transport close",e))}onOpen(){this.readyState="open",xt.priorWebsocketSuccess="websocket"===this.transport.name,this.emitReserved("open"),this.flush()}_onPacket(e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data)}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),"closed"!==this.readyState&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,0===this.writeBuffer.length?this.emitReserved("drain"):this.flush()}flush(){if("closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&"polling"===this.transport.name&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let t=0;t<this.writeBuffer.length;t++){const n=this.writeBuffer[t].data;if(n&&(e+=Je(n)),t>0&&e>this._maxPayload)return this.writeBuffer.slice(0,t);e+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,qe(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,t,n){return this._sendPacket("message",e,t,n),this}send(e,t,n){return this._sendPacket("message",e,t,n),this}_sendPacket(e,t,n,r){if("function"===typeof t&&(r=t,t=void 0),"function"===typeof n&&(r=n,n=null),"closing"===this.readyState||"closed"===this.readyState)return;(n=n||{}).compress=!1!==n.compress;const i={type:e,data:t,options:n};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),r&&this.once("flush",r),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return"opening"!==this.readyState&&"open"!==this.readyState||(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(e){if(xt.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&"opening"===this.readyState)return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),bt&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const e=yt.indexOf(this._offlineEventListener);-1!==e&&yt.splice(e,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}}xt.protocol=4;class wt extends xt{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),"open"===this.readyState&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let t=this.createTransport(e),n=!1;xt.priorWebsocketSuccess=!1;const r=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",e=>{if(!n)if("pong"===e.type&&"probe"===e.data){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;xt.priorWebsocketSuccess="websocket"===t.name,this.transport.pause(()=>{n||"closed"!==this.readyState&&(u(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const e=new Error("probe error");e.transport=t.name,this.emitReserved("upgradeError",e)}}))};function i(){n||(n=!0,u(),t.close(),t=null)}const a=e=>{const n=new Error("probe error: "+e);n.transport=t.name,i(),this.emitReserved("upgradeError",n)};function o(){a("transport closed")}function s(){a("socket closed")}function l(e){t&&e.name!==t.name&&i()}const u=()=>{t.removeListener("open",r),t.removeListener("error",a),t.removeListener("close",o),this.off("close",s),this.off("upgrading",l)};t.once("open",r),t.once("error",a),t.once("close",o),this.once("close",s),this.once("upgrading",l),-1!==this._upgrades.indexOf("webtransport")&&"webtransport"!==e?this.setTimeoutFn(()=>{n||t.open()},200):t.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const t=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}}class kt extends wt{constructor(e){const t="object"===typeof e?e:arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(!t.transports||t.transports&&"string"===typeof t.transports[0])&&(t.transports=(t.transports||["polling","websocket","webtransport"]).map(e=>ht[e]).filter(e=>!!e)),super(e,t)}}const St="function"===typeof ArrayBuffer,_t=Object.prototype.toString,Et="function"===typeof Blob||"undefined"!==typeof Blob&&"[object BlobConstructor]"===_t.call(Blob),Ct="function"===typeof File||"undefined"!==typeof File&&"[object FileConstructor]"===_t.call(File);function jt(e){return St&&(e instanceof ArrayBuffer||(e=>"function"===typeof ArrayBuffer.isView?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer)(e))||Et&&e instanceof Blob||Ct&&e instanceof File}function Rt(e,t){if(!e||"object"!==typeof e)return!1;if(Array.isArray(e)){for(let t=0,n=e.length;t<n;t++)if(Rt(e[t]))return!0;return!1}if(jt(e))return!0;if(e.toJSON&&"function"===typeof e.toJSON&&1===arguments.length)return Rt(e.toJSON(),!0);for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&Rt(e[n]))return!0;return!1}function Tt(e){const t=[],n=e.data,r=e;return r.data=Ot(n,t),r.attachments=t.length,{packet:r,buffers:t}}function Ot(e,t){if(!e)return e;if(jt(e)){const n={_placeholder:!0,num:t.length};return t.push(e),n}if(Array.isArray(e)){const n=new Array(e.length);for(let r=0;r<e.length;r++)n[r]=Ot(e[r],t);return n}if("object"===typeof e&&!(e instanceof Date)){const n={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=Ot(e[r],t));return n}return e}function Pt(e,t){return e.data=zt(e.data,t),delete e.attachments,e}function zt(e,t){if(!e)return e;if(e&&!0===e._placeholder){if("number"===typeof e.num&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}if(Array.isArray(e))for(let n=0;n<e.length;n++)e[n]=zt(e[n],t);else if("object"===typeof e)for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(e[n]=zt(e[n],t));return e}const Nt=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Lt=5;var At;!function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"}(At||(At={}));class Dt{constructor(e){this.replacer=e}encode(e){return e.type!==At.EVENT&&e.type!==At.ACK||!Rt(e)?[this.encodeAsString(e)]:this.encodeAsBinary({type:e.type===At.EVENT?At.BINARY_EVENT:At.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id})}encodeAsString(e){let t=""+e.type;return e.type!==At.BINARY_EVENT&&e.type!==At.BINARY_ACK||(t+=e.attachments+"-"),e.nsp&&"/"!==e.nsp&&(t+=e.nsp+","),null!=e.id&&(t+=e.id),null!=e.data&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=Tt(e),n=this.encodeAsString(t.packet),r=t.buffers;return r.unshift(n),r}}function It(e){return"[object Object]"===Object.prototype.toString.call(e)}class $t extends Ve{constructor(e){super(),this.reviver=e}add(e){let t;if("string"===typeof e){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const n=t.type===At.BINARY_EVENT;n||t.type===At.BINARY_ACK?(t.type=n?At.EVENT:At.ACK,this.reconstructor=new Ft(t),0===t.attachments&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else{if(!jt(e)&&!e.base64)throw new Error("Unknown type: "+e);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t))}}decodeString(e){let t=0;const n={type:Number(e.charAt(0))};if(void 0===At[n.type])throw new Error("unknown packet type "+n.type);if(n.type===At.BINARY_EVENT||n.type===At.BINARY_ACK){const r=t+1;for(;"-"!==e.charAt(++t)&&t!=e.length;);const i=e.substring(r,t);if(i!=Number(i)||"-"!==e.charAt(t))throw new Error("Illegal attachments");n.attachments=Number(i)}if("/"===e.charAt(t+1)){const r=t+1;for(;++t;){if(","===e.charAt(t))break;if(t===e.length)break}n.nsp=e.substring(r,t)}else n.nsp="/";const r=e.charAt(t+1);if(""!==r&&Number(r)==r){const r=t+1;for(;++t;){const n=e.charAt(t);if(null==n||Number(n)!=n){--t;break}if(t===e.length)break}n.id=Number(e.substring(r,t+1))}if(e.charAt(++t)){const r=this.tryParse(e.substr(t));if(!$t.isPayloadValid(n.type,r))throw new Error("invalid payload");n.data=r}return n}tryParse(e){try{return JSON.parse(e,this.reviver)}catch(Wl){return!1}}static isPayloadValid(e,t){switch(e){case At.CONNECT:return It(t);case At.DISCONNECT:return void 0===t;case At.CONNECT_ERROR:return"string"===typeof t||It(t);case At.EVENT:case At.BINARY_EVENT:return Array.isArray(t)&&("number"===typeof t[0]||"string"===typeof t[0]&&-1===Nt.indexOf(t[0]));case At.ACK:case At.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Ft{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const e=Pt(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Mt(e,t,n){return e.on(t,n),function(){e.off(t,n)}}const Bt=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Ut extends Ve{constructor(e,t,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Mt(e,"open",this.onopen.bind(this)),Mt(e,"packet",this.onpacket.bind(this)),Mt(e,"error",this.onerror.bind(this)),Mt(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected||(this.subEvents(),this.io._reconnecting||this.io.open(),"open"===this.io._readyState&&this.onopen()),this}open(){return this.connect()}send(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.unshift("message"),this.emit.apply(this,t),this}emit(e){var t,n,r;if(Bt.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');for(var i=arguments.length,a=new Array(i>1?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];if(a.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(a),this;const s={type:At.EVENT,data:a,options:{}};if(s.options.compress=!1!==this.flags.compress,"function"===typeof a[a.length-1]){const e=this.ids++,t=a.pop();this._registerAckCallback(e,t),s.id=e}const l=null===(n=null===(t=this.io.engine)||void 0===t?void 0:t.transport)||void 0===n?void 0:n.writable,u=this.connected&&!(null===(r=this.io.engine)||void 0===r?void 0:r._hasPingExpired());return this.flags.volatile&&!l||(u?(this.notifyOutgoingListeners(s),this.packet(s)):this.sendBuffer.push(s)),this.flags={},this}_registerAckCallback(e,t){var n,r=this;const i=null!==(n=this.flags.timeout)&&void 0!==n?n:this._opts.ackTimeout;if(void 0===i)return void(this.acks[e]=t);const a=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let t=0;t<this.sendBuffer.length;t++)this.sendBuffer[t].id===e&&this.sendBuffer.splice(t,1);t.call(this,new Error("operation has timed out"))},i),o=function(){r.io.clearTimeoutFn(a);for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];t.apply(r,n)};o.withError=!0,this.acks[e]=o}emitWithAck(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Promise((t,r)=>{const i=(e,n)=>e?r(e):t(n);i.withError=!0,n.push(i),this.emit(e,...n)})}_addToQueue(e){var t=this;let n;"function"===typeof e[e.length-1]&&(n=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push(function(e){if(r!==t._queue[0])return;if(null!==e)r.tryCount>t._opts.retries&&(t._queue.shift(),n&&n(e));else if(t._queue.shift(),n){for(var i=arguments.length,a=new Array(i>1?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];n(null,...a)}return r.pending=!1,t._drainQueue()}),this._queue.push(r),this._drainQueue()}_drainQueue(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.connected||0===this._queue.length)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){"function"==typeof this.auth?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:At.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(t=>String(t.id)===e)){const t=this.acks[e];delete this.acks[e],t.withError&&t.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case At.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case At.EVENT:case At.BINARY_EVENT:this.onevent(e);break;case At.ACK:case At.BINARY_ACK:this.onack(e);break;case At.DISCONNECT:this.ondisconnect();break;case At.CONNECT_ERROR:this.destroy();const t=new Error(e.data.message);t.data=e.data.data,this.emitReserved("connect_error",t)}}onevent(e){const t=e.data||[];null!=e.id&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const n of t)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&"string"===typeof e[e.length-1]&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let n=!1;return function(){if(!n){n=!0;for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];t.packet({type:At.ACK,id:e,data:i})}}}onack(e){const t=this.acks[e.id];"function"===typeof t&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:At.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const n of t)n.apply(this,e.data)}}}function Ht(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}Ht.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),n=Math.floor(t*this.jitter*e);e=0==(1&Math.floor(10*t))?e-n:e+n}return 0|Math.min(e,this.max)},Ht.prototype.reset=function(){this.attempts=0},Ht.prototype.setMin=function(e){this.ms=e},Ht.prototype.setMax=function(e){this.max=e},Ht.prototype.setJitter=function(e){this.jitter=e};class Wt extends Ve{constructor(t,n){var r;super(),this.nsps={},this.subs=[],t&&"object"===typeof t&&(n=t,t=void 0),(n=n||{}).path=n.path||"/socket.io",this.opts=n,Xe(this,n),this.reconnection(!1!==n.reconnection),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor(null!==(r=n.randomizationFactor)&&void 0!==r?r:.5),this.backoff=new Ht({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==n.timeout?2e4:n.timeout),this._readyState="closed",this.uri=t;const i=n.parser||e;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=!1!==n.autoConnect,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return void 0===e?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return void 0===e?this._reconnectionDelay:(this._reconnectionDelay=e,null===(t=this.backoff)||void 0===t||t.setMin(e),this)}randomizationFactor(e){var t;return void 0===e?this._randomizationFactor:(this._randomizationFactor=e,null===(t=this.backoff)||void 0===t||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return void 0===e?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,null===(t=this.backoff)||void 0===t||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new kt(this.uri,this.opts);const t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const r=Mt(t,"open",function(){n.onopen(),e&&e()}),i=t=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",t),e?e(t):this.maybeReconnectOnOpen()},a=Mt(t,"error",i);if(!1!==this._timeout){const e=this._timeout,n=this.setTimeoutFn(()=>{r(),i(new Error("timeout")),t.close()},e);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}return this.subs.push(r),this.subs.push(a),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Mt(e,"ping",this.onping.bind(this)),Mt(e,"data",this.ondata.bind(this)),Mt(e,"error",this.onerror.bind(this)),Mt(e,"close",this.onclose.bind(this)),Mt(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(Wl){this.onclose("parse error",Wl)}}ondecoded(e){qe(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new Ut(this,e,t),this.nsps[e]=n),n}_destroy(e){const t=Object.keys(this.nsps);for(const n of t){if(this.nsps[n].active)return}this._close()}_packet(e){const t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var n;this.cleanup(),null===(n=this.engine)||void 0===n||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),e.skipReconnect||e.open(t=>{t?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",t)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Vt={};function qt(e,t){"object"===typeof e&&(t=e,e=void 0);const n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=e;n=n||"undefined"!==typeof location&&location,null==e&&(e=n.protocol+"//"+n.host),"string"===typeof e&&("/"===e.charAt(0)&&(e="/"===e.charAt(1)?n.protocol+e:n.host+e),/^(https?|wss?):\/\//.test(e)||(e="undefined"!==typeof n?n.protocol+"//"+e:"https://"+e),r=vt(e)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const i=-1!==r.host.indexOf(":")?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+i+":"+r.port+t,r.href=r.protocol+"://"+i+(n&&n.port===r.port?"":":"+r.port),r}(e,(t=t||{}).path||"/socket.io"),r=n.source,i=n.id,a=n.path,o=Vt[i]&&a in Vt[i].nsps;let s;return t.forceNew||t["force new connection"]||!1===t.multiplex||o?s=new Wt(r,t):(Vt[i]||(Vt[i]=new Wt(r,t)),s=Vt[i]),n.query&&!t.query&&(t.query=n.queryKey),s.socket(n.path,t)}Object.assign(qt,{Manager:Wt,Socket:Ut,io:qt,connect:qt});var Yt=n(579);const Qt=(0,r.createContext)(),Kt={socket:null,isConnected:!1,player:null,playerId:null,currentRoom:null,availableRooms:[],currentView:"welcome",loading:!1,error:null,messages:[],gameState:null};function Gt(e,t){var n;switch(t.type){case"SET_SOCKET":return{...e,socket:t.payload};case"SET_CONNECTED":return{...e,isConnected:t.payload};case"SET_PLAYER":return{...e,player:t.payload,playerId:(null===(n=t.payload)||void 0===n?void 0:n.id)||null};case"SET_CURRENT_VIEW":return{...e,currentView:t.payload};case"SET_LOADING":return{...e,loading:t.payload};case"SET_ERROR":return{...e,error:t.payload};case"SET_AVAILABLE_ROOMS":return{...e,availableRooms:t.payload};case"SET_CURRENT_ROOM":return{...e,currentRoom:t.payload};case"UPDATE_ROOM":return{...e,currentRoom:e.currentRoom?{...e.currentRoom,...t.payload}:null};case"ADD_MESSAGE":return{...e,messages:[...e.messages,t.payload]};case"CLEAR_MESSAGES":return{...e,messages:[]};case"SET_GAME_STATE":return{...e,gameState:t.payload};case"RESET_GAME":return{...e,currentRoom:null,messages:[],gameState:null,currentView:"lobby"};default:return e}}function Xt(e){let{children:t}=e;const[n,i]=(0,r.useReducer)(Gt,Kt);(0,r.useEffect)(()=>{const e=qt("http://localhost:3501",{transports:["websocket"],upgrade:!1});return i({type:"SET_SOCKET",payload:e}),e.on("connect",()=>{console.log("Connected to server"),i({type:"SET_CONNECTED",payload:!0})}),e.on("disconnect",()=>{console.log("Disconnected from server"),i({type:"SET_CONNECTED",payload:!1})}),e.on("lobby-joined",e=>{i({type:"SET_PLAYER",payload:e.player}),i({type:"SET_CURRENT_VIEW",payload:"lobby"}),i({type:"SET_LOADING",payload:!1})}),e.on("room-list-updated",e=>{i({type:"SET_AVAILABLE_ROOMS",payload:e})}),e.on("room-created",e=>{i({type:"SET_CURRENT_ROOM",payload:e.room}),i({type:"SET_CURRENT_VIEW",payload:"room"}),i({type:"SET_LOADING",payload:!1})}),e.on("room-joined",e=>{i({type:"SET_CURRENT_ROOM",payload:e.room}),i({type:"SET_CURRENT_VIEW",payload:"room"}),i({type:"SET_LOADING",payload:!1})}),e.on("player-joined",e=>{i({type:"UPDATE_ROOM",payload:e.room})}),e.on("player-left",e=>{i({type:"UPDATE_ROOM",payload:e.room})}),e.on("player-updated",e=>{i({type:"UPDATE_ROOM",payload:e.room})}),e.on("chat-message",e=>{i({type:"ADD_MESSAGE",payload:e})}),e.on("game-started",e=>{i({type:"UPDATE_ROOM",payload:e.room}),i({type:"SET_CURRENT_VIEW",payload:"game"})}),e.on("error",e=>{i({type:"SET_ERROR",payload:e.message}),i({type:"SET_LOADING",payload:!1})}),()=>{e.disconnect()}},[]);const a={joinLobby:e=>{n.socket&&(i({type:"SET_LOADING",payload:!0}),n.socket.emit("join-lobby",{name:e}))},createRoom:(e,t)=>{n.socket&&(i({type:"SET_LOADING",payload:!0}),n.socket.emit("create-room",{name:e,settings:t}))},joinRoom:e=>{n.socket&&(i({type:"SET_LOADING",payload:!0}),n.socket.emit("join-room",{roomId:e}))},leaveRoom:()=>{n.socket&&(n.socket.emit("leave-room"),i({type:"RESET_GAME"}))},sendRoomMessage:e=>{n.socket&&e.trim()&&n.socket.emit("room-chat",{message:e.trim()})},sendPrivateMessage:(e,t)=>{n.socket&&t.trim()&&n.socket.emit("private-message",{targetPlayerId:e,message:t.trim()})},changeColor:e=>{n.socket&&n.socket.emit("change-color",{color:e})},startGame:()=>{n.socket&&n.socket.emit("start-game")},clearError:()=>{i({type:"SET_ERROR",payload:null})},setCurrentView:e=>{i({type:"SET_CURRENT_VIEW",payload:e})}},o={...n,...a};return(0,Yt.jsx)(Qt.Provider,{value:o,children:t})}function Jt(){const e=(0,r.useContext)(Qt);if(!e)throw new Error("useGame must be used within a GameProvider");return e}var Zt=function(){return Zt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Zt.apply(this,arguments)};Object.create;function en(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var tn=n(324),nn=n.n(tn),rn="-ms-",an="-moz-",on="-webkit-",sn="comm",ln="rule",un="decl",cn="@keyframes",dn=Math.abs,fn=String.fromCharCode,pn=Object.assign;function hn(e){return e.trim()}function gn(e,t){return(e=t.exec(e))?e[0]:e}function mn(e,t,n){return e.replace(t,n)}function vn(e,t,n){return e.indexOf(t,n)}function bn(e,t){return 0|e.charCodeAt(t)}function yn(e,t,n){return e.slice(t,n)}function xn(e){return e.length}function wn(e){return e.length}function kn(e,t){return t.push(e),e}function Sn(e,t){return e.filter(function(e){return!gn(e,t)})}var _n=1,En=1,Cn=0,jn=0,Rn=0,Tn="";function On(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:_n,column:En,length:o,return:"",siblings:s}}function Pn(e,t){return pn(On("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function zn(e){for(;e.root;)e=Pn(e.root,{children:[e]});kn(e,e.siblings)}function Nn(){return Rn=jn>0?bn(Tn,--jn):0,En--,10===Rn&&(En=1,_n--),Rn}function Ln(){return Rn=jn<Cn?bn(Tn,jn++):0,En++,10===Rn&&(En=1,_n++),Rn}function An(){return bn(Tn,jn)}function Dn(){return jn}function In(e,t){return yn(Tn,e,t)}function $n(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Fn(e){return _n=En=1,Cn=xn(Tn=e),jn=0,[]}function Mn(e){return Tn="",e}function Bn(e){return hn(In(jn-1,Wn(91===e?e+2:40===e?e+1:e)))}function Un(e){for(;(Rn=An())&&Rn<33;)Ln();return $n(e)>2||$n(Rn)>3?"":" "}function Hn(e,t){for(;--t&&Ln()&&!(Rn<48||Rn>102||Rn>57&&Rn<65||Rn>70&&Rn<97););return In(e,Dn()+(t<6&&32==An()&&32==Ln()))}function Wn(e){for(;Ln();)switch(Rn){case e:return jn;case 34:case 39:34!==e&&39!==e&&Wn(Rn);break;case 40:41===e&&Wn(e);break;case 92:Ln()}return jn}function Vn(e,t){for(;Ln()&&e+Rn!==57&&(e+Rn!==84||47!==An()););return"/*"+In(t,jn-1)+"*"+fn(47===e?e:Ln())}function qn(e){for(;!$n(An());)Ln();return In(e,jn)}function Yn(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Qn(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case un:return e.return=e.return||e.value;case sn:return"";case cn:return e.return=e.value+"{"+Yn(e.children,r)+"}";case ln:if(!xn(e.value=e.props.join(",")))return""}return xn(n=Yn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Kn(e,t,n){switch(function(e,t){return 45^bn(e,0)?(((t<<2^bn(e,0))<<2^bn(e,1))<<2^bn(e,2))<<2^bn(e,3):0}(e,t)){case 5103:return on+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return on+e+e;case 4789:return an+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return on+e+an+e+rn+e+e;case 5936:switch(bn(e,t+11)){case 114:return on+e+rn+mn(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return on+e+rn+mn(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return on+e+rn+mn(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return on+e+rn+e+e;case 6165:return on+e+rn+"flex-"+e+e;case 5187:return on+e+mn(e,/(\w+).+(:[^]+)/,on+"box-$1$2"+rn+"flex-$1$2")+e;case 5443:return on+e+rn+"flex-item-"+mn(e,/flex-|-self/g,"")+(gn(e,/flex-|baseline/)?"":rn+"grid-row-"+mn(e,/flex-|-self/g,""))+e;case 4675:return on+e+rn+"flex-line-pack"+mn(e,/align-content|flex-|-self/g,"")+e;case 5548:return on+e+rn+mn(e,"shrink","negative")+e;case 5292:return on+e+rn+mn(e,"basis","preferred-size")+e;case 6060:return on+"box-"+mn(e,"-grow","")+on+e+rn+mn(e,"grow","positive")+e;case 4554:return on+mn(e,/([^-])(transform)/g,"$1"+on+"$2")+e;case 6187:return mn(mn(mn(e,/(zoom-|grab)/,on+"$1"),/(image-set)/,on+"$1"),e,"")+e;case 5495:case 3959:return mn(e,/(image-set\([^]*)/,on+"$1$`$1");case 4968:return mn(mn(e,/(.+:)(flex-)?(.*)/,on+"box-pack:$3"+rn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+on+e+e;case 4200:if(!gn(e,/flex-|baseline/))return rn+"grid-column-align"+yn(e,t)+e;break;case 2592:case 3360:return rn+mn(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,gn(e.props,/grid-\w+-end/)})?~vn(e+(n=n[t].value),"span",0)?e:rn+mn(e,"-start","")+e+rn+"grid-row-span:"+(~vn(n,"span",0)?gn(n,/\d+/):+gn(n,/\d+/)-+gn(e,/\d+/))+";":rn+mn(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return gn(e.props,/grid-\w+-start/)})?e:rn+mn(mn(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return mn(e,/(.+)-inline(.+)/,on+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xn(e)-1-t>6)switch(bn(e,t+1)){case 109:if(45!==bn(e,t+4))break;case 102:return mn(e,/(.+:)(.+)-([^]+)/,"$1"+on+"$2-$3$1"+an+(108==bn(e,t+3)?"$3":"$2-$3"))+e;case 115:return~vn(e,"stretch",0)?Kn(mn(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return mn(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return rn+n+":"+r+s+(i?rn+n+"-span:"+(a?o:+o-+r)+s:"")+e});case 4949:if(121===bn(e,t+6))return mn(e,":",":"+on)+e;break;case 6444:switch(bn(e,45===bn(e,14)?18:11)){case 120:return mn(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+on+(45===bn(e,14)?"inline-":"")+"box$3$1"+on+"$2$3$1"+rn+"$2box$3")+e;case 100:return mn(e,":",":"+rn)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return mn(e,"scroll-","scroll-snap-")+e}return e}function Gn(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case un:return void(e.return=Kn(e.value,e.length,n));case cn:return Yn([Pn(e,{value:mn(e.value,"@","@"+on)})],r);case ln:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(gn(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":zn(Pn(e,{props:[mn(t,/:(read-\w+)/,":-moz-$1")]})),zn(Pn(e,{props:[t]})),pn(e,{props:Sn(n,r)});break;case"::placeholder":zn(Pn(e,{props:[mn(t,/:(plac\w+)/,":"+on+"input-$1")]})),zn(Pn(e,{props:[mn(t,/:(plac\w+)/,":-moz-$1")]})),zn(Pn(e,{props:[mn(t,/:(plac\w+)/,rn+"input-$1")]})),zn(Pn(e,{props:[t]})),pn(e,{props:Sn(n,r)})}return""})}}function Xn(e){return Mn(Jn("",null,null,null,[""],e=Fn(e),0,[0],e))}function Jn(e,t,n,r,i,a,o,s,l){for(var u=0,c=0,d=o,f=0,p=0,h=0,g=1,m=1,v=1,b=0,y="",x=i,w=a,k=r,S=y;m;)switch(h=b,b=Ln()){case 40:if(108!=h&&58==bn(S,d-1)){-1!=vn(S+=mn(Bn(b),"&","&\f"),"&\f",dn(u?s[u-1]:0))&&(v=-1);break}case 34:case 39:case 91:S+=Bn(b);break;case 9:case 10:case 13:case 32:S+=Un(h);break;case 92:S+=Hn(Dn()-1,7);continue;case 47:switch(An()){case 42:case 47:kn(er(Vn(Ln(),Dn()),t,n,l),l);break;default:S+="/"}break;case 123*g:s[u++]=xn(S)*v;case 125*g:case 59:case 0:switch(b){case 0:case 125:m=0;case 59+c:-1==v&&(S=mn(S,/\f/g,"")),p>0&&xn(S)-d&&kn(p>32?tr(S+";",r,n,d-1,l):tr(mn(S," ","")+";",r,n,d-2,l),l);break;case 59:S+=";";default:if(kn(k=Zn(S,t,n,u,c,i,s,y,x=[],w=[],d,a),a),123===b)if(0===c)Jn(S,t,k,k,x,a,d,s,w);else switch(99===f&&110===bn(S,3)?100:f){case 100:case 108:case 109:case 115:Jn(e,k,k,r&&kn(Zn(e,k,k,0,0,i,s,y,i,x=[],d,w),w),i,w,d,s,r?x:w);break;default:Jn(S,k,k,k,[""],w,0,s,w)}}u=c=p=0,g=v=1,y=S="",d=o;break;case 58:d=1+xn(S),p=h;default:if(g<1)if(123==b)--g;else if(125==b&&0==g++&&125==Nn())continue;switch(S+=fn(b),b*g){case 38:v=c>0?1:(S+="\f",-1);break;case 44:s[u++]=(xn(S)-1)*v,v=1;break;case 64:45===An()&&(S+=Bn(Ln())),f=An(),c=d=xn(y=S+=qn(Dn())),b++;break;case 45:45===h&&2==xn(S)&&(g=0)}}return a}function Zn(e,t,n,r,i,a,o,s,l,u,c,d){for(var f=i-1,p=0===i?a:[""],h=wn(p),g=0,m=0,v=0;g<r;++g)for(var b=0,y=yn(e,f+1,f=dn(m=o[g])),x=e;b<h;++b)(x=hn(m>0?p[b]+" "+y:mn(y,/&\f/g,p[b])))&&(l[v++]=x);return On(e,t,n,0===i?ln:s,l,u,c,d)}function er(e,t,n,r){return On(e,t,n,sn,fn(Rn),yn(e,2,-2),0,r)}function tr(e,t,n,r,i){return On(e,t,n,un,yn(e,0,r),yn(e,r+1,-1),r,i)}var nr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},rr="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",ir="active",ar="data-styled-version",or="6.1.19",sr="/*!sc*/\n",lr="undefined"!=typeof window&&"undefined"!=typeof document,ur=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),cr=(new Set,Object.freeze([])),dr=Object.freeze({});function fr(e,t,n){return void 0===n&&(n=dr),e.theme!==n.theme&&e.theme||t||n.theme}var pr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,gr=/(^-|-$)/g;function mr(e){return e.replace(hr,"-").replace(gr,"")}var vr=/(a)(d)/gi,br=function(e){return String.fromCharCode(e+(e>25?39:97))};function yr(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=br(t%52)+n;return(br(t%52)+n).replace(vr,"$1-$2")}var xr,wr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},kr=function(e){return wr(5381,e)};function Sr(e){return yr(kr(e)>>>0)}function _r(e){return e.displayName||e.name||"Component"}function Er(e){return"string"==typeof e&&!0}var Cr="function"==typeof Symbol&&Symbol.for,jr=Cr?Symbol.for("react.memo"):60115,Rr=Cr?Symbol.for("react.forward_ref"):60112,Tr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Or={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Pr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zr=((xr={})[Rr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xr[jr]=Pr,xr);function Nr(e){return("type"in(t=e)&&t.type.$$typeof)===jr?Pr:"$$typeof"in e?zr[e.$$typeof]:Tr;var t}var Lr=Object.defineProperty,Ar=Object.getOwnPropertyNames,Dr=Object.getOwnPropertySymbols,Ir=Object.getOwnPropertyDescriptor,$r=Object.getPrototypeOf,Fr=Object.prototype;function Mr(e,t,n){if("string"!=typeof t){if(Fr){var r=$r(t);r&&r!==Fr&&Mr(e,r,n)}var i=Ar(t);Dr&&(i=i.concat(Dr(t)));for(var a=Nr(e),o=Nr(t),s=0;s<i.length;++s){var l=i[s];if(!(l in Or||n&&n[l]||o&&l in o||a&&l in a)){var u=Ir(t,l);try{Lr(e,l,u)}catch(e){}}}}return e}function Br(e){return"function"==typeof e}function Ur(e){return"object"==typeof e&&"styledComponentId"in e}function Hr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Wr(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Vr(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function qr(e,t,n){if(void 0===n&&(n=!1),!n&&!Vr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=qr(e[r],t[r]);else if(Vr(t))for(var r in t)e[r]=qr(e[r],t[r]);return e}function Yr(e,t){Object.defineProperty(e,"toString",{value:t})}function Qr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Kr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw Qr(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=(a=0,t.length);a<s;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+="".concat(this.tag.getRule(a)).concat(sr);return t},e}(),Gr=new Map,Xr=new Map,Jr=1,Zr=function(e){if(Gr.has(e))return Gr.get(e);for(;Xr.has(Jr);)Jr++;var t=Jr++;return Gr.set(e,t),Xr.set(t,e),t},ei=function(e,t){Jr=t+1,Gr.set(e,t),Xr.set(t,e)},ti="style[".concat(rr,"][").concat(ar,'="').concat(or,'"]'),ni=new RegExp("^".concat(rr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ri=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},ii=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(sr),i=[],a=0,o=r.length;a<o;a++){var s=r[a].trim();if(s){var l=s.match(ni);if(l){var u=0|parseInt(l[1],10),c=l[2];0!==u&&(ei(c,u),ri(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}},ai=function(e){for(var t=document.querySelectorAll(ti),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(rr)!==ir&&(ii(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function oi(){return n.nc}var si=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(rr,"]")));return t[t.length-1]}(n),a=void 0!==i?i.nextSibling:null;r.setAttribute(rr,ir),r.setAttribute(ar,or);var o=oi();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},li=function(){function e(e){this.element=si(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw Qr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),ui=function(){function e(e){this.element=si(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),ci=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),di=lr,fi={isServer:!lr,useCSSOMInjection:!ur},pi=function(){function e(e,t,n){void 0===e&&(e=dr),void 0===t&&(t={});var r=this;this.options=Zt(Zt({},fi),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&lr&&di&&(di=!1,ai(this)),Yr(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return Xr.get(e)}(n);if(void 0===i)return"continue";var a=e.names.get(i),o=t.getGroup(n);if(void 0===a||!a.size||0===o.length)return"continue";var s="".concat(rr,".g").concat(n,'[id="').concat(i,'"]'),l="";void 0!==a&&a.forEach(function(e){e.length>0&&(l+="".concat(e,","))}),r+="".concat(o).concat(s,'{content:"').concat(l,'"}').concat(sr)},a=0;a<n;a++)i(a);return r}(r)})}return e.registerId=function(e){return Zr(e)},e.prototype.rehydrate=function(){!this.server&&lr&&ai(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Zt(Zt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new ci(n):t?new li(n):new ui(n)}(this.options),new Kr(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Zr(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Zr(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Zr(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),hi=/&/g,gi=/^\s*\/\/.*$/gm;function mi(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=mi(e.children,t)),e})}function vi(e){var t,n,r,i=void 0===e?dr:e,a=i.options,o=void 0===a?dr:a,s=i.plugins,l=void 0===s?cr:s,u=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},c=l.slice();c.push(function(e){e.type===ln&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(hi,n).replace(r,u))}),o.prefix&&c.push(Gn),c.push(Qn);var d=function(e,i,a,s){void 0===i&&(i=""),void 0===a&&(a=""),void 0===s&&(s="&"),t=s,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(gi,""),u=Xn(a||i?"".concat(a," ").concat(i," { ").concat(l," }"):l);o.namespace&&(u=mi(u,o.namespace));var d,f=[];return Yn(u,function(e){var t=wn(e);return function(n,r,i,a){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,a)||"";return o}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=l.length?l.reduce(function(e,t){return t.name||Qr(15),wr(e,t.name)},5381).toString():"",d}var bi=new pi,yi=vi(),xi=r.createContext({shouldForwardProp:void 0,styleSheet:bi,stylis:yi}),wi=(xi.Consumer,r.createContext(void 0));function ki(){return(0,r.useContext)(xi)}function Si(e){var t=(0,r.useState)(e.stylisPlugins),n=t[0],i=t[1],a=ki().styleSheet,o=(0,r.useMemo)(function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,a]),s=(0,r.useMemo)(function(){return vi({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);(0,r.useEffect)(function(){nn()(n,e.stylisPlugins)||i(e.stylisPlugins)},[e.stylisPlugins]);var l=(0,r.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:o,stylis:s}},[e.shouldForwardProp,o,s]);return r.createElement(xi.Provider,{value:l},r.createElement(wi.Provider,{value:s},e.children))}var _i=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=yi);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Yr(this,function(){throw Qr(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=yi),this.name+e.hash},e}(),Ei=function(e){return e>="A"&&e<="Z"};function Ci(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Ei(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var ji=function(e){return null==e||!1===e||""===e},Ri=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!ji(a)&&(Array.isArray(a)&&a.isCss||Br(a)?r.push("".concat(Ci(i),":"),a,";"):Vr(a)?r.push.apply(r,en(en(["".concat(i," {")],Ri(a),!1),["}"],!1)):r.push("".concat(Ci(i),": ").concat((t=i,null==(n=a)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in nr||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ti(e,t,n,r){return ji(e)?[]:Ur(e)?[".".concat(e.styledComponentId)]:Br(e)?!Br(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:Ti(e(t),t,n,r):e instanceof _i?n?(e.inject(n,r),[e.getName(r)]):[e]:Vr(e)?Ri(e):Array.isArray(e)?Array.prototype.concat.apply(cr,e.map(function(e){return Ti(e,t,n,r)})):[e.toString()];var i}function Oi(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Br(n)&&!Ur(n))return!1}return!0}var Pi=kr(or),zi=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Oi(e),this.componentId=t,this.baseHash=wr(Pi,t),this.baseStyle=n,pi.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Hr(r,this.staticRulesId);else{var i=Wr(Ti(this.rules,e,t,n)),a=yr(wr(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(i,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=Hr(r,a),this.staticRulesId=a}else{for(var s=wr(this.baseHash,n.hash),l="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)l+=c;else if(c){var d=Wr(Ti(c,e,t,n));s=wr(s,d+u),l+=d}}if(l){var f=yr(s>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(l,".".concat(f),void 0,this.componentId)),r=Hr(r,f)}}return r},e}(),Ni=r.createContext(void 0);Ni.Consumer;var Li={};new Set;function Ai(e,t,n){var i=Ur(e),a=e,o=!Er(e),s=t.attrs,l=void 0===s?cr:s,u=t.componentId,c=void 0===u?function(e,t){var n="string"!=typeof e?"sc":mr(e);Li[n]=(Li[n]||0)+1;var r="".concat(n,"-").concat(Sr(or+n+Li[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):u,d=t.displayName,f=void 0===d?function(e){return Er(e)?"styled.".concat(e):"Styled(".concat(_r(e),")")}(e):d,p=t.displayName&&t.componentId?"".concat(mr(t.displayName),"-").concat(t.componentId):t.componentId||c,h=i&&a.attrs?a.attrs.concat(l).filter(Boolean):l,g=t.shouldForwardProp;if(i&&a.shouldForwardProp){var m=a.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;g=function(e,t){return m(e,t)&&v(e,t)}}else g=m}var b=new zi(n,p,i?a.componentStyle:void 0);function y(e,t){return function(e,t,n){var i=e.attrs,a=e.componentStyle,o=e.defaultProps,s=e.foldedComponentIds,l=e.styledComponentId,u=e.target,c=r.useContext(Ni),d=ki(),f=e.shouldForwardProp||d.shouldForwardProp,p=fr(t,c,o)||dr,h=function(e,t,n){for(var r,i=Zt(Zt({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var o=Br(r=e[a])?r(i):r;for(var s in o)i[s]="className"===s?Hr(i[s],o[s]):"style"===s?Zt(Zt({},i[s]),o[s]):o[s]}return t.className&&(i.className=Hr(i.className,t.className)),i}(i,t,p),g=h.as||u,m={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v&&h.theme===p||("forwardedAs"===v?m.as=h.forwardedAs:f&&!f(v,g)||(m[v]=h[v]));var b=function(e,t){var n=ki();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(a,h),y=Hr(s,l);return b&&(y+=" "+b),h.className&&(y+=" "+h.className),m[Er(g)&&!pr.has(g)?"class":"className"]=y,n&&(m.ref=n),(0,r.createElement)(g,m)}(x,e,t)}y.displayName=f;var x=r.forwardRef(y);return x.attrs=h,x.componentStyle=b,x.displayName=f,x.shouldForwardProp=g,x.foldedComponentIds=i?Hr(a.foldedComponentIds,a.styledComponentId):"",x.styledComponentId=p,x.target=i?a.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)qr(e,i[r],!0);return e}({},a.defaultProps,e):e}}),Yr(x,function(){return".".concat(x.styledComponentId)}),o&&Mr(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Di(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Ii=function(e){return Object.assign(e,{isCss:!0})};function $i(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Br(e)||Vr(e))return Ii(Ti(Di(cr,en([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Ti(r):Ii(Ti(Di(r,t)))}function Fi(e,t,n){if(void 0===n&&(n=dr),!t)throw Qr(1,t);var r=function(r){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,$i.apply(void 0,en([r],i,!1)))};return r.attrs=function(r){return Fi(e,t,Zt(Zt({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Fi(e,t,Zt(Zt({},n),r))},r}var Mi=function(e){return Fi(Ai,e)},Bi=Mi;pr.forEach(function(e){Bi[e]=Mi(e)});!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Oi(e),pi.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var i=r(Wr(Ti(this.rules,t,n,r)),""),a=this.componentId+e;n.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&pi.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();function Ui(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Wr($i.apply(void 0,en([e],t,!1))),i=Sr(r);return new _i(i,r)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=oi(),r=Wr([n&&'nonce="'.concat(n,'"'),"".concat(rr,'="true"'),"".concat(ar,'="').concat(or,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Qr(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Qr(2);var n=e.instance.toString();if(!n)return[];var i=((t={})[rr]="",t[ar]=or,t.dangerouslySetInnerHTML={__html:n},t),a=oi();return a&&(i.nonce=a),[r.createElement("style",Zt({},i,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new pi({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Qr(2);return r.createElement(Si,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Qr(3)}})(),"__sc-".concat(rr,"__");const Hi=Ui`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,Wi=Ui`
  0%, 100% { text-shadow: 0 0 20px #00d4ff; }
  50% { text-shadow: 0 0 40px #00d4ff, 0 0 60px #00d4ff; }
`,Vi=Bi.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
  position: relative;
  overflow: hidden;
`,qi=Bi.div`
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
`,Yi=Bi.div`
  z-index: 1;
  text-align: center;
  animation: ${Hi} 1s ease-out;
`,Qi=Bi.h1`
  font-family: 'Orbitron', monospace;
  font-size: 4rem;
  font-weight: 900;
  color: #00d4ff;
  margin-bottom: 1rem;
  animation: ${Wi} 3s ease-in-out infinite;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Ki=Bi.h2`
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 3rem;
  opacity: 0.9;
`,Gi=Bi.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`,Xi=Bi.div`
  margin-bottom: 2rem;
  text-align: left;
`,Ji=Bi.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.1rem;
`,Zi=Bi.input`
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
`,ea=Bi.button`
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
`;const ta=function(){const{joinLobby:e}=Jt(),[t,n]=(0,r.useState)("");return(0,Yt.jsxs)(Vi,{children:[(0,Yt.jsx)(qi,{}),(0,Yt.jsxs)(Yi,{children:[(0,Yt.jsx)(Qi,{children:"HAVOC SPEEDWAY"}),(0,Yt.jsx)(Ki,{children:"Multiplayer Racing Championship"}),(0,Yt.jsx)(Gi,{children:(0,Yt.jsxs)("form",{onSubmit:n=>{n.preventDefault(),t.trim()&&e(t.trim())},children:[(0,Yt.jsxs)(Xi,{children:[(0,Yt.jsx)(Ji,{children:"Enter Your Racing Name"}),(0,Yt.jsx)(Zi,{type:"text",value:t,onChange:e=>n(e.target.value),placeholder:"Enter your name...",maxLength:20,required:!0})]}),(0,Yt.jsx)(ea,{type:"submit",disabled:!t.trim(),children:"Join the Lobby"})]})})]})]})},na=Bi.div`
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
`,ra=Bi.header`
  text-align: center;
  margin-bottom: 2rem;
`,ia=Bi.h1`
  font-family: 'Orbitron', monospace;
  font-size: 2.5rem;
  color: #00d4ff;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 20px #00d4ff;
`,aa=Bi.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`,oa=Bi.span`
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
`,sa=Bi.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,la=Bi.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
`,ua=Bi.h2`
  font-family: 'Orbitron', monospace;
  color: #00d4ff;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`,ca=Bi.button`
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
`,da=Bi.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 500px;
  overflow-y: auto;
`,fa=Bi.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-2px);
  }
`,pa=Bi.div`
  display: flex;
  justify-content: between;
  align-items: center;
  margin-bottom: 1rem;
`,ha=Bi.h3`
  color: white;
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.2rem;
  margin: 0;
  flex: 1;
`,ga=Bi.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${e=>"Waiting to start"===e.status?"#00ff88":"#ff8c00"};
  color: ${e=>"Waiting to start"===e.status?"#000":"#fff"};
`,ma=Bi.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`,va=Bi.button`
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
`,ba=Bi.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  height: fit-content;
`,ya=Bi.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,xa=Bi.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,wa=Bi.label`
  color: white;
  font-weight: 600;
`,ka=Bi.input`
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
`,Sa=Bi.select`
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
`,_a=Bi.button`
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
`,Ea=Bi.div`
  text-align: center;
  padding: 3rem;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
`;const Ca=function(){const{player:e,availableRooms:t,createRoom:n,joinRoom:i}=Jt(),[a,o]=(0,r.useState)(!1),[s,l]=(0,r.useState)({roomName:"",numberOfLaps:3,numberOfDice:1,numberOfDecks:1,cardsPerHand:4,numberOfCoins:2});return(0,Yt.jsxs)(na,{children:[(0,Yt.jsxs)(ra,{children:[(0,Yt.jsx)(ia,{children:"Race Lobby"}),(0,Yt.jsx)(aa,{children:(0,Yt.jsxs)(oa,{children:["Welcome, ",null===e||void 0===e?void 0:e.name,"!"]})})]}),(0,Yt.jsxs)(sa,{children:[(0,Yt.jsxs)(la,{children:[(0,Yt.jsx)(ua,{children:"Active Racing Rooms"}),0===t.length?(0,Yt.jsx)(Ea,{children:"No active rooms. Create one to start racing!"}):(0,Yt.jsx)(da,{children:t.map(e=>{var t;return(0,Yt.jsxs)(fa,{children:[(0,Yt.jsxs)(pa,{children:[(0,Yt.jsx)(ha,{children:e.name}),(0,Yt.jsx)(ga,{status:e.status,children:e.status})]}),(0,Yt.jsxs)(ma,{children:[(0,Yt.jsxs)("span",{children:["Host: ",e.hostName]}),(0,Yt.jsxs)("span",{children:[e.playerCount,"/",e.maxPlayers," players"]}),(0,Yt.jsxs)("span",{children:[(null===(t=e.settings)||void 0===t?void 0:t.numberOfLaps)||3," laps"]})]}),(0,Yt.jsx)(va,{onClick:()=>{return t=e.id,void i(t);var t},disabled:!e.canJoin,children:e.canJoin?"Join Race":"Room Full"})]},e.id)})})]}),(0,Yt.jsxs)(ba,{children:[(0,Yt.jsx)(ua,{children:"Create New Room"}),a?(0,Yt.jsxs)(ya,{onSubmit:e=>{e.preventDefault(),s.roomName.trim()&&(n(s.roomName.trim(),{numberOfLaps:parseInt(s.numberOfLaps),numberOfDice:parseInt(s.numberOfDice),numberOfDecks:parseInt(s.numberOfDecks),cardsPerHand:parseInt(s.cardsPerHand),numberOfCoins:parseInt(s.numberOfCoins)}),l({...s,roomName:""}),o(!1))},children:[(0,Yt.jsxs)(xa,{children:[(0,Yt.jsx)(wa,{children:"Room Name"}),(0,Yt.jsx)(ka,{type:"text",value:s.roomName,onChange:e=>l({...s,roomName:e.target.value}),placeholder:"Enter room name...",maxLength:30,required:!0})]}),(0,Yt.jsxs)(xa,{children:[(0,Yt.jsx)(wa,{children:"Number of Laps"}),(0,Yt.jsx)(Sa,{value:s.numberOfLaps,onChange:e=>l({...s,numberOfLaps:e.target.value}),children:[1,2,3,4,5].map(e=>(0,Yt.jsxs)("option",{value:e,children:[e," lap",1!==e?"s":""]},e))})]}),(0,Yt.jsxs)(xa,{children:[(0,Yt.jsx)(wa,{children:"Movement Dice"}),(0,Yt.jsxs)(Sa,{value:s.numberOfDice,onChange:e=>l({...s,numberOfDice:e.target.value}),children:[(0,Yt.jsx)("option",{value:1,children:"1 die"}),(0,Yt.jsx)("option",{value:2,children:"2 dice"})]})]}),(0,Yt.jsxs)(xa,{children:[(0,Yt.jsx)(wa,{children:"Card Decks"}),(0,Yt.jsxs)(Sa,{value:s.numberOfDecks,onChange:e=>l({...s,numberOfDecks:e.target.value}),children:[(0,Yt.jsx)("option",{value:1,children:"Single deck"}),(0,Yt.jsx)("option",{value:2,children:"Double deck"})]})]}),(0,Yt.jsxs)(xa,{children:[(0,Yt.jsx)(wa,{children:"Cards per Hand"}),(0,Yt.jsx)(Sa,{value:s.cardsPerHand,onChange:e=>l({...s,cardsPerHand:e.target.value}),children:[3,4,5].map(e=>(0,Yt.jsxs)("option",{value:e,children:[e," cards"]},e))})]}),(0,Yt.jsxs)(xa,{children:[(0,Yt.jsx)(wa,{children:"Coins per Round"}),(0,Yt.jsx)(Sa,{value:s.numberOfCoins,onChange:e=>l({...s,numberOfCoins:e.target.value}),children:[1,2,3].map(e=>(0,Yt.jsxs)("option",{value:e,children:[e," coin",1!==e?"s":""]},e))})]}),(0,Yt.jsxs)("div",{style:{display:"flex",gap:"0.5rem"},children:[(0,Yt.jsx)(_a,{type:"submit",disabled:!s.roomName.trim(),children:"Create Room"}),(0,Yt.jsx)(_a,{type:"button",onClick:()=>o(!1),style:{background:"#666"},children:"Cancel"})]})]}):(0,Yt.jsx)(ca,{onClick:()=>o(!0),children:"Create Racing Room"})]})]})]})},ja=Bi.div`
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
`,Ra=Bi.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
`,Ta=Bi.h1`
  font-family: 'Orbitron', monospace;
  color: #00d4ff;
  font-size: 2rem;
  margin: 0;
`,Oa=Bi.button`
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
`,Pa=Bi.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,za=Bi.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
`,Na=Bi.h2`
  font-family: 'Orbitron', monospace;
  color: #00d4ff;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`,La=Bi.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
`,Aa=Bi.div`
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
`,Da=Bi.div`
  text-align: center;
  width: 100%;
`,Ia=Bi.h3`
  color: white;
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`,$a=Bi.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${e=>e.color};
  border: 3px solid white;
  margin: 0 auto 0.5rem;
`,Fa=Bi.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${e=>e.isHost?"#ffd700":"#00ff88"};
  color: #000;
`,Ma=Bi.div`
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
  text-align: center;
`,Ba=Bi.button`
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
`,Ua=Bi.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`,Ha=Bi.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`,Wa=Bi.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 0.9rem;
`,Va=Bi.span`
  color: rgba(255, 255, 255, 0.8);
`,qa=Bi.span`
  font-weight: 600;
  color: #00d4ff;
`,Ya=Bi.button`
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
`,Qa=Bi.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  height: 600px;
`,Ka=Bi.div`
  display: flex;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,Ga=Bi.button`
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
`,Xa=Bi.select`
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
`,Ja=Bi.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,Za=Bi.div`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${e=>e.isPrivate?"rgba(255, 215, 0, 0.1)":"rgba(255, 255, 255, 0.05)"};
  border-left: 3px solid ${e=>e.isPrivate?"#ffd700":"#00d4ff"};
`,eo=Bi.div`
  font-size: 0.8rem;
  color: ${e=>e.isPrivate?"#ffd700":"#00d4ff"};
  margin-bottom: 0.2rem;
`,to=Bi.div`
  color: white;
  font-size: 0.9rem;
`,no=Bi.input`
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
`,ro=Bi.div`
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
`,io=Bi.button`
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
`;const ao=function(){var e,t,n,i,a,o,s,l,u,c,d,f,p,h,g;const{currentRoom:m,player:v,messages:b,leaveRoom:y,sendRoomMessage:x,sendPrivateMessage:w,changeColor:k,startGame:S}=Jt(),[_,E]=(0,r.useState)(""),[C,j]=(0,r.useState)(null),[R,T]=(0,r.useState)("room"),[O,P]=(0,r.useState)(""),z={yellow:"#ffd700",orange:"#ff8c00",red:"#ff3838",pink:"#ff69b4",purple:"#9b59b6",blue:"#00d4ff",green:"#00ff88",black:"#2c3e50"},N=["yellow","orange","red","pink","purple","blue","green","black"],L=(null===m||void 0===m||null===(e=m.host)||void 0===e?void 0:e.id)===(null===v||void 0===v?void 0:v.id)&&(null===m||void 0===m||null===(t=m.players)||void 0===t?void 0:t.length)>=2&&"lobby"===(null===m||void 0===m||null===(n=m.gameState)||void 0===n?void 0:n.currentStage),A=()=>{const e=(()=>{var e;return(null===m||void 0===m||null===(e=m.players)||void 0===e?void 0:e.map(e=>e.color).filter(Boolean))||[]})();return N.filter(t=>!e.includes(t)||t===(null===v||void 0===v?void 0:v.color))};return(0,Yt.jsxs)(ja,{children:[(0,Yt.jsxs)(Ra,{children:[(0,Yt.jsx)(Ta,{children:null===m||void 0===m?void 0:m.name}),(0,Yt.jsx)(Oa,{onClick:y,children:"Leave Room"})]}),(0,Yt.jsxs)(Pa,{children:[(0,Yt.jsxs)(za,{children:[(0,Yt.jsxs)(Na,{children:["Players (",(null===m||void 0===m||null===(i=m.players)||void 0===i?void 0:i.length)||0,"/4)"]}),(0,Yt.jsx)(La,{children:[0,1,2,3].map(e=>{var t;const n=null===m||void 0===m||null===(t=m.players)||void 0===t?void 0:t[e];return(0,Yt.jsx)(Aa,{filled:!!n,children:n?(0,Yt.jsxs)(Da,{children:[(0,Yt.jsx)($a,{color:z[n.color]||"#666"}),(0,Yt.jsx)(Ia,{children:n.name}),(0,Yt.jsx)(Fa,{isHost:n.isHost,children:n.isHost?"Host":"Player"}),n.id===(null===v||void 0===v?void 0:v.id)&&(0,Yt.jsxs)("div",{style:{position:"relative"},children:[(0,Yt.jsx)(Ba,{onClick:()=>j(C===e?null:e),children:"Change Color"}),C===e&&(0,Yt.jsx)(ro,{children:A().map(e=>(0,Yt.jsx)(io,{color:z[e],selected:(null===v||void 0===v?void 0:v.color)===e,onClick:()=>(e=>{k(e),j(null)})(e)},e))})]})]}):(0,Yt.jsx)(Ma,{children:"Waiting for player..."})},e)})}),(0,Yt.jsxs)(Ua,{children:[(0,Yt.jsx)(Na,{style:{fontSize:"1.2rem",marginBottom:"1rem"},children:"Game Settings"}),(0,Yt.jsxs)(Ha,{children:[(0,Yt.jsxs)(Wa,{children:[(0,Yt.jsx)(Va,{children:"Laps:"}),(0,Yt.jsx)(qa,{children:(null===m||void 0===m||null===(a=m.settings)||void 0===a?void 0:a.numberOfLaps)||3})]}),(0,Yt.jsxs)(Wa,{children:[(0,Yt.jsx)(Va,{children:"Movement Dice:"}),(0,Yt.jsx)(qa,{children:2===(null===m||void 0===m||null===(o=m.settings)||void 0===o?void 0:o.numberOfDice)?"2 dice":"1 die"})]}),(0,Yt.jsxs)(Wa,{children:[(0,Yt.jsx)(Va,{children:"Card Decks:"}),(0,Yt.jsx)(qa,{children:2===(null===m||void 0===m||null===(s=m.settings)||void 0===s?void 0:s.numberOfDecks)?"Double":"Single"})]}),(0,Yt.jsxs)(Wa,{children:[(0,Yt.jsx)(Va,{children:"Cards per Hand:"}),(0,Yt.jsx)(qa,{children:(null===m||void 0===m||null===(l=m.settings)||void 0===l?void 0:l.cardsPerHand)||4})]}),(0,Yt.jsxs)(Wa,{children:[(0,Yt.jsx)(Va,{children:"Coins per Round:"}),(0,Yt.jsx)(qa,{children:(null===m||void 0===m||null===(u=m.settings)||void 0===u?void 0:u.numberOfCoins)||2})]})]})]}),(null===m||void 0===m||null===(c=m.host)||void 0===c?void 0:c.id)===(null===v||void 0===v?void 0:v.id)&&(0,Yt.jsx)(Ya,{onClick:S,disabled:!L,children:L?"Start Race!":(null===m||void 0===m||null===(d=m.players)||void 0===d?void 0:d.length)<2?"Need at least 2 players":"Game in progress"})]}),(0,Yt.jsxs)(Qa,{children:[(0,Yt.jsxs)(Ka,{children:[(0,Yt.jsx)(Ga,{active:"room"===R,onClick:()=>T("room"),children:"Room Chat"}),(0,Yt.jsx)(Ga,{active:"private"===R,onClick:()=>T("private"),children:"Private Message"})]}),"private"===R&&(0,Yt.jsxs)(Xa,{value:O,onChange:e=>P(e.target.value),children:[(0,Yt.jsx)("option",{value:"",children:"Select player..."}),null===m||void 0===m||null===(f=m.players)||void 0===f||null===(p=f.filter(e=>e.id!==(null===v||void 0===v?void 0:v.id)))||void 0===p?void 0:p.map(e=>(0,Yt.jsx)("option",{value:e.id,children:e.name},e.id))]}),(0,Yt.jsx)(Ja,{children:b.filter(e=>"room"===R?"room"===e.type:"private"===e.type).map(e=>(0,Yt.jsxs)(Za,{isPrivate:"private"===e.type,children:[(0,Yt.jsxs)(eo,{isPrivate:"private"===e.type,children:["private"===e.type?"[Private] ":"",e.playerName,":"]}),(0,Yt.jsx)(to,{children:e.message})]},e.id))}),(0,Yt.jsx)("form",{onSubmit:e=>{e.preventDefault(),_.trim()&&("room"===R?x(_):"private"===R&&O&&w(O,_),E(""))},children:(0,Yt.jsx)(no,{type:"text",value:_,onChange:e=>E(e.target.value),placeholder:"room"===R?"Type a message...":O?`Private message to ${(null===m||void 0===m||null===(h=m.players)||void 0===h||null===(g=h.find(e=>e.id===O))||void 0===g?void 0:g.name)||"player"}...`:"Select a player first...",maxLength:200,disabled:"private"===R&&!O})})]})]})]})},oo=Ui`
  0%, 100% { box-shadow: 0 0 10px rgba(0, 212, 255, 0.5); }
  50% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.8), 0 0 30px rgba(0, 212, 255, 0.3); }
`,so=Ui`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
`,lo=Ui`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
`,uo=Bi.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: linear-gradient(
    135deg, 
    rgba(12, 12, 12, 0.95) 0%, 
    rgba(26, 26, 46, 0.95) 50%, 
    rgba(22, 33, 62, 0.95) 100%
  );
  backdrop-filter: blur(20px);
  border-bottom: 2px solid rgba(0, 212, 255, 0.3);
  padding: 15px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 15px;
  max-height: 120px;
  overflow: hidden;
`,co=Bi.div`
  background: linear-gradient(
    135deg, 
    rgba(255, 255, 255, 0.08) 0%, 
    rgba(0, 212, 255, 0.05) 50%, 
    rgba(255, 255, 255, 0.03) 100%
  );
  border: 2px solid ${e=>e.isCurrentPlayer?"#00d4ff":"rgba(255, 255, 255, 0.1)"};
  border-radius: 15px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  ${e=>e.isCurrentPlayer&&$i`
    animation: ${oo} 2s ease-in-out infinite;
    background: linear-gradient(
      135deg, 
      rgba(0, 212, 255, 0.15) 0%, 
      rgba(0, 212, 255, 0.08) 50%, 
      rgba(0, 212, 255, 0.05) 100%
    );
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg, 
      transparent, 
      rgba(255, 255, 255, 0.1), 
      transparent
    );
    transition: left 0.5s ease-in-out;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 212, 255, 0.2);
  }
`,fo=Bi.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${e=>e.color||"#666"};
  border: 3px solid rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  color: ${e=>["yellow","orange","pink"].includes(e.colorName)?"#000":"#fff"};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 15px;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${co}:hover &::after {
    opacity: 1;
  }
`,po=Bi.div`
  flex: 1;
  min-width: 0;
`,ho=Bi.h3`
  color: white;
  font-family: 'Rajdhani', sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 4px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`,go=Bi.span`
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: ${e=>e.isHost?"linear-gradient(45deg, #ffd700, #ffed4e)":e.isDealer?"linear-gradient(45deg, #ff6b6b, #ff8e8e)":"linear-gradient(45deg, #00ff88, #4ade80)"};
  color: ${e=>(e.isHost||e.isDealer,"#000")};
  margin-right: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`,mo=Bi.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,vo=(Bi.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
`,Bi.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  ${e=>$i`animation: ${e.hasCards?lo:"none"} 2s ease-in-out infinite;`}
`),bo=Bi.div`
  width: 16px;
  height: 20px;
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
  border-radius: 2px;
  border: 1px solid #ccc;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    height: 3px;
    background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
    border-radius: 1px;
  }
`,yo=Bi.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: rgba(255, 215, 0, 0.1);
  border-radius: 6px;
  border: 1px solid rgba(255, 215, 0, 0.3);
  ${e=>$i`animation: ${e.hasCoins?so:"none"} 3s linear infinite;`}
`,xo=Bi.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ffd700 0%, #ffed4e 50%, #ffc107 100%);
  border: 2px solid #ffab00;
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  position: relative;
  
  &::after {
    content: '$';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 8px;
    font-weight: bold;
    color: #b8860b;
  }
`,wo=Bi.div`
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: bold;
  background: ${e=>1===e.position?"linear-gradient(45deg, #ffd700, #ffed4e)":2===e.position?"linear-gradient(45deg, #c0c0c0, #e8e8e8)":3===e.position?"linear-gradient(45deg, #cd7f32, #d4a574)":"linear-gradient(45deg, #4a5568, #718096)"};
  color: ${e=>e.position<=3?"#000":"#fff"};
  min-width: 24px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`,ko=e=>{let{players:t,currentPlayer:n,gameState:r}=e;const i={yellow:"#ffd700",orange:"#ff8c00",red:"#ff3838",pink:"#ff69b4",purple:"#9b59b6",blue:"#00d4ff",green:"#00ff88",black:"#2c3e50"},a=e=>null!==r&&void 0!==r&&r.racePositions?r.racePositions.findIndex(t=>t.id===e.id)+1:null;return(0,Yt.jsx)(uo,{children:null===t||void 0===t?void 0:t.map(e=>{return(0,Yt.jsxs)(co,{isCurrentPlayer:e.id===(null===n||void 0===n?void 0:n.id),children:[(0,Yt.jsx)(fo,{color:i[e.color],colorName:e.color,children:(t=e.name,t.split(" ").map(e=>e[0]).join("").toUpperCase().slice(0,2))}),(0,Yt.jsxs)(po,{children:[(0,Yt.jsxs)("div",{style:{display:"flex",alignItems:"center",marginBottom:"4px"},children:[e.isHost&&(0,Yt.jsx)(go,{isHost:!0,children:"Host"}),e.isDealer&&(0,Yt.jsx)(go,{isDealer:!0,children:"Dealer"}),!e.isHost&&!e.isDealer&&(0,Yt.jsx)(go,{children:"Player"}),(0,Yt.jsx)(ho,{children:e.name})]}),(0,Yt.jsxs)(mo,{children:[(0,Yt.jsxs)(vo,{hasCards:e.handSize>0,children:[(0,Yt.jsx)(bo,{}),(0,Yt.jsx)("span",{children:e.handSize||0})]}),(0,Yt.jsxs)(yo,{hasCoins:e.coins>0,children:[(0,Yt.jsx)(xo,{}),(0,Yt.jsx)("span",{children:e.coins||0})]}),"racing"===(null===r||void 0===r?void 0:r.currentStage)&&(0,Yt.jsxs)(wo,{position:a(e),children:["#",a(e)]})]})]})]},e.id);var t})})},So=Ui`
  0% { transform: rotateY(0deg); }
  50% { transform: rotateY(90deg); }
  100% { transform: rotateY(0deg); }
`,_o=(Ui`
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-8px) scale(1.05); }
`,Ui`
  0%, 100% { box-shadow: 0 0 10px rgba(0, 212, 255, 0.3); }
  50% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.6), 0 0 30px rgba(0, 212, 255, 0.2); }
`),Eo=Bi.div`
  width: ${e=>"large"===e.size?"120px":"medium"===e.size?"80px":"60px"};
  height: ${e=>"large"===e.size?"168px":"medium"===e.size?"112px":"84px"};
  perspective: 1000px;
  cursor: ${e=>e.interactive?"pointer":"default"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${e=>e.interactive&&"\n    &:hover {\n      transform: translateY(-12px) scale(1.05);\n      filter: drop-shadow(0 12px 25px rgba(0, 0, 0, 0.4));\n    }\n  "}
  
  ${e=>e.isPlayable&&$i`
    animation: ${_o} 2s ease-in-out infinite;
  `}
  
  ${e=>e.isAnimating&&$i`
    animation: ${So} 0.6s ease-in-out;
  `}
`,Co=Bi.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${e=>e.isFlipped&&"\n    transform: rotateY(180deg);\n  "}
`,jo=Bi.div`
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
`,Ro=Bi(jo)`
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    #f8f9fa 50%,
    #e9ecef 100%
  );
  color: ${e=>function(e){switch(e){case"hearts":case"diamonds":return"#e74c3c";default:return"#2c3e50"}}(e.suit)};
  transform: rotateY(0deg);
`,To=Bi(jo)`
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
`,Oo=Bi.div`
  font-size: ${e=>"large"===e.size?"24px":"medium"===e.size?"18px":"14px"};
  font-weight: bold;
  font-family: 'Rajdhani', sans-serif;
  position: absolute;
  top: 8px;
  left: 8px;
  line-height: 1;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`,Po=Bi.div`
  font-size: ${e=>"large"===e.size?"48px":"medium"===e.size?"32px":"24px"};
  line-height: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.3));
`,zo=Bi.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  font-size: ${e=>"large"===e.size?"16px":"medium"===e.size?"12px":"10px"};
  font-weight: bold;
  font-family: 'Rajdhani', sans-serif;
  transform: rotate(180deg);
  opacity: 0.7;
`,No=Bi.div`
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
  
  ${Eo}:hover & {
    opacity: ${e=>e.isSpecial?"0.6":"0"};
  }
`;function Lo(e){switch(e){case"hearts":return"\u2665";case"diamonds":return"\u2666";case"spades":return"\u2660";case"clubs":return"\u2663";default:return""}}function Ao(e){return["Q","7","A"].includes(e)}const Do=e=>{let{rank:t,suit:n,isBack:r=!1,size:i="medium",interactive:a=!1,isPlayable:o=!1,isAnimating:s=!1,onClick:l,style:u={}}=e;return(0,Yt.jsx)(Eo,{size:i,interactive:a,isPlayable:o,isAnimating:s,onClick:()=>{a&&l&&l({rank:t,suit:n})},style:u,children:(0,Yt.jsxs)(Co,{isFlipped:r,children:[(0,Yt.jsxs)(Ro,{suit:n,children:[(0,Yt.jsx)(No,{rank:t,isSpecial:Ao(t)}),(0,Yt.jsx)(Oo,{size:i,children:t}),(0,Yt.jsx)(Po,{size:i,children:Lo(n)}),(0,Yt.jsx)(zo,{size:i,children:t})]}),(0,Yt.jsx)(To,{})]})})},Io=Bi.div`
  position: relative;
  display: inline-block;
`,$o=Bi.div`
  position: absolute;
  top: ${e=>-2*e.index}px;
  left: ${e=>-1*e.index}px;
  transform: rotate(${e=>2*(e.index-1)}deg);
  z-index: ${e=>10-e.index};
`,Fo=e=>{let{cards:t,size:n="medium",maxVisible:r=3}=e;const i=t.slice(-r);return(0,Yt.jsx)(Io,{children:i.map((e,t)=>(0,Yt.jsx)($o,{index:t,children:(0,Yt.jsx)(Do,{rank:null===e||void 0===e?void 0:e.rank,suit:null===e||void 0===e?void 0:e.suit,isBack:!0,size:n})},t))})},Mo=Bi.div`
  display: flex;
  gap: ${e=>"large"===e.size?"-30px":"medium"===e.size?"-20px":"-15px"};
  padding: 20px;
  align-items: center;
  justify-content: center;
  
  & > *:hover {
    z-index: 100;
    position: relative;
  }
`,Bo=e=>{let{cards:t,size:n="medium",interactive:r=!1,playableCards:i=[],onCardClick:a}=e;return(0,Yt.jsx)(Mo,{size:n,children:t.map((e,o)=>(0,Yt.jsx)(Do,{rank:e.rank,suit:e.suit,size:n,interactive:r,isPlayable:i.some(t=>t.rank===e.rank&&t.suit===e.suit),onClick:a,style:{transform:`rotate(${8*(o-(t.length-1)/2)}deg)`,zIndex:o}},`${e.rank}-${e.suit}-${o}`))})},Uo=Do,Ho=Ui`
  0% { transform: rotateY(0deg); }
  50% { transform: rotateY(90deg); }
  100% { transform: rotateY(180deg); }
`,Wo=Ui`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
`,Vo=Ui`
  0%, 100% { box-shadow: 0 0 15px rgba(255, 215, 0, 0.4); }
  50% { box-shadow: 0 0 25px rgba(255, 215, 0, 0.7), 0 0 35px rgba(255, 215, 0, 0.3); }
`,qo=Ui`
  0%, 100% { opacity: 0; transform: rotate(0deg) scale(0.5); }
  50% { opacity: 1; transform: rotate(180deg) scale(1); }
`,Yo=Bi.div`
  width: ${e=>"large"===e.size?"60px":"medium"===e.size?"40px":"30px"};
  height: ${e=>"large"===e.size?"60px":"medium"===e.size?"40px":"30px"};
  position: relative;
  cursor: ${e=>e.interactive?"pointer":"default"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${e=>e.isFloating&&$i`
    animation: ${Wo} 2s ease-in-out infinite;
  `}
  
  ${e=>e.isFlipping&&$i`
    animation: ${Ho} 0.8s ease-in-out;
  `}
  
  ${e=>e.interactive&&$i`
    &:hover {
      transform: scale(1.1);
      animation: ${Vo} 1.5s ease-in-out infinite;
    }
  `}
`,Qo=Bi.div`
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
    ${$i`animation: ${qo} 3s ease-in-out infinite;`}
  }
`,Ko=Bi.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;
`,Go=Bi.div`
  font-size: ${e=>"large"===e.size?"24px":"medium"===e.size?"16px":"12px"};
  margin-bottom: ${e=>"large"===e.size?"2px":"1px"};
`,Xo=Bi.div`
  font-size: ${e=>"large"===e.size?"12px":"medium"===e.size?"10px":"8px"};
  opacity: 0.8;
`,Jo=Bi.div`
  position: relative;
  display: inline-block;
`,Zo=Bi.div`
  position: absolute;
  top: ${e=>-3*e.index}px;
  left: ${e=>-1*e.index}px;
  z-index: ${e=>10-e.index};
  transform: rotate(${e=>5*e.index}deg);
`,es=Bi.div`
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
`,ts=e=>{let{type:t="gold",value:n=1,size:r="medium",interactive:i=!1,isFloating:a=!1,isFlipping:o=!1,onClick:s,showValue:l=!0}=e;return(0,Yt.jsx)(Yo,{size:r,interactive:i,isFloating:a,isFlipping:o,onClick:()=>{i&&s&&s({type:t,value:n})},children:(0,Yt.jsx)(Qo,{type:t,size:r,children:(0,Yt.jsxs)(Ko,{size:r,children:[(0,Yt.jsx)(Go,{size:r,children:(()=>{switch(t){case"gold":default:return"$";case"silver":return"\xa2";case"bronze":return"\u220e"}})()}),l&&(0,Yt.jsx)(Xo,{size:r,children:n})]})})})},ns=e=>{let{coins:t,size:n="medium",maxVisible:r=5,showCount:i=!0}=e;const a=t.slice(0,r),o=Math.max(0,t.length-r);return(0,Yt.jsxs)(Jo,{children:[a.map((e,t)=>(0,Yt.jsx)(Zo,{index:t,children:(0,Yt.jsx)(ts,{type:e.type,value:e.value,size:n,showValue:0===t})},t)),i&&o>0&&(0,Yt.jsxs)(es,{children:["+",o]})]})},rs=Bi.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  border: 2px solid rgba(255, 215, 0, 0.2);
  backdrop-filter: blur(5px);
`,is=Bi.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,as=Bi.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,os=e=>{let{coins:t,size:n="medium",interactive:r=!1,onCoinClick:i,groupByType:a=!0}=e;if(a){const e=t.reduce((e,t)=>(e[t.type]||(e[t.type]=[]),e[t.type].push(t),e),{});return(0,Yt.jsx)(rs,{children:Object.entries(e).map(e=>{let[t,r]=e;return(0,Yt.jsxs)(is,{children:[(0,Yt.jsx)(as,{children:t}),(0,Yt.jsx)(ns,{coins:r,size:n,maxVisible:3})]},t)})})}return(0,Yt.jsx)(rs,{children:t.map((e,t)=>(0,Yt.jsx)(ts,{type:e.type,value:e.value,size:n,interactive:r,onClick:i,isFloating:r},t))})},ss=Ui`
  0% { transform: translateX(-10px); }
  50% { transform: translateX(10px); }
  100% { transform: translateX(-10px); }
`,ls=Ui`
  0% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(0.3); }
`,us=Ui`
  0%, 100% { box-shadow: 0 0 10px rgba(255, 165, 0, 0.3); }
  50% { box-shadow: 0 0 20px rgba(255, 165, 0, 0.6), 0 0 30px rgba(255, 165, 0, 0.2); }
`,cs=Bi.div`
  width: 100%;
  max-width: 1200px;
  height: 600px;
  margin: 0 auto;
  position: relative;
  background: 
    radial-gradient(circle at 30% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(255, 56, 56, 0.1) 0%, transparent 50%),
    linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  border-radius: 20px;
  border: 3px solid rgba(0, 212, 255, 0.3);
  overflow: hidden;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
`,ds=Bi.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`,fs=Bi.path`
  fill: none;
  stroke: #2a2a3e;
  stroke-width: 80;
  stroke-linecap: round;
  stroke-linejoin: round;
`,ps=Bi.path`
  fill: none;
  stroke: #1a1a2e;
  stroke-width: 40;
  stroke-linecap: round;
  stroke-linejoin: round;
`,hs=Bi.path`
  fill: none;
  stroke: rgba(255, 255, 255, 0.2);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-dasharray: 10, 10;
`,gs=Bi.rect`
  fill: url(#startFinishGradient);
  stroke: white;
  stroke-width: 2;
`,ms=Bi.rect`
  fill: rgba(255, 165, 0, 0.2);
  stroke: #ffa500;
  stroke-width: 2;
  rx: 5;
  ${$i`animation: ${us} 3s ease-in-out infinite;`}
`,vs=Bi.div`
  position: absolute;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${e=>e.color||"#00d4ff"};
  border: 3px solid white;
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.4),
    0 0 0 2px ${e=>e.color||"#00d4ff"},
    0 0 20px ${e=>e.color||"#00d4ff"}40;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Rajdhani', sans-serif;
  font-weight: bold;
  font-size: 14px;
  color: ${e=>["#ffd700","#ff8c00","#ff69b4"].includes(e.color)?"#000":"#fff"};
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
  
  ${e=>e.isMoving&&$i`
    animation: ${ss} 0.3s ease-in-out;
  `}
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 10px;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
    transform: translate(-50%, -50%);
    ${$i`animation: ${ls} 2s ease-in-out infinite;`}
  }
`,bs=Bi.div`
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Rajdhani', sans-serif;
`,ys=Bi.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.8);
  padding: 10px 20px;
  border-radius: 10px;
  border: 2px solid rgba(0, 212, 255, 0.5);
  color: white;
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  
  .label {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.7);
    display: block;
    margin-bottom: 5px;
  }
  
  .current {
    color: #00d4ff;
    font-size: 24px;
  }
  
  .total {
    color: rgba(255, 255, 255, 0.8);
  }
`,xs=Bi.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.8);
  padding: 15px 25px;
  border-radius: 15px;
  border: 2px solid rgba(255, 215, 0, 0.5);
  color: white;
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  
  .label {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.7);
    display: block;
    margin-bottom: 5px;
  }
  
  .speed {
    color: #ffd700;
    font-size: 28px;
    text-shadow: 0 0 10px #ffd700;
  }
  
  .unit {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    margin-left: 5px;
  }
`,ws=e=>{let{players:t=[],currentLap:n=1,totalLaps:r=3,playerPositions:i={},speed:a=0,showPositionMarkers:o=!1}=e;const s={yellow:"#ffd700",orange:"#ff8c00",red:"#ff3838",pink:"#ff69b4",purple:"#9b59b6",blue:"#00d4ff",green:"#00ff88",black:"#2c3e50"},l=e=>{const t=e/96*2*Math.PI;return{x:600+450*Math.cos(t-Math.PI/2),y:300+200*Math.sin(t-Math.PI/2)}};return(0,Yt.jsxs)(cs,{children:[(0,Yt.jsxs)(ds,{viewBox:"0 0 1200 600",children:[(0,Yt.jsx)("defs",{children:(0,Yt.jsxs)("linearGradient",{id:"startFinishGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[(0,Yt.jsx)("stop",{offset:"0%",stopColor:"#ff0000"}),(0,Yt.jsx)("stop",{offset:"25%",stopColor:"#ffffff"}),(0,Yt.jsx)("stop",{offset:"50%",stopColor:"#ff0000"}),(0,Yt.jsx)("stop",{offset:"75%",stopColor:"#ffffff"}),(0,Yt.jsx)("stop",{offset:"100%",stopColor:"#ff0000"})]})}),(0,Yt.jsx)(fs,{d:"M 150 300 \r Q 150 100, 350 100\r L 850 100\r Q 1050 100, 1050 300\r Q 1050 500, 850 500\r L 350 500\r Q 150 500, 150 300 Z"}),(0,Yt.jsx)(ps,{d:"M 150 300 \r Q 150 100, 350 100\r L 850 100\r Q 1050 100, 1050 300\r Q 1050 500, 850 500\r L 350 500\r Q 150 500, 150 300 Z"}),(0,Yt.jsx)(hs,{d:"M 150 300 \r Q 150 120, 350 120\r L 850 120\r Q 1030 120, 1030 300\r Q 1030 480, 850 480\r L 350 480\r Q 150 480, 150 300 Z"}),(0,Yt.jsx)(gs,{x:"580",y:"80",width:"40",height:"40"}),(0,Yt.jsx)(ms,{x:"200",y:"450",width:"100",height:"30"}),(0,Yt.jsx)(ms,{x:"900",y:"450",width:"100",height:"30"}),o&&Array.from({length:24},(e,t)=>{const n=l(4*t);return(0,Yt.jsx)("circle",{cx:n.x,cy:n.y,r:"8",fill:"rgba(255, 255, 255, 0.1)",stroke:"rgba(255, 255, 255, 0.3)",strokeWidth:"1"},t)})]}),t.map(e=>{const t=i[e.id]||0,n=l(t);return(0,Yt.jsx)(vs,{color:s[e.color],style:{left:n.x-16+"px",top:n.y-16+"px"},children:(r=e.name,r.split(" ").map(e=>e[0]).join("").toUpperCase().slice(0,2))},e.id);var r}),o&&Array.from({length:24},(e,t)=>{const n=4*t,r=l(n);return(0,Yt.jsx)(bs,{style:{left:r.x-12+"px",top:r.y-12+"px"},children:n},t)}),(0,Yt.jsxs)(ys,{children:[(0,Yt.jsx)("span",{className:"label",children:"LAP"}),(0,Yt.jsxs)("div",{children:[(0,Yt.jsx)("span",{className:"current",children:n}),(0,Yt.jsxs)("span",{className:"total",children:["/",r]})]})]}),(0,Yt.jsxs)(xs,{children:[(0,Yt.jsx)("span",{className:"label",children:"SPEED"}),(0,Yt.jsxs)("div",{children:[(0,Yt.jsx)("span",{className:"speed",children:a}),(0,Yt.jsx)("span",{className:"unit",children:"MPH"})]})]})]})},ks=Ui`
  0% { transform: rotateX(0deg) rotateY(0deg); }
  25% { transform: rotateX(90deg) rotateY(0deg); }
  50% { transform: rotateX(180deg) rotateY(90deg); }
  75% { transform: rotateX(270deg) rotateY(180deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
`,Ss=Ui`
  0%, 100% { box-shadow: 0 0 15px rgba(255, 255, 255, 0.3); }
  50% { box-shadow: 0 0 25px rgba(255, 255, 255, 0.6), 0 0 35px rgba(255, 255, 255, 0.2); }
`,_s=Ui`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`,Es=Bi.div`
  perspective: 200px;
  display: inline-block;
  margin: 10px;
`,Cs=Bi.div`
  width: ${e=>"large"===e.size?"80px":"medium"===e.size?"60px":"40px"};
  height: ${e=>"large"===e.size?"80px":"medium"===e.size?"60px":"40px"};
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: ${e=>e.interactive?"pointer":"default"};
  
  ${e=>e.isRolling&&$i`
    animation: ${ks} 1s ease-in-out;
  `}
  
  ${e=>e.interactive&&$i`
    &:hover {
      animation: ${_s} 0.5s ease-in-out;
    }
  `}
  
  ${e=>e.isGlowing&&$i`
    animation: ${Ss} 2s ease-in-out infinite;
  `}
`,js=Bi.div`
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
`,Rs=Bi(js)`
  transform: rotateY(0deg) translateZ(${e=>"large"===e.size?"40px":"medium"===e.size?"30px":"20px"});
`,Ts=Bi(js)`
  transform: rotateY(180deg) translateZ(${e=>"large"===e.size?"40px":"medium"===e.size?"30px":"20px"});
`,Os=Bi(js)`
  transform: rotateY(90deg) translateZ(${e=>"large"===e.size?"40px":"medium"===e.size?"30px":"20px"});
`,Ps=Bi(js)`
  transform: rotateY(-90deg) translateZ(${e=>"large"===e.size?"40px":"medium"===e.size?"30px":"20px"});
`,zs=Bi(js)`
  transform: rotateX(90deg) translateZ(${e=>"large"===e.size?"40px":"medium"===e.size?"30px":"20px"});
`,Ns=Bi(js)`
  transform: rotateX(-90deg) translateZ(${e=>"large"===e.size?"40px":"medium"===e.size?"30px":"20px"});
`,Ls=Bi.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2px;
  padding: 8px;
  position: relative;
  z-index: 2;
`,As=Bi.div`
  width: ${e=>"large"===e.size?"8px":"medium"===e.size?"6px":"4px"};
  height: ${e=>"large"===e.size?"8px":"medium"===e.size?"6px":"4px"};
  border-radius: 50%;
  background: #333;
  justify-self: center;
  align-self: center;
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(0, 0, 0, 0.1);
`,Ds=Bi.div`
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: ${e=>"large"===e.size?"32px":"medium"===e.size?"24px":"16px"};
  color: #333;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
`,Is=Bi.button`
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
`,$s=Bi.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  margin-top: 1rem;
`,Fs=Bi.div`
  color: white;
  font-family: 'Rajdhani', sans-serif;
  font-size: 18px;
  font-weight: 600;
`,Ms=Bi.div`
  font-family: 'Orbitron', monospace;
  font-size: 24px;
  font-weight: bold;
  color: #ffd700;
  text-shadow: 0 0 10px #ffd700;
`,Bs=(e,t)=>{const n={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,1,2,6,7,8]}[e]||[];return Array.from({length:9},(e,r)=>n.includes(r)?(0,Yt.jsx)(As,{size:t},r):(0,Yt.jsx)("div",{},r))},Us=e=>{let{value:t=1,size:n="medium",interactive:r=!1,isRolling:i=!1,isGlowing:a=!1,showDots:o=!0,onClick:s}=e;return(0,Yt.jsx)(Es,{children:(0,Yt.jsxs)(Cs,{size:n,interactive:r,isRolling:i,isGlowing:a,onClick:()=>{r&&s&&!i&&s()},children:[(0,Yt.jsx)(Rs,{size:n,children:o?(0,Yt.jsx)(Ls,{children:Bs(t,n)}):(0,Yt.jsx)(Ds,{size:n,children:t})}),(0,Yt.jsx)(Ts,{size:n,children:o?(0,Yt.jsx)(Ls,{children:Bs(7-t,n)}):(0,Yt.jsx)(Ds,{size:n,children:7-t})}),(0,Yt.jsx)(Os,{size:n,children:o?(0,Yt.jsx)(Ls,{children:Bs(2,n)}):(0,Yt.jsx)(Ds,{size:n,children:"2"})}),(0,Yt.jsx)(Ps,{size:n,children:o?(0,Yt.jsx)(Ls,{children:Bs(5,n)}):(0,Yt.jsx)(Ds,{size:n,children:"5"})}),(0,Yt.jsx)(zs,{size:n,children:o?(0,Yt.jsx)(Ls,{children:Bs(3,n)}):(0,Yt.jsx)(Ds,{size:n,children:"3"})}),(0,Yt.jsx)(Ns,{size:n,children:o?(0,Yt.jsx)(Ls,{children:Bs(4,n)}):(0,Yt.jsx)(Ds,{size:n,children:"4"})})]})})},Hs=e=>{let{numberOfDice:t=1,size:n="large",onRoll:i,autoRoll:a=!1}=e;const[o,s]=(0,r.useState)(Array(t).fill(1)),[l,u]=(0,r.useState)(!1),c=async()=>{l||(u(!0),setTimeout(()=>{const e=Array.from({length:t},()=>Math.floor(6*Math.random())+1);s(e),u(!1),i&&i(e)},1e3))},d=o.reduce((e,t)=>e+t,0);return(0,Yt.jsxs)("div",{style:{textAlign:"center"},children:[(0,Yt.jsx)("div",{style:{display:"flex",gap:"20px",justifyContent:"center",alignItems:"center"},children:o.map((e,t)=>(0,Yt.jsx)(Us,{value:e,size:n,interactive:!a,isRolling:l,isGlowing:!l&&6===e,onClick:a?void 0:c},t))}),t>1&&(0,Yt.jsxs)($s,{children:[(0,Yt.jsx)(Fs,{children:"Total:"}),(0,Yt.jsx)(Ms,{children:d})]}),(0,Yt.jsx)(Is,{onClick:c,disabled:l,children:l?"Rolling...":"Roll Dice"})]})},Ws=Ui`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`,Vs=Ui`
  0% { transform: translateX(100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`,qs=Ui`
  0%, 100% { box-shadow: 0 0 10px rgba(0, 212, 255, 0.3); }
  50% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.6), 0 0 30px rgba(0, 212, 255, 0.2); }
`,Ys=Bi.div`
  min-height: 100vh;
  padding-top: 140px; /* Account for fixed header */
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  background: 
    radial-gradient(circle at 20% 30%, rgba(0, 212, 255, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(255, 56, 56, 0.05) 0%, transparent 50%),
    linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
  ${$i`animation: ${Ws} 0.8s ease-out;`}
`,Qs=Bi.div`
  max-width: 1400px;
  margin: 0 auto;
  ${$i`animation: ${Ws} 0.6s ease-out;`}
`,Ks=Bi.h1`
  font-family: 'Orbitron', monospace;
  font-size: 2.5rem;
  color: #00d4ff;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 
    0 0 20px #00d4ff,
    0 0 40px rgba(0, 212, 255, 0.5);
  ${$i`animation: ${qs} 3s ease-in-out infinite;`}
`,Gs=Bi.p`
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`,Xs=Bi.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`,Js=Bi.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 2px solid rgba(0, 212, 255, 0.3);
  border-radius: 20px;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  max-width: 900px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`,Zs=Bi.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 1.5rem 2rem;
  border-radius: 15px;
  border: 2px solid rgba(255, 215, 0, 0.5);
  color: white;
  text-align: center;
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  ${$i`animation: ${Vs} 0.5s ease-out;`}
`,el=Bi.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,tl=Bi.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,nl=Bi.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 2px solid rgba(0, 212, 255, 0.3);
  border-radius: 20px;
  padding: 2rem;
  min-height: 200px;
`,rl=Bi.div`
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 1rem;
`,il=Bi.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,al=Bi.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1.5rem;
`,ol=Bi.h3`
  font-family: 'Orbitron', monospace;
  color: #00d4ff;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`,sl=Bi.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`,ll=Bi.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 800px;
  width: 100%;
`,ul=Bi.div`
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
  
  ${e=>e.selected&&$i`
    background: rgba(0, 212, 255, 0.1);
    animation: ${qs} 2s ease-in-out infinite;
  `}
`,cl=Bi.div`
  font-family: 'Orbitron', monospace;
  font-size: 3rem;
  font-weight: bold;
  color: #00d4ff;
  margin-bottom: 1rem;
  text-shadow: 0 0 20px #00d4ff;
`,dl=Bi.div`
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.1rem;
  line-height: 1.4;
`,fl=Bi.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,pl=Bi.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 2px solid rgba(255, 215, 0, 0.3);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  justify-content: center;
  min-height: 300px;
`,hl=Bi.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,gl=Bi.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`,ml=Bi.button`
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
`,vl=Bi.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  border: 2px solid rgba(255, 255, 255, 0.2);
`;const bl=function(){var e;const{currentRoom:t,player:n,gameState:i,leaveRoom:a}=Jt(),[o,s]=(0,r.useState)(null),[l,u]=(0,r.useState)([1,1]),c=(null===t||void 0===t||null===(e=t.gameState)||void 0===e?void 0:e.currentStage)||"lobby",d=(null===t||void 0===t?void 0:t.players)||[],f=[{rank:"A",suit:"hearts"},{rank:"Q",suit:"spades"},{rank:"7",suit:"diamonds"},{rank:"K",suit:"clubs"},{rank:"9",suit:"hearts"}],p=[{rank:"8",suit:"spades"}],h=[{type:"gold",value:5},{type:"gold",value:3},{type:"silver",value:2},{type:"bronze",value:1}],g={[null===n||void 0===n?void 0:n.id]:12},m=e=>{u(e),console.log("Dice rolled:",e)};return(0,Yt.jsxs)(Ys,{children:[(0,Yt.jsx)(ko,{players:d,currentPlayer:n,gameState:null===t||void 0===t?void 0:t.gameState}),(0,Yt.jsx)(Qs,{children:(()=>{var e,n,r,i;switch(c){case"dealer-selection":return(0,Yt.jsxs)(Xs,{children:[(0,Yt.jsx)(Ks,{children:"Dealer Selection"}),(0,Yt.jsx)(Gs,{children:"Each player selects 3 cards from the 18 available cards. The player with the highest total becomes the first dealer."}),(0,Yt.jsx)(Js,{children:Array.from({length:18},(e,t)=>(0,Yt.jsx)(Uo,{rank:["7","8","9","10","J","Q","K","A","A"][t%9],suit:["hearts","diamonds","spades","clubs"][t%4],size:"medium",interactive:!0,isPlayable:!0},t))}),(0,Yt.jsx)(Zs,{children:"Waiting for all players to select 3 cards..."})]});case"storm":return(0,Yt.jsxs)(el,{children:[(0,Yt.jsxs)(tl,{children:[(0,Yt.jsx)(Ks,{children:"Storm Stage"}),(0,Yt.jsx)(Gs,{children:"Play cards strategically! Queens are wild, Sevens are toxic, Aces skip turns."}),(0,Yt.jsx)(nl,{children:(0,Yt.jsxs)("div",{style:{display:"flex",gap:"2rem",alignItems:"center"},children:[(0,Yt.jsxs)("div",{style:{textAlign:"center"},children:[(0,Yt.jsx)("h4",{style:{color:"white",marginBottom:"1rem"},children:"Stock Pile"}),(0,Yt.jsx)(Fo,{cards:Array(20).fill({}),size:"medium"})]}),(0,Yt.jsxs)("div",{style:{textAlign:"center"},children:[(0,Yt.jsx)("h4",{style:{color:"white",marginBottom:"1rem"},children:"Discard Pile"}),(0,Yt.jsx)(Uo,{rank:null===(e=p[0])||void 0===e?void 0:e.rank,suit:null===(n=p[0])||void 0===n?void 0:n.suit,size:"large"})]})]})}),(0,Yt.jsxs)(rl,{children:[(0,Yt.jsx)("h4",{style:{color:"white",marginBottom:"1rem",textAlign:"center"},children:"Your Hand"}),(0,Yt.jsx)(Bo,{cards:f,size:"large",interactive:!0,playableCards:f.filter(e=>{var t,n;return e.suit===(null===(t=p[0])||void 0===t?void 0:t.suit)||e.rank===(null===(n=p[0])||void 0===n?void 0:n.rank)||"Q"===e.rank})})]})]}),(0,Yt.jsxs)(il,{children:[(0,Yt.jsxs)(al,{children:[(0,Yt.jsx)(ol,{children:"Game Info"}),(0,Yt.jsxs)("p",{style:{color:"rgba(255, 255, 255, 0.8)",marginBottom:"1rem"},children:["Current Player: ",(0,Yt.jsx)("strong",{style:{color:"#00d4ff"},children:"Player Name"})]}),(0,Yt.jsxs)("p",{style:{color:"rgba(255, 255, 255, 0.8)"},children:["Cards in deck: ",(0,Yt.jsx)("strong",{style:{color:"#ffd700"},children:"23"})]})]}),(0,Yt.jsxs)(al,{children:[(0,Yt.jsx)(ol,{children:"Special Rules"}),(0,Yt.jsxs)("ul",{style:{color:"rgba(255, 255, 255, 0.8)",listStyle:"none",padding:0},children:[(0,Yt.jsx)("li",{style:{marginBottom:"0.5rem"},children:"\ud83c\udccf Queens: Wild cards"}),(0,Yt.jsx)("li",{style:{marginBottom:"0.5rem"},children:"\ud83c\udfaf Sevens: Draw +2"}),(0,Yt.jsx)("li",{style:{marginBottom:"0.5rem"},children:"\u26a1 Aces: Skip turn"})]})]})]})]});case"lane-selection":return(0,Yt.jsxs)(sl,{children:[(0,Yt.jsx)(Ks,{children:"Lane Selection"}),(0,Yt.jsx)(Gs,{children:"Choose your starting lane for the race. Lane 1 starts first but is most crowded."}),(0,Yt.jsx)(ll,{children:[1,2,3,4].map(e=>(0,Yt.jsxs)(ul,{selected:o===e,onClick:()=>s(e),children:[(0,Yt.jsx)(cl,{children:e}),(0,Yt.jsxs)(dl,{children:[1===e&&"Inside lane - Shortest distance",2===e&&"Second lane - Good balance",3===e&&"Third lane - Less congestion",4===e&&"Outside lane - Most room"]})]},e))}),o&&(0,Yt.jsxs)(ml,{children:["Confirm Lane ",o]})]});case"coin-stage":return(0,Yt.jsxs)(fl,{children:[(0,Yt.jsx)(Ks,{children:"Coin Placement"}),(0,Yt.jsx)(Gs,{children:"Place your coins on the track to affect movement and strategy."}),(0,Yt.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 300px",gap:"2rem"},children:[(0,Yt.jsx)(pl,{children:(0,Yt.jsx)(ws,{players:d,playerPositions:g,showPositionMarkers:!0})}),(0,Yt.jsxs)(al,{children:[(0,Yt.jsx)(ol,{children:"Your Coins"}),(0,Yt.jsx)(os,{coins:h,size:"large",interactive:!0,groupByType:!0})]})]})]});case"racing":return(0,Yt.jsxs)(hl,{children:[(0,Yt.jsx)(Ks,{children:"Racing Stage"}),(0,Yt.jsx)(Gs,{children:"Roll dice and race to victory! Use strategy and luck to cross the finish line first."}),(0,Yt.jsx)(ws,{players:d,currentLap:1,totalLaps:(null===t||void 0===t||null===(r=t.settings)||void 0===r?void 0:r.numberOfLaps)||3,playerPositions:g,speed:10*l.reduce((e,t)=>e+t,0)}),(0,Yt.jsx)(vl,{children:(0,Yt.jsx)(Hs,{numberOfDice:(null===t||void 0===t||null===(i=t.settings)||void 0===i?void 0:i.numberOfDice)||1,size:"large",onRoll:m})}),(0,Yt.jsxs)(gl,{children:[(0,Yt.jsx)(ml,{children:"Move Forward"}),(0,Yt.jsx)(ml,{children:"Use Card"}),(0,Yt.jsx)(ml,{children:"Pit Stop"})]})]});default:return(0,Yt.jsxs)("div",{style:{textAlign:"center",padding:"4rem"},children:[(0,Yt.jsx)(Ks,{children:"Game Starting..."}),(0,Yt.jsx)(Gs,{children:"Preparing the race. Please wait for all players to be ready."}),(0,Yt.jsx)(ml,{onClick:a,children:"Return to Lobby"})]})}})()})]})},yl=Ui`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,xl=Bi.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: #ff4757;
  color: white;
  padding: 16px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(255, 71, 87, 0.3);
  z-index: 1000;
  animation: ${yl} 0.3s ease;
  max-width: 400px;
  display: flex;
  align-items: center;
  gap: 12px;
`,wl=Bi.span`
  font-size: 20px;
  font-weight: bold;
`,kl=Bi.span`
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  flex: 1;
`,Sl=Bi.button`
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
`;const _l=function(e){let{message:t}=e;const{clearError:n}=Jt();return(0,r.useEffect)(()=>{const e=setTimeout(()=>{n()},5e3);return()=>clearTimeout(e)},[n]),t?(0,Yt.jsxs)(xl,{children:[(0,Yt.jsx)(wl,{children:"\u26a0"}),(0,Yt.jsx)(kl,{children:t}),(0,Yt.jsx)(Sl,{onClick:n,children:"\xd7"})]}):null},El=Ui`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,Cl=Ui`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
`,jl=Ui`
  0%, 100% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.5); }
  50% { box-shadow: 0 0 40px rgba(0, 212, 255, 0.8), 0 0 60px rgba(0, 212, 255, 0.3); }
`,Rl=Ui`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`,Tl=Ui`
  0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
  50% { opacity: 1; transform: scale(1) rotate(180deg); }
`,Ol=Bi.div`
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
`,Pl=Bi.div`
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
  ${$i`animation: ${Rl} 3s ease-in-out infinite;`}
  
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
    ${$i`animation: ${Tl} 4s ease-in-out infinite;`}
  }
`,zl=Bi.div`
  position: relative;
  width: 80px;
  height: 80px;
`,Nl=Bi.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border: 4px solid rgba(0, 212, 255, 0.1);
  border-top: 4px solid #00d4ff;
  border-radius: 50%;
  ${$i`animation: ${El} 1.5s linear infinite;`}
`,Ll=Bi.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 60px;
  height: 60px;
  border: 3px solid rgba(255, 215, 0, 0.1);
  border-right: 3px solid #ffd700;
  border-radius: 50%;
  ${$i`animation: ${El} 1s linear infinite reverse;`}
`,Al=Bi.div`
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
  ${$i`animation: ${jl} 2s ease-in-out infinite;`}
  
  &::after {
    content: '⚡';
    font-size: 20px;
    color: white;
    text-shadow: 0 0 10px white;
  }
`,Dl=Bi.div`
  color: white;
  font-family: 'Orbitron', monospace;
  font-size: 20px;
  font-weight: 700;
  ${$i`animation: ${Cl} 2s ease-in-out infinite;`}
  text-align: center;
  text-shadow: 
    0 0 10px #00d4ff,
    0 0 20px rgba(0, 212, 255, 0.5);
  position: relative;
  z-index: 2;
`,Il=Bi.div`
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Rajdhani', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  position: relative;
  z-index: 2;
`,$l=Bi.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
`,Fl=Bi.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #00d4ff;
  ${$i`animation: ${Cl} 1.5s ease-in-out infinite;`}
  animation-delay: ${e=>e.delay}s;
`,Ml=Bi.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,Bl=Bi.div`
  width: 24px;
  height: 24px;
  border: 2px solid rgba(0, 212, 255, 0.2);
  border-top: 2px solid #00d4ff;
  border-radius: 50%;
  ${$i`animation: ${El} 1s linear infinite;`}
`;const Ul=function(e){let{overlay:t=!1,text:n="Loading Havoc Speedway...",subtext:r="Preparing your racing experience",inline:i=!1}=e;if(i)return(0,Yt.jsx)(Ml,{children:(0,Yt.jsx)(Bl,{})});const a=(0,Yt.jsxs)(Pl,{children:[(0,Yt.jsxs)(zl,{children:[(0,Yt.jsx)(Nl,{}),(0,Yt.jsx)(Ll,{}),(0,Yt.jsx)(Al,{})]}),(0,Yt.jsxs)("div",{children:[(0,Yt.jsx)(Dl,{children:n}),r&&(0,Yt.jsx)(Il,{children:r}),(0,Yt.jsxs)($l,{children:[(0,Yt.jsx)(Fl,{delay:0}),(0,Yt.jsx)(Fl,{delay:.2}),(0,Yt.jsx)(Fl,{delay:.4})]})]})]});return t?(0,Yt.jsx)(Ol,{children:a}):a};const Hl=function(){const{currentView:e,loading:t,error:n,isConnected:r}=Jt();return r?(0,Yt.jsxs)("div",{className:"App",children:[n&&(0,Yt.jsx)(_l,{message:n}),t&&(0,Yt.jsx)(Ul,{overlay:!0}),(0,Yt.jsxs)(be,{children:[(0,Yt.jsx)(me,{path:"/",element:"welcome"===e?(0,Yt.jsx)(ta,{}):"lobby"===e?(0,Yt.jsx)(Ca,{}):"room"===e?(0,Yt.jsx)(ao,{}):"game"===e?(0,Yt.jsx)(bl,{}):(0,Yt.jsx)(ge,{to:"/",replace:!0})}),(0,Yt.jsx)(me,{path:"*",element:(0,Yt.jsx)(ge,{to:"/",replace:!0})})]})]}):(0,Yt.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",flexDirection:"column",gap:"20px"},children:[(0,Yt.jsx)(Ul,{}),(0,Yt.jsx)("p",{children:"Connecting to Havoc Speedway..."})]})};a.createRoot(document.getElementById("root")).render((0,Yt.jsx)(r.StrictMode,{children:(0,Yt.jsx)(we,{children:(0,Yt.jsx)(Xt,{children:(0,Yt.jsx)(Hl,{})})})}))})()})();
//# sourceMappingURL=main.11ffdf6e.js.map