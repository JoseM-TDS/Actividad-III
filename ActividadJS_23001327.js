var Mes = prompt("Mes: (En numeros)");
var Dia = prompt("Dia: (En numeros)");


if (Mes == 3 && Dia >= 21 || Mes == 4 && Dia <=20){
  alert("Eres Aries!");
}else if (Mes == 4 && Dia >= 21 || Mes == 5 && Dia <=20){
  alert("Eres Tauro!");
}else if (Mes == 5 && Dia >= 21 || Mes == 6 && Dia <=20){
  alert("Eres Gemenis!");
}else if (Mes == 6 && Dia >= 21 || Mes == 7 && Dia <=22){
  alert("Eres Cancer!");
}else if (Mes == 7 && Dia >= 23 || Mes == 8 && Dia <=23){
  alert("Eres Leo!");
}else if (Mes == 8 && Dia >= 24 || Mes == 9 && Dia <=22){
  alert("Eres Virgo!");
}else if (Mes == 9 && Dia >= 23 || Mes == 10 && Dia <=23){
  alert("Eres Libra!");
}else if (Mes == 10 && Dia >= 24 || Mes == 11 && Dia <=22){
  alert("Eres Scorpio!");
}else if (Mes == 11 && Dia >= 23 || Mes == 12 && Dia <=21){
  alert("Eres Sagitario!");
}else if (Mes == 12 && Dia >= 22 || Mes == 1 && Dia <=20){
  alert("Eres Capricornio!");
}else if (Mes == 1 && Dia >= 21 || Mes == 2 && Dia <=19){
  alert("Eres Acuario!");
}else if (Mes == 2 && Dia >= 20 || Mes == 3 && Dia <=20){
  alert("Eres Piscis!");
}else{
  alert("Error!");
}
  