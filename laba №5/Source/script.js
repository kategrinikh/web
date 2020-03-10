 alert("vvedite chyslo");
 let num = prompt(HTMLTitleElement);  
 let rem = 0; 
 let sum = 0;         
 let n;
 //Make a copy of num and store it in variable n
        n = num;  
          
        //Calculates sum of digits
        while(num > 0){  
            rem = num%10;  
            sum = sum + rem;  
            num = (num-rem)/10;  
        }
          
        //Checks whether number is divisible by sum of digits
        if(n%sum == 0) { 
            console.log(n + " is a harshad number");  }
        else  {
            console.log(n + " is not a harshad number");
        }