var Form=document.getElementsByClassName('form')[0]
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

