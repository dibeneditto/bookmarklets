/**
 * This JavaScript Bookmarklet opens a new window where all HTML 
 * elements are editable.
 * 
 * @author Lukas W. DiBeneditto <lukas@dibeneditto.com>
 * @see {@link http://en.wikipedia.org/wiki/Bookmarklet}
 * @version 1.0.0
 */
function jsDataTextHTML() {
  var uri = 'data:text/html, <body contenteditable>';
  window.open(fixedEncodeURIComponent(uri));
}

/**
 * Encodes a Uniform Resource Identifier (URI) component by replacing 
 * each instance of certain characters by one, two, three, or four 
 * escape sequences representing the UTF-8 encoding of the character 
 * (will only be four escape sequences for characters composed of two 
 * "surrogate" characters). Adhering to RFC 3986 (which reserves !, ', 
 * (, ), and *), even though these characters have no formalized URI 
 * delimiting uses.
 * @param {string} str The string to encode to RFC 3986 format.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Object/encodeURIComponent}
 */
function fixedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16);
  });
}

// run jsDataTextHTML
jsDataTextHTML();
