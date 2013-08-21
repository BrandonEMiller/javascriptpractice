$(document).ready(function(){

	$('.large').click(function() {
		var firstNameValue = $('.firstName').val();
		$('#FirstName').text(firstNameValue);

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
	})
})

function sayHello(firstName) {
	console.log('Hello, ' + firstName)
}

// function add(first, second){
// 	sayHello('Bob');

// 	if (second == undefined) {
// 		return "must provide two arguments";
// 	} else {
// 		return first + second;
// 	}
// }

function add(first, second){
	console.log(first + second);
	if (first + second >= 1000) {
		return first + second;
	} else {
		add(first+1, second+1);
	}
}