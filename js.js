let botaoClick = document.querySelector('#btn__clickMe')
let botaoCopy = document.querySelector('#btn__copy')
let botaoReset = document.querySelector('#btn__reset')
let espaçoMudaCor = document.querySelector('#ondeMudaraCor') 
let codigoHexadecimal = document.querySelector('#codigoHexadecimal')

let hastag = '#'
let cores = '0123456789ABCDEF'

botaoClick.style.display = 'block'

function mudaBack() {
    codigoHexadecimal.style.display = 'block'

    for (let i = 0; i < 6; i++) {
        let colorir = cores[Math.floor(Math.random() * 16)]
        let imprimir = (codigoHexadecimal.innerHTML = `${hastag += colorir}`)

        espaçoMudaCor.style.background = imprimir
    }

    botaoCopy.style.display = 'none'
    botaoClick.style.display = 'none'
    botaoReset.style.display = 'block'
}

function reset() {
    location.reload()
}
