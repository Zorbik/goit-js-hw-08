!function(){function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return s.Date.now()};function b(t,e,n){var r,i,f,u,a,c,l=0,s=!1,d=!1,b=!0;if("function"!=typeof t)throw new TypeError(o);function j(e){var n=r,o=i;return r=i=void 0,l=e,u=t.apply(o,n)}function O(t){return l=t,a=setTimeout(h,e),s?j(t):u}function T(t){var n=t-c;return void 0===c||n>=e||n<0||d&&t-l>=f}function h(){var t=g();if(T(t))return w(t);a=setTimeout(h,function(t){var n=e-(t-c);return d?p(n,f-(t-l)):n}(t))}function w(t){return a=void 0,b&&r?j(t):(r=i=void 0,u)}function S(){var t=g(),n=T(t);if(r=arguments,i=this,c=t,n){if(void 0===a)return O(c);if(d)return a=setTimeout(h,e),j(c)}return void 0===a&&(a=setTimeout(h,e)),u}return e=y(e)||0,m(n)&&(s=!!n.leading,f=(d="maxWait"in n)?v(y(n.maxWait)||0,e):f,b="trailing"in n?!!n.trailing:b),S.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=i=a=void 0},S.flush=function(){return void 0===a?u:w(g())},S}function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=f.test(t);return n||u.test(t)?a(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError(o);return m(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(t,e,{leading:r,maxWait:e,trailing:i})};const j=document.querySelector(".feedback-form"),O="feedback-form-state";function T(){return JSON.parse(localStorage.getItem(O))||{}}!function(){const t=T();for(let e of Object.keys(t))t[e]&&(j.elements[e].value=t[e])}(),j.addEventListener("submit",(function(t){t.preventDefault();const e=T();console.table(e),t.currentTarget.reset(),localStorage.removeItem(O)})),j.addEventListener("input",t(e)((function(t){const e=T();e[t.target.name]=t.target.value,localStorage.setItem(O,JSON.stringify(e))}),500))}();
//# sourceMappingURL=03-feedback.517e0d78.js.map