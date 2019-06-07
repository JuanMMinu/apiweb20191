$(document).ready(function(){
    var categorias = [];
    var categoriasHTML = "<option selected disabled>Filtro</option><option>Todos</option>";
    for(var i = 0;i < bd_libros.length; i++){
        if(categorias.length === 0){
            categorias.push(bd_libros[i].categories);
        }else{
            if(!isCategoria(categorias, bd_libros[i].categories[0])){
                categorias.push(bd_libros[i].categories);
            }
        }
        
    }
    for(var i = 0;i < categorias.length; i++){
        categoriasHTML += "<option>"+categorias[i]+"</option>";
    }


    $(categoriasHTML).appendTo("#exampleFormControlSelectg");

    var librosPorC = [];
    var librosHTML = "";
    
    for(var i = 0;i < bd_libros.length; i++){
            librosPorC.push(bd_libros[i]);
    }
    for(var i = 0;i < librosPorC.length; i++){
        librosHTML += "<div class='libro'><img class='card-img-top' src='"+ librosPorC[i].thumbnailUrl +"' alt='Card image cap'><div class='card-body'><h5 class='card-title'>"+librosPorC[i].title+"</h5><p class='card-text'>Autor: "+librosPorC[i].authors+"</p><a  id='btnHref"+i+"' onclick='libroR(\""+librosPorC[i].title+"\")'  href='Libro.html' class='btn btn-primary'>Reservar</a></div><div class='card-footer text-muted'>5 Disponibles</div></div>";
    }
    
    $("#resulLibros").html(librosHTML);

});


function isCategoria(arrayCategorias,categoria){
    for(var i = 0;i < arrayCategorias.length; i++){
        if(categoria === arrayCategorias[i]){
            return true;
        }

    }
    return false;

}



$("#searchLive").keypress(function(){
    var valor = $("#searchLive").val();
    var librosPorC = [];
    var entro = false;
    var librosHTML = "";
    for(var i = 0;i < bd_libros.length; i++){
        var titulo = bd_libros[i].title;
        if(titulo.lastIndexOf(valor) != -1){
            librosPorC.push(bd_libros[i]);
            entro = true;
        }else{
            
        }

    }
    if(entro){
        for(var i = 0;i < librosPorC.length; i++){
            librosHTML += "<div class='libro'><img class='card-img-top' src='"+ librosPorC[i].thumbnailUrl +"' alt='Card image cap'><div class='card-body'><h5 class='card-title'>"+librosPorC[i].title+"</h5><p class='card-text'>Autor: "+librosPorC[i].authors+"</p><a  id='btnHref"+i+"' onclick='libroR(\""+librosPorC[i].title+"\")' href='Libro.html' class='btn btn-primary'>Reservar</a></div><div class='card-footer text-muted'>5 Disponibles</div></div>";
        }
        
        $("#resulLibros").html(librosHTML);    
    }else{
        $("#resulLibros").html("");    
    }
    


});



//Obtener libros por el filtro

$('#exampleFormControlSelectg').change(function() {
    var valor = $( "#exampleFormControlSelectg option:selected" ).text()
    var librosPorC = [];
    var librosHTML = "";

    if(valor === "Todos"){
        for(var i = 0;i < bd_libros.length; i++){
                librosPorC.push(bd_libros[i]);
        }
        for(var i = 0;i < librosPorC.length; i++){
            librosHTML += "<div class='libro'><img class='card-img-top' src='"+ librosPorC[i].thumbnailUrl +"' alt='Card image cap'><div class='card-body'><h5 class='card-title'>"+librosPorC[i].title+"</h5><p class='card-text'>Autor: "+librosPorC[i].authors+"</p><a  id='btnHref"+i+"' onclick='libroR(\""+librosPorC[i].title+"\")' href='Libro.html' class='btn btn-primary'>Reservar</a></div><div class='card-footer text-muted'>5 Disponibles</div></div>";
        }
        
        $("#resulLibros").html(librosHTML);
    }else{
        for(var i = 0;i < bd_libros.length; i++){
            if(bd_libros[i].categories === valor){
                librosPorC.push(bd_libros[i]);
            }
        }
        for(var i = 0;i < librosPorC.length; i++){
            librosHTML += "<div class='libro'><img class='card-img-top' src='"+ librosPorC[i].thumbnailUrl +"' alt='Card image cap'><div class='card-body'><h5 class='card-title'>"+librosPorC[i].title+"</h5><p class='card-text'>Autor: "+librosPorC[i].authors+"</p><a  id='btnHref"+i+"' onclick='libroR(\""+librosPorC[i].title+"\")' href='Libro.html' class='btn btn-primary'>Reservar</a></div><div class='card-footer text-muted'>5 Disponibles</div></div>";
        }
        
        $("#resulLibros").html(librosHTML);
    }
    

});






