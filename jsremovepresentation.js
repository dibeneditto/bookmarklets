
/**
 * DRAFT This removes most of the presentation of a webpage, but not all.
 * 
 * @author Lukas W. DiBeneditto <lukas@dibeneditto.com>
 * @version 1.4.0
 */
function jsRemovePresentation() {
  var i;
  /** disable all external and internal stylesheets */
  for (i = 0; i < document.styleSheets.length; i++) {
    document.styleSheets[i].disabled = true;
  } // end for
  /** replace any elements with the style attribute */
  var el = document.getElementsByTagName('*');
  for (i = 0; i < el.length; i++) {
    el[i].style = '';
  } // end for
  /** replace any font elements, getElementsByTagName is
     * case-insensitive in HTML */
  var fo = document.getElementsByTagName('font');
  var p;
  for (i = 0; i < fo.length; i++) {
    p = fo[0].parentNode;
    while (fo[0].firstChild) {
      p.insertBefore(fo[0].firstChild, fo[0]);
    } // end while
    p.removeChild(fo[0]);
  } // end for
} // end jsRemovePresentation

jsRemovePresentation();
