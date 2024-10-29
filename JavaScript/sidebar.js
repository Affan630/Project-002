
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