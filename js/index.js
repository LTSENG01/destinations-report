const UMassColors = {
    MAROON: 'rgb(136, 28, 28)',
    BLACK: 'rgb(33, 39, 33)',
    LIGHTGRAY: 'rgb(162, 170, 173)',
    ORANGE: 'rgb(255, 158, 27)',
    YELLOW: 'rgb(255, 199, 44)',
    DARKBLUE: 'rgb(0, 27, 84)',
    BROWN: 'rgb(94, 75, 60)',
    LIMEGREEN: 'rgb(196, 214, 0)',
    AQUA: 'rgb(134, 200, 188)',
    TEAL: 'rgb(0, 174, 199)'
}

const MSLabels = [
    'Working',
    'Continuing Education',
    'Still Looking',
    'Unknown'
];

const data = {
    labels: MSLabels,
    datasets: [{
        label: ' Count',
        data: [104, 17, 15, 1],
        backgroundColor: [
            UMassColors.MAROON,
            UMassColors.TEAL,
            UMassColors.DARKBLUE,
            UMassColors.LIGHTGRAY
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
window.addEventListener("load", (e) => {
    // if (e.origin !== "https://www.cics.umass.edu") {
    //     console.log("DEBUG: Website is not https://www.cics.umass.edu, so not posting message.");
    //     return;
    // }

    const message = {
        height: window.document.body.scrollHeight,
        width: window.document.body.scrollWidth
    }
    window.top.postMessage(message, "*");
});

