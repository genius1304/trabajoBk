class Usuario{
    
    constructor(nombre, apellido, libros, mascotas){

        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
        this.mascotaIndividual=mascotas.length+1;
    }

    getFullName(){
        return `${this.nombre} ${this.apellido} `
    }

    addMascota(mascotas){
        return this.mascotas.push(mascotas)
    }


    addLibro(libros){
        return this.libros.push(libros)
    }

    getNombreLibros(){
        return (this.libros.map(libro=>libro.nombre))
    }

}

const usuario= new Usuario ('Enzo', 'Sartoris', [{nombre: 'Harry Potter',autor: 'J. K. Rowling'}, {nombre: 'El Cisne Negro', autor: 'Nassim Nicholas Taleb'}], ['perro', 'tortuga'] )


console.log(usuario.addMascota("loro"));

console.log(usuario.addLibro({nombre: `Las Cronicas de Narnia`, autor: `C. S. Lewis`}));


console.log(usuario);

