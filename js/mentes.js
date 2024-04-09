//Safe Sex on the Beach
let BeachCount = document.querySelector('#BeachCount')
let BeachPlus = document.querySelector("#BeachPlus");
let BeachMinus = document.querySelector("#BeachMinus");
let BeachJeg = document.querySelector("#BeachJeg");
let BeachOszi = document.querySelector("#BeachOszi");
let BeachNariLe = document.querySelector("#BeachNariLe");
let BeachAfonya = document.querySelector("#BeachAfonya");
let BeachNariSzelet = document.querySelector("#BeachNariSzelet");

BeachPlus.addEventListener('click', function(){
    BeachCount.innerText = Number(BeachCount.innerHTML) + 1;

    BeachJeg.innerText = Number(BeachJeg.innerHTML) + 1;
    BeachOszi.innerHTML = Number(BeachOszi.innerHTML) + 60;
    BeachNariLe.innerHTML = Number(BeachNariLe.innerHTML) + 90;
    BeachAfonya.innerHTML = Number(BeachAfonya.innerHTML) + 90;
    BeachNariSzelet.innerHTML = Number(BeachNariSzelet.innerHTML) + 0.5;
});

BeachMinus.addEventListener('click', function(){
    if (BeachCount.innerHTML==1) {
        BeachCount.innerText = 1;

        BeachJeg.innerText = Number(BeachJeg.innerHTML) / 1;
        BeachOszi.innerHTML = Number(BeachOszi.innerHTML) / 1;
        BeachNariLe.innerHTML = Number(BeachNariLe.innerHTML) / 1;
        BeachAfonya.innerHTML = Number(BeachAfonya.innerHTML) / 1;
        BeachNariSzelet.innerHTML = Number(BeachNariSzelet.innerHTML) / 1;
    }
    else{
    BeachJeg.innerText = Number(BeachJeg.innerHTML) - 1;
    BeachOszi.innerHTML = Number(BeachOszi.innerHTML) - 60;
    BeachNariLe.innerHTML = Number(BeachNariLe.innerHTML) - 90;
    BeachAfonya.innerHTML = Number(BeachAfonya.innerHTML) - 90;
    BeachNariSzelet.innerHTML = Number(BeachNariSzelet.innerHTML) - 0.5;
    BeachCount.innerText = Number(BeachCount.innerHTML) - 1;
    }
});


// Virgin Margarita
let MargaritaCount = document.querySelector('#MargaritaCount')
let MargaritaPlus = document.querySelector("#MargaritaPlus");
let MargaritaMinus = document.querySelector("#MargaritaMinus");
let MargaritaLimeSzirup = document.querySelector("#MargaritaLimeSzirup");
let MargaritaNarancsle = document.querySelector("#MargaritaNarancsle");
let MargaritaCitromle = document.querySelector("#MargaritaCitromle");
let MargaritaSzénsavasVíz = document.querySelector("#MargaritaSzénsavasVíz");
let MargaritaJégkocka = document.querySelector("#MargaritaJégkocka");

MargaritaPlus.addEventListener('click', function(){
    MargaritaCount.innerText = Number(MargaritaCount.innerHTML) + 1;

    MargaritaLimeSzirup.innerText = Number(MargaritaLimeSzirup.innerHTML) + 3;
    MargaritaNarancsle.innerHTML = Number(MargaritaNarancsle.innerHTML) + 3;
    MargaritaCitromle.innerHTML = Number(MargaritaCitromle.innerHTML) + 1.5;
    MargaritaSzénsavasVíz.innerHTML = Number(MargaritaSzénsavasVíz.innerHTML) + 4.5;
    MargaritaJégkocka.innerHTML = Number(MargaritaJégkocka.innerHTML) + 3;
});

