let table8=document.createElement("table");
let tbody8=document.createElement("tbody");
let thead0=document.createElement("thead");
table8.appendChild(thead0);
table8.appendChild(tbody8);
console.log(document.body.children);
let row1 =document.createElement("tr");
let column1=document.createElement("th");
let column2=document.createElement("th");
let column3=document.createElement("th");
column1.innerHTML="Name";
column2.innerHTML="age";
column3.innerHTML="major";

thead0.appendChild(row1)
row1.appendChild(column1);
row1.appendChild(column2);
row1.appendChild(column3);
let row2 =document.createElement("tr");
let column8=document.createElement("td");
let column0=document.createElement("td");
let column9=document.createElement("td");
column8.innerHTML="mostafa";
column0.innerHTML="22";
column9.innerHTML="computer science";
tbody8.appendChild(row2)
row2.appendChild(column8);
row2.appendChild(column0);
row2.appendChild(column9);
let row3 =document.createElement("tr");
let column4=document.createElement("td");
let column5=document.createElement("td");
let column6=document.createElement("td");
column4.innerHTML="Ali";
column5.innerHTML="25";
column6.innerHTML="Ai";
tbody8.appendChild(row3)
row3.appendChild(column4);
row3.appendChild(column5);
row3.appendChild(column6);
table8.style.border="1px solid black"
column0.style.border="1px solid black"
column1.style.border="1px solid black"
column2.style.border="1px solid black"
column3.style.border="1px solid black"
column4.style.border="1px solid black"
column5.style.border="1px solid black"
column6.style.border="1px solid black"
column8.style.border="1px solid black"
column9.style.border="1px solid black"
document.body.appendChild(table8);

