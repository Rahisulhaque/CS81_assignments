
/* Problem 1 */

var myFacebookFriends=['Alex','Becca','Christina','Deena','Emily',]
var MyFriends = myFacebookFriends.join(" and ");

console.log(MyFriends);



/*Problem 2*/


function range (m,n){
var a=[],x=m, y=n;
for(var i=x; i<= y; i++)
	{a.push(i);};
return a;
};
console.log(range(1,10));

function sum(m){
	var total=0;
	for(var i= 0; i<=(m.length-1); i++)
	{
		 total+=m[i];
	};
	return total;
};
console.log(sum(range(1,10)));

/*Problem 3 */

function  person(name, mother, father, spouse,children) 
{
	this.name=name;
	this.mother=mother;
	this.father=father;
//	this.age=age;
	this.spouse= spouse;
	this.children=children;
	this.change_spouse= function (new_spouse) {
		// body...
		this.spouse= new_spouse;
	}
}
var Tuulia = new person("Tuulia",null,null,null, Sipho);
var Ani = new person("Ani",null,null, Sipho, [Aolani, Hiro,Xue]);
var Sipho = new person("Sipho",Tuulia , null,[Aolani, Hiro,Xue]);

var Aolani = new person("Aolani",Ani,Sipho,null,null);
var Hiro = new person("Hiro",Ani,Sipho,null,null);
var Xue= new person("Xue",Ani,Sipho,null,null);
console.log(Sipho.mother); 

Ani.change_spouse("mars");
console.log(Ani.spouse);