MargaritaMinus.addEventListener('click', function(){
    if (MargaritaCount.innerHTML == 1) {
        MargaritaCount.innerText = 1;

        MargaritaLimeSzirup.innerText = Number(MargaritaLimeSzirup.innerHTML) / 1;
        MargaritaNarancsle.innerHTML = Number(MargaritaNarancsle.innerHTML) / 1;
        MargaritaCitromle.innerHTML = Number(MargaritaCitromle.innerHTML) / 1;
        MargaritaSzénsavasVíz.innerHTML = Number(MargaritaSzénsavasVíz.innerHTML) / 1;
        MargaritaJégkocka.innerHTML = Number(MargaritaJégkocka.innerHTML) / 1;
    }
    else {
        MargaritaLimeSzirup.innerText = Number(MargaritaLimeSzirup.innerHTML) - 3;
        MargaritaNarancsle.innerHTML = Number(MargaritaNarancsle.innerHTML) - 3;
        MargaritaCitromle.innerHTML = Number(MargaritaCitromle.innerHTML) - 1.5;
        MargaritaSzénsavasVíz.innerHTML = Number(MargaritaSzénsavasVíz.innerHTML) - 4.5;
        MargaritaJégkocka.innerHTML = Number(MargaritaJégkocka.innerHTML) - 3;
        MargaritaCount.innerText = Number(MargaritaCount.innerHTML) - 1;
    }
});
//Mojito
let MojitoCount = document.querySelector('#MojitoCount')
let MojitoPlus = document.querySelector("#MojitoPlus");
let MojitoMinus = document.querySelector("#MojitoMinus");
let MojitoBarnaCukor = document.querySelector("#MojitoBarnaCukor");
let MojitoJégkocka = document.querySelector("#MojitoJégkocka");
let MojitoSzóda = document.querySelector("#MojitoSzóda");
let MojitoLimeLé = document.querySelector("#MojitoLimeLé");
let MojitoMenta = document.querySelector("#MojitoMenta");
let MojitoLimeSzelet = document.querySelector("#MojitoLimeSzelet");

MojitoPlus.addEventListener('click', function(){
  MojitoCount.innerText = Number(MojitoCount.innerHTML) + 1;

  MojitoBarnaCukor.innerText = Number(MojitoBarnaCukor.innerHTML) + 3;
  MojitoJégkocka.innerHTML = Number(MojitoJégkocka.innerHTML) + 1;
  MojitoSzóda.innerHTML = Number(MojitoSzóda.innerHTML) + 100;
  MojitoLimeLé.innerHTML = Number(MojitoLimeLé.innerHTML) + 150;
  MojitoMenta.innerHTML = Number(MojitoMenta.innerHTML) + 1;
  MojitoLimeSzelet.innerHTML = Number(MojitoLimeSzelet.innerHTML) + 3;
});

MojitoMinus.addEventListener('click', function(){
  if (MojitoCount.innerHTML==1) {
      MojitoCount.innerText = 1;

      MojitoBarnaCukor.innerText = Number(MojitoBarnaCukor.innerHTML) / 1;
      MojitoJégkocka.innerHTML = Number(MojitoJégkocka.innerHTML) / 1;
      MojitoSzóda.innerHTML = Number(MojitoSzóda.innerHTML) / 1;
      MojitoLimeLé.innerHTML = Number(MojitoLimeLé.innerHTML) / 1;
      MojitoMenta.innerHTML = Number(MojitoMenta.innerHTML) / 1;
      MojitoLimeSzelet.innerHTML = Number(MojitoLimeSzelet.innerHTML) / 1;
  }
  else{
  MojitoBarnaCukor.innerText = Number(MojitoBarnaCukor.innerHTML) - 3;
  MojitoJégkocka.innerHTML = Number(MojitoJégkocka.innerHTML) - 1;
  MojitoSzóda.innerHTML = Number(MojitoSzóda.innerHTML) - 100;
  MojitoLimeLé.innerHTML = Number(MojitoLimeLé.innerHTML) - 150;
  MojitoMenta.innerHTML = Number(MojitoMenta.innerHTML) - 1;
  MojitoLimeSzelet.innerHTML = Number(MojitoLimeSzelet.innerHTML) - 3;
  MojitoCount.innerText = Number(MojitoCount.innerHTML) - 1;
  }
});

