let raw_data=[];
let srchTerm="";
//סינון ערכים
function FilterData(el){
    if(srchTerm==="")
        return true;
    let reg=new RegExp(srchTerm,"i");
    return reg.test(el.name);
}
setInterval(() => {
    let shaon = new Date();
    document.getElementById("shaon").innerHTML = shaon.toLocaleTimeString();
}, 1000);
async function addstart() {

    let selectedOption = document.getElementById("select");
    let selectedName = selectedOption.options[selectedOption.selectedIndex].text;

    let response = await fetch('/employees_time/Adds', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: selectedName }) // Send the selected name
    });

    let data = await response.json();
    getList();

}
async function addend() {
    let selectedOption = document.getElementById("select");
    let selectedName = selectedOption.options[selectedOption.selectedIndex].text;

    let response = await fetch('/employees_time/Adde', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: selectedName })
    });

    let data = await response.json();
    getList();
}
//רשימה נגללת
async function listE(){

    let response = await fetch('/employees/List');
    let data = await response.json();
    let selectElement = document.getElementById("select");

    for (let row of data) {
        let option = document.createElement("option");
        option.value = row.id;
        option.text = row.name;
        selectElement.appendChild(option);
    }
}
listE();


