let textarea = document.createElement('textarea');
textarea.className = "textArea";
let divBoxTextArea = document.createElement('div');
divBoxTextArea.className = "boxTextArea";
divBoxTextArea.append(textarea);
document.body.append(divBoxTextArea);
let divKeyBoard = document.createElement('div');
divKeyBoard.id = "keyBoard";
document.body.append(divKeyBoard);
let pOS = document.createElement('p');
pOS.className="pOS";
document.body.append(pOS);

const keyBoard =[192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 
    9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 13, 
    16, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 220,
    17,90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 32, 18,37,38,39,40];

function init(){
    let out = "";
    for(let i=0; i<keyBoard.length; i++){
        if(keyBoard[i]==8){
            out+='<div class = "key" data="'+keyBoard[i] +'">BS</div>';
        }else if(keyBoard[i]==16){
            out+='<div class = "key" data="'+keyBoard[i] +'">Shift</div>';
        }else if(keyBoard[i]==9){
            out+='<div class = "key" data="'+keyBoard[i] +'">Tab</div>';
        }else if(keyBoard[i]==13){
            out+='<div class = "key" data="'+keyBoard[i] +'">Enter</div>';
        }else if(keyBoard[i]==17){
            out+='<div class = "key" data="'+keyBoard[i] +'">Ctrl</div>';
        }else if(keyBoard[i]==192){
            out+='<div class = "key" data="'+keyBoard[i] +'">`</div>';
        }else if(keyBoard[i]==189){
            out+='<div class = "key" data="'+keyBoard[i] +'">-</div>';
        }else if(keyBoard[i]==187){
            out+='<div class = "key" data="'+keyBoard[i] +'">=</div>';
        }else if(keyBoard[i]==18){
            out+='<div class = "key" data="'+keyBoard[i] +'">Alt</div>';
        }else if(keyBoard[i]==219){
            out+='<div class = "key" data="'+keyBoard[i] +'">[</div>';
        }else if(keyBoard[i]==221){
            out+='<div class = "key" data="'+keyBoard[i] +'">]</div>';
        }else if(keyBoard[i]==186){
            out+='<div class = "key" data="'+keyBoard[i] +'">;</div>';
        }else if(keyBoard[i]==222){
            out+='<div class = "key" data="'+keyBoard[i] +'">\'</div>';
        }else if(keyBoard[i]==220){
            out+='<div class = "key" data="'+keyBoard[i] +'">\\</div>';
        }else if(keyBoard[i]==188){
            out+='<div class = "key" data="'+keyBoard[i] +'">,</div>';
        }else if(keyBoard[i]==190){
            out+='<div class = "key" data="'+keyBoard[i] +'">.</div>';
        }else if(keyBoard[i]==191){
            out+='<div class = "key" data="'+keyBoard[i] +'">/</div>';
        }else if(keyBoard[i]==32){
            out+='<div class = "key" data="'+keyBoard[i] +'">Space</div>';
        }else if(keyBoard[i]==37){
            out+='<div class = "key" data="'+keyBoard[i] +'">←</div>';
        }else if(keyBoard[i]==38){
            out+='<div class = "key" data="'+keyBoard[i] +'">↑</div>';
        }else if(keyBoard[i]==39){
            out+='<div class = "key" data="'+keyBoard[i] +'">→</div>';
        }else if(keyBoard[i]==40){
            out+='<div class = "key" data="'+keyBoard[i] +'">↓</div>';
        }else{
            out+='<div class = "key" data="'+keyBoard[i] +'">'+String.fromCharCode(keyBoard[i])+'</div>';
        }
        186
    }
    document.getElementById('keyBoard').innerHTML = out;
}
init();
document.addEventListener("keydown", function(event) {
    console.log(event);
        document.querySelector('#keyBoard .key[data="'+event.which+'"]').classList.add('active');
        document.querySelector('textArea').innerHTML=document.querySelector("textArea").value + event.key;
  })
document.addEventListener("keyup", function(event) {
    document.querySelector('#keyBoard .key[data="'+event.which+'"]').classList.remove('active');
})
document.querySelector(".pOS").innerHTML="Клавиатура создана в операционной системе Windows";