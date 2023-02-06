'use strict'
const nota1 = document.getElementById('nota1')
const nota2 = document.getElementById('nota2')
const nota3 = document.getElementById('nota3')
const nota4 = document.getElementById('nota4')
const btnMedia = document.getElementById('btnMedia')
const situacao = document.getElementById('situacao')

function calcularMedia() {
    const mediaNotas = (Number(nota1.value) + Number(nota2.value) + Number(nota3.value) + Number(nota4.value)) / 4

    if (mediaNotas > 10) {
        situacao.textContent = 'Erro'
        situacao.style.color = 'red'
        situacao.style.border = '2px solid red'
    }
    else if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
        situacao.textContent = 'Erro'
        situacao.style.color = 'red'
        situacao.style.border = '2px solid red'
    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        situacao.textContent = 'Erro'
        situacao.style.color = 'red'
        situacao.style.border = '2px solid red'
    } else {
        if (mediaNotas >= 5) {

            situacao.textContent = 'Aprovado'
            situacao.style.color = 'green'
            situacao.style.border = '2px solid green'

        }

        else {
            situacao.textContent = 'Reprovado'
            situacao.style.color = 'red'
            situacao.style.borderBottom = '2px solid red'

        }
    }




}
btnMedia.addEventListener('click', calcularMedia)

