
document.getElementById("btn").addEventListener("click" , validarformulario)

function validarformulario(e){
    const email= document.getElementById("email").value
    const contraseña= document.getElementById("contraseña").value
    const productos= document.getElementById("producto").value
    const cantidad= document.getElementById("cantidad").value
    const talla= document.getElementById("talla").value
    const nombre= document.getElementById("nombre").value
    const apellido= document.getElementById("apellido").value
    const direccion= document.getElementById("direccion").value
    const ciudad= document.getElementById("ciudad").value

    console.log(email,contraseña,productos,cantidad,talla,nombre,apellido,direccio,ciudad)
}
