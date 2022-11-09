const btn = document.getElementById("btn");
const body = document.querySelectorAll("body");
const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const hex_Value = document.getElementById("hex");
const copy_value = document.getElementById("myCopy");


document.body.style.backgroundColor = "#000000";
hex_Value.innerHTML = "#000000";

// for Click to generate button

btn.addEventListener("click", function(){
    let hex_key = '#';
    for(let i=0; i<6; i++){
        const index = Math.floor(Math.random() * hex.length);
        hex_key = hex_key + hex[index];
    }
    hex_Value.innerHTML = hex_key;
    document.getElementById('myHex').value = hex_key;
    document.body.style.background= hex_key;
    document.body.style.transition = '0.7s';
});

// for copy code button

copy_value.addEventListener('click', function(){
    let hex = document.getElementById('myHex');

    hex.select();
    hex.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(hex.value);
    alert('Copied Hex Color : ' + hex.value);
});


