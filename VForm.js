const UserName=document.getElementById('username');
const Email=document.getElementById('emailaddress');
const password=document.getElementById('password');
const errormessage=document.getElementsByClassName('message');
const sucess=document.getElementById('sucess');
const tbody=document.getElementById("content");
const button=document.querySelector("#submit");
const save=document.getElementById("save");
const viewdata=document.getElementById('viewdata');
const adminpassword=document.getElementById('Adminpassword')
const datas=[];
button.addEventListener("click",()=>{
  let errorflag=false;
  if(UserName.value<1)
  {
    errormessage[0].innerText="Name can't be blank";
    errorflag=true;
   document.getElementById("username").style.border="2px solid #E4B7E5"
  }
  else{
    errormessage[0].innerText=""
  }
  if(Email.value<1){
    errormessage[1].innerText="Email can't be blank";
    errorflag=true;
    document.getElementById("emailaddress").style.border="2px solid #E4B7E5";
}
  else if(!emailIsValid(Email.value))
  {
    errormessage[1].innerText="Invaild Email";
    errorflag=true;
    document.getElementById("emailaddress").style.border="2px solid #E4B7E5";
  }
  else
  {
    errormessage[1].innerText=""
  }
  // if(password.value<1)
  if(password.value<1){
    errormessage[2].innerText="password can't be blank";
    errorflag=true;
    document.getElementById("password").style.border="2px solid #E4B7E5";
    document.getElementById("rules").style.visibility="visible";
}
  else if(!passwordIsValid(password.value))
  {
    errormessage[2].innerText="Invaild password";
    errorflag=true;
    document.getElementById("rules").style.visibility="visible";
    document.getElementById("password").style.border="2px solid #E4B7E5";
  }
  else{
    errormessage[2].innerText=""
  }
  if(!errorflag){
    sucess.innerHTML="FORM VALIDATION SUCESSFULL";
    document.getElementById("sucess").style.color="white";
    document.getElementById("username").style.border="2px solid green";
    document.getElementById("emailaddress").style.border="2px solid green";
    document.getElementById("password").style.border="2px solid green";
    document.getElementById("rules").style.visibility="hidden";
  }

function emailIsValid(Email)
 {
    let pattern=/\S+@\S+\.\S+/;
    return pattern.test(Email);
}
function passwordIsValid(password) 
{
  let passwordpattern=/[0-9]+[a-z]+[A-Z]/g;
  return passwordpattern.test(password);
}
})

save.addEventListener("click",()=>{
   if(UserName.value==""&&Email.value==""&&password.value=="")
   {
    alert("cant be blank");
    return
   }
   else{
    const userdata={
      userN:UserName.value,
      userE:Email.value,
      userP:password.value
    }
  datas.push(userdata);
  Displaydata();
  sucess.innerHTML="SAVED SUCESSFULLY";}
})
viewdata.addEventListener("click",()=>{
 
  document.querySelector("#Adminpassword").style.visibility="visible";
  if(adminpassword.value=="ADMIN")
  {
    document.querySelector("table").style.visibility="visible";
  }

})
function clearadmindata(){
  document.querySelector("table").style.visibility="hidden";
  adminpassword.value="";
}
clearadmindata();


function Displaydata() {
  tbody.innerHTML="";
  datas.forEach((cl)=>
  {
    const tr=document.createElement("tr");
    const namedata=document.createElement('td');
    const Emaildata=document.createElement('td');
    const passworddata=document.createElement('td');
    namedata.innerText=cl.userN;
    Emaildata.innerText=cl.userE;
    passworddata.innerText=cl.userP;

    tr.append(namedata);
    tr.append(Emaildata);
    tr.append(passworddata);
    tbody.append(tr);
  })
}
function clear() 
{
    for(let i=0;i<errormessage.length;i++)
    {
        errormessage[i].innerText="";
        
    }
}
function remove() {
    UserName.value="";
    Email.value="";
    password.value="";
    sucess.innerText="";
    errormessage[0].innerText="";
    errormessage[1].innerText="";
    errormessage[2].innerText="";
    document.getElementById("username").style.border="";
    document.getElementById("emailaddress").style.border="";
    document.getElementById("password").style.border="";
    document.getElementById("rules").style.visibility="hidden";
}
remove();