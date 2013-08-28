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






})