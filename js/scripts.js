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
