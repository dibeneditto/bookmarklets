/**
 * This JavaScript Bookmarklet opens a new window and attempts to 
 * populate your default email message. It is useful for Gmail, 
 * however a user will first need to click and accept Gmail as the
 * default mailto: protocol handler.
 * 
 * @author Lukas W. DiBeneditto <lukas@dibeneditto.com>
 * @see {https://goo.gl/p7QAV7 Getting Gmail to handle all mailto: 
 * links with registerProtocolHandler}
 * @see {@link http://tools.ietf.org/html/rfc6068 RFC 6068 - The 
 * 'mailto' URI Scheme}
 * @version 1.0.0
 */
function jsdtdutoemail() {
  var d = document,
    p = "mailto:",
    e = "lukas@dibeneditto.com",
    s = "?subject=",
    dt = d.title,
    b = "&body=",
    du = d.URL,
    t = p + e + s + encodeURI(dt) + b + du;
  window.open(t);
}

jsdtdutoemail();
