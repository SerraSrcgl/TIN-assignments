function calcTemp(){
    var option = document.getElementsByName('FC')[0].value;
    if(option === 'F'){
        var space = document.getElementById("space").value;
        var result = (5/9)*(space-32);
      alert(result);
    } else if(option === 'C'){
        var space = document.getElementById("space").value;
        var result = (9/5)*space+32;
       alert(result);
    }
    
}

window.onload = function () {
    document.getElementById("submit_button").onclick = calcTemp;
};