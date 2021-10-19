let order = []
let clickedOrder = []
let score = 0

// 0 = verder; 1 = vermelho; 2 = amarelo; 3 = azul; 

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')

const shuffleOrder = async () => {
    let colorOrder = Math.floor( Math.random() * 4 )
    order[order.length] = colorOrder;
    clickedOrder = []

    for(let i in order){
        let elementColor = createElemet(order[i])
        lightColor(elementColor, Number(i) + 1)
    }
}

const lightColor = async (element, number) => {
    number = number * 700
    
    setTimeout( () => {
        element.classList.add('selected')
    }, number - 500 )

    setTimeout( () => {
        element.classList.remove('selected')
    }, number)
}
const checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver()
            break
        }
    }

    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score} \nVocê acertou! Iniciando proximo nivel!`)
        nextLevel()
    }
}

const click = (color) => {
    clickedOrder[clickedOrder.length] = color
    createElemet(color).classList.add('selected')

    setTimeout(() => {
        createElemet(color).classList.remove('selected')
        checkOrder();
    }, 250)

}

const createElemet = (color) => {
    if(color == 0){
        return green
    }else if(color == 1){
        return red
    }else if(color == 2){
        return yellow
    }else if(color == 3){
        return blue
    }
}

const nextLevel = () => {
    score ++
    shuffleOrder()
}

const gameOver = () => {
    alert(`PERDEU: Pontuação: ${score}\nClique em ok pra iniciar um novo jogo!`)
    order = []
    clickedOrder = []
    score = 0

    playGame()
} 

const playGame = () => {
    alert('Seu jogo foi iniciado')
    nextLevel()
}

green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

playGame()