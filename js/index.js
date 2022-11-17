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

// https://www.geeksforgeeks.org/how-to-adjust-the-width-and-height-of-iframe-to-fit-with-content-in-it/
// https://stackoverflow.com/questions/9153445/how-to-communicate-between-iframe-and-the-parent-site
window.onload(() => {
    const message = {
        height: window.document.body.scrollHeight,
        width: window.document.body.scrollWidth
    }
    window.postMessage(message, "https://cics.umass.edu");
});