//Bloody Mary
let BloodyMaryCount = document.querySelector('#BloodyMaryCount')
let BloodyMaryPlus = document.querySelector("#BloodyMaryPlus");
let BloodyMaryMinus = document.querySelector("#BloodyMaryMinus");
let BloodyMaryParadicsomlé = document.querySelector("#BloodyMaryParadicsomlé");
let BloodyMaryCitromlé = document.querySelector("#BloodyMaryCitromlé");
let BloodyMaryWorcesterSzósz = document.querySelector("#BloodyMaryWorcesterSzósz");
let BloodyMaryTabascoSzósz = document.querySelector("#BloodyMaryTabascoSzósz");

BloodyMaryPlus.addEventListener('click', function(){
  BloodyMaryCount.innerText = Number(BloodyMaryCount.innerHTML) + 1;

  BloodyMaryParadicsomlé.innerText = Number(BloodyMaryParadicsomlé.innerHTML) + 20;
  BloodyMaryCitromlé.innerHTML = Number(BloodyMaryCitromlé.innerHTML) + 1;
  BloodyMaryWorcesterSzósz.innerHTML = Number(BloodyMaryWorcesterSzósz.innerHTML) + 1;
  BloodyMaryTabascoSzósz.innerHTML = Number(BloodyMaryTabascoSzósz.innerHTML) + 2;
});

BloodyMaryMinus.addEventListener('click', function(){
  if (BloodyMaryCount.innerHTML==1) {
      BloodyMaryCount.innerText = 1;

      BloodyMaryParadicsomlé.innerText = Number(BloodyMaryParadicsomlé.innerHTML) / 1;
      BloodyMaryCitromlé.innerHTML = Number(BloodyMaryCitromlé.innerHTML) / 1;
      BloodyMaryWorcesterSzósz.innerHTML = Number(BloodyMaryWorcesterSzósz.innerHTML) / 1;
      BloodyMaryTabascoSzósz.innerHTML = Number(BloodyMaryTabascoSzósz.innerHTML) / 1;
  }
  else{
  BloodyMaryParadicsomlé.innerText = Number(BloodyMaryParadicsomlé.innerHTML) - 20;
  BloodyMaryCitromlé.innerHTML = Number(BloodyMaryCitromlé.innerHTML) - 1;
  BloodyMaryWorcesterSzósz.innerHTML = Number(BloodyMaryWorcesterSzósz.innerHTML) - 1;
  BloodyMaryTabascoSzósz.innerHTML = Number(BloodyMaryTabascoSzósz.innerHTML) - 2;
  BloodyMaryCount.innerText = Number(BloodyMaryCount.innerHTML) - 1;
  }
});
//Baby Colada
let BabyColadaCount = document.querySelector('#BabyColadaCount')
let BabyColadaPlus = document.querySelector("#BabyColadaPlus");
let BabyColadaMinus = document.querySelector("#BabyColadaMinus");
let BabyColadaAnanász = document.querySelector("#BabyColadaAnanász");
let BabyColadaAnanászlé = document.querySelector("#BabyColadaAnanászlé");
let BabyColadaTejszín = document.querySelector("#BabyColadaTejszín");
let BabyColadaKókuszszirup = document.querySelector("#BabyColadaKókuszszirup");
let BabyColadaJégkocka = document.querySelector("#BabyColadaJégkocka");

