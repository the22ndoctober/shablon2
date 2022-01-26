import resize from '../scripts/resize.js'

resize.resizeS(110,110)
resize.resizeIp(60,60)
resize.resizeFb(60,60)
resize.containerFbresize()
resize.containerIpresize()
resize.containerSresize()

//global variables
let button = document.querySelector('#btn')
let buttonDownloadS = document.querySelector('#btn-downloadS')
let buttonDownloadIp = document.querySelector('#btn-downloadIp') 
let buttonDownloadFb = document.querySelector('#btn-downloadFb') 
let buttonAlign = document.querySelector('#btn-align-center')
let photoDrag = Array.from(document.querySelectorAll('.photo-drag'))
let photoWrappers = Array.from(document.querySelectorAll('.photo'))
let photoPath = document.querySelector('#file_path')
let dragStart = {x:0, y:0}
let dragEnd = {x:0, y:0}

//'photo' variables
let photoS = document.querySelector('.photoSContainer')
let photoIp = document.querySelector('.photoIpContainer')
let photoFb = document.querySelector('.photoFbContainer')

let photoPositionFaderS = document.querySelector('#positionPhotoS')
let photoPositionFaderIp = document.querySelector('#positionPhotoIp')
let photoPositionFaderFb = document.querySelector('#positionPhotoFb')

///////////////////////////////////////////////////////////////////////
//****** 'photo' functions *******//
const photoPositionFaderS_change = ()=>{
    photoS.style.top = Math.abs(photoPositionFaderS.value) + "px"
}
const photoPositionFaderIp_change = ()=>{
    photoIp.style.top = Math.abs(photoPositionFaderIp.value) + "px"
}
const photoPositionFaderFb_change = ()=>{
    photoFb.style.top = Math.abs(photoPositionFaderFb.value) + "px"
}

    //'photo' events//
photoPositionFaderS.oninput = photoPositionFaderS_change
photoPositionFaderIp.oninput = photoPositionFaderIp_change
photoPositionFaderFb.oninput = photoPositionFaderFb_change

///////////////////////////////////
//'name' variables
let nameWrapperS = document.querySelector('.nameSWrapper')
let nameWrapperIp = document.querySelector('.nameIpWrapper')
let nameWrapperFb = document.querySelector('.nameFbWrapper')

let nameCurrentValues = [document.querySelector('.nameS'), document.querySelector('.nameIp'), document.querySelector('.nameFb')]
let nameInputValue = document.querySelector('#inputName')

let nameFontSizeS = document.querySelector('#nameFontSize_S')
let nameFontSizeCounterS = document.querySelector('.nameFontSize_S-counter')

let nameFontSizeIp = document.querySelector('#nameFontSize_Ip')
let nameFontSizeCounterIp = document.querySelector('.nameFontSize_Ip-counter')

let nameFontSizeFb = document.querySelector('#nameFontSize_Fb')
let nameFontSizeCounterFb = document.querySelector('.nameFontSize_Fb-counter')

let namePositionFaderS = document.querySelector('#positionNameS')
let namePositionFaderIp = document.querySelector('#positionNameIp')
let namePositionFaderFb = document.querySelector('#positionNameFb')

//****** 'name' functions *******//
    //value funcs//
const nameValue_change = ()=>{
    nameCurrentValues.forEach(elem=>{
        elem.innerHTML = nameInputValue.value
    })
}

    //font-size funcs//
const nameFontSizeS_change = ()=>{
    document.querySelector('.nameS').style.fontSize = nameFontSizeS.value+'px'
    nameFontSizeCounterS.innerHTML =  nameFontSizeS.value + 'px'   
}
const nameFontSizeIp_change = ()=>{
    document.querySelector('.nameIp').style.fontSize = nameFontSizeIp.value+'px'
    nameFontSizeCounterIp.innerHTML =  nameFontSizeIp.value + 'px'   
}
const nameFontSizeFb_change = ()=>{
    document.querySelector('.nameFb').style.fontSize = nameFontSizeFb.value+'px'
    nameFontSizeCounterFb.innerHTML =  nameFontSizeFb.value + 'px'   
}

    //position funcs//
const namePositionFaderS_change = ()=>{
    nameWrapperS.style.top = Math.abs(namePositionFaderS.value) + "px"
}
const namePositionFaderIp_change = ()=>{
    nameWrapperIp.style.top = Math.abs(namePositionFaderIp.value) + "px"
}
const namePositionFaderFb_change = ()=>{
    nameWrapperFb.style.top = Math.abs(namePositionFaderFb.value) + "px"
}

    //'name' events//
nameInputValue.oninput = nameValue_change

nameFontSizeS.oninput = nameFontSizeS_change
nameFontSizeIp.oninput = nameFontSizeIp_change
nameFontSizeFb.oninput = nameFontSizeFb_change

namePositionFaderS.oninput = namePositionFaderS_change
namePositionFaderIp.oninput = namePositionFaderIp_change
namePositionFaderFb.oninput = namePositionFaderFb_change
///////////////////////////////////////////////////////////////////////////////

