const adduserbtn = document.getElementById('adduser');
const btntext = adduserbtn.innerHTML;
const usernametextfild = document.getElementById('username');
const recordsdisplay =document.getElementById('records');
let userarray = [];
let edit_id = null ;
//savedata local-storage mathi data recive kare se  
let objstr = localStorage.getItem('users');
// console.log(objstr);
userarray = JSON.parse(objstr);

displayinfo();
adduserbtn.onclick = () => {
    const name = usernametextfild.value.trim();
     if (name === '') {
        alert('Please enter username.'); // this validation message
        return;
    }
    if(edit_id != null)
    {
        userarray.splice(edit_id,1,{ 'name': name })
        edit_id = null;
    }
    else 
    {
       
        userarray.push({ 'name': name });
         //insert
    }
   
    // console.log(userarray);
    saveinfo(userarray);
    usernametextfild.value ='';
    // displayinfo();
    adduserbtn.innerHTML=btntext;
}

function saveinfo(userarray) {
    let str = JSON.stringify(userarray);
    localStorage.setItem('users', str);
    displayinfo();
}

function displayinfo() {
      
    let statement = '';
    userarray.forEach(( user,i )=> {
        statement +=`  <tr>
        <th scope="row">${i}</th>
        <td>${user.name}</td>
        <td><i class='btn text-white btn-info fa fa-edit' onclick='editInfo(${i})' ></i>  <i class="btn btn-danger text-white fa fa-trash-o" onclick='deleteinfo(${i})' ></i></td>                
    </tr>`;
    });
    recordsdisplay.innerHTML=statement;
}

function editInfo(id) { 
    edit_id=id;
    usernametextfild.value =userarray[id].name;
    adduserbtn.innerText= 'save change'

}

function deleteinfo(id) {
    userarray.splice(id,1);
    saveinfo(userarray);
    // displayinfo();
  
}
