let BeachPlus = document.querySelector("#BeachPlus");
let BeachMinus = document.querySelector("#BeachMinus");
let BeachVodka = document.querySelector("#BeachVodka");
let BeachBols = document.querySelector("#BeachBols");
let BeachNarancs = document.querySelector("#BeachNarancs");
let BeachAfonya = document.querySelector("#BeachAfonya");

BeachPlus.addEventListener('click', function(){
    BeachCount.innerText = Number(BeachCount.innerHTML) + 1;

    BeachVodka.innerText = Number(BeachVodka.innerHTML) * BeachCount.innerHTML;
    BeachBols.innerHTML = Number(BeachBols.innerHTML) * Number(BeachCount.innerHTML);
    BeachNarancs.innerHTML = Number(BeachNarancs.innerHTML) * Number(BeachCount.innerHTML);
    BeachAfonya.innerHTML = Number(BeachAfonya.innerHTML) * Number(BeachCount.innerHTML);
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
    BeachVodka.innerText = Number(BeachVodka.innerHTML) / BeachCount.innerHTML;
    BeachBols.innerHTML = Number(BeachBols.innerHTML) / Number(BeachCount.innerHTML);
    BeachNarancs.innerHTML = Number(BeachNarancs.innerHTML) / Number(BeachCount.innerHTML);
    BeachAfonya.innerHTML = Number(BeachAfonya.innerHTML) / Number(BeachCount.innerHTML);

    BeachCount.innerText = Number(BeachCount.innerHTML) - 1;
    }
});