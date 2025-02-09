const display=document.querySelector("#display")
const evaluate =document.querySelector("#evaluate")
const button=document.querySelectorAll('button')

evaluate.onclick=function(){
    try{
        display.value=eval(display.value)
    }
    catch(error){
        display.value='Error'
    }
}
button.onclick=function(){
    if(display.value=='Error'){
        display.value=''
    }
}