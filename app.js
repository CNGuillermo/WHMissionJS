// Listas de elementos (en este caso, nombres de imágenes)
const primaryMission = ['PM1.png', 'PM2.png', 'PM3.png', 'PM4.png', 'PM5.png', 'PM6.png', 'PM7.png', 'PM8.png', 'PM9.png'];
const missionRule = ['MR1.png', 'MR2.png', 'MR3.png', 'MR4.png'];
const deployment = ['D1.png', 'D2.png', 'D3.png', 'D4.png', 'D5.png'];

// Función para seleccionar un elemento al azar de una lista
function getRandomElement(list) {
    return list[Math.floor(Math.random() * list.length)];
}

// Función para mostrar imágenes aleatorias
function mostrarImagenesAleatorias() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';  // Limpiar contenido anterior

    // Seleccionar un elemento al azar de cada lista
    const elementoElegidoPrimaryMission = getRandomElement(primaryMission);
    const elementoElegidoMissionRule = getRandomElement(missionRule);
    const elementoElegidoDeployment = getRandomElement(deployment);

    // Crear elementos de imagen y agregar al resultadoDiv
    const imagen1 = document.createElement('img');
    imagen1.src = elementoElegidoPrimaryMission;
    resultadoDiv.appendChild(imagen1);

    const imagen2 = document.createElement('img');
    imagen2.src = elementoElegidoMissionRule;
    resultadoDiv.appendChild(imagen2);

    const imagen3 = document.createElement('img');
    imagen3.src = elementoElegidoDeployment;
    resultadoDiv.appendChild(imagen3);
}

// Llamar a la función al cargar la página
window.onload = mostrarImagenesAleatorias;
