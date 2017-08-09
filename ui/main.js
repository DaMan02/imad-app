
var w=0,h=0;
myImg.onclick=function(){
    var myImg=document.getElementById('myImg');
    w=w+2;h=h+2;
if(myImg && myImg.style) {
    yourImg.style.height = w+'px';
    yourImg.style.width = w+'px';
}

};
