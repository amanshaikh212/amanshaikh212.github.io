function validate(){
    var fname=document.getElementById("first_name").value;
    var lname=document.getElementById("last_name").value;
    var contact=document.getElementById("contact_number").value;
    var email=document.getElementById("email_address").value;
    var street=document.getElementById("street_address").value;
    var city=document.getElementById("city").value;
    var state=document.getElementById("state").value;
    var postal=document.getElementById("postal_code").value;
    if(fname=="" || lname=="" || email=="" || street=="" || city=="" || state=="" || postal=="" || contact=="")
    {
      alert("All fields are required!");
      return false;
    }
    var regx=/^[A-Za-z]+$/;
    if(!regx.test(fname) || !regx.test(lname))
    {
            alert("Name field contains unwanted data!");
            return false;
    }
    




    document.getElementById("save").innerHTML="Your order is placed!";
    document.getElementById("save").style.backgroundColor="green";
    
    }