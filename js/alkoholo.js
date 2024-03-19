//Sex on the Beach
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

//Pina colada
let ColadaPlus = document.querySelector("#ColadaPlus");
let ColadaMinus = document.querySelector("#ColadaMinus");
let Crum = document.querySelector("#Crum");
let CKlikor = document.querySelector("#CKlikor");
let CananaszLe = document.querySelector("#CananaszLe");
let Ctejszin = document.querySelector("#Ctejszin");
let Cjeg = document.querySelector("#Cjeg");
let CananaszKo = document.querySelector("#CananaszKo");

ColadaPlus.addEventListener('click', function(){
    ColadaCount.innerText = Number(ColadaCount.innerHTML) + 1;

    Crum.innerText = Number(Crum.innerHTML) + 4;
    CKlikor.innerHTML = Number(CKlikor.innerHTML) + 2 ;
    CananaszLe.innerHTML = Number(CananaszLe.innerHTML) + 1;
    Ctejszin.innerHTML = Number(Ctejszin.innerHTML) + 2;
    Cjeg.innerHTML = Number(Cjeg.innerHTML) + 4;
    CananaszKo.innerHTML = Number(CananaszKo.innerHTML) + 1;
});

ColadaMinus.addEventListener('click', function(){
    if (ColadaCount.innerHTML==1) {
        ColadaCount.innerText = 1;

        Crum.innerText = Number(Crum.innerHTML) / 1;
        CKlikor.innerHTML = Number(CKlikor.innerHTML) / 1;
        CananaszLe.innerHTML = Number(CananaszLe.innerHTML) / 1;
        Ctejszin.innerHTML = Number(Ctejszin.innerHTML) / 1;
        Cjeg.innerHTML = Number(Cjeg.innerHTML) / 1;
        CananaszKo.innerHTML = Number(CananaszKo.innerHTML) / 1;
    }
    else{
        Crum.innerText = Number(Crum.innerHTML) - 4;
        CKlikor.innerHTML = Number(CKlikor.innerHTML) - 2 ;
        CananaszLe.innerHTML = Number(CananaszLe.innerHTML) - 1;
        Ctejszin.innerHTML = Number(Ctejszin.innerHTML) - 2;
        Cjeg.innerHTML = Number(Cjeg.innerHTML) - 4;
        CananaszKo.innerHTML = Number(CananaszKo.innerHTML) - 1;

    ColadaCount.innerText = Number(ColadaCount.innerHTML) - 1;
    }
});

//Mojito
/*let ColadaPlus = document.querySelector("#ColadaPlus");
let ColadaMinus = document.querySelector("#ColadaMinus");
let Crum = document.querySelector("#Crum");
let CKlikor = document.querySelector("#CKlikor");
let CananaszLe = document.querySelector("#CananaszLe");
let Ctejszin = document.querySelector("#Ctejszin");
let Cjeg = document.querySelector("#Cjeg");
let CananaszKo = document.querySelector("#CananaszKo");*/

MojitoPlus.addEventListener('click', function(){
    MojitoCount.innerText = Number(MojitoCount.innerHTML) + 1;

    Crum.innerText = Number(Crum.innerHTML) + 4;
    CKlikor.innerHTML = Number(CKlikor.innerHTML) + 2 ;
    CananaszLe.innerHTML = Number(CananaszLe.innerHTML) + 1;
    Ctejszin.innerHTML = Number(Ctejszin.innerHTML) + 2;
    Cjeg.innerHTML = Number(Cjeg.innerHTML) + 4;
    CananaszKo.innerHTML = Number(CananaszKo.innerHTML) + 1;
});

MojitoMinus.addEventListener('click', function(){
    if (MojitoCount.innerHTML==1) {
        MojitoCount.innerText = 1;

        Crum.innerText = Number(Crum.innerHTML) / 1;
        CKlikor.innerHTML = Number(CKlikor.innerHTML) / 1;
        CananaszLe.innerHTML = Number(CananaszLe.innerHTML) / 1;
        Ctejszin.innerHTML = Number(Ctejszin.innerHTML) / 1;
        Cjeg.innerHTML = Number(Cjeg.innerHTML) / 1;
        CananaszKo.innerHTML = Number(CananaszKo.innerHTML) / 1;
    }
    else{
        Crum.innerText = Number(Crum.innerHTML) - 4;
        CKlikor.innerHTML = Number(CKlikor.innerHTML) - 2 ;
        CananaszLe.innerHTML = Number(CananaszLe.innerHTML) - 1;
        Ctejszin.innerHTML = Number(Ctejszin.innerHTML) - 2;
        Cjeg.innerHTML = Number(Cjeg.innerHTML) - 4;
        CananaszKo.innerHTML = Number(CananaszKo.innerHTML) - 1;

    MojitoCount.innerText = Number(MojitoCount.innerHTML) - 1;
    }
});