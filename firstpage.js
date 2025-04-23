// JavaScript for Weight Calculator
function calculateWeight() {
    const age = document.getElementById("age").value;
    const height = document.getElementById("height").value;
    const result = document.getElementById("result");
    


    if (age && height) {
        // Simplified weight calculation based on height
        let recommendedWeight;

        if (age <= 18) {
            recommendedWeight = (height - 100) * 0.9; // For younger individuals
        } else if (age <= 65) {
            recommendedWeight = (height - 100) * 1.1; // Adults
        } else {
            recommendedWeight = (height - 100) * 0.95; // Seniors
        }

        result.innerText = `Recommended weight: ${recommendedWeight.toFixed(1)} kg for age ${age}.`;
    } else {
        result.innerText = "Please enter both age and height.";
    }
}
