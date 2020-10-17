function alert_test1()
    {
     var name=document.myForm.Name.value ;
     var email=document.myForm.Email.value ;
      
     
       
             if((email.length<1) && (name== ""))
     {
                  alert ("Email address and name is required.");
                   
      }
             
}