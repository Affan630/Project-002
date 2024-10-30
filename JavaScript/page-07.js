// Booking calender

flatpickr("#calendar", {
    mode: "multiple", // Allow multiple date selection
    dateFormat: "Y-m-d", // Format selected dates
    showMonths: 1, // Show only one month at a time
    disableYearSelector: true, // Disable year selector
    inline: true, // Inline calendar (no dropdown)
    monthSelectorType: "static", // Show only the month in the header
    defaultDate: null, // Optional: remove default date
    onReady: function (selectedDates, dateStr, instance) {
      // Remove year from the display
      instance.currentMonthElement.innerHTML =
        instance.l10n.months.longhand[instance.currentMonth];
    },
    onMonthChange: function (selectedDates, dateStr, instance) {
      // Make sure year does not appear after month changes
      instance.currentMonthElement.innerHTML =
        instance.l10n.months.longhand[instance.currentMonth];
    },
    locale: {
      firstDayOfWeek: 1, // Optional: start the week on Monday
    },
  });


//   another calender

const monthNames = ["January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"];

let currentDate = new Date();

function renderCalendar() {
  const month1 = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const month2 = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);

  document.getElementById("currentRange").textContent = 
  `${monthNames[month1.getMonth()]} - ${monthNames[month2.getMonth()]}`;

  const renderMonth = (monthElement, month) => {
      monthElement.innerHTML = `<div class="month-title">${monthNames[month.getMonth()]}</div>`;
      
      // Create the table structure for the calendar
      monthElement.innerHTML += `<table class="table table-bordered">
          <thead>
              <tr>
                  <th class="day sunday">S</th>
                  <th class="day">M</th>
                  <th class="day">T</th>
                  <th class="day">W</th>
                  <th class="day">T</th>
                  <th class="day">F</th>
                  <th class="day">S</th>
              </tr>
          </thead>
          <tbody id="days-row"></tbody>
      </table>`;

      const firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
      const lastDay = new Date(month.getFullYear(), month.getMonth() + 1, 0);
      const totalDays = lastDay.getDate();
      const startDay = firstDay.getDay(); // Get the first day of the month (0-6)

      const daysRow = [];
      let currentRow = [];

      // Fill empty cells for the days before the first
      for (let i = 0; i < startDay; i++) {
          currentRow.push(`<td class="day"></td>`); 
      }

      // Fill in the days of the month
      for (let day = 1; day <= totalDays; day++) {
          currentRow.push(`<td class="day ${day === new Date().getDate() && month.getMonth() === currentDate.getMonth() ? 'highlight' : ''}">${day}</td>`);

          // If the current row has 7 days, push it to daysRow and reset currentRow
          if (currentRow.length === 7) {
              daysRow.push(`<tr>${currentRow.join('')}</tr>`);
              currentRow = []; // Reset currentRow for the next week
          }
      }

      // Fill remaining empty cells for the last week
      while (currentRow.length < 7) {
          currentRow.push(`<td class="day"></td>`); // Fill with empty cells if less than 7
      }

      // Add the last row if it has any days
      if (currentRow.length > 0) {
          daysRow.push(`<tr>${currentRow.join('')}</tr>`);
      }

      // Add the days to the table
      const daysRowElement = monthElement.querySelector('tbody');
      daysRowElement.innerHTML = daysRow.join('');
  };

  renderMonth(document.getElementById("month1"), month1);
  renderMonth(document.getElementById("month2"), month2);
}

document.getElementById("prevMonth").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

document.getElementById("nextMonth").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

// Initial render
renderCalendar();




// Map Script

function initMap() {
  // The location of Dhigurah
  const location = { lat: 3.8664, lng: 72.9777 }; // Latitude and Longitude of Dhigurah, Maldives

  // The map, centered at Dhigurah
  const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: location,
  });

  // The marker, positioned at Dhigurah
  const marker = new google.maps.Marker({
      position: location,
      map: map,
  });
}

// Handle potential API loading errors
function handleError() {
  alert("Error loading Google Maps. Please check your API key and network connection.");
}
