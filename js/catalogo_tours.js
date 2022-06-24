const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idUrl = urlParams.get('id');
var idInicio = parseInt(idUrl);


$(document).ready(
    function (){
        var inicioCatalogo = catalogoCategoria.find(s => s.id === idInicio);
        $("#idInicioCatalogo").append(`<img src="${inicioCatalogo.ImagenPrincipal}" style="width:100% ;">
        <span class="tituloPagina">${inicioCatalogo.TituloCatalogo}</span>`);
        for (let d=0; d<catalogoNombres.length; d++){
            $("#idDropdownCategorias").append(`<a id="${catalogoNombres[d].idNombreCatalogo}" href="../html/catalogo.html?id=${catalogoNombres[d].id}">${catalogoNombres[d].idNombreCatalogo}</a>`)
        };
    });



/*function fnModificarInicio(){
    $("#idInicioCatalogo").append(`<img src="${inicioCatalogo.ImagenPrincipal}" style="width:100% ;">
    <span class="tituloPagina">${inicioCatalogo.TituloCatalogo}</span>`)
}*/