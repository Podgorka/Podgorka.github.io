let go =[]; 
go.length=2; 
 
 
function qq1 (obj) { 
 console.log(obj.id); 
 let idshnic = obj.id; 
 let pl1 = (idshnic == 1) ? "Меркурий" : 
 (idshnic == 2) ? "Венера" : 
 (idshnic == 3) ? "Земля" : 
 (idshnic == 4) ? "Марс" : 
 (idshnic == 5) ? "Юпитер" : 
 (idshnic == 6) ? "Сатурн" : 
 (idshnic == 7) ? "Уран" : 
 (idshnic == 8) ? "Нептун" : "0"; 
 
 vivod1.innerHTML = pl1; 
 go[0]=pl1; 
 console.log(go[0]); 
 
} 
function qq2 (obj, pl1) { 
 console.log(obj.id); 
 let idshnic = obj.id; 
 let pl2 = (idshnic == 11) ? "Меркурий" : 
 (idshnic == 12) ? "Венера" : 
 (idshnic == 13) ? "Земля" : 
 (idshnic == 14) ? "Марс" : 
 (idshnic == 15) ? "Юпитер" : 
 (idshnic == 16) ? "Сатурн" : 
 (idshnic == 17) ? "Уран" : 
 (idshnic == 18) ? "Нептун" : "0"; 
 
 vivod2.innerHTML = pl2; 
 go[1]=pl2; 
 console.log(go[1]); 
  
} 
function rsstFun() { 
 
let vi = ((go[0]=="Меркурий" && go[1]=="Венера") || (go[0]=="Венера" && go[1]=="Меркурий")) ? 54 : 
((go[0]=="Меркурий"&&go[1]=="Земля") || (go[0]=="Земля"&&go[1]=="Меркурий")) ? 27 : 0; 
vivodRasst.innerHTML = vi + " километра"; 
}
