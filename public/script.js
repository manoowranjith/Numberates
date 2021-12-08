var count=10;
const number=Math.floor(Math.random() * (100 - 1 +1)) + 1
window.onload = function() {
    document.getElementById('remaining').innerHTML=count;
    document.getElementById("win").style.display = "none";
    document.getElementById("loose").style.display = "none";
}
const image = document.createElement('img')
image.src  = './images/sad.svg'
image.width="50"

function validNum(x)
{
    count--;
    if(count==0)
    {
        document.getElementById("init").style.display = "none";
        document.getElementById("win").style.display = "none";
        document.getElementById("loose").style.display = "block";
    }
    document.getElementById('remaining').innerHTML=count;

    // alert(number)
    // const number=25
    document.getElementById('input_value').value=""
    
    if(x<number)
    {
        document.getElementById('msg').innerHTML="GUESSED NUMBERE IS SMALL";
        document.getElementById('msg').appendChild(image)
        // alert(number+"Small")
    }
    if(x>number)
    {
        document.getElementById('msg').innerHTML="GUESSED NUMBERE IS LARGE";
        document.getElementById('msg').appendChild(image)
        // alert(number+"Large")
    }
    if(x==number)
    {
        document.getElementById("init").style.display = "none";
        document.getElementById("win").style.display = "block";
    }
}