/*var Form=document.getElementsByClassName('form')[0]
var Input=document.getElementById('Input')
var Result=document.getElementsByClassName('Result')[0]
console.log(Form)
Form.addEventListener('submit',function(e)
{
e.preventDefault()
console.log(e)
var even=parseInt(Input.value);

})
 


 var even = 0;
do {
  console.log(even);
  even++;
} while ( even< 5)
////////////////////////////////////*/
for (var x=0; x<=5; x++) {
  if (x === 0) {
          console.log(x +  " is even");
  }
  else if (x % 2 === 0) {
          console.log(x + " is even");   
  }
  else {
          console.log(x + " is odd");
  }
}

for(i=1; i<=5; ++i) {
  switch (i) {

  case 1:
   console.log("sunday")
  break;
  case 2:
  console.log("monday")
  break;
  case 3:
  console.log("tuesday")
  break;
  case 4:
  console.log("wesdnay")
    break;
  case 5:
  console.log("thuersday")
  break;
}}