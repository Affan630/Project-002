const ctx = document.getElementById('earningsChart').getContext('2d');
const earningsChart = new Chart(ctx, {
    type: 'line', // Change to 'bar' for a bar chart
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // Months
        datasets: [{
            label: 'Earnings (USD)',
            data: [0, 5, 10, 20, 15, 30, 25, 40, 35, 50, 45, 60], // Sample data
            // borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        maintainAspectRatio: false,
    }
});