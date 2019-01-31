function showPopup(){
  console.log("painiketta painettu");
  alert("tämä on siis popup");
}
function showName(){
  var theName=document.getElementById('fname').value;
  console.log("Annoit nimen "+theName);
  document.getElementById('message').innerHTML += theName+ "<br>";
}
function showInfo(infoPage){
  console.log(infoPage);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    document.getElementById("info").innerHTML = this.responseText;
  }
};
  xhttp.open("GET", infoPage, true);
  xhttp.send();
}
