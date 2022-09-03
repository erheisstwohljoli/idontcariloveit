$(document).ready(function(){
    var options = {
        // legend: false,
        responsive: false
    };
    new Chart($("#canvas1"), {
        type: 'doughnut',
        tooltipFillColor: "rgba(51, 51, 51, 0.55)",
        data: {
            labels: [
                "Fahrrad",
                "Pkw",
                "ÖPNV",
                "zu Fuß"
            ],
            datasets: [{
                data: [47, 29, 27, 15,],
                backgroundColor: [
                    "#393939",
                    "#7b7b7b",
                    "#aeaeae",
                    "#e4e4e4"
                ],
                hoverBackgroundColor: [
                    "#0c0c0c",
                    "#0c0c0c",
                    "#0c0c0c",
                    "#0c0c0c"
                ]
            }]
        },
        options: { responsive: false }
    });
});
