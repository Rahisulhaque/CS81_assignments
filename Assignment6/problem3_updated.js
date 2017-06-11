
function checkGivenProperty(Testobject, givenProperty)
{
	if(hasOwnProperty.call(Testobject, givenProperty))
		{
			console.log("Your object has this property!");
		}
	else
		{
			console.log('Sorry, There is not such a property');
		}
}

//-----------------------------------------Test---------------------------------------------------------------------------//



function  mytest(property0, property1, property2, property3)
{
	this.property0 = property0;
	this.property1 = property1;
	this.property2 = property2;
	this.property3 = property3;
	this.propertyfunction = function()
	{
		console.log('Hello World!');
	}
}



var test1 = new mytest("name", 42, true, [1,2,3]);

checkGivenProperty(test1, "property0");
checkGivenProperty(test1, "property3");
checkGivenProperty(test1,"property6");
console.log(mytest.hasOwnProperty.call(test1, "property0")); // Only works with prototypes!