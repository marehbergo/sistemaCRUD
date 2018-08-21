//var clients=[];

var clients = [
  {name: 'Maria Emilia Bergo', cpf: '01235692845', email: 'mariaemilia.bergo@gmail.com', phones: '31995654785', status: 'Ativo'},
  {name: 'Álvaro Luiz Conde', cpf: '25368495812', email: 'alconde@gmail.com', phones: '31995654785', status: 'Inativo'},
  {name: 'Carla Abud', cpf: '45896311125', email: 'carlaa@gmail.com', phones: '31995654785', status: 'Ativo'}
];

var myIndex;

function addClient(){
    /*var phones = document.getElementById("client-phone[]");
    var phone="";
    for(i=1;i<phones.length;i++) {
        phone=phone.concat(phones[i])
    }*/
    
    var option = document.getElementsByName("client_status");
    for (var i = 0; i < option.length; i++){
        if (option[i].checked) {
          var checked = option[i].value
        }
    }
    
    var newClient={
        name:document.getElementById("client_name").value,
        cpf:document.getElementById("client_cpf").value,
        email:document.getElementById("client_email").value,
        phones:document.getElementById("client_phone").value,
        status:checked
    }
    clients.push(newClient)
    displayClients()
}

function displayClients(){
    document.getElementById("form-list-client-body").innerHTML=""
    for (i=0;i<clients.length;i++){
        var myTr=document.createElement("tr")
        
        for(a in clients[i]){
            var mytd=document.createElement("td")
            mytd.innerHTML=clients[i][a]
            myTr.appendChild(mytd)
        }
        var actionTd=document.createElement("td")
        var editBtn=document.createElement("button")
        editBtn.innerHTML="Edit"
        editBtn.setAttribute("class" , "button small icon fa-pencil edit")
        editBtn.setAttribute("onclick" , "editClient("+i+")")
        
        var deletebtn=document.createElement("button")
        deletebtn.innerHTML="Delete"
        deletebtn.setAttribute("class" , "button small icon fa-close delete")
        deletebtn.setAttribute("onclick" , "deleteClient("+i+")")
        
        actionTd.appendChild(editBtn)
        actionTd.appendChild(deletebtn)
        myTr.appendChild(actionTd)
        document.getElementById("form-list-client-body").appendChild(myTr)
    }
    //document.getElementById("client-name").value=""
    //document.getElementById("client-email").value=""
    //document.getElementById("client-phone").value=""
    //document.getElementById("client-status").value=""
}

//Editing Client
function editClient(i){
    console.log(clients[i])
    myIndex=i;
    var updatebtn=document.createElement("button")
    updatebtn.innerHTML="Update";
    updatebtn.setAttribute("class", "button small save")
    updatebtn.setAttribute("onclick","updClient()")
    document.getElementById("saveupdate").innerHTML=""
    document.getElementById("saveupdate").appendChild(updatebtn);
    document.getElementById("client_name").value=clients[i].name
    document.getElementById("client_cpf").value=clients[i].cpf
    document.getElementById("client_email").value=clients[i].email
    document.getElementById("client_phone").value=clients[i].phones
    document.getElementsByName("client_status").value=clients[i].status
}

//Updating Client
function updClient(){
    
    var option = document.getElementsByName("client_status");
    for (var i = 0; i < option.length; i++){
        if (option[i].checked) {
          var checked = option[i].value
        }
    }
    
    var updatedClient={
        name:document.getElementById("client_name").value,
        cpf:document.getElementById("client_cpf").value,
        email:document.getElementById("client_email").value,
        phones:document.getElementById("client_phone").value,
        status:checked
    }
    
    clients[myIndex]=updatedClient;
    var crbtn=document.createElement("button")
    crbtn.innerHTML="Salvar";
    crbtn.setAttribute("onclick","addClient()")
    crbtn.setAttribute("class","button small")
    document.getElementById("saveupdate").innerHTML=""
    document.getElementById("saveupdate").appendChild(crbtn);
    
    displayClients()
}

//deleting client
function deleteClient(i){
    clients.splice(i,1)
    displayClients()
}