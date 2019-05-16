var bmi_Index = {
	// properties below
	H: 0,
	W: 0,
   
	// method to retrieve input 
	prompt_Values: function(){
	
	// input from prompt dialog
       bmi_Index.H = prompt("Enter your height in inches.");
       bmi_Index.W = prompt("Enter your weight in pounds.");
	   
       bmi_Convert.values_Convert();
	}
};

var bmi_Convert = {
	// method to convert input
	values_Convert: function(){

		kg = bmi_Index.W * 0.45;
		m = bmi_Index.H * 0.025;
		
		m2 = m * m;
		
		bmi = kg / m2;
		
		return bmi;
	},

	calculate_Display: function() {
		calc_BMI_Button = document.getElementById("yes");
		
		display = "<p><br /><h2>My Body Mass Index</h2>"+
			"Height: "+ bmi_Index.H + " inches<br /> Weight: " + bmi_Index.W + " pounds<br />"+
			"BMI: "+ bmi.toFixed(2) +"</p>"
	
		calc_BMI_Button.innerHTML = display;
	}
};

window.onload = function() {
	document.getElementById("calc").onclick = function fun() {
	bmi_Index.prompt_Values();
	
	bmi_Convert.calculate_Display();
	}
}