async function fetchData() {
    const res = await fetch("https://api.coronavirus.data.gov.uk/v1/data");
    const record = await res.json();
    var idx = Math.floor(Math.random() * 400)
    console.log("###############", record)
    document.getElementById("index").innerHTML ="ID: "+ idx;
    document.getElementById("date").innerHTML = record.status_code == 400 ? "fail" : record.data[idx].date;
    document.getElementById("areaName").innerHTML = record.status_code == 400 ? "fail" : record.data[idx].areaName;
    document.getElementById("latestBy").innerHTML = record.status_code == 400 ? "fail" : record.data[idx].latestBy;
    document.getElementById("deathNew").innerHTML = record.status_code == 400 ? "fail" : record.data[idx].deathNew;
}
fetchData();

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#myButton').addEventListener('click', fetchData);
});