BabyColadaPlus.addEventListener('click', function(){
  BabyColadaCount.innerText = Number(BabyColadaCount.innerHTML) + 1;

  BabyColadaAnanász.innerText = Number(BabyColadaAnanász.innerHTML) + 115;
  BabyColadaAnanászlé.innerHTML = Number(BabyColadaAnanászlé.innerHTML) + 100;
  BabyColadaTejszín.innerHTML = Number(BabyColadaTejszín.innerHTML) + 50;
  BabyColadaKókuszszirup.innerHTML = Number(BabyColadaKókuszszirup.innerHTML) + 0.5;
  BabyColadaJégkocka.innerHTML = Number(BabyColadaJégkocka.innerHTML) + 1;
});

BabyColadaMinus.addEventListener('click', function(){
  if (BabyColadaCount.innerHTML==1) {
      BabyColadaCount.innerText = 1;

      BabyColadaAnanász.innerText = Number(BabyColadaAnanász.innerHTML) / 1;
      BabyColadaAnanászlé.innerHTML = Number(BabyColadaAnanászlé.innerHTML) / 1;
      BabyColadaTejszín.innerHTML = Number(BabyColadaTejszín.innerHTML) / 1;
      BabyColadaKókuszszirup.innerHTML = Number(BabyColadaKókuszszirup.innerHTML) / 1;
      BabyColadaJégkocka.innerHTML = Number(BabyColadaJégkocka.innerHTML) / 1;
  }
  else{
  BabyColadaAnanász.innerText = Number(BabyColadaAnanász.innerHTML) - 115;
  BabyColadaAnanászlé.innerHTML = Number(BabyColadaAnanászlé.innerHTML) - 100;
  BabyColadaTejszín.innerHTML = Number(BabyColadaTejszín.innerHTML) - 50;
  BabyColadaKókuszszirup.innerHTML = Number(BabyColadaKókuszszirup.innerHTML) - 0.5;
  BabyColadaJégkocka.innerHTML = Number(BabyColadaJégkocka.innerHTML) - 1;
  BabyColadaCount.innerText = Number(BabyColadaCount.innerHTML) - 1;
  }
});
//Watermelon
let JuicyCount = document.querySelector('#JuicyCount')
let JuicyPlus = document.querySelector("#JuicyPlus");
let JuicyMinus = document.querySelector("#JuicyMinus");
let JuicyTonik = document.querySelector("#JuicyTonik");
let JuicyCointreau = document.querySelector("#JuicyCointreau");
let JuicyVörösáfonyalé = document.querySelector("#JuicyVörösáfonyalé");
let JuicyLimelé = document.querySelector("#JuicyLimelé");

JuicyPlus.addEventListener('click', function(){
  JuicyCount.innerText = Number(JuicyCount.innerHTML) + 1;

  JuicyTonik.innerText = Number(JuicyTonik.innerHTML) + 150;
  JuicyCointreau.innerHTML = Number(JuicyCointreau.innerHTML) + 15;
  JuicyVörösáfonyalé.innerHTML = Number(JuicyVörösáfonyalé.innerHTML) + 40;
  JuicyLimelé.innerHTML = Number(JuicyLimelé.innerHTML) + 10;
});

JuicyMinus.addEventListener('click', function(){
  if (JuicyCount.innerHTML==1) {
      JuicyCount.innerText = 1;

      JuicyTonik.innerText = Number(JuicyTonik.innerHTML) / 1;
      JuicyCointreau.innerHTML = Number(JuicyCointreau.innerHTML) / 1;
      JuicyVörösáfonyalé.innerHTML = Number(JuicyVörösáfonyalé.innerHTML) / 1;
      JuicyLimelé.innerHTML = Number(JuicyLimelé.innerHTML) / 1;
  }
  else{
  JuicyTonik.innerText = Number(JuicyTonik.innerHTML) - 150;
  JuicyCointreau.innerHTML = Number(JuicyCointreau.innerHTML) - 15;
  JuicyVörösáfonyalé.innerHTML = Number(JuicyVörösáfonyalé.innerHTML) - 40;
  JuicyLimelé.innerHTML = Number(JuicyLimelé.innerHTML) - 10;
  JuicyCount.innerText = Number(JuicyCount.innerHTML) - 1;
  }
});
//Mimoza
let MimozaCount = document.querySelector('#MimozaCount')
let MimozaPlus = document.querySelector("#MimozaPlus");
let MimozaMinus = document.querySelector("#MimozaMinus");
let MimozaPezsgő = document.querySelector("#MimozaPezsgő");
let MimozaNarancslé = document.querySelector("#MimozaNarancslé");
let MimozaNarancsSzelet = document.querySelector("#MimozaNarancsSzelet");

