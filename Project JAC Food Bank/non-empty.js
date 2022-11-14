function check(){
	var user = document.getElementById("user");
	var email = document.getElementById("email");
	var number = document.getElementById("number");
	var tarea = document.getElementById("tarea");
	
	if (user.value == ""){
	alert("Please enter your Full name before submitting it :)");
	}
	
	else if (email.value == ""){
	alert("Please enter your Email address before submitting it :)");
	}
	
	else if (number.value == ""){
	alert("Please enter your Phone number before submitting it :)");
	}
	
	else if (tarea.value == ""){
	alert("Please enter the Message before submitting it :)");
	}
	
	else {
	alert('Form successfully submitted. Thank you and have a nice day! After confirmation the system will take you back to the home page');
	var form = document.getElementById("contactus");
	form.submit();
	}
}

function checksign(){
	var user = document.getElementById("user").value;
	var pw = document.getElementById("pass").value;
	
	if (user == ""){
	alert("Please enter your username!");
	document.getElementById("message1").innerHTML = "Please enter the Username!";
	}
	  
	else if (pw == ""){
	alert("Please enter your password!");
	document.getElementById("message2").innerHTML = "Please enter the password!";
	}

	else if (user == "JAC2022" && pw == "12345678")
	{
		alert('You have successfully signed in! We will direct you to the menu page.');
	var form = document.getElementById("signin");
	form.submit();
	}
		
	
	// else if (pw.length > "0" && pw.length < "8"){
	// alert("Password must be at least 8 characters long.");
	// document.getElementById("message3").innerHTML = "At least 8 characters!";
	// }
	
	else {
	alert('Please enter correct Username and Password');
	
	}
}


// shoping cart //

	
	var x =document.getElementsByClassName('btn');
	for (var i=0;i<x.length;i++)
	{
		var button= x[i];
		button.addEventListener ('click', function(event){
			var buttonClicked= event.target
			console.log('clicked')
			var shopItem= buttonClicked.parentElement.parentElement
			var itemName = shopItem.getElementsByClassName('shop-item-name')[0];
			var itemquantity = shopItem.getElementsByClassName('shop-quanity')[0];
			var iName = itemName.innerText;
			var iQuantity = itemquantity.value;
			// total = total +(iQuantity);
			addItemtoCart(iName, iQuantity)
		})
		
		// console.log(iQuantity, iName, total)
	}
	function addItemtoCart(iName, iQuantity)
	{
		var cartRow = document.createElement('div');
		// cartRow.classList.add('cart-row')
		
		var cartItems = document.getElementsByClassName('cart-items')[0];
		var cartItemNames = cartItems.getElementsByClassName('cart-item-name')
		for(var i=0;i<cartItemNames.length; i++){
			if(cartItemNames[i].innerText == iName){
				alert('This item is alreday in cart')
				return
			}
			
		}
		var cartRowContents = ` <span class="cart-item-name">${iName}</span>
		<span class="cart-quantity">${iQuantity}</span>`
		cartRow.innerHTML= cartRowContents
		cartItems.append(cartRow)
	}

	function reset()
	{
		alert("Delete all cart Items")
		document.getElementsByClassName('cart-items')[0].innerHTML="";
	} 
	
	//rich code
	function validateForm() {
		let user = document.getElementById("user").value;
		let fname = document.getElementById("fname").value;
		let lname = document.getElementById("lname").value;
		let email = document.getElementById("email").value;
		let pass = document.getElementById("pass").value;
		let pswd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
		let confpass = document.getElementById("conf-pass").value;
		let success = document.getElementById("success").value;
		let invalidEmail = document.getElementById("email").value;
		let atPosition = invalidEmail.indexOf("@");
		let dotPosition = invalidEmail.lastIndexOf(".");
		let secondPass = document.getElementById("conf-pass").value;

		//check empty username
		if (user == "") {
			document.getElementById("missing-user").innerHTML = "*** Please enter a username ***";
			return false;
		}
		//check username has only letters
		else if (!isNaN(user)) {
			document.getElementById("missing-user").innerHTML = "*** Cannot be only numbers ***";
			return false;
		}
		//check empty first name
		if (fname == "") {
			document.getElementById("missing-fname").innerHTML = "*** Please enter your first name ***";
			return false;
		}
		//check first name has only letters
		else if (!isNaN(fname)) {
			document.getElementById("missing-fname").innerHTML = "*** Only letters are accepted ***";
			return false;
		}
		//check empty last name
		else if (lname == "") {
			document.getElementById("missing-lname").innerHTML = "*** Please enter your last name ***";
			return false;
		}
		//check last name has only letters
		else if (!isNaN(lname)) {
			document.getElementById("missing-lname").innerHTML = "** Only letters are accepted ***";
			return false;
		}
		//check empty email
		else if (email == "") {
			document.getElementById("missing-email").innerHTML = "*** Please enter a valid email address ***";
			return false;
		}
		//check email format
		else if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 >= invalidEmail.length) {
			document.getElementById("missing-email").innerHTML = "*** Please enter a valid email address ***";
			return false;
		}
		//check empty password
		else if (pass == "") {
			document.getElementById("missing-pass").innerHTML = "*** Please set a password ***";
			return false;
		}
		//check password format
		else if (!pass.match(pswd)) {
			document.getElementById("missing-pass").innerHTML = "*** Please set a password meeting the requirement ***";
			return false;
		}
		//check password length
		else if ((pass.length > "0" && pass.length < "8") || pass.length > "20") {
			document.getElementById("missing-pass").innerHTML = "*** Password must be between 8 and 20 characters long. ***";
			return false;
		}
		//check empty retype password
		else if (confpass == "") {
			document.getElementById("missing-conf-pass").innerHTML = "*** Please re-type the password ***";
			return false;
		}
		//check matching password
		else if (secondPass !== pass) {
			document.getElementById("missing-conf-pass").innerHTML = "*** Password doesn't match. Please enter again ***"
			return false;
		}
		//Display a confirmation message and go to the Sign In page
		else {
			setTimeout(function () { window.location.href = "sign_in_after_reg.html"; })
		}

	}
	
	