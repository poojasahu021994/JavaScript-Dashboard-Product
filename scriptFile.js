let signupBtn = document.getElementById("signup-btn");
let signinBtn = document.getElementById("signin-btn");
let mainContainer = document.querySelector(".container");

signupBtn.addEventListener("click", () => {
  mainContainer.classList.toggle("change");
});
signinBtn.addEventListener("click", () => {
  mainContainer.classList.toggle("change");
});

// form border remove
function removeformborder(s){
  let remove = document.querySelector(`#${s}`);
  remove.style.outline = "none";
}
//form border remove border

// form velidation end
let converdata;
function registration(){
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;
  let cpassword = document.querySelector('#cpassword').value;
  console.log(name,email,password,cpassword);
if(name === ""){
  document.querySelector('#errorname1').innerHTML ="please enter your name";
   let selectname = document.querySelector('#name');
   selectname.style.borderColor = "red"
   selectname.style.outlineColor ="red"
   return false;
}
else if(email== ""){
  document.querySelector('#errorname2').innerHTML ="please enter your email";
   let selectemail = document.querySelector('#email');
   selectemail.style.borderColor = "red"
   selectemail.style.outlineColor ="red"
   return false;
}
else if(password== ""){
  document.querySelector('#errorname3').innerHTML ="please enter your password";
   let selectpassword = document.querySelector('#password');
   selectpassword.style.borderColor = "red"
   selectpassword.style.outlineColor ="red"
   selectpassword.style.color ="red"
   return false;
}
else if
(!(password.match(/[1234567890]/)
&& 
password.match(/[!@#$%^&*_()-]/) 
&& 
password.match(/[qwertyuiopasdfghjklzxcvbnm]/) 
&& 
password.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/))){
  document.querySelector('#errorname3').innerHTML = "password contains atleast 1 lower, upper,special and number";
  let selectage = document.querySelector('#password');
  selectage.style.borderColor = "red"
  selectage.style.outlineColor = "red"
  return false;
}

else if(cpassword== ""){
  document.querySelector('#errorname4').innerHTML ="please enter your confirm password";
   let selectcpassword = document.querySelector('#cpassword');
   selectcpassword.style.borderColor = "red"
   selectcpassword.style.outlineColor ="red"
   return false;
}

else if
(!(cpassword.match(/[1234567890]/)
&& 
cpassword.match(/[!@#$%^&*_()-]/) 
&& 
cpassword.match(/[qwertyuiopasdfghjklzxcvbnm]/) 
&& 
cpassword.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/)))
{
  document.querySelector('#errorname4').innerHTML = "Password contains atleast 1 Lower, Upper,special and number";
  let selectage = document.querySelector('#cpassword');
  selectage.style.borderColor = "red"
  selectage.style.borderColor = "red"
  return false;
}
else if(!(password.length > 5 && password.length < 16))
  {
    document.querySelector('#errorname4').innerHTML = "Password is 6-20 Charecter";
    let selectage = document.querySelector('#password');
    selectage.style.borderColor = "red"
    selectage.style.borderColor = "red"
      return false;
  }

  else if(password !== cpassword)
  {
      document.querySelector('#errorname4').innerHTML = "Password and Confirm password not match";
      document.querySelector('#cpassword').value ="";
      document.querySelector('#password').value ="";
      document.querySelector('#password').focus();
      return false;
  }
   
  //local storage section start

  let name1 = document.querySelector('#name').value;
  let email1 = document.querySelector('#email').value;
  let password1 = document.querySelector('#password').value;
  let cpassword1 = document.querySelector('#cpassword').value;

  let data = {
      name : name1,
      email : email1,
      password : password1,
      cpassword: cpassword1
  }

  let converdata = localStorage.setItem("userdata",JSON.stringify(data))

  //============ local storage section end
}

  //==============form validation end


// login page function get item
function localStorg(){
  let finaldata = JSON.parse(localStorage.getItem("userdata"));

  let validemail = finaldata.email;
  let validpassword = finaldata.cpassword;

  let email2 = document.querySelector('#email2').value;
  let cpassword2 = document.querySelector('#cpassword2').value;

  if(email2 != validemail)
  {
      let error = document.querySelector('#erroremail')
      error.innerHTML = "Sorry, we could not find your account";
      return false;
  }
  else if(cpassword2 != validpassword)
  {
      let error = document.querySelector('#errorcpassword')
      error.innerHTML = "Sorry Incorrect Password"
      return false;
  }
}
// login page function get item end


//onblur function login page
function remove(arg)
{
  let selecterror = document.querySelector(`#${arg}`);
  selecterror.innerHTML = ""
}

