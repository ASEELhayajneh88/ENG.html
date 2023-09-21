var a=document.getElementById("item");  
    
    function fun(b)  
    {  
        if(b==="left")  
        {  
              
            a.style.left=(a.style.left)-10+"px";  
        }  
        if(b==="right")  
        {  
                a.style.left=(a.style.left)+10+"px";  
        }  
        if(b==="up")  
        {  
                a.style.top=(a.style.top)-10+"px";  
        }  
        if(b==="down")  
        {  
                a.style.top=(a.style.top)+10+"px";  
        }  
       
            }  
          
    