//'country' variables
let countryWrapperS = document.querySelector('.countrySWrapper')
let countryWrapperIp = document.querySelector('.countryIpWrapper')
let countryWrapperFb = document.querySelector('.countryFbWrapper')

let countryCurrentValues = [document.querySelector('.countryS'), document.querySelector('.countryIp'), document.querySelector('.countryFb')]
let countryInputValue = document.querySelector('#inputCountry')

let countryFontSizeS = document.querySelector('#countryFontSize_S')
let countryFontSizeCounterS = document.querySelector('.countryFontSize_S-counter')

let countryFontSizeIp = document.querySelector('#countryFontSize_Ip')
let countryFontSizeCounterIp = document.querySelector('.countryFontSize_Ip-counter')

let countryFontSizeFb = document.querySelector('#countryFontSize_Fb')
let countryFontSizeCounterFb = document.querySelector('.countryFontSize_Fb-counter')

let countryPositionFaderS = document.querySelector('#positionCountryS')
let countryPositionFaderIp = document.querySelector('#positionCountryIp')
let countryPositionFaderFb = document.querySelector('#positionCountryFb')

//****** 'country' functions *******//
    //value funcs//
const countryValue_change = ()=>{
    countryCurrentValues.forEach(elem=>{
        elem.innerHTML = countryInputValue.value
    })
}

    //font-size funcs//
const countryFontSizeS_change = ()=>{
    document.querySelector('.countryS').style.fontSize = countryFontSizeS.value+'px'
    countryFontSizeCounterS.innerHTML =  countryFontSizeS.value + 'px'   
}

const countryFontSizeIp_change = ()=>{
    document.querySelector('.countryIp').style.fontSize = countryFontSizeIp.value+'px'
    countryFontSizeCounterIp.innerHTML =  countryFontSizeIp.value + 'px'   
}

const countryFontSizeFb_change = ()=>{
    document.querySelector('.countryFb').style.fontSize = countryFontSizeFb.value+'px'
    countryFontSizeCounterFb.innerHTML =  countryFontSizeFb.value + 'px'   
}

    //position funcs//
const countryPositionFaderS_change = ()=>{
    countryWrapperS.style.top = Math.abs(countryPositionFaderS.value) + "px"
}
const countryPositionFaderIp_change = ()=>{
    countryWrapperIp.style.top = Math.abs(countryPositionFaderIp.value) + "px"
}
const countryPositionFaderFb_change = ()=>{
    countryWrapperFb.style.top = Math.abs(countryPositionFaderFb.value) + "px"
}

    //'country' events//
countryInputValue.oninput = countryValue_change

countryFontSizeS.oninput = countryFontSizeS_change
countryFontSizeIp.oninput = countryFontSizeIp_change
countryFontSizeFb.oninput = countryFontSizeFb_change

countryPositionFaderS.oninput = countryPositionFaderS_change
countryPositionFaderIp.oninput = countryPositionFaderIp_change
countryPositionFaderFb.oninput = countryPositionFaderFb_change
////////////////////////////////////////////////////////////////////////////////////

//text variables
let textWrapperS = document.querySelector('.textSWrapper')
let textWrapperIp = document.querySelector('.textIpWrapper')
let textWrapperFb = document.querySelector('.textFbWrapper')

let textCurrentValues = [document.querySelector('.textS'), document.querySelector('.textIp'), document.querySelector('.textFb')]
let textInputValue = document.querySelector('#inputText')

let textFontSizeS = document.querySelector('#textFontSize_S')
let textFontSizeCounterS = document.querySelector('.textFontSize_S-counter')

let textFontSizeIp = document.querySelector('#textFontSize_Ip')
let textFontSizeCounterIp = document.querySelector('.textFontSize_Ip-counter')

let textFontSizeFb = document.querySelector('#textFontSize_Fb')
let textFontSizeCounterFb = document.querySelector('.textFontSize_Fb-counter')

let textPositionFaderS = document.querySelector('#positionTextS')
let textPositionFaderIp = document.querySelector('#positionTextIp')
let textPositionFaderFb = document.querySelector('#positionTextFb')

//****** 'text' functions *******//
    //value funcs//
const textValue_change = ()=>{
    textCurrentValues.forEach(elem=>{
        elem.innerHTML = textInputValue.value
    })
}

    //font-size funcs//
const textFontSizeS_change = ()=>{
    document.querySelector('.textS').style.fontSize = textFontSizeS.value+'px'
    textFontSizeCounterS.innerHTML =  textFontSizeS.value + 'px'   
}
const textFontSizeIp_change = ()=>{
    document.querySelector('.textIp').style.fontSize = textFontSizeIp.value+'px'
    textFontSizeCounterIp.innerHTML =  textFontSizeIp.value + 'px'   
}
const textFontSizeFb_change = ()=>{
    document.querySelector('.textFb').style.fontSize = textFontSizeFb.value+'px'
    textFontSizeCounterFb.innerHTML =  textFontSizeFb.value + 'px'   
}

    //position funcs//
