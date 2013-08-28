describe ("Social Input", function(){

	describe("should validate entries by", function(){
		beforeEach(function(){
			$('input').val('')
		})

		it("not running if all entries are blank so the users list should be Undefined", function(){
			$('.large').click()
			expect($('userList ul li')).toBeUndefined

		})

		it("not update the array with values when all entries are blank", function(){
			expect(dataCollect).toBeUndefined

		})

		it("not running if any entry is blank so the users list should be Undefined", function(){
			$('.firstName').val('Johnny');
			$('.email').val('jcistheman@hotmail.com');
			$('.homeTown').val('TR');
			$('.homeState').val('SC');
			$('.month').val('January');
			$('.date').val('1');
			$('.year').val('1923');
			$('.large').click()
			expect($('userList ul li')).toBeUndefined

		})

		it("not update the array with values when one entry is blank", function(){
			expect(dataCollect).toBeUndefined

		})


	})

	describe("should successfully run when all data is entered by", function(){
		it("successfully recording the input to each part of the object such as firstName", function(){
			$('.firstName').val('Johnny');
			$('.lastName').val('Camper');
			$('.email').val('jcistheman@hotmail.com');
			$('.homeTown').val('TR');
			$('.homeState').val('SC');
			$('.month').val('January');
			$('.date').val('1');
			$('.year').val('1923');
			$('.large').click()
			expect(entry.firstName).toBe('Johnny')

		})

		it("successfully records the object into the array dataCollect", function(){
			expect(dataCollect[0].firstName).toBe('Johnny')
			expect(dataCollect[0].lastName).toBe('Camper')

		})

		it("update the user list on the page with the new addition", function(){
			expect($('.userList ul li').last().text()).toBe('Johnny Camper');
		})

		it("only run the number of times of successful data entry")
			expect(count).toEqual(1)

	})






})