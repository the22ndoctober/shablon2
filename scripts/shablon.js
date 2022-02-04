//*******************************GLOBAL************************ */

let filePhotoInput = document.querySelector('#input__photo')
let button = document.querySelector('#btn')
let buttonDownloadS = document.querySelector('#btn-downloadS')
let buttonDownloadIp = document.querySelector('#btn-downloadIp') 
let buttonDownloadFb = document.querySelector('#btn-downloadFb') 

const correctRatio = (width, height, elem)=>{
    console.log(width,height)
    
    if(width >= height){
        elem.style.height = '100%'
        elem.style.width = 'auto'
    }
    if(width < height){
        elem.style.width = '100%'
        elem.style.height = 'auto'
        
    }
}

filePhotoInput.onchange = ()=>{
    let images = [document.querySelector('.images__image-IS'),document.querySelector('.images__image-IP'), document.querySelector('.images__image-FB')]
    images.forEach(async function(image){
        image.src = window.URL.createObjectURL(filePhotoInput.files[0]) 
        setTimeout(()=>{
            correctRatio(image.clientWidth, image.clientHeight, image)
        }, 100) 
    })
}


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

////////////////////////////////////////////////////////////////////////////////////////


//***************************************Font Size LOGIC******************************************* */

/////////////////////////IS////////////////////////

let fs_title_IS_input = document.querySelector('#fs-title-IS-input')
let fs_text1_IS_input = document.querySelector('#fs-text1-IS-input')
let fs_text2_IS_input = document.querySelector('#fs-text2-IS-input')
let fs_text3_IS_input = document.querySelector('#fs-text3-IS-input')

let fs_title_IS = document.querySelector('#fs-title-IS')
let fs_text1_IS = document.querySelector('#fs-text1-IS')
let fs_text2_IS = document.querySelector('#fs-text2-IS')
let fs_text3_IS = document.querySelector('#fs-text3-IS')

let title_IS = document.querySelector('.images__title-IS')
let text1_IS = document.querySelector('.images__text1-IS')
let text2_IS = document.querySelector('.images__text2-IS')
let text3_IS = document.querySelector('.images__text3-IS')

//==================IP=====================//

let fs_title_IP_input = document.querySelector('#fs-title-IP-input')
let fs_text1_IP_input = document.querySelector('#fs-text1-IP-input')
let fs_text2_IP_input = document.querySelector('#fs-text2-IP-input')
let fs_text3_IP_input = document.querySelector('#fs-text3-IP-input')

let fs_title_IP = document.querySelector('#fs-title-IP')
let fs_text1_IP = document.querySelector('#fs-text1-IP')
let fs_text2_IP = document.querySelector('#fs-text2-IP')
let fs_text3_IP = document.querySelector('#fs-text3-IP')

let title_IP = document.querySelector('.images__title-IP')
let text1_IP = document.querySelector('.images__text1-IP')
let text2_IP = document.querySelector('.images__text2-IP')
let text3_IP = document.querySelector('.images__text3-IP')

//===================FB======================//

let fs_title_FB_input = document.querySelector('#fs-title-FB-input')
let fs_text1_FB_input = document.querySelector('#fs-text1-FB-input')
let fs_text2_FB_input = document.querySelector('#fs-text2-FB-input')
let fs_text3_FB_input = document.querySelector('#fs-text3-FB-input')

let fs_title_FB = document.querySelector('#fs-title-FB')
let fs_text1_FB = document.querySelector('#fs-text1-FB')
let fs_text2_FB = document.querySelector('#fs-text2-FB')
let fs_text3_FB = document.querySelector('#fs-text3-FB')

let title_FB = document.querySelector('.images__title-FB')
let text1_FB = document.querySelector('.images__text1-FB')
let text2_FB = document.querySelector('.images__text2-FB')
let text3_FB = document.querySelector('.images__text3-FB')

//===============Funcs======================//

