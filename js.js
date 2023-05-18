let background = document.querySelector('#mudaCor')
let botaoClick = document.querySelector('#btn__clickMe')

let hastag = '#'
let cores = '0123456789ABCDEF'

function mudaBack() {
    let codigoHexadecimal = document.querySelector('#codigoHexadecimal')

    codigoHexadecimal.style.display = 'block'

    for (let i = 0; i < 6; i++) {
        let colorir = cores[Math.floor(Math.random() * 16)]
        console.log(colorir)

        codigoHexadecimal.innerHTML = `${hastag += colorir}`
        
    }
}