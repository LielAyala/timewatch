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
        str+="<td>"+line.id+"</td>";
        str+="<td>"+line.name+"</td>";
        str+="<td>"+line.time_start+"</td>";
        str+="<td>"+line.time_end+"</td>";
        str+="<td>"+line.date+"</td>";
        str+="</tr>";
    }
    document.getElementById("mainEmployeesi").innerHTML=str;
}
async function getList() {
    let response = await fetch('/employees_time/List');
    let data = await response.json();
    console.log("data=",data);
    raw_data = data;
    CreateTable();

}
getList();