const fs_func = (input, span, elem)=>{
    span.innerHTML = `${input.target.value}px`
    elem.style.fontSize = `${input.target.value}px`
}

//==IS==//

fs_title_IS_input.addEventListener('input', e=>{
    fs_func(e, fs_title_IS, title_IS)
})
fs_text1_IS_input.addEventListener('input', e=>{
    fs_func(e, fs_text1_IS, text1_IS)
})
fs_text2_IS_input.addEventListener('input', e=>{
    fs_func(e, fs_text2_IS, text2_IS)
})
fs_text3_IS_input.addEventListener('input', e=>{
    fs_func(e, fs_text3_IS, text3_IS)
})

//==IP==//

fs_title_IP_input.addEventListener('input', e=>{
    fs_func(e, fs_title_IP, title_IP)
})
fs_text1_IP_input.addEventListener('input', e=>{
    fs_func(e, fs_text1_IP, text1_IP)
})
fs_text2_IP_input.addEventListener('input', e=>{
    fs_func(e, fs_text2_IP, text2_IP)
})
fs_text3_IP_input.addEventListener('input', e=>{
    fs_func(e, fs_text3_IP, text3_IP)
})

//==FB==//

fs_title_FB_input.addEventListener('input', e=>{
    fs_func(e, fs_title_FB, title_FB)
})
fs_text1_FB_input.addEventListener('input', e=>{
    fs_func(e, fs_text1_FB, text1_FB)
})
fs_text2_FB_input.addEventListener('input', e=>{
    fs_func(e, fs_text2_FB, text2_FB)
})
fs_text3_FB_input.addEventListener('input', e=>{
    fs_func(e, fs_text3_FB, text3_FB)
})


//***************************************Translate LOGIC******************************************* */

//=========IS===========//
let photoObj_IS = {
    translateX: 0,
    translateY: 0,
    scale: 1
}
let containerObj_IS = {
    translateX: 0,
    translateY: 0,
    scale: 1
}
let titleObj_IS = {
    translateX: 0,
    translateY: 0
}
let text1Obj_IS = {
    translateX: 0,
    translateY: 0
}
let text2Obj_IS = {
    translateX: 0,
    translateY: 0
}
let text3Obj_IS = {
    translateX: 0,
    translateY: 0
}

let scale_photo_IS_input = document.querySelector('#scale-photo-IS-input')
let scale_container_IS_input = document.querySelector('#scale-container-IS-input')
let posX_photo_IS_input = document.querySelector('#posX-photo-IS-input')
let posY_photo_IS_input = document.querySelector('#posY-photo-IS-input')
let posX_container_IS_input = document.querySelector('#posX-container-IS-input')
let posY_container_IS_input = document.querySelector('#posY-container-IS-input')

let scale_photo_IS = document.querySelector('#scale-photo-IS')
let scale_container_IS = document.querySelector('#scale-container-IS')
let posX_photo_IS = document.querySelector('#posX-photo-IS')
let posY_photo_IS = document.querySelector('#posY-photo-IS')
let posX_container_IS = document.querySelector('#posX-container-IS')
let posY_container_IS = document.querySelector('#posY-container-IS')

let photo_IS = document.querySelector('.images__image-IS')
let container_IS = document.querySelector('.images__imageContainer-IS')

let posX_title_IS_input = document.querySelector('#posX-title-IS-input')
let posY_title_IS_input = document.querySelector('#posY-title-IS-input')
let posX_title_IS = document.querySelector('#posX-title-IS')
let posY_title_IS = document.querySelector('#posY-title-IS')

let posX_text1_IS_input = document.querySelector('#posX-text1-IS-input')
let posY_text1_IS_input = document.querySelector('#posY-text1-IS-input')
let posX_text1_IS = document.querySelector('#posX-text1-IS')
let posY_text1_IS = document.querySelector('#posY-text1-IS')

let posX_text2_IS_input = document.querySelector('#posX-text2-IS-input')
let posY_text2_IS_input = document.querySelector('#posY-text2-IS-input')
let posX_text2_IS = document.querySelector('#posX-text2-IS')
let posY_text2_IS = document.querySelector('#posY-text2-IS')

