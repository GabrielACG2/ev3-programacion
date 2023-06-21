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
var modificar = (listadonuevo)=>{
    console.log("bbb")
    let eemail = document.getElementById("email");
    let econtrasena = document.getElementById("contrasena");
    let epolera = document.getElementById("polera");
    let eshort = document.getElementById("short")
    let ecantidad = document.getElementById("cantidad");
    let etalla = document.getElementById("talla");
    let enombre = document.getElementById("nombre");
    let eapellido = document.getElementById("apellido");
    let edireccion = document.getElementById("direccion");
    let eciudad = document.getElementById("ciudad");
    let eBtnEditarUp = document.getElementById('btnEditar')
    let email = eemail.value;
    let contrasena = econtrasena.value;
    let polera= epolera.checked
    let short= eshort.checked
   
    var productos = []
    if (polera==true){
        productos.push("polera")
    }
    if(short==true){
      
      productos.push("short")
    }
    console.log("aaaa")
    let cantidad = ecantidad.value;
    let talla = etalla.value;
    let nombre = enombre.value;
    let apellido = eapellido.value;
    let direccion = edireccion.value;
    let ciudad = eciudad.value;
    let indice = eBtnEditarUp.value;
    listadonuevo[indice].email =email;
    listadonuevo[indice].contrasena =contrasena; 
    listadonuevo[indice].producto = productos
    //listadonuevo[indice].polera = polera;
    //listadonuevo[indice].short = short;

    listadonuevo[indice].cantidad =cantidad;
    listadonuevo[indice].talla =talla;
    listadonuevo[indice].nombre =nombre;
    listadonuevo[indice].apellido =apellido;
    listadonuevo[indice].direccion =direccion;
    listadonuevo[indice].ciudad =ciudad;
    localStorage.setItem('personas',JSON.stringify(listadonuevo));
    cargarTabla(listadonuevo)
}
var eliminar = (listadonuevo)=>{
    let eBtnEliminarUp = document.getElementById('btnEliminar');
    let indice = eBtnEliminarUp.value;
    console.log(listadonuevo)
    lista = listadonuevo.filter((p)=>p.id!=indice)
    lista = lista.map((p,index)=>{return {...p,'id':index}})//acorta el codigo
    console.log(lista)
    localStorage.setItem('personas',JSON.stringify(lista));
    cargarTabla(lista)
}
var cargarTabla=(listadonuevo)=>{
    let econtenedorTabla = document.getElementById("contenedorTabla");
    let eemail = document.getElementById("email");
    let econtrasena = document.getElementById("contrasena");
    //let eproductos = document.getElementById("flexCheckDefault");
    let epolera = document.getElementById("polera")
    let eshort = document.getElementById("short")
    let ecantidad = document.getElementById("cantidad");
    let etalla = document.getElementById("talla");
    let enombre = document.getElementById("nombre");
    let eapellido = document.getElementById("apellido");
    let edireccion = document.getElementById("direccion");
    let eciudad = document.getElementById("ciudad");
    render= "<table>"
    render+= "<tr>"
    render+= "<th>email</th>"
    render+= "<th>contrasena</th>"
    //render+= "<th>productos</th>"
    render+= "<th>producto</th>"
    render+= "<th>cantidad</th>"
    render+= "<th>talla</th>"
    render+= "<th>nombre</th>"
    render+= "<th>apellido</th>"
    render+= "<th>direccion</th>"
    render+= "<th>ciudad</th>"
    render+= "<th>accion</th>"
    render+= "</tr>"
    for (let i = 0; i <listadonuevo.length; i++) {
        const element = listadonuevo[i];
        render+="<tr>"
        render+="<td>"+element.email+"</td>"
        render+="<td>"+element.contrasena+"</td>"
        //render+="<td>"+element.productos+"</td>"
        render+="<td>"+element.producto+"</td>"
        render+="<td>"+element.cantidad+"</td>"
        render+="<td>"+element.talla+"</td>"
        render+="<td>"+element.nombre+"</td>"
        render+="<td>"+element.apellido+"</td>"
        render+="<td>"+element.direccion+"</td>"
        render+="<td>"+element.ciudad+"</td>"
        render+="<td>"
        render+="<button id= 'btnEditar"+i+"'>editar</button>"
        render+="<button id= 'btnEliminar"+i+"'>eliminar</button>"
        render+="</td>"
        render+="</tr>"
    }
    render+="</table>"
    econtenedorTabla.innerHTML = render;
    for (let i = 0; i < listadonuevo.length; i++) {
        var eBTN = document.getElementById("btnEditar"+i);
        var eBTN2 = document.getElementById("btnEliminar"+i);
        let element= listadonuevo[i]
        eBTN.addEventListener("click",()=>{
            eemail.value=element.email;
            econtrasena.value=element.contrasena;
            //eproductos.value=element.productos;
           // epolera.checked = element.polera
           let productoPolera = element.producto.find(e=>e=="polera");
           let productoShort = element.producto.find(e=>e=="short");
            if(productoPolera && productoShort){
                epolera.checked = true
                eshort.checked = true
            }else if(productoPolera){
                epolera.checked = true
                eshort.checked = false
            }
            else if(productoShort){
                epolera.checked = false
                eshort.checked = true
            }
            //eshort.checked = element.short
            ecantidad.value=element.cantidad;
            etalla.value=element.talla;
            enombre.value=element.nombre;
            eapellido.value=element.apellido;
            edireccion.value=element.direccion;
            eciudad.value=element.ciudad;
            let sEditar = "<button type='button' id='btnEditar' value='"+i+"'>Editar</button>";

            let contenedorBoton = document.getElementById('contenedorBtnExtra');
            contenedorBoton.innerHTML = sEditar;
            let eBtnEditarUp = document.getElementById('btnEditar');
            eBtnEditarUp.addEventListener('click',()=>modificar(listadonuevo))
        })
        eBTN2.addEventListener("click",()=>{
            eemail.value=element.email;
            econtrasena.value=element.contrasena;
            //eproductos.value=element.productos;
            epolera.checked = element.polera
            eshort.checked = element.short
            ecantidad.value=element.cantidad;
            etalla.value=element.talla;
            enombre.value=element.nombre;
            eapellido.value=element.apellido;
            edireccion.value=element.direccion;
            eciudad.value=element.ciudad;
            let sEliminar = "<button type='button' id='btnEliminar' value='"+i+"'>Eliminar</button>";
            let contenedorBoton = document.getElementById('contenedorBtnExtra');
            contenedorBoton.innerHTML = sEliminar;
            let eBtnEliminarUp = document.getElementById('btnEliminar');
            eBtnEliminarUp.addEventListener('click',()=>eliminar(listadonuevo))
        })
    }
}
var registrar = ()=>{
    let eemail = document.getElementById("email");
    let econtrasena = document.getElementById("contrasena");
    //let eproductos = document.getElementById("flexCheckDefault");
    let ecantidad = document.getElementById("cantidad");
    let etalla = document.getElementById("talla");
    let enombre = document.getElementById("nombre");
    let eapellido = document.getElementById("apellido");
    let edireccion = document.getElementById("direccion");
    let eciudad = document.getElementById("ciudad");
    let epolera = document.getElementById("polera")
    let eshort = document.getElementById("short")
    let polera = epolera.checked;
    let short = eshort.checked;
    let email = eemail.value;
    let contrasena = econtrasena.value;
   // let productos = eproductos.value;
    let cantidad = ecantidad.value;
    let talla = etalla.value;
    let nombre = enombre.value;
    let apellido = eapellido.value;
    let direccion = edireccion.value;
    let ciudad = eciudad.value;
    var producto = []
      if (polera==true){
          producto.push("polera")
      }
      if(short==true){
        
        producto.push("short")
      }
      //else{producto = "polera,short"}


    //console.log(email)
    //console.log(contrasena)
    //console.log(productos)
    //console.log(cantidad)
    //console.log(talla)
    //console.log(nombre)
    //console.log(apellido)
    //console.log(direccion)
    //console.log(ciudad)
    let listadoPersonas = localStorage.getItem("personas");
    let listadoAntiguo = JSON.parse(listadoPersonas);
    if(listadoAntiguo==null){
        let persona = {"id": 0,"email":email,"contrasena":contrasena,"producto":producto,"cantidad":cantidad,"talla":talla,"nombre":nombre,"apellido":apellido,"direccion":direccion,"ciudad":ciudad}
        listadonuevo = [persona]
    }else{
        //listadoAntiguo.push(persona)
        let persona = {"id": listadoAntiguo.length,"email":email,"contrasena":contrasena,"producto":producto,"cantidad":cantidad,"talla":talla,"nombre":nombre,"apellido":apellido,"direccion":direccion,"ciudad":ciudad}
        listadonuevo = [...listadoAntiguo,persona]
    }
    //console.log(persona)
    console.log(listadoAntiguo)
    console.log(listadonuevo);
    localStorage.setItem("personas",JSON.stringify(listadonuevo));
    //eContenedorTabla.innerHTML = ""+listadoNuevo.length;
    //tabla
    cargarTabla(listadonuevo)
   }
