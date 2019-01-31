function postData(){
  var formData=document.getElementById('postForm');
  var ename=formData.en.value;
  var sname=formData.sn.value;
  console.log("Etunimi="+ename+" Sukunimi="+sname);
  document.getElementById('results').innerHTML="Etunimi="+ename+" Sukunimi="+sname;
}

function getData(){
  var formData=document.getElementById('getForm');
  var ename=formData.en.value;
  var sname=formData.sn.value;
  console.log("Etunimi="+ename+" Sukunimi="+sname);
  document.getElementById('results').innerHTML="Etunimi="+ename+" Sukunimi="+sname;
}
