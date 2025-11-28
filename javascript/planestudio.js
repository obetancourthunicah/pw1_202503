const planICC = {
    title : "Plan de Estudio ICC",
    bloques: [
        {
            name: "I",
            asignaturas : [
                {
                    codigo: 'ES101',
                    nombre: "Español",
                    creditos: 3,
                    requisitos: [],
                },
                {
                    codigo: 'MT101',
                    nombre: "Matemáticas",
                    creditos: 4,
                    requisitos: [],
                },
                {
                    codigo: 'IF101',
                    nombre: "Introducción a las Ciencias de la Computación",
                    creditos: 4,
                    requisitos: [],
                },
                {
                    codigo: 'SC101',
                    nombre: "Sociología",
                    creditos: 3,
                    requisitos: [],
                },
                {
                    codigo: 'FI101',
                    nombre: "Filosofía",
                    creditos: 3,
                    requisitos: [],
                },
            ]
        },
        {
            name: "II",
            asignaturas : [
                {
                    codigo: 'ES201',
                    nombre: "Expresión Oral y Escrita",
                    creditos: 3,
                    requisitos: ["ES101"],
                },
                {
                    codigo: 'MT201',
                    nombre: "Precálculo",
                    creditos: 4,
                    requisitos: ["MT101"],
                },
                {
                    codigo: 'IF201',
                    nombre: "Fundamentos y Lógica de Programación",
                    creditos: 4,
                    requisitos: ["IF101"],
                },
                {
                    codigo: 'HS101',
                    nombre: "Historia de Honduras",
                    creditos: 3,
                    requisitos: [],
                },
                {
                    codigo: 'CS201',
                    nombre: "El Hombre Frente a la Vida",
                    creditos: 3,
                    requisitos: ["FI101"],
                },
            ]
        },
        {
            name: "III",
            asignaturas : [
                {
                    codigo: 'MT302',
                    nombre: "Estadística I",
                    creditos: 4,
                    requisitos: ["MT101"],
                },
                {
                    codigo: 'MT301',
                    nombre: "Cálculo I",
                    creditos: 4,
                    requisitos: ["MT201"],
                },
                {
                    codigo: 'IF301',
                    nombre: "Programación Estructurada I",
                    creditos: 3,
                    requisitos: ["IF201"],
                },
                {
                    codigo: 'MT303',
                    nombre: "Estructura Discretas",
                    creditos: 3,
                    requisitos: [],
                },
                {
                    codigo: 'EL101',
                    nombre: "Electiva I.",
                    creditos: 3,
                    requisitos: [],
                },
            ]
        },
    ]
}
document.addEventListener("DOMContentLoaded", ()=>{
    const planContainer = document.getElementById("planIccContainer");
    const planEstudioInstance = new PlanDeEstudio(planContainer, planICC);
    planEstudioInstance.createUX();
});

class PlanDeEstudio {
    container = null;
    structure = null;
    constructor( container, planStructure ){
        this.container = container;
        this.structure = planStructure;
        this.container.classList.add("plancontainer");
        let titleElement = document.createElement("H1");
        titleElement.innerHTML = this.structure.title;
        this.container.appendChild(
            titleElement
        );
    }

    createUX(){
        /*
            x 1. Recorrer por los Bloque para dibujar contenedores del los bloques
            2. De Forma Recursiva por Bloque se generará los nodos por cada clase
            3. Enlazar los eventos mouse over y mouse leave para agregar clases a los nodos.
        */

        if (!this.structure) {
            throw Error("Es necesario establecer un plan de estudio JSON");
        }
        if (!this.structure.bloques) {
            throw Error("El plan no tiene bloques");
        }
        let bloquesUX = this.structure.bloques.map(
            (bloque)=>{
                const contendorBloque = document.createElement("div");
                contendorBloque.classList.add("bloque");
                const labelBloque = document.createElement("div");
                labelBloque.innerHTML = bloque.name;
                labelBloque.classList.add("bloque_label");
                const asignaturasBloque = this.createAsignaturasUX(bloque.asignaturas);
                contendorBloque.appendChild(labelBloque);
                contendorBloque.appendChild(asignaturasBloque);
                return contendorBloque;
            }
        );
        bloquesUX.forEach(element => {
            this.container.appendChild(element);
        });
    }

    createAsignaturasUX(asignaturas){
        const asignaturasBloque = document.createElement("div");
        asignaturasBloque.classList.add("bloque_clases");

        asignaturas.forEach(
            (asignatura) => {
                const claseUX = document.createElement("div");
                claseUX.classList.add("bloqueClase");
                const codLabel = document.createElement("span");
                const nameLabel = document.createElement("span");
                const crdLabel = document.createElement("span");
                codLabel.innerHTML = asignatura.codigo;
                nameLabel.innerHTML = asignatura.nombre;
                crdLabel.innerHTML = asignatura.creditos;
                claseUX.appendChild(codLabel);
                claseUX.appendChild(nameLabel);
                claseUX.appendChild(crdLabel);
                asignaturasBloque.appendChild(claseUX);
            }
         );

        return asignaturasBloque;
    }
}