let posX_text3_IS_input = document.querySelector('#posX-text3-IS-input')
let posY_text3_IS_input = document.querySelector('#posY-text3-IS-input')
let posX_text3_IS = document.querySelector('#posX-text3-IS')
let posY_text3_IS = document.querySelector('#posY-text3-IS')

//=========IP===========//
let photoObj_IP = {
    translateX: 0,
    translateY: 0,
    scale: 1
}
let containerObj_IP = {
    translateX: 0,
    translateY: 0,
    scale: 1
}
let titleObj_IP = {
    translateX: 0,
    translateY: 0
}
let text1Obj_IP = {
    translateX: 0,
    translateY: 0
}
let text2Obj_IP = {
    translateX: 0,
    translateY: 0
}
let text3Obj_IP = {
    translateX: 0,
    translateY: 0
}

let scale_photo_IP_input = document.querySelector('#scale-photo-IP-input')
let scale_container_IP_input = document.querySelector('#scale-container-IP-input')
let posX_photo_IP_input = document.querySelector('#posX-photo-IP-input')
let posY_photo_IP_input = document.querySelector('#posY-photo-IP-input')
let posX_container_IP_input = document.querySelector('#posX-container-IP-input')
let posY_container_IP_input = document.querySelector('#posY-container-IP-input')

let scale_photo_IP = document.querySelector('#scale-photo-IP')
let scale_container_IP = document.querySelector('#scale-container-IP')
let posX_photo_IP = document.querySelector('#posX-photo-IP')
let posY_photo_IP = document.querySelector('#posY-photo-IP')
let posX_container_IP = document.querySelector('#posX-container-IP')
let posY_container_IP = document.querySelector('#posY-container-IP')

let photo_IP = document.querySelector('.images__image-IP')
let container_IP = document.querySelector('.images__imageContainer-IP')

let posX_title_IP_input = document.querySelector('#posX-title-IP-input')
let posY_title_IP_input = document.querySelector('#posY-title-IP-input')
let posX_title_IP = document.querySelector('#posX-title-IP')
let posY_title_IP = document.querySelector('#posY-title-IP')

let posX_text1_IP_input = document.querySelector('#posX-text1-IP-input')
let posY_text1_IP_input = document.querySelector('#posY-text1-IP-input')
let posX_text1_IP = document.querySelector('#posX-text1-IP')
let posY_text1_IP = document.querySelector('#posY-text1-IP')

let posX_text2_IP_input = document.querySelector('#posX-text2-IP-input')
let posY_text2_IP_input = document.querySelector('#posY-text2-IP-input')
let posX_text2_IP = document.querySelector('#posX-text2-IP')
let posY_text2_IP = document.querySelector('#posY-text2-IP')

let posX_text3_IP_input = document.querySelector('#posX-text3-IP-input')
let posY_text3_IP_input = document.querySelector('#posY-text3-IP-input')
let posX_text3_IP = document.querySelector('#posX-text3-IP')
let posY_text3_IP = document.querySelector('#posY-text3-IP')

//=========FB===========//

let photoObj_FB = {
    translateX: 0,
    translateY: 0,
    scale: 1
}
let containerObj_FB = {
    translateX: 0,
    translateY: 0,
    scale: 1
}
let titleObj_FB = {
    translateX: 0,
    translateY: 0
}
let text1Obj_FB = {
    translateX: 0,
    translateY: 0
}
let text2Obj_FB = {
    translateX: 0,
    translateY: 0
}
let text3Obj_FB = {
    translateX: 0,
    translateY: 0
}

let scale_photo_FB_input = document.querySelector('#scale-photo-FB-input')
let scale_container_FB_input = document.querySelector('#scale-container-FB-input')
let posX_photo_FB_input = document.querySelector('#posX-photo-FB-input')
let posY_photo_FB_input = document.querySelector('#posY-photo-FB-input')
let posX_container_FB_input = document.querySelector('#posX-container-FB-input')
let posY_container_FB_input = document.querySelector('#posY-container-FB-input')

