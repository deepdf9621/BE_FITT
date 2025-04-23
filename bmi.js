// JavaScript for BMI Calculator
function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value / 100; // Convert height to meters
    const bmiResult = document.getElementById("bmiResult");
    const bmiInterpretation = document.getElementById("bmiInterpretation");

    if (weight && height) {
        const bmi = weight / (height * height);
        bmiResult.innerText = `Your BMI: ${bmi.toFixed(1)}`;

        // Interpretation based on BMI value
        if (bmi < 18.5) {
            bmiInterpretation.innerText = "You are underweight.";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            bmiInterpretation.innerText = "You have a normal weight.";
        } else if (bmi >= 25 && bmi < 29.9) {
            bmiInterpretation.innerText = "You are overweight.";
        } else {
            bmiInterpretation.innerText = "You are in the obese category.";
        }
    } else {
        bmiResult.innerText = "Please enter both weight and height.";
        bmiInterpretation.innerText = "";
    }
}
