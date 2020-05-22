// ==UserScript==
// @name         WhatsApp Dark Mode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Enabling official dark mode in WhatsApp Web
// @author       You
// @match        https://web.whatsapp.com/
// @grant        none
// @updateURL    https://github.com/tkore/WhatsApp-Web-dark-mode/raw/master/WhatsApp-Dark-Mode.user.js
// ==/UserScript==

(function() {
	window.onload = e => {
		document.body.className = 'web dark text-rendering-bug-fix';
	}
})();
