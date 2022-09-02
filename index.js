// on ready page
window.onload = function () {
  console.log("------ begin:  ------");
  console.log("on load page (html)");
  console.log("------ end:  ------");
};
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM ready!");
});
document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    // Initialize your application or run some code.
    console.log("DOM ready!");
  }
};
document.onreadystatechange = function () {
  var state = document.readyState;
  if (state == "interactive") {
    console.log("DOM ready!");
  } else if (state == "complete") {
    console.log("DOM ready!");
  }
};
onDOMContentLoaded = (function () {
  console.log("DOM ready!");
})();

onload = (function () {
  console.log("Page fully loaded!");
})();
if (
  document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  // Document already fully loaded
  ready();
} else {
  // Add event listener for DOMContentLoaded (fires when document is fully loaded)
  document.addEventListener("DOMContentLoaded", ready);
}
function readyPage(callbackFunc) {
  if (document.readyState !== "loading") {
    // Document is already ready, call the callback directly
    callbackFunc();
  } else if (document.addEventListener) {
    // All modern browsers to register DOMContentLoaded
    document.addEventListener("DOMContentLoaded", callbackFunc);
  } else {
    // Old IE browsers
    document.attachEvent("onreadystatechange", function () {
      if (document.readyState === "complete") {
        callbackFunc();
      }
    });
  }
}
function ready() {
  // Handler here
  console.log("ready !!");
}
readyPage(function () {
  // your code here
  console.log("readyPage");
});

/**
 *
 * end on ready page
 *
 */

/*=============================================
=            Console                          =
=============================================*/
console.log();
console.warn('tag', '');
console.table();
console.error('', '');
console.info('tag', '');
// console.clear();
/*=====  End of Console               ======*/

// ECMAScript : put stander to javascript

/*=============================================
=            Data Types                       =
=============================================*/
// ! Data Types
console.log(typeof 5000);
// Boolean 
// string
// null 
// undefined
// Number
// Object

/*=====  End of Data Types          ======*/


/*=============================================
=            Variables                        =
=============================================*/
// ! Variables
// declare Variables
var VariableName_1 = 1;
let VariableName_2 = 1;
const VariableName_3 = 1;


/*=====  End of Variables           ======*/

/* 
** var 
**** redeclare (can)
**** functional scope
**** Reassign (can)
**** Hoisting (yes)
************************
** let 
**** redeclare (can't)
**** block scope.
**** Reassign (can)
**** Hoisting (no)
************************
** const 
**** redeclare (can't)
**** block scope.
**** Reassign (can't)
**** Hoisting (no)

************************
*/


/*=============================================
=            String                          =
=============================================*/
// ! String 
var stringValue = `String`;
console.log('Concatenation' + stringValue);
// Template Literals
console.log(`Concatenation ${stringValue}`);


/*=====  End of String                 ======*/


/*=============================================
=            Number Methods                   =
=============================================*/
// ! Number Methods
let x = 9.656;
let z= x.toFixed(0);
let z2= x.toFixed(2);
let z3= x.toFixed(4);
let z4= x.toFixed(6);
console.log(z,z2,z3,z4)
Number(100);
parseFloat(100);
parseInt("-10");
isNaN(1);
// ! Math Methods
Math.floor(x)
Math.random();
Math.round(54);
Math.max([1,1]);
Math.min([1,0]);
Math.abs(55);
Math.ceil(44);
Math.sqrt(55);
Math.trunc(-0.123)
/*=====  End of Number Methods      ======*/
// ! string 
// [https://www.tutorialstonight.com/js/javascript-string-methods]
/* 
* length
* charAt(x)
* charCodeAt(x)
* concat(v1,v2)
* fromCharcode(c1,c2)
* indexOf(substr, [start])
* lastIndexOf(substr, [start])
* replace(regexp/substr, replacetext)
*var intRegex = /[0-9 -()+]+$/;  
* search(intRegex)
* slice(start, [end])
* split(delimiter, [limit])
* substr(start, [length])
* substring(from, [to])
* toLowerCase()
* toUpperCase()
* includes()
* endsWith()
* repeat()
* valueOf()
* trim()
*/


/*=============================================
=            array                            =
=============================================*/
// [https://dev.to/devsmitra/28-javascript-array-hacks-a-cheat-sheet-for-developer-5769]
// [https://gist.github.com/rauschma/6cdeb4af7586aa03baed2f925e0a084b]
// [https://clubmate.fi/array-cheat-sheet]
// [https://www.doabledanny.com/javascript-array-cheat-sheet]

/*=====  End of array               ======*/

