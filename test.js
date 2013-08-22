$(document).ready(function(){

	$('.large').click(function() {

	
		var firstNameValue = $('.firstName').val();
		$('#FirstName').text(firstNameValue);
		if (firstNameValue == undefined) {
			firstNameValue="Error";
		}

		var lastNameValue = $('.lastName').val();
		$('#LastName').text(lastNameValue);

		var emailValue = $('.email').val();
		$('#Email').text(emailValue);

		var homeTownValue = $('.homeTown').val();
		$('#HomeTown').text(homeTownValue);

		var homeStateValue = $('.homeState').val();
		$('#HomeState').text(homeStateValue);

		var monthValue = $('.month').val();
		$('#Month').text(monthValue);

		var dateValue = $('.date').val();
		$('#Date').text(dateValue);

		var yearValue = $('.year').val();
		$('#Year').text(yearValue);

		$('.icon').css({opacity:"1"})
		$('h4').css({opacity:"1"})
	})
})