let scale_photo_FB = document.querySelector('#scale-photo-FB')
let scale_container_FB = document.querySelector('#scale-container-FB')
let posX_photo_FB = document.querySelector('#posX-photo-FB')
let posY_photo_FB = document.querySelector('#posY-photo-FB')
let posX_container_FB = document.querySelector('#posX-container-FB')
let posY_container_FB = document.querySelector('#posY-container-FB')

let photo_FB = document.querySelector('.images__image-FB')
let container_FB = document.querySelector('.images__imageContainer-FB')

let posX_title_FB_input = document.querySelector('#posX-title-FB-input')
let posY_title_FB_input = document.querySelector('#posY-title-FB-input')
let posX_title_FB = document.querySelector('#posX-title-FB')
let posY_title_FB = document.querySelector('#posY-title-FB')

let posX_text1_FB_input = document.querySelector('#posX-text1-FB-input')
let posY_text1_FB_input = document.querySelector('#posY-text1-FB-input')
let posX_text1_FB = document.querySelector('#posX-text1-FB')
let posY_text1_FB = document.querySelector('#posY-text1-FB')

let posX_text2_FB_input = document.querySelector('#posX-text2-FB-input')
let posY_text2_FB_input = document.querySelector('#posY-text2-FB-input')
let posX_text2_FB = document.querySelector('#posX-text2-FB')
let posY_text2_FB = document.querySelector('#posY-text2-FB')

let posX_text3_FB_input = document.querySelector('#posX-text3-FB-input')
let posY_text3_FB_input = document.querySelector('#posY-text3-FB-input')
let posX_text3_FB = document.querySelector('#posX-text3-FB')
let posY_text3_FB = document.querySelector('#posY-text3-FB')
//===============Funcs======================//

//***********GLOBAL============ */
const scaleChange = (input, elem, span, obj)=>{
    if(input.target){
        obj.scale = input.target.value
        span.innerHTML = span.innerHTML = input.target.value
    }
    else{
        obj.scale = input.value
        span.innerHTML = input.value
    }
    elem.style.transform = `translateX(${obj.translateX}px) translateY(${obj.translateY}px) scale(${obj.scale})`
    
}
const translateXChange = (input, elem, span, obj)=>{
    if(input.target){
        obj.translateX = input.target.value
        span.innerHTML = input.target.value
    }
    else{
        obj.translateX = input.value
        span.innerHTML = input.value
    }
    if(obj.scale){
        elem.style.transform = `translateX(${obj.translateX}px) translateY(${obj.translateY}px) scale(${obj.scale})`
    }
    else{
        elem.style.transform = `translateX(${obj.translateX}px) translateY(${obj.translateY}px)`
    }
    
}
const translateYChange = (input, elem, span, obj)=>{
    if(input.target){
        obj.translateY = input.target.value
        span.innerHTML = input.target.value
    }
    else{
        obj.translateY = input.value
        span.innerHTML = input.value
    }
    
    if(obj.scale){
        elem.style.transform = `translateX(${obj.translateX}px) translateY(${obj.translateY}px) scale(${obj.scale})`
    }
    else{
        elem.style.transform = `translateX(${obj.translateX}px) translateY(${obj.translateY}px)`
    }
    
    
}

//==IS==//

scale_photo_IS_input.addEventListener('input', e=>{
    scaleChange(e, photo_IS, scale_photo_IS, photoObj_IS)
})
posX_photo_IS_input.addEventListener('input', e=>{
    translateXChange(e, photo_IS, posX_photo_IS, photoObj_IS)
})
posY_photo_IS_input.addEventListener('input', e=>{
    translateYChange(e, photo_IS, posY_photo_IS, photoObj_IS)
})

