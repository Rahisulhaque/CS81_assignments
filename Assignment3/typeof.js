
function type_of (given_var) {

var type=typeof(given_var);
return type;
}









//Test of the function
var string = "Hello World!";
var number = 81;
var bloolean= true;
var a=function () {console.log ("This is a  test function!")};
var nothing= null; // NUll is built in Object
var x; //undeifned


console.log(type_of(string)+", "+type_of(number)+", "+type_of(bloolean)+", "+type_of(a)+", "+type_of(nothing)+", "+ type_of(x));
