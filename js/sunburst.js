ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"]; // DEFINE DATA
// -----------------------------
let chartData = [{
    id: 'Industries',
    text: ' ',
    parent: ''
}, {
    id: 'Tech',
    text: 'Tech',
    parent: 'Industries',
    value: 74
}, {
    id: 'Healthcare',
    text: 'Healthcare',
    parent: 'Industries',
    value: 1
}, {
    id: 'FinTech',
    text: 'FinTech',
    parent: 'Industries',
    value: 13
}, {
    id: 'Public Interest Technology',
    text: 'Public Interest Technology (PIT)',
    parent: 'Industries',
    value: 3
}, {
    id: 'SW',
    text: 'Software',
    parent: 'Tech',
    value: 44
}, {
    id: 'HW',
    text: 'Hardware',
    parent: 'Tech',
    value: 6
}, {
    id: 'Robotics',
    text: 'Robotics',
    parent: 'Tech',
    value: 2
}, {
    id: 'Retail',
    text: 'Retail',
    parent: 'Tech',
    value: 11
}, {
    id: 'Communications',
    text: 'Communications',
    parent: 'Tech',
    value: 5
},
    {
        id: 'Entertainment',
        text: 'Entertainment',
        parent: 'Tech',
        value: 0
    }, {
        id: 'Networking',
        text: 'Networking',
        parent: 'Tech',
        value: 0
    }, {
        id: 'Consulting',
        text: 'Consulting',
        parent: 'Tech',
        value: 3
    }, {
        id: 'Cybersecurity',
        text: 'Cybersecurity',
        parent: 'Tech',
        value: 3
    }, {
        id: 'Software',
        text: 'Software',
        parent: 'Healthcare',
        value: 0
    }, {
        id: 'Life Sciences',
        text: 'Life Sciences',
        parent: 'Healthcare',
        value: 1
    }, {
        id: 'Pharmaceuticals',
        text: 'Pharmaceuticals',
        parent: 'Healthcare',
        value: 0
    }, {
        id: 'Insurance',
        text: 'Insurance',
        parent: 'FinTech',
        value: 10
    }, {
        id: 'Investment Banking',
        text: 'Investment Banking',
        parent: 'FinTech',
        value: 3
    }, {
        id: 'Government',
        text: 'Government',
        parent: 'Public Interest Technology',
        value: 1
    }, {
        id: 'Government Contractors',
        text: 'Government Contractors',
        parent: 'Public Interest Technology',
        value: 0
    }, {
        id: 'GreenTech',
        text: 'GreenTech',
        parent: 'Public Interest Technology',
        value: 0
    }, {
        id: '“Common Good”',
        text: '“Common Good”',
        parent: 'Public Interest Technology',
        value: 2
    }
];
// full ZingChart schema can be found here:
// https://www.zingchart.com/docs/api/json-configuration/
let chartConfig = {
    type: 'sunburst',
    backgroundColor: '#fff',
    options: {
        sizeFactor: 0.9,
        slice: 0,
        space: 0,
        root: 'Industries',
        // widths: [5, 100, 130],
        palette: ['#ffffff', '#3F51B5', '#42A5F5', '#5C6BC0', '#64B5F6']
    },
    plot: {
        animation: {},
        valueBox: {
            text: '%data-vbtext',
            color: '#fff',
            fontSize: '13px',
            fontWeight: 400,
            visible: null
        },
        tooltipText: '<span style=\'font-size:19px\'>%plot-text</span><br/>No. of Students: %node-value',
        alpha: 1,
    },
    tooltip: {
        align: 'left',
        thousandsSeparator: ','
    },
    series: chartData,
};

zingchart.render({
    id: 'sunburstChart',
    data: chartConfig,
    height: '100%',
    width: '100%'
});

