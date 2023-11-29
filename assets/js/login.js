const correo = document.getElementById("email")
const password = document.getElementById("contrasena")
const button = document.getElementById("boton")
if (button) {
button.addEventListener('click', (event) => {
    event.preventDefault()
    const data = {
        correo: email.value,
        password: contrasena.value
     }   
    console.log(data);
    if (email == "Andres@gmail.com" && contrasena == '45527434'){
        localStorage.setItem("user", "true")
        window.location = '../views/products.html'
    }
}) 
}   
    


