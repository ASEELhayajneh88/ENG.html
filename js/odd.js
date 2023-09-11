var myForm=document.getElementsByClassName('input')[0]
var myInput1=document.getElementById('num')

myForm.addEventListener('input',function(e)
{
    e.preventDefault()
    console.log(e)

    var num;
    num= document.getElementById("num").value;
    if (num%2==0 ) {
        text = "even";

      } else {
        text = "odd" ;
      }
      document.getElementById("input").innerHTML = text;
    })