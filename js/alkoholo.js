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
let MojitoMinus = document.querySelector("#MojitoMinus");
let MojitoPlus = document.querySelector("#MojitoPlus");
let Mrum = document.querySelector("#Mrum");
let Mmenta = document.querySelector("#Mmenta");
let Mango = document.querySelector("#Mango");
let Mlime = document.querySelector("#Mlime");
let Mcitrom = document.querySelector("#Mcitrom");
let Mjeg = document.querySelector("#Mjeg");

MojitoPlus.addEventListener('click', function(){
    MojitoCount.innerText = Number(MojitoCount.innerHTML) + 1;

    Mrum.innerText = Number(Mrum.innerHTML) + 7;
    Mmenta.innerHTML = Number(Mmenta.innerHTML) + 10 ;
    Mango.innerHTML = Number(Mango.innerHTML) + 1;
    Mlime.innerHTML = Number(Mlime.innerHTML) + 1;
    Mcitrom.innerHTML = Number(Mcitrom.innerHTML) + 0.5;
    Mjeg.innerHTML = Number(Mjeg.innerHTML) + 10;

});

MojitoMinus.addEventListener('click', function(){
    if (MojitoCount.innerHTML==1) {
        MojitoCount.innerText = 1;

        Mrum.innerText = Number(Mrum.innerHTML) / 1;
        Mmenta.innerHTML = Number(Mmenta.innerHTML) / 1;
        Mango.innerHTML = Number(Mango.innerHTML) / 1;
        Mlime.innerHTML = Number(Mlime.innerHTML) / 1;
        Mcitrom.innerHTML = Number(Mcitrom.innerHTML) / 1;
        Mjeg.innerHTML = Number(Mjeg.innerHTML) / 1;
    }
    else{
        Mrum.innerText = Number(Mrum.innerHTML) - 7;
        Mmenta.innerHTML = Number(Mmenta.innerHTML) - 10 ;
        Mango.innerHTML = Number(Mango.innerHTML) - 1;
        Mlime.innerHTML = Number(Mlime.innerHTML) - 1;
        Mcitrom.innerHTML = Number(Mcitrom.innerHTML) - 0.5;
        Mjeg.innerHTML = Number(Mjeg.innerHTML) - 10;

        MojitoCount.innerText = Number(MojitoCount.innerHTML) - 1;
    }
});

//Long island iced tea
let LongMinus = document.querySelector("#LongMinus");
let LongPlus = document.querySelector("#LongPlus");
let Lvodka = document.querySelector("#Lvodka");
let Lgin = document.querySelector("#Lgin");
let Lrum = document.querySelector("#Lrum");
let Ltequila = document.querySelector("#Ltequila");
let Lcoin = document.querySelector("#Lcoin");
let Llime = document.querySelector("#Llime");
let Lszirup = document.querySelector("#Lszirup");

LongPlus.addEventListener('click', function(){
    LongCount.innerText = Number(LongCount.innerHTML) + 1;

    Lvodka.innerText = Number(Lvodka.innerHTML) + 1.5;
    Lgin.innerHTML = Number(Lgin.innerHTML) + 1.5 ;
    Lrum.innerHTML = Number(Lrum.innerHTML) + 1.5;
    Ltequila.innerHTML = Number(Ltequila.innerHTML) + 1.5;
    Lcoin.innerHTML = Number(Lcoin.innerHTML) + 1.5;
    Llime.innerHTML = Number(Llime.innerHTML) + 3;
    Lszirup.innerHTML = Number(Lszirup.innerHTML) + 1;

});

LongMinus.addEventListener('click', function(){
    if (LongCount.innerHTML==1) {
        LongCount.innerText = 1;

        Lvodka.innerText = Number(Lvodka.innerHTML) / 1;
        Lgin.innerHTML = Number(Lgin.innerHTML) / 1;
        Lrum.innerHTML = Number(Lrum.innerHTML) / 1;
        Ltequila.innerHTML = Number(Ltequila.innerHTML) / 1;
        Lcoin.innerHTML = Number(Lcoin.innerHTML) / 1;
        Lszirup.innerHTML = Number(Lszirup.innerHTML) / 1;
    }
    else{
        Lvodka.innerText = Number(Lvodka.innerHTML) - 1.5;
        Lgin.innerHTML = Number(Lgin.innerHTML) - 1.5;
        Lrum.innerHTML = Number(Lrum.innerHTML) - 1.5;
        Ltequila.innerHTML = Number(Ltequila.innerHTML) -1.5;
        Lcoin.innerHTML = Number(Lcoin.innerHTML) - 1.5;
        Llime.innerHTML = Number(Llime.innerHTML) - 3;
        Lszirup.innerHTML = Number(Lszirup.innerHTML) - 1;

        LongCount.innerText = Number(LongCount.innerHTML) - 1;
    }
});

