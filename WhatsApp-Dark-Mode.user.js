// ==UserScript==
// @name         WhatsApp Dark Mode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Enabling official dark mode in WhatsApp Web
// @author       You
// @match        https://web.whatsapp.com/
// @grant        none
// ==/UserScript==

(function() {
	window.onload = e => {
		document.body.className = 'web dark text-rendering-bug-fix';
	}
})();
