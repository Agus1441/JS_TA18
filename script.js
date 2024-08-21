const elementos = document.getElementById("listaDePersonas");
const personas = [
    'Ana',
    'Juan',
    'Pedro',
    'María',
    'Sofía',
    'Carlos',
    'Jorge',
    'Lucía',
    'Esteban',
    'Marta'
];

function addPersonas(personas){
    elementos.innerHTML="";
    
    personas.forEach(persona => {
        const li = document.createElement("li");
        li.innerHTML = persona;
        elementos.appendChild(li);
    });
}

function listaDeFiltros(){
    const filtro = document.getElementById("buscar").value.toLowerCase();
    const personasFiltradas = personas.filter(persona => persona.toLowerCase().includes(filtro));
    addPersonas(personasFiltradas);
}

addPersonas(personas);
document.getElementById("buscar").addEventListener("input",listaDeFiltros)

