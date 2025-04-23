// JavaScript for Calorie Calculator
function calculateCalories() {
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const activityLevel = parseFloat(document.getElementById("activityLevel").value);
    const calorieResult = document.getElementById("calorieResult");

    if (age && weight && height && activityLevel) {
        // Calculate BMR based on gender
        let bmr;
        if (gender === "male") {
            bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else {
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }

        // Adjust BMR based on activity level to get daily calorie needs
        const dailyCalories = bmr * activityLevel;
        calorieResult.innerText = `Your estimated daily calorie needs: ${dailyCalories.toFixed(0)} calories.`;
    } else {
        calorieResult.innerText = "Please fill in all the fields correctly.";
    }
}