MimozaPlus.addEventListener('click', function(){
  MimozaCount.innerText = Number(MimozaCount.innerHTML) + 1;

  MimozaPezsgő.innerText = Number(MimozaPezsgő.innerHTML) + 7.5;
  MimozaNarancslé.innerHTML = Number(MimozaNarancslé.innerHTML) + 7.5;
  MimozaNarancsSzelet.innerHTML = Number(MimozaNarancsSzelet.innerHTML) + 1;
});

MimozaMinus.addEventListener('click', function(){
  if (MimozaCount.innerHTML==1) {
      MimozaCount.innerText = 1;

      MimozaPezsgő.innerText = Number(MimozaPezsgő.innerHTML) / 1;
      MimozaNarancslé.innerHTML = Number(MimozaNarancslé.innerHTML) / 1;
      MimozaNarancsSzelet.innerHTML = Number(MimozaNarancsSzelet.innerHTML) / 1;
  }
  else{
  MimozaPezsgő.innerText = Number(MimozaPezsgő.innerHTML) - 7.5;
  MimozaNarancslé.innerHTML = Number(MimozaNarancslé.innerHTML) - 7.5;
  MimozaNarancsSzelet.innerHTML = Number(MimozaNarancsSzelet.innerHTML) - 1;
  MimozaCount.innerText = Number(MimozaCount.innerHTML) - 1;
  }
});
//Epres víz
let EpresCount = document.querySelector('#EpresCount')
let EpresPlus = document.querySelector("#EpresPlus");
let EpresMinus = document.querySelector("#EpresMinus");
let EpresViz = document.querySelector("#EpresViz");
let EpresEper = document.querySelector("#EpresEper");
let EpresLevendula = document.querySelector("#EpresLevendula");
let EpresJég = document.querySelector("#EpresJég");
let EpresMenta = document.querySelector("#EpresMenta");

EpresPlus.addEventListener('click', function(){
  EpresCount.innerText = Number(EpresCount.innerHTML) + 1;

  EpresViz.innerText = Number(EpresViz.innerHTML) + 0.5;
  EpresEper.innerHTML = Number(EpresEper.innerHTML) + 2;
  EpresLevendula.innerHTML = Number(EpresLevendula.innerHTML) + 2;
  EpresJég.innerHTML = Number(EpresJég.innerHTML) + 3;
  EpresMenta.innerHTML = Number(EpresMenta.innerHTML) + 2;
});

EpresMinus.addEventListener('click', function(){
  if (EpresCount.innerHTML==1) {
      EpresCount.innerText = 1;

      EpresViz.innerText = Number(EpresViz.innerHTML) / 1;
      EpresEper.innerHTML = Number(EpresEper.innerHTML) / 1;
      EpresLevendula.innerHTML = Number(EpresLevendula.innerHTML) / 1;
      EpresJég.innerHTML = Number(EpresJég.innerHTML) / 1;
      EpresMenta.innerHTML = Number(EpresMenta.innerHTML) / 1;
  }
  else{
  EpresViz.innerText = Number(EpresViz.innerHTML) - 0.5;
  EpresEper.innerHTML = Number(EpresEper.innerHTML) - 2;
  EpresLevendula.innerHTML = Number(EpresLevendula.innerHTML) - 2;
  EpresJég.innerHTML = Number(EpresJég.innerHTML) - 3;
  EpresMenta.innerHTML = Number(EpresMenta.innerHTML) - 2;
  EpresCount.innerText = Number(EpresCount.innerHTML) - 1;
  }
});
//Bananos
let BanánosCount = document.querySelector('#BanánosCount')
let BanánosPlus = document.querySelector("#BanánosPlus");
let BanánosMinus = document.querySelector("#BanánosMinus");
let BanánosNuttella = document.querySelector("#BanánosNuttella");
let BanánosBanán = document.querySelector("#BanánosBanán");
let BanánosCukor = document.querySelector("#BanánosCukor");
let BanánosTej = document.querySelector("#BanánosTej");
let BanánosTejszín = document.querySelector("#BanánosTejszín");