scale_container_IS_input.addEventListener('input', e=>{
    scaleChange(e, container_IS, scale_container_IS, containerObj_IS)
})
posX_container_IS_input.addEventListener('input', e=>{
    translateXChange(e, container_IS, posX_container_IS, containerObj_IS)
})
posY_container_IS_input.addEventListener('input', e=>{
    translateYChange(e, container_IS, posY_container_IS, containerObj_IS)
})


posX_title_IS_input.addEventListener('input', e=>{
    translateXChange(e, title_IS, posX_title_IS, titleObj_IS)
})
posY_title_IS_input.addEventListener('input', e=>{
    translateYChange(e, title_IS, posY_title_IS, titleObj_IS)
})

posX_text1_IS_input.addEventListener('input', e=>{
    translateXChange(e, text1_IS, posX_text1_IS, text1Obj_IS)
})
posY_text1_IS_input.addEventListener('input', e=>{
    translateYChange(e, text1_IS, posY_text1_IS, text1Obj_IS)
})

posX_text2_IS_input.addEventListener('input', e=>{
    translateXChange(e, text2_IS, posX_text2_IS, text2Obj_IS)
})
posY_text2_IS_input.addEventListener('input', e=>{
    translateYChange(e, text2_IS, posY_text2_IS, text2Obj_IS)
})

posX_text3_IS_input.addEventListener('input', e=>{
    translateXChange(e, text3_IS, posX_text3_IS, text3Obj_IS)
})
posY_text3_IS_input.addEventListener('input', e=>{
    translateYChange(e, text3_IS, posY_text3_IS, text3Obj_IS)
})

//==IP==//

scale_photo_IP_input.addEventListener('input', e=>{
    scaleChange(e, photo_IP, scale_photo_IP, photoObj_IP)
})
posX_photo_IP_input.addEventListener('input', e=>{
    translateXChange(e, photo_IP, posX_photo_IP, photoObj_IP)
})
posY_photo_IP_input.addEventListener('input', e=>{
    translateYChange(e, photo_IP, posY_photo_IP, photoObj_IP)
})

scale_container_IP_input.addEventListener('input', e=>{
    scaleChange(e, container_IP, scale_container_IP, containerObj_IP)
})
posX_container_IP_input.addEventListener('input', e=>{
    translateXChange(e, container_IP, posX_container_IP, containerObj_IP)
})
posY_container_IP_input.addEventListener('input', e=>{
    translateYChange(e, container_IP, posY_container_IP, containerObj_IP)
})


posX_title_IP_input.addEventListener('input', e=>{
    translateXChange(e, title_IP, posX_title_IP, titleObj_IP)
})
posY_title_IP_input.addEventListener('input', e=>{
    translateYChange(e, title_IP, posY_title_IP, titleObj_IP)
})

posX_text1_IP_input.addEventListener('input', e=>{
    translateXChange(e, text1_IP, posX_text1_IP, text1Obj_IP)
})
posY_text1_IP_input.addEventListener('input', e=>{
    translateYChange(e, text1_IP, posY_text1_IP, text1Obj_IP)
})

posX_text2_IP_input.addEventListener('input', e=>{
    translateXChange(e, text2_IP, posX_text2_IP, text2Obj_IP)
})
posY_text2_IP_input.addEventListener('input', e=>{
    translateYChange(e, text2_IP, posY_text2_IP, text2Obj_IP)
})

posX_text3_IP_input.addEventListener('input', e=>{
    translateXChange(e, text3_IP, posX_text3_IP, text3Obj_IP)
})
posY_text3_IP_input.addEventListener('input', e=>{
    translateYChange(e, text3_IP, posY_text3_IP, text3Obj_IP)
})

//==FB==//

scale_photo_FB_input.addEventListener('input', e=>{
    scaleChange(e, photo_FB, scale_photo_FB, photoObj_FB)
})
posX_photo_FB_input.addEventListener('input', e=>{
    translateXChange(e, photo_FB, posX_photo_FB, photoObj_FB)
})
posY_photo_FB_input.addEventListener('input', e=>{
    translateYChange(e, photo_FB, posY_photo_FB, photoObj_FB)
})

