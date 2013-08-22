$(document).ready(function(){

	$('.large').click(function() {

	
		var firstNameValue = $('.firstName').val();
		
		if (firstNameValue == "") {
			$('#FirstName').text("Error Must Provide First Name");
			$('#FirstName').css({color:"red"})
		}	else{
		$('#FirstName').text(firstNameValue);
		$('#FirstName').css({color:"black"})
			}
			

		var lastNameValue = $('.lastName').val();
		
		if (lastNameValue == "") {
			$('#LastName').text("Error Must Provide Last Name");
			$('#LastName').css({color:"red"})
		}	else{
		$('#LastName').text(lastNameValue);
		$('#LastName').css({color:"black"})
			}

		var emailValue = $('.email').val();

		if (emailValue == "") {
			$('#Email').text("Error Must Provide Email Address");
			$('#Email').css({color:"red"})
		}	
		else{
			$('#Email').text(emailValue);
			$('#Email').css({color:"black"})
		}

		var homeTownValue = $('.homeTown').val();
		
		if (homeTownValue == "") {
			$('#HomeTown').text("Error Must Provide a Home Town");
			$('#HomeTown').css({color:"red"})
		}	
		else{
			$('#HomeTown').text(homeTownValue);
			$('#HomeTown').css({color:"black"})
		}

		var homeStateValue = $('.homeState').val();
		
		if (homeStateValue == "") {
			$('#HomeState').text("Error Must Provide a Home State");
			$('#HomeState').css({color:"red"})
		}	
		else{
			$('#HomeState').text(homeStateValue);
			$('#HomeState').css({color:"black"})
		}

		var monthValue = $('.month').val();
		
		if (monthValue == "") {
			$('#Month').text("Error Must Provide Month of Birth");
			$('#Month').css({color:"red"})
		}	
		else{
			$('#Month').text(monthValue);
			$('#Month').css({color:"black"})
		}

		var dateValue = $('.date').val();
		
		if (dateValue == "") {
			$('#Date').text("Error Must Provide a Date of Birth");
			$('#Date').css({color:"red"})
		}	
		else{
			$('#Date').text(dateValue);
			$('#Date').css({color:"black"})
		}

		var yearValue = $('.year').val();
		
		if (yearValue == "") {
			$('#Year').text("Error Must Provide a Year of Birth");
			$('#Year').css({color:"red"})
		}	
		else{
			$('#Year').text(yearValue);
			$('#Year').css({color:"black"})
		}

		$('.icon').css({opacity:"1"})
		$('h4').css({opacity:"1"})
	})
})

