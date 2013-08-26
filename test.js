$(document).ready(function(){

	$('.large').click(function() {
		var counter = 0;
		
		var firstNameValue = $('.firstName').val();
		
		if (firstNameValue == "") {
			$('#FirstName').text("Error Must Provide First Name");
			$('#FirstName').css({color:"red"})
			alert('No First Name.');
			counter=1;
		}	else{
		$('#FirstName').text(firstNameValue);
		$('#FirstName').css({color:"black"});
			}
			

		var lastNameValue = $('.lastName').val();
		
		if (lastNameValue == "") {
			$('#LastName').text("Error Must Provide Last Name");
			$('#LastName').css({color:"red"})
			alert('No Last Name.');
			counter=1;
		}	else{
		$('#LastName').text(lastNameValue);
		$('#LastName').css({color:"black"})
			}

		var emailValue = $('.email').val();

		if (emailValue == "") {
			$('#Email').text("Error Must Provide Email Address");
			$('#Email').css({color:"red"})
			alert('No Email Address.');
			counter=1;
		}	
		else{
			$('#Email').text(emailValue);
			$('#Email').css({color:"black"})
		}

		var homeTownValue = $('.homeTown').val();
		
		if (homeTownValue == "") {
			$('#HomeTown').text("Error Must Provide a Home Town");
			$('#HomeTown').css({color:"red"})
			alert('No Home Town.');
			counter=1;
		}	
		else{
			$('#HomeTown').text(homeTownValue);
			$('#HomeTown').css({color:"black"})
		}

		var homeStateValue = $('.homeState').val();
		
		if (homeStateValue == "") {
			$('#HomeState').text("Error Must Provide a Home State");
			$('#HomeState').css({color:"red"})
			alert('No Home State.');
			counter=1;
		}	
		else{
			$('#HomeState').text(homeStateValue);
			$('#HomeState').css({color:"black"})
		}

		var monthValue = $('.month').val();
		
		if (monthValue == "") {
			$('#Month').text("Error Must Provide Month of Birth");
			$('#Month').css({color:"red"})
			alert('No Birth Month.');
			counter=1;
		}	
		else{
			$('#Month').text(monthValue);
			$('#Month').css({color:"black"})
		}

		var dateValue = $('.date').val();
		
		if (dateValue == "") {
			$('#Date').text("Error Must Provide a Date of Birth");
			$('#Date').css({color:"red"})
			alert('No Birth Date.');
			counter=1;
		}	
		else{
			$('#Date').text(dateValue);
			$('#Date').css({color:"black"})
		}

		var yearValue = $('.year').val();
		
		if (yearValue == "") {
			$('#Year').text("Error Must Provide a Year of Birth");
			$('#Year').css({color:"red"})
			alert('No Birth Year.');
			counter=1;
		}	
		else{
			$('#Year').text(yearValue);
			$('#Year').css({color:"black"})
		}

		$('.icon').css({opacity:"1"})
		$('h4').css({opacity:"1"})
	})


	$('.firstName').keyup(function(event) {
    newText = event.target.value;
    $('#FirstName').text(newText);
  });
	
	$('.lastName').keyup(function(event) {
    newText = event.target.value;
    $('#LastName').text(newText);
  });

	$('.email').keyup(function(event) {
    newText = event.target.value;
    $('#Email').text(newText);
  });

	$('.homeTown').keyup(function(event) {
    newText = event.target.value;
    $('#HomeTown').text(newText);
  });

	$('.homeState').keyup(function(event) {
    newText = event.target.value;
    $('#HomeState').text(newText);
  });

	$('.month').keyup(function(event) {
    newText = event.target.value;
    $('#Month').text(newText);
  });

	$('.date').keyup(function(event) {
    newText = event.target.value;
    $('#Date').text(newText);
  });

	$('.year').keyup(function(event) {
    newText = event.target.value;
    $('#Year').text(newText);
  });





})

