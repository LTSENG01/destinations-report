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
    TEAL: 'rgb(0, 174, 199)',
    GREEN: 'rgb(46,139,87)'
}

const Labels = [
    'Working',
    'Continuing Education',
    'Still Looking',
    'Unknown'
];

const MSdata = {
    // labels: Labels,
    datasets: [{
        label: ' Count',
        data: [104, 17, 15, 1],
        backgroundColor: [
            UMassColors.GREEN,
            UMassColors.TEAL,
            UMassColors.MAROON,
            UMassColors.LIGHTGRAY
        ],
        hoverOffset: 4
    }]
};

const UGdata = {
    // labels: Labels,
    datasets: [{
        label: ' Count',
        data: [264, 83, 61, 32],
        backgroundColor: [
            UMassColors.GREEN,
            UMassColors.TEAL,
            UMassColors.MAROON,
            UMassColors.LIGHTGRAY
        ],
        hoverOffset: 4
    }]
};

const configMS = {
    type: 'doughnut',
    data: MSdata
};

const configUG = {
    type: 'doughnut',
    data: UGdata
};

const MSChart = new Chart(
    document.getElementById('MSChart'),
    configMS
);

const UGChart = new Chart(
    document.getElementById('UGChart'),
    configUG
);

// Use GAPI for Google Sheets
// https://github.com/google/google-api-javascript-client/blob/master/docs/start.md


/** Data for Headlines */
const headlines = [

]

// https://www.geeksforgeeks.org/how-to-adjust-the-width-and-height-of-iframe-to-fit-with-content-in-it/
// https://stackoverflow.com/questions/9153445/how-to-communicate-between-iframe-and-the-parent-site
// http://shorts.jeffkreeftmeijer.com/2014/scroll-to-anchors-in-iframes/#anchor-5
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

    $(".nav-link").on("click", function(e) {
        e.preventDefault();
        // returns "undergraduate" from "https://destinations.ltseng.me/#undergraduate"
        window.top.postMessage({
            "setAnchor": $(this).attr('href').split('/').pop().substring(1)
        }, "*")
    });
});

window.addEventListener("message", (e) => {
    let anchor = e.data["findElement"];
    if (anchor !== undefined) {
        let element = $(`#${anchor}`);
        window.top.postMessage({
            "offset": element.offset().top
        }, "*")
    }
})


