function max(a,b,c){
if ((a>b)&&(a>c))
	{ return a;}
else if ((b>a)&&(b>c))
	{return b;}
else if ((c>a)&&(c>a))
	{return c}
else 
    return ("Please enter a valid argumnets");
}

console.log(max(0, 10, 100));
// → 100
console.log(max(0, -10, -100));
// → -0