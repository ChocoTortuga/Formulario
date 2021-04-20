console.log('funcionando');

const formu = document.getElementById('formulario');

formu.addEventListener("submit", function(ev){
    //PreventDefault
    ev.preventDefault();

    //new FormData()
    const datos = new FormData(formu);

    console.log(datos.get("email"));
    console.log(datos.get("usuario"));
    console.log(datos.get("pass"));
    console.log(datos.get("pais"));
    console.log(datos.get("check"));

    const alertas = document.getElementById('alerta')

    if(datos.get("email") == "" || datos.get("usuario") == "" || datos.get("pass") == "" || datos.get("pais") == "Default")
    {
        alertas.innerHTML = '<div class="alert alert-danger" role="alert"> Complete sus datos por favor </div>';
        }else if(datos.get("check") == null)
            {
            alertas.innerHTML = '<div class="alert alert-success" role="alert"> Email: ' + datos.get("email") + ', nombre: ' + datos.get("usuario") + ', contraseña: ' + datos.get("pass") + ', país: ' + datos.get("pais") + '</div>';
            }else{
                alertas.innerHTML = '<div class="alert alert-success" role="alert"> Email: ' + datos.get("email") + ', nombre: ' + datos.get("usuario") + ', contraseña: ' + datos.get("pass") + ', país: ' + datos.get("pais") + ', ¡Gracias por suscribirte!</div>';
                }
});