const $submit = document.getElementById("submit"),
$password = document.getElementById("password"),
$username = document.getElementById("usrnamee"),
$visible = document.getElementById("visible");


/*document.getElementById("submit").addEventListener("click",function() ){*/
/*const $passwords = document.getElementById("password").value;
const $usernames = document.getElementById("usrnamee").value;*/

document.addEventListener("change", (e)=>{
    if(e.target === $visible){
        if($visible.checked === false) $password.type = "password";
        else $password.type = "text";
    }
})

document.addEventListener("DOMContentLoaded", function()
{
    const boton = document.getElementById("entrar");

    boton.addEventListener("click", function(event)
    {
        event.preventDefault();

        const usuario = document.getElementById("username").value;
        const contraseña = document.getElementById("password").value;
        if(usuario && contraseña)
        {
            window.location.href = "index.html";
        }
        
    });

});

var navVisible = false;

function togglenav(){
    var menu = document.getElementById("navmenu");
    navVisible = !navVisible;
    menu.style.display = navVisible ? "block" : "none";
}

/*if(usernames === "" || passwords === "")
{
    alert("Completa Los Campos");
    return;
}

const formData = new FormData();
formData.append("usernames", username);
formData.append("passwords", password);

fetch("login.php", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form.urlencoded"
    }
})
.then(response =>response.json())
.then(data => {
    if(data.success){
        alert("inicio de sesion extoso");
        } else{
            alert("error")
        }
    
})*/




