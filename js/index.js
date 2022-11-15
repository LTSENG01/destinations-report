const MSLabels = [
    'Continuing Education',
    'Working',
    'Still Looking',
    'Unknown'
];

const data = {
    labels: MSLabels,
    datasets: [{
        label: 'MS Dataset',
        data: [17, 104, 15, 1],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(300, 100, 50)'
        ],
        hoverOffset: 4
    }]
};

const config = {
    type: 'doughnut',
    data: data,
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

// Use GAPI for Google Sheets
// https://github.com/google/google-api-javascript-client/blob/master/docs/start.md


/** Data for Headlines */
const headlines = [

]
