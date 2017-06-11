
function occurence(given_str, letter)
{
	var testString=given_str; //This is the input given by user

var to_array=testString.split(''); //split function that will split a word to array of letters
var occurence= 0; // This is the counter var to count the occurence;
var target = letter; // target letter to count 
for (var i = 0; i<= (to_array.length-1); i++)
	{
		
		if (to_array[i]===target)
			{
				occurence+=1;
			};
	};
console.log(occurence);
}


occurence( 'w3resource.com', 'o');