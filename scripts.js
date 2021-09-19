let order = []
let clickedOrder = []
let score = 0

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')

let shuffleOrder = () => {
    let randomNumber = Math.floor(Math.random() * 4)
    order[order.length] = randomNumber


    for (let i in order){
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i) + 1)
    }
}

let lightColor = (element, number) => {
    number *= 500
    setTimeout(() =>{
        element.classList.add('selected')
    }, number - 250)
    
    setTimeout(()=>{
        element.classList.remove('selected')
    })
}

let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]){
            lose()
            break
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\n Você acertou! Iniciando próxima fase`)
        nextLevel()
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color
    createColorElement(color).classList.add('selected')

    setTimeout(() =>{
        createColorElement(color).classList.remove('selected')     
        checkOrder()
    }, 250)
}

let createColorElement = (color) => {
    if(color == 0) {
        return red
    } 
    else if(color == 1) {
        return green
    }
    else if(color == 2) {
        return blue
    }
    else return yellow
}

let nextLevel = () => {
    score++
    shuffleOrder()
}

let lose = () => {
    alert(`Pontuação: ${score}\n Você perdeu! Iniciando próxima fase, clique em OK paar recomeçar`)
    order = []
    clickedOrder = []
    newGame()
}

let newGame = () => {
    alert(`Bem vindo ao Genius!`)
    score = 0
    nextLevel()
}

red.onclick = () => click(0)
green.onclick = () => click(1)
blue.onclick = () => click(2)
yellow.onclick = () => click(3)

newGame()