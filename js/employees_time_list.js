let raw_data=[];
let srchTerm="";
// filter Data
function FilterData(el){

    console.log("FilterData::",el);
    if(srchTerm==="")
        return true;
    let reg=new RegExp(srchTerm,"i");
    return reg.test(el.name);

}
// Create
function CreateTable(){

    srchTerm=document.getElementById("filterField").value;
    let data=raw_data.filter(FilterData);
    let str="";
    for(let line of data){
        str+="<tr>";
        str+=`<td> <input type="date" name="namei"  id="namei-${line.id}"  placeholder="name"/></td>`;
        str+=`<td><button onclick="editLine(${line.id});">edit</button></td>`;
        str+="<td>"+line.id+"</td>";
        str+="<td>"+line.name+"</td>";
        str+="<td>"+line.time_start+"</td>";
        str+="<td>"+line.time_end+"</td>";
        str+="<td>"+line.date+"</td>";
        str+=`<td><button onclick="deleteLine(${line.id});">delete</button></td>`;
        str+="</tr>";
    }
    document.getElementById("mainEmployeesi").innerHTML=str;

}
async function getList() {
    let response = await fetch('/employees_time/List');
    let data = await response.json();
    raw_data = data;
    CreateTable();
}
async function editLine(id) {
    let objToServer={};
    let name=document.getElementById(`namei-${id}`).value;
    objToServer.time_start=time_start;
    objToServer.time_end=time_end;
    objToServer.date=date;
    let response = await fetch('/employees_time/Edit', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objToServer)
        }
    );
    getList();
}
async function deleteLine(id) {
    let objToServer={};
    objToServer.id=id;
    let response = await fetch('/employees_time/Del', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objToServer)
        }
    );
    // let data = await response.json();
    // console.log(data);
    getList();
}
async function listE(){

    let response = await fetch('/employees_time/List');
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
getList();



async function loadEmployeeNames() {
    let selectElement = document.getElementById("select");

    try {
        // שלף את השמות מהשרת
        let response = await fetch('/employees/List');
        let data = await response.json();

        // צור את האפשרויות ב-<select> על פי השמות
        for (let employee of data) {
            let option = document.createElement("option");
            option.value = employee.name; // השם שיש להשתמש בו
            option.text = employee.name;  // השם שיצג באפשרויות
            selectElement.appendChild(option);
        }
    } catch (error) {
        console.error("Error loading employee names:", error);
    }
}

// קריאה לפונקציה לטעינת השמות כאשר הדף נטען
window.addEventListener("load", loadEmployeeNames);








