let marina = 60
let silvia = 50
let iza =  50

if(marina < iza && marina < silvia){
  console.log("Marina é a mais nova.");
} else if(iza < marina && iza < silvia) {
  console.log("Iza é a mais nova.");
} else if (silvia < marina && silvia < iza) {
  console.log("Silvia é a mais nova.");
} 
  else if(marina == iza && marina < silvia){
  console.log("Marina e Iza têm a mesma idade e são as mais novas");
}
  else if(silvia == iza && silvia < marina){
  console.log("Silvia e Iza têm a mesma idade e são as mais novas");
}
  else if(marina == silvia && silvia < iza){
  console.log("Marina e Silvia têm a mesma idade e são as mais novas");
}
  else{
  console.log("As três têm a mesma idade.")
}

