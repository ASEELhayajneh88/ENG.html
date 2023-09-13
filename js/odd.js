/*var myForm=document.getElementsByClassName('input')[0]
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


    //loop
    //for (conut;cond;increment)

    for(var i=0; i<10; i++){
    console.log(i)
    }
*/

  //while loop
  //whlie(cond){
    //code
 // }
   /* var x=20
    var z=0
    y=true 
    while(y){
        if(x==z){
            y=false
           //break}
        }
        
            console.log(x)
            x++
        }*/
        
     
        
     var primeForm=document.getElementsByClassName('primeform')[0]
    var primeInput=document.getElementById('primeInput')
    var primeResult=document.getElementsByClassName('primeResult')[0]
    console.log(primeForm)
    primeForm.addEventListener('submit',function(e)
{
    e.preventDefault()
    console.log(e)
    var prime0not=parseInt(primeInput.value);
    for(var i=2; i<prime0not; i++){
    console.log(typeof(prime0not))
    if (prime0not %i ==0) {
        
       primeResult.innerHTML="not prime" 

       break;
    
    }
   else{
    primeResult.innerHTML="prime"
   }

    }
})