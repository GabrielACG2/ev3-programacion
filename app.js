
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
    let econtenedorTabla= document.getElementById("contenedorTabla")
    let eemail = document.getElementById("email");
    let econtrasena = document.getElementById("contrasena");
    let eproductos = document.getElementById("flexCheckDefault");
    let ecantidad = document.getElementById("cantidad");
    let etalla = document.getElementById("talla");
    let enombre = document.getElementById("nombre");
    let eapellido = document.getElementById("apellido");
    let edireccion = document.getElementById("direccion");
    let eciudad = document.getElementById("ciudad");
    let email = eemail.value;
    let contrasena = econtrasena.value;
    let productos = eproductos.value;
    let cantidad = ecantidad.value;
    let talla = etalla.value;
    let nombre = enombre.value;
    let apellido = eapellido.value;
    let direccion = edireccion.value;
    let ciudad = eciudad.value;
    console.log(email)
    console.log(contrasena)
    console.log(productos)
    console.log(cantidad)
    console.log(talla)
    console.log(nombre)
    console.log(apellido)
    console.log(direccion)
    console.log(ciudad)
    let persona ={"email":email,"contraseña":contrasena,"productos":productos,"cantidad":cantidad,"talla":talla,"nombre":nombre,"apellido":apellido,"direccion":direccion,"ciudad":ciudad}
    let listado=localStorage.getItem("personas");
    let listadoantiguo= JSON.parse(listado);
    if(listadoantiguo==null){
        listadonuevo =[persona]
    }else{
        //listadoantiguo.push(persona)
        listadonuevo =[...listadoantiguo,persona]
    }
    console.log(persona)
    console.log(listadoantiguo)
    console.log(listadonuevo)
    localStorage.setItem("personas",JSON.stringify(listadonuevo));
    
    render="table"
    render="<tr>"
    render+="<th>email</th>"
    render+="<th>contrasena</th>"
    render+="<th>productos</th>"
    render+="<th>cantidad</th>"
    render+="<th>talla</th>"
    render+="<th>nombre</th>"
    render+="<th>apellido</th>"
    render+="<th>direccion</th>"
    render+="<th>ciudad</th>"
    render+="</tr>"

    for (let i = 0; i <listadonuevo.length; i++) {
        const element = listadonuevo[i];
        render+="<tr>"
        render+="<td>"+element.email+"</td>"
        render+="<td>"+element.contrasena+"</td>"
        render+="<td>"+element.productos+"</td>"
        render+="<td>"+element.cantidad+"</td>"
        render+="<td>"+element.talla+"</td>"
        render+="<td>"+element.nombre+"</td>"
        render+="<td>"+element.apellido+"</td>"
        render+="<td>"+element.direccion+"</td>"
        render+="<td>"+element.ciudad+"</td>"
        render+="<td>"
        render+="<button id= 'btneditar"+i+"'>editar</button>"
        render+="<button id= 'btneliminar"+i+"'>eliminar</button>"
        render+="</td>"
        render+="</tr>"
    }
    render+="</table>"
    econtenedorTabla.innerHTML = render;
    for (let i = 0; i < listadonuevo.length; i++) {
        var eBTN = document.getElementById("btneditar"+i);
        let element= listadonuevo[i]
        eBTN.addEventListener("click",()=>{alert("hola"+element.email+" "+element.contrasena+" "+element.productos+" "+element.cantidad+" "+element.talla+" "+element.nombre+" "+element.apellido+" "+element.direccion+" "+element.ciudad)})
    }
}

    document.getElementById("btn").addEventListener("click" , registrar)


