// Register the Chart.js data labels plugin
Chart.register(ChartDataLabels);

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

const LabelBackgroundColor = 'rgba(0, 0, 0, 0.2)';

const Labels = [
    'Working',
    'Continuing Education',
    'Still Looking',
    'Unknown'
];

const PhDLabels = [
    'Working',
    'Cont. Education'
];

const MSdata = {
    labels: Labels,
    datasets: [{
        label: ' Number of Students',
        data: [96, 12, 13, 3],
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
    labels: Labels,
    datasets: [{
        label: ' Number of Students',
        data: [261, 85, 61, 33],
        backgroundColor: [
            UMassColors.GREEN,
            UMassColors.TEAL,
            UMassColors.MAROON,
            UMassColors.LIGHTGRAY
        ],
        hoverOffset: 4
    }],
    legend: {
        display: false,
    },
};

const PhDdata = {
    labels: PhDLabels,
    datasets: [{
        label: ' Number of Students',
        data: [21, 7],
        backgroundColor: [
            UMassColors.GREEN,
            UMassColors.TEAL
        ],
        hoverOffset: 4
    }],
    legend: {
        display: false,
    },
};


const configMS = {
    type: 'doughnut',
    data: MSdata,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter: (value, ctx) => {
                    // Uncomment this code for a percentage calculation
                    // let sum = 0;
                    // let dataArr = ctx.chart.data.datasets[0].data;
                    // dataArr.map(data => {
                    //     sum += data;
                    // });
                    // let percentage = (value*100 / sum).toFixed(2)+"%";

                    return value + "\n" + ctx.chart.data.labels[ctx.dataIndex];
                },
                color: "#fff",
                // backgroundColor: LabelBackgroundColor,
                textAlign: "center",
                font: {
                    family: "'Public Sans', Arial, Helvetica, sans-serif",
                    size: 14
                }
            }
        }
    }
};

const configUG = {
    type: 'doughnut',
    data: UGdata,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter: (value, ctx) => {
                    // Uncomment this code for a percentage calculation
                    // let sum = 0;
                    // let dataArr = ctx.chart.data.datasets[0].data;
                    // dataArr.map(data => {
                    //     sum += data;
                    // });
                    // let percentage = (value*100 / sum).toFixed(2)+"%";

                    return value + "\n" + ctx.chart.data.labels[ctx.dataIndex];
                },
                color: "#fff",
                // backgroundColor: LabelBackgroundColor,
                textAlign: "center",
                font: {
                    family: "'Public Sans', Arial, Helvetica, sans-serif",
                    size: 14
                }
            }
        }
    }
};

const configPhD = {
    type: 'doughnut',
    data: PhDdata,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                formatter: (value, ctx) => {
                    // Uncomment this code for a percentage calculation
                    // let sum = 0;
                    // let dataArr = ctx.chart.data.datasets[0].data;
                    // dataArr.map(data => {
                    //     sum += data;
                    // });
                    // let percentage = (value*100 / sum).toFixed(2)+"%";

                    return value + "\n" + ctx.chart.data.labels[ctx.dataIndex];
                },
                color: "#fff",
                // backgroundColor: LabelBackgroundColor,
                textAlign: "center",
                font: {
                    family: "'Public Sans', Arial, Helvetica, sans-serif",
                    size: 14
                }
            }
        }
    }
};                   

const PhDChart = new Chart(
    document.getElementById('PhDChart'),
    configPhD
);

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


