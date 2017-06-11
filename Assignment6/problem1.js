function employee(first, last, ssn, eid,dpt)
	{
		this.first = first;
		this.last = last;
		//this.ssn = ssn;
		//this.eid = eid;
		this.dpt = dpt;
	}

employee.prototype.ssn = '000-00-0000';
employee.prototype.dpt = 'empty';


employee.prototype.method = function()
{

	console.log(this.first+' '+this.last+ " : "+ this.dpt);
};

var eJohnDoe = new employee("John", "Doe", "123-34-1234", "001234", "acct");
var eSallyRally = new employee("Sally", "Rally","123-34-1235", "001235", "hr");

eJohnDoe.method();
eSallyRally.method();

/*---------------------------------------------Test---------------------------------------------------*/



var armia = new employee;
console.log(armia.ssn);
