
//document.getElementById("btn").addEventListener("click" , validarformulario)

//function validarformulario(e){
   // const email= document.getElementById("email").value
    //const contraseña= document.getElementById("contraseña").value
    //const productos= document.getElementById("flexCheckDefault").checked
    //const cantidad= document.getElementById("cantidad").value
    //const talla= document.getElementById("talla").value
    //const nombre= document.getElementById("nombre").value
    //const apellido= document.getElementById("apellido").value
    //const direccion= document.getElementById("direccion").value
    //const ciudad= document.getElementById("ciudad").value

    //console.log(email,contraseña,productos,cantidad,talla,nombre,apellido,direccion,ciudad)
//}


var registrar = ()=>{
    let eemail = document.getElementById("email");
    let econtraseña = document.getElementById("contraseña");
    let eproductos = document.getElementById("flexCheckDefault");
    let ecantidad = document.getElementById("cantida");
    let etalla = document.getElementById("talla");
    let enombre = document.getElementById("nombre");
    let eapellido = document.getElementById("apellido");
    let edireccion = document.getElementById("direccion");
    let eciudad = document.getElementById("ciudad");
    let email = eemail.value;
    let contraseña = econtraseña.value;
    let productos = eproductos.value;
    let cantidad = ecantidad.value;
    let talla = etalla.value;
    let nombre = enombre.value;
    let apellido = eapellido.value;
    let direccion = edireccion.value;
    let ciudad = eciudad.value;
    console.log(email)
    console.log(contraseña)
    console.log(productos)
    console.log(cantidad)
    console.log(talla)
    console.log(nombre)
    console.log(apellido)
    console.log(direccion)
    console.log(ciudad)
    let persona ={"email":email,"contraseña":coontraseña,"productos":productos,"cantidad":cantidad,"talla":talla,"nombre":nombre,"apellido":apellido,"direccion":direccion,"ciudad":ciudad}
    let listadopersonas=localStorage.getItem("personas");
    let listadoantiguo= JSON.parse(listadopersonas);
    if(listadoantiguo==null){
        listadonuevo =[persona]
    }else{
        listadoantiguo.push(persona)
        listadonuevo =[...listadoantiguo]
    }
    console.log(persona)
    console.log(listadoantiguo)
    console.log(listadonuevo)
    localStorage.setItem("personas",JSON.stringify(listadonuevo));
}

    document.getElementById("btn").addEventListener("click" , registrar)