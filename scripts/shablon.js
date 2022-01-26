//****************************TEXT INPUT LOGIC********************************* */

let inputTitle = document.querySelector('.options__inputTitle')
let inputText1 = document.querySelector('.options__inputText1')
let inputText2 = document.querySelector('.options__inputText2')
let inputText3 = document.querySelector('.options__inputText3')

let titles = document.querySelectorAll('.title')
let texts1 = document.querySelectorAll('.text1')
let texts2 = document.querySelectorAll('.text2')
let texts3 = document.querySelectorAll('.text3')

inputTitle.oninput = ()=>{
    titles.forEach(title=>{
        title.innerHTML = inputTitle.value
    })
}

inputText1.oninput = ()=>{
    texts1.forEach(text=>{
        text.innerHTML = inputText1.value
    })
}

inputText2.oninput = ()=>{
    texts2.forEach(text=>{
        text.innerHTML = inputText2.value
    })
}

inputText3.oninput = ()=>{
    texts3.forEach(text=>{
        text.innerHTML = inputText3.value
    })
}