BanánosPlus.addEventListener('click', function(){
  BanánosCount.innerText = Number(BanánosCount.innerHTML) + 1;

  BanánosNuttella.innerText = Number(BanánosNuttella.innerHTML) + 2;
  BanánosBanán.innerHTML = Number(BanánosBanán.innerHTML) + 0.5;
  BanánosCukor.innerHTML = Number(BanánosCukor.innerHTML) + 0.5;
  BanánosTej.innerHTML = Number(BanánosTej.innerHTML) + 1.5;
  BanánosTejszín.innerHTML = Number(BanánosTejszín.innerHTML) + 2;
});

BanánosMinus.addEventListener('click', function(){
  if (BanánosCount.innerHTML==1) {
      BanánosCount.innerText = 1;

      BanánosNuttella.innerText = Number(BanánosNuttella.innerHTML) / 1;
      BanánosBanán.innerHTML = Number(BanánosBanán.innerHTML) / 1;
      BanánosCukor.innerHTML = Number(BanánosCukor.innerHTML) / 1;
      BanánosTej.innerHTML = Number(BanánosTej.innerHTML) / 1;
      BanánosTejszín.innerHTML = Number(BanánosTejszín.innerHTML) / 1;
  }
  else{
  BanánosNuttella.innerText = Number(BanánosNuttella.innerHTML) - 2;
  BanánosBanán.innerHTML = Number(BanánosBanán.innerHTML) - 0.5;
  BanánosCukor.innerHTML = Number(BanánosCukor.innerHTML) - 0.5;
  BanánosTej.innerHTML = Number(BanánosTej.innerHTML) - 1.5;
  BanánosTejszín.innerHTML = Number(BanánosTejszín.innerHTML) - 2;
  BanánosCount.innerText = Number(BanánosCount.innerHTML) - 1;
  }
});
//Moscow
let MuleCount = document.querySelector('#MuleCount')
let MulePlus = document.querySelector("#MulePlus");
let MuleMinus = document.querySelector("#MuleMinus");
let MuleLime = document.querySelector("#MuleLime");
let MuleCukorszirup = document.querySelector("#MuleCukorszirup");
let MuleMenta = document.querySelector("#MuleMenta");
let MuleSzóda = document.querySelector("#MuleSzóda");
let MuleGyömbérsör = document.querySelector("#MuleGyömbérsör");
let MuleJég = document.querySelector("#MuleJég");

MulePlus.addEventListener('click', function(){
  MuleCount.innerText = Number(MuleCount.innerHTML) + 1;

  MuleLime.innerText = Number(MuleLime.innerHTML) + 1;
  MuleCukorszirup.innerHTML = Number(MuleCukorszirup.innerHTML) + 1;
  MuleMenta.innerHTML = Number(MuleMenta.innerHTML) + 3;
  MuleSzóda.innerHTML = Number(MuleSzóda.innerHTML) + 60;
  MuleGyömbérsör.innerHTML = Number(MuleGyömbérsör.innerHTML) + 200;
  MuleJég.innerHTML = Number(MuleJég.innerHTML) + 3;
});

