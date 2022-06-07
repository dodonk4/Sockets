module.exports = class Contenedor{
    constructor(){
        this.objetos = [
                    {
                        title: 'Manta',
                        price: 231,
                        id: `${Date.now()}`,
                        thumbnail: 'https://curiosfera-historia.com/wp-content/uploads/historia-de-la-manta-1.jpg'
                    },
                    {
                        title: 'Colchon',
                        price: 658,
                        id: `${Date.now()}`,
                        thumbnail: 'https://estelar.com.ar/wp-content/uploads/2020/03/Apolo140E.jpg'
                    }
        ];
    }
    obtenerTodos = ()=>{
        return [...this.objetos];
    }
}
