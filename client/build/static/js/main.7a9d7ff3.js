/*! For license information please see main.7a9d7ff3.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var r=n(43),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:u,ref:c,props:o,_owner:s.current}}t.jsx=u,t.jsxs=u},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,_=Object.prototype.hasOwnProperty,k={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var i,o={},a=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)_.call(t,i)&&!S.hasOwnProperty(i)&&(o[i]=t[i]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===o[i]&&(o[i]=l[i]);return{$$typeof:n,type:e,key:a,ref:s,props:o,_owner:k.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function R(e,t,i,o,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return a=a(l=e),e=""===o?"."+T(l,0):o,w(a)?(i="",null!=e&&(i=e.replace(j,"$&/")+"/"),R(a,t,i,"",function(e){return e})):null!=a&&(C(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(j,"$&/")+"/")+e)),t.push(a)),1;if(l=0,o=""===o?".":o+":",w(e))for(var u=0;u<e.length;u++){var c=o+T(s=e[u],u);l+=R(s,t,i,c,a)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(s=e.next()).done;)l+=R(s=s.value,t,i,c=o+T(s,u++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function O(e,t,n){if(null==e)return e;var r=[],i=0;return R(e,r,"","",function(e){return t.call(n,e,i++)}),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},z={transition:null},A={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:z,ReactCurrentOwner:k};function L(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:O,forEach:function(e,t,n){O(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return O(e,function(){t++}),t},toArray:function(e){return O(e,function(e){return e})||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=i,t.Profiler=a,t.PureComponent=b,t.StrictMode=o,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.act=L,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=g({},e.props),o=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)_.call(t,u)&&!S.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];i.children=l}return{$$typeof:n,type:e.type,key:o,ref:a,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=z.transition;z.transition={};try{e()}finally{z.transition=t}},t.unstable_act=L,t.useCallback=function(e,t){return N.current.useCallback(e,t)},t.useContext=function(e){return N.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return N.current.useDeferredValue(e)},t.useEffect=function(e,t){return N.current.useEffect(e,t)},t.useId=function(){return N.current.useId()},t.useImperativeHandle=function(e,t,n){return N.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return N.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return N.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return N.current.useMemo(e,t)},t.useReducer=function(e,t,n){return N.current.useReducer(e,t,n)},t.useRef=function(e){return N.current.useRef(e)},t.useState=function(e){return N.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return N.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return N.current.useTransition()},t.version="18.3.1"},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<o(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,a=i>>>1;r<a;){var s=2*(r+1)-1,l=e[s],u=s+1,c=e[u];if(0>o(l,n))u<i&&0>o(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[s]=n,r=s);else{if(!(u<i&&0>o(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var u=[],c=[],d=1,f=null,p=3,h=!1,g=!1,m=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(c);null!==t;){if(null===t.callback)i(c);else{if(!(t.startTime<=e))break;i(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(m=!1,x(e),!g)if(null!==r(u))g=!0,z(_);else{var t=r(c);null!==t&&A(w,t.startTime-e)}}function _(e,n){g=!1,m&&(m=!1,y(C),C=-1),h=!0;var o=p;try{for(x(n),f=r(u);null!==f&&(!(f.expirationTime>n)||e&&!R());){var a=f.callback;if("function"===typeof a){f.callback=null,p=f.priorityLevel;var s=a(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof s?f.callback=s:f===r(u)&&i(u),x(n)}else i(u);f=r(u)}if(null!==f)var l=!0;else{var d=r(c);null!==d&&A(w,d.startTime-n),l=!1}return l}finally{f=null,p=o,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,S=!1,E=null,C=-1,j=5,T=-1;function R(){return!(t.unstable_now()-T<j)}function O(){if(null!==E){var e=t.unstable_now();T=e;var n=!0;try{n=E(!0,e)}finally{n?k():(S=!1,E=null)}}else S=!1}if("function"===typeof b)k=function(){b(O)};else if("undefined"!==typeof MessageChannel){var P=new MessageChannel,N=P.port2;P.port1.onmessage=O,k=function(){N.postMessage(null)}}else k=function(){v(O,0)};function z(e){E=e,S||(S=!0,k())}function A(e,n){C=v(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){g||h||(g=!0,z(_))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,i,o){var a=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?a+o:a:o=a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:o,expirationTime:s=o+s,sortIndex:-1},o>a?(e.sortIndex=o,n(c,e),null===r(u)&&e===r(c)&&(m?(y(C),C=-1):m=!0,A(w,o-a))):(e.sortIndex=s,n(u,e),g||h||(g=!0,z(_))),e},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var u=o[l];if(!s(u))return!1;var c=e[u],d=t[u];if(!1===(i=n?n.call(r,c,d,u):void 0)||void 0===i&&c!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var r=n(43),i=n(853);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function l(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(s[e]=t,e=0;e<t.length;e++)a.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function g(e,t,n,r,i,o,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var m={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){m[e]=new g(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];m[t]=new g(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){m[e]=new g(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){m[e]=new g(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){m[e]=new g(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){m[e]=new g(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){m[e]=new g(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){m[e]=new g(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){m[e]=new g(e,5,!1,e.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function b(e,t,n,r){var i=m.hasOwnProperty(t)?m[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(v,y);m[t]=new g(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(v,y);m[t]=new g(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(v,y);m[t]=new g(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){m[e]=new g(e,1,!1,e.toLowerCase(),null,!1,!1)}),m.xlinkHref=new g("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){m[e]=new g(e,1,!1,e.toLowerCase(),null,!0,!0)});var x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),_=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),j=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),N=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var z=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var A=Symbol.iterator;function L(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=A&&e[A]||e["@@iterator"])?e:null}var $,D=Object.assign;function M(e){if(void 0===$)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$=t&&t[1]||""}return"\n"+$+e}var I=!1;function F(e,t){if(!e||I)return"";I=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var i=u.stack.split("\n"),o=r.stack.split("\n"),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(1!==a||1!==s)do{if(a--,0>--s||i[a]!==o[s]){var l="\n"+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=a&&0<=s);break}}}finally{I=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?M(e):""}function U(e){switch(e.tag){case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return e=F(e.type,!1);case 11:return e=F(e.type.render,!1);case 1:return e=F(e.type,!0);default:return""}}function B(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case k:return"Fragment";case _:return"Portal";case E:return"Profiler";case S:return"StrictMode";case R:return"Suspense";case O:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case j:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case T:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case P:return null!==(t=e.displayName||null)?t:B(e.type)||"Memo";case N:t=e._payload,e=e._init;try{return B(e(t))}catch(n){}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return B(t);case 8:return t===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Y(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function q(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function K(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Q(e,t){var n=t.checked;return D({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function X(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=H(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function G(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function J(e,t){G(e,t);var n=H(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&K(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+H(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return D({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:H(n)}}function oe(e,t){var n=H(t.value),r=H(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return ce(e,t)})}:ce);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function ge(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function me(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=ge(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(pe).forEach(function(e){he.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]})});var ve=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var _e=null,ke=null,Se=null;function Ee(e){if(e=bi(e)){if("function"!==typeof _e)throw Error(o(280));var t=e.stateNode;t&&(t=wi(t),_e(e.stateNode,e.type,t))}}function Ce(e){ke?Se?Se.push(e):Se=[e]:ke=e}function je(){if(ke){var e=ke,t=Se;if(Se=ke=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function Te(e,t){return e(t)}function Re(){}var Oe=!1;function Pe(e,t,n){if(Oe)return e(t,n);Oe=!0;try{return Te(e,t,n)}finally{Oe=!1,(null!==ke||null!==Se)&&(Re(),je())}}function Ne(e,t){var n=e.stateNode;if(null===n)return null;var r=wi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var ze=!1;if(c)try{var Ae={};Object.defineProperty(Ae,"passive",{get:function(){ze=!0}}),window.addEventListener("test",Ae,Ae),window.removeEventListener("test",Ae,Ae)}catch(ce){ze=!1}function Le(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var $e=!1,De=null,Me=!1,Ie=null,Fe={onError:function(e){$e=!0,De=e}};function Ue(e,t,n,r,i,o,a,s,l){$e=!1,De=null,Le.apply(Fe,arguments)}function Be(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function We(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function He(e){if(Be(e)!==e)throw Error(o(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Be(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return He(i),e;if(a===r)return He(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=a;break}if(l===r){s=!0,r=i,n=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===n){s=!0,n=a,r=i;break}if(l===r){s=!0,r=a,n=i;break}l=l.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?Ye(e):null}function Ye(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ye(e);if(null!==t)return t;e=e.sibling}return null}var qe=i.unstable_scheduleCallback,Ke=i.unstable_cancelCallback,Qe=i.unstable_shouldYield,Xe=i.unstable_requestPaint,Ge=i.unstable_now,Je=i.unstable_getCurrentPriorityLevel,Ze=i.unstable_ImmediatePriority,et=i.unstable_UserBlockingPriority,tt=i.unstable_NormalPriority,nt=i.unstable_LowPriority,rt=i.unstable_IdlePriority,it=null,ot=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/lt|0)|0},st=Math.log,lt=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=268435455&n;if(0!==a){var s=a&~i;0!==s?r=dt(s):0!==(o&=a)&&(r=dt(o))}else 0!==(a=n&~i)?r=dt(a):0!==o&&(r=dt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(o=t&-t)||16===i&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-at(t)),r|=e[n],t&=~i;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function gt(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function mt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var bt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,_t,kt,St,Et,Ct=!1,jt=[],Tt=null,Rt=null,Ot=null,Pt=new Map,Nt=new Map,zt=[],At="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lt(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Pt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nt.delete(t.pointerId)}}function $t(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},null!==t&&(null!==(t=bi(t))&&_t(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Dt(e){var t=yi(e.target);if(null!==t){var n=Be(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=We(n)))return e.blockedOn=t,void Et(e.priority,function(){kt(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Mt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=bi(n))&&_t(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);xe=r,n.target.dispatchEvent(r),xe=null,t.shift()}return!0}function It(e,t,n){Mt(e)&&n.delete(t)}function Ft(){Ct=!1,null!==Tt&&Mt(Tt)&&(Tt=null),null!==Rt&&Mt(Rt)&&(Rt=null),null!==Ot&&Mt(Ot)&&(Ot=null),Pt.forEach(It),Nt.forEach(It)}function Ut(e,t){e.blockedOn===t&&(e.blockedOn=null,Ct||(Ct=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Ft)))}function Bt(e){function t(t){return Ut(t,e)}if(0<jt.length){Ut(jt[0],e);for(var n=1;n<jt.length;n++){var r=jt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Tt&&Ut(Tt,e),null!==Rt&&Ut(Rt,e),null!==Ot&&Ut(Ot,e),Pt.forEach(t),Nt.forEach(t),n=0;n<zt.length;n++)(r=zt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&null===(n=zt[0]).blockedOn;)Dt(n),null===n.blockedOn&&zt.shift()}var Wt=x.ReactCurrentBatchConfig,Ht=!0;function Vt(e,t,n,r){var i=bt,o=Wt.transition;Wt.transition=null;try{bt=1,qt(e,t,n,r)}finally{bt=i,Wt.transition=o}}function Yt(e,t,n,r){var i=bt,o=Wt.transition;Wt.transition=null;try{bt=4,qt(e,t,n,r)}finally{bt=i,Wt.transition=o}}function qt(e,t,n,r){if(Ht){var i=Qt(e,t,n,r);if(null===i)Hr(e,t,r,Kt,n),Lt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Tt=$t(Tt,e,t,n,r,i),!0;case"dragenter":return Rt=$t(Rt,e,t,n,r,i),!0;case"mouseover":return Ot=$t(Ot,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Pt.set(o,$t(Pt.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Nt.set(o,$t(Nt.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Lt(e,r),4&t&&-1<At.indexOf(e)){for(;null!==i;){var o=bi(i);if(null!==o&&wt(o),null===(o=Qt(e,t,n,r))&&Hr(e,t,r,Kt,n),o===i)break;i=o}null!==i&&r.stopPropagation()}else Hr(e,t,r,null,n)}}var Kt=null;function Qt(e,t,n,r){if(Kt=null,null!==(e=yi(e=we(r))))if(null===(t=Be(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=We(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kt=e,null}function Xt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Gt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,r=n.length,i="value"in Gt?Gt.value:Gt.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[o-t];t++);return Zt=i.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,i,o){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,sn,ln,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=on(un),dn=D({},un,{view:0,detail:0}),fn=on(dn),pn=D({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:En,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ln&&(ln&&"mousemove"===e.type?(an=e.screenX-ln.screenX,sn=e.screenY-ln.screenY):sn=an=0,ln=e),an)},movementY:function(e){return"movementY"in e?e.movementY:sn}}),hn=on(pn),gn=on(D({},pn,{dataTransfer:0})),mn=on(D({},dn,{relatedTarget:0})),vn=on(D({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=D({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bn=on(yn),xn=on(D({},un,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_n={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kn[e])&&!!t[e]}function En(){return Sn}var Cn=D({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?_n[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:En,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),jn=on(Cn),Tn=on(D({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Rn=on(D({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:En})),On=on(D({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),Pn=D({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nn=on(Pn),zn=[9,13,27,32],An=c&&"CompositionEvent"in window,Ln=null;c&&"documentMode"in document&&(Ln=document.documentMode);var $n=c&&"TextEvent"in window&&!Ln,Dn=c&&(!An||Ln&&8<Ln&&11>=Ln),Mn=String.fromCharCode(32),In=!1;function Fn(e,t){switch(e){case"keyup":return-1!==zn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Un(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Bn=!1;var Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wn[e.type]:"textarea"===t}function Vn(e,t,n,r){Ce(r),0<(t=Yr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yn=null,qn=null;function Kn(e){Mr(e,0)}function Qn(e){if(q(xi(e)))return e}function Xn(e,t){if("change"===e)return t}var Gn=!1;if(c){var Jn;if(c){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Jn=Zn}else Jn=!1;Gn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){Yn&&(Yn.detachEvent("onpropertychange",nr),qn=Yn=null)}function nr(e){if("value"===e.propertyName&&Qn(qn)){var t=[];Vn(t,qn,e,we(e)),Pe(Kn,t)}}function rr(e,t,n){"focusin"===e?(tr(),qn=n,(Yn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ir(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Qn(qn)}function or(e,t){if("click"===e)return Qn(t)}function ar(e,t){if("input"===e||"change"===e)return Qn(t)}var sr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function lr(e,t){if(sr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!d.call(t,i)||!sr(e[i],t[i]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=K();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=K((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=void 0===r.end?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=cr(n,o);var a=cr(n,r);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gr=c&&"documentMode"in document&&11>=document.documentMode,mr=null,vr=null,yr=null,br=!1;function xr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;br||null==mr||mr!==K(r)||("selectionStart"in(r=mr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&lr(yr,r)||(yr=r,0<(r=Yr(vr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _r={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},kr={},Sr={};function Er(e){if(kr[e])return kr[e];if(!_r[e])return e;var t,n=_r[e];for(t in n)if(n.hasOwnProperty(t)&&t in Sr)return kr[e]=n[t];return e}c&&(Sr=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);var Cr=Er("animationend"),jr=Er("animationiteration"),Tr=Er("animationstart"),Rr=Er("transitionend"),Or=new Map,Pr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(e,t){Or.set(e,t),l(t,[e])}for(var zr=0;zr<Pr.length;zr++){var Ar=Pr[zr];Nr(Ar.toLowerCase(),"on"+(Ar[0].toUpperCase()+Ar.slice(1)))}Nr(Cr,"onAnimationEnd"),Nr(jr,"onAnimationIteration"),Nr(Tr,"onAnimationStart"),Nr("dblclick","onDoubleClick"),Nr("focusin","onFocus"),Nr("focusout","onBlur"),Nr(Rr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$r=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function Dr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,a,s,l,u){if(Ue.apply(this,arguments),$e){if(!$e)throw Error(o(198));var c=De;$e=!1,De=null,Me||(Me=!0,Ie=c)}}(r,t,void 0,e),e.currentTarget=null}function Mr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Dr(i,s,u),o=l}else for(a=0;a<r.length;a++){if(l=(s=r[a]).instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Dr(i,s,u),o=l}}}if(Me)throw e=Ie,Me=!1,Ie=null,e}function Ir(e,t){var n=t[gi];void 0===n&&(n=t[gi]=new Set);var r=e+"__bubble";n.has(r)||(Wr(t,e,2,!1),n.add(r))}function Fr(e,t,n){var r=0;t&&(r|=4),Wr(n,e,r,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[Ur]){e[Ur]=!0,a.forEach(function(t){"selectionchange"!==t&&($r.has(t)||Fr(t,!1,e),Fr(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ur]||(t[Ur]=!0,Fr("selectionchange",!1,t))}}function Wr(e,t,n,r){switch(Xt(t)){case 1:var i=Vt;break;case 4:i=Yt;break;default:i=qt}n=i.bind(null,t,n,e),i=void 0,!ze||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Hr(e,t,n,r,i){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;a=a.return}for(;null!==s;){if(null===(a=yi(s)))return;if(5===(l=a.tag)||6===l){r=o=a;continue e}s=s.parentNode}}r=r.return}Pe(function(){var r=o,i=we(n),a=[];e:{var s=Or.get(e);if(void 0!==s){var l=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":l=jn;break;case"focusin":u="focus",l=mn;break;case"focusout":u="blur",l=mn;break;case"beforeblur":case"afterblur":l=mn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=gn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Rn;break;case Cr:case jr:case Tr:l=vn;break;case Rr:l=On;break;case"scroll":l=fn;break;case"wheel":l=Nn;break;case"copy":case"cut":case"paste":l=bn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Tn}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==s?s+"Capture":null:s;c=[];for(var p,h=r;null!==h;){var g=(p=h).stateNode;if(5===p.tag&&null!==g&&(p=g,null!==f&&(null!=(g=Ne(h,f))&&c.push(Vr(h,g,p)))),d)break;h=h.return}0<c.length&&(s=new l(s,u,null,n,i),a.push({event:s,listeners:c}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===xe||!(u=n.relatedTarget||n.fromElement)||!yi(u)&&!u[hi])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?yi(u):null)&&(u!==(d=Be(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=hn,g="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=Tn,g="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==l?s:xi(l),p=null==u?s:xi(u),(s=new c(g,h+"leave",l,n,i)).target=d,s.relatedTarget=p,g=null,yi(i)===r&&((c=new c(f,h+"enter",u,n,i)).target=p,c.relatedTarget=d,g=c),d=g,l&&u)e:{for(f=u,h=0,p=c=l;p;p=qr(p))h++;for(p=0,g=f;g;g=qr(g))p++;for(;0<h-p;)c=qr(c),h--;for(;0<p-h;)f=qr(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break e;c=qr(c),f=qr(f)}c=null}else c=null;null!==l&&Kr(a,s,l,c,!1),null!==u&&null!==d&&Kr(a,d,u,c,!0)}if("select"===(l=(s=r?xi(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var m=Xn;else if(Hn(s))if(Gn)m=ar;else{m=ir;var v=rr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(m=or);switch(m&&(m=m(e,r))?Vn(a,m,n,i):(v&&v(e,s,r),"focusout"===e&&(v=s._wrapperState)&&v.controlled&&"number"===s.type&&ee(s,"number",s.value)),v=r?xi(r):window,e){case"focusin":(Hn(v)||"true"===v.contentEditable)&&(mr=v,vr=r,yr=null);break;case"focusout":yr=vr=mr=null;break;case"mousedown":br=!0;break;case"contextmenu":case"mouseup":case"dragend":br=!1,xr(a,n,i);break;case"selectionchange":if(gr)break;case"keydown":case"keyup":xr(a,n,i)}var y;if(An)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Bn?Fn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Dn&&"ko"!==n.locale&&(Bn||"onCompositionStart"!==b?"onCompositionEnd"===b&&Bn&&(y=en()):(Jt="value"in(Gt=i)?Gt.value:Gt.textContent,Bn=!0)),0<(v=Yr(r,b)).length&&(b=new xn(b,e,null,n,i),a.push({event:b,listeners:v}),y?b.data=y:null!==(y=Un(n))&&(b.data=y))),(y=$n?function(e,t){switch(e){case"compositionend":return Un(t);case"keypress":return 32!==t.which?null:(In=!0,Mn);case"textInput":return(e=t.data)===Mn&&In?null:e;default:return null}}(e,n):function(e,t){if(Bn)return"compositionend"===e||!An&&Fn(e,t)?(e=en(),Zt=Jt=Gt=null,Bn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Yr(r,"onBeforeInput")).length&&(i=new xn("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=y))}Mr(a,t)})}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;5===i.tag&&null!==o&&(i=o,null!=(o=Ne(e,n))&&r.unshift(Vr(e,o,i)),null!=(o=Ne(e,t))&&r.push(Vr(e,o,i))),e=e.return}return r}function qr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Kr(e,t,n,r,i){for(var o=t._reactName,a=[];null!==n&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==u&&(s=u,i?null!=(l=Ne(n,o))&&a.unshift(Vr(n,l,s)):i||null!=(l=Ne(n,o))&&a.push(Vr(n,l,s))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Qr=/\r\n?/g,Xr=/\u0000|\uFFFD/g;function Gr(e){return("string"===typeof e?e:""+e).replace(Qr,"\n").replace(Xr,"")}function Jr(e,t,n){if(t=Gr(t),Gr(e)!==t&&n)throw Error(o(425))}function Zr(){}var ei=null,ti=null;function ni(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ri="function"===typeof setTimeout?setTimeout:void 0,ii="function"===typeof clearTimeout?clearTimeout:void 0,oi="function"===typeof Promise?Promise:void 0,ai="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oi?function(e){return oi.resolve(null).then(e).catch(si)}:ri;function si(e){setTimeout(function(){throw e})}function li(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Bt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Bt(t)}function ui(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ci(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),fi="__reactFiber$"+di,pi="__reactProps$"+di,hi="__reactContainer$"+di,gi="__reactEvents$"+di,mi="__reactListeners$"+di,vi="__reactHandles$"+di;function yi(e){var t=e[fi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[hi]||n[fi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ci(e);null!==e;){if(n=e[fi])return n;e=ci(e)}return t}n=(e=n).parentNode}return null}function bi(e){return!(e=e[fi]||e[hi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function xi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function wi(e){return e[pi]||null}var _i=[],ki=-1;function Si(e){return{current:e}}function Ei(e){0>ki||(e.current=_i[ki],_i[ki]=null,ki--)}function Ci(e,t){ki++,_i[ki]=e.current,e.current=t}var ji={},Ti=Si(ji),Ri=Si(!1),Oi=ji;function Pi(e,t){var n=e.type.contextTypes;if(!n)return ji;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ni(e){return null!==(e=e.childContextTypes)&&void 0!==e}function zi(){Ei(Ri),Ei(Ti)}function Ai(e,t,n){if(Ti.current!==ji)throw Error(o(168));Ci(Ti,t),Ci(Ri,n)}function Li(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(o(108,W(e)||"Unknown",i));return D({},n,r)}function $i(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ji,Oi=Ti.current,Ci(Ti,e),Ci(Ri,Ri.current),!0}function Di(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Li(e,t,Oi),r.__reactInternalMemoizedMergedChildContext=e,Ei(Ri),Ei(Ti),Ci(Ti,e)):Ei(Ri),Ci(Ri,n)}var Mi=null,Ii=!1,Fi=!1;function Ui(e){null===Mi?Mi=[e]:Mi.push(e)}function Bi(){if(!Fi&&null!==Mi){Fi=!0;var e=0,t=bt;try{var n=Mi;for(bt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Mi=null,Ii=!1}catch(i){throw null!==Mi&&(Mi=Mi.slice(e+1)),qe(Ze,Bi),i}finally{bt=t,Fi=!1}}return null}var Wi=[],Hi=0,Vi=null,Yi=0,qi=[],Ki=0,Qi=null,Xi=1,Gi="";function Ji(e,t){Wi[Hi++]=Yi,Wi[Hi++]=Vi,Vi=e,Yi=t}function Zi(e,t,n){qi[Ki++]=Xi,qi[Ki++]=Gi,qi[Ki++]=Qi,Qi=e;var r=Xi;e=Gi;var i=32-at(r)-1;r&=~(1<<i),n+=1;var o=32-at(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Xi=1<<32-at(t)+i|n<<i|r,Gi=o+e}else Xi=1<<o|n<<i|r,Gi=e}function eo(e){null!==e.return&&(Ji(e,1),Zi(e,1,0))}function to(e){for(;e===Vi;)Vi=Wi[--Hi],Wi[Hi]=null,Yi=Wi[--Hi],Wi[Hi]=null;for(;e===Qi;)Qi=qi[--Ki],qi[Ki]=null,Gi=qi[--Ki],qi[Ki]=null,Xi=qi[--Ki],qi[Ki]=null}var no=null,ro=null,io=!1,oo=null;function ao(e,t){var n=Pu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function so(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=ui(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Qi?{id:Xi,overflow:Gi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Pu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function lo(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function uo(e){if(io){var t=ro;if(t){var n=t;if(!so(e,t)){if(lo(e))throw Error(o(418));t=ui(n.nextSibling);var r=no;t&&so(e,t)?ao(r,n):(e.flags=-4097&e.flags|2,io=!1,no=e)}}else{if(lo(e))throw Error(o(418));e.flags=-4097&e.flags|2,io=!1,no=e}}}function co(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function fo(e){if(e!==no)return!1;if(!io)return co(e),io=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ni(e.type,e.memoizedProps)),t&&(t=ro)){if(lo(e))throw po(),Error(o(418));for(;t;)ao(e,t),t=ui(t.nextSibling)}if(co(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=ui(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?ui(e.stateNode.nextSibling):null;return!0}function po(){for(var e=ro;e;)e=ui(e.nextSibling)}function ho(){ro=no=null,io=!1}function go(e){null===oo?oo=[e]:oo.push(e)}var mo=x.ReactCurrentBatchConfig;function vo(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var i=r,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=i.refs;null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bo(e){return(0,e._init)(e._payload)}function xo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=zu(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Du(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function u(e,t,n,r){var o=n.type;return o===k?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===N&&bo(o)===t.type)?((r=i(t,n.props)).ref=vo(e,t,n),r.return=e,r):((r=Au(n.type,n.key,n.props,null,e.mode,r)).ref=vo(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Mu(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Lu(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Du(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Au(t.type,t.key,t.props,null,e.mode,n)).ref=vo(e,null,t),n.return=e,n;case _:return(t=Mu(t,e.mode,n)).return=e,t;case N:return f(e,(0,t._init)(t._payload),n)}if(te(t)||L(t))return(t=Lu(t,e.mode,n,null)).return=e,t;yo(e,t)}return null}function p(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===i?u(e,t,n,r):null;case _:return n.key===i?c(e,t,n,r):null;case N:return p(e,t,(i=n._init)(n._payload),r)}if(te(n)||L(n))return null!==i?null:d(e,t,n,r,null);yo(e,n)}return null}function h(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case _:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case N:return h(e,t,n,(0,r._init)(r._payload),i)}if(te(r)||L(r))return d(t,e=e.get(n)||null,r,i,null);yo(t,r)}return null}function g(i,o,s,l){for(var u=null,c=null,d=o,g=o=0,m=null;null!==d&&g<s.length;g++){d.index>g?(m=d,d=null):m=d.sibling;var v=p(i,d,s[g],l);if(null===v){null===d&&(d=m);break}e&&d&&null===v.alternate&&t(i,d),o=a(v,o,g),null===c?u=v:c.sibling=v,c=v,d=m}if(g===s.length)return n(i,d),io&&Ji(i,g),u;if(null===d){for(;g<s.length;g++)null!==(d=f(i,s[g],l))&&(o=a(d,o,g),null===c?u=d:c.sibling=d,c=d);return io&&Ji(i,g),u}for(d=r(i,d);g<s.length;g++)null!==(m=h(d,i,g,s[g],l))&&(e&&null!==m.alternate&&d.delete(null===m.key?g:m.key),o=a(m,o,g),null===c?u=m:c.sibling=m,c=m);return e&&d.forEach(function(e){return t(i,e)}),io&&Ji(i,g),u}function m(i,s,l,u){var c=L(l);if("function"!==typeof c)throw Error(o(150));if(null==(l=c.call(l)))throw Error(o(151));for(var d=c=null,g=s,m=s=0,v=null,y=l.next();null!==g&&!y.done;m++,y=l.next()){g.index>m?(v=g,g=null):v=g.sibling;var b=p(i,g,y.value,u);if(null===b){null===g&&(g=v);break}e&&g&&null===b.alternate&&t(i,g),s=a(b,s,m),null===d?c=b:d.sibling=b,d=b,g=v}if(y.done)return n(i,g),io&&Ji(i,m),c;if(null===g){for(;!y.done;m++,y=l.next())null!==(y=f(i,y.value,u))&&(s=a(y,s,m),null===d?c=y:d.sibling=y,d=y);return io&&Ji(i,m),c}for(g=r(i,g);!y.done;m++,y=l.next())null!==(y=h(g,i,m,y.value,u))&&(e&&null!==y.alternate&&g.delete(null===y.key?m:y.key),s=a(y,s,m),null===d?c=y:d.sibling=y,d=y);return e&&g.forEach(function(e){return t(i,e)}),io&&Ji(i,m),c}return function e(r,o,a,l){if("object"===typeof a&&null!==a&&a.type===k&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case w:e:{for(var u=a.key,c=o;null!==c;){if(c.key===u){if((u=a.type)===k){if(7===c.tag){n(r,c.sibling),(o=i(c,a.props.children)).return=r,r=o;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===N&&bo(u)===c.type){n(r,c.sibling),(o=i(c,a.props)).ref=vo(r,c,a),o.return=r,r=o;break e}n(r,c);break}t(r,c),c=c.sibling}a.type===k?((o=Lu(a.props.children,r.mode,l,a.key)).return=r,r=o):((l=Au(a.type,a.key,a.props,null,r.mode,l)).ref=vo(r,o,a),l.return=r,r=l)}return s(r);case _:e:{for(c=a.key;null!==o;){if(o.key===c){if(4===o.tag&&o.stateNode.containerInfo===a.containerInfo&&o.stateNode.implementation===a.implementation){n(r,o.sibling),(o=i(o,a.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Mu(a,r.mode,l)).return=r,r=o}return s(r);case N:return e(r,o,(c=a._init)(a._payload),l)}if(te(a))return g(r,o,a,l);if(L(a))return m(r,o,a,l);yo(r,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==o&&6===o.tag?(n(r,o.sibling),(o=i(o,a)).return=r,r=o):(n(r,o),(o=Du(a,r.mode,l)).return=r,r=o),s(r)):n(r,o)}}var wo=xo(!0),_o=xo(!1),ko=Si(null),So=null,Eo=null,Co=null;function jo(){Co=Eo=So=null}function To(e){var t=ko.current;Ei(ko),e._currentValue=t}function Ro(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Oo(e,t){So=e,Co=Eo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(bs=!0),e.firstContext=null)}function Po(e){var t=e._currentValue;if(Co!==e)if(e={context:e,memoizedValue:t,next:null},null===Eo){if(null===So)throw Error(o(308));Eo=e,So.dependencies={lanes:0,firstContext:e}}else Eo=Eo.next=e;return t}var No=null;function zo(e){null===No?No=[e]:No.push(e)}function Ao(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,zo(t)):(n.next=i.next,i.next=n),t.interleaved=n,Lo(e,r)}function Lo(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var $o=!1;function Do(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Io(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Tl)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Lo(e,n)}return null===(i=r.interleaved)?(t.next=t,zo(r)):(t.next=i.next,i.next=t),r.interleaved=t,Lo(e,n)}function Uo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Bo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?i=o=a:o=o.next=a,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wo(e,t,n,r){var i=e.updateQueue;$o=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,u=l.next;l.next=null,null===a?o=u:a.next=u,a=l;var c=e.alternate;null!==c&&((s=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===s?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(null!==o){var d=i.baseState;for(a=0,c=u=l=null,s=o;;){var f=s.lane,p=s.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,g=s;switch(f=t,p=n,g.tag){case 1:if("function"===typeof(h=g.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=g.payload)?h.call(p,d,f):h)||void 0===f)break e;d=D({},d,f);break e;case 2:$o=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(f=i.effects)?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===c?(u=c=p,l=d):c=c.next=p,a|=f;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(f=s).next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}if(null===c&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do{a|=i.lane,i=i.next}while(i!==t)}else null===o&&(i.shared.lanes=0);$l|=a,e.lanes=a,e.memoizedState=d}}function Ho(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!==typeof i)throw Error(o(191,i));i.call(r)}}}var Vo={},Yo=Si(Vo),qo=Si(Vo),Ko=Si(Vo);function Qo(e){if(e===Vo)throw Error(o(174));return e}function Xo(e,t){switch(Ci(Ko,t),Ci(qo,e),Ci(Yo,Vo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ei(Yo),Ci(Yo,t)}function Go(){Ei(Yo),Ei(qo),Ei(Ko)}function Jo(e){Qo(Ko.current);var t=Qo(Yo.current),n=le(t,e.type);t!==n&&(Ci(qo,e),Ci(Yo,n))}function Zo(e){qo.current===e&&(Ei(Yo),Ei(qo))}var ea=Si(0);function ta(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=[];function ra(){for(var e=0;e<na.length;e++)na[e]._workInProgressVersionPrimary=null;na.length=0}var ia=x.ReactCurrentDispatcher,oa=x.ReactCurrentBatchConfig,aa=0,sa=null,la=null,ua=null,ca=!1,da=!1,fa=0,pa=0;function ha(){throw Error(o(321))}function ga(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sr(e[n],t[n]))return!1;return!0}function ma(e,t,n,r,i,a){if(aa=a,sa=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ia.current=null===e||null===e.memoizedState?Za:es,e=n(r,i),da){a=0;do{if(da=!1,fa=0,25<=a)throw Error(o(301));a+=1,ua=la=null,t.updateQueue=null,ia.current=ts,e=n(r,i)}while(da)}if(ia.current=Ja,t=null!==la&&null!==la.next,aa=0,ua=la=sa=null,ca=!1,t)throw Error(o(300));return e}function va(){var e=0!==fa;return fa=0,e}function ya(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ua?sa.memoizedState=ua=e:ua=ua.next=e,ua}function ba(){if(null===la){var e=sa.alternate;e=null!==e?e.memoizedState:null}else e=la.next;var t=null===ua?sa.memoizedState:ua.next;if(null!==t)ua=t,la=e;else{if(null===e)throw Error(o(310));e={memoizedState:(la=e).memoizedState,baseState:la.baseState,baseQueue:la.baseQueue,queue:la.queue,next:null},null===ua?sa.memoizedState=ua=e:ua=ua.next=e}return ua}function xa(e,t){return"function"===typeof t?t(e):t}function wa(e){var t=ba(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=la,i=r.baseQueue,a=n.pending;if(null!==a){if(null!==i){var s=i.next;i.next=a.next,a.next=s}r.baseQueue=i=a,n.pending=null}if(null!==i){a=i.next,r=r.baseState;var l=s=null,u=null,c=a;do{var d=c.lane;if((aa&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(l=u=f,s=r):u=u.next=f,sa.lanes|=d,$l|=d}c=c.next}while(null!==c&&c!==a);null===u?s=r:u.next=l,sr(r,t.memoizedState)||(bs=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{a=i.lane,sa.lanes|=a,$l|=a,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function _a(e){var t=ba(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{a=e(a,s.action),s=s.next}while(s!==i);sr(a,t.memoizedState)||(bs=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function ka(){}function Sa(e,t){var n=sa,r=ba(),i=t(),a=!sr(r.memoizedState,i);if(a&&(r.memoizedState=i,bs=!0),r=r.queue,$a(ja.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==ua&&1&ua.memoizedState.tag){if(n.flags|=2048,Pa(9,Ca.bind(null,n,r,i,t),void 0,null),null===Rl)throw Error(o(349));0!==(30&aa)||Ea(n,t,i)}return i}function Ea(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ca(e,t,n,r){t.value=n,t.getSnapshot=r,Ta(t)&&Ra(e)}function ja(e,t,n){return n(function(){Ta(t)&&Ra(e)})}function Ta(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sr(e,n)}catch(r){return!0}}function Ra(e){var t=Lo(e,1);null!==t&&nu(t,e,1,-1)}function Oa(e){var t=ya();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:e},t.queue=e,e=e.dispatch=Ka.bind(null,sa,e),[t.memoizedState,e]}function Pa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Na(){return ba().memoizedState}function za(e,t,n,r){var i=ya();sa.flags|=e,i.memoizedState=Pa(1|t,n,void 0,void 0===r?null:r)}function Aa(e,t,n,r){var i=ba();r=void 0===r?null:r;var o=void 0;if(null!==la){var a=la.memoizedState;if(o=a.destroy,null!==r&&ga(r,a.deps))return void(i.memoizedState=Pa(t,n,o,r))}sa.flags|=e,i.memoizedState=Pa(1|t,n,o,r)}function La(e,t){return za(8390656,8,e,t)}function $a(e,t){return Aa(2048,8,e,t)}function Da(e,t){return Aa(4,2,e,t)}function Ma(e,t){return Aa(4,4,e,t)}function Ia(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Fa(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Aa(4,4,Ia.bind(null,t,e),n)}function Ua(){}function Ba(e,t){var n=ba();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ga(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wa(e,t){var n=ba();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ga(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ha(e,t,n){return 0===(21&aa)?(e.baseState&&(e.baseState=!1,bs=!0),e.memoizedState=n):(sr(n,t)||(n=gt(),sa.lanes|=n,$l|=n,e.baseState=!0),t)}function Va(e,t){var n=bt;bt=0!==n&&4>n?n:4,e(!0);var r=oa.transition;oa.transition={};try{e(!1),t()}finally{bt=n,oa.transition=r}}function Ya(){return ba().memoizedState}function qa(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qa(e))Xa(t,n);else if(null!==(n=Ao(e,t,n,r))){nu(n,e,r,eu()),Ga(n,t,r)}}function Ka(e,t,n){var r=tu(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qa(e))Xa(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,sr(s,a)){var l=t.interleaved;return null===l?(i.next=i,zo(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(u){}null!==(n=Ao(e,t,i,r))&&(nu(n,e,r,i=eu()),Ga(n,t,r))}}function Qa(e){var t=e.alternate;return e===sa||null!==t&&t===sa}function Xa(e,t){da=ca=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ga(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var Ja={readContext:Po,useCallback:ha,useContext:ha,useEffect:ha,useImperativeHandle:ha,useInsertionEffect:ha,useLayoutEffect:ha,useMemo:ha,useReducer:ha,useRef:ha,useState:ha,useDebugValue:ha,useDeferredValue:ha,useTransition:ha,useMutableSource:ha,useSyncExternalStore:ha,useId:ha,unstable_isNewReconciler:!1},Za={readContext:Po,useCallback:function(e,t){return ya().memoizedState=[e,void 0===t?null:t],e},useContext:Po,useEffect:La,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,za(4194308,4,Ia.bind(null,t,e),n)},useLayoutEffect:function(e,t){return za(4194308,4,e,t)},useInsertionEffect:function(e,t){return za(4,2,e,t)},useMemo:function(e,t){var n=ya();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ya();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qa.bind(null,sa,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},ya().memoizedState=e},useState:Oa,useDebugValue:Ua,useDeferredValue:function(e){return ya().memoizedState=e},useTransition:function(){var e=Oa(!1),t=e[0];return e=Va.bind(null,e[1]),ya().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=sa,i=ya();if(io){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===Rl)throw Error(o(349));0!==(30&aa)||Ea(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,La(ja.bind(null,r,a,e),[e]),r.flags|=2048,Pa(9,Ca.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=ya(),t=Rl.identifierPrefix;if(io){var n=Gi;t=":"+t+"R"+(n=(Xi&~(1<<32-at(Xi)-1)).toString(32)+n),0<(n=fa++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=pa++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},es={readContext:Po,useCallback:Ba,useContext:Po,useEffect:$a,useImperativeHandle:Fa,useInsertionEffect:Da,useLayoutEffect:Ma,useMemo:Wa,useReducer:wa,useRef:Na,useState:function(){return wa(xa)},useDebugValue:Ua,useDeferredValue:function(e){return Ha(ba(),la.memoizedState,e)},useTransition:function(){return[wa(xa)[0],ba().memoizedState]},useMutableSource:ka,useSyncExternalStore:Sa,useId:Ya,unstable_isNewReconciler:!1},ts={readContext:Po,useCallback:Ba,useContext:Po,useEffect:$a,useImperativeHandle:Fa,useInsertionEffect:Da,useLayoutEffect:Ma,useMemo:Wa,useReducer:_a,useRef:Na,useState:function(){return _a(xa)},useDebugValue:Ua,useDeferredValue:function(e){var t=ba();return null===la?t.memoizedState=e:Ha(t,la.memoizedState,e)},useTransition:function(){return[_a(xa)[0],ba().memoizedState]},useMutableSource:ka,useSyncExternalStore:Sa,useId:Ya,unstable_isNewReconciler:!1};function ns(e,t){if(e&&e.defaultProps){for(var n in t=D({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:D({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var is={isMounted:function(e){return!!(e=e._reactInternals)&&Be(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),i=tu(e),o=Io(r,i);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Fo(e,o,i))&&(nu(t,e,i,r),Uo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),i=tu(e),o=Io(r,i);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Fo(e,o,i))&&(nu(t,e,i,r),Uo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),i=Io(n,r);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=Fo(e,i,r))&&(nu(t,e,r,n),Uo(t,e,r))}};function os(e,t,n,r,i,o,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,a):!t.prototype||!t.prototype.isPureReactComponent||(!lr(n,r)||!lr(i,o))}function as(e,t,n){var r=!1,i=ji,o=t.contextType;return"object"===typeof o&&null!==o?o=Po(o):(i=Ni(t)?Oi:Ti.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?Pi(e,i):ji),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=is,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ss(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&is.enqueueReplaceState(t,t.state,null)}function ls(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Do(e);var o=t.contextType;"object"===typeof o&&null!==o?i.context=Po(o):(o=Ni(t)?Oi:Ti.current,i.context=Pi(e,o)),i.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(rs(e,t,o,n),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&is.enqueueReplaceState(i,i.state,null),Wo(e,n,i,r),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function us(e,t){try{var n="",r=t;do{n+=U(r),r=r.return}while(r);var i=n}catch(o){i="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:i,digest:null}}function cs(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ds(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fs="function"===typeof WeakMap?WeakMap:Map;function ps(e,t,n){(n=Io(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hl||(Hl=!0,Vl=r),ds(0,t)},n}function hs(e,t,n){(n=Io(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ds(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){ds(0,t),"function"!==typeof r&&(null===Yl?Yl=new Set([this]):Yl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function gs(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fs;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Eu.bind(null,e,t,n),t.then(e,e))}function ms(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vs(e,t,n,r,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Io(-1,1)).tag=2,Fo(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var ys=x.ReactCurrentOwner,bs=!1;function xs(e,t,n,r){t.child=null===e?_o(t,null,n,r):wo(t,e.child,n,r)}function ws(e,t,n,r,i){n=n.render;var o=t.ref;return Oo(t,i),r=ma(e,t,n,r,o,i),n=va(),null===e||bs?(io&&n&&eo(t),t.flags|=1,xs(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hs(e,t,i))}function _s(e,t,n,r,i){if(null===e){var o=n.type;return"function"!==typeof o||Nu(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Au(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,ks(e,t,o,r,i))}if(o=e.child,0===(e.lanes&i)){var a=o.memoizedProps;if((n=null!==(n=n.compare)?n:lr)(a,r)&&e.ref===t.ref)return Hs(e,t,i)}return t.flags|=1,(e=zu(o,r)).ref=t.ref,e.return=t,t.child=e}function ks(e,t,n,r,i){if(null!==e){var o=e.memoizedProps;if(lr(o,r)&&e.ref===t.ref){if(bs=!1,t.pendingProps=r=o,0===(e.lanes&i))return t.lanes=e.lanes,Hs(e,t,i);0!==(131072&e.flags)&&(bs=!0)}}return Cs(e,t,n,r,i)}function Ss(e,t,n){var r=t.pendingProps,i=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ci(zl,Nl),Nl|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ci(zl,Nl),Nl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Ci(zl,Nl),Nl|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ci(zl,Nl),Nl|=r;return xs(e,t,i,n),t.child}function Es(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cs(e,t,n,r,i){var o=Ni(n)?Oi:Ti.current;return o=Pi(t,o),Oo(t,i),n=ma(e,t,n,r,o,i),r=va(),null===e||bs?(io&&r&&eo(t),t.flags|=1,xs(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hs(e,t,i))}function js(e,t,n,r,i){if(Ni(n)){var o=!0;$i(t)}else o=!1;if(Oo(t,i),null===t.stateNode)Ws(e,t),as(t,n,r),ls(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;"object"===typeof u&&null!==u?u=Po(u):u=Pi(t,u=Ni(n)?Oi:Ti.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof a.getSnapshotBeforeUpdate;d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==r||l!==u)&&ss(t,a,r,u),$o=!1;var f=t.memoizedState;a.state=f,Wo(t,r,a,i),l=t.memoizedState,s!==r||f!==l||Ri.current||$o?("function"===typeof c&&(rs(t,n,c,r),l=t.memoizedState),(s=$o||os(t,n,s,r,f,l,u))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Mo(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:ns(t.type,s),a.props=u,d=t.pendingProps,f=a.context,"object"===typeof(l=n.contextType)&&null!==l?l=Po(l):l=Pi(t,l=Ni(n)?Oi:Ti.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==d||f!==l)&&ss(t,a,r,l),$o=!1,f=t.memoizedState,a.state=f,Wo(t,r,a,i);var h=t.memoizedState;s!==d||f!==h||Ri.current||$o?("function"===typeof p&&(rs(t,n,p,r),h=t.memoizedState),(u=$o||os(t,n,u,r,f,h,l)||!1)?(c||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=l,r=u):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Ts(e,t,n,r,o,i)}function Ts(e,t,n,r,i,o){Es(e,t);var a=0!==(128&t.flags);if(!r&&!a)return i&&Di(t,n,!1),Hs(e,t,o);r=t.stateNode,ys.current=t;var s=a&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=wo(t,e.child,null,o),t.child=wo(t,null,s,o)):xs(e,t,s,o),t.memoizedState=r.state,i&&Di(t,n,!0),t.child}function Rs(e){var t=e.stateNode;t.pendingContext?Ai(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ai(0,t.context,!1),Xo(e,t.containerInfo)}function Os(e,t,n,r,i){return ho(),go(i),t.flags|=256,xs(e,t,n,r),t.child}var Ps,Ns,zs,As,Ls={dehydrated:null,treeContext:null,retryLane:0};function $s(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ds(e,t,n){var r,i=t.pendingProps,a=ea.current,s=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&a)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),Ci(ea,1&a),null===e)return uo(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=i.children,e=i.fallback,s?(i=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&i)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=$u(l,i,0,null),e=Lu(e,i,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=$s(n),t.memoizedState=Ls,e):Ms(t,l));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,i,a,s){if(n)return 256&t.flags?(t.flags&=-257,Is(e,t,s,r=cs(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=$u({mode:"visible",children:r.children},i,0,null),(a=Lu(a,i,s,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!==(1&t.mode)&&wo(t,e.child,null,s),t.child.memoizedState=$s(s),t.memoizedState=Ls,a);if(0===(1&t.mode))return Is(e,t,s,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var l=r.dgst;return r=l,Is(e,t,s,r=cs(a=Error(o(419)),r,void 0))}if(l=0!==(s&e.childLanes),bs||l){if(null!==(r=Rl)){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|s))?0:i)&&i!==a.retryLane&&(a.retryLane=i,Lo(e,i),nu(r,e,i,-1))}return gu(),Is(e,t,s,r=cs(Error(o(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=ju.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,ro=ui(i.nextSibling),no=t,io=!0,oo=null,null!==e&&(qi[Ki++]=Xi,qi[Ki++]=Gi,qi[Ki++]=Qi,Xi=e.id,Gi=e.overflow,Qi=t),t=Ms(t,r.children),t.flags|=4096,t)}(e,t,l,i,r,a,n);if(s){s=i.fallback,l=t.mode,r=(a=e.child).sibling;var u={mode:"hidden",children:i.children};return 0===(1&l)&&t.child!==a?((i=t.child).childLanes=0,i.pendingProps=u,t.deletions=null):(i=zu(a,u)).subtreeFlags=14680064&a.subtreeFlags,null!==r?s=zu(r,s):(s=Lu(s,l,n,null)).flags|=2,s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,l=null===(l=e.child.memoizedState)?$s(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Ls,i}return e=(s=e.child).sibling,i=zu(s,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ms(e,t){return(t=$u({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Is(e,t,n,r){return null!==r&&go(r),wo(t,e.child,null,n),(e=Ms(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Fs(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ro(e.return,t,n)}function Us(e,t,n,r,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Bs(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(xs(e,t,r.children,n),0!==(2&(r=ea.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Fs(e,n,t);else if(19===e.tag)Fs(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ci(ea,r),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ta(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Us(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ta(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Us(t,!0,n,null,o);break;case"together":Us(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ws(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hs(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),$l|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=zu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=zu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vs(e,t){if(!io)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ys(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function qs(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ys(t),null;case 1:case 17:return Ni(t.type)&&zi(),Ys(t),null;case 3:return r=t.stateNode,Go(),Ei(Ri),Ei(Ti),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(fo(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==oo&&(au(oo),oo=null))),Ns(e,t),Ys(t),null;case 5:Zo(t);var i=Qo(Ko.current);if(n=t.type,null!==e&&null!=t.stateNode)zs(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Ys(t),null}if(e=Qo(Yo.current),fo(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[fi]=t,r[pi]=a,e=0!==(1&t.mode),n){case"dialog":Ir("cancel",r),Ir("close",r);break;case"iframe":case"object":case"embed":Ir("load",r);break;case"video":case"audio":for(i=0;i<Lr.length;i++)Ir(Lr[i],r);break;case"source":Ir("error",r);break;case"img":case"image":case"link":Ir("error",r),Ir("load",r);break;case"details":Ir("toggle",r);break;case"input":X(r,a),Ir("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Ir("invalid",r);break;case"textarea":ie(r,a),Ir("invalid",r)}for(var l in ye(n,a),i=null,a)if(a.hasOwnProperty(l)){var u=a[l];"children"===l?"string"===typeof u?r.textContent!==u&&(!0!==a.suppressHydrationWarning&&Jr(r.textContent,u,e),i=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==a.suppressHydrationWarning&&Jr(r.textContent,u,e),i=["children",""+u]):s.hasOwnProperty(l)&&null!=u&&"onScroll"===l&&Ir("scroll",r)}switch(n){case"input":Y(r),Z(r,a,!0);break;case"textarea":Y(r),ae(r);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(r.onclick=Zr)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{l=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),"select"===n&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[fi]=t,e[pi]=r,Ps(e,t,!1,!1),t.stateNode=e;e:{switch(l=be(n,r),n){case"dialog":Ir("cancel",e),Ir("close",e),i=r;break;case"iframe":case"object":case"embed":Ir("load",e),i=r;break;case"video":case"audio":for(i=0;i<Lr.length;i++)Ir(Lr[i],e);i=r;break;case"source":Ir("error",e),i=r;break;case"img":case"image":case"link":Ir("error",e),Ir("load",e),i=r;break;case"details":Ir("toggle",e),i=r;break;case"input":X(e,r),i=Q(e,r),Ir("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=D({},r,{value:void 0}),Ir("invalid",e);break;case"textarea":ie(e,r),i=re(e,r),Ir("invalid",e)}for(a in ye(n,i),u=i)if(u.hasOwnProperty(a)){var c=u[a];"style"===a?me(e,c):"dangerouslySetInnerHTML"===a?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===a?"string"===typeof c?("textarea"!==n||""!==c)&&fe(e,c):"number"===typeof c&&fe(e,""+c):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(s.hasOwnProperty(a)?null!=c&&"onScroll"===a&&Ir("scroll",e):null!=c&&b(e,a,c,l))}switch(n){case"input":Y(e),Z(e,r,!1);break;case"textarea":Y(e),ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+H(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?ne(e,!!r.multiple,a,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Ys(t),null;case 6:if(e&&null!=t.stateNode)As(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=Qo(Ko.current),Qo(Yo.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[fi]=t,(a=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:Jr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!==(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fi]=t,t.stateNode=r}return Ys(t),null;case 13:if(Ei(ea),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(io&&null!==ro&&0!==(1&t.mode)&&0===(128&t.flags))po(),ho(),t.flags|=98560,a=!1;else if(a=fo(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(o(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(o(317));a[fi]=t}else ho(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ys(t),a=!1}else null!==oo&&(au(oo),oo=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ea.current)?0===Al&&(Al=3):gu())),null!==t.updateQueue&&(t.flags|=4),Ys(t),null);case 4:return Go(),Ns(e,t),null===e&&Br(t.stateNode.containerInfo),Ys(t),null;case 10:return To(t.type._context),Ys(t),null;case 19:if(Ei(ea),null===(a=t.memoizedState))return Ys(t),null;if(r=0!==(128&t.flags),null===(l=a.rendering))if(r)Vs(a,!1);else{if(0!==Al||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=ta(e))){for(t.flags|=128,Vs(a,!1),null!==(r=l.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(l=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ci(ea,1&ea.current|2),t.child}e=e.sibling}null!==a.tail&&Ge()>Bl&&(t.flags|=128,r=!0,Vs(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ta(l))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vs(a,!0),null===a.tail&&"hidden"===a.tailMode&&!l.alternate&&!io)return Ys(t),null}else 2*Ge()-a.renderingStartTime>Bl&&1073741824!==n&&(t.flags|=128,r=!0,Vs(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=a.last)?n.sibling=l:t.child=l,a.last=l)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ge(),t.sibling=null,n=ea.current,Ci(ea,r?1&n|2:1&n),t):(Ys(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Nl)&&(Ys(t),6&t.subtreeFlags&&(t.flags|=8192)):Ys(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Ks(e,t){switch(to(t),t.tag){case 1:return Ni(t.type)&&zi(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Go(),Ei(Ri),Ei(Ti),ra(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zo(t),null;case 13:if(Ei(ea),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));ho()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ei(ea),null;case 4:return Go(),null;case 10:return To(t.type._context),null;case 22:case 23:return du(),null;default:return null}}Ps=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ns=function(){},zs=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Qo(Yo.current);var o,a=null;switch(n){case"input":i=Q(e,i),r=Q(e,r),a=[];break;case"select":i=D({},i,{value:void 0}),r=D({},r,{value:void 0}),a=[];break;case"textarea":i=re(e,i),r=re(e,r),a=[];break;default:"function"!==typeof i.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(c in ye(n,r),n=null,i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&null!=i[c])if("style"===c){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(s.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var u=r[c];if(l=null!=i?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(null!=u||null!=l))if("style"===c)if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(a||(a=[]),a.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,l=l?l.__html:void 0,null!=u&&l!==u&&(a=a||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(a=a||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(s.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Ir("scroll",e),a||l===u||(a=[])):(a=a||[]).push(c,u))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}},As=function(e,t,n,r){n!==r&&(t.flags|=4)};var Qs=!1,Xs=!1,Gs="function"===typeof WeakSet?WeakSet:Set,Js=null;function Zs(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Su(e,t,r)}else n.current=null}function el(e,t,n){try{n()}catch(r){Su(e,t,r)}}var tl=!1;function nl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,void 0!==o&&el(t,n,o)}i=i.next}while(i!==r)}}function rl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function il(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function ol(e){var t=e.alternate;null!==t&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fi],delete t[pi],delete t[gi],delete t[mi],delete t[vi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function al(e){return 5===e.tag||3===e.tag||4===e.tag}function sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||al(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ll(e,t,n),e=e.sibling;null!==e;)ll(e,t,n),e=e.sibling}function ul(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(ul(e,t,n),e=e.sibling;null!==e;)ul(e,t,n),e=e.sibling}var cl=null,dl=!1;function fl(e,t,n){for(n=n.child;null!==n;)pl(e,t,n),n=n.sibling}function pl(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(it,n)}catch(s){}switch(n.tag){case 5:Xs||Zs(n,t);case 6:var r=cl,i=dl;cl=null,fl(e,t,n),dl=i,null!==(cl=r)&&(dl?(e=cl,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cl.removeChild(n.stateNode));break;case 18:null!==cl&&(dl?(e=cl,n=n.stateNode,8===e.nodeType?li(e.parentNode,n):1===e.nodeType&&li(e,n),Bt(e)):li(cl,n.stateNode));break;case 4:r=cl,i=dl,cl=n.stateNode.containerInfo,dl=!0,fl(e,t,n),cl=r,dl=i;break;case 0:case 11:case 14:case 15:if(!Xs&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,void 0!==a&&(0!==(2&o)||0!==(4&o))&&el(n,t,a),i=i.next}while(i!==r)}fl(e,t,n);break;case 1:if(!Xs&&(Zs(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Su(n,t,s)}fl(e,t,n);break;case 21:fl(e,t,n);break;case 22:1&n.mode?(Xs=(r=Xs)||null!==n.memoizedState,fl(e,t,n),Xs=r):fl(e,t,n);break;default:fl(e,t,n)}}function hl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Gs),t.forEach(function(t){var r=Tu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function gl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:cl=l.stateNode,dl=!1;break e;case 3:case 4:cl=l.stateNode.containerInfo,dl=!0;break e}l=l.return}if(null===cl)throw Error(o(160));pl(a,s,i),cl=null,dl=!1;var u=i.alternate;null!==u&&(u.return=null),i.return=null}catch(c){Su(i,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)ml(t,e),t=t.sibling}function ml(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gl(t,e),vl(e),4&r){try{nl(3,e,e.return),rl(3,e)}catch(m){Su(e,e.return,m)}try{nl(5,e,e.return)}catch(m){Su(e,e.return,m)}}break;case 1:gl(t,e),vl(e),512&r&&null!==n&&Zs(n,n.return);break;case 5:if(gl(t,e),vl(e),512&r&&null!==n&&Zs(n,n.return),32&e.flags){var i=e.stateNode;try{fe(i,"")}catch(m){Su(e,e.return,m)}}if(4&r&&null!=(i=e.stateNode)){var a=e.memoizedProps,s=null!==n?n.memoizedProps:a,l=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===l&&"radio"===a.type&&null!=a.name&&G(i,a),be(l,s);var c=be(l,a);for(s=0;s<u.length;s+=2){var d=u[s],f=u[s+1];"style"===d?me(i,f):"dangerouslySetInnerHTML"===d?de(i,f):"children"===d?fe(i,f):b(i,d,f,c)}switch(l){case"input":J(i,a);break;case"textarea":oe(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var h=a.value;null!=h?ne(i,!!a.multiple,h,!1):p!==!!a.multiple&&(null!=a.defaultValue?ne(i,!!a.multiple,a.defaultValue,!0):ne(i,!!a.multiple,a.multiple?[]:"",!1))}i[pi]=a}catch(m){Su(e,e.return,m)}}break;case 6:if(gl(t,e),vl(e),4&r){if(null===e.stateNode)throw Error(o(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(m){Su(e,e.return,m)}}break;case 3:if(gl(t,e),vl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Bt(t.containerInfo)}catch(m){Su(e,e.return,m)}break;case 4:default:gl(t,e),vl(e);break;case 13:gl(t,e),vl(e),8192&(i=e.child).flags&&(a=null!==i.memoizedState,i.stateNode.isHidden=a,!a||null!==i.alternate&&null!==i.alternate.memoizedState||(Ul=Ge())),4&r&&hl(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Xs=(c=Xs)||d,gl(t,e),Xs=c):gl(t,e),vl(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Js=e,d=e.child;null!==d;){for(f=Js=d;null!==Js;){switch(h=(p=Js).child,p.tag){case 0:case 11:case 14:case 15:nl(4,p,p.return);break;case 1:Zs(p,p.return);var g=p.stateNode;if("function"===typeof g.componentWillUnmount){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(m){Su(r,n,m)}}break;case 5:Zs(p,p.return);break;case 22:if(null!==p.memoizedState){wl(f);continue}}null!==h?(h.return=p,Js=h):wl(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{i=f.stateNode,c?"function"===typeof(a=i.style).setProperty?a.setProperty("display","none","important"):a.display="none":(l=f.stateNode,s=void 0!==(u=f.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,l.style.display=ge("display",s))}catch(m){Su(e,e.return,m)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(m){Su(e,e.return,m)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:gl(t,e),vl(e),4&r&&hl(e);case 21:}}function vl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(al(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(fe(i,""),r.flags&=-33),ul(e,sl(e),i);break;case 3:case 4:var a=r.stateNode.containerInfo;ll(e,sl(e),a);break;default:throw Error(o(161))}}catch(s){Su(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function yl(e,t,n){Js=e,bl(e,t,n)}function bl(e,t,n){for(var r=0!==(1&e.mode);null!==Js;){var i=Js,o=i.child;if(22===i.tag&&r){var a=null!==i.memoizedState||Qs;if(!a){var s=i.alternate,l=null!==s&&null!==s.memoizedState||Xs;s=Qs;var u=Xs;if(Qs=a,(Xs=l)&&!u)for(Js=i;null!==Js;)l=(a=Js).child,22===a.tag&&null!==a.memoizedState?_l(i):null!==l?(l.return=a,Js=l):_l(i);for(;null!==o;)Js=o,bl(o,t,n),o=o.sibling;Js=i,Qs=s,Xs=u}xl(e)}else 0!==(8772&i.subtreeFlags)&&null!==o?(o.return=i,Js=o):xl(e)}}function xl(e){for(;null!==Js;){var t=Js;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Xs||rl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Xs)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ns(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&Ho(t,a,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ho(t,s,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Bt(f)}}}break;default:throw Error(o(163))}Xs||512&t.flags&&il(t)}catch(p){Su(t,t.return,p)}}if(t===e){Js=null;break}if(null!==(n=t.sibling)){n.return=t.return,Js=n;break}Js=t.return}}function wl(e){for(;null!==Js;){var t=Js;if(t===e){Js=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Js=n;break}Js=t.return}}function _l(e){for(;null!==Js;){var t=Js;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(l){Su(t,n,l)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){Su(t,i,l)}}var o=t.return;try{il(t)}catch(l){Su(t,o,l)}break;case 5:var a=t.return;try{il(t)}catch(l){Su(t,a,l)}}}catch(l){Su(t,t.return,l)}if(t===e){Js=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Js=s;break}Js=t.return}}var kl,Sl=Math.ceil,El=x.ReactCurrentDispatcher,Cl=x.ReactCurrentOwner,jl=x.ReactCurrentBatchConfig,Tl=0,Rl=null,Ol=null,Pl=0,Nl=0,zl=Si(0),Al=0,Ll=null,$l=0,Dl=0,Ml=0,Il=null,Fl=null,Ul=0,Bl=1/0,Wl=null,Hl=!1,Vl=null,Yl=null,ql=!1,Kl=null,Ql=0,Xl=0,Gl=null,Jl=-1,Zl=0;function eu(){return 0!==(6&Tl)?Ge():-1!==Jl?Jl:Jl=Ge()}function tu(e){return 0===(1&e.mode)?1:0!==(2&Tl)&&0!==Pl?Pl&-Pl:null!==mo.transition?(0===Zl&&(Zl=gt()),Zl):0!==(e=bt)?e:e=void 0===(e=window.event)?16:Xt(e.type)}function nu(e,t,n,r){if(50<Xl)throw Xl=0,Gl=null,Error(o(185));vt(e,n,r),0!==(2&Tl)&&e===Rl||(e===Rl&&(0===(2&Tl)&&(Dl|=n),4===Al&&su(e,Pl)),ru(e,r),1===n&&0===Tl&&0===(1&t.mode)&&(Bl=Ge()+500,Ii&&Bi()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-at(o),s=1<<a,l=i[a];-1===l?0!==(s&n)&&0===(s&r)||(i[a]=pt(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}(e,t);var r=ft(e,e===Rl?Pl:0);if(0===r)null!==n&&Ke(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ke(n),1===t)0===e.tag?function(e){Ii=!0,Ui(e)}(lu.bind(null,e)):Ui(lu.bind(null,e)),ai(function(){0===(6&Tl)&&Bi()}),n=null;else{switch(xt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Ru(n,iu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function iu(e,t){if(Jl=-1,Zl=0,0!==(6&Tl))throw Error(o(327));var n=e.callbackNode;if(_u()&&e.callbackNode!==n)return null;var r=ft(e,e===Rl?Pl:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=mu(e,r);else{t=r;var i=Tl;Tl|=2;var a=hu();for(Rl===e&&Pl===t||(Wl=null,Bl=Ge()+500,fu(e,t));;)try{yu();break}catch(l){pu(e,l)}jo(),El.current=a,Tl=i,null!==Ol?t=0:(Rl=null,Pl=0,t=Al)}if(0!==t){if(2===t&&(0!==(i=ht(e))&&(r=i,t=ou(e,i))),1===t)throw n=Ll,fu(e,0),su(e,r),ru(e,Ge()),n;if(6===t)su(e,r);else{if(i=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!sr(o(),i))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=mu(e,r))&&(0!==(a=ht(e))&&(r=a,t=ou(e,a))),1===t))throw n=Ll,fu(e,0),su(e,r),ru(e,Ge()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:wu(e,Fl,Wl);break;case 3:if(su(e,r),(130023424&r)===r&&10<(t=Ul+500-Ge())){if(0!==ft(e,0))break;if(((i=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ri(wu.bind(null,e,Fl,Wl),t);break}wu(e,Fl,Wl);break;case 4:if(su(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-at(r);a=1<<s,(s=t[s])>i&&(i=s),r&=~a}if(r=i,10<(r=(120>(r=Ge()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sl(r/1960))-r)){e.timeoutHandle=ri(wu.bind(null,e,Fl,Wl),r);break}wu(e,Fl,Wl);break;default:throw Error(o(329))}}}return ru(e,Ge()),e.callbackNode===n?iu.bind(null,e):null}function ou(e,t){var n=Il;return e.current.memoizedState.isDehydrated&&(fu(e,t).flags|=256),2!==(e=mu(e,t))&&(t=Fl,Fl=n,null!==t&&au(t)),e}function au(e){null===Fl?Fl=e:Fl.push.apply(Fl,e)}function su(e,t){for(t&=~Ml,t&=~Dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function lu(e){if(0!==(6&Tl))throw Error(o(327));_u();var t=ft(e,0);if(0===(1&t))return ru(e,Ge()),null;var n=mu(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=ou(e,r))}if(1===n)throw n=Ll,fu(e,0),su(e,t),ru(e,Ge()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wu(e,Fl,Wl),ru(e,Ge()),null}function uu(e,t){var n=Tl;Tl|=1;try{return e(t)}finally{0===(Tl=n)&&(Bl=Ge()+500,Ii&&Bi())}}function cu(e){null!==Kl&&0===Kl.tag&&0===(6&Tl)&&_u();var t=Tl;Tl|=1;var n=jl.transition,r=bt;try{if(jl.transition=null,bt=1,e)return e()}finally{bt=r,jl.transition=n,0===(6&(Tl=t))&&Bi()}}function du(){Nl=zl.current,Ei(zl)}function fu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ii(n)),null!==Ol)for(n=Ol.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&zi();break;case 3:Go(),Ei(Ri),Ei(Ti),ra();break;case 5:Zo(r);break;case 4:Go();break;case 13:case 19:Ei(ea);break;case 10:To(r.type._context);break;case 22:case 23:du()}n=n.return}if(Rl=e,Ol=e=zu(e.current,null),Pl=Nl=t,Al=0,Ll=null,Ml=Dl=$l=0,Fl=Il=null,null!==No){for(t=0;t<No.length;t++)if(null!==(r=(n=No[t]).interleaved)){n.interleaved=null;var i=r.next,o=n.pending;if(null!==o){var a=o.next;o.next=i,r.next=a}n.pending=r}No=null}return e}function pu(e,t){for(;;){var n=Ol;try{if(jo(),ia.current=Ja,ca){for(var r=sa.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}ca=!1}if(aa=0,ua=la=sa=null,da=!1,fa=0,Cl.current=null,null===n||null===n.return){Al=1,Ll=t,Ol=null;break}e:{var a=e,s=n.return,l=n,u=t;if(t=Pl,l.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=l,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=ms(s);if(null!==h){h.flags&=-257,vs(h,s,l,0,t),1&h.mode&&gs(a,c,t),u=c;var g=(t=h).updateQueue;if(null===g){var m=new Set;m.add(u),t.updateQueue=m}else g.add(u);break e}if(0===(1&t)){gs(a,c,t),gu();break e}u=Error(o(426))}else if(io&&1&l.mode){var v=ms(s);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vs(v,s,l,0,t),go(us(u,l));break e}}a=u=us(u,l),4!==Al&&(Al=2),null===Il?Il=[a]:Il.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Bo(a,ps(0,u,t));break e;case 1:l=u;var y=a.type,b=a.stateNode;if(0===(128&a.flags)&&("function"===typeof y.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===Yl||!Yl.has(b)))){a.flags|=65536,t&=-t,a.lanes|=t,Bo(a,hs(a,l,t));break e}}a=a.return}while(null!==a)}xu(n)}catch(x){t=x,Ol===n&&null!==n&&(Ol=n=n.return);continue}break}}function hu(){var e=El.current;return El.current=Ja,null===e?Ja:e}function gu(){0!==Al&&3!==Al&&2!==Al||(Al=4),null===Rl||0===(268435455&$l)&&0===(268435455&Dl)||su(Rl,Pl)}function mu(e,t){var n=Tl;Tl|=2;var r=hu();for(Rl===e&&Pl===t||(Wl=null,fu(e,t));;)try{vu();break}catch(i){pu(e,i)}if(jo(),Tl=n,El.current=r,null!==Ol)throw Error(o(261));return Rl=null,Pl=0,Al}function vu(){for(;null!==Ol;)bu(Ol)}function yu(){for(;null!==Ol&&!Qe();)bu(Ol)}function bu(e){var t=kl(e.alternate,e,Nl);e.memoizedProps=e.pendingProps,null===t?xu(e):Ol=t,Cl.current=null}function xu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=qs(n,t,Nl)))return void(Ol=n)}else{if(null!==(n=Ks(n,t)))return n.flags&=32767,void(Ol=n);if(null===e)return Al=6,void(Ol=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ol=t);Ol=t=e}while(null!==t);0===Al&&(Al=5)}function wu(e,t,n){var r=bt,i=jl.transition;try{jl.transition=null,bt=1,function(e,t,n,r){do{_u()}while(null!==Kl);if(0!==(6&Tl))throw Error(o(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-at(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}(e,a),e===Rl&&(Ol=Rl=null,Pl=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||ql||(ql=!0,Ru(tt,function(){return _u(),null})),a=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||a){a=jl.transition,jl.transition=null;var s=bt;bt=1;var l=Tl;Tl|=4,Cl.current=null,function(e,t){if(ei=Ht,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(w){n=null;break e}var s=0,l=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==i&&3!==f.nodeType||(l=s+i),f!==a||0!==r&&3!==f.nodeType||(u=s+r),3===f.nodeType&&(s+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===i&&(l=s),p===a&&++d===r&&(u=s),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===l||-1===u?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ti={focusedElem:e,selectionRange:n},Ht=!1,Js=t;null!==Js;)if(e=(t=Js).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Js=e;else for(;null!==Js;){t=Js;try{var g=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==g){var m=g.memoizedProps,v=g.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?m:ns(t.type,m),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(o(163))}}catch(w){Su(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Js=e;break}Js=t.return}g=tl,tl=!1}(e,n),ml(n,e),hr(ti),Ht=!!ei,ti=ei=null,e.current=n,yl(n,e,i),Xe(),Tl=l,bt=s,jl.transition=a}else e.current=n;if(ql&&(ql=!1,Kl=e,Ql=i),a=e.pendingLanes,0===a&&(Yl=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(it,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,Ge()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Hl)throw Hl=!1,e=Vl,Vl=null,e;0!==(1&Ql)&&0!==e.tag&&_u(),a=e.pendingLanes,0!==(1&a)?e===Gl?Xl++:(Xl=0,Gl=e):Xl=0,Bi()}(e,t,n,r)}finally{jl.transition=i,bt=r}return null}function _u(){if(null!==Kl){var e=xt(Ql),t=jl.transition,n=bt;try{if(jl.transition=null,bt=16>e?16:e,null===Kl)var r=!1;else{if(e=Kl,Kl=null,Ql=0,0!==(6&Tl))throw Error(o(331));var i=Tl;for(Tl|=4,Js=e.current;null!==Js;){var a=Js,s=a.child;if(0!==(16&Js.flags)){var l=a.deletions;if(null!==l){for(var u=0;u<l.length;u++){var c=l[u];for(Js=c;null!==Js;){var d=Js;switch(d.tag){case 0:case 11:case 15:nl(8,d,a)}var f=d.child;if(null!==f)f.return=d,Js=f;else for(;null!==Js;){var p=(d=Js).sibling,h=d.return;if(ol(d),d===c){Js=null;break}if(null!==p){p.return=h,Js=p;break}Js=h}}}var g=a.alternate;if(null!==g){var m=g.child;if(null!==m){g.child=null;do{var v=m.sibling;m.sibling=null,m=v}while(null!==m)}}Js=a}}if(0!==(2064&a.subtreeFlags)&&null!==s)s.return=a,Js=s;else e:for(;null!==Js;){if(0!==(2048&(a=Js).flags))switch(a.tag){case 0:case 11:case 15:nl(9,a,a.return)}var y=a.sibling;if(null!==y){y.return=a.return,Js=y;break e}Js=a.return}}var b=e.current;for(Js=b;null!==Js;){var x=(s=Js).child;if(0!==(2064&s.subtreeFlags)&&null!==x)x.return=s,Js=x;else e:for(s=b;null!==Js;){if(0!==(2048&(l=Js).flags))try{switch(l.tag){case 0:case 11:case 15:rl(9,l)}}catch(_){Su(l,l.return,_)}if(l===s){Js=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,Js=w;break e}Js=l.return}}if(Tl=i,Bi(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(it,e)}catch(_){}r=!0}return r}finally{bt=n,jl.transition=t}}return!1}function ku(e,t,n){e=Fo(e,t=ps(0,t=us(n,t),1),1),t=eu(),null!==e&&(vt(e,1,t),ru(e,t))}function Su(e,t,n){if(3===e.tag)ku(e,e,n);else for(;null!==t;){if(3===t.tag){ku(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Yl||!Yl.has(r))){t=Fo(t,e=hs(t,e=us(n,e),1),1),e=eu(),null!==t&&(vt(t,1,e),ru(t,e));break}}t=t.return}}function Eu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,Rl===e&&(Pl&n)===n&&(4===Al||3===Al&&(130023424&Pl)===Pl&&500>Ge()-Ul?fu(e,0):Ml|=n),ru(e,t)}function Cu(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=Lo(e,t))&&(vt(e,t,n),ru(e,n))}function ju(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Cu(e,n)}function Tu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),Cu(e,n)}function Ru(e,t){return qe(e,t)}function Ou(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pu(e,t,n,r){return new Ou(e,t,n,r)}function Nu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function zu(e,t){var n=e.alternate;return null===n?((n=Pu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Au(e,t,n,r,i,a){var s=2;if(r=e,"function"===typeof e)Nu(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case k:return Lu(n.children,i,a,t);case S:s=8,i|=8;break;case E:return(e=Pu(12,n,t,2|i)).elementType=E,e.lanes=a,e;case R:return(e=Pu(13,n,t,i)).elementType=R,e.lanes=a,e;case O:return(e=Pu(19,n,t,i)).elementType=O,e.lanes=a,e;case z:return $u(n,i,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:s=10;break e;case j:s=9;break e;case T:s=11;break e;case P:s=14;break e;case N:s=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=Pu(s,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function Lu(e,t,n,r){return(e=Pu(7,e,r,t)).lanes=n,e}function $u(e,t,n,r){return(e=Pu(22,e,r,t)).elementType=z,e.lanes=n,e.stateNode={isHidden:!1},e}function Du(e,t,n){return(e=Pu(6,e,null,t)).lanes=n,e}function Mu(e,t,n){return(t=Pu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Iu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mt(0),this.expirationTimes=mt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fu(e,t,n,r,i,o,a,s,l){return e=new Iu(e,t,n,s,l),1===t?(t=1,!0===o&&(t|=8)):t=0,o=Pu(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Do(o),e}function Uu(e){if(!e)return ji;e:{if(Be(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ni(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(Ni(n))return Li(e,n,t)}return t}function Bu(e,t,n,r,i,o,a,s,l){return(e=Fu(n,r,!0,e,0,o,0,s,l)).context=Uu(null),n=e.current,(o=Io(r=eu(),i=tu(n))).callback=void 0!==t&&null!==t?t:null,Fo(n,o,i),e.current.lanes=i,vt(e,i,r),ru(e,r),e}function Wu(e,t,n,r){var i=t.current,o=eu(),a=tu(i);return n=Uu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Io(o,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Fo(i,t,a))&&(nu(e,i,a,o),Uo(e,i,a)),a}function Hu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Yu(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}kl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ri.current)bs=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return bs=!1,function(e,t,n){switch(t.tag){case 3:Rs(t),ho();break;case 5:Jo(t);break;case 1:Ni(t.type)&&$i(t);break;case 4:Xo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ci(ko,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ci(ea,1&ea.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ds(e,t,n):(Ci(ea,1&ea.current),null!==(e=Hs(e,t,n))?e.sibling:null);Ci(ea,1&ea.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Bs(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ci(ea,ea.current),r)break;return null;case 22:case 23:return t.lanes=0,Ss(e,t,n)}return Hs(e,t,n)}(e,t,n);bs=0!==(131072&e.flags)}else bs=!1,io&&0!==(1048576&t.flags)&&Zi(t,Yi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ws(e,t),e=t.pendingProps;var i=Pi(t,Ti.current);Oo(t,n),i=ma(null,t,r,e,i,n);var a=va();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ni(r)?(a=!0,$i(t)):a=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Do(t),i.updater=is,t.stateNode=i,i._reactInternals=t,ls(t,r,e,n),t=Ts(null,t,r,!0,a,n)):(t.tag=0,io&&a&&eo(t),xs(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ws(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"===typeof e)return Nu(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===T)return 11;if(e===P)return 14}return 2}(r),e=ns(r,e),i){case 0:t=Cs(null,t,r,e,n);break e;case 1:t=js(null,t,r,e,n);break e;case 11:t=ws(null,t,r,e,n);break e;case 14:t=_s(null,t,r,ns(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Cs(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 1:return r=t.type,i=t.pendingProps,js(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 3:e:{if(Rs(t),null===e)throw Error(o(387));r=t.pendingProps,i=(a=t.memoizedState).element,Mo(e,t),Wo(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Os(e,t,r,n,i=us(Error(o(423)),t));break e}if(r!==i){t=Os(e,t,r,n,i=us(Error(o(424)),t));break e}for(ro=ui(t.stateNode.containerInfo.firstChild),no=t,io=!0,oo=null,n=_o(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ho(),r===i){t=Hs(e,t,n);break e}xs(e,t,r,n)}t=t.child}return t;case 5:return Jo(t),null===e&&uo(t),r=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,s=i.children,ni(r,i)?s=null:null!==a&&ni(r,a)&&(t.flags|=32),Es(e,t),xs(e,t,s,n),t.child;case 6:return null===e&&uo(t),null;case 13:return Ds(e,t,n);case 4:return Xo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wo(t,null,r,n):xs(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,ws(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 7:return xs(e,t,t.pendingProps,n),t.child;case 8:case 12:return xs(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value,Ci(ko,r._currentValue),r._currentValue=s,null!==a)if(sr(a.value,s)){if(a.children===i.children&&!Ri.current){t=Hs(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var l=a.dependencies;if(null!==l){s=a.child;for(var u=l.firstContext;null!==u;){if(u.context===r){if(1===a.tag){(u=Io(-1,n&-n)).tag=2;var c=a.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}a.lanes|=n,null!==(u=a.alternate)&&(u.lanes|=n),Ro(a.return,n,t),l.lanes|=n;break}u=u.next}}else if(10===a.tag)s=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(s=a.return))throw Error(o(341));s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),Ro(s,n,t),s=a.sibling}else s=a.child;if(null!==s)s.return=a;else for(s=a;null!==s;){if(s===t){s=null;break}if(null!==(a=s.sibling)){a.return=s.return,s=a;break}s=s.return}a=s}xs(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Oo(t,n),r=r(i=Po(i)),t.flags|=1,xs(e,t,r,n),t.child;case 14:return i=ns(r=t.type,t.pendingProps),_s(e,t,r,i=ns(r.type,i),n);case 15:return ks(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ns(r,i),Ws(e,t),t.tag=1,Ni(r)?(e=!0,$i(t)):e=!1,Oo(t,n),as(t,r,i),ls(t,r,i,n),Ts(null,t,r,!0,e,n);case 19:return Bs(e,t,n);case 22:return Ss(e,t,n)}throw Error(o(156,t.tag))};var qu="function"===typeof reportError?reportError:function(e){console.error(e)};function Ku(e){this._internalRoot=e}function Qu(e){this._internalRoot=e}function Xu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Gu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Ju(){}function Zu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if("function"===typeof i){var s=i;i=function(){var e=Hu(a);s.call(e)}}Wu(t,a,e,i)}else a=function(e,t,n,r,i){if(i){if("function"===typeof r){var o=r;r=function(){var e=Hu(a);o.call(e)}}var a=Bu(t,r,e,0,null,!1,0,"",Ju);return e._reactRootContainer=a,e[hi]=a.current,Br(8===e.nodeType?e.parentNode:e),cu(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof r){var s=r;r=function(){var e=Hu(l);s.call(e)}}var l=Fu(e,0,!1,null,0,!1,0,"",Ju);return e._reactRootContainer=l,e[hi]=l.current,Br(8===e.nodeType?e.parentNode:e),cu(function(){Wu(t,l,n,r)}),l}(n,t,e,i,r);return Hu(a)}Qu.prototype.render=Ku.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Wu(e,t,null,null)},Qu.prototype.unmount=Ku.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu(function(){Wu(null,e,null,null)}),t[hi]=null}},Qu.prototype.unstable_scheduleHydration=function(e){if(e){var t=St();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zt.length&&0!==t&&t<zt[n].priority;n++);zt.splice(n,0,e),0===n&&Dt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(yt(t,1|n),ru(t,Ge()),0===(6&Tl)&&(Bl=Ge()+500,Bi()))}break;case 13:cu(function(){var t=Lo(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}}),Yu(e,1)}},_t=function(e){if(13===e.tag){var t=Lo(e,134217728);if(null!==t)nu(t,e,134217728,eu());Yu(e,134217728)}},kt=function(e){if(13===e.tag){var t=tu(e),n=Lo(e,t);if(null!==n)nu(n,e,t,eu());Yu(e,t)}},St=function(){return bt},Et=function(e,t){var n=bt;try{return bt=e,t()}finally{bt=n}},_e=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wi(r);if(!i)throw Error(o(90));q(r),J(r,i)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Te=uu,Re=cu;var ec={usingClientEntryPoint:!1,Events:[bi,xi,wi,Ce,je,uu]},tc={findFiberByHostInstance:yi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{it=rc.inject(nc),ot=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Xu(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:_,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Xu(e))throw Error(o(299));var n=!1,r="",i=qu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Fu(e,1,!1,null,0,n,0,r,i),e[hi]=t.current,Br(8===e.nodeType?e.parentNode:e),new Ku(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!Gu(t))throw Error(o(200));return Zu(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Xu(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,i=!1,a="",s=qu;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=Bu(t,null,e,1,null!=n?n:null,i,0,a,s),e[hi]=t.current,Br(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Qu(t)},t.render=function(e,t,n){if(!Gu(t))throw Error(o(200));return Zu(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Gu(e))throw Error(o(40));return!!e._reactRootContainer&&(cu(function(){Zu(null,null,e,!1,function(){e._reactRootContainer=null,e[hi]=null})}),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gu(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return Zu(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&r;("object"==typeof s||"function"==typeof s)&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach(e=>a[e]=()=>r[e]);return a.default=()=>r,n.d(o,a),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{"use strict";var e={};n.r(e),n.d(e,{Decoder:()=>Mt,Encoder:()=>$t,PacketType:()=>Lt,protocol:()=>At});var t,r=n(43),i=n.t(r,2),o=n(391),a=n(950),s=n.t(a,2);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(t||(t={}));const u="popstate";function c(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function d(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function f(e,t){return{usr:e.state,key:e.key,idx:t}}function p(e,t,n,r){return void 0===n&&(n=null),l({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?g(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function h(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function g(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function m(e,n,r,i){void 0===i&&(i={});let{window:o=document.defaultView,v5Compat:a=!1}=i,s=o.history,d=t.Pop,g=null,m=v();function v(){return(s.state||{idx:null}).idx}function y(){d=t.Pop;let e=v(),n=null==e?null:e-m;m=e,g&&g({action:d,location:x.location,delta:n})}function b(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"===typeof e?e:h(e);return n=n.replace(/ $/,"%20"),c(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==m&&(m=0,s.replaceState(l({},s.state,{idx:m}),""));let x={get action(){return d},get location(){return e(o,s)},listen(e){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(u,y),g=e,()=>{o.removeEventListener(u,y),g=null}},createHref:e=>n(o,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,n){d=t.Push;let i=p(x.location,e,n);r&&r(i,e),m=v()+1;let l=f(i,m),u=x.createHref(i);try{s.pushState(l,"",u)}catch(c){if(c instanceof DOMException&&"DataCloneError"===c.name)throw c;o.location.assign(u)}a&&g&&g({action:d,location:x.location,delta:1})},replace:function(e,n){d=t.Replace;let i=p(x.location,e,n);r&&r(i,e),m=v();let o=f(i,m),l=x.createHref(i);s.replaceState(o,"",l),a&&g&&g({action:d,location:x.location,delta:0})},go:e=>s.go(e)};return x}var v;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(v||(v={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function y(e,t,n){return void 0===n&&(n="/"),b(e,t,n,!1)}function b(e,t,n,r){let i=z(("string"===typeof t?g(t):t).pathname||"/",n);if(null==i)return null;let o=x(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(o);let a=null;for(let s=0;null==a&&s<o.length;++s){let e=N(i);a=O(o[s],e,r)}return a}function x(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,o)=>{let a={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};a.relativePath.startsWith("/")&&(c(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),a.relativePath=a.relativePath.slice(r.length));let s=M([r,a.relativePath]),l=n.concat(a);e.children&&e.children.length>0&&(c(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),x(e.children,t,l,s)),(null!=e.path||e.index)&&t.push({path:s,score:R(s,e.index),routesMeta:l})};return e.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of w(e.path))i(e,t,r);else i(e,t)}),t}function w(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return i?[o,""]:[o];let a=w(r.join("/")),s=[];return s.push(...a.map(e=>""===e?o:[o,e].join("/"))),i&&s.push(...a),s.map(t=>e.startsWith("/")&&""===t?"/":t)}const _=/^:[\w-]+$/,k=3,S=2,E=1,C=10,j=-2,T=e=>"*"===e;function R(e,t){let n=e.split("/"),r=n.length;return n.some(T)&&(r+=j),t&&(r+=S),n.filter(e=>!T(e)).reduce((e,t)=>e+(_.test(t)?k:""===t?E:C),r)}function O(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,i={},o="/",a=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,u="/"===o?t:t.slice(o.length)||"/",c=P({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},u),d=e.route;if(!c&&l&&n&&!r[r.length-1].route.index&&(c=P({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(i,c.params),a.push({params:i,pathname:M([o,c.pathname]),pathnameBase:I(M([o,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(o=M([o,c.pathnameBase]))}return a}function P(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);d("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let o=new RegExp(i,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1),l=r.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=s[n]||"";a=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e},{});return{params:l,pathname:o,pathnameBase:a,pattern:e}}function N(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return d(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function z(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function A(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function L(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function $(e,t){let n=L(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function D(e,t,n,r){let i;void 0===r&&(r=!1),"string"===typeof e?i=g(e):(i=l({},e),c(!i.pathname||!i.pathname.includes("?"),A("?","pathname","search",i)),c(!i.pathname||!i.pathname.includes("#"),A("#","pathname","hash",i)),c(!i.search||!i.search.includes("#"),A("#","search","hash",i)));let o,a=""===e||""===i.pathname,s=a?"/":i.pathname;if(null==s)o=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}o=e>=0?t[e]:"/"}let u=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"===typeof e?g(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:F(r),hash:U(i)}}(i,o),d=s&&"/"!==s&&s.endsWith("/"),f=(a||"."===s)&&n.endsWith("/");return u.pathname.endsWith("/")||!d&&!f||(u.pathname+="/"),u}const M=e=>e.join("/").replace(/\/\/+/g,"/"),I=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),F=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",U=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function B(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const W=["post","put","patch","delete"],H=(new Set(W),["get",...W]);new Set(H),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(this,arguments)}const Y=r.createContext(null);const q=r.createContext(null);const K=r.createContext(null);const Q=r.createContext(null);const X=r.createContext({outlet:null,matches:[],isDataRoute:!1});const G=r.createContext(null);function J(){return null!=r.useContext(Q)}function Z(){return J()||c(!1),r.useContext(Q).location}function ee(e){r.useContext(K).static||r.useLayoutEffect(e)}function te(){let{isDataRoute:e}=r.useContext(X);return e?function(){let{router:e}=ce(le.UseNavigateStable),t=fe(ue.UseNavigateStable),n=r.useRef(!1);ee(()=>{n.current=!0});let i=r.useCallback(function(r,i){void 0===i&&(i={}),n.current&&("number"===typeof r?e.navigate(r):e.navigate(r,V({fromRouteId:t},i)))},[e,t]);return i}():function(){J()||c(!1);let e=r.useContext(Y),{basename:t,future:n,navigator:i}=r.useContext(K),{matches:o}=r.useContext(X),{pathname:a}=Z(),s=JSON.stringify($(o,n.v7_relativeSplatPath)),l=r.useRef(!1);ee(()=>{l.current=!0});let u=r.useCallback(function(n,r){if(void 0===r&&(r={}),!l.current)return;if("number"===typeof n)return void i.go(n);let o=D(n,JSON.parse(s),a,"path"===r.relative);null==e&&"/"!==t&&(o.pathname="/"===o.pathname?t:M([t,o.pathname])),(r.replace?i.replace:i.push)(o,r.state,r)},[t,i,s,a,e]);return u}()}function ne(e,n,i,o){J()||c(!1);let{navigator:a}=r.useContext(K),{matches:s}=r.useContext(X),l=s[s.length-1],u=l?l.params:{},d=(l&&l.pathname,l?l.pathnameBase:"/");l&&l.route;let f,p=Z();if(n){var h;let e="string"===typeof n?g(n):n;"/"===d||(null==(h=e.pathname)?void 0:h.startsWith(d))||c(!1),f=e}else f=p;let m=f.pathname||"/",v=m;if("/"!==d){let e=d.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(e.length).join("/")}let b=y(e,{pathname:v});let x=se(b&&b.map(e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:M([d,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:M([d,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),s,i,o);return n&&x?r.createElement(Q.Provider,{value:{location:V({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:t.Pop}},x):x}function re(){let e=function(){var e;let t=r.useContext(G),n=de(ue.UseRouteError),i=fe(ue.UseRouteError);if(void 0!==t)return t;return null==(e=n.errors)?void 0:e[i]}(),t=B(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i};return r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:o},n):null,null)}const ie=r.createElement(re,null);class oe extends r.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?r.createElement(X.Provider,{value:this.props.routeContext},r.createElement(G.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ae(e){let{routeContext:t,match:n,children:i}=e,o=r.useContext(Y);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),r.createElement(X.Provider,{value:t},i)}function se(e,t,n,i){var o;if(void 0===t&&(t=[]),void 0===n&&(n=null),void 0===i&&(i=null),null==e){var a;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(a=i)&&a.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let s=e,l=null==(o=n)?void 0:o.errors;if(null!=l){let e=s.findIndex(e=>e.route.id&&void 0!==(null==l?void 0:l[e.route.id]));e>=0||c(!1),s=s.slice(0,Math.min(s.length,e+1))}let u=!1,d=-1;if(n&&i&&i.v7_partialHydration)for(let r=0;r<s.length;r++){let e=s[r];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=r),e.route.id){let{loaderData:t,errors:r}=n,i=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||i){u=!0,s=d>=0?s.slice(0,d+1):[s[0]];break}}}return s.reduceRight((e,i,o)=>{let a,c=!1,f=null,p=null;var h;n&&(a=l&&i.route.id?l[i.route.id]:void 0,f=i.route.errorElement||ie,u&&(d<0&&0===o?(h="route-fallback",!1||pe[h]||(pe[h]=!0),c=!0,p=null):d===o&&(c=!0,p=i.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,o+1)),m=()=>{let t;return t=a?f:c?p:i.route.Component?r.createElement(i.route.Component,null):i.route.element?i.route.element:e,r.createElement(ae,{match:i,routeContext:{outlet:e,matches:g,isDataRoute:null!=n},children:t})};return n&&(i.route.ErrorBoundary||i.route.errorElement||0===o)?r.createElement(oe,{location:n.location,revalidation:n.revalidation,component:f,error:a,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var le=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(le||{}),ue=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ue||{});function ce(e){let t=r.useContext(Y);return t||c(!1),t}function de(e){let t=r.useContext(q);return t||c(!1),t}function fe(e){let t=function(){let e=r.useContext(X);return e||c(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||c(!1),n.route.id}const pe={};function he(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}i.startTransition;function ge(e){let{to:t,replace:n,state:i,relative:o}=e;J()||c(!1);let{future:a,static:s}=r.useContext(K),{matches:l}=r.useContext(X),{pathname:u}=Z(),d=te(),f=D(t,$(l,a.v7_relativeSplatPath),u,"path"===o),p=JSON.stringify(f);return r.useEffect(()=>d(JSON.parse(p),{replace:n,state:i,relative:o}),[d,p,o,n,i]),null}function me(e){c(!1)}function ve(e){let{basename:n="/",children:i=null,location:o,navigationType:a=t.Pop,navigator:s,static:l=!1,future:u}=e;J()&&c(!1);let d=n.replace(/^\/*/,"/"),f=r.useMemo(()=>({basename:d,navigator:s,static:l,future:V({v7_relativeSplatPath:!1},u)}),[d,u,s,l]);"string"===typeof o&&(o=g(o));let{pathname:p="/",search:h="",hash:m="",state:v=null,key:y="default"}=o,b=r.useMemo(()=>{let e=z(p,d);return null==e?null:{location:{pathname:e,search:h,hash:m,state:v,key:y},navigationType:a}},[d,p,h,m,v,y,a]);return null==b?null:r.createElement(K.Provider,{value:f},r.createElement(Q.Provider,{children:i,value:b}))}function ye(e){let{children:t,location:n}=e;return ne(be(t),n)}new Promise(()=>{});r.Component;function be(e,t){void 0===t&&(t=[]);let n=[];return r.Children.forEach(e,(e,i)=>{if(!r.isValidElement(e))return;let o=[...t,i];if(e.type===r.Fragment)return void n.push.apply(n,be(e.props.children,o));e.type!==me&&c(!1),e.props.index&&e.props.children&&c(!1);let a={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=be(e.props.children,o)),n.push(a)}),n}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);try{window.__reactRouterVersion="6"}catch(ip){}new Map;const xe=i.startTransition;s.flushSync,i.useId;function we(e){let{basename:t,children:n,future:i,window:o}=e,a=r.useRef();var s;null==a.current&&(a.current=(void 0===(s={window:o,v5Compat:!0})&&(s={}),m(function(e,t){let{pathname:n,search:r,hash:i}=e.location;return p("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"===typeof t?t:h(t)},null,s)));let l=a.current,[u,c]=r.useState({action:l.action,location:l.location}),{v7_startTransition:d}=i||{},f=r.useCallback(e=>{d&&xe?xe(()=>c(e)):c(e)},[c,d]);return r.useLayoutEffect(()=>l.listen(f),[l,f]),r.useEffect(()=>he(i),[i]),r.createElement(ve,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:l,future:i})}"undefined"!==typeof window&&"undefined"!==typeof window.document&&window.document.createElement;var _e,ke;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(_e||(_e={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(ke||(ke={}));const Se=Object.create(null);Se.open="0",Se.close="1",Se.ping="2",Se.pong="3",Se.message="4",Se.upgrade="5",Se.noop="6";const Ee=Object.create(null);Object.keys(Se).forEach(e=>{Ee[Se[e]]=e});const Ce={type:"error",data:"parser error"},je="function"===typeof Blob||"undefined"!==typeof Blob&&"[object BlobConstructor]"===Object.prototype.toString.call(Blob),Te="function"===typeof ArrayBuffer,Re=e=>"function"===typeof ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,Oe=(e,t,n)=>{let{type:r,data:i}=e;return je&&i instanceof Blob?t?n(i):Pe(i,n):Te&&(i instanceof ArrayBuffer||Re(i))?t?n(i):Pe(new Blob([i]),n):n(Se[r]+(i||""))},Pe=(e,t)=>{const n=new FileReader;return n.onload=function(){const e=n.result.split(",")[1];t("b"+(e||""))},n.readAsDataURL(e)};function Ne(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let ze;const Ae="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Le="undefined"===typeof Uint8Array?[]:new Uint8Array(256);for(let n=0;n<64;n++)Le[Ae.charCodeAt(n)]=n;const $e="function"===typeof ArrayBuffer,De=(e,t)=>{if("string"!==typeof e)return{type:"message",data:Ie(e,t)};const n=e.charAt(0);if("b"===n)return{type:"message",data:Me(e.substring(1),t)};return Ee[n]?e.length>1?{type:Ee[n],data:e.substring(1)}:{type:Ee[n]}:Ce},Me=(e,t)=>{if($e){const n=(e=>{let t,n,r,i,o,a=.75*e.length,s=e.length,l=0;"="===e[e.length-1]&&(a--,"="===e[e.length-2]&&a--);const u=new ArrayBuffer(a),c=new Uint8Array(u);for(t=0;t<s;t+=4)n=Le[e.charCodeAt(t)],r=Le[e.charCodeAt(t+1)],i=Le[e.charCodeAt(t+2)],o=Le[e.charCodeAt(t+3)],c[l++]=n<<2|r>>4,c[l++]=(15&r)<<4|i>>2,c[l++]=(3&i)<<6|63&o;return u})(e);return Ie(n,t)}return{base64:!0,data:e}},Ie=(e,t)=>"blob"===t?e instanceof Blob?e:new Blob([e]):e instanceof ArrayBuffer?e:e.buffer,Fe=String.fromCharCode(30);function Ue(){return new TransformStream({transform(e,t){!function(e,t){je&&e.data instanceof Blob?e.data.arrayBuffer().then(Ne).then(t):Te&&(e.data instanceof ArrayBuffer||Re(e.data))?t(Ne(e.data)):Oe(e,!1,e=>{ze||(ze=new TextEncoder),t(ze.encode(e))})}(e,n=>{const r=n.length;let i;if(r<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,r);else if(r<65536){i=new Uint8Array(3);const e=new DataView(i.buffer);e.setUint8(0,126),e.setUint16(1,r)}else{i=new Uint8Array(9);const e=new DataView(i.buffer);e.setUint8(0,127),e.setBigUint64(1,BigInt(r))}e.data&&"string"!==typeof e.data&&(i[0]|=128),t.enqueue(i),t.enqueue(n)})}})}let Be;function We(e){return e.reduce((e,t)=>e+t.length,0)}function He(e,t){if(e[0].length===t)return e.shift();const n=new Uint8Array(t);let r=0;for(let i=0;i<t;i++)n[i]=e[0][r++],r===e[0].length&&(e.shift(),r=0);return e.length&&r<e[0].length&&(e[0]=e[0].slice(r)),n}function Ve(e){if(e)return function(e){for(var t in Ve.prototype)e[t]=Ve.prototype[t];return e}(e)}Ve.prototype.on=Ve.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},Ve.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this},Ve.prototype.off=Ve.prototype.removeListener=Ve.prototype.removeAllListeners=Ve.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,r=this._callbacks["$"+e];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+e],this;for(var i=0;i<r.length;i++)if((n=r[i])===t||n.fn===t){r.splice(i,1);break}return 0===r.length&&delete this._callbacks["$"+e],this},Ve.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),n=this._callbacks["$"+e],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(n){r=0;for(var i=(n=n.slice(0)).length;r<i;++r)n[r].apply(this,t)}return this},Ve.prototype.emitReserved=Ve.prototype.emit,Ve.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},Ve.prototype.hasListeners=function(e){return!!this.listeners(e).length};const Ye="function"===typeof Promise&&"function"===typeof Promise.resolve?e=>Promise.resolve().then(e):(e,t)=>t(e,0),qe="undefined"!==typeof self?self:"undefined"!==typeof window?window:Function("return this")();function Ke(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.reduce((t,n)=>(e.hasOwnProperty(n)&&(t[n]=e[n]),t),{})}const Qe=qe.setTimeout,Xe=qe.clearTimeout;function Ge(e,t){t.useNativeTimers?(e.setTimeoutFn=Qe.bind(qe),e.clearTimeoutFn=Xe.bind(qe)):(e.setTimeoutFn=qe.setTimeout.bind(qe),e.clearTimeoutFn=qe.clearTimeout.bind(qe))}function Je(e){return"string"===typeof e?function(e){let t=0,n=0;for(let r=0,i=e.length;r<i;r++)t=e.charCodeAt(r),t<128?n+=1:t<2048?n+=2:t<55296||t>=57344?n+=3:(r++,n+=4);return n}(e):Math.ceil(1.33*(e.byteLength||e.size))}function Ze(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}class et extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type="TransportError"}}class tt extends Ve{constructor(e){super(),this.writable=!1,Ge(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,n){return super.emitReserved("error",new et(e,t,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this}send(e){"open"===this.readyState&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=De(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return-1===e.indexOf(":")?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(443!==this.opts.port)||!this.opts.secure&&80!==Number(this.opts.port))?":"+this.opts.port:""}_query(e){const t=function(e){let t="";for(let n in e)e.hasOwnProperty(n)&&(t.length&&(t+="&"),t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t}(e);return t.length?"?"+t:""}}class nt extends tt{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let e=0;this._polling&&(e++,this.once("pollComplete",function(){--e||t()})),this.writable||(e++,this.once("drain",function(){--e||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){((e,t)=>{const n=e.split(Fe),r=[];for(let i=0;i<n.length;i++){const e=De(n[i],t);if(r.push(e),"error"===e.type)break}return r})(e,this.socket.binaryType).forEach(e=>{if("opening"===this.readyState&&"open"===e.type&&this.onOpen(),"close"===e.type)return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(e)}),"closed"!==this.readyState&&(this._polling=!1,this.emitReserved("pollComplete"),"open"===this.readyState&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};"open"===this.readyState?e():this.once("open",e)}write(e){this.writable=!1,((e,t)=>{const n=e.length,r=new Array(n);let i=0;e.forEach((e,o)=>{Oe(e,!1,e=>{r[o]=e,++i===n&&t(r.join(Fe))})})})(e,e=>{this.doWrite(e,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return!1!==this.opts.timestampRequests&&(t[this.opts.timestampParam]=Ze()),this.supportsBinary||t.sid||(t.b64=1),this.createUri(e,t)}}let rt=!1;try{rt="undefined"!==typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(op){}const it=rt;function ot(){}class at extends nt{constructor(e){if(super(e),"undefined"!==typeof location){const t="https:"===location.protocol;let n=location.port;n||(n=t?"443":"80"),this.xd="undefined"!==typeof location&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,t){const n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",(e,t)=>{this.onError("xhr post error",e,t)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(e,t)=>{this.onError("xhr poll error",e,t)}),this.pollXhr=e}}class st extends Ve{constructor(e,t,n){super(),this.createRequest=e,Ge(this,n),this._opts=n,this._method=n.method||"GET",this._uri=t,this._data=void 0!==n.data?n.data:null,this._create()}_create(){var e;const t=Ke(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(t);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let e in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(e)&&n.setRequestHeader(e,this._opts.extraHeaders[e])}}catch(ip){}if("POST"===this._method)try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(ip){}try{n.setRequestHeader("Accept","*/*")}catch(ip){}null===(e=this._opts.cookieJar)||void 0===e||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var e;3===n.readyState&&(null===(e=this._opts.cookieJar)||void 0===e||e.parseCookies(n.getResponseHeader("set-cookie"))),4===n.readyState&&(200===n.status||1223===n.status?this._onLoad():this.setTimeoutFn(()=>{this._onError("number"===typeof n.status?n.status:0)},0))},n.send(this._data)}catch(ip){return void this.setTimeoutFn(()=>{this._onError(ip)},0)}"undefined"!==typeof document&&(this._index=st.requestsCount++,st.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if("undefined"!==typeof this._xhr&&null!==this._xhr){if(this._xhr.onreadystatechange=ot,e)try{this._xhr.abort()}catch(ip){}"undefined"!==typeof document&&delete st.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;null!==e&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}if(st.requestsCount=0,st.requests={},"undefined"!==typeof document)if("function"===typeof attachEvent)attachEvent("onunload",lt);else if("function"===typeof addEventListener){addEventListener("onpagehide"in qe?"pagehide":"unload",lt,!1)}function lt(){for(let e in st.requests)st.requests.hasOwnProperty(e)&&st.requests[e].abort()}const ut=function(){const e=ct({xdomain:!1});return e&&null!==e.responseType}();function ct(e){const t=e.xdomain;try{if("undefined"!==typeof XMLHttpRequest&&(!t||it))return new XMLHttpRequest}catch(ip){}if(!t)try{return new(qe[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(ip){}}const dt="undefined"!==typeof navigator&&"string"===typeof navigator.product&&"reactnative"===navigator.product.toLowerCase();class ft extends tt{get name(){return"websocket"}doOpen(){const e=this.uri(),t=this.opts.protocols,n=dt?{}:Ke(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,n)}catch(op){return this.emitReserved("error",op)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],r=t===e.length-1;Oe(n,this.supportsBinary,e=>{try{this.doWrite(n,e)}catch(ip){}r&&Ye(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){"undefined"!==typeof this.ws&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=Ze()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}}const pt=qe.WebSocket||qe.MozWebSocket;const ht={websocket:class extends ft{createSocket(e,t,n){return dt?new pt(e,t,n):t?new pt(e,t):new pt(e)}doWrite(e,t){this.ws.send(t)}},webtransport:class extends tt{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(op){return this.emitReserved("error",op)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const t=function(e,t){Be||(Be=new TextDecoder);const n=[];let r=0,i=-1,o=!1;return new TransformStream({transform(a,s){for(n.push(a);;){if(0===r){if(We(n)<1)break;const e=He(n,1);o=128===(128&e[0]),i=127&e[0],r=i<126?3:126===i?1:2}else if(1===r){if(We(n)<2)break;const e=He(n,2);i=new DataView(e.buffer,e.byteOffset,e.length).getUint16(0),r=3}else if(2===r){if(We(n)<8)break;const e=He(n,8),t=new DataView(e.buffer,e.byteOffset,e.length),o=t.getUint32(0);if(o>Math.pow(2,21)-1){s.enqueue(Ce);break}i=o*Math.pow(2,32)+t.getUint32(4),r=3}else{if(We(n)<i)break;const e=He(n,i);s.enqueue(De(o?e:Be.decode(e),t)),r=0}if(0===i||i>e){s.enqueue(Ce);break}}}})}(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(t).getReader(),r=Ue();r.readable.pipeTo(e.writable),this._writer=r.writable.getWriter();const i=()=>{n.read().then(e=>{let{done:t,value:n}=e;t||(this.onPacket(n),i())}).catch(e=>{})};i();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],r=t===e.length-1;this._writer.write(n).then(()=>{r&&Ye(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;null===(e=this._transport)||void 0===e||e.close()}},polling:class extends at{constructor(e){super(e);const t=e&&e.forceBase64;this.supportsBinary=ut&&!t}request(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign(e,{xd:this.xd},this.opts),new st(ct,this.uri(),e)}}},gt=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,mt=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function vt(e){if(e.length>8e3)throw"URI too long";const t=e,n=e.indexOf("["),r=e.indexOf("]");-1!=n&&-1!=r&&(e=e.substring(0,n)+e.substring(n,r).replace(/:/g,";")+e.substring(r,e.length));let i=gt.exec(e||""),o={},a=14;for(;a--;)o[mt[a]]=i[a]||"";return-1!=n&&-1!=r&&(o.source=t,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o.pathNames=function(e,t){const n=/\/{2,9}/g,r=t.replace(n,"/").split("/");"/"!=t.slice(0,1)&&0!==t.length||r.splice(0,1);"/"==t.slice(-1)&&r.splice(r.length-1,1);return r}(0,o.path),o.queryKey=function(e,t){const n={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(e,t,r){t&&(n[t]=r)}),n}(0,o.query),o}const yt="function"===typeof addEventListener&&"function"===typeof removeEventListener,bt=[];yt&&addEventListener("offline",()=>{bt.forEach(e=>e())},!1);class xt extends Ve{constructor(e,t){if(super(),this.binaryType="arraybuffer",this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&"object"===typeof e&&(t=e,e=null),e){const n=vt(e);t.hostname=n.host,t.secure="https"===n.protocol||"wss"===n.protocol,t.port=n.port,n.query&&(t.query=n.query)}else t.host&&(t.hostname=vt(t.host).host);Ge(this,t),this.secure=null!=t.secure?t.secure:"undefined"!==typeof location&&"https:"===location.protocol,t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||("undefined"!==typeof location?location.hostname:"localhost"),this.port=t.port||("undefined"!==typeof location&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},t.transports.forEach(e=>{const t=e.prototype.name;this.transports.push(t),this._transportsByName[t]=e}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),"string"===typeof this.opts.query&&(this.opts.query=function(e){let t={},n=e.split("&");for(let r=0,i=n.length;r<i;r++){let e=n[r].split("=");t[decodeURIComponent(e[0])]=decodeURIComponent(e[1])}return t}(this.opts.query)),yt&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),"localhost"!==this.hostname&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},bt.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=4,t.transport=e,this.id&&(t.sid=this.id);const n=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(0===this.transports.length)return void this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);const e=this.opts.rememberUpgrade&&xt.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket")?"websocket":this.transports[0];this.readyState="opening";const t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",e=>this._onClose("transport close",e))}onOpen(){this.readyState="open",xt.priorWebsocketSuccess="websocket"===this.transport.name,this.emitReserved("open"),this.flush()}_onPacket(e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data)}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),"closed"!==this.readyState&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,0===this.writeBuffer.length?this.emitReserved("drain"):this.flush()}flush(){if("closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&"polling"===this.transport.name&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let t=0;t<this.writeBuffer.length;t++){const n=this.writeBuffer[t].data;if(n&&(e+=Je(n)),t>0&&e>this._maxPayload)return this.writeBuffer.slice(0,t);e+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Ye(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,t,n){return this._sendPacket("message",e,t,n),this}send(e,t,n){return this._sendPacket("message",e,t,n),this}_sendPacket(e,t,n,r){if("function"===typeof t&&(r=t,t=void 0),"function"===typeof n&&(r=n,n=null),"closing"===this.readyState||"closed"===this.readyState)return;(n=n||{}).compress=!1!==n.compress;const i={type:e,data:t,options:n};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),r&&this.once("flush",r),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return"opening"!==this.readyState&&"open"!==this.readyState||(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(e){if(xt.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&"opening"===this.readyState)return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),yt&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const e=bt.indexOf(this._offlineEventListener);-1!==e&&bt.splice(e,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}}xt.protocol=4;class wt extends xt{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),"open"===this.readyState&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let t=this.createTransport(e),n=!1;xt.priorWebsocketSuccess=!1;const r=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",e=>{if(!n)if("pong"===e.type&&"probe"===e.data){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;xt.priorWebsocketSuccess="websocket"===t.name,this.transport.pause(()=>{n||"closed"!==this.readyState&&(u(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const e=new Error("probe error");e.transport=t.name,this.emitReserved("upgradeError",e)}}))};function i(){n||(n=!0,u(),t.close(),t=null)}const o=e=>{const n=new Error("probe error: "+e);n.transport=t.name,i(),this.emitReserved("upgradeError",n)};function a(){o("transport closed")}function s(){o("socket closed")}function l(e){t&&e.name!==t.name&&i()}const u=()=>{t.removeListener("open",r),t.removeListener("error",o),t.removeListener("close",a),this.off("close",s),this.off("upgrading",l)};t.once("open",r),t.once("error",o),t.once("close",a),this.once("close",s),this.once("upgrading",l),-1!==this._upgrades.indexOf("webtransport")&&"webtransport"!==e?this.setTimeoutFn(()=>{n||t.open()},200):t.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const t=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}}class _t extends wt{constructor(e){const t="object"===typeof e?e:arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(!t.transports||t.transports&&"string"===typeof t.transports[0])&&(t.transports=(t.transports||["polling","websocket","webtransport"]).map(e=>ht[e]).filter(e=>!!e)),super(e,t)}}const kt="function"===typeof ArrayBuffer,St=Object.prototype.toString,Et="function"===typeof Blob||"undefined"!==typeof Blob&&"[object BlobConstructor]"===St.call(Blob),Ct="function"===typeof File||"undefined"!==typeof File&&"[object FileConstructor]"===St.call(File);function jt(e){return kt&&(e instanceof ArrayBuffer||(e=>"function"===typeof ArrayBuffer.isView?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer)(e))||Et&&e instanceof Blob||Ct&&e instanceof File}function Tt(e,t){if(!e||"object"!==typeof e)return!1;if(Array.isArray(e)){for(let t=0,n=e.length;t<n;t++)if(Tt(e[t]))return!0;return!1}if(jt(e))return!0;if(e.toJSON&&"function"===typeof e.toJSON&&1===arguments.length)return Tt(e.toJSON(),!0);for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&Tt(e[n]))return!0;return!1}function Rt(e){const t=[],n=e.data,r=e;return r.data=Ot(n,t),r.attachments=t.length,{packet:r,buffers:t}}function Ot(e,t){if(!e)return e;if(jt(e)){const n={_placeholder:!0,num:t.length};return t.push(e),n}if(Array.isArray(e)){const n=new Array(e.length);for(let r=0;r<e.length;r++)n[r]=Ot(e[r],t);return n}if("object"===typeof e&&!(e instanceof Date)){const n={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=Ot(e[r],t));return n}return e}function Pt(e,t){return e.data=Nt(e.data,t),delete e.attachments,e}function Nt(e,t){if(!e)return e;if(e&&!0===e._placeholder){if("number"===typeof e.num&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}if(Array.isArray(e))for(let n=0;n<e.length;n++)e[n]=Nt(e[n],t);else if("object"===typeof e)for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(e[n]=Nt(e[n],t));return e}const zt=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],At=5;var Lt;!function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"}(Lt||(Lt={}));class $t{constructor(e){this.replacer=e}encode(e){return e.type!==Lt.EVENT&&e.type!==Lt.ACK||!Tt(e)?[this.encodeAsString(e)]:this.encodeAsBinary({type:e.type===Lt.EVENT?Lt.BINARY_EVENT:Lt.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id})}encodeAsString(e){let t=""+e.type;return e.type!==Lt.BINARY_EVENT&&e.type!==Lt.BINARY_ACK||(t+=e.attachments+"-"),e.nsp&&"/"!==e.nsp&&(t+=e.nsp+","),null!=e.id&&(t+=e.id),null!=e.data&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=Rt(e),n=this.encodeAsString(t.packet),r=t.buffers;return r.unshift(n),r}}function Dt(e){return"[object Object]"===Object.prototype.toString.call(e)}class Mt extends Ve{constructor(e){super(),this.reviver=e}add(e){let t;if("string"===typeof e){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const n=t.type===Lt.BINARY_EVENT;n||t.type===Lt.BINARY_ACK?(t.type=n?Lt.EVENT:Lt.ACK,this.reconstructor=new It(t),0===t.attachments&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else{if(!jt(e)&&!e.base64)throw new Error("Unknown type: "+e);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t))}}decodeString(e){let t=0;const n={type:Number(e.charAt(0))};if(void 0===Lt[n.type])throw new Error("unknown packet type "+n.type);if(n.type===Lt.BINARY_EVENT||n.type===Lt.BINARY_ACK){const r=t+1;for(;"-"!==e.charAt(++t)&&t!=e.length;);const i=e.substring(r,t);if(i!=Number(i)||"-"!==e.charAt(t))throw new Error("Illegal attachments");n.attachments=Number(i)}if("/"===e.charAt(t+1)){const r=t+1;for(;++t;){if(","===e.charAt(t))break;if(t===e.length)break}n.nsp=e.substring(r,t)}else n.nsp="/";const r=e.charAt(t+1);if(""!==r&&Number(r)==r){const r=t+1;for(;++t;){const n=e.charAt(t);if(null==n||Number(n)!=n){--t;break}if(t===e.length)break}n.id=Number(e.substring(r,t+1))}if(e.charAt(++t)){const r=this.tryParse(e.substr(t));if(!Mt.isPayloadValid(n.type,r))throw new Error("invalid payload");n.data=r}return n}tryParse(e){try{return JSON.parse(e,this.reviver)}catch(ip){return!1}}static isPayloadValid(e,t){switch(e){case Lt.CONNECT:return Dt(t);case Lt.DISCONNECT:return void 0===t;case Lt.CONNECT_ERROR:return"string"===typeof t||Dt(t);case Lt.EVENT:case Lt.BINARY_EVENT:return Array.isArray(t)&&("number"===typeof t[0]||"string"===typeof t[0]&&-1===zt.indexOf(t[0]));case Lt.ACK:case Lt.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class It{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const e=Pt(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Ft(e,t,n){return e.on(t,n),function(){e.off(t,n)}}const Ut=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Bt extends Ve{constructor(e,t,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Ft(e,"open",this.onopen.bind(this)),Ft(e,"packet",this.onpacket.bind(this)),Ft(e,"error",this.onerror.bind(this)),Ft(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected||(this.subEvents(),this.io._reconnecting||this.io.open(),"open"===this.io._readyState&&this.onopen()),this}open(){return this.connect()}send(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.unshift("message"),this.emit.apply(this,t),this}emit(e){var t,n,r;if(Ut.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');for(var i=arguments.length,o=new Array(i>1?i-1:0),a=1;a<i;a++)o[a-1]=arguments[a];if(o.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(o),this;const s={type:Lt.EVENT,data:o,options:{}};if(s.options.compress=!1!==this.flags.compress,"function"===typeof o[o.length-1]){const e=this.ids++,t=o.pop();this._registerAckCallback(e,t),s.id=e}const l=null===(n=null===(t=this.io.engine)||void 0===t?void 0:t.transport)||void 0===n?void 0:n.writable,u=this.connected&&!(null===(r=this.io.engine)||void 0===r?void 0:r._hasPingExpired());return this.flags.volatile&&!l||(u?(this.notifyOutgoingListeners(s),this.packet(s)):this.sendBuffer.push(s)),this.flags={},this}_registerAckCallback(e,t){var n,r=this;const i=null!==(n=this.flags.timeout)&&void 0!==n?n:this._opts.ackTimeout;if(void 0===i)return void(this.acks[e]=t);const o=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let t=0;t<this.sendBuffer.length;t++)this.sendBuffer[t].id===e&&this.sendBuffer.splice(t,1);t.call(this,new Error("operation has timed out"))},i),a=function(){r.io.clearTimeoutFn(o);for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];t.apply(r,n)};a.withError=!0,this.acks[e]=a}emitWithAck(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Promise((t,r)=>{const i=(e,n)=>e?r(e):t(n);i.withError=!0,n.push(i),this.emit(e,...n)})}_addToQueue(e){var t=this;let n;"function"===typeof e[e.length-1]&&(n=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push(function(e){if(r!==t._queue[0])return;if(null!==e)r.tryCount>t._opts.retries&&(t._queue.shift(),n&&n(e));else if(t._queue.shift(),n){for(var i=arguments.length,o=new Array(i>1?i-1:0),a=1;a<i;a++)o[a-1]=arguments[a];n(null,...o)}return r.pending=!1,t._drainQueue()}),this._queue.push(r),this._drainQueue()}_drainQueue(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.connected||0===this._queue.length)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){"function"==typeof this.auth?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:Lt.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(t=>String(t.id)===e)){const t=this.acks[e];delete this.acks[e],t.withError&&t.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case Lt.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Lt.EVENT:case Lt.BINARY_EVENT:this.onevent(e);break;case Lt.ACK:case Lt.BINARY_ACK:this.onack(e);break;case Lt.DISCONNECT:this.ondisconnect();break;case Lt.CONNECT_ERROR:this.destroy();const t=new Error(e.data.message);t.data=e.data.data,this.emitReserved("connect_error",t)}}onevent(e){const t=e.data||[];null!=e.id&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const n of t)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&"string"===typeof e[e.length-1]&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let n=!1;return function(){if(!n){n=!0;for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];t.packet({type:Lt.ACK,id:e,data:i})}}}onack(e){const t=this.acks[e.id];"function"===typeof t&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Lt.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const n of t)n.apply(this,e.data)}}}function Wt(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}Wt.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),n=Math.floor(t*this.jitter*e);e=0==(1&Math.floor(10*t))?e-n:e+n}return 0|Math.min(e,this.max)},Wt.prototype.reset=function(){this.attempts=0},Wt.prototype.setMin=function(e){this.ms=e},Wt.prototype.setMax=function(e){this.max=e},Wt.prototype.setJitter=function(e){this.jitter=e};class Ht extends Ve{constructor(t,n){var r;super(),this.nsps={},this.subs=[],t&&"object"===typeof t&&(n=t,t=void 0),(n=n||{}).path=n.path||"/socket.io",this.opts=n,Ge(this,n),this.reconnection(!1!==n.reconnection),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor(null!==(r=n.randomizationFactor)&&void 0!==r?r:.5),this.backoff=new Wt({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==n.timeout?2e4:n.timeout),this._readyState="closed",this.uri=t;const i=n.parser||e;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=!1!==n.autoConnect,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return void 0===e?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return void 0===e?this._reconnectionDelay:(this._reconnectionDelay=e,null===(t=this.backoff)||void 0===t||t.setMin(e),this)}randomizationFactor(e){var t;return void 0===e?this._randomizationFactor:(this._randomizationFactor=e,null===(t=this.backoff)||void 0===t||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return void 0===e?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,null===(t=this.backoff)||void 0===t||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new _t(this.uri,this.opts);const t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const r=Ft(t,"open",function(){n.onopen(),e&&e()}),i=t=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",t),e?e(t):this.maybeReconnectOnOpen()},o=Ft(t,"error",i);if(!1!==this._timeout){const e=this._timeout,n=this.setTimeoutFn(()=>{r(),i(new Error("timeout")),t.close()},e);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}return this.subs.push(r),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Ft(e,"ping",this.onping.bind(this)),Ft(e,"data",this.ondata.bind(this)),Ft(e,"error",this.onerror.bind(this)),Ft(e,"close",this.onclose.bind(this)),Ft(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(ip){this.onclose("parse error",ip)}}ondecoded(e){Ye(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new Bt(this,e,t),this.nsps[e]=n),n}_destroy(e){const t=Object.keys(this.nsps);for(const n of t){if(this.nsps[n].active)return}this._close()}_packet(e){const t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var n;this.cleanup(),null===(n=this.engine)||void 0===n||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),e.skipReconnect||e.open(t=>{t?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",t)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Vt={};function Yt(e,t){"object"===typeof e&&(t=e,e=void 0);const n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=e;n=n||"undefined"!==typeof location&&location,null==e&&(e=n.protocol+"//"+n.host),"string"===typeof e&&("/"===e.charAt(0)&&(e="/"===e.charAt(1)?n.protocol+e:n.host+e),/^(https?|wss?):\/\//.test(e)||(e="undefined"!==typeof n?n.protocol+"//"+e:"https://"+e),r=vt(e)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const i=-1!==r.host.indexOf(":")?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+i+":"+r.port+t,r.href=r.protocol+"://"+i+(n&&n.port===r.port?"":":"+r.port),r}(e,(t=t||{}).path||"/socket.io"),r=n.source,i=n.id,o=n.path,a=Vt[i]&&o in Vt[i].nsps;let s;return t.forceNew||t["force new connection"]||!1===t.multiplex||a?s=new Ht(r,t):(Vt[i]||(Vt[i]=new Ht(r,t)),s=Vt[i]),n.query&&!t.query&&(t.query=n.queryKey),s.socket(n.path,t)}Object.assign(Yt,{Manager:Ht,Socket:Bt,io:Yt,connect:Yt});var qt=n(579);const Kt=(0,r.createContext)(),Qt={socket:null,isConnected:!1,player:null,playerId:null,currentRoom:null,availableRooms:[],currentView:"welcome",loading:!1,error:null,messages:[],gameState:null,stormResults:null};function Xt(e,t){var n;switch(t.type){case"SET_SOCKET":return{...e,socket:t.payload};case"SET_CONNECTED":return{...e,isConnected:t.payload};case"SET_PLAYER":return{...e,player:t.payload,playerId:(null===(n=t.payload)||void 0===n?void 0:n.id)||null};case"SET_CURRENT_VIEW":return{...e,currentView:t.payload};case"SET_LOADING":return{...e,loading:t.payload};case"SET_ERROR":return{...e,error:t.payload};case"SET_AVAILABLE_ROOMS":return{...e,availableRooms:t.payload};case"SET_CURRENT_ROOM":return{...e,currentRoom:t.payload};case"UPDATE_ROOM":return{...e,currentRoom:e.currentRoom?{...e.currentRoom,...t.payload}:null};case"UPDATE_ROOM_WITH_PLAYER_DATA":const r=t.payload,i=r.myPlayerData,{myPlayerData:o,...a}=r;return{...e,currentRoom:e.currentRoom?{...e.currentRoom,...a}:null,player:i?{...e.player,...i}:e.player};case"ADD_MESSAGE":return{...e,messages:[...e.messages,t.payload]};case"CLEAR_MESSAGES":return{...e,messages:[]};case"SET_GAME_STATE":return{...e,gameState:t.payload};case"STORM_STAGE_COMPLETE":return{...e,stormResults:t.payload.results,currentRoom:e.currentRoom?{...e.currentRoom,...t.payload.room}:null};case"RESET_GAME":return{...e,currentRoom:null,messages:[],gameState:null,currentView:"lobby"};default:return e}}function Gt(e){let{children:t}=e;const[n,i]=(0,r.useReducer)(Xt,Qt);(0,r.useEffect)(()=>{const e=Yt("http://localhost:3501",{transports:["websocket"],upgrade:!1});return i({type:"SET_SOCKET",payload:e}),e.on("connect",()=>{console.log("Connected to server"),i({type:"SET_CONNECTED",payload:!0})}),e.on("disconnect",()=>{console.log("Disconnected from server"),i({type:"SET_CONNECTED",payload:!1})}),e.on("lobby-joined",e=>{i({type:"SET_PLAYER",payload:e.player}),i({type:"SET_CURRENT_VIEW",payload:"lobby"}),i({type:"SET_LOADING",payload:!1})}),e.on("room-list-updated",e=>{i({type:"SET_AVAILABLE_ROOMS",payload:e})}),e.on("room-created",e=>{i({type:"SET_CURRENT_ROOM",payload:e.room}),i({type:"SET_CURRENT_VIEW",payload:"room"}),i({type:"SET_LOADING",payload:!1})}),e.on("room-joined",e=>{i({type:"SET_CURRENT_ROOM",payload:e.room}),i({type:"SET_CURRENT_VIEW",payload:"room"}),i({type:"SET_LOADING",payload:!1})}),e.on("room-updated",e=>{i({type:"UPDATE_ROOM",payload:e.room})}),e.on("player-joined",e=>{i({type:"UPDATE_ROOM",payload:e.room})}),e.on("player-left",e=>{i({type:"UPDATE_ROOM",payload:e.room})}),e.on("player-updated",e=>{i({type:"UPDATE_ROOM",payload:e.room})}),e.on("chat-message",e=>{i({type:"ADD_MESSAGE",payload:e})}),e.on("game-started",e=>{i({type:"UPDATE_ROOM",payload:e.room}),i({type:"SET_CURRENT_VIEW",payload:"game"})}),e.on("dealer-card-selected",e=>{i({type:"UPDATE_ROOM",payload:e.room})}),e.on("dealer-determined",e=>{i({type:"UPDATE_ROOM",payload:e.room})}),e.on("storm-started",e=>{i({type:"UPDATE_ROOM_WITH_PLAYER_DATA",payload:e.room}),setTimeout(()=>{i({type:"CLEAR_ANIMATIONS"})},2e3)}),e.on("card-played",e=>{console.log("\ud83d\udce5 Received card-played event:",e),i({type:"UPDATE_ROOM_WITH_PLAYER_DATA",payload:e.room})}),e.on("cards-drawn",e=>{console.log("\ud83d\udce5 Received cards-drawn event:",e),i({type:"UPDATE_ROOM_WITH_PLAYER_DATA",payload:e.room})}),e.on("storm-stage-complete",e=>{console.log("\ud83c\udfaf Storm stage complete:",e),i({type:"STORM_STAGE_COMPLETE",payload:e})}),e.on("player-finished-storm",e=>{console.log("\ud83c\udfc6 Player finished Storm:",e),i({type:"UPDATE_ROOM",payload:e.room})}),e.on("stage-advanced",e=>{console.log("\ud83c\udfaf Stage advanced:",e),i({type:"UPDATE_ROOM_WITH_PLAYER_DATA",payload:e})}),e.on("lane-selected",e=>{console.log("\ud83c\udfc1 Lane selected:",e),i({type:"UPDATE_ROOM",payload:e.room})}),e.on("lane-selection-complete",e=>{console.log("\ud83c\udfc1 Lane selection complete:",e),i({type:"UPDATE_ROOM",payload:e.room})}),e.on("coin-placed",e=>{console.log("\ud83e\ude99 Coin placed:",e),i({type:"UPDATE_ROOM",payload:e.room})}),e.on("coin-stage-complete",e=>{console.log("\ud83e\ude99 Coin stage complete:",e),i({type:"UPDATE_ROOM",payload:e.room})}),e.on("dice-rolled",e=>{console.log("\ud83c\udfb2 Dice rolled:",e),i({type:"UPDATE_ROOM_WITH_PLAYER_DATA",payload:e.room})}),e.on("player-moved",e=>{console.log("\ud83d\ude97 Player moved:",e),i({type:"UPDATE_ROOM",payload:e.room})}),e.on("player-finished-race",e=>{console.log("\ud83c\udfc1 Player finished race:",e),i({type:"UPDATE_ROOM",payload:e.room})}),e.on("race-round-complete",e=>{console.log("\ud83c\udfc6 Race round complete:",e),i({type:"UPDATE_ROOM",payload:e.room})}),e.on("stage-advanced",e=>{console.log("\ud83d\udcc8 Stage advanced:",e),i({type:"UPDATE_ROOM",payload:e.room})}),e.on("error",e=>{i({type:"SET_ERROR",payload:e.message}),i({type:"SET_LOADING",payload:!1})}),()=>{e.disconnect()}},[]);const o={joinLobby:e=>{n.socket&&(i({type:"SET_LOADING",payload:!0}),n.socket.emit("join-lobby",{name:e}))},createRoom:(e,t)=>{n.socket&&(i({type:"SET_LOADING",payload:!0}),n.socket.emit("create-room",{name:e,settings:t}))},joinRoom:e=>{n.socket&&(i({type:"SET_LOADING",payload:!0}),n.socket.emit("join-room",{roomId:e}))},leaveRoom:()=>{n.socket&&(n.socket.emit("leave-room"),i({type:"RESET_GAME"}))},sendRoomMessage:e=>{n.socket&&e.trim()&&n.socket.emit("room-chat",{message:e.trim()})},sendPrivateMessage:(e,t)=>{n.socket&&t.trim()&&n.socket.emit("private-message",{targetPlayerId:e,message:t.trim()})},changeColor:e=>{n.socket&&n.socket.emit("change-color",{color:e})},startGame:()=>{n.socket&&n.socket.emit("start-game")},selectDealerCard:e=>{n.socket&&n.socket.emit("select-dealer-card",{cardIndex:e})},updateSettings:e=>{n.socket&&n.socket.emit("update-settings",e)},clearError:()=>{i({type:"SET_ERROR",payload:null})},setCurrentView:e=>{i({type:"SET_CURRENT_VIEW",payload:e})},drawCards:()=>{console.log("\ud83c\udfb2 Client: Attempting to draw cards"),n.socket&&n.socket.emit("draw-cards",{})},playCard:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;console.log("\ud83c\udccf Client: Attempting to play card:",e,t),n.socket&&n.socket.emit("play-card",{cardId:e,calledSuit:t})},continueToNextStage:()=>{console.log("\ud83c\udfaf Client: Continuing to next stage"),n.socket&&(n.socket.emit("continue-to-next-stage"),i({type:"STORM_STAGE_COMPLETE",payload:{results:null}}))},placeCoin:(e,t,r)=>{console.log("\ud83e\ude99 Client: Attempting to place coin:",e,"at position:",t,"lane:",r),n.socket&&n.socket.emit("place-coin",{coinId:e,position:t,lane:r})},continueToRacing:()=>{console.log("\ud83c\udfc1 Client: Continue to racing stage"),n.socket&&n.socket.emit("continue-to-racing",{})},rollDice:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"movement";console.log("\ud83c\udfb2 Client: Rolling dice:",e),n.socket&&n.socket.emit("roll-dice",{diceType:e})},chooseMovement:e=>{console.log("\ud83d\ude97 Client: Choosing movement:",e),n.socket&&n.socket.emit("choose-movement",e)},selectLane:e=>{console.log("\ud83d\udee3\ufe0f Client: Selecting lane:",e),n.socket&&n.socket.emit("select-lane",{laneId:e})}},a={...n,...o};return(0,qt.jsx)(Kt.Provider,{value:a,children:t})}function Jt(){const e=(0,r.useContext)(Kt);if(!e)throw new Error("useGame must be used within a GameProvider");return e}var Zt=function(){return Zt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Zt.apply(this,arguments)};Object.create;function en(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var tn=n(324),nn=n.n(tn),rn="-ms-",on="-moz-",an="-webkit-",sn="comm",ln="rule",un="decl",cn="@keyframes",dn=Math.abs,fn=String.fromCharCode,pn=Object.assign;function hn(e){return e.trim()}function gn(e,t){return(e=t.exec(e))?e[0]:e}function mn(e,t,n){return e.replace(t,n)}function vn(e,t,n){return e.indexOf(t,n)}function yn(e,t){return 0|e.charCodeAt(t)}function bn(e,t,n){return e.slice(t,n)}function xn(e){return e.length}function wn(e){return e.length}function _n(e,t){return t.push(e),e}function kn(e,t){return e.filter(function(e){return!gn(e,t)})}var Sn=1,En=1,Cn=0,jn=0,Tn=0,Rn="";function On(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Sn,column:En,length:a,return:"",siblings:s}}function Pn(e,t){return pn(On("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Nn(e){for(;e.root;)e=Pn(e.root,{children:[e]});_n(e,e.siblings)}function zn(){return Tn=jn>0?yn(Rn,--jn):0,En--,10===Tn&&(En=1,Sn--),Tn}function An(){return Tn=jn<Cn?yn(Rn,jn++):0,En++,10===Tn&&(En=1,Sn++),Tn}function Ln(){return yn(Rn,jn)}function $n(){return jn}function Dn(e,t){return bn(Rn,e,t)}function Mn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function In(e){return Sn=En=1,Cn=xn(Rn=e),jn=0,[]}function Fn(e){return Rn="",e}function Un(e){return hn(Dn(jn-1,Hn(91===e?e+2:40===e?e+1:e)))}function Bn(e){for(;(Tn=Ln())&&Tn<33;)An();return Mn(e)>2||Mn(Tn)>3?"":" "}function Wn(e,t){for(;--t&&An()&&!(Tn<48||Tn>102||Tn>57&&Tn<65||Tn>70&&Tn<97););return Dn(e,$n()+(t<6&&32==Ln()&&32==An()))}function Hn(e){for(;An();)switch(Tn){case e:return jn;case 34:case 39:34!==e&&39!==e&&Hn(Tn);break;case 40:41===e&&Hn(e);break;case 92:An()}return jn}function Vn(e,t){for(;An()&&e+Tn!==57&&(e+Tn!==84||47!==Ln()););return"/*"+Dn(t,jn-1)+"*"+fn(47===e?e:An())}function Yn(e){for(;!Mn(Ln());)An();return Dn(e,jn)}function qn(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Kn(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case un:return e.return=e.return||e.value;case sn:return"";case cn:return e.return=e.value+"{"+qn(e.children,r)+"}";case ln:if(!xn(e.value=e.props.join(",")))return""}return xn(n=qn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Qn(e,t,n){switch(function(e,t){return 45^yn(e,0)?(((t<<2^yn(e,0))<<2^yn(e,1))<<2^yn(e,2))<<2^yn(e,3):0}(e,t)){case 5103:return an+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return an+e+e;case 4789:return on+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return an+e+on+e+rn+e+e;case 5936:switch(yn(e,t+11)){case 114:return an+e+rn+mn(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return an+e+rn+mn(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return an+e+rn+mn(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return an+e+rn+e+e;case 6165:return an+e+rn+"flex-"+e+e;case 5187:return an+e+mn(e,/(\w+).+(:[^]+)/,an+"box-$1$2"+rn+"flex-$1$2")+e;case 5443:return an+e+rn+"flex-item-"+mn(e,/flex-|-self/g,"")+(gn(e,/flex-|baseline/)?"":rn+"grid-row-"+mn(e,/flex-|-self/g,""))+e;case 4675:return an+e+rn+"flex-line-pack"+mn(e,/align-content|flex-|-self/g,"")+e;case 5548:return an+e+rn+mn(e,"shrink","negative")+e;case 5292:return an+e+rn+mn(e,"basis","preferred-size")+e;case 6060:return an+"box-"+mn(e,"-grow","")+an+e+rn+mn(e,"grow","positive")+e;case 4554:return an+mn(e,/([^-])(transform)/g,"$1"+an+"$2")+e;case 6187:return mn(mn(mn(e,/(zoom-|grab)/,an+"$1"),/(image-set)/,an+"$1"),e,"")+e;case 5495:case 3959:return mn(e,/(image-set\([^]*)/,an+"$1$`$1");case 4968:return mn(mn(e,/(.+:)(flex-)?(.*)/,an+"box-pack:$3"+rn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+an+e+e;case 4200:if(!gn(e,/flex-|baseline/))return rn+"grid-column-align"+bn(e,t)+e;break;case 2592:case 3360:return rn+mn(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,gn(e.props,/grid-\w+-end/)})?~vn(e+(n=n[t].value),"span",0)?e:rn+mn(e,"-start","")+e+rn+"grid-row-span:"+(~vn(n,"span",0)?gn(n,/\d+/):+gn(n,/\d+/)-+gn(e,/\d+/))+";":rn+mn(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return gn(e.props,/grid-\w+-start/)})?e:rn+mn(mn(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return mn(e,/(.+)-inline(.+)/,an+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xn(e)-1-t>6)switch(yn(e,t+1)){case 109:if(45!==yn(e,t+4))break;case 102:return mn(e,/(.+:)(.+)-([^]+)/,"$1"+an+"$2-$3$1"+on+(108==yn(e,t+3)?"$3":"$2-$3"))+e;case 115:return~vn(e,"stretch",0)?Qn(mn(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return mn(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,o,a,s){return rn+n+":"+r+s+(i?rn+n+"-span:"+(o?a:+a-+r)+s:"")+e});case 4949:if(121===yn(e,t+6))return mn(e,":",":"+an)+e;break;case 6444:switch(yn(e,45===yn(e,14)?18:11)){case 120:return mn(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+an+(45===yn(e,14)?"inline-":"")+"box$3$1"+an+"$2$3$1"+rn+"$2box$3")+e;case 100:return mn(e,":",":"+rn)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return mn(e,"scroll-","scroll-snap-")+e}return e}function Xn(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case un:return void(e.return=Qn(e.value,e.length,n));case cn:return qn([Pn(e,{value:mn(e.value,"@","@"+an)})],r);case ln:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(gn(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Nn(Pn(e,{props:[mn(t,/:(read-\w+)/,":-moz-$1")]})),Nn(Pn(e,{props:[t]})),pn(e,{props:kn(n,r)});break;case"::placeholder":Nn(Pn(e,{props:[mn(t,/:(plac\w+)/,":"+an+"input-$1")]})),Nn(Pn(e,{props:[mn(t,/:(plac\w+)/,":-moz-$1")]})),Nn(Pn(e,{props:[mn(t,/:(plac\w+)/,rn+"input-$1")]})),Nn(Pn(e,{props:[t]})),pn(e,{props:kn(n,r)})}return""})}}function Gn(e){return Fn(Jn("",null,null,null,[""],e=In(e),0,[0],e))}function Jn(e,t,n,r,i,o,a,s,l){for(var u=0,c=0,d=a,f=0,p=0,h=0,g=1,m=1,v=1,y=0,b="",x=i,w=o,_=r,k=b;m;)switch(h=y,y=An()){case 40:if(108!=h&&58==yn(k,d-1)){-1!=vn(k+=mn(Un(y),"&","&\f"),"&\f",dn(u?s[u-1]:0))&&(v=-1);break}case 34:case 39:case 91:k+=Un(y);break;case 9:case 10:case 13:case 32:k+=Bn(h);break;case 92:k+=Wn($n()-1,7);continue;case 47:switch(Ln()){case 42:case 47:_n(er(Vn(An(),$n()),t,n,l),l);break;default:k+="/"}break;case 123*g:s[u++]=xn(k)*v;case 125*g:case 59:case 0:switch(y){case 0:case 125:m=0;case 59+c:-1==v&&(k=mn(k,/\f/g,"")),p>0&&xn(k)-d&&_n(p>32?tr(k+";",r,n,d-1,l):tr(mn(k," ","")+";",r,n,d-2,l),l);break;case 59:k+=";";default:if(_n(_=Zn(k,t,n,u,c,i,s,b,x=[],w=[],d,o),o),123===y)if(0===c)Jn(k,t,_,_,x,o,d,s,w);else switch(99===f&&110===yn(k,3)?100:f){case 100:case 108:case 109:case 115:Jn(e,_,_,r&&_n(Zn(e,_,_,0,0,i,s,b,i,x=[],d,w),w),i,w,d,s,r?x:w);break;default:Jn(k,_,_,_,[""],w,0,s,w)}}u=c=p=0,g=v=1,b=k="",d=a;break;case 58:d=1+xn(k),p=h;default:if(g<1)if(123==y)--g;else if(125==y&&0==g++&&125==zn())continue;switch(k+=fn(y),y*g){case 38:v=c>0?1:(k+="\f",-1);break;case 44:s[u++]=(xn(k)-1)*v,v=1;break;case 64:45===Ln()&&(k+=Un(An())),f=Ln(),c=d=xn(b=k+=Yn($n())),y++;break;case 45:45===h&&2==xn(k)&&(g=0)}}return o}function Zn(e,t,n,r,i,o,a,s,l,u,c,d){for(var f=i-1,p=0===i?o:[""],h=wn(p),g=0,m=0,v=0;g<r;++g)for(var y=0,b=bn(e,f+1,f=dn(m=a[g])),x=e;y<h;++y)(x=hn(m>0?p[y]+" "+b:mn(b,/&\f/g,p[y])))&&(l[v++]=x);return On(e,t,n,0===i?ln:s,l,u,c,d)}function er(e,t,n,r){return On(e,t,n,sn,fn(Tn),bn(e,2,-2),0,r)}function tr(e,t,n,r,i){return On(e,t,n,un,bn(e,0,r),bn(e,r+1,-1),r,i)}var nr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},rr="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",ir="active",or="data-styled-version",ar="6.1.19",sr="/*!sc*/\n",lr="undefined"!=typeof window&&"undefined"!=typeof document,ur=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),cr=(new Set,Object.freeze([])),dr=Object.freeze({});function fr(e,t,n){return void 0===n&&(n=dr),e.theme!==n.theme&&e.theme||t||n.theme}var pr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,gr=/(^-|-$)/g;function mr(e){return e.replace(hr,"-").replace(gr,"")}var vr=/(a)(d)/gi,yr=function(e){return String.fromCharCode(e+(e>25?39:97))};function br(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=yr(t%52)+n;return(yr(t%52)+n).replace(vr,"$1-$2")}var xr,wr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},_r=function(e){return wr(5381,e)};function kr(e){return br(_r(e)>>>0)}function Sr(e){return e.displayName||e.name||"Component"}function Er(e){return"string"==typeof e&&!0}var Cr="function"==typeof Symbol&&Symbol.for,jr=Cr?Symbol.for("react.memo"):60115,Tr=Cr?Symbol.for("react.forward_ref"):60112,Rr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Or={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Pr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Nr=((xr={})[Tr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xr[jr]=Pr,xr);function zr(e){return("type"in(t=e)&&t.type.$$typeof)===jr?Pr:"$$typeof"in e?Nr[e.$$typeof]:Rr;var t}var Ar=Object.defineProperty,Lr=Object.getOwnPropertyNames,$r=Object.getOwnPropertySymbols,Dr=Object.getOwnPropertyDescriptor,Mr=Object.getPrototypeOf,Ir=Object.prototype;function Fr(e,t,n){if("string"!=typeof t){if(Ir){var r=Mr(t);r&&r!==Ir&&Fr(e,r,n)}var i=Lr(t);$r&&(i=i.concat($r(t)));for(var o=zr(e),a=zr(t),s=0;s<i.length;++s){var l=i[s];if(!(l in Or||n&&n[l]||a&&l in a||o&&l in o)){var u=Dr(t,l);try{Ar(e,l,u)}catch(e){}}}}return e}function Ur(e){return"function"==typeof e}function Br(e){return"object"==typeof e&&"styledComponentId"in e}function Wr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Hr(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Vr(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Yr(e,t,n){if(void 0===n&&(n=!1),!n&&!Vr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Yr(e[r],t[r]);else if(Vr(t))for(var r in t)e[r]=Yr(e[r],t[r]);return e}function qr(e,t){Object.defineProperty(e,"toString",{value:t})}function Kr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Qr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw Kr(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var o=r;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=(o=0,t.length);o<s;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,o=r;o<i;o++)t+="".concat(this.tag.getRule(o)).concat(sr);return t},e}(),Xr=new Map,Gr=new Map,Jr=1,Zr=function(e){if(Xr.has(e))return Xr.get(e);for(;Gr.has(Jr);)Jr++;var t=Jr++;return Xr.set(e,t),Gr.set(t,e),t},ei=function(e,t){Jr=t+1,Xr.set(e,t),Gr.set(t,e)},ti="style[".concat(rr,"][").concat(or,'="').concat(ar,'"]'),ni=new RegExp("^".concat(rr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ri=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},ii=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(sr),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(ni);if(l){var u=0|parseInt(l[1],10),c=l[2];0!==u&&(ei(c,u),ri(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}},oi=function(e){for(var t=document.querySelectorAll(ti),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(rr)!==ir&&(ii(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function ai(){return n.nc}var si=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(rr,"]")));return t[t.length-1]}(n),o=void 0!==i?i.nextSibling:null;r.setAttribute(rr,ir),r.setAttribute(or,ar);var a=ai();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},li=function(){function e(e){this.element=si(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw Kr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),ui=function(){function e(e){this.element=si(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),ci=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),di=lr,fi={isServer:!lr,useCSSOMInjection:!ur},pi=function(){function e(e,t,n){void 0===e&&(e=dr),void 0===t&&(t={});var r=this;this.options=Zt(Zt({},fi),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&lr&&di&&(di=!1,oi(this)),qr(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return Gr.get(e)}(n);if(void 0===i)return"continue";var o=e.names.get(i),a=t.getGroup(n);if(void 0===o||!o.size||0===a.length)return"continue";var s="".concat(rr,".g").concat(n,'[id="').concat(i,'"]'),l="";void 0!==o&&o.forEach(function(e){e.length>0&&(l+="".concat(e,","))}),r+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat(sr)},o=0;o<n;o++)i(o);return r}(r)})}return e.registerId=function(e){return Zr(e)},e.prototype.rehydrate=function(){!this.server&&lr&&oi(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Zt(Zt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new ci(n):t?new li(n):new ui(n)}(this.options),new Qr(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Zr(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Zr(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Zr(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),hi=/&/g,gi=/^\s*\/\/.*$/gm;function mi(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=mi(e.children,t)),e})}function vi(e){var t,n,r,i=void 0===e?dr:e,o=i.options,a=void 0===o?dr:o,s=i.plugins,l=void 0===s?cr:s,u=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},c=l.slice();c.push(function(e){e.type===ln&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(hi,n).replace(r,u))}),a.prefix&&c.push(Xn),c.push(Kn);var d=function(e,i,o,s){void 0===i&&(i=""),void 0===o&&(o=""),void 0===s&&(s="&"),t=s,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(gi,""),u=Gn(o||i?"".concat(o," ").concat(i," { ").concat(l," }"):l);a.namespace&&(u=mi(u,a.namespace));var d,f=[];return qn(u,function(e){var t=wn(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=l.length?l.reduce(function(e,t){return t.name||Kr(15),wr(e,t.name)},5381).toString():"",d}var yi=new pi,bi=vi(),xi=r.createContext({shouldForwardProp:void 0,styleSheet:yi,stylis:bi}),wi=(xi.Consumer,r.createContext(void 0));function _i(){return(0,r.useContext)(xi)}function ki(e){var t=(0,r.useState)(e.stylisPlugins),n=t[0],i=t[1],o=_i().styleSheet,a=(0,r.useMemo)(function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,o]),s=(0,r.useMemo)(function(){return vi({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);(0,r.useEffect)(function(){nn()(n,e.stylisPlugins)||i(e.stylisPlugins)},[e.stylisPlugins]);var l=(0,r.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:s}},[e.shouldForwardProp,a,s]);return r.createElement(xi.Provider,{value:l},r.createElement(wi.Provider,{value:s},e.children))}var Si=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=bi);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,qr(this,function(){throw Kr(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=bi),this.name+e.hash},e}(),Ei=function(e){return e>="A"&&e<="Z"};function Ci(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Ei(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var ji=function(e){return null==e||!1===e||""===e},Ti=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!ji(o)&&(Array.isArray(o)&&o.isCss||Ur(o)?r.push("".concat(Ci(i),":"),o,";"):Vr(o)?r.push.apply(r,en(en(["".concat(i," {")],Ti(o),!1),["}"],!1)):r.push("".concat(Ci(i),": ").concat((t=i,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in nr||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ri(e,t,n,r){return ji(e)?[]:Br(e)?[".".concat(e.styledComponentId)]:Ur(e)?!Ur(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:Ri(e(t),t,n,r):e instanceof Si?n?(e.inject(n,r),[e.getName(r)]):[e]:Vr(e)?Ti(e):Array.isArray(e)?Array.prototype.concat.apply(cr,e.map(function(e){return Ri(e,t,n,r)})):[e.toString()];var i}function Oi(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ur(n)&&!Br(n))return!1}return!0}var Pi=_r(ar),Ni=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Oi(e),this.componentId=t,this.baseHash=wr(Pi,t),this.baseStyle=n,pi.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Wr(r,this.staticRulesId);else{var i=Hr(Ri(this.rules,e,t,n)),o=br(wr(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,o)){var a=n(i,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,a)}r=Wr(r,o),this.staticRulesId=o}else{for(var s=wr(this.baseHash,n.hash),l="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)l+=c;else if(c){var d=Hr(Ri(c,e,t,n));s=wr(s,d+u),l+=d}}if(l){var f=br(s>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(l,".".concat(f),void 0,this.componentId)),r=Wr(r,f)}}return r},e}(),zi=r.createContext(void 0);zi.Consumer;var Ai={};new Set;function Li(e,t,n){var i=Br(e),o=e,a=!Er(e),s=t.attrs,l=void 0===s?cr:s,u=t.componentId,c=void 0===u?function(e,t){var n="string"!=typeof e?"sc":mr(e);Ai[n]=(Ai[n]||0)+1;var r="".concat(n,"-").concat(kr(ar+n+Ai[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):u,d=t.displayName,f=void 0===d?function(e){return Er(e)?"styled.".concat(e):"Styled(".concat(Sr(e),")")}(e):d,p=t.displayName&&t.componentId?"".concat(mr(t.displayName),"-").concat(t.componentId):t.componentId||c,h=i&&o.attrs?o.attrs.concat(l).filter(Boolean):l,g=t.shouldForwardProp;if(i&&o.shouldForwardProp){var m=o.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;g=function(e,t){return m(e,t)&&v(e,t)}}else g=m}var y=new Ni(n,p,i?o.componentStyle:void 0);function b(e,t){return function(e,t,n){var i=e.attrs,o=e.componentStyle,a=e.defaultProps,s=e.foldedComponentIds,l=e.styledComponentId,u=e.target,c=r.useContext(zi),d=_i(),f=e.shouldForwardProp||d.shouldForwardProp,p=fr(t,c,a)||dr,h=function(e,t,n){for(var r,i=Zt(Zt({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var a=Ur(r=e[o])?r(i):r;for(var s in a)i[s]="className"===s?Wr(i[s],a[s]):"style"===s?Zt(Zt({},i[s]),a[s]):a[s]}return t.className&&(i.className=Wr(i.className,t.className)),i}(i,t,p),g=h.as||u,m={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v&&h.theme===p||("forwardedAs"===v?m.as=h.forwardedAs:f&&!f(v,g)||(m[v]=h[v]));var y=function(e,t){var n=_i();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,h),b=Wr(s,l);return y&&(b+=" "+y),h.className&&(b+=" "+h.className),m[Er(g)&&!pr.has(g)?"class":"className"]=b,n&&(m.ref=n),(0,r.createElement)(g,m)}(x,e,t)}b.displayName=f;var x=r.forwardRef(b);return x.attrs=h,x.componentStyle=y,x.displayName=f,x.shouldForwardProp=g,x.foldedComponentIds=i?Wr(o.foldedComponentIds,o.styledComponentId):"",x.styledComponentId=p,x.target=i?o.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)Yr(e,i[r],!0);return e}({},o.defaultProps,e):e}}),qr(x,function(){return".".concat(x.styledComponentId)}),a&&Fr(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function $i(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Di=function(e){return Object.assign(e,{isCss:!0})};function Mi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ur(e)||Vr(e))return Di(Ri($i(cr,en([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Ri(r):Di(Ri($i(r,t)))}function Ii(e,t,n){if(void 0===n&&(n=dr),!t)throw Kr(1,t);var r=function(r){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,Mi.apply(void 0,en([r],i,!1)))};return r.attrs=function(r){return Ii(e,t,Zt(Zt({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Ii(e,t,Zt(Zt({},n),r))},r}var Fi=function(e){return Ii(Li,e)},Ui=Fi;pr.forEach(function(e){Ui[e]=Fi(e)});!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Oi(e),pi.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var i=r(Hr(Ri(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&pi.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();function Bi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Hr(Mi.apply(void 0,en([e],t,!1))),i=kr(r);return new Si(i,r)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=ai(),r=Hr([n&&'nonce="'.concat(n,'"'),"".concat(rr,'="true"'),"".concat(or,'="').concat(ar,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Kr(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Kr(2);var n=e.instance.toString();if(!n)return[];var i=((t={})[rr]="",t[or]=ar,t.dangerouslySetInnerHTML={__html:n},t),o=ai();return o&&(i.nonce=o),[r.createElement("style",Zt({},i,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new pi({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Kr(2);return r.createElement(ki,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Kr(3)}})(),"__sc-".concat(rr,"__");const Wi=Bi`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,Hi=Bi`
  0%, 100% { text-shadow: 0 0 20px #00d4ff; }
  50% { text-shadow: 0 0 40px #00d4ff, 0 0 60px #00d4ff; }
`,Vi=Ui.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
  position: relative;
  overflow: hidden;
`,Yi=Ui.div`
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
`,qi=Ui.div`
  z-index: 1;
  text-align: center;
  animation: ${Wi} 1s ease-out;
`,Ki=Ui.h1`
  font-family: 'Orbitron', monospace;
  font-size: 4rem;
  font-weight: 900;
  color: #00d4ff;
  margin-bottom: 1rem;
  animation: ${Hi} 3s ease-in-out infinite;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Qi=Ui.h2`
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 3rem;
  opacity: 0.9;
`,Xi=Ui.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`,Gi=Ui.div`
  margin-bottom: 2rem;
  text-align: left;
`,Ji=Ui.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.1rem;
`,Zi=Ui.div`
  position: relative;
  width: 100%;
`,eo=Ui.ul`
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
`,to=Ui.li`
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
`,no=Ui.input`
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
`,ro=Ui.button`
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
`;const io=function(){const{joinLobby:e}=Jt(),[t,n]=(0,r.useState)(""),[i,o]=(0,r.useState)([]),[a,s]=(0,r.useState)(!1),l=(0,r.useRef)(null),u=(0,r.useRef)(null);(0,r.useEffect)(()=>{const e=localStorage.getItem("havoc-speedway-player-names");if(e)try{o(JSON.parse(e))}catch(ip){console.error("Error loading previous names:",ip)}},[]),(0,r.useEffect)(()=>{const e=e=>{u.current&&!u.current.contains(e.target)&&s(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const c=i.filter(e=>e.toLowerCase().includes(t.toLowerCase()));return(0,qt.jsxs)(Vi,{children:[(0,qt.jsx)(Yi,{}),(0,qt.jsxs)(qi,{children:[(0,qt.jsx)(Ki,{children:"HAVOC SPEEDWAY"}),(0,qt.jsx)(Qi,{children:"Multiplayer Racing Championship"}),(0,qt.jsx)(Xi,{children:(0,qt.jsxs)("form",{onSubmit:n=>{n.preventDefault(),t.trim()&&((e=>{const t=e.trim();if(!t)return;const n=[t,...i.filter(e=>e!==t)].slice(0,10);o(n),localStorage.setItem("havoc-speedway-player-names",JSON.stringify(n))})(t),e(t.trim()))},children:[(0,qt.jsxs)(Gi,{children:[(0,qt.jsx)(Ji,{children:"Enter Your Racing Name"}),(0,qt.jsxs)(Zi,{ref:u,children:[(0,qt.jsx)(no,{ref:l,type:"text",value:t,onChange:e=>{const t=e.target.value;n(t),s(t.length>0&&i.length>0)},onFocus:()=>{i.length>0&&s(!0)},placeholder:"Enter your name...",maxLength:20,required:!0}),a&&c.length>0&&(0,qt.jsx)(eo,{children:c.map((e,t)=>(0,qt.jsx)(to,{onClick:()=>(e=>{var t;n(e),s(!1),null===(t=l.current)||void 0===t||t.focus()})(e),children:e},t))})]})]}),(0,qt.jsx)(ro,{type:"submit",disabled:!t.trim(),children:"Join the Lobby"})]})})]})]})},oo=Ui.div`
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
`,ao=Ui.header`
  text-align: center;
  margin-bottom: 2rem;
`,so=Ui.h1`
  font-family: 'Orbitron', monospace;
  font-size: 2.5rem;
  color: #00d4ff;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 20px #00d4ff;
`,lo=Ui.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`,uo=Ui.span`
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
`,co=Ui.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,fo=Ui.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
`,po=Ui.h2`
  font-family: 'Orbitron', monospace;
  color: #00d4ff;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`,ho=Ui.button`
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
`,go=Ui.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 500px;
  overflow-y: auto;
`,mo=Ui.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-2px);
  }
`,vo=Ui.div`
  display: flex;
  justify-content: between;
  align-items: center;
  margin-bottom: 1rem;
`,yo=Ui.h3`
  color: white;
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.2rem;
  margin: 0;
  flex: 1;
`,bo=Ui.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${e=>"Waiting to start"===e.status?"#00ff88":"#ff8c00"};
  color: ${e=>"Waiting to start"===e.status?"#000":"#fff"};
`,xo=Ui.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`,wo=Ui.button`
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
`,_o=Ui.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  height: fit-content;
`,ko=Ui.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,So=Ui.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Eo=Ui.label`
  color: white;
  font-weight: 600;
`,Co=Ui.input`
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
`,jo=Ui.div`
  position: relative;
  width: 100%;
`,To=Ui.ul`
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
`,Ro=Ui.li`
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
`,Oo=Ui.select`
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
`,Po=Ui.button`
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
`,No=Ui.div`
  text-align: center;
  padding: 3rem;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
`;const zo=function(){const{player:e,availableRooms:t,createRoom:n,joinRoom:i}=Jt(),[o,a]=(0,r.useState)(!1),[s,l]=(0,r.useState)({roomName:"",numberOfLaps:3,numberOfDice:1,numberOfDecks:1,cardsPerHand:4,numberOfCoins:2}),[u,c]=(0,r.useState)([]),[d,f]=(0,r.useState)(!1),p=(0,r.useRef)(null),h=(0,r.useRef)(null);(0,r.useEffect)(()=>{const e=localStorage.getItem("havoc-speedway-room-names");if(e)try{c(JSON.parse(e))}catch(ip){console.error("Error loading previous room names:",ip)}},[]),(0,r.useEffect)(()=>{const e=e=>{h.current&&!h.current.contains(e.target)&&f(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const g=u.filter(e=>e.toLowerCase().includes(s.roomName.toLowerCase()));return(0,qt.jsxs)(oo,{children:[(0,qt.jsxs)(ao,{children:[(0,qt.jsx)(so,{children:"Race Lobby"}),(0,qt.jsx)(lo,{children:(0,qt.jsxs)(uo,{children:["Welcome, ",null===e||void 0===e?void 0:e.name,"!"]})})]}),(0,qt.jsxs)(co,{children:[(0,qt.jsxs)(fo,{children:[(0,qt.jsx)(po,{children:"Active Racing Rooms"}),0===t.length?(0,qt.jsx)(No,{children:"No active rooms. Create one to start racing!"}):(0,qt.jsx)(go,{children:t.map(e=>{var t;return(0,qt.jsxs)(mo,{children:[(0,qt.jsxs)(vo,{children:[(0,qt.jsx)(yo,{children:e.name}),(0,qt.jsx)(bo,{status:e.status,children:e.status})]}),(0,qt.jsxs)(xo,{children:[(0,qt.jsxs)("span",{children:["Host: ",e.hostName]}),(0,qt.jsxs)("span",{children:[e.playerCount,"/",e.maxPlayers," players"]}),(0,qt.jsxs)("span",{children:[(null===(t=e.settings)||void 0===t?void 0:t.numberOfLaps)||3," laps"]})]}),(0,qt.jsx)(wo,{onClick:()=>{return t=e.id,void i(t);var t},disabled:!e.canJoin,children:e.canJoin?"Join Race":"Room Full"})]},e.id)})})]}),(0,qt.jsxs)(_o,{children:[(0,qt.jsx)(po,{children:"Create New Room"}),o?(0,qt.jsxs)(ko,{onSubmit:e=>{e.preventDefault(),s.roomName.trim()&&((e=>{const t=e.trim();if(!t)return;const n=[t,...u.filter(e=>e!==t)].slice(0,10);c(n),localStorage.setItem("havoc-speedway-room-names",JSON.stringify(n))})(s.roomName),n(s.roomName.trim(),{numberOfLaps:parseInt(s.numberOfLaps),numberOfDice:parseInt(s.numberOfDice),numberOfDecks:parseInt(s.numberOfDecks),cardsPerHand:parseInt(s.cardsPerHand),numberOfCoins:parseInt(s.numberOfCoins)}),l({...s,roomName:""}),a(!1))},children:[(0,qt.jsxs)(So,{children:[(0,qt.jsx)(Eo,{children:"Room Name"}),(0,qt.jsxs)(jo,{ref:h,children:[(0,qt.jsx)(Co,{ref:p,type:"text",value:s.roomName,onChange:e=>{const t=e.target.value;l({...s,roomName:t}),f(t.length>0&&u.length>0)},onFocus:()=>{u.length>0&&f(!0)},placeholder:"Enter room name...",maxLength:30,required:!0}),d&&g.length>0&&(0,qt.jsx)(To,{children:g.map((e,t)=>(0,qt.jsx)(Ro,{onClick:()=>(e=>{var t;l({...s,roomName:e}),f(!1),null===(t=p.current)||void 0===t||t.focus()})(e),children:e},t))})]})]}),(0,qt.jsxs)(So,{children:[(0,qt.jsx)(Eo,{children:"Number of Laps"}),(0,qt.jsx)(Oo,{value:s.numberOfLaps,onChange:e=>l({...s,numberOfLaps:e.target.value}),children:[1,2,3,4,5].map(e=>(0,qt.jsxs)("option",{value:e,children:[e," lap",1!==e?"s":""]},e))})]}),(0,qt.jsxs)(So,{children:[(0,qt.jsx)(Eo,{children:"Movement Dice"}),(0,qt.jsxs)(Oo,{value:s.numberOfDice,onChange:e=>l({...s,numberOfDice:e.target.value}),children:[(0,qt.jsx)("option",{value:1,children:"1 die"}),(0,qt.jsx)("option",{value:2,children:"2 dice"})]})]}),(0,qt.jsxs)(So,{children:[(0,qt.jsx)(Eo,{children:"Card Decks"}),(0,qt.jsxs)(Oo,{value:s.numberOfDecks,onChange:e=>l({...s,numberOfDecks:e.target.value}),children:[(0,qt.jsx)("option",{value:1,children:"Single deck"}),(0,qt.jsx)("option",{value:2,children:"Double deck"})]})]}),(0,qt.jsxs)(So,{children:[(0,qt.jsx)(Eo,{children:"Cards per Hand"}),(0,qt.jsx)(Oo,{value:s.cardsPerHand,onChange:e=>l({...s,cardsPerHand:e.target.value}),children:[3,4,5].map(e=>(0,qt.jsxs)("option",{value:e,children:[e," cards"]},e))})]}),(0,qt.jsxs)(So,{children:[(0,qt.jsx)(Eo,{children:"Coins per Round"}),(0,qt.jsx)(Oo,{value:s.numberOfCoins,onChange:e=>l({...s,numberOfCoins:e.target.value}),children:[1,2,3].map(e=>(0,qt.jsxs)("option",{value:e,children:[e," coin",1!==e?"s":""]},e))})]}),(0,qt.jsxs)("div",{style:{display:"flex",gap:"0.5rem"},children:[(0,qt.jsx)(Po,{type:"submit",disabled:!s.roomName.trim(),children:"Create Room"}),(0,qt.jsx)(Po,{type:"button",onClick:()=>a(!1),style:{background:"#666"},children:"Cancel"})]})]}):(0,qt.jsx)(ho,{onClick:()=>a(!0),children:"Create Racing Room"})]})]})]})},Ao=Ui.div`
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
`,Lo=Ui.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
`,$o=Ui.h1`
  font-family: 'Orbitron', monospace;
  color: #00d4ff;
  font-size: 2rem;
  margin: 0;
`,Do=Ui.button`
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
`,Mo=Ui.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,Io=Ui.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
`,Fo=Ui.h2`
  font-family: 'Orbitron', monospace;
  color: #00d4ff;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`,Uo=Ui.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
`,Bo=Ui.div`
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
`,Wo=Ui.div`
  text-align: center;
  width: 100%;
`,Ho=Ui.h3`
  color: white;
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`,Vo=Ui.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${e=>e.color};
  border: 3px solid white;
  margin: 0 auto 0.5rem;
`,Yo=Ui.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${e=>e.isHost?"#ffd700":"#00ff88"};
  color: #000;
`,qo=Ui.div`
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
  text-align: center;
`,Ko=Ui.button`
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
`,Qo=Ui.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`,Xo=Ui.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`,Go=Ui.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 0.9rem;
`,Jo=Ui.span`
  color: rgba(255, 255, 255, 0.8);
`,Zo=Ui.span`
  font-weight: 600;
  color: #00d4ff;
`,ea=Ui.select`
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
`,ta=(Ui.input`
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
`,Ui.button`
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
`),na=Ui.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  height: 600px;
`,ra=Ui.div`
  display: flex;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,ia=Ui.button`
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
`,oa=Ui.select`
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
`,aa=Ui.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,sa=Ui.div`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${e=>e.isPrivate?"rgba(255, 215, 0, 0.1)":"rgba(255, 255, 255, 0.05)"};
  border-left: 3px solid ${e=>e.isPrivate?"#ffd700":"#00d4ff"};
`,la=Ui.div`
  font-size: 0.8rem;
  color: ${e=>e.isPrivate?"#ffd700":"#00d4ff"};
  margin-bottom: 0.2rem;
`,ua=Ui.div`
  color: white;
  font-size: 0.9rem;
`,ca=Ui.input`
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
`,da=Ui.div`
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
`,fa=Ui.button`
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
`;const pa=function(){var e,t,n,i,o,a,s,l,u,c,d,f,p,h,g,m,v,y,b,x,w,_,k,S,E,C,j,T,R,O;const{currentRoom:P,player:N,messages:z,leaveRoom:A,sendRoomMessage:L,sendPrivateMessage:$,changeColor:D,startGame:M,updateSettings:I}=Jt(),[F,U]=(0,r.useState)(""),[B,W]=(0,r.useState)(null),[H,V]=(0,r.useState)("room"),[Y,q]=(0,r.useState)(""),K={yellow:"#ffd700",orange:"#ff8c00",red:"#ff3838",pink:"#ff69b4",purple:"#9b59b6",blue:"#00d4ff",green:"#00ff88",black:"#2c3e50"},Q=["yellow","orange","red","pink","purple","blue","green","black"],X=(e,t)=>{const n={...null===P||void 0===P?void 0:P.settings,[e]:parseInt(t)};I(n)},G=(null===P||void 0===P||null===(e=P.host)||void 0===e?void 0:e.id)===(null===N||void 0===N?void 0:N.id)&&(null===P||void 0===P||null===(t=P.players)||void 0===t?void 0:t.length)>=2&&"lobby"===(null===P||void 0===P||null===(n=P.gameState)||void 0===n?void 0:n.currentStage),J=()=>{const e=(()=>{var e;return(null===P||void 0===P||null===(e=P.players)||void 0===e?void 0:e.map(e=>e.color).filter(Boolean))||[]})();return Q.filter(t=>!e.includes(t)||t===(null===N||void 0===N?void 0:N.color))};return(0,qt.jsxs)(Ao,{children:[(0,qt.jsxs)(Lo,{children:[(0,qt.jsx)($o,{children:null===P||void 0===P?void 0:P.name}),(0,qt.jsx)(Do,{onClick:A,children:"Leave Room"})]}),(0,qt.jsxs)(Mo,{children:[(0,qt.jsxs)(Io,{children:[(0,qt.jsxs)(Fo,{children:["Players (",(null===P||void 0===P||null===(i=P.players)||void 0===i?void 0:i.length)||0,"/4)"]}),(0,qt.jsx)(Uo,{children:[0,1,2,3].map(e=>{var t;const n=null===P||void 0===P||null===(t=P.players)||void 0===t?void 0:t[e];return(0,qt.jsx)(Bo,{filled:!!n,children:n?(0,qt.jsxs)(Wo,{children:[(0,qt.jsx)(Vo,{color:K[n.color]||"#666"}),(0,qt.jsx)(Ho,{children:n.name}),(0,qt.jsx)(Yo,{isHost:n.isHost,children:n.isHost?"Host":"Player"}),n.id===(null===N||void 0===N?void 0:N.id)&&(0,qt.jsxs)("div",{style:{position:"relative"},children:[(0,qt.jsx)(Ko,{onClick:()=>W(B===e?null:e),children:"Change Color"}),B===e&&(0,qt.jsx)(da,{children:J().map(e=>(0,qt.jsx)(fa,{color:K[e],selected:(null===N||void 0===N?void 0:N.color)===e,onClick:()=>(e=>{D(e),W(null)})(e)},e))})]})]}):(0,qt.jsx)(qo,{children:"Waiting for player..."})},e)})}),(0,qt.jsxs)(Qo,{children:[(0,qt.jsx)(Fo,{style:{fontSize:"1.2rem",marginBottom:"1rem"},children:"Game Settings"}),(0,qt.jsxs)(Xo,{children:[(0,qt.jsxs)(Go,{children:[(0,qt.jsx)(Jo,{children:"Laps:"}),(null===P||void 0===P||null===(o=P.host)||void 0===o?void 0:o.id)===(null===N||void 0===N?void 0:N.id)&&"lobby"===(null===P||void 0===P||null===(a=P.gameState)||void 0===a?void 0:a.currentStage)?(0,qt.jsxs)(ea,{value:(null===P||void 0===P||null===(s=P.settings)||void 0===s?void 0:s.numberOfLaps)||3,onChange:e=>X("numberOfLaps",e.target.value),children:[(0,qt.jsx)("option",{value:1,children:"1"}),(0,qt.jsx)("option",{value:2,children:"2"}),(0,qt.jsx)("option",{value:3,children:"3"}),(0,qt.jsx)("option",{value:4,children:"4"}),(0,qt.jsx)("option",{value:5,children:"5"})]}):(0,qt.jsx)(Zo,{children:(null===P||void 0===P||null===(l=P.settings)||void 0===l?void 0:l.numberOfLaps)||3})]}),(0,qt.jsxs)(Go,{children:[(0,qt.jsx)(Jo,{children:"Movement Dice:"}),(null===P||void 0===P||null===(u=P.host)||void 0===u?void 0:u.id)===(null===N||void 0===N?void 0:N.id)&&"lobby"===(null===P||void 0===P||null===(c=P.gameState)||void 0===c?void 0:c.currentStage)?(0,qt.jsxs)(ea,{value:(null===P||void 0===P||null===(d=P.settings)||void 0===d?void 0:d.numberOfDice)||1,onChange:e=>X("numberOfDice",e.target.value),children:[(0,qt.jsx)("option",{value:1,children:"1 die"}),(0,qt.jsx)("option",{value:2,children:"2 dice"})]}):(0,qt.jsx)(Zo,{children:2===(null===P||void 0===P||null===(f=P.settings)||void 0===f?void 0:f.numberOfDice)?"2 dice":"1 die"})]}),(0,qt.jsxs)(Go,{children:[(0,qt.jsx)(Jo,{children:"Card Decks:"}),(null===P||void 0===P||null===(p=P.host)||void 0===p?void 0:p.id)===(null===N||void 0===N?void 0:N.id)&&"lobby"===(null===P||void 0===P||null===(h=P.gameState)||void 0===h?void 0:h.currentStage)?(0,qt.jsxs)(ea,{value:(null===P||void 0===P||null===(g=P.settings)||void 0===g?void 0:g.numberOfDecks)||1,onChange:e=>X("numberOfDecks",e.target.value),children:[(0,qt.jsx)("option",{value:1,children:"Single"}),(0,qt.jsx)("option",{value:2,children:"Double"})]}):(0,qt.jsx)(Zo,{children:2===(null===P||void 0===P||null===(m=P.settings)||void 0===m?void 0:m.numberOfDecks)?"Double":"Single"})]}),(0,qt.jsxs)(Go,{children:[(0,qt.jsx)(Jo,{children:"Cards per Hand:"}),(null===P||void 0===P||null===(v=P.host)||void 0===v?void 0:v.id)===(null===N||void 0===N?void 0:N.id)&&"lobby"===(null===P||void 0===P||null===(y=P.gameState)||void 0===y?void 0:y.currentStage)?(0,qt.jsxs)(ea,{value:(null===P||void 0===P||null===(b=P.settings)||void 0===b?void 0:b.cardsPerHand)||4,onChange:e=>X("cardsPerHand",e.target.value),children:[(0,qt.jsx)("option",{value:3,children:"3"}),(0,qt.jsx)("option",{value:4,children:"4"}),(0,qt.jsx)("option",{value:5,children:"5"})]}):(0,qt.jsx)(Zo,{children:(null===P||void 0===P||null===(x=P.settings)||void 0===x?void 0:x.cardsPerHand)||4})]}),(0,qt.jsxs)(Go,{children:[(0,qt.jsx)(Jo,{children:"Coins per Round:"}),(null===P||void 0===P||null===(w=P.host)||void 0===w?void 0:w.id)===(null===N||void 0===N?void 0:N.id)&&"lobby"===(null===P||void 0===P||null===(_=P.gameState)||void 0===_?void 0:_.currentStage)?(0,qt.jsxs)(ea,{value:(null===P||void 0===P||null===(k=P.settings)||void 0===k?void 0:k.numberOfCoins)||2,onChange:e=>X("numberOfCoins",e.target.value),children:[(0,qt.jsx)("option",{value:1,children:"1"}),(0,qt.jsx)("option",{value:2,children:"2"}),(0,qt.jsx)("option",{value:3,children:"3"})]}):(0,qt.jsx)(Zo,{children:(null===P||void 0===P||null===(S=P.settings)||void 0===S?void 0:S.numberOfCoins)||2})]})]})]}),(null===P||void 0===P||null===(E=P.host)||void 0===E?void 0:E.id)===(null===N||void 0===N?void 0:N.id)&&(0,qt.jsx)(ta,{onClick:M,disabled:!G,children:G?"Start Race!":(null===P||void 0===P||null===(C=P.players)||void 0===C?void 0:C.length)<2?"Need at least 2 players":"Game in progress"})]}),(0,qt.jsxs)(na,{children:[(0,qt.jsxs)(ra,{children:[(0,qt.jsx)(ia,{active:"room"===H,onClick:()=>V("room"),children:"Room Chat"}),(0,qt.jsx)(ia,{active:"private"===H,onClick:()=>V("private"),children:"Private Message"})]}),"private"===H&&(0,qt.jsxs)(oa,{value:Y,onChange:e=>q(e.target.value),children:[(0,qt.jsx)("option",{value:"",children:"Select player..."}),null===P||void 0===P||null===(j=P.players)||void 0===j||null===(T=j.filter(e=>e.id!==(null===N||void 0===N?void 0:N.id)))||void 0===T?void 0:T.map(e=>(0,qt.jsx)("option",{value:e.id,children:e.name},e.id))]}),(0,qt.jsx)(aa,{children:z.filter(e=>"room"===H?"room"===e.type:"private"===e.type).map(e=>(0,qt.jsxs)(sa,{isPrivate:"private"===e.type,children:[(0,qt.jsxs)(la,{isPrivate:"private"===e.type,children:["private"===e.type?"[Private] ":"",e.playerName,":"]}),(0,qt.jsx)(ua,{children:e.message})]},e.id))}),(0,qt.jsx)("form",{onSubmit:e=>{e.preventDefault(),F.trim()&&("room"===H?L(F):"private"===H&&Y&&$(Y,F),U(""))},children:(0,qt.jsx)(ca,{type:"text",value:F,onChange:e=>U(e.target.value),placeholder:"room"===H?"Type a message...":Y?`Private message to ${(null===P||void 0===P||null===(R=P.players)||void 0===R||null===(O=R.find(e=>e.id===Y))||void 0===O?void 0:O.name)||"player"}...`:"Select a player first...",maxLength:200,disabled:"private"===H&&!Y})})]})]})]})},ha=Bi`
  0%, 100% { box-shadow: 0 0 15px rgba(0, 212, 255, 0.6); }
  50% { box-shadow: 0 0 25px rgba(0, 212, 255, 0.9), 0 0 35px rgba(0, 212, 255, 0.4); }
`,ga=Bi`
  0%, 100% { box-shadow: 0 0 10px rgba(255, 215, 0, 0.6); }
  50% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.9); }
`,ma=Bi`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-2px); }
`,va=Bi`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
`,ya=Bi`
  0% { transform: scale(0) rotate(-180deg); opacity: 0; }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
`,ba=Ui.div`
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
`,xa=Ui.div`
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
  
  ${e=>e.isCurrentPlayer&&Mi`
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
`,wa=Ui.div`
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
`,_a=Ui.div`
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
  animation: ${ya} 0.5s ease-out;
  z-index: 10;
`,ka=Ui.div`
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
`,Sa=Ui.div`
  font-family: 'Orbitron', monospace;
  font-weight: 600;
  font-size: 0.9rem;
  color: white;
  text-align: center;
  margin-bottom: 4px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
`,Ea=Ui.div`
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
`,Ca=Ui.span`
  font-size: 0.9rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`,ja=Ui.div`
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 6px;
`,Ta=Ui.div`
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
`,Ra=Ui.div`
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
`,Oa=Ui.div`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 4px;
  z-index: 5;
`,Pa=Ui.div`
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
`,Na=Ui.div`
  position: absolute;
  bottom: -20px;
  right: -5px;
  display: flex;
  gap: 3px;
  z-index: 5;
`,za=Ui.div`
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
`;const Aa=function(e){let{players:t=[],currentPlayer:n,gameStage:r="lobby",onCoinSelect:i}=e;const o=e=>{const t=[];if(e.dealerButton&&t.push((0,qt.jsx)(wa,{children:"DEALER"},"dealer")),e.stormFinishOrder&&e.stormFinishOrder>0&&t.push((0,qt.jsx)(_a,{position:e.stormFinishOrder,children:e.stormFinishOrder},"badge")),(r.includes("racing")||r.includes("coin"))&&t.push((0,qt.jsxs)(ka,{children:["L",e.lap||1]},"lap")),"storm"===r&&"number"===typeof e.cardCount){const n=e.cardCount,r=Math.min(n,8),i=[];for(let e=0;e<r;e++)i.push((0,qt.jsx)("div",{className:"card"},e));t.push((0,qt.jsx)(ja,{children:(0,qt.jsxs)(Ta,{children:[i,(0,qt.jsx)(Ra,{children:n})]})},"cards"))}return"coin"===r&&e.drawnCoins&&e.drawnCoins.length>0&&t.push((0,qt.jsx)(Oa,{children:e.drawnCoins.map((t,n)=>(0,qt.jsx)(Pa,{type:t.type,faceUp:t.faceUp,isSelected:t.isSelected,isSelectable:t.isSelectable,onClick:()=>t.isSelectable&&i&&i(e.id,n),children:t.faceUp?t.value:"?"},n))},"coins")),"racing"===r&&e.lastDiceRoll&&e.lastDiceRoll.length>0&&t.push((0,qt.jsx)(Na,{children:e.lastDiceRoll.map((e,t)=>(0,qt.jsx)(za,{children:e},t))},"dice")),t};return(0,qt.jsx)(ba,{children:t.map(e=>(0,qt.jsxs)(xa,{isCurrentPlayer:n===e.id,children:[o(e),(0,qt.jsx)(Sa,{children:e.name}),(0,qt.jsx)(Ea,{color:e.color,children:(0,qt.jsx)(Ca,{children:"\u265f"})})]},e.id))})},La=Bi`
  0% { transform: rotateY(0deg); }
  50% { transform: rotateY(90deg); }
  100% { transform: rotateY(0deg); }
`,$a=(Bi`
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-8px) scale(1.05); }
`,Bi`
  0%, 100% { box-shadow: 0 0 10px rgba(0, 212, 255, 0.3); }
  50% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.6), 0 0 30px rgba(0, 212, 255, 0.2); }
`),Da=Ui.div`
  width: ${e=>"large"===e.size?"120px":"medium"===e.size?"80px":"60px"};
  height: ${e=>"large"===e.size?"168px":"medium"===e.size?"112px":"84px"};
  perspective: 1000px;
  cursor: ${e=>e.interactive?"pointer":"default"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${e=>e.interactive&&"\n    &:hover {\n      transform: translateY(-12px) scale(1.05);\n      filter: drop-shadow(0 12px 25px rgba(0, 0, 0, 0.4));\n    }\n  "}
  
  ${e=>e.isPlayable&&Mi`
    animation: ${$a} 2s ease-in-out infinite;
  `}
  
  ${e=>e.isAnimating&&Mi`
    animation: ${La} 0.6s ease-in-out;
  `}
`,Ma=Ui.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${e=>e.isFlipped&&"\n    transform: rotateY(180deg);\n  "}
`,Ia=Ui.div`
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
`,Fa=Ui(Ia)`
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    #f8f9fa 50%,
    #e9ecef 100%
  );
  color: ${e=>function(e){switch(e){case"hearts":case"diamonds":return"#e74c3c";default:return"#2c3e50"}}(e.suit)};
  transform: rotateY(0deg);
`,Ua=Ui(Ia)`
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
`,Ba=Ui.div`
  font-size: ${e=>"large"===e.size?"24px":"medium"===e.size?"18px":"14px"};
  font-weight: bold;
  font-family: 'Rajdhani', sans-serif;
  position: absolute;
  top: 8px;
  left: 8px;
  line-height: 1;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`,Wa=Ui.div`
  font-size: ${e=>"large"===e.size?"48px":"medium"===e.size?"32px":"24px"};
  line-height: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.3));
`,Ha=Ui.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  font-size: ${e=>"large"===e.size?"16px":"medium"===e.size?"12px":"10px"};
  font-weight: bold;
  font-family: 'Rajdhani', sans-serif;
  transform: rotate(180deg);
  opacity: 0.7;
`,Va=Ui.div`
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
  
  ${Da}:hover & {
    opacity: ${e=>e.isSpecial?"0.6":"0"};
  }
`;function Ya(e){switch(e){case"hearts":return"\u2665";case"diamonds":return"\u2666";case"spades":return"\u2660";case"clubs":return"\u2663";default:return""}}function qa(e){return["Q","7","A"].includes(e)}const Ka=e=>{let{rank:t,suit:n,id:r,isBack:i=!1,size:o="medium",interactive:a=!1,isPlayable:s=!1,isAnimating:l=!1,onClick:u,style:c={}}=e;return(0,qt.jsx)(Da,{size:o,interactive:a,isPlayable:s,isAnimating:l,onClick:()=>{a&&u&&u({rank:t,suit:n,id:r})},style:c,children:(0,qt.jsxs)(Ma,{isFlipped:i,children:[(0,qt.jsxs)(Fa,{suit:n,children:[(0,qt.jsx)(Va,{rank:t,isSpecial:qa(t)}),(0,qt.jsx)(Ba,{size:o,children:t}),(0,qt.jsx)(Wa,{size:o,children:Ya(n)}),(0,qt.jsx)(Ha,{size:o,children:t})]}),(0,qt.jsx)(Ua,{})]})})},Qa=(Ui.div`
  position: relative;
  display: inline-block;
`,Ui.div`
  position: absolute;
  top: ${e=>-2*e.index}px;
  left: ${e=>-1*e.index}px;
  transform: rotate(${e=>2*(e.index-1)}deg);
  z-index: ${e=>10-e.index};
`,Ui.div`
  display: flex;
  gap: ${e=>"large"===e.size?"-30px":"medium"===e.size?"-20px":"-15px"};
  padding: 20px;
  align-items: center;
  justify-content: center;
  
  & > *:hover {
    z-index: 100;
    position: relative;
  }
`),Xa=e=>{let{cards:t,size:n="medium",interactive:r=!1,playableCards:i=[],onCardClick:o}=e;return(0,qt.jsx)(Qa,{size:n,children:t.map((e,a)=>(0,qt.jsx)(Ka,{rank:e.rank,suit:e.suit,id:e.id,size:n,interactive:r,isPlayable:i.some(t=>t.rank===e.rank&&t.suit===e.suit),onClick:o,style:{transform:`rotate(${8*(a-(t.length-1)/2)}deg)`,zIndex:a}},e.id||`${e.rank}-${e.suit}-${a}`))})},Ga=Ka,Ja=Bi`
  0% { transform: rotateY(0deg); }
  50% { transform: rotateY(90deg); }
  100% { transform: rotateY(180deg); }
`,Za=Bi`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
`,es=Bi`
  0%, 100% { box-shadow: 0 0 15px rgba(255, 215, 0, 0.4); }
  50% { box-shadow: 0 0 25px rgba(255, 215, 0, 0.7), 0 0 35px rgba(255, 215, 0, 0.3); }
`,ts=Bi`
  0%, 100% { opacity: 0; transform: rotate(0deg) scale(0.5); }
  50% { opacity: 1; transform: rotate(180deg) scale(1); }
`,ns=Ui.div`
  width: ${e=>"large"===e.size?"60px":"medium"===e.size?"40px":"30px"};
  height: ${e=>"large"===e.size?"60px":"medium"===e.size?"40px":"30px"};
  position: relative;
  cursor: ${e=>e.interactive?"pointer":"default"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${e=>e.isFloating&&Mi`
    animation: ${Za} 2s ease-in-out infinite;
  `}
  
  ${e=>e.isFlipping&&Mi`
    animation: ${Ja} 0.8s ease-in-out;
  `}
  
  ${e=>e.interactive&&Mi`
    &:hover {
      transform: scale(1.1);
      animation: ${es} 1.5s ease-in-out infinite;
    }
  `}
`,rs=Ui.div`
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
    ${Mi`animation: ${ts} 3s ease-in-out infinite;`}
  }
`,is=Ui.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;
`,os=Ui.div`
  font-size: ${e=>"large"===e.size?"24px":"medium"===e.size?"16px":"12px"};
  margin-bottom: ${e=>"large"===e.size?"2px":"1px"};
`,as=Ui.div`
  font-size: ${e=>"large"===e.size?"12px":"medium"===e.size?"10px":"8px"};
  opacity: 0.8;
`,ss=Ui.div`
  position: relative;
  display: inline-block;
`,ls=Ui.div`
  position: absolute;
  top: ${e=>-3*e.index}px;
  left: ${e=>-1*e.index}px;
  z-index: ${e=>10-e.index};
  transform: rotate(${e=>5*e.index}deg);
`,us=Ui.div`
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
`,cs=e=>{let{type:t="gold",value:n=1,size:r="medium",interactive:i=!1,isFloating:o=!1,isFlipping:a=!1,onClick:s,showValue:l=!0}=e;return(0,qt.jsx)(ns,{size:r,interactive:i,isFloating:o,isFlipping:a,onClick:()=>{i&&s&&s({type:t,value:n})},children:(0,qt.jsx)(rs,{type:t,size:r,children:(0,qt.jsxs)(is,{size:r,children:[(0,qt.jsx)(os,{size:r,children:(()=>{switch(t){case"gold":default:return"$";case"silver":return"\xa2";case"bronze":return"\u220e"}})()}),l&&(0,qt.jsx)(as,{size:r,children:n})]})})})},ds=e=>{let{coins:t,size:n="medium",maxVisible:r=5,showCount:i=!0}=e;const o=t.slice(0,r),a=Math.max(0,t.length-r);return(0,qt.jsxs)(ss,{children:[o.map((e,t)=>(0,qt.jsx)(ls,{index:t,children:(0,qt.jsx)(cs,{type:e.type,value:e.value,size:n,showValue:0===t})},t)),i&&a>0&&(0,qt.jsxs)(us,{children:["+",a]})]})},fs=Ui.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  border: 2px solid rgba(255, 215, 0, 0.2);
  backdrop-filter: blur(5px);
`,ps=Ui.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,hs=Ui.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,gs=e=>{let{coins:t,size:n="medium",interactive:r=!1,onCoinClick:i,groupByType:o=!0}=e;if(o){const e=t.reduce((e,t)=>(e[t.type]||(e[t.type]=[]),e[t.type].push(t),e),{});return(0,qt.jsx)(fs,{children:Object.entries(e).map(e=>{let[t,r]=e;return(0,qt.jsxs)(ps,{children:[(0,qt.jsx)(hs,{children:t}),(0,qt.jsx)(ds,{coins:r,size:n,maxVisible:3})]},t)})})}return(0,qt.jsx)(fs,{children:t.map((e,t)=>(0,qt.jsx)(cs,{type:e.type,value:e.value,size:n,interactive:r,onClick:i,isFloating:r},t))})};function ms(){}function vs(e){return null==e?ms:function(){return this.querySelector(e)}}function ys(){return[]}function bs(e){return null==e?ys:function(){return this.querySelectorAll(e)}}function xs(e){return function(){return function(e){return null==e?[]:Array.isArray(e)?e:Array.from(e)}(e.apply(this,arguments))}}function ws(e){return function(){return this.matches(e)}}function _s(e){return function(t){return t.matches(e)}}var ks=Array.prototype.find;function Ss(){return this.firstElementChild}var Es=Array.prototype.filter;function Cs(){return Array.from(this.children)}function js(e){return new Array(e.length)}function Ts(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}function Rs(e,t,n,r,i,o){for(var a,s=0,l=t.length,u=o.length;s<u;++s)(a=t[s])?(a.__data__=o[s],r[s]=a):n[s]=new Ts(e,o[s]);for(;s<l;++s)(a=t[s])&&(i[s]=a)}function Os(e,t,n,r,i,o,a){var s,l,u,c=new Map,d=t.length,f=o.length,p=new Array(d);for(s=0;s<d;++s)(l=t[s])&&(p[s]=u=a.call(l,l.__data__,s,t)+"",c.has(u)?i[s]=l:c.set(u,l));for(s=0;s<f;++s)u=a.call(e,o[s],s,o)+"",(l=c.get(u))?(r[s]=l,l.__data__=o[s],c.delete(u)):n[s]=new Ts(e,o[s]);for(s=0;s<d;++s)(l=t[s])&&c.get(p[s])===l&&(i[s]=l)}function Ps(e){return e.__data__}function Ns(e){return"object"===typeof e&&"length"in e?e:Array.from(e)}function zs(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}Ts.prototype={constructor:Ts,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};var As="http://www.w3.org/1999/xhtml";const Ls={svg:"http://www.w3.org/2000/svg",xhtml:As,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function $s(e){var t=e+="",n=t.indexOf(":");return n>=0&&"xmlns"!==(t=e.slice(0,n))&&(e=e.slice(n+1)),Ls.hasOwnProperty(t)?{space:Ls[t],local:e}:e}function Ds(e){return function(){this.removeAttribute(e)}}function Ms(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Is(e,t){return function(){this.setAttribute(e,t)}}function Fs(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function Us(e,t){return function(){var n=t.apply(this,arguments);null==n?this.removeAttribute(e):this.setAttribute(e,n)}}function Bs(e,t){return function(){var n=t.apply(this,arguments);null==n?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function Ws(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function Hs(e){return function(){this.style.removeProperty(e)}}function Vs(e,t,n){return function(){this.style.setProperty(e,t,n)}}function Ys(e,t,n){return function(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function qs(e,t){return e.style.getPropertyValue(t)||Ws(e).getComputedStyle(e,null).getPropertyValue(t)}function Ks(e){return function(){delete this[e]}}function Qs(e,t){return function(){this[e]=t}}function Xs(e,t){return function(){var n=t.apply(this,arguments);null==n?delete this[e]:this[e]=n}}function Gs(e){return e.trim().split(/^|\s+/)}function Js(e){return e.classList||new Zs(e)}function Zs(e){this._node=e,this._names=Gs(e.getAttribute("class")||"")}function el(e,t){for(var n=Js(e),r=-1,i=t.length;++r<i;)n.add(t[r])}function tl(e,t){for(var n=Js(e),r=-1,i=t.length;++r<i;)n.remove(t[r])}function nl(e){return function(){el(this,e)}}function rl(e){return function(){tl(this,e)}}function il(e,t){return function(){(t.apply(this,arguments)?el:tl)(this,e)}}function ol(){this.textContent=""}function al(e){return function(){this.textContent=e}}function sl(e){return function(){var t=e.apply(this,arguments);this.textContent=null==t?"":t}}function ll(){this.innerHTML=""}function ul(e){return function(){this.innerHTML=e}}function cl(e){return function(){var t=e.apply(this,arguments);this.innerHTML=null==t?"":t}}function dl(){this.nextSibling&&this.parentNode.appendChild(this)}function fl(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function pl(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===As&&t.documentElement.namespaceURI===As?t.createElement(e):t.createElementNS(n,e)}}function hl(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function gl(e){var t=$s(e);return(t.local?hl:pl)(t)}function ml(){return null}function vl(){var e=this.parentNode;e&&e.removeChild(this)}function yl(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function bl(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function xl(e){return function(){var t=this.__on;if(t){for(var n,r=0,i=-1,o=t.length;r<o;++r)n=t[r],e.type&&n.type!==e.type||n.name!==e.name?t[++i]=n:this.removeEventListener(n.type,n.listener,n.options);++i?t.length=i:delete this.__on}}}function wl(e,t,n){return function(){var r,i=this.__on,o=function(e){return function(t){e.call(this,t,this.__data__)}}(t);if(i)for(var a=0,s=i.length;a<s;++a)if((r=i[a]).type===e.type&&r.name===e.name)return this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=n),void(r.value=t);this.addEventListener(e.type,o,n),r={type:e.type,name:e.name,value:t,listener:o,options:n},i?i.push(r):this.__on=[r]}}function _l(e,t,n){var r=Ws(e),i=r.CustomEvent;"function"===typeof i?i=new i(t,n):(i=r.document.createEvent("Event"),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function kl(e,t){return function(){return _l(this,e,t)}}function Sl(e,t){return function(){return _l(this,e,t.apply(this,arguments))}}Zs.prototype={add:function(e){this._names.indexOf(e)<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};var El=[null];function Cl(e,t){this._groups=e,this._parents=t}function jl(){return new Cl([[document.documentElement]],El)}Cl.prototype=jl.prototype={constructor:Cl,select:function(e){"function"!==typeof e&&(e=vs(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var o,a,s=t[i],l=s.length,u=r[i]=new Array(l),c=0;c<l;++c)(o=s[c])&&(a=e.call(o,o.__data__,c,s))&&("__data__"in o&&(a.__data__=o.__data__),u[c]=a);return new Cl(r,this._parents)},selectAll:function(e){e="function"===typeof e?xs(e):bs(e);for(var t=this._groups,n=t.length,r=[],i=[],o=0;o<n;++o)for(var a,s=t[o],l=s.length,u=0;u<l;++u)(a=s[u])&&(r.push(e.call(a,a.__data__,u,s)),i.push(a));return new Cl(r,i)},selectChild:function(e){return this.select(null==e?Ss:function(e){return function(){return ks.call(this.children,e)}}("function"===typeof e?e:_s(e)))},selectChildren:function(e){return this.selectAll(null==e?Cs:function(e){return function(){return Es.call(this.children,e)}}("function"===typeof e?e:_s(e)))},filter:function(e){"function"!==typeof e&&(e=ws(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var o,a=t[i],s=a.length,l=r[i]=[],u=0;u<s;++u)(o=a[u])&&e.call(o,o.__data__,u,a)&&l.push(o);return new Cl(r,this._parents)},data:function(e,t){if(!arguments.length)return Array.from(this,Ps);var n=t?Os:Rs,r=this._parents,i=this._groups;"function"!==typeof e&&(e=function(e){return function(){return e}}(e));for(var o=i.length,a=new Array(o),s=new Array(o),l=new Array(o),u=0;u<o;++u){var c=r[u],d=i[u],f=d.length,p=Ns(e.call(c,c&&c.__data__,u,r)),h=p.length,g=s[u]=new Array(h),m=a[u]=new Array(h);n(c,d,g,m,l[u]=new Array(f),p,t);for(var v,y,b=0,x=0;b<h;++b)if(v=g[b]){for(b>=x&&(x=b+1);!(y=m[x])&&++x<h;);v._next=y||null}}return(a=new Cl(a,r))._enter=s,a._exit=l,a},enter:function(){return new Cl(this._enter||this._groups.map(js),this._parents)},exit:function(){return new Cl(this._exit||this._groups.map(js),this._parents)},join:function(e,t,n){var r=this.enter(),i=this,o=this.exit();return"function"===typeof e?(r=e(r))&&(r=r.selection()):r=r.append(e+""),null!=t&&(i=t(i))&&(i=i.selection()),null==n?o.remove():n(o),r&&i?r.merge(i).order():i},merge:function(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,i=n.length,o=r.length,a=Math.min(i,o),s=new Array(i),l=0;l<a;++l)for(var u,c=n[l],d=r[l],f=c.length,p=s[l]=new Array(f),h=0;h<f;++h)(u=c[h]||d[h])&&(p[h]=u);for(;l<i;++l)s[l]=n[l];return new Cl(s,this._parents)},selection:function(){return this},order:function(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r,i=e[t],o=i.length-1,a=i[o];--o>=0;)(r=i[o])&&(a&&4^r.compareDocumentPosition(a)&&a.parentNode.insertBefore(r,a),a=r);return this},sort:function(e){function t(t,n){return t&&n?e(t.__data__,n.__data__):!t-!n}e||(e=zs);for(var n=this._groups,r=n.length,i=new Array(r),o=0;o<r;++o){for(var a,s=n[o],l=s.length,u=i[o]=new Array(l),c=0;c<l;++c)(a=s[c])&&(u[c]=a);u.sort(t)}return new Cl(i,this._parents).order()},call:function(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,o=r.length;i<o;++i){var a=r[i];if(a)return a}return null},size:function(){let e=0;for(const t of this)++e;return e},empty:function(){return!this.node()},each:function(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var i,o=t[n],a=0,s=o.length;a<s;++a)(i=o[a])&&e.call(i,i.__data__,a,o);return this},attr:function(e,t){var n=$s(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((null==t?n.local?Ms:Ds:"function"===typeof t?n.local?Bs:Us:n.local?Fs:Is)(n,t))},style:function(e,t,n){return arguments.length>1?this.each((null==t?Hs:"function"===typeof t?Ys:Vs)(e,t,null==n?"":n)):qs(this.node(),e)},property:function(e,t){return arguments.length>1?this.each((null==t?Ks:"function"===typeof t?Xs:Qs)(e,t)):this.node()[e]},classed:function(e,t){var n=Gs(e+"");if(arguments.length<2){for(var r=Js(this.node()),i=-1,o=n.length;++i<o;)if(!r.contains(n[i]))return!1;return!0}return this.each(("function"===typeof t?il:t?nl:rl)(n,t))},text:function(e){return arguments.length?this.each(null==e?ol:("function"===typeof e?sl:al)(e)):this.node().textContent},html:function(e){return arguments.length?this.each(null==e?ll:("function"===typeof e?cl:ul)(e)):this.node().innerHTML},raise:function(){return this.each(dl)},lower:function(){return this.each(fl)},append:function(e){var t="function"===typeof e?e:gl(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})},insert:function(e,t){var n="function"===typeof e?e:gl(e),r=null==t?ml:"function"===typeof t?t:vs(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})},remove:function(){return this.each(vl)},clone:function(e){return this.select(e?bl:yl)},datum:function(e){return arguments.length?this.property("__data__",e):this.node().__data__},on:function(e,t,n){var r,i,o=function(e){return e.trim().split(/^|\s+/).map(function(e){var t="",n=e.indexOf(".");return n>=0&&(t=e.slice(n+1),e=e.slice(0,n)),{type:e,name:t}})}(e+""),a=o.length;if(!(arguments.length<2)){for(s=t?wl:xl,r=0;r<a;++r)this.each(s(o[r],t,n));return this}var s=this.node().__on;if(s)for(var l,u=0,c=s.length;u<c;++u)for(r=0,l=s[u];r<a;++r)if((i=o[r]).type===l.type&&i.name===l.name)return l.value},dispatch:function(e,t){return this.each(("function"===typeof t?Sl:kl)(e,t))},[Symbol.iterator]:function*(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r,i=e[t],o=0,a=i.length;o<a;++o)(r=i[o])&&(yield r)}};const Tl=jl;var Rl={value:()=>{}};function Ol(){for(var e,t=0,n=arguments.length,r={};t<n;++t){if(!(e=arguments[t]+"")||e in r||/[\s.]/.test(e))throw new Error("illegal type: "+e);r[e]=[]}return new Pl(r)}function Pl(e){this._=e}function Nl(e,t){for(var n,r=0,i=e.length;r<i;++r)if((n=e[r]).name===t)return n.value}function zl(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=Rl,e=e.slice(0,r).concat(e.slice(r+1));break}return null!=n&&e.push({name:t,value:n}),e}Pl.prototype=Ol.prototype={constructor:Pl,on:function(e,t){var n,r,i=this._,o=(r=i,(e+"").trim().split(/^|\s+/).map(function(e){var t="",n=e.indexOf(".");if(n>=0&&(t=e.slice(n+1),e=e.slice(0,n)),e&&!r.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:t}})),a=-1,s=o.length;if(!(arguments.length<2)){if(null!=t&&"function"!==typeof t)throw new Error("invalid callback: "+t);for(;++a<s;)if(n=(e=o[a]).type)i[n]=zl(i[n],e.name,t);else if(null==t)for(n in i)i[n]=zl(i[n],e.name,null);return this}for(;++a<s;)if((n=(e=o[a]).type)&&(n=Nl(i[n],e.name)))return n},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Pl(e)},call:function(e,t){if((n=arguments.length-2)>0)for(var n,r,i=new Array(n),o=0;o<n;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(o=0,n=(r=this._[e]).length;o<n;++o)r[o].value.apply(t,i)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],i=0,o=r.length;i<o;++i)r[i].value.apply(t,n)}};const Al=Ol;var Ll,$l,Dl=0,Ml=0,Il=0,Fl=0,Ul=0,Bl=0,Wl="object"===typeof performance&&performance.now?performance:Date,Hl="object"===typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Vl(){return Ul||(Hl(Yl),Ul=Wl.now()+Bl)}function Yl(){Ul=0}function ql(){this._call=this._time=this._next=null}function Kl(e,t,n){var r=new ql;return r.restart(e,t,n),r}function Ql(){Ul=(Fl=Wl.now())+Bl,Dl=Ml=0;try{!function(){Vl(),++Dl;for(var e,t=Ll;t;)(e=Ul-t._time)>=0&&t._call.call(void 0,e),t=t._next;--Dl}()}finally{Dl=0,function(){var e,t,n=Ll,r=1/0;for(;n;)n._call?(r>n._time&&(r=n._time),e=n,n=n._next):(t=n._next,n._next=null,n=e?e._next=t:Ll=t);$l=e,Gl(r)}(),Ul=0}}function Xl(){var e=Wl.now(),t=e-Fl;t>1e3&&(Bl-=t,Fl=e)}function Gl(e){Dl||(Ml&&(Ml=clearTimeout(Ml)),e-Ul>24?(e<1/0&&(Ml=setTimeout(Ql,e-Wl.now()-Bl)),Il&&(Il=clearInterval(Il))):(Il||(Fl=Wl.now(),Il=setInterval(Xl,1e3)),Dl=1,Hl(Ql)))}function Jl(e,t,n){var r=new ql;return t=null==t?0:+t,r.restart(n=>{r.stop(),e(n+t)},t,n),r}ql.prototype=Kl.prototype={constructor:ql,restart:function(e,t,n){if("function"!==typeof e)throw new TypeError("callback is not a function");n=(null==n?Vl():+n)+(null==t?0:+t),this._next||$l===this||($l?$l._next=this:Ll=this,$l=this),this._call=e,this._time=n,Gl()},stop:function(){this._call&&(this._call=null,this._time=1/0,Gl())}};var Zl=Al("start","end","cancel","interrupt"),eu=[];function tu(e,t,n,r,i,o){var a=e.__transition;if(a){if(n in a)return}else e.__transition={};!function(e,t,n){var r,i=e.__transition;function o(e){n.state=1,n.timer.restart(a,n.delay,n.time),n.delay<=e&&a(e-n.delay)}function a(o){var u,c,d,f;if(1!==n.state)return l();for(u in i)if((f=i[u]).name===n.name){if(3===f.state)return Jl(a);4===f.state?(f.state=6,f.timer.stop(),f.on.call("interrupt",e,e.__data__,f.index,f.group),delete i[u]):+u<t&&(f.state=6,f.timer.stop(),f.on.call("cancel",e,e.__data__,f.index,f.group),delete i[u])}if(Jl(function(){3===n.state&&(n.state=4,n.timer.restart(s,n.delay,n.time),s(o))}),n.state=2,n.on.call("start",e,e.__data__,n.index,n.group),2===n.state){for(n.state=3,r=new Array(d=n.tween.length),u=0,c=-1;u<d;++u)(f=n.tween[u].value.call(e,e.__data__,n.index,n.group))&&(r[++c]=f);r.length=c+1}}function s(t){for(var i=t<n.duration?n.ease.call(null,t/n.duration):(n.timer.restart(l),n.state=5,1),o=-1,a=r.length;++o<a;)r[o].call(e,i);5===n.state&&(n.on.call("end",e,e.__data__,n.index,n.group),l())}function l(){for(var r in n.state=6,n.timer.stop(),delete i[t],i)return;delete e.__transition}i[t]=n,n.timer=Kl(o,0,n.time)}(e,n,{name:t,index:r,group:i,on:Zl,tween:eu,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:0})}function nu(e,t){var n=iu(e,t);if(n.state>0)throw new Error("too late; already scheduled");return n}function ru(e,t){var n=iu(e,t);if(n.state>3)throw new Error("too late; already running");return n}function iu(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function ou(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}var au,su=180/Math.PI,lu={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function uu(e,t,n,r,i,o){var a,s,l;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(l=e*n+t*r)&&(n-=e*l,r-=t*l),(s=Math.sqrt(n*n+r*r))&&(n/=s,r/=s,l/=s),e*r<t*n&&(e=-e,t=-t,l=-l,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(t,e)*su,skewX:Math.atan(l)*su,scaleX:a,scaleY:s}}function cu(e,t,n,r){function i(e){return e.length?e.pop()+" ":""}return function(o,a){var s=[],l=[];return o=e(o),a=e(a),function(e,r,i,o,a,s){if(e!==i||r!==o){var l=a.push("translate(",null,t,null,n);s.push({i:l-4,x:ou(e,i)},{i:l-2,x:ou(r,o)})}else(i||o)&&a.push("translate("+i+t+o+n)}(o.translateX,o.translateY,a.translateX,a.translateY,s,l),function(e,t,n,o){e!==t?(e-t>180?t+=360:t-e>180&&(e+=360),o.push({i:n.push(i(n)+"rotate(",null,r)-2,x:ou(e,t)})):t&&n.push(i(n)+"rotate("+t+r)}(o.rotate,a.rotate,s,l),function(e,t,n,o){e!==t?o.push({i:n.push(i(n)+"skewX(",null,r)-2,x:ou(e,t)}):t&&n.push(i(n)+"skewX("+t+r)}(o.skewX,a.skewX,s,l),function(e,t,n,r,o,a){if(e!==n||t!==r){var s=o.push(i(o)+"scale(",null,",",null,")");a.push({i:s-4,x:ou(e,n)},{i:s-2,x:ou(t,r)})}else 1===n&&1===r||o.push(i(o)+"scale("+n+","+r+")")}(o.scaleX,o.scaleY,a.scaleX,a.scaleY,s,l),o=a=null,function(e){for(var t,n=-1,r=l.length;++n<r;)s[(t=l[n]).i]=t.x(e);return s.join("")}}}var du=cu(function(e){const t=new("function"===typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?lu:uu(t.a,t.b,t.c,t.d,t.e,t.f)},"px, ","px)","deg)"),fu=cu(function(e){return null==e?lu:(au||(au=document.createElementNS("http://www.w3.org/2000/svg","g")),au.setAttribute("transform",e),(e=au.transform.baseVal.consolidate())?uu((e=e.matrix).a,e.b,e.c,e.d,e.e,e.f):lu)},", ",")",")");function pu(e,t){var n,r;return function(){var i=ru(this,e),o=i.tween;if(o!==n)for(var a=0,s=(r=n=o).length;a<s;++a)if(r[a].name===t){(r=r.slice()).splice(a,1);break}i.tween=r}}function hu(e,t,n){var r,i;if("function"!==typeof n)throw new Error;return function(){var o=ru(this,e),a=o.tween;if(a!==r){i=(r=a).slice();for(var s={name:t,value:n},l=0,u=i.length;l<u;++l)if(i[l].name===t){i[l]=s;break}l===u&&i.push(s)}o.tween=i}}function gu(e,t,n){var r=e._id;return e.each(function(){var e=ru(this,r);(e.value||(e.value={}))[t]=n.apply(this,arguments)}),function(e){return iu(e,r).value[t]}}function mu(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function vu(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function yu(){}var bu=.7,xu=1/bu,wu="\\s*([+-]?\\d+)\\s*",_u="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",ku="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Su=/^#([0-9a-f]{3,8})$/,Eu=new RegExp(`^rgb\\(${wu},${wu},${wu}\\)$`),Cu=new RegExp(`^rgb\\(${ku},${ku},${ku}\\)$`),ju=new RegExp(`^rgba\\(${wu},${wu},${wu},${_u}\\)$`),Tu=new RegExp(`^rgba\\(${ku},${ku},${ku},${_u}\\)$`),Ru=new RegExp(`^hsl\\(${_u},${ku},${ku}\\)$`),Ou=new RegExp(`^hsla\\(${_u},${ku},${ku},${_u}\\)$`),Pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function Nu(){return this.rgb().formatHex()}function zu(){return this.rgb().formatRgb()}function Au(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=Su.exec(e))?(n=t[1].length,t=parseInt(t[1],16),6===n?Lu(t):3===n?new Mu(t>>8&15|t>>4&240,t>>4&15|240&t,(15&t)<<4|15&t,1):8===n?$u(t>>24&255,t>>16&255,t>>8&255,(255&t)/255):4===n?$u(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|240&t,((15&t)<<4|15&t)/255):null):(t=Eu.exec(e))?new Mu(t[1],t[2],t[3],1):(t=Cu.exec(e))?new Mu(255*t[1]/100,255*t[2]/100,255*t[3]/100,1):(t=ju.exec(e))?$u(t[1],t[2],t[3],t[4]):(t=Tu.exec(e))?$u(255*t[1]/100,255*t[2]/100,255*t[3]/100,t[4]):(t=Ru.exec(e))?Hu(t[1],t[2]/100,t[3]/100,1):(t=Ou.exec(e))?Hu(t[1],t[2]/100,t[3]/100,t[4]):Pu.hasOwnProperty(e)?Lu(Pu[e]):"transparent"===e?new Mu(NaN,NaN,NaN,0):null}function Lu(e){return new Mu(e>>16&255,e>>8&255,255&e,1)}function $u(e,t,n,r){return r<=0&&(e=t=n=NaN),new Mu(e,t,n,r)}function Du(e,t,n,r){return 1===arguments.length?function(e){return e instanceof yu||(e=Au(e)),e?new Mu((e=e.rgb()).r,e.g,e.b,e.opacity):new Mu}(e):new Mu(e,t,n,null==r?1:r)}function Mu(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}function Iu(){return`#${Wu(this.r)}${Wu(this.g)}${Wu(this.b)}`}function Fu(){const e=Uu(this.opacity);return`${1===e?"rgb(":"rgba("}${Bu(this.r)}, ${Bu(this.g)}, ${Bu(this.b)}${1===e?")":`, ${e})`}`}function Uu(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Bu(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Wu(e){return((e=Bu(e))<16?"0":"")+e.toString(16)}function Hu(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new Yu(e,t,n,r)}function Vu(e){if(e instanceof Yu)return new Yu(e.h,e.s,e.l,e.opacity);if(e instanceof yu||(e=Au(e)),!e)return new Yu;if(e instanceof Yu)return e;var t=(e=e.rgb()).r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),o=Math.max(t,n,r),a=NaN,s=o-i,l=(o+i)/2;return s?(a=t===o?(n-r)/s+6*(n<r):n===o?(r-t)/s+2:(t-n)/s+4,s/=l<.5?o+i:2-o-i,a*=60):s=l>0&&l<1?0:a,new Yu(a,s,l,e.opacity)}function Yu(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}function qu(e){return(e=(e||0)%360)<0?e+360:e}function Ku(e){return Math.max(0,Math.min(1,e||0))}function Qu(e,t,n){return 255*(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)}function Xu(e,t,n,r,i){var o=e*e,a=o*e;return((1-3*e+3*o-a)*t+(4-6*o+3*a)*n+(1+3*e+3*o-3*a)*r+a*i)/6}mu(yu,Au,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Nu,formatHex:Nu,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return Vu(this).formatHsl()},formatRgb:zu,toString:zu}),mu(Mu,Du,vu(yu,{brighter(e){return e=null==e?xu:Math.pow(xu,e),new Mu(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=null==e?bu:Math.pow(bu,e),new Mu(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Mu(Bu(this.r),Bu(this.g),Bu(this.b),Uu(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Iu,formatHex:Iu,formatHex8:function(){return`#${Wu(this.r)}${Wu(this.g)}${Wu(this.b)}${Wu(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:Fu,toString:Fu})),mu(Yu,function(e,t,n,r){return 1===arguments.length?Vu(e):new Yu(e,t,n,null==r?1:r)},vu(yu,{brighter(e){return e=null==e?xu:Math.pow(xu,e),new Yu(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=null==e?bu:Math.pow(bu,e),new Yu(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+360*(this.h<0),t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new Mu(Qu(e>=240?e-240:e+120,i,r),Qu(e,i,r),Qu(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new Yu(qu(this.h),Ku(this.s),Ku(this.l),Uu(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Uu(this.opacity);return`${1===e?"hsl(":"hsla("}${qu(this.h)}, ${100*Ku(this.s)}%, ${100*Ku(this.l)}%${1===e?")":`, ${e})`}`}}));const Gu=e=>()=>e;function Ju(e,t){return function(n){return e+n*t}}function Zu(e){return 1===(e=+e)?ec:function(t,n){return n-t?function(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}(t,n,e):Gu(isNaN(t)?n:t)}}function ec(e,t){var n=t-e;return n?Ju(e,n):Gu(isNaN(e)?t:e)}const tc=function e(t){var n=Zu(t);function r(e,t){var r=n((e=Du(e)).r,(t=Du(t)).r),i=n(e.g,t.g),o=n(e.b,t.b),a=ec(e.opacity,t.opacity);return function(t){return e.r=r(t),e.g=i(t),e.b=o(t),e.opacity=a(t),e+""}}return r.gamma=e,r}(1);function nc(e){return function(t){var n,r,i=t.length,o=new Array(i),a=new Array(i),s=new Array(i);for(n=0;n<i;++n)r=Du(t[n]),o[n]=r.r||0,a[n]=r.g||0,s[n]=r.b||0;return o=e(o),a=e(a),s=e(s),r.opacity=1,function(e){return r.r=o(e),r.g=a(e),r.b=s(e),r+""}}}nc(function(e){var t=e.length-1;return function(n){var r=n<=0?n=0:n>=1?(n=1,t-1):Math.floor(n*t),i=e[r],o=e[r+1],a=r>0?e[r-1]:2*i-o,s=r<t-1?e[r+2]:2*o-i;return Xu((n-r/t)*t,a,i,o,s)}}),nc(function(e){var t=e.length;return function(n){var r=Math.floor(((n%=1)<0?++n:n)*t),i=e[(r+t-1)%t],o=e[r%t],a=e[(r+1)%t],s=e[(r+2)%t];return Xu((n-r/t)*t,i,o,a,s)}});var rc=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ic=new RegExp(rc.source,"g");function oc(e,t){var n,r,i,o=rc.lastIndex=ic.lastIndex=0,a=-1,s=[],l=[];for(e+="",t+="";(n=rc.exec(e))&&(r=ic.exec(t));)(i=r.index)>o&&(i=t.slice(o,i),s[a]?s[a]+=i:s[++a]=i),(n=n[0])===(r=r[0])?s[a]?s[a]+=r:s[++a]=r:(s[++a]=null,l.push({i:a,x:ou(n,r)})),o=ic.lastIndex;return o<t.length&&(i=t.slice(o),s[a]?s[a]+=i:s[++a]=i),s.length<2?l[0]?function(e){return function(t){return e(t)+""}}(l[0].x):function(e){return function(){return e}}(t):(t=l.length,function(e){for(var n,r=0;r<t;++r)s[(n=l[r]).i]=n.x(e);return s.join("")})}function ac(e,t){var n;return("number"===typeof t?ou:t instanceof Au?tc:(n=Au(t))?(t=n,tc):oc)(e,t)}function sc(e){return function(){this.removeAttribute(e)}}function lc(e){return function(){this.removeAttributeNS(e.space,e.local)}}function uc(e,t,n){var r,i,o=n+"";return function(){var a=this.getAttribute(e);return a===o?null:a===r?i:i=t(r=a,n)}}function cc(e,t,n){var r,i,o=n+"";return function(){var a=this.getAttributeNS(e.space,e.local);return a===o?null:a===r?i:i=t(r=a,n)}}function dc(e,t,n){var r,i,o;return function(){var a,s,l=n(this);if(null!=l)return(a=this.getAttribute(e))===(s=l+"")?null:a===r&&s===i?o:(i=s,o=t(r=a,l));this.removeAttribute(e)}}function fc(e,t,n){var r,i,o;return function(){var a,s,l=n(this);if(null!=l)return(a=this.getAttributeNS(e.space,e.local))===(s=l+"")?null:a===r&&s===i?o:(i=s,o=t(r=a,l));this.removeAttributeNS(e.space,e.local)}}function pc(e,t){var n,r;function i(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&function(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}(e,i)),n}return i._value=t,i}function hc(e,t){var n,r;function i(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&function(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}(e,i)),n}return i._value=t,i}function gc(e,t){return function(){nu(this,e).delay=+t.apply(this,arguments)}}function mc(e,t){return t=+t,function(){nu(this,e).delay=t}}function vc(e,t){return function(){ru(this,e).duration=+t.apply(this,arguments)}}function yc(e,t){return t=+t,function(){ru(this,e).duration=t}}var bc=Tl.prototype.constructor;function xc(e){return function(){this.style.removeProperty(e)}}var wc=0;function _c(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function kc(){return++wc}var Sc=Tl.prototype;_c.prototype=function(e){return Tl().transition(e)}.prototype={constructor:_c,select:function(e){var t=this._name,n=this._id;"function"!==typeof e&&(e=vs(e));for(var r=this._groups,i=r.length,o=new Array(i),a=0;a<i;++a)for(var s,l,u=r[a],c=u.length,d=o[a]=new Array(c),f=0;f<c;++f)(s=u[f])&&(l=e.call(s,s.__data__,f,u))&&("__data__"in s&&(l.__data__=s.__data__),d[f]=l,tu(d[f],t,n,f,d,iu(s,n)));return new _c(o,this._parents,t,n)},selectAll:function(e){var t=this._name,n=this._id;"function"!==typeof e&&(e=bs(e));for(var r=this._groups,i=r.length,o=[],a=[],s=0;s<i;++s)for(var l,u=r[s],c=u.length,d=0;d<c;++d)if(l=u[d]){for(var f,p=e.call(l,l.__data__,d,u),h=iu(l,n),g=0,m=p.length;g<m;++g)(f=p[g])&&tu(f,t,n,g,p,h);o.push(p),a.push(l)}return new _c(o,a,t,n)},selectChild:Sc.selectChild,selectChildren:Sc.selectChildren,filter:function(e){"function"!==typeof e&&(e=ws(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var o,a=t[i],s=a.length,l=r[i]=[],u=0;u<s;++u)(o=a[u])&&e.call(o,o.__data__,u,a)&&l.push(o);return new _c(r,this._parents,this._name,this._id)},merge:function(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,r=t.length,i=n.length,o=Math.min(r,i),a=new Array(r),s=0;s<o;++s)for(var l,u=t[s],c=n[s],d=u.length,f=a[s]=new Array(d),p=0;p<d;++p)(l=u[p]||c[p])&&(f[p]=l);for(;s<r;++s)a[s]=t[s];return new _c(a,this._parents,this._name,this._id)},selection:function(){return new bc(this._groups,this._parents)},transition:function(){for(var e=this._name,t=this._id,n=kc(),r=this._groups,i=r.length,o=0;o<i;++o)for(var a,s=r[o],l=s.length,u=0;u<l;++u)if(a=s[u]){var c=iu(a,t);tu(a,e,n,u,s,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new _c(r,this._parents,e,n)},call:Sc.call,nodes:Sc.nodes,node:Sc.node,size:Sc.size,empty:Sc.empty,each:Sc.each,on:function(e,t){var n=this._id;return arguments.length<2?iu(this.node(),n).on.on(e):this.each(function(e,t,n){var r,i,o=function(e){return(e+"").trim().split(/^|\s+/).every(function(e){var t=e.indexOf(".");return t>=0&&(e=e.slice(0,t)),!e||"start"===e})}(t)?nu:ru;return function(){var a=o(this,e),s=a.on;s!==r&&(i=(r=s).copy()).on(t,n),a.on=i}}(n,e,t))},attr:function(e,t){var n=$s(e),r="transform"===n?fu:ac;return this.attrTween(e,"function"===typeof t?(n.local?fc:dc)(n,r,gu(this,"attr."+e,t)):null==t?(n.local?lc:sc)(n):(n.local?cc:uc)(n,r,t))},attrTween:function(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(null==t)return this.tween(n,null);if("function"!==typeof t)throw new Error;var r=$s(e);return this.tween(n,(r.local?pc:hc)(r,t))},style:function(e,t,n){var r="transform"===(e+="")?du:ac;return null==t?this.styleTween(e,function(e,t){var n,r,i;return function(){var o=qs(this,e),a=(this.style.removeProperty(e),qs(this,e));return o===a?null:o===n&&a===r?i:i=t(n=o,r=a)}}(e,r)).on("end.style."+e,xc(e)):"function"===typeof t?this.styleTween(e,function(e,t,n){var r,i,o;return function(){var a=qs(this,e),s=n(this),l=s+"";return null==s&&(this.style.removeProperty(e),l=s=qs(this,e)),a===l?null:a===r&&l===i?o:(i=l,o=t(r=a,s))}}(e,r,gu(this,"style."+e,t))).each(function(e,t){var n,r,i,o,a="style."+t,s="end."+a;return function(){var l=ru(this,e),u=l.on,c=null==l.value[a]?o||(o=xc(t)):void 0;u===n&&i===c||(r=(n=u).copy()).on(s,i=c),l.on=r}}(this._id,e)):this.styleTween(e,function(e,t,n){var r,i,o=n+"";return function(){var a=qs(this,e);return a===o?null:a===r?i:i=t(r=a,n)}}(e,r,t),n).on("end.style."+e,null)},styleTween:function(e,t,n){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==t)return this.tween(r,null);if("function"!==typeof t)throw new Error;return this.tween(r,function(e,t,n){var r,i;function o(){var o=t.apply(this,arguments);return o!==i&&(r=(i=o)&&function(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}(e,o,n)),r}return o._value=t,o}(e,t,null==n?"":n))},text:function(e){return this.tween("text","function"===typeof e?function(e){return function(){var t=e(this);this.textContent=null==t?"":t}}(gu(this,"text",e)):function(e){return function(){this.textContent=e}}(null==e?"":e+""))},textTween:function(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(null==e)return this.tween(t,null);if("function"!==typeof e)throw new Error;return this.tween(t,function(e){var t,n;function r(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&function(e){return function(t){this.textContent=e.call(this,t)}}(r)),t}return r._value=e,r}(e))},remove:function(){return this.on("end.remove",function(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}(this._id))},tween:function(e,t){var n=this._id;if(e+="",arguments.length<2){for(var r,i=iu(this.node(),n).tween,o=0,a=i.length;o<a;++o)if((r=i[o]).name===e)return r.value;return null}return this.each((null==t?pu:hu)(n,e,t))},delay:function(e){var t=this._id;return arguments.length?this.each(("function"===typeof e?gc:mc)(t,e)):iu(this.node(),t).delay},duration:function(e){var t=this._id;return arguments.length?this.each(("function"===typeof e?vc:yc)(t,e)):iu(this.node(),t).duration},ease:function(e){var t=this._id;return arguments.length?this.each(function(e,t){if("function"!==typeof t)throw new Error;return function(){ru(this,e).ease=t}}(t,e)):iu(this.node(),t).ease},easeVarying:function(e){if("function"!==typeof e)throw new Error;return this.each(function(e,t){return function(){var n=t.apply(this,arguments);if("function"!==typeof n)throw new Error;ru(this,e).ease=n}}(this._id,e))},end:function(){var e,t,n=this,r=n._id,i=n.size();return new Promise(function(o,a){var s={value:a},l={value:function(){0===--i&&o()}};n.each(function(){var n=ru(this,r),i=n.on;i!==e&&((t=(e=i).copy())._.cancel.push(s),t._.interrupt.push(s),t._.end.push(l)),n.on=t}),0===i&&o()})},[Symbol.iterator]:Sc[Symbol.iterator]};var Ec={time:null,delay:0,duration:250,ease:function(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}};function Cc(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}Tl.prototype.interrupt=function(e){return this.each(function(){!function(e,t){var n,r,i,o=e.__transition,a=!0;if(o){for(i in t=null==t?null:t+"",o)(n=o[i]).name===t?(r=n.state>2&&n.state<5,n.state=6,n.timer.stop(),n.on.call(r?"interrupt":"cancel",e,e.__data__,n.index,n.group),delete o[i]):a=!1;a&&delete e.__transition}}(this,e)})},Tl.prototype.transition=function(e){var t,n;e instanceof _c?(t=e._id,e=e._name):(t=kc(),(n=Ec).time=Vl(),e=null==e?null:e+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var a,s=r[o],l=s.length,u=0;u<l;++u)(a=s[u])&&tu(a,e,t,u,s,n||Cc(a,t));return new _c(r,this._parents,e,t)};const{abs:jc,max:Tc,min:Rc}=Math;function Oc(e){return[+e[0],+e[1]]}function Pc(e){return[Oc(e[0]),Oc(e[1])]}["w","e"].map(Nc),["n","s"].map(Nc),["n","w","e","s","nw","ne","sw","se"].map(Nc);function Nc(e){return{type:e}}var zc={},Ac={};function Lc(e){return new Function("d","return {"+e.map(function(e,t){return JSON.stringify(e)+": d["+t+'] || ""'}).join(",")+"}")}function $c(e){var t=Object.create(null),n=[];return e.forEach(function(e){for(var r in e)r in t||n.push(t[r]=r)}),n}function Dc(e,t){var n=e+"",r=n.length;return r<t?new Array(t-r+1).join(0)+n:n}function Mc(e){var t,n=e.getUTCHours(),r=e.getUTCMinutes(),i=e.getUTCSeconds(),o=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":((t=e.getUTCFullYear())<0?"-"+Dc(-t,6):t>9999?"+"+Dc(t,6):Dc(t,4))+"-"+Dc(e.getUTCMonth()+1,2)+"-"+Dc(e.getUTCDate(),2)+(o?"T"+Dc(n,2)+":"+Dc(r,2)+":"+Dc(i,2)+"."+Dc(o,3)+"Z":i?"T"+Dc(n,2)+":"+Dc(r,2)+":"+Dc(i,2)+"Z":r||n?"T"+Dc(n,2)+":"+Dc(r,2)+"Z":"")}function Ic(e){var t=new RegExp('["'+e+"\n\r]"),n=e.charCodeAt(0);function r(e,t){var r,i=[],o=e.length,a=0,s=0,l=o<=0,u=!1;function c(){if(l)return Ac;if(u)return u=!1,zc;var t,r,i=a;if(34===e.charCodeAt(i)){for(;a++<o&&34!==e.charCodeAt(a)||34===e.charCodeAt(++a););return(t=a)>=o?l=!0:10===(r=e.charCodeAt(a++))?u=!0:13===r&&(u=!0,10===e.charCodeAt(a)&&++a),e.slice(i+1,t-1).replace(/""/g,'"')}for(;a<o;){if(10===(r=e.charCodeAt(t=a++)))u=!0;else if(13===r)u=!0,10===e.charCodeAt(a)&&++a;else if(r!==n)continue;return e.slice(i,t)}return l=!0,e.slice(i,o)}for(10===e.charCodeAt(o-1)&&--o,13===e.charCodeAt(o-1)&&--o;(r=c())!==Ac;){for(var d=[];r!==zc&&r!==Ac;)d.push(r),r=c();t&&null==(d=t(d,s++))||i.push(d)}return i}function i(t,n){return t.map(function(t){return n.map(function(e){return a(t[e])}).join(e)})}function o(t){return t.map(a).join(e)}function a(e){return null==e?"":e instanceof Date?Mc(e):t.test(e+="")?'"'+e.replace(/"/g,'""')+'"':e}return{parse:function(e,t){var n,i,o=r(e,function(e,r){if(n)return n(e,r-1);i=e,n=t?function(e,t){var n=Lc(e);return function(r,i){return t(n(r),i,e)}}(e,t):Lc(e)});return o.columns=i||[],o},parseRows:r,format:function(t,n){return null==n&&(n=$c(t)),[n.map(a).join(e)].concat(i(t,n)).join("\n")},formatBody:function(e,t){return null==t&&(t=$c(e)),i(e,t).join("\n")},formatRows:function(e){return e.map(o).join("\n")},formatRow:o,formatValue:a}}var Fc=Ic(","),Uc=Fc.parse,Bc=(Fc.parseRows,Fc.format,Fc.formatBody,Fc.formatRows,Fc.formatRow,Fc.formatValue,Ic("\t")),Wc=Bc.parse;Bc.parseRows,Bc.format,Bc.formatBody,Bc.formatRows,Bc.formatRow,Bc.formatValue;function Hc(e){if(!e.ok)throw new Error(e.status+" "+e.statusText);return e.text()}function Vc(e){return function(t,n,r){return 2===arguments.length&&"function"===typeof n&&(r=n,n=void 0),function(e,t){return fetch(e,t).then(Hc)}(t,n).then(function(t){return e(t,r)})}}var Yc=Vc(Uc);Vc(Wc),Array.prototype.slice;function qc(e){return function(){return e}}function Kc(e){this._context=e}function Qc(e){return new Kc(e)}Kc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t)}}};const Xc=Math.PI,Gc=2*Xc,Jc=1e-6,Zc=Gc-Jc;function ed(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}class td{constructor(e){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=null==e?ed:function(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return ed;const n=10**t;return function(e){this._+=e[0];for(let t=1,r=e.length;t<r;++t)this._+=Math.round(arguments[t]*n)/n+e[t]}}(e)}moveTo(e,t){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`}closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(e,t){this._append`L${this._x1=+e},${this._y1=+t}`}quadraticCurveTo(e,t,n,r){this._append`Q${+e},${+t},${this._x1=+n},${this._y1=+r}`}bezierCurveTo(e,t,n,r,i,o){this._append`C${+e},${+t},${+n},${+r},${this._x1=+i},${this._y1=+o}`}arcTo(e,t,n,r,i){if(e=+e,t=+t,n=+n,r=+r,(i=+i)<0)throw new Error(`negative radius: ${i}`);let o=this._x1,a=this._y1,s=n-e,l=r-t,u=o-e,c=a-t,d=u*u+c*c;if(null===this._x1)this._append`M${this._x1=e},${this._y1=t}`;else if(d>Jc)if(Math.abs(c*s-l*u)>Jc&&i){let f=n-o,p=r-a,h=s*s+l*l,g=f*f+p*p,m=Math.sqrt(h),v=Math.sqrt(d),y=i*Math.tan((Xc-Math.acos((h+d-g)/(2*m*v)))/2),b=y/v,x=y/m;Math.abs(b-1)>Jc&&this._append`L${e+b*u},${t+b*c}`,this._append`A${i},${i},0,0,${+(c*f>u*p)},${this._x1=e+x*s},${this._y1=t+x*l}`}else this._append`L${this._x1=e},${this._y1=t}`;else;}arc(e,t,n,r,i,o){if(e=+e,t=+t,o=!!o,(n=+n)<0)throw new Error(`negative radius: ${n}`);let a=n*Math.cos(r),s=n*Math.sin(r),l=e+a,u=t+s,c=1^o,d=o?r-i:i-r;null===this._x1?this._append`M${l},${u}`:(Math.abs(this._x1-l)>Jc||Math.abs(this._y1-u)>Jc)&&this._append`L${l},${u}`,n&&(d<0&&(d=d%Gc+Gc),d>Zc?this._append`A${n},${n},0,1,${c},${e-a},${t-s}A${n},${n},0,1,${c},${this._x1=l},${this._y1=u}`:d>Jc&&this._append`A${n},${n},0,${+(d>=Xc)},${c},${this._x1=e+n*Math.cos(i)},${this._y1=t+n*Math.sin(i)}`)}rect(e,t,n,r){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${n=+n}v${+r}h${-n}Z`}toString(){return this._}}function nd(e){return e[0]}function rd(e){return e[1]}function id(e,t){var n=qc(!0),r=null,i=Qc,o=null,a=function(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(null==n)t=null;else{const e=Math.floor(n);if(!(e>=0))throw new RangeError(`invalid digits: ${n}`);t=e}return e},()=>new td(t)}(s);function s(s){var l,u,c,d=(s=function(e){return"object"===typeof e&&"length"in e?e:Array.from(e)}(s)).length,f=!1;for(null==r&&(o=i(c=a())),l=0;l<=d;++l)!(l<d&&n(u=s[l],l,s))===f&&((f=!f)?o.lineStart():o.lineEnd()),f&&o.point(+e(u,l,s),+t(u,l,s));if(c)return o=null,c+""||null}return e="function"===typeof e?e:void 0===e?nd:qc(e),t="function"===typeof t?t:void 0===t?rd:qc(t),s.x=function(t){return arguments.length?(e="function"===typeof t?t:qc(+t),s):e},s.y=function(e){return arguments.length?(t="function"===typeof e?e:qc(+e),s):t},s.defined=function(e){return arguments.length?(n="function"===typeof e?e:qc(!!e),s):n},s.curve=function(e){return arguments.length?(i=e,null!=r&&(o=i(r)),s):i},s.context=function(e){return arguments.length?(null==e?r=o=null:o=i(r=e),s):r},s}function od(){}function ad(e,t,n){e._context.bezierCurveTo(e._x1+e._k*(e._x2-e._x0),e._y1+e._k*(e._y2-e._y0),e._x2+e._k*(e._x1-t),e._y2+e._k*(e._y1-n),e._x2,e._y2)}function sd(e,t){this._context=e,this._k=(1-t)/6}sd.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:ad(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2,this._x1=e,this._y1=t;break;case 2:this._point=3;default:ad(this,e,t)}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};(function e(t){function n(e){return new sd(e,t)}return n.tension=function(t){return e(+t)},n})(0);function ld(e,t){this._context=e,this._k=(1-t)/6}ld.prototype={areaStart:od,areaEnd:od,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x3=e,this._y3=t;break;case 1:this._point=2,this._context.moveTo(this._x4=e,this._y4=t);break;case 2:this._point=3,this._x5=e,this._y5=t;break;default:ad(this,e,t)}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};(function e(t){function n(e){return new ld(e,t)}return n.tension=function(t){return e(+t)},n})(0),Math.abs,Math.atan2,Math.cos,Math.max,Math.min,Math.sin,Math.sqrt,Math.PI;function ud(e,t,n){var r=e._x1,i=e._y1,o=e._x2,a=e._y2;if(e._l01_a>1e-12){var s=2*e._l01_2a+3*e._l01_a*e._l12_a+e._l12_2a,l=3*e._l01_a*(e._l01_a+e._l12_a);r=(r*s-e._x0*e._l12_2a+e._x2*e._l01_2a)/l,i=(i*s-e._y0*e._l12_2a+e._y2*e._l01_2a)/l}if(e._l23_a>1e-12){var u=2*e._l23_2a+3*e._l23_a*e._l12_a+e._l12_2a,c=3*e._l23_a*(e._l23_a+e._l12_a);o=(o*u+e._x1*e._l23_2a-t*e._l12_2a)/c,a=(a*u+e._y1*e._l23_2a-n*e._l12_2a)/c}e._context.bezierCurveTo(r,i,o,a,e._x2,e._y2)}function cd(e,t){this._context=e,this._alpha=t}cd.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){if(e=+e,t=+t,this._point){var n=this._x2-e,r=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3;default:ud(this,e,t)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};(function e(t){function n(e){return t?new cd(e,t):new sd(e,0)}return n.alpha=function(t){return e(+t)},n})(.5);function dd(e,t){this._context=e,this._alpha=t}dd.prototype={areaStart:od,areaEnd:od,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(e,t){if(e=+e,t=+t,this._point){var n=this._x2-e,r=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=e,this._y3=t;break;case 1:this._point=2,this._context.moveTo(this._x4=e,this._y4=t);break;case 2:this._point=3,this._x5=e,this._y5=t;break;default:ud(this,e,t)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const fd=function e(t){function n(e){return t?new dd(e,t):new ld(e,0)}return n.alpha=function(t){return e(+t)},n}(.5);function pd(e,t,n){this.k=e,this.x=t,this.y=n}pd.prototype={constructor:pd,scale:function(e){return 1===e?this:new pd(this.k*e,this.x,this.y)},translate:function(e,t){return 0===e&0===t?this:new pd(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};new pd(1,0,0);pd.prototype;const hd=e=>{let{lanes:t}=e;const n=id().x(e=>e.x).y(e=>e.y).curve(fd);return(0,qt.jsx)("g",{children:Object.values(t).map((e,t)=>(0,qt.jsx)("path",{d:n(e),fill:"none",stroke:"#555",strokeWidth:"0.8",strokeDasharray:0===t?"0.1, 0.1":"none"},t))})},gd=e=>{let{pitLane:t,pitStops:n}=e;const r=id().x(e=>e.x).y(e=>e.y).curve(Qc);return(0,qt.jsxs)("g",{children:[(0,qt.jsx)("path",{d:r(t),fill:"none",stroke:"#777",strokeWidth:"0.5"}),n.map(e=>(0,qt.jsx)("rect",{x:e.x-.4,y:e.y-.4,width:"0.8",height:"0.8",fill:"#444",stroke:"#888",strokeWidth:"0.1"},e.id)),t.length>0&&(0,qt.jsx)("line",{x1:t[t.length-1].x,y1:t[t.length-1].y-.5,x2:t[t.length-1].x,y2:t[t.length-1].y+.5,stroke:"#ffcc00",strokeWidth:"0.2",strokeDasharray:"0.2, 0.1"})]})},md=Ui.g`
  /* Start/Finish line specific styles */
`,vd=(Ui.line`
  stroke: white;
  stroke-width: 0.1;
`,Ui.rect`
  fill: url(#checkerboard);
`,e=>{let{lanes:t}=e;if(!t[1]||!t[4])return null;const n=t[1].find(e=>"1"===e.id),r=t[1].find(e=>"96"===e.id),i=t[4].find(e=>"1"===e.id),o=t[4].find(e=>"96"===e.id);if(!n||!r||!i||!o)return null;const a=(r.x+o.x)/2,s=(r.y+o.y)/2,l=(n.x+i.x)/2,u=(n.y+i.y)/2;return(0,qt.jsxs)(md,{children:[(0,qt.jsx)("defs",{children:(0,qt.jsxs)("pattern",{id:"checkerboard",patternUnits:"userSpaceOnUse",width:"0.4",height:"0.4",children:[(0,qt.jsx)("rect",{x:"0",y:"0",width:"0.2",height:"0.2",fill:"white"}),(0,qt.jsx)("rect",{x:"0.2",y:"0",width:"0.2",height:"0.2",fill:"black"}),(0,qt.jsx)("rect",{x:"0",y:"0.2",width:"0.2",height:"0.2",fill:"black"}),(0,qt.jsx)("rect",{x:"0.2",y:"0.2",width:"0.2",height:"0.2",fill:"white"})]})}),(0,qt.jsx)("line",{x1:a,y1:s,x2:l,y2:u,stroke:"white",strokeWidth:"0.2",strokeDasharray:"0.4, 0.2"})]})}),yd=e=>{let{lanes:t,pitLane:n,pitStops:r,showNumbers:i=!1}=e;const o=[...Object.values(t).flat(),...n,...r];return(0,qt.jsxs)("g",{children:[o.map(e=>(0,qt.jsx)("circle",{cx:e.x,cy:e.y,r:"0.2",fill:"#222"},`${e.lane}-${e.id}`)),i&&Object.values(t).flat().map(e=>(0,qt.jsx)("text",{x:e.x,y:e.y,fontSize:"0.3",fill:"#666",textAnchor:"middle",dy:".1em",children:e.id},`num-${e.lane}-${e.id}`))]})},bd=()=>{const[e,t]=(0,r.useState)({lanes:{},pitLane:[],pitStops:[],loading:!0,error:null});return(0,r.useEffect)(()=>{(async()=>{try{const e=await Yc("/track/TrackCoordinates.csv"),n={},r=[],i=[];e.forEach(e=>{const t={id:e.Spot,lane:e.Lane,x:+e.X,y:+e.Y};"PL"===e.Lane?r.push(t):"P"===e.Lane?i.push(t):(n[e.Lane]||(n[e.Lane]=[]),n[e.Lane].push(t))});for(const t in n)n[t].sort((e,t)=>"96"===e.id?-1:"96"===t.id?1:parseInt(e.id)-parseInt(t.id));t({lanes:n,pitLane:r,pitStops:i,loading:!1,error:null})}catch(e){console.error("Error loading track data:",e),t({lanes:{},pitLane:[],pitStops:[],loading:!1,error:"Failed to load track data."})}})()},[]),e},xd=Ui.svg`
  background-color: #333;
  border-radius: 15px;
`,wd=Ui.text`
  fill: #fff;
  font-size: 1px;
  text-anchor: middle;
`,_d=()=>{const{lanes:e,pitLane:t,pitStops:n,loading:r,error:i}=bd();return r?(0,qt.jsx)(xd,{viewBox:"-20 -20 40 40",children:(0,qt.jsx)(wd,{children:"Loading Track..."})}):i?(0,qt.jsx)(xd,{viewBox:"-20 -20 40 40",children:(0,qt.jsx)(wd,{children:i})}):(0,qt.jsxs)(xd,{viewBox:"-20 -20 40 40",children:[(0,qt.jsx)(hd,{lanes:e}),(0,qt.jsx)(gd,{pitLane:t,pitStops:n}),(0,qt.jsx)(vd,{lanes:e}),(0,qt.jsx)(yd,{lanes:e,pitLane:t,pitStops:n})]})},kd=Bi`
  0% { transform: translateX(-2px) translateY(-1px); }
  50% { transform: translateX(2px) translateY(1px); }
  100% { transform: translateX(-2px) translateY(-1px); }
`,Sd=(Bi`
  0%, 100% { box-shadow: 0 0 10px rgba(255, 165, 0, 0.3); }
  50% { box-shadow: 0 0 20px rgba(255, 165, 0, 0.6), 0 0 30px rgba(255, 165, 0, 0.2); }
`,Bi`
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
`,Ui.div`
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
`),Ed=Ui.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  transform-origin: center center;
  transition: ${e=>e.animating?"transform 1s cubic-bezier(0.4, 0, 0.2, 1)":"none"};
  transform: ${e=>`translate(${e.panX}px, ${e.panY}px) scale(${e.zoom})`};
`,Cd=Ui.div`
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
  
  ${e=>e.isMoving&&Mi`
    animation: ${kd} 0.4s ease-in-out;
  `}
  
  ${e=>e.isActive&&Mi`
    transform: scale(1.2);
    box-shadow: 
      0 5px 15px rgba(0, 0, 0, 0.5),
      0 0 0 2px ${e.color||"#00d4ff"},
      0 0 25px ${e.color||"#00d4ff"}80;
  `}
`,jd=Ui.div`
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
`,Td=Ui.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 200;
`,Rd=Ui.button`
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
`,Od=Ui.div`
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
`,Pd=e=>{let{players:t,trackPositions:n,placedCoins:i,activePlayerId:o,stage:a,onLaneSelect:s,onCoinPlacement:l,focusOnPolePosition:u=!1,showControls:c=!0,showInfo:d=!0,showPositionNumbers:f=!1}=e;const[p,h]=(0,r.useState)(0),[g,m]=(0,r.useState)(0),[v,y]=(0,r.useState)(1),[b,x]=(0,r.useState)(!1),[w,_]=(0,r.useState)({x:0,y:0}),[k,S]=(0,r.useState)(!1),E=(0,r.useRef)(),{lanes:C,pitLane:j,pitStops:T,loading:R,error:O}=bd(),P=(0,r.useCallback)((e,t)=>{if(R||O)return{x:0,y:0};const n=(C[t]||[]).find(t=>t.id===String(e));return n?{x:n.x,y:n.y}:{x:0,y:0}},[C,R,O]),N=(0,r.useCallback)(e=>{if(R||O)return{x:0,y:0};const t=T.find(t=>t.id===e);return t?{x:t.x,y:t.y}:{x:0,y:0}},[T,R,O]);(0,r.useEffect)(()=>{if("lane-selection"===a&&u&&!R){const e=P(96,1);if(0===e.x&&0===e.y)return;const t=E.current.offsetWidth,n=E.current.offsetHeight;S(!0),y(2.5),h(2.5*-e.x+t/2),m(2.5*-e.y+n/2),setTimeout(()=>S(!1),1e3)}},[u,a,P,R]);const z=()=>{x(!1)},A=e=>{"lane-selection"===a&&s&&"96"===e.id&&s(e.lane),"coin-placement"===a&&l&&l({position:e.id,lane:e.lane})},L="lane-selection"!==a;return(0,qt.jsxs)(Sd,{ref:E,panEnabled:L,onMouseDown:e=>{L&&(x(!0),_({x:e.clientX,y:e.clientY}))},onMouseMove:e=>{if(!b||!L)return;const t=e.clientX-w.x,n=e.clientY-w.y;h(e=>e+t),m(e=>e+n),_({x:e.clientX,y:e.clientY})},onMouseUp:z,onMouseLeave:z,onWheel:e=>{if(!L)return;e.preventDefault();const t=Math.max(.5,Math.min(v-.001*e.deltaY,5)),n=E.current.getBoundingClientRect(),r=e.clientX-n.left,i=e.clientY-n.top,o=(i-g)/v;h(r-(r-p)/v*t),m(i-o*t),y(t)},children:[(0,qt.jsxs)(Ed,{panX:p,panY:g,zoom:v,animating:k,children:[(0,qt.jsx)(_d,{showNumbers:f}),!R&&"lane-selection"===a&&Object.values(C).map(e=>{const t=e.find(e=>"96"===e.id);if(!t)return null;const r=!Object.values(n).some(e=>e.lane===t.lane);return(0,qt.jsx)("circle",{cx:t.x,cy:t.y,r:"0.8",fill:r?"rgba(0, 255, 128, 0.5)":"rgba(255, 0, 0, 0.3)",stroke:r?"rgba(0, 255, 128, 1)":"rgba(255, 0, 0, 0.6)",strokeWidth:"0.1",onClick:()=>r&&A(t),style:{cursor:r?"pointer":"not-allowed"}},`selectable-${t.lane}`)}),!R&&"coin-placement"===a&&Object.values(C).flat().map(e=>(0,qt.jsx)("circle",{cx:e.x,cy:e.y,r:"0.4",fill:"rgba(255, 255, 0, 0.2)",stroke:"rgba(255, 255, 0, 0.5)",strokeWidth:"0.05",onClick:()=>A(e),style:{cursor:"pointer"}},`coin-spot-${e.lane}-${e.id}`)),Object.entries(i).map(e=>{var n;let[r,i]=e;const[a,s]=r.split("-").map(Number),l=P(a,s);return(0,qt.jsx)(jd,{style:{left:`${l.x}px`,top:`${l.y}px`},color:playerColors[i.placedBy]||"#fff",title:`Coin placed by ${(null===(n=t.find(e=>e.id===i.placedBy))||void 0===n?void 0:n.name)||"Unknown"}`,children:i.placedBy===o?i.value.charAt(0):"?"},r)}),t.map(e=>{const t=n[e.id];if(!t)return null;let r;return r=t.inPit?N(t.position):P(t.position||96,t.lane||1),(0,qt.jsx)(Cd,{style:{left:`${r.x}px`,top:`${r.y}px`,transform:`translate(-50%, -50%) scale(${1/v})`},color:playerColors[e.id],isRacing:t.isRacing,title:`${e.name} - Lap ${t.lap||0}`,children:(i=e.name,i.split(" ").map(e=>e[0]).join("").toUpperCase().slice(0,2))},e.id);var i})]}),c&&(0,qt.jsxs)(Td,{children:[(0,qt.jsx)(Rd,{onClick:()=>handleZoom(.2),disabled:!L,children:"+"}),(0,qt.jsx)(Rd,{onClick:()=>handleZoom(-.2),disabled:!L,children:"-"}),(0,qt.jsx)(Rd,{onClick:()=>{S(!0),h(0),m(0),y(1),setTimeout(()=>S(!1),500)},disabled:!L,children:"Reset"})]}),d&&(0,qt.jsxs)(Od,{children:[(0,qt.jsxs)("div",{className:"info",children:["Zoom: ",v.toFixed(2),"x"]}),(0,qt.jsxs)("div",{className:"info",children:["Stage: ",a]}),R&&(0,qt.jsx)("div",{className:"info",children:"Loading Track..."}),O&&(0,qt.jsx)("div",{className:"info",style:{color:"red"},children:O})]})]})},Nd=Bi`
  0% { transform: rotateX(0deg) rotateY(0deg); }
  25% { transform: rotateX(90deg) rotateY(0deg); }
  50% { transform: rotateX(180deg) rotateY(90deg); }
  75% { transform: rotateX(270deg) rotateY(180deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
`,zd=Bi`
  0%, 100% { box-shadow: 0 0 15px rgba(255, 255, 255, 0.3); }
  50% { box-shadow: 0 0 25px rgba(255, 255, 255, 0.6), 0 0 35px rgba(255, 255, 255, 0.2); }
`,Ad=Bi`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`,Ld=(Ui.div`
  perspective: 200px;
  display: inline-block;
  margin: 10px;
`,Ui.div`
  width: ${e=>"large"===e.size?"80px":"medium"===e.size?"60px":"40px"};
  height: ${e=>"large"===e.size?"80px":"medium"===e.size?"60px":"40px"};
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: ${e=>e.interactive?"pointer":"default"};
  
  ${e=>e.isRolling&&Mi`
    animation: ${Nd} 1s ease-in-out;
  `}
  
  ${e=>e.interactive&&Mi`
    &:hover {
      animation: ${Ad} 0.5s ease-in-out;
    }
  `}
  
  ${e=>e.isGlowing&&Mi`
    animation: ${zd} 2s ease-in-out infinite;
  `}
`,Ui.div`
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
`),$d=(Ui(Ld)`
  transform: rotateY(0deg) translateZ(${e=>"large"===e.size?"40px":"medium"===e.size?"30px":"20px"});
`,Ui(Ld)`
  transform: rotateY(180deg) translateZ(${e=>"large"===e.size?"40px":"medium"===e.size?"30px":"20px"});
`,Ui(Ld)`
  transform: rotateY(90deg) translateZ(${e=>"large"===e.size?"40px":"medium"===e.size?"30px":"20px"});
`,Ui(Ld)`
  transform: rotateY(-90deg) translateZ(${e=>"large"===e.size?"40px":"medium"===e.size?"30px":"20px"});
`,Ui(Ld)`
  transform: rotateX(90deg) translateZ(${e=>"large"===e.size?"40px":"medium"===e.size?"30px":"20px"});
`,Ui(Ld)`
  transform: rotateX(-90deg) translateZ(${e=>"large"===e.size?"40px":"medium"===e.size?"30px":"20px"});
`,Ui.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2px;
  padding: 8px;
  position: relative;
  z-index: 2;
`,Ui.div`
  width: ${e=>"large"===e.size?"8px":"medium"===e.size?"6px":"4px"};
  height: ${e=>"large"===e.size?"8px":"medium"===e.size?"6px":"4px"};
  border-radius: 50%;
  background: #333;
  justify-self: center;
  align-self: center;
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(0, 0, 0, 0.1);
`,Ui.div`
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: ${e=>"large"===e.size?"32px":"medium"===e.size?"24px":"16px"};
  color: #333;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
`,Ui.button`
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
`,Ui.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  margin-top: 1rem;
`,Ui.div`
  color: white;
  font-family: 'Rajdhani', sans-serif;
  font-size: 18px;
  font-weight: 600;
`,Ui.div`
  font-family: 'Orbitron', monospace;
  font-size: 24px;
  font-weight: bold;
  color: #ffd700;
  text-shadow: 0 0 10px #ffd700;
`,Bi`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`),Dd=Bi`
  0% { transform: translateX(100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`,Md=Bi`
  0%, 100% { box-shadow: 0 0 10px rgba(0, 212, 255, 0.3); }
  50% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.6), 0 0 30px rgba(0, 212, 255, 0.2); }
`,Id=(Bi`
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
`,Bi`
  0% { 
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% { 
    transform: translate(-50%, -50%) translateY(300px) scale(0.7);
    opacity: 0.8;
  }
`,Bi`
  0% { 
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% { 
    transform: translate(-50%, -50%) translateX(400px) scale(0.7);
    opacity: 0.8;
  }
`,Bi`
  0% { 
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% { 
    transform: translate(-50%, -50%) translateY(-300px) scale(0.7);
    opacity: 0.8;
  }
`,Bi`
  0% { 
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% { 
    transform: translate(-50%, -50%) translateX(-400px) scale(0.7);
    opacity: 0.8;
  }
`,Ui.div`
  min-height: 100vh;
  padding-top: 140px; /* Account for fixed header */
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  background: 
    radial-gradient(circle at 20% 30%, rgba(0, 212, 255, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(255, 56, 56, 0.05) 0%, transparent 50%),
    linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
  ${Mi`animation: ${$d} 0.8s ease-out;`}
`),Fd=Ui.div`
  max-width: 1400px;
  margin: 0 auto;
  ${Mi`animation: ${$d} 0.6s ease-out;`}
`,Ud=Ui.h1`
  font-family: 'Orbitron', monospace;
  font-size: 2.5rem;
  color: #00d4ff;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 
    0 0 20px #00d4ff,
    0 0 40px rgba(0, 212, 255, 0.5);
  ${Mi`animation: ${Md} 3s ease-in-out infinite;`}
`,Bd=Ui.p`
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`,Wd=Ui.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`,Hd=Ui.div`
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
`,Vd=Ui.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 5px; /* Add padding to prevent overlap */
  box-sizing: border-box;
`,Yd=Ui.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 1.5rem 2rem;
  border-radius: 15px;
  border: 2px solid rgba(255, 215, 0, 0.5);
  color: white;
  text-align: center;
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  ${Mi`animation: ${Dd} 0.5s ease-out;`}
`,qd=Ui.div`
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
`,Kd=Ui.div`
  color: ${e=>e.color||"#fff"};
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px ${e=>e.color||"#fff"};
`,Qd=Ui.div`
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  color: #000;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: 0.8rem;
  text-transform: uppercase;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
  animation: ${Dd} 0.5s ease-out, pulse 2s infinite;
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`,Xd=Ui.div`
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
`,Gd=Ui.div`
  perspective: 1000px;
  width: 80px; /* Fixed width to match medium card size */
  height: 112px; /* Fixed height to match medium card size */
  min-height: 112px;
  position: relative;
  box-sizing: border-box;
`,Jd=Ui.div`
  position: relative;
  width: 80px; /* Fixed width to match medium card size */
  height: 112px; /* Fixed height to match medium card size */
  min-height: 112px;
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform-style: preserve-3d;
  transform: ${e=>e.isFlipped?"rotateY(180deg)":"rotateY(0deg)"};
  box-sizing: border-box;
`,Zd=Ui.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
`,ef=Ui(Zd)`
  transform: rotateY(0deg);
`,tf=Ui(Zd)`
  transform: rotateY(180deg);
`,nf=Ui.button`
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
`,rf=Ui.div`
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
`,of=(Ui.div`
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
`,Ui.div`
  color: #ffd700;
  font-size: 1.4rem;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`,Ui.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0;
  flex-wrap: wrap;
`),af=Ui.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.2);
`,sf=Ui.div`
  color: ${e=>"black"===e.color?"white":e.color};
  font-weight: bold;
  font-size: 0.9rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`,lf=Ui.div`
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
`,uf=Ui.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  animation: ${$d} 0.6s ease-out;
  position: relative;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,cf=Ui.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,df=Ui.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 2px solid rgba(0, 212, 255, 0.3);
  border-radius: 20px;
  padding: 2rem;
  min-height: 200px;
`,ff=(Ui.div`
  margin-bottom: 1rem;
  text-align: center;
`,Ui.div`
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 1rem;
`),pf=(Ui.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Ui.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1.5rem;
`),hf=Ui.h3`
  font-family: 'Orbitron', monospace;
  color: #00d4ff;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`,gf=Ui.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`,mf=Ui.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 800px;
  width: 100%;
`,vf=Ui.div`
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
  
  ${e=>e.selected&&Mi`
    background: rgba(0, 212, 255, 0.1);
    animation: ${Md} 2s ease-in-out infinite;
  `}
`,yf=Ui.div`
  font-family: 'Orbitron', monospace;
  font-size: 3rem;
  font-weight: bold;
  color: #00d4ff;
  margin-bottom: 1rem;
  text-shadow: 0 0 20px #00d4ff;
`,bf=Ui.div`
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.1rem;
  line-height: 1.4;
`,xf=Ui.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,wf=Ui.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 2px solid rgba(255, 215, 0, 0.3);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  justify-content: center;
  min-height: 300px;
`,_f=Ui.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,kf=(Ui.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`,Ui.button`
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
`),Sf=(Ui.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  border: 2px solid rgba(255, 255, 255, 0.2);
`,Ui.div`
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
`),Ef=Ui.button`
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
`,Cf=Ui.div`
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
`,jf=Ui.div`
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
  animation: ${$d} 0.3s ease-out;
`,Tf=Ui.div`
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
`,Rf=Ui.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`,Of=Ui.div`
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
`,Pf=Ui.div`
  color: #ffd700;
  font-size: 1.1rem;
  font-style: italic;
  opacity: 0.8;
`;const Nf=function(){var e,t,n,i,o;const{currentRoom:a,player:s,gameState:l,socket:u,leaveRoom:c,selectDealerCard:d,drawCards:f,playCard:p,stormResults:h,continueToNextStage:g,placeCoin:m,continueToRacing:v,selectLane:y,rollDice:b,chooseMovement:x}=Jt(),[w,_]=(0,r.useState)(null),[k,S]=(0,r.useState)([1,1]),[E,C]=(0,r.useState)(null),[j,T]=(0,r.useState)(null),[R,O]=(0,r.useState)(null),P=(null===a||void 0===a||null===(e=a.gameState)||void 0===e?void 0:e.currentStage)||"lobby";console.log("\ud83c\udfaf GameBoard currentStage:",P),console.log("\ud83c\udfaf GameBoard room data:",null===a||void 0===a?void 0:a.name,null===a||void 0===a||null===(t=a.gameState)||void 0===t?void 0:t.stormRound);const N=(null===a||void 0===a?void 0:a.players)||[],z=N.map(e=>{var t;return{...e,cardCount:e.cardCount||(null===(t=e.cards)||void 0===t?void 0:t.length)||0}}),A=(null===a||void 0===a||null===(n=a.host)||void 0===n?void 0:n.id)===(null===s||void 0===s?void 0:s.id),L=(null===s||void 0===s?void 0:s.drawnCoins)||[],$=(null===s||void 0===s||s.id,function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"movement";S(e),b(t),console.log("Dice rolled:",e,"type:",t)});return(0,qt.jsxs)(Id,{children:[(0,qt.jsx)(Aa,{players:z,currentPlayer:null===a||void 0===a||null===(i=a.gameState)||void 0===i?void 0:i.currentPlayer,gameStage:P}),(0,qt.jsx)(Fd,{children:(()=>{var e,t,n,r,i,o,l,d,h,b,k,S,z,D,M,I,F,U,B,W,H,V,Y,q,K,Q,X,G,J,Z,ee,te,ne,re,ie,oe,ae,se,le,ue,ce,de,fe,pe,he,ge,me,ve,ye,be,xe,we,_e,ke;switch(P){case"dealer-selection":const P=(null===a||void 0===a||null===(e=a.gameState)||void 0===e?void 0:e.dealerSelectionCards)||[],Ee=((null===a||void 0===a||null===(t=a.gameState)||void 0===t?void 0:t.selectedDealerCards)||new Map,null===a||void 0===a||null===(n=a.players)||void 0===n?void 0:n.find(e=>e.dealerButton)),Ce=null===a||void 0===a||null===(r=a.players)||void 0===r?void 0:r.every(e=>null!==e.selectedDealerCard);return(0,qt.jsxs)(Wd,{children:[(0,qt.jsx)(Ud,{children:"Dealer Selection"}),(0,qt.jsx)(Bd,{children:"Players take turns selecting one face-down card. The player with the lowest card becomes the first dealer."}),(0,qt.jsx)(Hd,{children:P.map((e,t)=>{var n,r,i;const o=e.selected,l=e.selectedBy,c=l?null===a||void 0===a||null===(n=a.players)||void 0===n?void 0:n.find(e=>e.id===l):null,d=Ee&&l===Ee.id;return(0,qt.jsxs)(Vd,{children:[(0,qt.jsx)(Gd,{children:(0,qt.jsxs)(Jd,{isFlipped:o,children:[(0,qt.jsx)(ef,{children:(0,qt.jsx)(Ga,{isBack:!0,size:"medium",interactive:!o&&(null===a||void 0===a||null===(r=a.gameState)||void 0===r?void 0:r.currentPlayer)===(null===s||void 0===s?void 0:s.id),isPlayable:!o&&(null===a||void 0===a||null===(i=a.gameState)||void 0===i?void 0:i.currentPlayer)===(null===s||void 0===s?void 0:s.id),onClick:()=>!o&&(e=>{var t;(null===a||void 0===a||null===(t=a.gameState)||void 0===t?void 0:t.currentPlayer)===(null===s||void 0===s?void 0:s.id)&&u&&u.emit("select-dealer-card",{cardIndex:e})})(t)})}),(0,qt.jsx)(tf,{children:d?(0,qt.jsx)(Xd,{children:(0,qt.jsx)(Ga,{rank:e.rank,suit:e.suit,size:"medium",interactive:!1})}):(0,qt.jsx)(Ga,{rank:e.rank,suit:e.suit,size:"medium",interactive:!1})})]})}),o&&c&&(0,qt.jsxs)(qd,{children:[(0,qt.jsx)(Kd,{color:"black"===c.color?"#fff":c.color,children:c.name}),d&&(0,qt.jsx)(Qd,{children:"DEALER"})]})]},t)})}),Ee&&Ce?(0,qt.jsxs)(rf,{children:[(0,qt.jsx)("h3",{children:"\ud83c\udfc6 Dealer Selection Results"}),(0,qt.jsx)(of,{children:null===a||void 0===a||null===(i=a.players)||void 0===i?void 0:i.map((e,t)=>e.selectedDealerCard&&(0,qt.jsxs)(af,{children:[(0,qt.jsx)(sf,{color:"black"===e.color?"white":e.color,children:e.name}),(0,qt.jsx)(Ga,{rank:e.selectedDealerCard.rank,suit:e.selectedDealerCard.suit,size:"medium",style:{boxShadow:e.dealerButton?"0 0 20px rgba(255, 215, 0, 0.8)":"none",border:e.dealerButton?"3px solid #ffd700":"none"}}),e.dealerButton&&(0,qt.jsxs)(lf,{children:[(0,qt.jsx)("span",{children:"\ud83c\udfc6 DEALER"}),(0,qt.jsx)("small",{children:"Lowest Card (7 low, Ace high)"})]})]},e.id))}),(0,qt.jsxs)("p",{style:{marginTop:"1.5rem",fontSize:"1.2rem"},children:[(0,qt.jsx)("strong",{children:Ee.name})," becomes the first dealer!"]}),(null===a||void 0===a||null===(o=a.host)||void 0===o?void 0:o.id)===(null===s||void 0===s?void 0:s.id)&&(0,qt.jsx)(nf,{onClick:()=>null===u||void 0===u?void 0:u.emit("continue-to-storm"),children:"Continue to Storm Stage"}),(null===a||void 0===a||null===(l=a.host)||void 0===l?void 0:l.id)!==(null===s||void 0===s?void 0:s.id)&&(0,qt.jsx)("p",{style:{color:"#00d4ff",fontSize:"1rem"},children:"Waiting for host to continue..."})]}):(0,qt.jsx)(Yd,{children:(null===a||void 0===a||null===(d=a.gameState)||void 0===d?void 0:d.currentPlayer)===(null===s||void 0===s?void 0:s.id)?"Your turn - select a card!":`Waiting for ${(null===a||void 0===a||null===(h=a.players)||void 0===h||null===(b=h.find(e=>{var t;return e.id===(null===a||void 0===a||null===(t=a.gameState)||void 0===t?void 0:t.currentPlayer)}))||void 0===b?void 0:b.name)||"player"} to select a card...`})]});case"storm":if(null===a||void 0===a||null===(k=a.players)||void 0===k?void 0:k.every(e=>null!==e.stormFinishOrder)){var Se;const e=[...(null===a||void 0===a?void 0:a.players)||[]].sort((e,t)=>e.stormFinishOrder-t.stormFinishOrder);return(0,qt.jsx)(uf,{children:(0,qt.jsxs)(cf,{children:[(0,qt.jsx)(Ud,{children:"\ud83c\udfc6 Storm Results"}),(0,qt.jsxs)("div",{style:{background:"rgba(255,255,255,0.1)",borderRadius:"15px",padding:"2rem",margin:"2rem auto",maxWidth:"600px"},children:[(0,qt.jsx)("h3",{style:{color:"white",textAlign:"center",marginBottom:"1.5rem"},children:"Final Rankings"}),e.map((e,t)=>(0,qt.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"1rem",background:0===t?"rgba(255,215,0,0.2)":"rgba(255,255,255,0.05)",borderRadius:"10px",marginBottom:"0.5rem",border:0===t?"2px solid gold":"1px solid rgba(255,255,255,0.2)"},children:[(0,qt.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[(0,qt.jsx)("div",{style:{width:"30px",height:"30px",borderRadius:"50%",background:1===e.stormFinishOrder?"gold":2===e.stormFinishOrder?"silver":3===e.stormFinishOrder?"#cd7f32":"#666",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",color:"white"},children:e.stormFinishOrder}),(0,qt.jsx)("span",{style:{color:"white",fontSize:"1.1rem",fontWeight:"bold"},children:e.name})]}),(0,qt.jsx)("div",{style:{color:"#00d4ff",fontSize:"0.9rem"},children:1===e.stormFinishOrder?"\ud83c\udfc6 Winner!":2===e.stormFinishOrder?"\ud83e\udd48 Second Place":3===e.stormFinishOrder?"\ud83e\udd49 Third Place":"4th Place"})]},e.id))]}),null!==s&&void 0!==s&&s.isHost?(0,qt.jsx)("div",{style:{textAlign:"center",marginTop:"2rem"},children:(0,qt.jsxs)(nf,{onClick:()=>{var e;console.log(`\ud83c\udfaf Continuing to next stage from Storm round ${null===a||void 0===a||null===(e=a.gameState)||void 0===e?void 0:e.stormRound}`),g()},children:["Continue to ",1===(null===a||void 0===a||null===(Se=a.gameState)||void 0===Se?void 0:Se.stormRound)?"Lane Selection":"Coin Stage"]})}):(0,qt.jsx)("div",{style:{textAlign:"center",marginTop:"2rem",color:"white"},children:(0,qt.jsx)("p",{children:"\ud83d\udd52 Waiting for host to continue..."})})]})})}return(0,qt.jsx)(uf,{children:(0,qt.jsxs)(cf,{children:[(0,qt.jsx)(Ud,{children:"Storm Stage"}),(0,qt.jsx)(df,{children:(0,qt.jsxs)("div",{style:{display:"flex",gap:"4rem",alignItems:"flex-start",justifyContent:"center"},children:[(0,qt.jsxs)("div",{style:{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",position:"relative"},children:[(0,qt.jsx)("h4",{style:{color:"white",marginBottom:"1rem"},children:"Discard Pile"}),(0,qt.jsx)(Ga,{rank:(null===a||void 0===a||null===(S=a.gameState)||void 0===S||null===(z=S.topCard)||void 0===z?void 0:z.rank)||"8",suit:(null===a||void 0===a||null===(D=a.gameState)||void 0===D||null===(M=D.topCard)||void 0===M?void 0:M.suit)||"spades",size:"large"}),"Q"===(null===a||void 0===a||null===(I=a.gameState)||void 0===I||null===(F=I.topCard)||void 0===F?void 0:F.rank)&&(null===a||void 0===a||null===(U=a.gameState)||void 0===U?void 0:U.currentSuit)&&(0,qt.jsxs)("div",{style:{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",pointerEvents:"none",zIndex:5},children:[(0,qt.jsxs)("div",{style:{position:"absolute",top:"8px",left:"8px",background:"rgba(255,255,255,0.9)",borderRadius:"4px",padding:"2px 6px",fontSize:"0.8rem",fontWeight:"bold",color:"#333"},children:["Q","hearts"===a.gameState.topCard.suit?"\u2665\ufe0f":"diamonds"===a.gameState.topCard.suit?"\u2666\ufe0f":"spades"===a.gameState.topCard.suit?"\u2660\ufe0f":"\u2663\ufe0f"]}),(0,qt.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"3rem",textShadow:"0 0 4px rgba(0,0,0,0.5)"},children:"hearts"===a.gameState.currentSuit?"\u2665\ufe0f":"diamonds"===a.gameState.currentSuit?"\u2666\ufe0f":"spades"===a.gameState.currentSuit?"\u2660\ufe0f":"\u2663\ufe0f"})]}),E&&j===(null===s||void 0===s?void 0:s.id)&&(0,qt.jsxs)("div",{style:{position:"absolute",left:"-120px",top:"50%",transform:"translateY(-50%)",background:"white",border:"2px solid #333",borderRadius:"15px",padding:"10px",minWidth:"100px",boxShadow:"0 4px 8px rgba(0,0,0,0.3)",zIndex:10},children:[(0,qt.jsx)("div",{style:{color:"#333",fontWeight:"bold",marginBottom:"8px",fontSize:"0.9rem"},children:"Call Suit:"}),(0,qt.jsx)("div",{style:{display:"flex",gap:"8px",justifyContent:"center"},children:["hearts","diamonds","spades","clubs"].map(e=>(0,qt.jsx)("button",{onClick:()=>{console.log("\ud83d\udc78 Playing Queen with suit:",e,"Card ID:",E.id),p(E.id,e),C(null),T(null)},style:{background:"none",border:"1px solid #333",borderRadius:"4px",padding:"4px",cursor:"pointer",fontSize:"20px"},children:"hearts"===e?"\u2665\ufe0f":"diamonds"===e?"\u2666\ufe0f":"spades"===e?"\u2660\ufe0f":"\u2663\ufe0f"},e))}),(0,qt.jsx)("button",{onClick:()=>{C(null),T(null)},style:{marginTop:"8px",background:"#ff4444",color:"white",border:"none",borderRadius:"4px",padding:"4px 8px",cursor:"pointer",fontSize:"0.8rem",width:"100%"},children:"Cancel"}),(0,qt.jsx)("div",{style:{position:"absolute",right:"-10px",top:"50%",transform:"translateY(-50%)",width:0,height:0,borderTop:"10px solid transparent",borderBottom:"10px solid transparent",borderLeft:"10px solid white"}})]})]}),(0,qt.jsxs)("div",{style:{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,qt.jsxs)("div",{style:{marginBottom:"1rem"},children:[(0,qt.jsxs)("div",{style:{color:(null===a||void 0===a||null===(B=a.gameState)||void 0===B?void 0:B.toxicSevenCount)>0?"#ff4444":"white",fontSize:"1.1rem",fontWeight:"bold",textShadow:(null===a||void 0===a||null===(W=a.gameState)||void 0===W?void 0:W.toxicSevenCount)>0?"0 0 10px #ff4444":"none"},children:["Draw ",(null===a||void 0===a||null===(H=a.gameState)||void 0===H?void 0:H.toxicSevenCount)>0?2*a.gameState.toxicSevenCount:1]}),(0,qt.jsxs)("div",{style:{color:"rgba(255,255,255,0.8)",fontSize:"0.9rem"},children:[(null===a||void 0===a||null===(V=a.gameState)||void 0===V?void 0:V.deckSize)||0," cards remaining"]})]}),(0,qt.jsx)("div",{style:{position:"relative",display:"inline-block"},children:(0,qt.jsx)(Ga,{isBack:!0,size:"large",interactive:(null===a||void 0===a||null===(Y=a.gameState)||void 0===Y?void 0:Y.currentPlayer)===(null===s||void 0===s?void 0:s.id),onClick:()=>{var e;(null===a||void 0===a||null===(e=a.gameState)||void 0===e?void 0:e.currentPlayer)===(null===s||void 0===s?void 0:s.id)&&f()},style:{cursor:(null===a||void 0===a||null===(q=a.gameState)||void 0===q?void 0:q.currentPlayer)===(null===s||void 0===s?void 0:s.id)?"pointer":"default",filter:(null===a||void 0===a||null===(K=a.gameState)||void 0===K?void 0:K.toxicSevenCount)>0?"sepia(1) hue-rotate(320deg) saturate(2)":"none",boxShadow:(null===a||void 0===a||null===(Q=a.gameState)||void 0===Q?void 0:Q.toxicSevenCount)>0?"0 0 20px #ff4444":"none"}})})]})]})}),(0,qt.jsxs)(ff,{children:[(0,qt.jsxs)("h4",{style:{color:(null===a||void 0===a||null===(X=a.gameState)||void 0===X?void 0:X.currentPlayer)===(null===s||void 0===s?void 0:s.id)?"#00d4ff":"white",marginBottom:"1rem",textAlign:"center",fontSize:(null===a||void 0===a||null===(G=a.gameState)||void 0===G?void 0:G.currentPlayer)===(null===s||void 0===s?void 0:s.id)?"1.3rem":"1rem",textShadow:(null===a||void 0===a||null===(J=a.gameState)||void 0===J?void 0:J.currentPlayer)===(null===s||void 0===s?void 0:s.id)?"0 0 10px #00d4ff":"none",transition:"all 0.3s ease"},children:["Your Hand (",(null===s||void 0===s||null===(Z=s.cards)||void 0===Z?void 0:Z.length)||0," cards)",(null===a||void 0===a||null===(ee=a.gameState)||void 0===ee?void 0:ee.currentPlayer)===(null===s||void 0===s?void 0:s.id)&&(0,qt.jsx)("span",{style:{display:"block",fontSize:"0.9rem",color:"#00d4ff",marginTop:"0.5rem"},children:"\ud83c\udfaf YOUR TURN"})]}),(0,qt.jsx)("div",{style:{transform:(null===a||void 0===a||null===(te=a.gameState)||void 0===te?void 0:te.currentPlayer)===(null===s||void 0===s?void 0:s.id)?"scale(1.4)":"scale(1)",transition:"transform 0.3s ease",filter:(null===a||void 0===a||null===(ne=a.gameState)||void 0===ne?void 0:ne.currentPlayer)===(null===s||void 0===s?void 0:s.id)?"drop-shadow(0 0 15px rgba(0, 212, 255, 0.5))":"none"},children:(0,qt.jsx)(Xa,{cards:(null===s||void 0===s?void 0:s.cards)||[],size:"large",interactive:(null===a||void 0===a||null===(re=a.gameState)||void 0===re?void 0:re.currentPlayer)===(null===s||void 0===s?void 0:s.id),playableCards:(null===s||void 0===s?void 0:s.cards)||[],onCardClick:e=>{var t,n;if((null===a||void 0===a||null===(t=a.gameState)||void 0===t?void 0:t.currentPlayer)===(null===s||void 0===s?void 0:s.id))if(console.log("\ud83c\udccf Card clicked:",e),console.log("\ud83c\udccf Card structure:",JSON.stringify(e,null,2)),e&&e.id)if(console.log("\u2705 Playing card with ID:",e.id),"Q"===e.rank){var r,i;const t=(null===a||void 0===a||null===(r=a.players)||void 0===r?void 0:r.filter(e=>!e.stormFinishOrder))||[],n=1===(null===s||void 0===s||null===(i=s.cards)||void 0===i?void 0:i.length);2===t.length&&n?(console.log("\ud83d\udc78 Two-player endgame: Queen can be played without suit selection"),p(e.id)):(console.log("\ud83d\udc78 Queen selected - showing suit selection"),C(e),T(null===s||void 0===s?void 0:s.id))}else p(e.id);else console.log("\u274c Card missing ID or invalid card object:",e),console.log("\u274c Player cards:",null===s||void 0===s?void 0:s.cards),alert("Card is missing ID - this is a bug. Please refresh.");else console.log("\u274c Not your turn, current player:",null===a||void 0===a||null===(n=a.gameState)||void 0===n?void 0:n.currentPlayer),console.log("\u274c Your player ID:",null===s||void 0===s?void 0:s.id)}})})]})]})});case"lane-selection":const je=null===a||void 0===a||null===(ie=a.players)||void 0===ie?void 0:ie.find(e=>e.isActive),Te=(null===je||void 0===je?void 0:je.id)===(null===s||void 0===s?void 0:s.id);return(0,qt.jsxs)(gf,{children:[(0,qt.jsx)(Ud,{children:"Lane Selection"}),(0,qt.jsxs)(Bd,{children:["Choose your starting lane for the race. Lane 1 (inside) is shortest but most crowded.",Te?" Your turn to select!":` Waiting for ${(null===je||void 0===je?void 0:je.name)||"player"} to select...`]}),(0,qt.jsx)(Pd,{players:N,currentLap:0,totalLaps:(null===a||void 0===a||null===(oe=a.settings)||void 0===oe?void 0:oe.numberOfLaps)||3,playerPositions:(null===a||void 0===a||null===(ae=a.gameState)||void 0===ae?void 0:ae.trackPositions)||{},placedCoins:(null===a||void 0===a||null===(se=a.gameState)||void 0===se?void 0:se.placedCoins)||{},activePlayerId:null===je||void 0===je?void 0:je.id,stage:"lane-selection",onLaneSelect:e=>{Te&&(_(e),y(e))},panZoomEnabled:!1,focusOnPolePosition:!0,showPositionNumbers:!1}),(0,qt.jsx)(mf,{children:[1,2,3,4].map(e=>{var t;const n=null===a||void 0===a||null===(t=a.players)||void 0===t?void 0:t.some(t=>t.lane===e);return(0,qt.jsxs)(vf,{selected:w===e,onClick:()=>{Te&&!n&&(_(e),y(e))},style:{opacity:n?.5:1,cursor:!Te||n?"not-allowed":"pointer"},children:[(0,qt.jsx)(yf,{children:e}),(0,qt.jsxs)(bf,{children:[1===e&&"Inside lane - Shortest distance",2===e&&"Second lane - Good balance",3===e&&"Third lane - Less congestion",4===e&&"Outside lane - Most room",n&&(0,qt.jsx)("div",{style:{color:"#ff4444",fontWeight:"bold",marginTop:"0.5rem"},children:"TAKEN"})]})]},e)})}),!Te&&(0,qt.jsxs)("div",{style:{textAlign:"center",color:"#00d4ff",fontSize:"1.1rem",marginTop:"2rem"},children:["\ud83d\udd52 Waiting for ",(null===je||void 0===je?void 0:je.name)||"player"," to select their lane..."]})]});case"coin":return(0,qt.jsxs)(xf,{children:[(0,qt.jsx)(Ud,{children:"\ud83e\ude99 Coin Placement Stage"}),(0,qt.jsx)(Bd,{children:"Place your coins strategically on the race track. Coins affect movement during racing."}),(0,qt.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 300px",gap:"2rem"},children:[(0,qt.jsxs)(wf,{children:[(0,qt.jsx)("h3",{style:{color:"#ffd700",marginBottom:"1rem"},children:"Race Track"}),(0,qt.jsx)(Pd,{players:(null===a||void 0===a?void 0:a.players)||[],currentLap:0,totalLaps:(null===a||void 0===a||null===(le=a.settings)||void 0===le?void 0:le.numberOfLaps)||3,playerPositions:(null===a||void 0===a||null===(ue=a.gameState)||void 0===ue?void 0:ue.trackPositions)||{},placedCoins:(null===a||void 0===a||null===(ce=a.gameState)||void 0===ce?void 0:ce.placedCoins)||{},activePlayerId:null===s||void 0===s?void 0:s.id,stage:"coin",onCoinPlace:(e,t)=>{R&&(m(R.id,`${e}-${t}`),O(null))},panZoomEnabled:!0,focusOnPolePosition:!1,showPositionNumbers:!0})]}),(0,qt.jsxs)(pf,{children:[(0,qt.jsxs)(hf,{children:["Your Coins (",L.length,")"]}),L.length>0?(0,qt.jsx)(gs,{coins:L,size:"large",interactive:!0,groupByType:!0,onCoinSelect:e=>{O(e)}}):(0,qt.jsxs)("div",{style:{color:"#888",fontStyle:"italic",padding:"2rem",textAlign:"center"},children:["No coins available",(0,qt.jsx)("br",{}),(0,qt.jsx)("small",{children:"Coins are distributed based on Storm stage finishing order"})]}),R&&(0,qt.jsxs)("div",{style:{marginTop:"1rem",padding:"1rem",background:"rgba(255, 215, 0, 0.1)",border:"2px solid #ffd700",borderRadius:"8px",textAlign:"center"},children:[(0,qt.jsxs)("strong",{children:["Selected Coin: ",R.value]}),(0,qt.jsx)("br",{}),(0,qt.jsx)("small",{children:"Click on the track to place it"})]}),A&&(null===a||void 0===a||null===(de=a.players)||void 0===de?void 0:de.every(e=>0===(e.drawnCoins||[]).length))&&(0,qt.jsx)("div",{style:{marginTop:"2rem"},children:(0,qt.jsx)(nf,{onClick:v,children:"Continue to Racing \ud83c\udfc1"})}),(0,qt.jsxs)("div",{style:{marginTop:"1rem",fontSize:"0.9rem",color:"#aaa"},children:[(0,qt.jsx)("strong",{children:"Coin Values:"}),(0,qt.jsx)("br",{}),"\u2022 Positive: Move forward",(0,qt.jsx)("br",{}),"\u2022 Negative: Move backward",(0,qt.jsx)("br",{}),"\u2022 Tow-to-Pit: Special effect"]})]})]})]});case"racing":const Re=(null===a||void 0===a||null===(fe=a.gameState)||void 0===fe?void 0:fe.activePlayerId)===(null===s||void 0===s?void 0:s.id),Oe=null===a||void 0===a||null===(pe=a.gameState)||void 0===pe||null===(he=pe.trackPositions)||void 0===he?void 0:he[null===s||void 0===s?void 0:s.id],Pe=null===s||void 0===s?void 0:s.lastDiceRoll;return(0,qt.jsxs)(_f,{children:[(0,qt.jsx)(Ud,{children:"Racing Stage"}),(0,qt.jsx)(Bd,{children:Re?"It's your turn! Choose your dice type and roll.":`Waiting for ${(null===a||void 0===a||null===(ge=a.players)||void 0===ge||null===(me=ge.find(e=>{var t;return e.id===(null===a||void 0===a||null===(t=a.gameState)||void 0===t?void 0:t.activePlayerId)}))||void 0===me?void 0:me.name)||"player"} to move.`}),(0,qt.jsx)(Pd,{players:N,currentLap:(null===Oe||void 0===Oe?void 0:Oe.lap)||0,totalLaps:(null===a||void 0===a||null===(ve=a.settings)||void 0===ve?void 0:ve.numberOfLaps)||3,playerPositions:(null===a||void 0===a||null===(ye=a.gameState)||void 0===ye?void 0:ye.trackPositions)||{},placedCoins:(null===a||void 0===a||null===(be=a.gameState)||void 0===be?void 0:be.placedCoins)||{},activePlayerId:null===a||void 0===a||null===(xe=a.gameState)||void 0===xe?void 0:xe.activePlayerId,stage:"racing",panZoomEnabled:!0,focusOnPolePosition:!1,showPositionNumbers:!1}),Re&&!Pe&&(0,qt.jsxs)(Sf,{children:[(0,qt.jsx)("h3",{children:"Choose Your Dice Type"}),(0,qt.jsxs)(Ef,{onClick:()=>$([],"movement"),children:[(0,qt.jsx)("strong",{children:"Movement Dice"}),(0,qt.jsx)("br",{}),(0,qt.jsx)("small",{children:null!==Oe&&void 0!==Oe&&Oe.inPit?"1 die (pit rule)":`${(null===a||void 0===a||null===(we=a.settings)||void 0===we?void 0:we.numberOfDice)||1} die(s)`})]}),!(null!==Oe&&void 0!==Oe&&Oe.inPit)&&(0,qt.jsxs)(Ef,{onClick:()=>$([],"lane-change"),children:[(0,qt.jsx)("strong",{children:"Lane-Change Die"}),(0,qt.jsx)("br",{}),(0,qt.jsx)("small",{children:"Change lanes or check engine"})]})]}),Re&&Pe&&(0,qt.jsxs)(Cf,{children:[(0,qt.jsxs)("h3",{children:["Dice Result: ",Pe.values.join(", ")]}),(0,qt.jsxs)("p",{children:["Type: ",Pe.type]}),(0,qt.jsx)(kf,{onClick:()=>x({action:"move"}),children:"Confirm Movement"})]}),!Re&&(0,qt.jsxs)("div",{style:{textAlign:"center",padding:"2rem",color:"#888"},children:[(0,qt.jsx)("p",{children:"Waiting for other players..."}),(0,qt.jsxs)("small",{children:["Current turn: ",(null===a||void 0===a||null===(_e=a.players)||void 0===_e||null===(ke=_e.find(e=>{var t;return e.id===(null===a||void 0===a||null===(t=a.gameState)||void 0===t?void 0:t.activePlayerId)}))||void 0===ke?void 0:ke.name)||"Unknown"]})]})]});default:return(0,qt.jsxs)("div",{style:{textAlign:"center",padding:"4rem"},children:[(0,qt.jsx)(Ud,{children:"Game Starting..."}),(0,qt.jsx)(Bd,{children:"Preparing the race. Please wait for all players to be ready."}),(0,qt.jsx)(kf,{onClick:c,children:"Return to Lobby"})]})}})()}),h&&(0,qt.jsx)(jf,{children:(0,qt.jsxs)(Tf,{children:[(0,qt.jsx)("h2",{children:"\ud83c\udfc6 Storm Stage Complete!"}),(0,qt.jsx)(Rf,{children:h.map((e,t)=>(0,qt.jsxs)(Of,{$position:e.finishOrder,children:[(0,qt.jsxs)("div",{className:"position",children:["#",e.finishOrder]}),(0,qt.jsx)("div",{className:"player-name",children:e.playerName}),(0,qt.jsx)("div",{className:"card-count",children:e.cardCount>0?`${e.cardCount} cards left`:"Finished!"})]},e.playerId))}),A&&(0,qt.jsxs)(nf,{onClick:g,children:["Continue to ",1===(null===a||void 0===a||null===(o=a.gameState)||void 0===o?void 0:o.stormRound)?"Lane Selection":"Coin Stage"]}),!A&&(0,qt.jsx)(Pf,{children:"Waiting for host to continue..."})]})})]})},zf=Bi`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,Af=Ui.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: #ff4757;
  color: white;
  padding: 16px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(255, 71, 87, 0.3);
  z-index: 1000;
  animation: ${zf} 0.3s ease;
  max-width: 400px;
  display: flex;
  align-items: center;
  gap: 12px;
`,Lf=Ui.span`
  font-size: 20px;
  font-weight: bold;
`,$f=Ui.span`
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  flex: 1;
`,Df=Ui.button`
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
`;const Mf=function(e){let{message:t}=e;const{clearError:n}=Jt();return(0,r.useEffect)(()=>{const e=setTimeout(()=>{n()},5e3);return()=>clearTimeout(e)},[n]),t?(0,qt.jsxs)(Af,{children:[(0,qt.jsx)(Lf,{children:"\u26a0"}),(0,qt.jsx)($f,{children:t}),(0,qt.jsx)(Df,{onClick:n,children:"\xd7"})]}):null},If=Bi`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,Ff=Bi`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
`,Uf=Bi`
  0%, 100% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.5); }
  50% { box-shadow: 0 0 40px rgba(0, 212, 255, 0.8), 0 0 60px rgba(0, 212, 255, 0.3); }
`,Bf=Bi`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`,Wf=Bi`
  0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
  50% { opacity: 1; transform: scale(1) rotate(180deg); }
`,Hf=Ui.div`
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
`,Vf=Ui.div`
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
  ${Mi`animation: ${Bf} 3s ease-in-out infinite;`}
  
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
    ${Mi`animation: ${Wf} 4s ease-in-out infinite;`}
  }
`,Yf=Ui.div`
  position: relative;
  width: 80px;
  height: 80px;
`,qf=Ui.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border: 4px solid rgba(0, 212, 255, 0.1);
  border-top: 4px solid #00d4ff;
  border-radius: 50%;
  ${Mi`animation: ${If} 1.5s linear infinite;`}
`,Kf=Ui.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 60px;
  height: 60px;
  border: 3px solid rgba(255, 215, 0, 0.1);
  border-right: 3px solid #ffd700;
  border-radius: 50%;
  ${Mi`animation: ${If} 1s linear infinite reverse;`}
`,Qf=Ui.div`
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
  ${Mi`animation: ${Uf} 2s ease-in-out infinite;`}
  
  &::after {
    content: '⚡';
    font-size: 20px;
    color: white;
    text-shadow: 0 0 10px white;
  }
`,Xf=Ui.div`
  color: white;
  font-family: 'Orbitron', monospace;
  font-size: 20px;
  font-weight: 700;
  ${Mi`animation: ${Ff} 2s ease-in-out infinite;`}
  text-align: center;
  text-shadow: 
    0 0 10px #00d4ff,
    0 0 20px rgba(0, 212, 255, 0.5);
  position: relative;
  z-index: 2;
`,Gf=Ui.div`
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Rajdhani', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  position: relative;
  z-index: 2;
`,Jf=Ui.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
`,Zf=Ui.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #00d4ff;
  ${Mi`animation: ${Ff} 1.5s ease-in-out infinite;`}
  animation-delay: ${e=>e.delay}s;
`,ep=Ui.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,tp=Ui.div`
  width: 24px;
  height: 24px;
  border: 2px solid rgba(0, 212, 255, 0.2);
  border-top: 2px solid #00d4ff;
  border-radius: 50%;
  ${Mi`animation: ${If} 1s linear infinite;`}
`;const np=function(e){let{overlay:t=!1,text:n="Loading Havoc Speedway...",subtext:r="Preparing your racing experience",inline:i=!1}=e;if(i)return(0,qt.jsx)(ep,{children:(0,qt.jsx)(tp,{})});const o=(0,qt.jsxs)(Vf,{children:[(0,qt.jsxs)(Yf,{children:[(0,qt.jsx)(qf,{}),(0,qt.jsx)(Kf,{}),(0,qt.jsx)(Qf,{})]}),(0,qt.jsxs)("div",{children:[(0,qt.jsx)(Xf,{children:n}),r&&(0,qt.jsx)(Gf,{children:r}),(0,qt.jsxs)(Jf,{children:[(0,qt.jsx)(Zf,{delay:0}),(0,qt.jsx)(Zf,{delay:.2}),(0,qt.jsx)(Zf,{delay:.4})]})]})]});return t?(0,qt.jsx)(Hf,{children:o}):o};const rp=function(){const{currentView:e,loading:t,error:n,isConnected:r}=Jt();return r?(0,qt.jsxs)("div",{className:"App",children:[n&&(0,qt.jsx)(Mf,{message:n}),t&&(0,qt.jsx)(np,{overlay:!0}),(0,qt.jsxs)(ye,{children:[(0,qt.jsx)(me,{path:"/",element:"welcome"===e?(0,qt.jsx)(io,{}):"lobby"===e?(0,qt.jsx)(zo,{}):"room"===e?(0,qt.jsx)(pa,{}):"game"===e?(0,qt.jsx)(Nf,{}):(0,qt.jsx)(ge,{to:"/",replace:!0})}),(0,qt.jsx)(me,{path:"*",element:(0,qt.jsx)(ge,{to:"/",replace:!0})})]})]}):(0,qt.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",flexDirection:"column",gap:"20px"},children:[(0,qt.jsx)(np,{}),(0,qt.jsx)("p",{children:"Connecting to Havoc Speedway..."})]})};o.createRoot(document.getElementById("root")).render((0,qt.jsx)(r.StrictMode,{children:(0,qt.jsx)(we,{children:(0,qt.jsx)(Gt,{children:(0,qt.jsx)(rp,{})})})}))})()})();
//# sourceMappingURL=main.7a9d7ff3.js.map