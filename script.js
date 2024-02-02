const palletteContainer = document.getElementById('palletteContainer');
const colorValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const PALLETE_SIZE = 5;

const createPallete = () => {
    for (let i = 0; i < PALLETE_SIZE; i++) {
        const palleteElement = document.createElement('div');
        palleteElement.classList.add('palleteItem');
        palletteContainer.appendChild(palleteElement);
    }
    updatePallete();
}

createPallete();