function validation() {
	//alert("Hello");
	var uname=document.getElementById("uname").value;
	var pass=document.getElementById("pass").value;
	if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(uname)))
	{
		alert("Wrong Email!");
		return false;
	}
	if(pass.length<6){
		alert("Password length less than 6.INVALID");
		return false;
	}
	return true;
}