MuleMinus.addEventListener('click', function(){
  if (MuleCount.innerHTML==1) {
      MuleCount.innerText = 1;

      MuleLime.innerText = Number(MuleLime.innerHTML) / 1;
      MuleCukorszirup.innerHTML = Number(MuleCukorszirup.innerHTML) / 1;
      MuleMenta.innerHTML = Number(MuleMenta.innerHTML) / 1;
      MuleSzóda.innerHTML = Number(MuleSzóda.innerHTML) / 1;
      MuleGyömbérsör.innerHTML = Number(MuleGyömbérsör.innerHTML) / 1;
      MuleJég.innerHTML = Number(MuleJég.innerHTML) / 1;
  }
  else{
  MuleLime.innerText = Number(MuleLime.innerHTML) - 1;
  MuleCukorszirup.innerHTML = Number(MuleCukorszirup.innerHTML) - 1;
  MuleMenta.innerHTML = Number(MuleMenta.innerHTML) - 3;
  MuleSzóda.innerHTML = Number(MuleSzóda.innerHTML) - 60;
  MuleGyömbérsör.innerHTML = Number(MuleGyömbérsör.innerHTML) - 200;
  MuleJég.innerHTML = Number(MuleJég.innerHTML) - 3;
  MuleCount.innerText = Number(MuleCount.innerHTML) - 1;
  }
});
//Surely
let ShirleyCount = document.querySelector('#ShirleyCount')
let ShirleyPlus = document.querySelector("#ShirleyPlus");
let ShirleyMinus = document.querySelector("#ShirleyMinus");
let ShirleyLime = document.querySelector("#ShirleyLime");
let ShirleyCukorszirup = document.querySelector("#ShirleyCukorszirup");
let ShirleyMenta = document.querySelector("#ShirleyMenta");
let ShirleySzóda = document.querySelector("#ShirleySzóda");
let ShirleyGyömbérsör = document.querySelector("#ShirleyGyömbérsör");

ShirleyPlus.addEventListener('click', function(){
  ShirleyCount.innerText = Number(ShirleyCount.innerHTML) + 1;

  ShirleyLime.innerText = Number(ShirleyLime.innerHTML) + 1;
  ShirleyCukorszirup.innerHTML = Number(ShirleyCukorszirup.innerHTML) + 1;
  ShirleyMenta.innerHTML = Number(ShirleyMenta.innerHTML) + 3;
  ShirleySzóda.innerHTML = Number(ShirleySzóda.innerHTML) + 60;
  ShirleyGyömbérsör.innerHTML = Number(ShirleyGyömbérsör.innerHTML) + 200;
});

ShirleyMinus.addEventListener('click', function(){
  if (ShirleyCount.innerHTML==1) {
      ShirleyCount.innerText = 1;

      ShirleyLime.innerText = Number(ShirleyLime.innerHTML) / 1;
      ShirleyCukorszirup.innerHTML = Number(ShirleyCukorszirup.innerHTML) / 1;
      ShirleyMenta.innerHTML = Number(ShirleyMenta.innerHTML) / 1;
      ShirleySzóda.innerHTML = Number(ShirleySzóda.innerHTML) / 1;
      ShirleyGyömbérsör.innerHTML = Number(ShirleyGyömbérsör.innerHTML) / 1;
  }
  else{
  ShirleyLime.innerText = Number(ShirleyLime.innerHTML) - 1;
  ShirleyCukorszirup.innerHTML = Number(ShirleyCukorszirup.innerHTML) - 1;
  ShirleyMenta.innerHTML = Number(ShirleyMenta.innerHTML) - 3;
  ShirleySzóda.innerHTML = Number(ShirleySzóda.innerHTML) - 60;
  ShirleyGyömbérsör.innerHTML = Number(ShirleyGyömbérsör.innerHTML) - 200;
  ShirleyCount.innerText = Number(ShirleyCount.innerHTML) - 1;
  }
});