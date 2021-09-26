console.log('Сверхразум ID DIOD приветствует вас');

function setQuestion(){
 
 document.getElementById("answer1").innerHTML = "";
 setTimeout(
  function pp1(){
   document.getElementById("p1").innerHTML = "Взываем к небу...";
   },1000);
 setTimeout(
  function pp2(){
 document.getElementById("p2").innerHTML = "Кажется бесполезно...";
 },2800);
 setTimeout(
  function pp3(){
 document.getElementById("p3").innerHTML = "Пробуем ещё раз...";
  },3800);
  
  setTimeout(
   function pp4(){
    document.getElementById("answer0").innerHTML = "Ответ получен... Подождите, идёт инициализация божественных протоколов...";
   },5000);
   
   setTimeout(
    function pp5(){
     var phrases = [
      "Думаю да",
      "Звучит неплохо",
      "Скорее всего",
      "Возможно...",
      "Не отрицаю",
      "Определённо нет",
      "Может не сегодня?",
      "Протоколы говорят нет"
      ];
      document.getElementById("p1").innerHTML= "";
      document.getElementById("p2").innerHTML= "";
      document.getElementById("p3").innerHTML= "";
      document.getElementById("answer0").innerHTML= "";
      document.getElementById("answer1").innerHTML = phrases[Math.floor(Math.random()*phrases.length)];
    },8000);
}