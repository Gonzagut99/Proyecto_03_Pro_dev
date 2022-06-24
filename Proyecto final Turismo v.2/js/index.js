$(document).ready(function(){
    /*fnDropdownCliked();*/
    for (let d=0; d<catalogoNombres.length; d++){
        $("#idDropdownCategorias").append(`<a id="${catalogoNombres[d].idNombreCatalogo}" href="./html/catalogo.html?id=${catalogoNombres[d].id}">${catalogoNombres[d].idNombreCatalogo}</a>`)
    };
});

function fnDropdownSelection(){
    
}

/*let desiertos = $("#desiertos");
let montañas = $("#montañas");
let playas = $("#playas");
let selvas = $("#selvas");
let valles = $("#valles");

let categoriasDropdown = [desiertos,montañas,playas,selvas,valles]
function fnAccederCatalogo(){

    window.location.href = "../html/catalogo.html";
    
}
function fnDropdownCliked(){
    $("#desiertos").on("click",function(){fnAccederCatalogo()});
    $("#montañas").on("click",function(){fnAccederCatalogo()});
    $("#playas").on("click",function(){fnAccederCatalogo()});
    $("#selvas").on("click",function(){fnAccederCatalogo()});
    $("#valles").on("click",function(){fnAccederCatalogo()});
}*/
/*function fnDropdownloop(){
    for (let c = 0; c<categoriasDropdown.length; c++){
        if(categoriasDropdown[c].cliked == true){
            fnAccederCatalogo()
        }
    }
}*/
