class Resize {
    constructor(){

    }

    resizeS(initialwidth,initialheight){
        let inputS = document.querySelector('#photoRatioS')
        let photoS = document.querySelector('#photoS')
    
        inputS.oninput = ()=>{
            photoS.style.width = `${initialwidth * inputS.value}px`
            photoS.style.height = `${initialheight * inputS.value}px`
        }
    
        photoS.onfocus = () =>{
            photoS.style.border = '5px solid red'
            photoS.parentElement.style.overflow = 'visible'
            
        }
        photoS.onblur = () =>{
            photoS.style.border = 'none'
            photoS.parentElement.style.overflow = 'hidden'
        }
    }

    resizeIp(initialwidth,initialheight){
        let inputIp = document.querySelector('#photoRatioIp')
        let photoIp = document.querySelector('#photoIp')
    
        inputIp.oninput = ()=>{
            photoIp.style.width = `${initialwidth * inputIp.value}px`
            photoIp.style.height = `${initialheight * inputIp.value}px`
        }
    
        photoIp.onfocus = () =>{
            photoIp.style.border = '5px solid red'
            photoIp.parentElement.style.overflow = 'visible'
            
        }
        photoIp.onblur = () =>{
            photoIp.style.border = 'none'
            photoIp.parentElement.style.overflow = 'hidden'
        }
    }

    resizeFb(initialwidth,initialheight){
        let inputFb = document.querySelector('#photoRatioFb')
        let photoFb = document.querySelector('#photoFb')
    
        inputFb.oninput = ()=>{
            photoFb.style.width = `${initialwidth * inputFb.value}px`
            photoFb.style.height = `${initialheight * inputFb.value}px`
        }
    
        photoFb.onfocus = () =>{
            photoFb.style.border = '5px solid red'
            photoFb.parentElement.style.overflow = 'visible'
            
        }
        photoFb.onblur = () =>{
            photoFb.style.border = 'none'
            photoFb.parentElement.style.overflow = 'hidden'
        }
    }

    containerSresize(){
        let inputS = document.querySelector('#containerRatioS')
        let containerS = document.querySelector('.photoSContainer')

        inputS.oninput = ()=>{
            containerS.style.transform = `scale(${inputS.value},${inputS.value})`
        }
    }
    containerIpresize(){
        let inputIp = document.querySelector('#containerRatioIp')
        let containerIp = document.querySelector('.photoIpContainer')

        inputIp.oninput = ()=>{
            containerIp.style.transform = `scale(${inputIp.value},${inputIp.value})`  
        }
    }
    containerFbresize(){
        let inputFb = document.querySelector('#containerRatioFb')
        let containerFb = document.querySelector('.photoFbContainer')

        inputFb.oninput = ()=>{
            containerFb.style.transform = `scale(${inputFb.value},${inputFb.value})`
        }
    }
}
const resize = new Resize 
export default resize