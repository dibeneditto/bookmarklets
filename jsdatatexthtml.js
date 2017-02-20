/**
 * This JavaScript Bookmarklet opens a new window where all HTML 
 * elements are editable.
 * 
 * @author Lukas W. DiBeneditto <lukas@dibeneditto.com>
 * @see {@link http://en.wikipedia.org/wiki/Bookmarklet 
 * Bookmarklet - Wikipedia}
 * @version 1.0.0
 */
function jsdatatexthtml() {
  return window.open("data:text/html, <body contenteditable>");
}

jsdatatexthtml();
