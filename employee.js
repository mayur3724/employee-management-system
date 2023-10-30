
const form=document.getElementById("form");
const table=document.getElementById("table");

const employees=[];

function addEmployee(employee){
    for(let i=0;i<employees.length;i++){
        let e=employees[i];
        if(e.email===employee.email){
            alert("email already exist");
            return;
        }
        else if(e.empId===employee.empId){
            alert("empId already exist");
            return;
        }
    }


let tbody = document.createElement("tbody");
tbody.innerHTML = `<tr>
        <td>${employee.name}</td>
        <td>${employee.email}</td>
        <td>${employee.empId}</td>
        <td>${employee.company}</td>
        <td>${employee.designation}</td>
        <td><button class="col-btn" onclick="deleteEmployee(this)" data-empId=${employee.empId}>Delete</button></td>
    </tr>`;

table.appendChild(tbody);
employees.push(employee);
form.reset();
}

function deleteEmployee(buttonRef){
    let empId=buttonRef.getAttribute("data-empId");
    for(let i=0;i<employees.length;i++){
        if(employees[i]===empId){
            employees.splice(i,1);
            break;
        }
    }
    let parentTd=buttonRef.parentNode;
    let parentTr=parentTd.parentNode;
    parentTr.remove();
}

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    
    let employee={
        name:form.name.value,
        email:form.email.value,
        empId:form.empId.value,
        company:form.company.value,
        designation:form.designation.value
    };
    console.log(employee);
    addEmployee(employee);
});




