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

function updateClock() {
    const clockElement = document.getElementById("clock");
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const timeString = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    clockElement.textContent = timeString;
}

function padZero(number) {
    return (number < 10) ? "0" + number : number;
}

// עדכון השעון באופן רציף בקצב שנייה
setInterval(updateClock, 1000);

// קריאה ראשונית לפונקציה להצגת הזמן הנוכחי
updateClock();



// Create
function CreateTable(){
    srchTerm=document.getElementById("filterField").value;
    let data=raw_data.filter(FilterData);
    let str="";
    for(let line of data){
        str+="<tr>";
        str+=`<td> <input type="text" name="namei"  id="namei-${line.id}"  placeholder="name"/></td>`;
        str+=`<td><button onclick="editLine(${line.id});">edit</button></td>`;
        str+="<td>"+line.id+"</td>";
        str+="<td>"+line.name+"</td>";
        str+="<td>"+line.time_start+"</td>";
        str+="<td>"+line.time_end+"</td>";
        str+="<td>"+line.date+"</td>";
        str+=`<td><button onclick="deleteLine(${line.id});">delete</button></td>`;
        str+="</tr>";
    }
    document.getElementById("mainEmployees").innerHTML=str;
}
async function getList() {
    let response = await fetch('/employees_time/List');
    let data = await response.json();
    console.log("data=",data);
    raw_data = data;
    CreateTable();
}
getList();

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
// Add
// async function addNewLine() {
//     let id=document.getElementById("id").value;
//     let time_start=document.getElementById("time_start").value;
//     let response = await fetch('/employees_time/Add', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({name:name})
//         }
//     );
//     let data = await response.json();
//     console.log(data);
//     getList();
// }
