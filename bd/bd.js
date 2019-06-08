const bd_libros = [{ "_id": 1, "title": "Crimen y Castigo", "isbn": "1933988273", "pageCount": 416, "thumbnailUrl": "https://static.abebookscdn.com/cdn/es/imagenes/100-mejores-libros/crimen.jpg", "authors": "Fiódor Dostoievski", "categories": "Novela" },
{ "_id": 2, "title": "El Nombre de la Rosa", "isbn": "1933388673", "pageCount": 345, "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/I/41elkE8vsbL._SX323_BO1,204,203,200_.jpg", "authors": "Umberto Eco", "categories": "Drama" },
{ "_id": 3, "title": "Cien Años de Soledad", "isbn": "1933288673", "pageCount": 492, "thumbnailUrl": "https://static.abebookscdn.com/cdn/es/imagenes/100-mejores-libros/100soledad.jpg", "authors": "Gabriel Garcia Marquez", "categories": "Narrativa" }
];

var usuarios = [
    {
      "userId": "rirani",
      "jobTitleName": "Developer",
      "firstName": "Romin",
      "lastName": "Irani",
      "preferredFullName": "Romin Irani",
      "employeeCode": "E1",
      "region": "CA",
      "phoneNumber": "408-1234567",
      "emailAddress": "romin.k.irani@gmail.com",
      "contrasenia": 123,
      "rol": "estudiante"
    },
    {
      "userId": "nirani",
      "jobTitleName": "Developer",
      "firstName": "Neil",
      "lastName": "Irani",
      "preferredFullName": "Neil Irani",
      "employeeCode": "E2",
      "region": "CA",
      "phoneNumber": "408-1111111",
      "emailAddress": "neilrirani@gmail.com",
      "contrasenia": 123,
      "rol": "estudiante"
    },
    {
      "userId": "thanks",
      "jobTitleName": "Program Directory",
      "firstName": "Tom",
      "lastName": "Hanks",
      "preferredFullName": "Tom Hanks",
      "employeeCode": "E3",
      "region": "CA",
      "phoneNumber": "408-2222222",
      "emailAddress": "tomhanks@gmail.com",
      "rol": "admin"
    }
  ];

var reservas = [];

function generarBiblioteca(){
    for(var i = 0;i < bd_libros.length; i++){
        var libro =  bd_libros[i];
        libro["cantidad"] = 5;
    }
}

generarBiblioteca();