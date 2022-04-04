let div = $('<div></div>');
let body = $('body');

body.append(div)

div.text('Hello World');

div.on('click', function(){
    alert('Hello world');
});

//////////////////////////////////////////////////////////////////////////

////// chart 1 ////////////
let div2 = $('<div></div>');
body.append(div2);
let myChartCanvas = $('<canvas></canvas>');
div2.append(myChartCanvas);

const labels = [
'January',
'February',
'March',
'April',
'May',
'June',
];

const data = {
labels: labels,
datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
}]
};

const config = {
type: 'line',
data: data,
options: {}
};

const myChart = new Chart(
    myChartCanvas,
    config
);
///////////////////////////////////////////////////////////////////////
////////////// chart two //////////////////////////
let div3 = $('<div></di>');
body.append(div3);
let bikeCanvas = $('<canvas></canvas>');
div3.append(bikeCanvas);

const Bike_Data_Count = 5;
const Bike_Number_CFG = {count: Bike_Data_Count, min: 0, max: 10};


const bikeLabels = [
    'Cockpit',
    'Drivetrain',
    'Frame',
    'Tires',
    'Wheels'
];

const bikeData = {
    labels: bikeLabels,
    datasets: [{
        backgroundColor: 'rgba(0, 177, 64, 0.5)',
        data: [9, 8, 7, 9, 9]
    }]
};

const bikeConfig = {
    type: 'polarArea',
    data: bikeData,
    options: {
        responsive: true,
        scales: {
            r: {
                pointLabels: {
                    display: true,
                    centerPointLabels: true,
                    font: {
                        size: 18
                    }
                },
                suggestedMin: 0,
                suggestedMax: 10
            }
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: `This Bike's rating is 8.4 - Very Good`
            }
        }
    }
};

const bikeChart = new Chart(
    bikeCanvas,
    bikeConfig
)
