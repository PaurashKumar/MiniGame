var d2=document.getElementById("d2");
var d3=document.getElementById("d3");
var i=0;
function jump() {
  i++;
  if(d2.classList!="animate"){
       d2.classList.add("animate");
    }
  setTimeout(function(){
    d2.classList.remove("animate");
  },500);
}
var checkdead=setInterval(function(){
    var d2top=parseInt(window.getComputedStyle(d2).getPropertyValue("top"));
    var d3left=parseInt(window.getComputedStyle(d3).getPropertyValue("left"));
    if(d3left<20 && d3left >0 && d2top >=130 ){
      d3.style.animation="none";
      d3.style.display="none";

      alert("YOU ARE LOSE your score is:--->" +i);
    }
},10)
