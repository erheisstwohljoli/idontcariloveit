import {BarChartRace} from "./BarChartRace.js";

/**
 * BAR CHART RACE
 */
const myChart = new BarChartRace("bar-chart-race");
//load kfz data
let kfzData =  null;
const dataSets = [];
d3.csv("/data/KFZHerstellaa.csv").then(function(data) {
    kfzData = data;
    let years = kfzData.columns[0].split(';');
    years.shift();

    //CRINGE
    let bmwValues = Object.values(kfzData[0])[0].split(';');
    bmwValues.shift();
    let benzValues = Object.values(kfzData[1])[0].split(';');
    benzValues.shift();
    let opelValues = Object.values(kfzData[2])[0].split(';');
    opelValues.shift();
    let porscheValues = Object.values(kfzData[3])[0].split(';');
    porscheValues.shift();
    let audiValues = Object.values(kfzData[4])[0].split(';');
    audiValues.shift();
    let vwValues = Object.values(kfzData[5])[0].split(';');
    vwValues.shift();
    let citroenValues = Object.values(kfzData[6])[0].split(';');
    citroenValues.shift();
    let peugeotValues = Object.values(kfzData[7])[0].split(';');
    peugeotValues.shift();
    let renaultValues = Object.values(kfzData[8])[0].split(';');
    renaultValues.shift();
    let fiatValues = Object.values(kfzData[9])[0].split(';');
    fiatValues.shift();
    let alfaValues = Object.values(kfzData[10])[0].split(';');
    alfaValues.shift();
    let hondaValues = Object.values(kfzData[11])[0].split(';');
    hondaValues.shift();
    let suzukiValues = Object.values(kfzData[12])[0].split(';');
    suzukiValues.shift();
    let toyotaValues = Object.values(kfzData[13])[0].split(';');
    toyotaValues.shift();
    let nissanValues = Object.values(kfzData[14])[0].split(';');
    nissanValues.shift();
    let mitsubishiValues = Object.values(kfzData[15])[0].split(';');
    mitsubishiValues.shift();
    let daihatsuValues = Object.values(kfzData[16])[0].split(';');
    daihatsuValues.shift();
    let mazdaValues = Object.values(kfzData[17])[0].split(';');
    mazdaValues.shift();
    let fordValues = Object.values(kfzData[18])[0].split(';');
    fordValues.shift();

    for(let i=0; i<25; i++){
        //console.log((Object.values(kfzData[i])[0]).split(';'))//string
        let dataSetTmp = [];

        //CRINGE teil 2
        dataSetTmp.push({
            name: "BMW",
            value: Number(bmwValues[i])
        });
        dataSetTmp.push({
            name: "Benz/Daimler",
            value: Number(benzValues[i])
        });
        dataSetTmp.push({
            name: "Opel",
            value: Number(opelValues[i])
        });
        dataSetTmp.push({
            name: "Porsche",
            value: Number(porscheValues[i])
        });
        dataSetTmp.push({
            name: "Audi",
            value: Number(audiValues[i])
        });
        dataSetTmp.push({
            name: "Volkswagen",
            value: Number(vwValues[i])
        });
        dataSetTmp.push({
            name: "Citroen",
            value: Number(citroenValues[i])
        });
        dataSetTmp.push({
            name: "Peugeot",
            value: Number(peugeotValues[i])
        });
        dataSetTmp.push({
            name: "Renault",
            value: Number(renaultValues[i])
        });
        dataSetTmp.push({
            name: "Fiat",
            value: Number(fiatValues[i])
        });
        dataSetTmp.push({
            name: "Alfa Romeo",
            value: Number(alfaValues[i])
        });
        dataSetTmp.push({
            name: "Honda",
            value: Number(hondaValues[i])
        });
        dataSetTmp.push({
            name: "Suzuki",
            value: Number(suzukiValues[i])
        });
        dataSetTmp.push({
            name: "Toyota",
            value: Number(toyotaValues[i])
        });
        dataSetTmp.push({
            name: "Nissan",
            value: Number(nissanValues[i])
        });
        dataSetTmp.push({
            name: "Mitsubishi",
            value: Number(mitsubishiValues[i])
        });
        dataSetTmp.push({
            name: "Daihatsu",
            value: Number(daihatsuValues[i])
        });
        dataSetTmp.push({
            name: "Mazda",
            value: Number(mazdaValues[i])
        });

        dataSets.push({
            date: Number(years[i]),
            dataSet: dataSetTmp
        })


    }
    console.log(dataSets)

    myChart
        .setTitle("Marken über die Zeit")
        .addDatasets(dataSets)
        .render();
});

d3.select("button").on("click", function() {
    if (this.innerHTML === "Stop") {
        this.innerHTML = "Resume";
        myChart.stop();
    } else if (this.innerHTML === "Resume") {
        this.innerHTML = "Stop";
        myChart.start();
    } else {
        this.innerHTML = "Stop";
        myChart.render();
    }
});









