let BeachPlus = document.querySelector("#BeachPlus");
let BeachMinus = document.querySelector("#BeachMinus");
let BeachVodka = document.querySelector("#BeachVodka");
let BeachBols = document.querySelector("#BeachBols");
let BeachNarancs = document.querySelector("#BeachNarancs");
let BeachAfonya = document.querySelector("#BeachAfonya");

BeachPlus.addEventListener('click', function(){
    BeachCount.innerText = Number(BeachCount.innerHTML) + 1;

    BeachVodka.innerText = Number(BeachVodka.innerHTML) + 4;
    BeachBols.innerHTML = Number(BeachBols.innerHTML) + 2 ;
    BeachNarancs.innerHTML = Number(BeachNarancs.innerHTML) + 8;
    BeachAfonya.innerHTML = Number(BeachAfonya.innerHTML) + 4;
});

BeachMinus.addEventListener('click', function(){
    if (BeachCount.innerHTML==1) {
        BeachCount.innerText = 1;

        BeachVodka.innerText = Number(BeachVodka.innerHTML) / 1;
        BeachBols.innerHTML = Number(BeachBols.innerHTML) / 1;
        BeachNarancs.innerHTML = Number(BeachNarancs.innerHTML) / 1;
        BeachAfonya.innerHTML = Number(BeachAfonya.innerHTML) / 1;
    }
    else{
    BeachVodka.innerText = Number(BeachVodka.innerHTML) - 4;
    BeachBols.innerHTML = Number(BeachBols.innerHTML) - 2;
    BeachNarancs.innerHTML = Number(BeachNarancs.innerHTML) - 8;
    BeachAfonya.innerHTML = Number(BeachAfonya.innerHTML) - 4;

    BeachCount.innerText = Number(BeachCount.innerHTML) - 1;
    }
});