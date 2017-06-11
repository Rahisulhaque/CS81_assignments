function BankAcct( acctNum, acctOwner, checkBalance, saveBalance, acctType )
{
	this.acctNum = acctNum; 
	this.acctOwner = acctOwner; 
	this.checkBalance = checkBalance; 
	this.saveBalance = saveBalance; 
	this.acctType = acctType;
}

BankAcct.prototype.checkTransfer = function (amount) 
{
	if ((amount+ this.checkBalance) > 0)
	{
		this.checkBalance = (amount + this.checkBalance);
	}
}



/*-------------------------------------------- Testing --------------------------------------------------*/
var AudreysAcc  = new BankAcct ( 100,'Audrey', 100, 100, 'checking');

AudreysAcc.checkTransfer(100);

console.log(AudreysAcc.checkBalance);
