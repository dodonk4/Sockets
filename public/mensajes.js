const mensajes = [
    // {
    // email: "j@f.com", date: 123, msssj: "hola"
    // },
    // {
    //     email: "j@fff.com", date: 13, msssj: "chau"
    // },
    // {
        
    // email: "j@ffsgsgf.com", date: 1322, msssj: "chvssvau"
    // }
]

const databaseMensajes = {
    obtenerTodos: () => {
        return [...mensajes];
    }
}



module.exports = { databaseMensajes }

