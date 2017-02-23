
/**
 * DRAFT This removes most of the presentation of a webpage, but not all.
 * 
 * @author Lukas W. DiBeneditto <lukas@dibeneditto.com>
 * @version 1.3.0
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
    for (i = 0; i < fo.length; i++) {
      var parent = fo[0].parentNode;
      while (fo[0].firstChild) {
        parent.insertBefore(fo[0].firstChild, fo[0]);
      } // end while
      parent.removeChild(fo[0]);
    } // end for
  } // end jsRemovePresentation

jsRemovePresentation();