var cragarDatos = ()=>{
    let listadoPersonas = localStorage.getItem("personas");
    let listadoAntiguo = JSON.parse(listadoPersonas);
    console.log("ya cargo todo")
    cargarTabla(listadoAntiguo)



    var contraste =()=>{
        let btn = document.getElementById('btnContraste');
        if(btn.value == '0'){
            let elements = document.getElementsByClassName('blanco');
            elements[0].classList.add('negro');
            elements[0].classList.remove('blanco');
            btn.value = '1';
        }
        else if(btn.value == '1'){
            let elements = document.getElementsByClassName('negro');
            elements[0].classList.add('blanco');
            elements[0].classList.remove('negro');
            btn.value = '0';
        }
    }
    var fuente = ()=>{
        let btn = document.getElementById("btnFuente");
        if(btn.value == '0'){
            let elements = document.getElementsByClassName("small-letras");
            const largo = elements.length;
            for (let i = 0; i < largo; i++) {
                const element = elements[0];
                element.classList.add("medium-letras")
                element.classList.remove("small-letras")
            }
            btn.value = '1'
        }
        else if (btn.value == "1"){
            let elements = document.getElementsByClassName("medium-letras");
            const largo = elements.length;    
            for (let i = 0; i < largo; i++) {
                let element = elements[0];
                element.classList.replace('medium-letras','large-letras')
            }
            btn.value = "2"
        }
        else if (btn.value == "2"){
            const elements = document.getElementsByClassName("large-letras");
            const largo = elements.length;
            for (let i = 0; i <largo; i++) {
                const element = elements[0];
                element.classList.add("small-letras")
                element.classList.remove("large-letras")
            }
            btn.value = "0"
        }
    
    }
    
    document.getElementById('btnContraste').addEventListener('click',contraste);
    document.getElementById("btnFuente").addEventListener('click',fuente);
}
document.getElementById("btn").addEventListener("click",registrar);
addEventListener('load',cragarDatos)
    //let persona ={"email":email,"contrasena":contrasena,"productos":productos,"cantidad":cantidad,"talla":talla,"nombre":nombre,"apellido":apellido,"direccion":direccion,"ciudad":ciudad}
    //let listado=localStorage.getItem("pers  onas");
    //let listadoantiguo= JSON.parse(listado);
    //if(listadoantiguo==null){
        //listadonuevo =[persona]
    //}else{
        //listadoantiguo.push(persona)
        //listadonuevo =[...listadoantiguo,persona]
    //}
    //console.log(persona)
    //console.log(listadoantiguo)
    //console.log(listadonuevo)
    //localStorage.setItem("personas",JSON.stringify(listadonuevo));
    
    //render= "<table>"
    //render+= "<tr>"
    //render+= "<th>email</th>"
    //render+= "<th>contrasena</th>"
    //render+= "<th>productos</th>"
    //render+= "<th>cantidad</th>"
    //render+= "<th>talla</th>"
    //render+= "<th>nombre</th>"
    //render+= "<th>apellido</th>"
   // render+= "<th>direccion</th>"
    //render+= "<th>ciudad</th>"
    //render+= "</tr>"

    //for (let i = 0; i <listadonuevo.length; i++) {
        //const element = listadonuevo[i];
        //render+="<tr>"
        //render+="<td>"+element.email+"</td>"
        //render+="<td>"+element.contrasena+"</td>"
        //render+="<td>"+element.productos+"</td>"
        //render+="<td>"+element.cantidad+"</td>"
        //render+="<td>"+element.talla+"</td>"
        //render+="<td>"+element.nombre+"</td>"
        //render+="<td>"+element.apellido+"</td>"
        //render+="<td>"+element.direccion+"</td>"
        //render+="<td>"+element.ciudad+"</td>"
        //render+="<td>"
        //render+="<button id= 'btneditar"+i+"'>editar</button>"
        //render+="<button id= 'btneliminar"+i+"'>eliminar</button>"
        //render+="</td>"
        //render+="</tr>"
    //}
    //render+="</table>"
    //econtenedorTabla.innerHTML = render;
    //for (let i = 0; i < listadonuevo.length; i++) {
        //var eBTN = document.getElementById("btneditar"+i);
        //let element= listadonuevo[i]
        //eBTN.addEventListener("click",()=>{alert("hola"+element.email+" "+element.contrasena+" "+element.productos+" "+element.cantidad+" "+element.talla+" "+element.nombre+" "+element.apellido+" "+element.direccion+" "+element.ciudad)})
    //}
//}

   // document.getElementById("btn").addEventListener("click" , registrar)
