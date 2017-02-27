
/**
 * DRAFT This removes most of the presentation of a webpage, but not all.
 * 
 * @author Lukas W. DiBeneditto <lukas@dibeneditto.com>
 * @version 1.5.0
 */
function jsRemovePresentation() {
  var d = document;
  var i;
  /** disable all external and internal stylesheets */
  for (i = 0; i < d.styleSheets.length; i++) {
    d.styleSheets[i].disabled = true;
  }
  /** replace any elements with the style attribute */
  var el = d.getElementsByTagName('*');
  for (i = 0; i < el.length; i++) {
    el[i].style = '';
  }
  /** replace any font elements, getElementsByTagName is
    * case-insensitive in HTML */
  var fo = d.getElementsByTagName('font');
  var p;
  for (i = 0; i < fo.length; i++) {
    p = fo[0].parentNode;
    while (fo[0].firstChild) {
      p.insertBefore(fo[0].firstChild, fo[0]);
    }
    p.removeChild(fo[0]);
  }
} // end jsRemovePresentation

jsRemovePresentation();
