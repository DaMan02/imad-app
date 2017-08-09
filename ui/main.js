var img=document.getElementById('myImg');
var w=0,h=0;
img.onclick=function(){
    w=w+2;
    h=h+2;
    img.height=h+'px';
    img.height=w+'px';
};
var btn=document.getElementById('btn');
var counter=0;
btn.onclick=function(){
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};
