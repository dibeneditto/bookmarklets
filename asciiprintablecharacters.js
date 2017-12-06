/**
 * This returns the ASCII printable characters, " " (space, Decimal code
 * 32) to "~" (tilde, Decimal code 126), 95 in total.
 *      !"#$%&'()*+,-./012
 *     3456789:;<=>?@ABCDE
 *     FGHIJKLMNOPQRSTUVWX
 *     YZ[\]^_`abcdefghijk
 *     lmnopqrstuvwxyz{|}~
 * @title asciiprintablecharacters.js
 * @author Lukas W. DiBeneditto
 * @created 2017-12-06
 * @description This returns the ASCII printiable characters.
 * @keywords ascii, printable, characters
 * @modified 2017-12-06
 * @publisher Lukas W. DiBeneditto
 * @version 1.0.0
 * @return {string} This returns the ASCII printiable characters.
 */
function functionAsciiPrintableCharacters() {
    var a;
    var i;

    for (i = 32; i < 127; i += 1) {
        a += String.fromCharCode(i);
    }

    return a;
}

console.log(functionAsciiPrintableCharacters());
