const container = document.querySelector('.container')
const input = document.querySelector('input')
const generateGridBtn = document.querySelector('.gen-btn')

generateGridBtn.addEventListener('click', setGridSize)

let gridSize = 8 * 8


function setGridSize() {
    if(isNaN(input.value)) input.value = ''
    if(input.value > 100) {
        alert('Sorry, The maximum grid size is 100')
        return
    } 

    gridSize = input.value * input.value

    container.innerHTML = ''
    container.style.gridTemplateColumns = `repeat(${input.value}, 1fr)`

    for (let i = 0; i < gridSize; i++) {
        const square = document.createElement('div');
        square.className = 'square'
        container.appendChild(square)
    }

    const squares = document.querySelectorAll('.square')
    squares.forEach(square => {
    square.addEventListener('mouseover', (e) => {
        const redValue = Math.floor(Math.random() * 256)
        const blueValue = Math.floor(Math.random() * 256)
        const greenValue = Math.floor(Math.random() * 256)
        
        e.target.style.backgroundColor = `rgb(${redValue} ${blueValue} ${greenValue})`
    })
    square.addEventListener('mouseout', (e) => {
        setTimeout(() => {
            e.target.style.backgroundColor = 'initial'
        }, 1000);
    })
})
}



