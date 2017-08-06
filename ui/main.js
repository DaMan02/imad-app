console.log('Loaded!');
//change main text
var element=document.getElementById('main-text');
element.innerHTML='New Value';
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    var img=document.getElementById('madi');
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,50)
}