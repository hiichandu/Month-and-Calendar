const monthYear = document.getElementById("monthYear");
const calendarDays = document.getElementById("calendarDays");

const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();
const currentDate = today.getDate();

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Display current month and year
monthYear.innerText = `${monthNames[currentMonth]} ${currentYear}`;

// First day of the current month
const firstDay = new Date(currentYear, currentMonth, 1).getDay();

// Fixed number of days (as per your requirement)
const totalDays = 30;

// Add empty divs to align the start day
for (let i = 0; i < firstDay; i++) {
  const emptyDiv = document.createElement("div");
  calendarDays.appendChild(emptyDiv);
}

// Create day boxes dynamically
for (let day = 1; day <= totalDays; day++) {
  const dayDiv = document.createElement("div");
  dayDiv.classList.add("day");
  dayDiv.textContent = day;

  if (day === currentDate) {
    dayDiv.classList.add("today");
  }

  calendarDays.appendChild(dayDiv);
}
