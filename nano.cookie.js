/*
 *  nano Cookie plugin v1.0
 *  http://nanojs.org/plugins/cookie
 *
 *  Copyright (c) 2008-2015 James Watts
 *  https://github.com/jameswatts
 *
 *  This is FREE software, licensed under the GPL
 *  http://www.gnu.org/licenses/gpl.html
 */

if (nano) {
	nano.plugin({}, function() {
		this.cookie = {
			read: function _read(name) {
				if (navigator.cookieEnabled) {
					name = name + '=', cookie = document.cookie;
					return (cookie.indexOf(name) !== -1)? cookie.substring(cookie.indexOf(name)+name.length).split(';', 2)[0] : null;
				}
				return null;
			},
			write: function _write(name, val, expires, path) {
				if (navigator.cookieEnabled) {
					expires = (expires)? '; expires=' + expires : '';
					document.cookie = name + '=' + val + expires + '; path=' + (path || '/');
				}
				return this;
			}
		};
	});
}
