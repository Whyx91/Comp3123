console.log("Hello");
var prompt=require("prompt-sync")({sigint:true});



/*nodevar msg=prompt("input your name :"); 
console.log("Hi :",msg); */ 

/*var x=4+5;
console.log(x);
var a=5;
var b=6;

console.log(b-a);
console.log(a*b);
console.log(a/b);
console.log(Math.pow(a,b)); */
////////////////--------------------------
var m=prompt("Input your mark :");
m= parseInt(m);
switch(m)
{
    case 75:
        console.log("Very Good");
        break;
        case 50:
        console.log("pass");
        break;
      default:
        console.log("invalide");
        break;
        
    
    }

if(m>=0 && m<=100)
{
  if(m>75)
  {console,log("very good");}
  
  else if(m>=50)
 {console.log("Pass");}
else
{console.log("fail");}

} else
{console.log("invalid value");}