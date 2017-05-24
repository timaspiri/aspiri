function showAd() {
  var screen = document.documentElement.clientWidth;
  if (screen > 960) {
  document.getElementById("bottomnav").style.display = "block";
  document.getElementById("bottomnav").style.transition = "2s";
  document.getElementById("bottomnav").style.height = "55px";
  }
}
