 var h3=document.querySelector("h3");
 var col2=document.getElementById("color2");
 var col1=document.getElementById("color1");
 var body=document.querySelector("body");
 


color1.addEventListener("input",function(){
    body.style.background="linear-gradient(to right, " +col1.value+","+col2.value+")";
	console.log(col1.value);
});
color2.addEventListener("input",function(){
    body.style.background="linear-gradient(to right," +col1.value+","+col2.value+")";

	console.log(col2.value);
});