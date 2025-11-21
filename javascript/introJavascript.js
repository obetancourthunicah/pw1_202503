// Javascript  Inicio 90s
// -----------------------------
// Snake mouse effect 

/*

1 atributos de eventos en el html
2 bloque script dentro del documento
3 archivo js como fuente del bloque script

*/

/*

1) Maquetado del Carrusel, Filmina o de Pelicula
2) Obtener las referencias del Dom para Manipular el carrusel
3) Tick. Tiempo en que se ejecuta un cambio. 

*/

document.addEventListener("DOMContentLoaded", ()=>{
    let carruselPrincial = new Carrusel(
        document.querySelector(".carrusel")
    );
    carruselPrincial.init();
});

// Programacion Orientado Objetos

class Carrusel {
    contendor = null;
    track = null;
    items = [];

    direction = 1;

    timeInSeconds = 3;
    timerId = null;
    currentItem = 0;

    // Carusel generated UX
    rightButton = null;
    leftButton = null;

    constructor(contenedor){
        this.contendor = contenedor;
        this.track = this.contendor.querySelector(".carrusel-track");
        /* spread operator */
        this.items = [...this.track.querySelectorAll(".carrusel-item")];
    }

    init(){
        console.log("Carrusel Inicializado");
        console.log("items:", this.items);
        this.generateUX();
        this.tick();
    }

    generateUX(){
        this.rightButton = document.createElement("button");
        this.leftButton = document.createElement("button");
        this.rightButton.classList.add("carrusel_right");
        this.leftButton.classList.add("carrusel_left");
        this.rightButton.innerHTML = ">";
        this.leftButton.innerHTML = "<";

        this.rightButton.addEventListener("click", (e)=>{
            this.moveToDirection(1);
        });

        this.leftButton.addEventListener("click", (e)=>{
            this.moveToDirection(-1);
        });

        this.contendor.appendChild(this.rightButton);
        this.contendor.appendChild(this.leftButton);
    }

    moveToDirection(nextDirection) {
        clearTimeout(this.timerId);
        this.direction = nextDirection;
        this.moveToNext();
        this.tick();
    }

    tick(){
        this.timerId = setTimeout(
            ()=>{
                this.moveToNext();
                this.tick()
            },
            this.timeInSeconds * 1000
        );
    }

    moveToNext(){
        let nextIndex = this.currentItem + this.direction;
        if (nextIndex < 0) {
            nextIndex = 1;
            this.direction = 1;
        }
        if (nextIndex === this.items.length) {
            nextIndex -= 2;
            this.direction = -1;
        }
        this.currentItem = nextIndex;
        this.moveTo(nextIndex);
    }

    moveTo(index){
        this.track.style.transform = `translateX(-${index * 100}vw)`;
    }
}