scale_container_FB_input.addEventListener('input', e=>{
    scaleChange(e, container_FB, scale_container_FB, containerObj_FB)
})
posX_container_FB_input.addEventListener('input', e=>{
    translateXChange(e, container_FB, posX_container_FB, containerObj_FB)
})
posY_container_FB_input.addEventListener('input', e=>{
    translateYChange(e, container_FB, posY_container_FB, containerObj_FB)
})


posX_title_FB_input.addEventListener('input', e=>{
    translateXChange(e, title_FB, posX_title_FB, titleObj_FB)
})
posY_title_FB_input.addEventListener('input', e=>{
    translateYChange(e, title_FB, posY_title_FB, titleObj_FB)
})

posX_text1_FB_input.addEventListener('input', e=>{
    translateXChange(e, text1_FB, posX_text1_FB, text1Obj_FB)
})
posY_text1_FB_input.addEventListener('input', e=>{
    translateYChange(e, text1_FB, posY_text1_FB, text1Obj_FB)
})

posX_text2_FB_input.addEventListener('input', e=>{
    translateXChange(e, text2_FB, posX_text2_FB, text2Obj_FB)
})
posY_text2_FB_input.addEventListener('input', e=>{
    translateYChange(e, text2_FB, posY_text2_FB, text2Obj_FB)
})

posX_text3_FB_input.addEventListener('input', e=>{
    translateXChange(e, text3_FB, posX_text3_FB, text3Obj_FB)
})
posY_text3_FB_input.addEventListener('input', e=>{
    translateYChange(e, text3_FB, posY_text3_FB, text3Obj_FB)
})

//************************************************************************************************************* */

//===================================================GLOBAL====================================================//

//************************************************************************************************************* */

let btnAlign = document.querySelector('#btn-align-center')

