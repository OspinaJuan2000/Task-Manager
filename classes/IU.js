export default class Interfaz {
    constructor() {
        this.altoPantalla = window.innerHeight;
        this.anchoPantalla = window.innerWidth;
    }

    //Revelar Scroll.

    revelarScroll() {
        ScrollReveal().reveal('.hero', { delay: 300 });
        ScrollReveal().reveal('.seccion-tareas', { delay: 500 });
    }

    //Menú responsive.
    menuResponsive() {
        if (this.anchoPantalla < 768) {
            $('.navegacion-principal').hide();
            $('.menu-mobile i').click(function () {
                $('.navegacion-principal').slideToggle();
            });
        }
    }

    //Fijar navegación.
    fijarNavegacion() {
        const anchoPantalla = this.anchoPantalla;
        window.onscroll = function () {
            //Creamos la variable para la navegación.
            const navegacion = document.querySelector('.navegacion');
            // Obtenemos la posicion del scroll en pantall
            let scroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (scroll > 65) {
                navegacion.classList.add('fixed');
                navegacion.classList.remove('contenedor');
                navegacion.classList.remove('border');
                navegacion.style.marginTop = '0';
                document.body.style.marginTop = '55px';
            } else {
                navegacion.classList.remove('fixed');
                navegacion.classList.add('contenedor');
                navegacion.classList.add('border');
                navegacion.style.marginTop = '1.5rem';
                document.body.style.marginTop = '0';
            }
        }
    }

    //Cargar la modal.
    cargarModal() {
        const registrarTarea = document.querySelector('#registrar');
        const formulario = document.querySelector('.contenedor-form');

        registrarTarea.addEventListener('click', () => {
            formulario.classList.remove('hidden');
            formulario.classList.add('active');
        });
        document.body.addEventListener('click', (e) => {
            if (e.target.classList.contains('contenedor-form') || e.target.id === 'cerrar') {
                formulario.classList.add('hidden');
                formulario.classList.remove('active');
            }
        });
    }

    //Validar la importancia de las tareas.
    importanciaTareas() {
        const nombreTarea = document.querySelector('#nombre');
        const descripcionTarea = document.querySelector('#descripcion');
        const importancia = document.querySelector('#importancia');

        importancia.addEventListener('mouseup', () => {
            if (importancia.value === 'normal' && nombreTarea.value.length > 0 && descripcionTarea.value.length > 0) {
                nombreTarea.style.backgroundColor = 'rgba(23, 191, 99, .2)';
                descripcionTarea.style.backgroundColor = 'rgba(23, 191, 99, .2)';

            } else if (importancia.value === 'necesaria' && nombreTarea.value.length > 0 && descripcionTarea.value.length > 0) {
                nombreTarea.style.backgroundColor = 'rgba(29, 161, 242, .2)';
                descripcionTarea.style.backgroundColor = 'rgba(29, 161, 242, .2)';

            } else if (importancia.value === 'urgente' && nombreTarea.value.length > 0 && descripcionTarea.value.length > 0) {
                nombreTarea.style.backgroundColor = 'rgba(255, 89, 78, .3)';
                descripcionTarea.style.backgroundColor = 'rgba(255, 89, 78, .3)';

            } else if (nombreTarea.value.length === 0 || descripcionTarea.value.length === 0) {
                nombreTarea.style.backgroundColor = 'rgba(255, 255, 255, .6)';
                descripcionTarea.style.backgroundColor = 'rgba(255, 255, 255, .6)';
            }
        });
    }
}