//moscow mule
let muleMinus = document.querySelector("#muleMinus");
let mulePlus = document.querySelector("#mulePlus");
let muleVodka = document.querySelector("#muleVodka");

mulePlus.addEventListener('click', function(){
    muleCount.innerText = Number(muleCount.innerHTML) + 1;

    muleVodka.innerHTML = Number(muleVodka.innerHTML) + 4;

});

muleMinus.addEventListener('click', function(){
    if (muleCount.innerHTML==1) {
        muleCount.innerText = 1;

        muleVodka.innerText = Number(muleVodka.innerHTML) / 1;
    }
    else{
        muleVodka.innerText = Number(muleVodka.innerHTML) - 4;

        muleCount.innerText = Number(muleCount.innerHTML) - 1;
    }
});

//Cosmopolitan
let cosmoMinus = document.querySelector("#cosmoMinus");
let cosmoPlus = document.querySelector("#cosmoPlus");
let cosmoVodka = document.querySelector("#cosmoVodka");
let cosmoLikor = document.querySelector("#cosmoLikor");
let cosmoAfonya = document.querySelector("#cosmoAfonya");
let cosmoLime = document.querySelector("#cosmoLime");

cosmoPlus.addEventListener('click', function(){
    cosmoCount.innerText = Number(cosmoCount.innerHTML) + 1;

    cosmoVodka.innerText = Number(cosmoVodka.innerHTML) + 45;
    cosmoLikor.innerHTML = Number(cosmoLikor.innerHTML) + 15 ;
    cosmoAfonya.innerHTML = Number(cosmoAfonya.innerHTML) + 40;
    cosmoLime.innerHTML = Number(cosmoLime.innerHTML) + 10;

});

cosmoMinus.addEventListener('click', function(){
    if (cosmoCount.innerHTML==1) {
        cosmoCount.innerText = 1;

        cosmoVodka.innerText = Number(cosmoVodka.innerHTML) / 1;
        cosmoLikor.innerHTML = Number(cosmoLikor.innerHTML) / 1;
        cosmoAfonya.innerHTML = Number(cosmoAfonya.innerHTML) / 1;
        cosmoLime.innerHTML = Number(cosmoLime.innerHTML) / 1;
    }
    else{
        cosmoVodka.innerText = Number(cosmoVodka.innerHTML) - 45;
        cosmoLikor.innerHTML = Number(cosmoLikor.innerHTML) - 15;
        cosmoAfonya.innerHTML = Number(cosmoAfonya.innerHTML) - 40;
        cosmoLime.innerHTML = Number(cosmoLime.innerHTML) -10;

        cosmoCount.innerText = Number(cosmoCount.innerHTML) - 1;
    }
});

//Grasshopper
let grassMinus = document.querySelector("#grassMinus");
let grassPlus = document.querySelector("#grassPlus");
let grassLikor = document.querySelector("#grassLikor");
let grassCacao = document.querySelector("#grassCacao");
let grassTejszin = document.querySelector("#grassTejszin");

grassPlus.addEventListener('click', function(){
    grassCount.innerText = Number(grassCount.innerHTML) + 1;

    grassLikor.innerText = Number(grassLikor.innerHTML) + 30;
    grassCacao.innerHTML = Number(grassCacao.innerHTML) + 30 ;
    grassTejszin.innerHTML = Number(grassTejszin.innerHTML) + 30;
});

grassMinus.addEventListener('click', function(){
    if (grassCount.innerHTML==1) {
        grassCount.innerText = 1;

        grassLikor.innerText = Number(grassLikor.innerHTML) / 1;
        grassCacao.innerHTML = Number(grassCacao.innerHTML) / 1;
        grassTejszin.innerHTML = Number(grassTejszin.innerHTML) / 1;
        cosmoLime.innerHTML = Number(cosmoLime.innerHTML) / 1;
    }
    else{
        grassLikor.innerText = Number(grassLikor.innerHTML) - 30;
        grassCacao.innerHTML = Number(grassCacao.innerHTML) - 30;
        grassTejszin.innerHTML = Number(grassTejszin.innerHTML) - 30;

        grassCount.innerText = Number(grassCount.innerHTML) - 1;
    }
});