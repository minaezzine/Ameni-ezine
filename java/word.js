
function bold(){
var a = document.querySelector("p");
if(a.style.fontWeight != "bold"){
    a.style.fontWeight="bold";   
}else{
    a.style.fontWeight="normal";
}}
   

function italic(){
var a = document.querySelector("p");
if(a.style.fontStyle != "italic"){
    a.style.fontStyle="italic";    
}else{
    a.style.fontStyle="normal";
}}



function underline(){
var a = document.querySelector("p");
if(a.style.textDecoration != "underline"){
    a.style.textDecoration="underline";    
}else{
    a.style.textDecoration="none";
}}

function font(){
	var a=document.querySelector("p");
	a.style.fontFamily=document.getElementById("f").value;                                                                                          
} 



function sizef(){
	var a=document.querySelector("p");
		a.style.fontSize=document.getElementById("s").value; 
} 

