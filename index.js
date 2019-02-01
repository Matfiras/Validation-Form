function validation()
{
    var pe=/^(?=.*\d)(?=.*[A-Z])(?!.*[^a-zA-Z0-9@#$^+=])(.{8,})$/
    var te=/^([A-Za-z0-9_\-\/.]){1,}\@([A-Za-z0-9_\-\/.]){1,}\.([A-Za-z]){2,4}$/
    var password=document.getElementById("password").value;
    var email=document.getElementById("email").value;
    var Name=document.getElementById("Name").value;
    var fname=document.getElementById("fname").value;
    var address=document.getElementById("address").value;
    var comments=document.getElementById("comments").value;
    var ERROR=[]
        if ((Name=="")||(fname=="")||(address=="")||(comments==""))
        {
         ERROR.push("Filling all the Blanks is required")
        }
        if ((email=="")&&(Name!="")&&(fname!="")&&(address!="")&&(comments!=""))
       {
         ERROR.push("E-mail address is empty")
        }
         if ((te.test(email)==false)&&(email!=""))
        {
         ERROR.push("This is not a Valid E-mail address")   
        }
         if ((password=="")&&(Name!="")&&(fname!="")&&(address!="")&&(comments!=""))
        {
         ERROR.push("Password is empty")
        }
        if (pe.test(password)==false&&(password!="")&&(Name!="")&&(fname!="")&&(address!="")&&(comments!=""))
        {
         ERROR.push("Password is not valid")
         }
        if (ERROR.length>0)
        {
           
           for (var i=0;i<ERROR.length;i++)
           {
               alert(ERROR[i])
               
           }
           return false
        }
}