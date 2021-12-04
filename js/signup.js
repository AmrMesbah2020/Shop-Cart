let sign = document.querySelector("#btn1");
let login = document.querySelector("#btn2");
sign.addEventListener("click", active)
login.addEventListener("click", active1)
/*************design form*************** */
function active() {
  document.getElementById("login").style.display = "none";
  document.getElementById("signup").style.display = "block";
  document.getElementById("btn2").style.opacity = "0.5"
  this.style.opacity = "1"
}

function active1() {
  document.getElementById("signup").style.display = "none";
  document.getElementById("login").style.display = "block";
  document.getElementById("btn1").style.opacity = "0.5"
  this.style.opacity = "1"
}

/*...........................................................validate form.......................................*/

/**************save in storage***************/
function saveinstorage() {
  var val = document.getElementById("inpName1").value;
  var val2 = document.getElementById("password").value;
  localStorage.setItem("fullName", val)
  localStorage.setItem("password", val2)
}
var el = document.getElementById("signup");
el.addEventListener("submit", formval)
var el2 = document.getElementById("login");
el2.addEventListener("submit", loginval)
/***************validiton login************************/
function loginval(e) {
  var namef = document.getElementById("inpName2").value;
  var password = document.getElementById("password1").value;
if (localStorage.getItem("fullName") !== namef || localStorage.getItem("password") !== password ) {
  document.getElementById("pname2").innerHTML = "<p style='color:#f4ca95'>* you not registar</p>";
  e.preventDefault();
} else {
  document.getElementById("pname2").innerHTML = "";
}

if (namef.length < 5) {
  document.getElementById("pname1").innerHTML = "<p style='color:#f4ca95'>* Name length must be atleast 5 characters</p>";
  e.preventDefault();
} else {
  document.getElementById("pname1").innerHTML = "";
}
var regE2 = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;;
if (!regE2.test(password)) {
  document.getElementById("pPassword1").innerHTML = "<p style='color:#f4ca95'>*Invalid password</p>";
  e.preventDefault();
} else {
  document.getElementById("pPassword1").innerHTML = "";
}
}
/***************validiton signup************************/
function formval(e) {
  var namef = document.getElementById("inpName1").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var phone = document.getElementById("phone").value;
  var check = document.getElementById("cb1").checked;
  var male = document.getElementById("rd1").checked;
  var female = document.getElementById("rd2").checked;
  if (namef.length < 5) {
    document.getElementById("pnamef").innerHTML = "<p style='color:#f4ca95'>* Name length must be atleast 5 characters</p>";
    e.preventDefault();
  } else {
    document.getElementById("pnamef").innerHTML = "";
  }
  var regE = /^[A-Za-z]{3,50}|[0-9](@)[A-Za-z]{4,50}(.com|.org|.edu|.net)$/;
  if (!regE.test(email)) {
    document.getElementById("pEmail").innerHTML = "<p style='color:#f4ca95'>*Invalid Email</p>";
    e.preventDefault();
  } else {
    document.getElementById("pEmail").innerHTML = "";
  }
  var regE2 = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;;
  if (!regE2.test(password)) {
    document.getElementById("pPassword").innerHTML = "<p style='color:#f4ca95'>*You should add a-zchar,specialchar,number and atleast6 char</p>";
    e.preventDefault();
  } else {
    document.getElementById("pPassword").innerHTML = "";
  }
  var reg3 = /^01[0125][0-9]{8}$/;
  if (!reg3.test(phone)) {
    document.getElementById("pphone").innerHTML = "<p style='color:#f4ca95'>*Invalid Phone you should add(012,015,010,011)in the first</p>";
    e.preventDefault();
  } else {
    document.getElementById("pphone").innerHTML = "";
  }
  if (male == true) {
    document.getElementById("pchacked").innerHTML = "";
    return true;
  } else if (female == true) {
    document.getElementById("pchacked").innerHTML = "";
    return true;
  } else {
    document.getElementById("pchacked").innerHTML = "<p style='color:#f4ca95'>*Is not selected</p>";
    e.preventDefault();

  }
  if (check == true) {
    document.getElementById("pchacked2").innerHTML = "";
    document.getElementById("btsignup").style.opacity="1";

    return true;

  } else {
    document.getElementById("pchacked2").innerHTML = "<p style='color:#f4ca95'>*you should agree with terms and conditions</p>";
    document.getElementById("btsignup").style.opacity="0.5";

    e.preventDefault();
  }
}

/************************************storge*************** */