btnAlign.onclick = ()=>{
    scale_photo_IS_input.value = 1
    scale_photo_IP_input.value = 1
    scale_photo_FB_input.value = 1

    scale_container_IS_input.value = 1
    scale_container_IP_input.value = 1
    scale_container_FB_input.value = 1

    posX_photo_IS_input.value = 0
    posX_container_IS_input.value = 0
    posX_title_IS_input.value = 0
    posX_text1_IS_input.value = 0
    posX_text2_IS_input.value = 0
    posX_text3_IS_input.value = 0

    posX_photo_IP_input.value = 0
    posX_container_IP_input.value = 0
    posX_title_IP_input.value = 0
    posX_text1_IP_input.value = 0
    posX_text2_IP_input.value = 0
    posX_text3_IP_input.value = 0

    posX_photo_FB_input.value = 0
    posX_container_FB_input.value = 0
    posX_title_FB_input.value = 0
    posX_text1_FB_input.value = 0
    posX_text2_FB_input.value = 0
    posX_text3_FB_input.value = 0

    posY_photo_IS_input.value = 0
    posY_container_IS_input.value = 0
    posY_title_IS_input.value = 0
    posY_text1_IS_input.value = 0
    posY_text2_IS_input.value = 0
    posY_text3_IS_input.value = 0

    posY_photo_IP_input.value = 0
    posY_container_IP_input.value = 0
    posY_title_IP_input.value = 0
    posY_text1_IP_input.value = 0
    posY_text2_IP_input.value = 0
    posY_text3_IP_input.value = 0

    posY_photo_FB_input.value = 0
    posY_container_FB_input.value = 0
    posY_title_FB_input.value = 0
    posY_text1_FB_input.value = 0
    posY_text2_FB_input.value = 0
    posY_text3_FB_input.value = 0

    //IS//

    scaleChange(scale_photo_IS_input, photo_IS, scale_photo_IS, photoObj_IS)
    translateXChange(posX_photo_IS_input, photo_IS, posX_photo_IS, photoObj_IS)
    translateYChange(posY_photo_IS_input, photo_IS, posY_photo_IS, photoObj_IS)
    scaleChange(scale_container_IS_input, container_IS, scale_container_IS, containerObj_IS)
    translateXChange(posX_container_IS_input, container_IS, posX_container_IS, containerObj_IS)
    translateYChange(posY_container_IS_input, container_IS, posY_container_IS, containerObj_IS)
    translateXChange(posX_title_IS_input, title_IS, posX_title_IS, titleObj_IS)
    translateYChange(posY_title_IS_input, title_IS, posY_title_IS, titleObj_IS)
    translateXChange(posX_text1_IS_input, text1_IS, posX_text1_IS, text1Obj_IS)
    translateYChange(posY_text1_IS_input, text1_IS, posY_text1_IS, text1Obj_IS)
    translateXChange(posX_text2_IS_input, text2_IS, posX_text2_IS, text2Obj_IS)
    translateYChange(posY_text2_IS_input, text2_IS, posY_text2_IS, text2Obj_IS)
    translateXChange(posX_text3_IS_input, text3_IS, posX_text3_IS, text3Obj_IS)
    translateYChange(posY_text3_IS_input, text3_IS, posY_text3_IS, text3Obj_IS)

    //IP//

    scaleChange(scale_photo_IP_input, photo_IP, scale_photo_IP, photoObj_IP)
    translateXChange(posX_photo_IP_input, photo_IP, posX_photo_IP, photoObj_IP)
    translateYChange(posY_photo_IP_input, photo_IP, posY_photo_IP, photoObj_IP)
    scaleChange(scale_container_IP_input, container_IP, scale_container_IP, containerObj_IP)
    translateXChange(posX_container_IP_input, container_IP, posX_container_IP, containerObj_IP)
    translateYChange(posY_container_IP_input, container_IP, posY_container_IP, containerObj_IP)
    translateXChange(posX_title_IP_input, title_IP, posX_title_IP, titleObj_IP)
    translateYChange(posY_title_IP_input, title_IP, posY_title_IP, titleObj_IP)
    translateXChange(posX_text1_IP_input, text1_IP, posX_text1_IP, text1Obj_IP)
    translateYChange(posY_text1_IP_input, text1_IP, posY_text1_IP, text1Obj_IP)
    translateXChange(posX_text2_IP_input, text2_IP, posX_text2_IP, text2Obj_IP)
    translateYChange(posY_text2_IP_input, text2_IP, posY_text2_IP, text2Obj_IP)
    translateXChange(posX_text3_IP_input, text3_IP, posX_text3_IP, text3Obj_IP)
    translateYChange(posY_text3_IP_input, text3_IP, posY_text3_IP, text3Obj_IP)

    //FB//
    
    scaleChange(scale_photo_FB_input, photo_FB, scale_photo_FB, photoObj_FB)
    translateXChange(posX_photo_FB_input, photo_FB, posX_photo_FB, photoObj_FB)
    translateYChange(posY_photo_FB_input, photo_FB, posY_photo_FB, photoObj_FB)
    scaleChange(scale_container_FB_input, container_FB, scale_container_FB, containerObj_FB)
    translateXChange(posX_container_FB_input, container_FB, posX_container_FB, containerObj_FB)
    translateYChange(posY_container_FB_input, container_FB, posY_container_FB, containerObj_FB)
    translateXChange(posX_title_FB_input, title_FB, posX_title_FB, titleObj_FB)
    translateYChange(posY_title_FB_input, title_FB, posY_title_FB, titleObj_FB)
    translateXChange(posX_text1_FB_input, text1_FB, posX_text1_FB, text1Obj_FB)
    translateYChange(posY_text1_FB_input, text1_FB, posY_text1_FB, text1Obj_FB)
    translateXChange(posX_text2_FB_input, text2_FB, posX_text2_FB, text2Obj_FB)
    translateYChange(posY_text2_FB_input, text2_FB, posY_text2_FB, text2Obj_FB)
    translateXChange(posX_text3_FB_input, text3_FB, posX_text3_FB, text3Obj_FB)
    translateYChange(posY_text3_FB_input, text3_FB, posY_text3_FB, text3Obj_FB)
    
}


