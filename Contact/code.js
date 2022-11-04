function sendEmail(){
    Email.send({
       SecureToken: "236d6a8c-a2cb-4caa-9cac-b213e0ad2a6d",
    /*Host : "smtp.gmail.com",
    Username : "svmldg@gmail.com"
    ,
    Password : "5AD85A1977AE3F3E9B35321D18983938919D",*/
    To : 'svmldg@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Conatct From My Portfolio",
    Body : "Name: "+document.getElementById("name").value+"<br>Email: "+document.getElementById("email").value+ "<br> Message: "+document.getElementById("message").value
}).then(
message => alert("❌ Still under construction, sorry ❌")
);
}