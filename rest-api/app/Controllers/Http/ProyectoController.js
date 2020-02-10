'use strict'

class ProyectoController {
    index({ auth }){
        const user = await auth.getUser();
        console.log(user);
        return{
            mensaje: "Hola estamos en index de proyectos"
        }
    }
}

module.exports = ProyectoController
