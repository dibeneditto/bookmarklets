/**
 * sharePageToEmail.js
 * This JavaScript Bookmarklet attempts to auto fill in a new Email
 * Message, the email Subject is the Title of the Current Web Page, and 
 * the email Body is the URL of the Current Web Page. Change the value
 * for "email" below.
 * 
 * Current Web Page: 
 * +--------------------------------------+
 * | URL: http://example.com/             |
 * | Title: Example Domain                |
 * +--------------------------------------+
 *  
 * Email Message:
 * +--------------------------------------+
 * | To: user@example.com                 |
 * | From: [Your Email Address]           |
 * | Subject: Example Domain              |
 * |                                      |
 * | http://example.com/                  |
 * +--------------------------------------+
 * 
 * @author Lukas W. DiBeneditto <lukas@dibeneditto.com>
 * @see {@link http://tools.ietf.org/html/rfc6068}
 * @version 2.1.0
 */
function sharePagetoEmail() {
  // The email protocol scheme.
  var scheme = 'mailto:';
  
  // The Email Message "To:" part.
  var email = 'user@example.com'; // @TODO Change this
  email = fixedEncodeURIComponent(email);
  
  // The Email Message "Subject:" part.
  var subject = '?subject=' + fixedEncodeURIComponent(document.title);
  
  // The Email Message "Body" part.
  var body = '&body=' + fixedEncodeURIComponent(document.URI);
  
  /* Combine the parts together to create a URL that the default email
   * client will recogonize minus the "mailto:" protocol scheme.
   */
  var hierarchicalPart = email + subject + body;
  
  // NOTE that the scheme should not be encoded.
  // hierarchicalPart is already encoded correctly.
  window.open(scheme + hierarchicalPart);
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

sharePageToEmail();