// UGRAD //

ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"]; // DEFINE DATA
// -----------------------------
let chartDataUG = [{
    id: 'Industries',
    text: ' ',
    parent: ''
}, {
    id: 'Tech',
    text: 'Tech',
    parent: 'Industries',
    value: 153
}, {
    id: 'Healthcare',
    text: 'Healthcare',
    parent: 'Industries',
    value: 23
}, {
    id: 'FinTech',
    text: 'FinTech',
    parent: 'Industries',
    value: 56
}, {
    id: 'Public Interest Technology',
    text: 'Public Interest Technology (PIT)',
    parent: 'Industries',
    value: 20
}, {
    id: 'SW',
    text: 'Software',
    parent: 'Tech',
    value: 49
}, {
    id: 'HW',
    text: 'Hardware',
    parent: 'Tech',
    value: 18
}, {
    id: 'Robotics',
    text: 'Robotics',
    parent: 'Tech',
    value: 0
}, {
    id: 'Retail',
    text: 'Retail',
    parent: 'Tech',
    value: 40
}, {
    id: 'Communications',
    text: 'Communications',
    parent: 'Tech',
    value: 12
},
    {
        id: 'Gaming',
        text: 'Gaming',
        parent: 'Tech',
        value: 6
    }, {
        id: 'Networking',
        text: 'Networking',
        parent: 'Tech',
        value: 0
    }, {
        id: 'Consulting',
        text: 'Consulting',
        parent: 'Tech',
        value: 20
    }, {
        id: 'Cybersecurity',
        text: 'Cybersecurity',
        parent: 'Tech',
        value: 8
    }, {
        id: 'Software',
        text: 'Software',
        parent: 'Healthcare',
        value: 11
    }, {
        id: 'Life Sciences',
        text: 'Life Sciences',
        parent: 'Healthcare',
        value: 12
    }, {
        id: 'Pharmaceuticals',
        text: 'Pharmaceuticals',
        parent: 'Healthcare',
        value: 0
    }, {
        id: 'Insurance',
        text: 'Insurance',
        parent: 'FinTech',
        value: 16
    }, {
        id: 'Investment Banking',
        text: 'Investment Banking',
        parent: 'FinTech',
        value: 40
    }, {
        id: 'Government',
        text: 'Government',
        parent: 'Public Interest Technology',
        value: 6
    }, {
        id: 'Contractors',
        text: 'Contractors',
        parent: 'Public Interest Technology',
        value: 2
    }, {
        id: 'GreenTech',
        text: 'GreenTech',
        parent: 'Public Interest Technology',
        value: 0
    }, {
        id: '“Common Good”',
        text: '“Common Good”',
        parent: 'Public Interest Technology',
        value: 12
    }];
let UGchartConfig = {
    type: 'sunburst',
    backgroundColor: '#fff',
    options: {
        sizeFactor: 0.9,
        slice: 0,
        space: 0,
        root: 'Industries',
        // widths: [30, 115, 115],
        palette: ['#ffffff', '#fe3b1f', '#c4d600', '#ff9e1b', '#6ba539']
    },
    plot: {
        animation: {},
        valueBox: {
            text: '%data-vbtext',
            color: '#000',
            fontSize: '13px',
            fontWeight: 400,
            visible: null
        },
        tooltipText: '<span style=\'font-size:19px\'>%plot-text</span><br/>No. of Students: %node-value',
        alpha: 1,
    },
    tooltip: {
        align: 'left',
        thousandsSeparator: ','
    },
    series: chartDataUG,
};
zingchart.render({
    id: 'sunburstChartUG',
    data: UGchartConfig,
    height: '100%',
    width: '100%',
});

// PhD //

ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"]; // DEFINE DATA
// -----------------------------
let chartDataPhD = [{
    id: 'Roles',
    text: ' ',
    parent: ''
}, {
    id: 'Researchers in Industry',
    text: 'Research in Industry',
    parent: 'Roles',
    value: 9
}, {
    id: 'Software Engineer',
    text: 'Software Engineer',
    parent: 'Roles',
    value: 3
}, {
    id: 'Applied Scietist',
    text: 'Applied Scietist',
    parent: 'Roles',
    value: 3
}, {
    id: 'Post Doctoral Research',
    text: 'Post Doctoral Research',
    parent: 'Roles',
    value: 8
}, {
    id: 'Professorship',
    text: 'Professorship',
    parent: 'Roles',
    value: 2
}];
let PhDchartConfig = {
    type: 'sunburst',
    backgroundColor: '#fff',
    options: {
        sizeFactor: 0.9,
        slice: 0,
        space: 0,
        root: 'Roles',
        // widths: [30, 115, 115],
        palette: ['#ffffff', '#fe3b1f', '#c4d600', '#ff9e1b', '#6ba539','yellow']
    },
    plot: {
        animation: {},
        valueBox: {
            text: '%data-vbtext',
            color: '#000',
            fontSize: '13px',
            fontWeight: 400,
            visible: null
        },
        tooltipText: '<span style=\'font-size:19px\'>%plot-text</span><br/>No. of Students: %node-value',
        alpha: 1,
    },
    tooltip: {
        align: 'left',
        thousandsSeparator: ','
    },
    series: chartDataPhD,
};
zingchart.render({
    id: 'sunburstChartPhD',
    data: PhDchartConfig,
    height: '100%',
    width: '100%',
});