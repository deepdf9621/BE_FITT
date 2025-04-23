// JavaScript to display the current day, date, month, and year
function displayCalendar() {
    const calendarElement = document.getElementById("calendar");

    // Get the current date
    const currentDate = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Extract day, date, month, and year
    const dayName = days[currentDate.getDay()];
    const date = currentDate.getDate();
    const monthName = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    // Display the date in the "calendar" element
    calendarElement.innerHTML = `
        <p><strong>Day:</strong> ${dayName}</p>
        <p><strong>Date:</strong> ${date} ${monthName} ${year}</p>
    `;
}

// Call the function to display the calendar when the page loads
window.onload = displayCalendar;
