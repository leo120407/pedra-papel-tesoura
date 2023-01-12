function res(a,b) {
    ressec = document.getElementById('ressec')
    if (ressec != null) {ressec.remove()}
    var cpu = Math.floor(Math.random() * 3) + 1
    var ressec = document.createElement('section')
    ressec.setAttribute('id', 'ressec')
    document.body.appendChild(ressec)
    var pimgsrc = b
    if (cpu == 1) {
        var cpuimgsrc = 'papel.png'
        if (a == 1) {
            var result = 'EMPATOU COM ELA'
            ressec.style.backgroundColor = '#ffae3d'
        }
        else if (a == 2) {
            var result = 'GANHOU DELA'
            ressec.style.backgroundColor = '#2bfa0a'
        }   
        else {
            var result = 'PERDEU PARA ELA'
            ressec.style.backgroundColor = '#fa1f0a'
        }     
    }
    else if (cpu == 2) {
        var cpuimgsrc = 'tesoura.png'
        if (a == 1) {
            var result = 'PERDEU PARA ELA'
            ressec.style.backgroundColor = '#fa1f0a'
        }
        else if (a == 2) {
            var result = 'EMPATOU COM ELA'
            ressec.style.backgroundColor = '#ffae3d'
        }   
        else {
            var result = 'GANHOU DELA'
            ressec.style.backgroundColor = '#2bfa0a'
        } 
    }
    else {
        var cpuimgsrc = 'pedra.png'
        if (a == 1) {
            var result = 'GANHOU DELA'
            ressec.style.backgroundColor = '#2bfa0a'
        }
        else if (a == 2) {
            var result = 'PERDEU PARA ELA'
            ressec.style.backgroundColor = '#fa1f0a'
        }   
        else {
            var result = 'EMPATOU COM ELA'
            ressec.style.backgroundColor = '#ffae3d'
        } 
    }
    ressec.innerHTML += `A CPU ESCOLHEU <img id="img" src="${cpuimgsrc}" alt=""> E VOCÊ <img id="img" src="${pimgsrc}" alt=""> LOGO VOCÊ ${result}`
}