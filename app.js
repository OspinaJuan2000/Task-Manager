import Interfaz from "./js/Clases/IU.js";

//Cuando se cargue el documento.
document.addEventListener('DOMContentLoaded', () => {
    const iu = new Interfaz();
    try {
        iu.cargarPagina();
        iu.menuResponsive();
        iu.fijarNavegacion();
        iu.importanciaTareas();
        iu.controlarModal();
        setTimeout(() => {
            iu.revelarScroll();
        }, 1200);
    } catch (error) {
        console.log(error);
    }
});
