describe ("Social Input", function(){

	describe("should validate entries by", function(){
		beforeEach(function(){
			$('input').val('')
		})

		it("should not run if an entry is blank so the users list should be Undefined", function(){
			$('.large').click()
			expect($('userList ul li')).toBeUndefined

		})

		it("should not update the array with values when and entry is blank", function(){
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
			expect(dataCollect).toContain('Johnny')

		})


	})






})