var express=require('express');
var app=express();

app.get("/",(req,res)=>{
    res.send(
        "<h1>Vijay Sales </h1>"
        +"<hr/>"
        +"<h3>Smart devices for sale</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>Laptop</li>"
        +"<li>Mobile</li>"
        +"<li>Tablet</li>"
        +"</ol>"
        );
});

app.get("/login",(req,res)=>{
    res.send(
        "<h1>Vijay Sales </h1>"
        +"<hr/>"
        +"<form>"
        +"<input/>"
        +"<br/>"
        +"<button><>Login</button>"
        +"</form>"
        );
});

app.get("/aboutus",(req,res)=>{
    res.send(
        "<h1>Vijay Sales </h1>"
        +"<hr/>"
        +"<h3>it is information about us</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>tambde sir</li>"
        +"<li>Pranit khamkar</li>"
        +"<li>Yash Korane</li>"
        +"</ol>"
        );
});

var server = app.listen(9000);
console.log("Server is running on port 9000");
