let num1 = window.document.getElementById('num1')
let num2 = window.document.getElementById('num2')
let res = window.document.getElementById('res')

function enviar() {
    if(num1.value < num2.value) {
        res.innerHTML = '<p>Muito bem! O <strong>campo B</strong> é maior que o <strong>campo A</strong>. &#x1F601</p>'
    }else {
        res.innerHTML = '<p>Poxa, o <strong>campo A</strong> é maior que o <strong>campo B</strong>. &#x1F61E </p>'
    }    if(num1.value == num2.value) {
        window.alert('Por favor, adicione outros valores aos campos pois ambos tem o mesmo valor!')
        res.innerHTML = ''
    }
}