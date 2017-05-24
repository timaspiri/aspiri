function ShowProjects(element) {
  var displayType = document.getElementById(element).style.display;
  if (displayType == "block") {
    document.getElementById(element).style.display = "none";
    document.getElementById(element).style.height = "0px";
    document.getElementById(element).style.color = "transparent";
    document.getElementById('boody').style.overflowY = "visible"; 
  }
  else {
    document.getElementById(element).style.display = "block";
    document.getElementById(element).style.height = "250px";
    document.getElementById(element).style.color = "#fff";
    document.getElementById('boody').style.overflowY ="hidden";
  }
}
/*
function SubmitForm(){
  document.getElementById("loader").style.display = 'block';
  var fullname = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var website = document.getElementById("website").value;
  var wdd = document.getElementById("wdd").value;  
  var social = document.getElementById("social").value;
  var marketing = document.getElementById("marketing").value;
}
*/