button.onclick = ()=> {
    let storyWrapper = document.querySelector('.images__IS')
    let instPostWrapper = document.querySelector('.images__IP')
    let fbWrapper = document.querySelector('.images__FB')

    storyWrapper.classList.add('wrapperStories-download')
    instPostWrapper.classList.add('wrapperStories-download')
    fbWrapper.classList.add('wrapperStories-download')

    html2canvas(storyWrapper).then(canvas => {  
        let anchorTag = document.createElement("a");
        document.body.appendChild(anchorTag);
        anchorTag.crossOrigin = "anonymous"
        anchorTag.download = "story.jpg";
        anchorTag.href = canvas.toDataURL();
        anchorTag.target = '_blank';
        anchorTag.click();
        anchorTag.remove()
    });

    html2canvas(instPostWrapper).then(function (canvas) {                   
        let anchorTag = document.createElement("a");
        document.body.appendChild(anchorTag);
        anchorTag.crossOrigin = "anonymous"
        anchorTag.download = "Ip.jpg";
        anchorTag.href = canvas.toDataURL();
        anchorTag.target = '_blank';
        anchorTag.click();
        anchorTag.remove()
     });
     
    html2canvas(fbWrapper).then(function (canvas) {                   
        let anchorTag = document.createElement("a");
        document.body.appendChild(anchorTag);
        anchorTag.crossOrigin = "anonymous"
        anchorTag.download = "Fb.jpg";
        anchorTag.href = canvas.toDataURL();
        anchorTag.target = '_blank';
        anchorTag.click();
        anchorTag.remove()
    });
    storyWrapper.classList.remove('wrapperStories-download')
    instPostWrapper.classList.remove('wrapperStories-download')
    fbWrapper.classList.remove('wrapperStories-download')
}

buttonDownloadS.onclick = ()=>{
    let storyWrapper = document.querySelector('.images__IS')
    storyWrapper.classList.add('wrapperStories-download')
    html2canvas(storyWrapper).then(canvas => {  
        let anchorTag = document.createElement("a");
        document.body.appendChild(anchorTag);
        anchorTag.crossOrigin = "anonymous"
        anchorTag.download = "story.jpg";
        anchorTag.href = canvas.toDataURL();
        anchorTag.target = '_blank';
        anchorTag.click();
        anchorTag.remove()
    });
    storyWrapper.classList.remove('wrapperStories-download')
}

buttonDownloadIp.onclick = ()=>{
    let instPostWrapper = document.querySelector('.images__IP')
    instPostWrapper.classList.add('wrapperStories-download')
    html2canvas(instPostWrapper).then(function (canvas) {                   
        let anchorTag = document.createElement("a");
        document.body.appendChild(anchorTag);
        anchorTag.crossOrigin = "anonymous"
        anchorTag.download = "Ip.jpg";
        anchorTag.href = canvas.toDataURL();
        anchorTag.target = '_blank';
        anchorTag.click();
        anchorTag.remove()
     });
    
    instPostWrapper.classList.remove('wrapperStories-download')
}

buttonDownloadFb.onclick = ()=>{
    let fbWrapper = document.querySelector('.images__FB')
    fbWrapper.classList.add('wrapperStories-download')
    html2canvas(fbWrapper).then(function (canvas) {                   
        let anchorTag = document.createElement("a");
        document.body.appendChild(anchorTag);
        anchorTag.crossOrigin = "anonymous"
        anchorTag.download = "Fb.jpg";
        anchorTag.href = canvas.toDataURL();
        anchorTag.target = '_blank';
        anchorTag.click();
        anchorTag.remove()
    });
    fbWrapper.classList.remove('wrapperStories-download')
}