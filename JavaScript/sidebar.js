      
// Arrival & Your Space button activation
function activateTab(buttonId) {
    // Remove the 'active-tab' class from all buttons
    document.getElementById('btnYourSpace').classList.remove('active-tab');
    document.getElementById('btnArrivalGuide').classList.remove('active-tab');

    // Add the 'active-tab' class to the clicked button
    document.getElementById(buttonId).classList.add('active-tab');

    // Show the respective section
    showSection(buttonId === 'btnYourSpace' ? 'yourSpace' : 'arrivalGuide');
}

         // JavaScript for Interactivity
    function showSection(sectionId) {
        // Hide all sections first
        document.querySelectorAll('.section-content').forEach(el => el.classList.add('d-none'));

        // Show the selected section
        document.getElementById(`${sectionId}Section`).classList.remove('d-none');

        // Remove 'active-tab' class from all buttons
        document.querySelectorAll('.tab-button, #settingsTab').forEach(el => el.classList.remove('active-tab'));

        // Get references to the tab buttons container and settings button
        const tabContainer = document.querySelector('.tab');
        const settingsButton = document.getElementById('settingsTab');

        // Toggle active state for the selected tab and handle Settings button styling
        if (sectionId === 'settings') {
            settingsButton.classList.toggle('active-tab'); // Toggle active color for Settings icon
            tabContainer.classList.toggle('d-none'); // Toggle visibility of tab buttons

            // If Settings is active, leave it highlighted; otherwise, revert to Your Space
            if (!settingsButton.classList.contains('active-tab')) {
                showSection('yourSpace'); // Default to Your Space if Settings is clicked again
            }
        } else {
            // For Your Space or Arrival Guide, add the active-tab class to the clicked tab
            document.getElementById(`btn${sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}`).classList.add('active-tab');

            // Show the tab buttons and reset the Settings button color
            tabContainer.classList.remove('d-none');
            settingsButton.classList.remove('active-tab');
        }
    }

  
     // Function to open the time picker when Check-in section is clicked
     function showTimePicker() {
        document.getElementById('timePicker').click(); // Programmatically click the hidden time input
    }

    // Function to update Check-in time after a time is selected
    function updateCheckInTime() {
        const timePicker = document.getElementById('timePicker');
        const checkInTimeDisplay = document.getElementById('checkInTime');

        // Get the selected time from the time picker
        const selectedTime = timePicker.value;

        // Format the time in 12-hour format with AM/PM
        const [hours, minutes] = selectedTime.split(':');
        let formattedHours = parseInt(hours);
        const ampm = formattedHours >= 12 ? 'PM' : 'AM';

        formattedHours = formattedHours % 12 || 12; // Convert 0 to 12 for 12-hour format
        const formattedTime = `${formattedHours}:${minutes} ${ampm}`;

        // Update the Check-in display with the selected time
        checkInTimeDisplay.textContent = formattedTime;
    }

    // Event listener for the "Check-Out" section to add custom details
    document.getElementById('checkOutDetails').addEventListener('click', function () {
        let newDetail = prompt("Enter Check-Out Details:");
        if (newDetail) {
            this.textContent = newDetail;
        }
    });

     // off-canvas Function

     function showSection2(sectionId2) {
        // Hide all sections first
        document.querySelectorAll('.section-content2').forEach(el => el.classList.add('d-none'));

        // Show the selected section
        const sectionToShow = document.getElementById(sectionId2);
        if (sectionToShow) {
            sectionToShow.classList.remove('d-none');
        } else {
            console.error(`Section with ID ${sectionId2} not found!`);
        }

        // Remove 'active-tab' class from all buttons
        document.querySelectorAll('.tab-button2').forEach(el => el.classList.remove('active-tab'));

        // Add 'active-tab' class to the clicked button
        if (sectionId2 === 'yourSpaceSection2') {
            document.getElementById('btnYourSpace2').classList.add('active-tab');
        } else if (sectionId2 === 'arrivalGuideSection2') {
            document.getElementById('btnArrivalGuide2').classList.add('active-tab');
        } else if (sectionId2 === 'settingsSection2') {
            document.getElementById('settingsTab2').classList.add('active-tab');
        } else {
            console.error(`No button found for section ID ${sectionId2}`);
        }
    }






        const desktopSidebar = document.getElementById('sidebar'); // Desktop sidebar
    const middleSection = document.getElementById('middleSection');
    const rightSection = document.getElementById('rightSection');
    const closeSidebar = document.getElementById('closeSidebar');
    const openSidebarIcon = document.getElementById('openSidebarIcon');
    const openOffcanvasBtn = document.getElementById('openOffcanvas'); // Offcanvas button (for mobile)
    const offcanvasSidebar = document.getElementById('offcanvasExample'); // Offcanvas element (for mobile)

    // Close desktop sidebar and adjust layout (for large screens)
    closeSidebar.addEventListener('click', () => {
        desktopSidebar.classList.add('collapsed'); // Collapse the desktop sidebar
        openSidebarIcon.classList.remove('d-none'); // Show the chevron button
        openSidebarIcon.classList.add('d-flex');    // Make chevron visible and flex
        middleSection.style.width = '40%';          // Expand middle section
        rightSection.style.width = '55%';           // Expand right section
    });

    // Open desktop sidebar and revert layout (for large screens)
    openSidebarIcon.addEventListener('click', () => {
        desktopSidebar.classList.remove('collapsed'); // Expand the desktop sidebar
        openSidebarIcon.classList.add('d-none');      // Hide the chevron button
        openSidebarIcon.classList.remove('d-flex');   // Remove flex display
        middleSection.style.width = '30%';            // Revert middle section width
        rightSection.style.width = '50%';             // Revert right section width
    });


 // Toggle selection for radio buttons
 // Toggle selection for custom radio buttons
const radios = document.querySelectorAll('.custom-radio');

if (radios.length) {
    radios.forEach(radio => {
        radio.addEventListener('click', () => {
            // Remove the 'selected' class from all radios
            radios.forEach(r => r.classList.remove('selected'));
            
            // Add the 'selected' class to the clicked radio
            radio.classList.add('selected');
        });
    });
}
