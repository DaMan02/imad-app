var btn=document.getElementById('btn');
var counter=0;
btn.onclick=function(){
    counter=counter+1;
    var span=document.getElementById('counter');
    span.innnerHTML=counter.toString();
};
