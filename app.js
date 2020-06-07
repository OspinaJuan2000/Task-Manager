import Interfaz from "./classes/IU.js";

//Cuando se cargue el documento.
document.addEventListener('DOMContentLoaded', () => {
    const iu = new Interfaz();

    iu.menuResponsive();
    iu.revelarScroll();
    iu.fijarNavegacion();
    iu.cargarModal();
    iu.importanciaTareas();
});