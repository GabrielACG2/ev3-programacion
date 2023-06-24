
var modificar = (listadonuevo)=>{
    console.log("bbb")
    // esto es para obtener los elementos del formulario mediante el id
    let eemail = document.getElementById("email");
    let econtrasena = document.getElementById("contrasena");
    let epolera = document.getElementById("polera");
    let eshort = document.getElementById("short")
    let ecantidad = document.getElementById("cantidad");
    let etalla = document.getElementById("talla");
    let enombre = document.getElementById("nombre");
    let eapellido = document.getElementById("apellido");
    let edireccion = document.getElementById("direccion");
    let etelefono = document.getElementById("telefono")
    let eciudad = document.getElementById("ciudad");
    let eBtnEditarUp = document.getElementById('btnEditar')

     // esto es para Obtener los valores de los elementos del formulario
    let email = eemail.value;
    let contrasena = econtrasena.value;
    let polera= epolera.checked
    let short= eshort.checked
    let telefono=etelefono.value
   
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

    // esto moodifica el objeto en la lista mediante la modificacion del indice
    listadonuevo[indice].email =email;
    listadonuevo[indice].contrasena =contrasena; 
    listadonuevo[indice].producto = productos
    listadonuevo[indice].cantidad =cantidad;
    listadonuevo[indice].talla =talla;
    listadonuevo[indice].nombre =nombre;
    listadonuevo[indice].apellido =apellido;
    listadonuevo[indice].direccion =direccion;
    listadonuevo[indice].ciudad =ciudad;
    listadonuevo[indice].telefono=telefono;

    // esto guarda la lista actualizada en el almacenamiento local
    localStorage.setItem('personas',JSON.stringify(listadonuevo));
    // esto carga la tabla con los datos actualizados
    cargarTabla(listadonuevo)
}
var eliminar = (listadonuevo)=>{
    let eBtnEliminarUp = document.getElementById('btnEliminar');
    let indice = eBtnEliminarUp.value;
    // esto es para filtrar la lista para eliminar el objeto con el índice dado
    lista = listadonuevo.filter((p)=>p.id!=indice)
    // esto actualiza los índices de los elementos restantes en la lista
    lista = lista.map((p,index)=>{return {...p,'id':index}})//acorta el codigo
    // esto es para guardar la lista actualizada en el almacenamiento local
    localStorage.setItem('personas',JSON.stringify(lista));
    // esto carga la tabla con los datos actualizados
    cargarTabla(lista)
}
var cargarTabla=(listadonuevo)=>{
    let econtenedorTabla = document.getElementById("contenedorTabla");
    let eemail = document.getElementById("email");
    let econtrasena = document.getElementById("contrasena");
    let epolera = document.getElementById("polera")
    let eshort = document.getElementById("short")
    let ecantidad = document.getElementById("cantidad");
    let etalla = document.getElementById("talla");
    let enombre = document.getElementById("nombre");
    let eapellido = document.getElementById("apellido");
    let edireccion = document.getElementById("direccion");
    let etelefono = document.getElementById("telefono")
    let eciudad = document.getElementById("ciudad");
    // esto es para crear la estructura de la tabla que se mostrara en pantalla
    render= "<table>"
    render+= "<tr>"
    render+= "<th>email</th>"
    render+= "<th>contrasena</th>"
    render+= "<th>producto</th>"
    render+= "<th>cantidad</th>"
    render+= "<th>talla</th>"
    render+= "<th>nombre</th>"
    render+= "<th>apellido</th>"
    render+= "<th>direccion</th>"
    render+= "<th>telefono</th>"
    render+= "<th>ciudad</th>"
    render+= "<th>accion</th>"
    render+= "</tr>"
    // esto agrega filas a la tabla con los datos de cada elemento
    for (let i = 0; i <listadonuevo.length; i++) {
        const element = listadonuevo[i];
        render+="<tr>"
        render+="<td>"+element.email+"</td>"
        render+="<td>"+element.contrasena+"</td>"
        render+="<td>"+element.producto+"</td>"
        render+="<td>"+element.cantidad+"</td>"
        render+="<td>"+element.talla+"</td>"
        render+="<td>"+element.nombre+"</td>"
        render+="<td>"+element.apellido+"</td>"
        render+="<td>"+element.direccion+"</td>"
        render+="<td>"+element.telefono+"</td>"
        render+="<td>"+element.ciudad+"</td>"
        render+="<td>"
        render+="<button id= 'btnEditar"+i+"'>editar</button>"
        render+="<button id= 'btnEliminar"+i+"'>eliminar</button>"
        render+="</td>"
        render+="</tr>"
    }
    render+="</table>"
    econtenedorTabla.innerHTML = render;
    // esto agrega eventos a los botones de editar y eliminar de cada fila de la tabla
    for (let i = 0; i < listadonuevo.length; i++) {
        var eBTN = document.getElementById("btnEditar"+i);
        var eBTN2 = document.getElementById("btnEliminar"+i);
        let element= listadonuevo[i]
        // esto crea un evento para el botón de editar
        eBTN.addEventListener("click",()=>{
            // esto carga los valores de los elementos en los campos de entrada del formulario
            eemail.value=element.email;
            econtrasena.value=element.contrasena;
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
            ecantidad.value=element.cantidad;
            etalla.value=element.talla;
            enombre.value=element.nombre;
            eapellido.value=element.apellido;
            edireccion.value=element.direccion;
            etelefono.value=element.telefono;
            eciudad.value=element.ciudad;
            // esto lo que hace es crear un botón que va cambiando  si selecciona el boton de editar en la tabla
            let sEditar = "<button type='button' id='btnEditar' value='"+i+"'>Editar</button>";
            let contenedorBoton = document.getElementById('contenedorBtnExtra');
            contenedorBoton.innerHTML = sEditar;
             // esto lo que hace es crear un botón que va cambiando  si selecciona el boton de editar en la tabla
            let eBtnEditarUp = document.getElementById('btnEditar');
            eBtnEditarUp.addEventListener('click',()=>modificar(listadonuevo))
        })
        // esto crea un evento para el botón de eliminar
        eBTN2.addEventListener("click",()=>{
            // esto carga los valores de los elementos en los campos de entrada del formulario
            eemail.value=element.email;
            econtrasena.value=element.contrasena;
            epolera.checked = element.polera
            eshort.checked = element.short
            ecantidad.value=element.cantidad;
            etalla.value=element.talla;
            enombre.value=element.nombre;
            eapellido.value=element.apellido;
            edireccion.value=element.direccion;
            etelefono.value=element.telefono;
            eciudad.value=element.ciudad;
            // esto lo que hace es crear un botón que va cambiando  si selecciona el boton de eliminar  en la tabla
            let sEliminar = "<button type='button' id='btnEliminar' value='"+i+"'>Eliminar</button>";
            let contenedorBoton = document.getElementById('contenedorBtnExtra');
            contenedorBoton.innerHTML = sEliminar;
             // esto lo que hace es crear un botón que va cambiando  si selecciona el boton de eliminar en la tabla
            let eBtnEliminarUp = document.getElementById('btnEliminar');
            eBtnEliminarUp.addEventListener('click',()=>eliminar(listadonuevo))
        })
    }
}
var registrar = ()=>{
    //esto obtiene los valores de los campos de entrada del formulario
    let eemail = document.getElementById("email");
    let econtrasena = document.getElementById("contrasena");
    let ecantidad = document.getElementById("cantidad");
    let etalla = document.getElementById("talla");
    let enombre = document.getElementById("nombre");
    let eapellido = document.getElementById("apellido");
    let edireccion = document.getElementById("direccion");
    let etelefono = document.getElementById("telefono")
    let eciudad = document.getElementById("ciudad");
    let epolera = document.getElementById("polera")
    let eshort = document.getElementById("short")
    let polera = epolera.checked;
    let short = eshort.checked;
    let email = eemail.value;
    let contrasena = econtrasena.value;
    let cantidad = ecantidad.value;
    let talla = etalla.value;
    let nombre = enombre.value;
    let apellido = eapellido.value;
    let direccion = edireccion.value;
    let telefono=etelefono.value
    let ciudad = eciudad.value;
    var producto = []
    // esto verifica qué productos están seleccionados para cragarlos en la tabla mediante un if para los checkbox
      if (polera==true){
          producto.push("polera")
      }
      if(short==true){
        
        producto.push("short")
      }
      // esto obtiene el listado de personas del almacenamiento local
    let listadoPersonas = localStorage.getItem("personas");
    let listadoAntiguo = JSON.parse(listadoPersonas);
    // esto crea un nuevo objeto persona
    if(listadoAntiguo==null){
        let persona = {"id": 0,"email":email,"contrasena":contrasena,"producto":producto,"cantidad":cantidad,"talla":talla,"nombre":nombre,"apellido":apellido,"direccion":direccion,"telefono":telefono,"ciudad":ciudad}
        listadonuevo = [persona]
    // esto verifica si el listado antiguo existe o es nulo
    }else{
        let persona = {"id": listadoAntiguo.length,"email":email,"contrasena":contrasena,"producto":producto,"cantidad":cantidad,"talla":talla,"nombre":nombre,"apellido":apellido,"direccion":direccion,"telefono":telefono,"ciudad":ciudad}
        listadonuevo = [...listadoAntiguo,persona]
    }
    console.log(listadoAntiguo)
    console.log(listadonuevo);
     // esto guarda el nuevo listado en el almacenamiento local
    localStorage.setItem("personas",JSON.stringify(listadonuevo));
    // esto carga la tabla con el nuevo listado
    cargarTabla(listadonuevo)
   }
var cragarDatos = ()=>{
     // esto obtiene el listado de personas del almacenamiento local
    let listadoPersonas = localStorage.getItem("personas");
    let listadoAntiguo = JSON.parse(listadoPersonas);
    console.log("ya cargo todo")
    cargarTabla(listadoAntiguo)


// esto es una funcion para cambiar el contraste
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
    // esto es una función para cambiar el tamaño de la fuente
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
// esto agrega eventos a los botones
document.getElementById("btn").addEventListener("click",registrar);
addEventListener('load',cragarDatos)