const textPositionFaderS_change = ()=>{
    textWrapperS.style.top = Math.abs(textPositionFaderS.value) + "px"
}
const textPositionFaderIp_change = ()=>{
    textWrapperIp.style.top = Math.abs(textPositionFaderIp.value) + "px"
}
const textPositionFaderFb_change = ()=>{
    textWrapperFb.style.top = Math.abs(textPositionFaderFb.value) + "px"
}

    //'text' events//
textInputValue.oninput = textValue_change

textFontSizeS.oninput = textFontSizeS_change
textFontSizeIp.oninput = textFontSizeIp_change
textFontSizeFb.oninput = textFontSizeFb_change

textPositionFaderS.oninput = textPositionFaderS_change
textPositionFaderIp.oninput = textPositionFaderIp_change
textPositionFaderFb.oninput = textPositionFaderFb_change
/////////////////////////////////////////////////////////////////////////////////////

window.onload = ()=>{
    nameFontSizeS_change()
    nameFontSizeIp_change()
    nameFontSizeFb_change()

    countryFontSizeS_change()
    countryFontSizeIp_change()
    countryFontSizeFb_change()

    textFontSizeS_change()
    textFontSizeIp_change()
    textFontSizeFb_change()

    photoPositionFaderS_change()
    photoPositionFaderIp_change()
    photoPositionFaderFb_change()

    namePositionFaderS_change()
    namePositionFaderIp_change()
    namePositionFaderFb_change()

    countryPositionFaderS_change()
    countryPositionFaderIp_change()
    countryPositionFaderFb_change()

    textPositionFaderS_change()
    textPositionFaderIp_change()
    textPositionFaderFb_change()
}   


photoPath.onchange = ()=>{     
    photoWrappers.forEach((photo,id)=>{  
        if(id === 0){
            photo.parentElement.style.overflow = 'visible'
            photo.style.width = `auto`
            photo.style.height = 'auto'  
            photo.src = window.URL.createObjectURL(photoPath.files[0]) 
            
            setTimeout(()=>{
                let width = photo.clientWidth
                let height = photo.clientHeight
                if(width >= height){
                    photo.style.width = `${110*(width/height)}px`
                    photo.style.height = '110px'
                    resize.resizeS(110*(width/height), 110)
                }
                else{
                    photo.style.height = `${110*(height/width)}px`
                    photo.style.width = '110px'
                    resize.resizeS(110,110*(height/width))
                }
            },100)
            setTimeout(()=>{photo.parentElement.style.overflow = 'hidden'},100)
        }
        if(id===1){
            photo.parentElement.style.overflow = 'visible'
            photo.style.width = `auto`
            photo.style.height = 'auto'  
            photo.src = window.URL.createObjectURL(photoPath.files[0]) 
            
            setTimeout(()=>{
                let width = photo.clientWidth
                let height = photo.clientHeight
                if(width >= height){
                    photo.style.width = `${75*(width/height)}px`
                    photo.style.height = '75px'
                    resize.resizeIp(75*(width/height), 75)
                }
                else{
                    photo.style.height = `${75*(height/width)}px`
                    photo.style.width = '75px'
                    resize.resizeIp(75,75*(height/width))
                }
            },100)
            setTimeout(()=>{photo.parentElement.style.overflow = 'hidden'},100)
        }
        if(id===2){
            photo.parentElement.style.overflow = 'visible'
            photo.style.width = `auto`
            photo.style.height = 'auto'  
            photo.src = window.URL.createObjectURL(photoPath.files[0]) 
            
            setTimeout(()=>{
                let width = photo.clientWidth
                let height = photo.clientHeight
                if(width >= height){
                    photo.style.width = `${75*(width/height)}px`
                    photo.style.height = '75px'
                    resize.resizeFb(75*(width/height), 75)
                }
                else{
                    photo.style.height = `${75*(height/width)}px`
                    photo.style.width = '75px'
                    resize.resizeFb(75,75*(height/width))
                }
            },100)
            setTimeout(()=>{photo.parentElement.style.overflow = 'hidden'},100)
        }
    })
}



button.onclick = ()=> {
    let storyWrapper = document.querySelector('.wrapperStories')
    let instPostWrapper = document.querySelector('.wrapperInstPost')
    let fbWrapper = document.querySelector('.wrapperFb')

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
    let storyWrapper = document.querySelector('.wrapperStories')
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
    let instPostWrapper = document.querySelector('.wrapperInstPost')
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
    let fbWrapper = document.querySelector('.wrapperFb')
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

photoDrag.forEach(photo=>{
     
    photo.addEventListener('dragstart', e =>{
        dragStart.x = e.clientX
        dragStart.y = e.clientY
    })
    photo.addEventListener('dragend', e =>{
        dragEnd.x = dragEnd.x - (dragStart.x - e.clientX) 
        photo.style.left = `${dragEnd.x}px`
        dragEnd.y = dragEnd.y - (dragStart.y - e.clientY) 
        photo.style.top = `${dragEnd.y}px`  
    })
})

buttonAlign.onclick = ()=>{
    photoDrag.forEach(photo=>{
        dragEnd.x = 0
        photo.style.left = `${dragEnd.x}px`
        dragEnd.y = 0
        photo.style.top = `${dragEnd.y}px`
    })
}