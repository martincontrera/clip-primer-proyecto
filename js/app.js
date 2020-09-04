const user_answer = document.querySelector(".user-answer");
const answer_input = document.querySelector(".answer-input");
const guess_btn = document.querySelector(".guess-btn");
const chances_left = document.querySelector(".chances-left");
const pista_1 = document.querySelector(".clue1");
const pista_2 = document.querySelector(".clue2");


let correct_answer = false;
let intentos = 4;
chances_left.innerHTML = intentos;

  guess_btn.addEventListener("click", callback = () =>{
    //const new_span = document.createElement("SPAN");
    const spanContent = document.createTextNode(answer_input.value);
    // new_span.appendChild(spanContent);
    // user_answer.appendChild(new_span);
    user_answer.innerHTML = spanContent.textContent;
    if (user_answer.textContent === "time") {
      console.log("yes!");
      correct_answer = true;
      user_answer.innerHTML = "Ganaste!Es correcto.";
      guess_btn.style.display = "none";
    } else {
      console.log("NO!");
      intentos--;
      chances_left.innerHTML = intentos;
      user_answer.innerHTML = user_answer.innerHTML + " es incorrecto.";
      console.log(intentos);
      if(intentos <= 0){
        console.log("you loose!");
        user_answer.innerHTML = user_answer.innerHTML + " Perdiste, ¡Prueba otra vez!";
      }
      if(intentos == 2){
        pista_1.style.display="block";
      } else if(intentos == 1){
        pista_2.style.display="block";
      }
    }
  })

