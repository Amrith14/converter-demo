

//For Weight Calculation

document.getElementById('output').style.visibility='hidden';

document.getElementById('kgInput').addEventListener('input',function(e){

  document.getElementById('output').style.visibility='visible';

let kg = e.target.value;

document.getElementById('gramsOutput').innerHTML = kg*1000;

document.getElementById('lbsOutput').innerHTML = kg*2.20462;

document.getElementById('ozOutput').innerHTML = kg*35.274;

document.getElementById('tonOutput').innerHTML = kg/1000;

});

//For Area Calculation

document.getElementById('outputArea').style.visibility='hidden';

document.getElementById('areaInput').addEventListener('input',function(e){

  document.getElementById('outputArea').style.visibility='visible';


let area= e.target.value;

document.getElementById('areaToCentOutput').innerHTML = area*2.47105;

document.getElementById('areaToHectareOutput').innerHTML =area*0.01 ;
});

//For Cent Calculation

document.getElementById('outputCent').style.visibility='hidden';

document.getElementById('centInput').addEventListener('input',function(e){

  document.getElementById('outputCent').style.visibility='visible';

let cent= e.target.value;

document.getElementById('centToSqFtOutput').innerHTML = cent*435.6;

document.getElementById('centToAreaOutput').innerHTML =cent*0.40468 ;

document.getElementById('centToHectareOutput').innerHTML =cent*0.004 ;

document.getElementById('centToSqMeterOutput').innerHTML =cent*40.46 ;
});

//For SqMeter Calculation

document.getElementById('outputSqMeter').style.visibility='hidden';

document.getElementById('sqMeterInput').addEventListener('input',function(e){

  document.getElementById('outputSqMeter').style.visibility='visible';

let sqMeter= e.target.value;

document.getElementById('sqMeterToSqFtOutput').innerHTML = sqMeter*10.7369;
});


//For SqFt Calculation

document.getElementById('outputSqFt').style.visibility='hidden';

document.getElementById('sqFtInput').addEventListener('input',function(e){

  document.getElementById('outputSqFt').style.visibility='visible';
let sqFt= e.target.value;

document.getElementById('sqFtToSqMeterOutput').innerHTML = sqFt*0.092903;
});