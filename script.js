let currentUniverse = 1;

function changeUniverse() {
    // Ocultar o universo atual
    document.getElementById(`spiderman${currentUniverse}`).classList.add("hidden");

    // Mudar para o próximo universo
    currentUniverse = currentUniverse === 3 ? 1 : currentUniverse + 1;
    
    // Exibir o próximo Spider-Man
    document.getElementById(`spiderman${currentUniverse}`).classList.remove("hidden");
}
