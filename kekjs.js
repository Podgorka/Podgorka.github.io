function car (speed, weels, name){
	this.speed=speed;
	this.weels=weels;
	this.name=name;
}
let w = 22114;
let car1 = new car(228, 4, "koka");
document.write(car1.weels + " колеса у машины " + car1.name);
let massiv = new Array(14, 88, 2, 28);
let mda = massiv[1];
let mdaString = mda+"";
document.write("<p></p>" + massiv[0] + "~" + mda + " \f \f \f" + mdaString.length + ". а вот зто тангенс числа " +
w + " : " + Math.tan(w));
var m1 = ["a", "b", "c"];
var m2 = ["e", "f", "g","h"];
var mm = m1.concat(m2);
mm.forEach(function(item, i, mm) {
  document.write(" " + item + " ");
});