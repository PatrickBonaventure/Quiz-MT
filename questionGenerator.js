//Quiz amb preguntas de tipo 1 de verdadero o falso solo una opcion

//selecting all required elements
//const start_btn = document.querySelector(".start_btn button");
//const info_box = document.querySelector(".info_box");
//const exit_btn = info_box.querySelector(".buttons .quit");
//const continue_btn = info_box.querySelector(".buttons");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
let estadistiques = document.getElementById('estadistiques');

// const time_line = document.querySelector("header .time_line");
// const timeText = document.querySelector(".timer .time_left_txt");
// const timeCount = document.querySelector(".timer .timer_sec");
createBotonsPregunta()
// if startQuiz button clicked
// start_btn.onclick = ()=>{
//     info_box.classList.add("activeInfo"); //show info box
//     mostrarSoluciones();
// }
// if exitQuiz button clicked
// exit_btn.onclick = ()=>{
//     info_box.classList.remove("activeInfo"); //hide info box
// }
// if continueQuiz button clicked
// continue_btn.onclick = ()=>{
//     //info_box.classList.remove("activeInfo"); //hide info box
//     quiz_box.classList.add("activeQuiz"); //show quiz box
//     showQuetions(0); //calling showQuestions function
//     queCounter(1); //passing 1 parameter to queCounter
//     //startTimer(15); //calling startTimer function
//     //startTimerLine(0); //calling startTimerLine function
// }
//let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
//const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");
const botofinalitzar = document.getElementById('botofinalitzar');
let sortirestadistiquessimulacio = document.getElementById('sortirestadistiquessimulacio');
// if restartQuiz button clicked
// restart_quiz.onclick = ()=>{
//     quiz_box.classList.add("activeQuiz"); //show quiz box
//     result_box.classList.remove("activeResult"); //hide result box
//     //timeValue = 15; 
//     que_count = 0;
//     que_numb = 1;
//     userScore = 0;
//     widthValue = 0;
//     showQuetions(que_count); //calling showQestions function
//     queCounter(que_numb); //passing que_numb value to queCounter
//     clearInterval(counter); //clear counter
//     clearInterval(counterLine); //clear counterLine
//     //startTimer(timeValue); //calling startTimer function
//     //startTimerLine(widthValue); //calling startTimerLine function
//     //timeText.textContent = "Time Left"; //change the text of timeText to Time Left
//     next_btn.classList.remove("show"); //hide the next button
//     botosolucio.classList.remove('disable');
// }


// if Finalitzar Mode button clicked
botofinalitzar.onclick = ()=>{
    showResult() //Show results
    
}
// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}
const next_btn = document.querySelector("#botoseguent");
const bottom_ques_counter = document.querySelector("footer .total_que");
// if Next Que button clicked
next_btn.onclick = ()=>{
    showResultsEstadistiques();//mostrar resultats al premer el botó seguent
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        //showQuestions2(que_count)
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        //startTimer(timeValue); //calling startTimer function
        //startTimerLine(widthValue); //calling startTimerLine function
        //timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
        botosolucio.classList.remove('disable');
        
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}
// getting questions and options from array
function showQuetions(index){


    let tipopreguntas = questions[index].tipopregunta
    
    switch (tipopreguntas) {
        case 1:showQuestions1(index)
            
            break;
        case 2:showQuestions2(index)
        
            break;
    
        default:
            break;
    }
  

}

// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';
//if user clicked on option
function optionSelected(answer){
    
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.parentElement.textContent; //getting user selected option
    console.log(userAns)
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
  
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.parentElement.classList.add("correct"); //adding green color to correct selected option
        answer.parentElement.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.parentElement.classList.add("incorrect"); //adding red color to correct selected option
        answer.parentElement.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");
        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
    showResultsEstadistiques();//Show resultats al marcar una opció
    
}

function optionSelected2(answer){
    
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.value; //getting user selected option
    
    let  correcAns = questions[que_count].answer;
    //console.log('El  answer correcto ' + correcAns)
    const allOptions = option_list.children.length; //getting all option items

    correcAns.forEach(element => {
        if(userAns == element){ //if user selected option is equal to array's correct answer
            userScore += 1; //upgrading score value with 1
            answer.parentElement.classList.add("correct"); //adding green color to correct selected option
            answer.parentElement.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
            console.log("Correct Answer");
            console.log("Your correct answers = " + userScore);
        }
    });
//   for(i=0; i < allOptions-1; i++){
//     correcAns = questions[que_count].answer[i]; //getting correct answer from array
//     console.log('El user answer ' + userAns)
//     console.log('El  answer correcto ' + correcAns)
//   }
    // if(userAns == correcAns){ //if user selected option is equal to array's correct answer
    //     userScore += 1; //upgrading score value with 1
    //     answer.parentElement.classList.add("correct"); //adding green color to correct selected option
    //     answer.parentElement.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
    //     console.log("Correct Answer");
    //     console.log("Your correct answers = " + userScore);
    // }else{
    //     answer.parentElement.classList.add("incorrect"); //adding red color to correct selected option
    //     answer.parentElement.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
    //     console.log("Wrong Answer");
    //     for(i=0; i < allOptions; i++){
    //         if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
    //             option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
    //             option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
    //             console.log("Auto selected correct answer.");
    //         }
    //     }
    // }
    // for(i=0; i < allOptions; i++){
    //     option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    // }
    next_btn.classList.add("show"); //show the next button if user selected any option
    showResultsEstadistiques();//Show resultats al marcar una opció
    
}

function showResult(){
   // info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    const percentatgeScore = (userScore/que_numb*100).toFixed(2);//Calcular el % de acerts sobre el total de preguntes
    
    const demo = document.querySelector('#demo');
    demo.innerHTML=`${percentatgeScore}`;

    scoreText.innerHTML=`<span>${percentatgeScore}%</span>`
    let iconResults = document.querySelector('.icon_box');
    let iconColor = document.querySelector('.icon');
    if(percentatgeScore>=50){
        
        iconResults.insertAdjacentHTML("beforeend",tickIconTag);
        let scoreTag =`<div id="boxgraficatitle" style="background-color: green;">
        <span id="qualificaciofinal">Sèrie - APTE ( ${percentatgeScore} % ) - Preguntes: ${que_numb}</span>
        </div>`;
        scoreText.innerHTML = scoreTag;
    }else{
        
        iconResults.insertAdjacentHTML("beforeend",crossIconTag);
        let scoreTag =`<div id="boxgraficatitle" style="background-color: rgb(243, 73, 74);">
        <span id="qualificaciofinal">Sèrie - NO APTE ( ${percentatgeScore} % ) - Preguntes: ${que_numb}</span>
        </div>`;
        scoreText.innerHTML = scoreTag;
    }
 


    //showResultsEstadistiques();//mostrar resultats al final de completar el quiz
}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span><span><p>Preguntes realitzades: '+ index +'</p></span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
    
}

//
//
//
//


function createBotonsPregunta(){
    const footer = document.querySelector("footer");
    const div = document.createElement("div");
    div.id="botonspregunta";    
    footer.append(div);

    const button = document.createElement("button");
    button.id="botosolucio";
    button.className="next_btn";
    button.innerText="Resoldre";

    const button1 = document.createElement("button");
    button1.id="botoseguent";
    button1.className="next_btn";
    button1.innerHTML='Següent <i id="fletxaseguent" numerodemode="0" class="far fa-arrow-alt-circle-right"></i>';
    
    const button2 = document.createElement("button");
    button2.id="botofinalitzar";
    button2.className="next_btn";
    button2.innerText=" Finalitzar Mode";

    const botonsPregunta = document.getElementById("botonspregunta");
    botonsPregunta.append(button,button1,button2)
    
}


function mostrarSoluciones(){
    let botosolucio = document.getElementById('botosolucio');
    botosolucio.addEventListener('click', () => {
        
        createExplicacioPregunta()
        createSolucioPregunta()
        function createSolucioPregunta(){
            const div = document.createElement("div");
            div.id="soluciopregunta";
            
            option_list.append(div);
        
            const solucioPregunta = document.getElementById("soluciopregunta");
            const span =document.createElement("span");
            span.id="resultatpregunta";
            span.innerText="f;f;v;f";//Agafar valor de BD
            solucioPregunta.append(span);
        }
        
        function createExplicacioPregunta(answer){
            const div = document.createElement("div");
            div.id="explicaciopregunta";
            
            option_list.append(div);
        
            
            const explicacioPregunta = document.getElementById("explicaciopregunta");
            const label =document.createElement("label");
            label.innerText="SOLUCIÓ:";
            explicacioPregunta.append(label);
        
        
        
            
            const span =document.createElement("span");
            span.id="competenciapregunta";
            span.innerText="Totes les accions que afectin a la instal-lació de dispositius físics (hardware) i software (programari) es configuren sempre des del 'Taulell de control' i l'opció adient, en aquesta pregunta, 'Impressores'.";//Agafar de BD
            explicacioPregunta.append(span);

            //Auto Solucionari - Posible crear una funcio per nomes quan s'equivoquin?
   
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
              
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    if(option_list.children[i].classList.contains('correct')){
                        
                    }else{
                        option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                        option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                        console.log("Time Off: Auto selected correct answer.");  
                    }
                      
               
                } 
               
            } 
        
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
        
        }
   
        botosolucio.classList.add('disable');
       
  
    })
}


////////////////////////////////////////
  
document.body.onload = function () {
    

    configuradorpregunta.innerHTML=`
    <h2 id="instruccionssimulador" class="instruccionssimulador">Instruccions Simulador Actic</h2>
    <div id="boxmissatgeentradasimulador">
        <p>El simulador és una eina que ens permet practicar sobre les diferents competències que conformen l'examen de certificació ACTIC. Per iniciar el simulador s'ha de prémer sobre algun dels 3 modes.</p>
        <div id="fotomenuinstruccions"></div>
        <ul>
            <li><b>'Preguntes Aleatòries' </b>: L'usuari pot realitzar preguntes de forma aletòria de totes les competències. Aquest mode permet resoldre les preguntes amb la solució que es mostra a la part inferior al finalitzar-la.</li>
            <li><b> 'Preguntes per competències'</b>: Igual que el mètode anterior però treballant amb una sola competència.</li>
            <li><b>'Simulació d'Examen'</b>: L'usuari pot fer simulacions d'examen del nivell actic que estigui subscrit. Aquest mode és més restrictiu perquè no es poden visualitzar les solucions a les preguntes. A la finalització de la prova es mostrarà la nota obtinguda (Apte o No Apte) i el promig d'encerts de les preguntes realitzades en format percentatge.</li>
        </ul>
        <p>La <b>'Barra lateral dreta'</b> permet obtenir informació sobré l'evolució en cadascun dels modes. </p>
    </div>
    `

  };

  //Coger el valor de la lista de opciones del simulador
    llistamenuprincipal.addEventListener("click", (e) => {
    console.log(e.target.innerText); 
    let a=e.target.innerText;
    let b= e.target.value;
    console.log(b);
   
    llistamenuprincipal.className= 'disable';
    let configuradorpregunta = document.getElementById('configuradorpregunta');
    configuradorpregunta.className = "hide";  


    if(b==0){
        quiz_box.classList.add("activeQuiz"); //show quiz box
        instruccionssimulador.classList.remove("activeInfo");//hide intrucctions
        showQuetions(0); //calling showQestions function
        queCounter(1); //passing 1 parameter to queCounter
        mostrarSoluciones();
        createEstadistiques();
        generarNumAleatorio();
    }else if(b==1){
        quiz_box.classList.add("activeQuiz"); //show quiz box
        instruccionssimulador.classList.remove("activeInfo");//hide intrucctions
        showQuestions2(0); //calling showQestions function
        queCounter(1); //passing 1 parameter to queCounter
        mostrarSoluciones();
        createEstadistiques();
        generarNumAleatorio();
    }else if(b==2){
        //generarExamen();
        configuradorpregunta.innerHTML=`
        <div id="pregunta">
        <div>
            <label>Veritat</label>
            <label>Fals</label>
         </div>
         <div>
             <input type="radio" name="vf0" value="v">
             <input type="radio" name="vf0" value="f">
             Escriure en majúscules significa que estem cridant.
         </div>
         <div>
             <input type="radio" name="vf1" value="v">
             <input type="radio" name="vf1" value="f">
             Els usuaris escriuen sota un pseudònim anomenat nick.
         </div>
         <div>
             <input type="radio" name="vf2" value="v">
             <input type="radio" name="vf2" value="f">
             S'utilitzen per conversar de forma anònima amb altres persones. 
         </div>
         <div>
             <input type="radio" name="vf3" value="v">
             <input type="radio" name="vf3" value="f">
             Es poden enviar arxius executables perquè l'usuari els pugui reproduir.
         </div>
     </div>`

        createEstadistiquesTimer();
    
    }
 
    

    });

//Para hacer visible las estadisticas
    llistamenuprincipal.addEventListener ("click", startSimulation, false);
function startSimulation(){

    estadistiques.style.visibility = 'visible';
    
   
};

//Función de quando queremos tirar hacia atrás nos avisa antes de salir
function tiraratras(){
    window.onbeforeunload = function() { return "Your work will be lost."; };
}
tiraratras();


function showResultsEstadistiques(){
        //Generar el resultado en las estadisticas
        const percentatgeScore = (userScore/(que_numb)*100).toFixed(0);//Calcular el % de acerts sobre el total de preguntes
    
        const demo1 = document.querySelector('.demo1');
        demo1.innerHTML=`${percentatgeScore}%`
}



//Funcion COUNTDOWN TIMER
function countdownTimer(){
    //Total time of exam 1.5 hours
    let totaltime = 1.5 * 60 * 60 ;
    // Set the date we're counting down to

    let countDownDate = new Date().getTime()+ totaltime;

    // Update the count down every 1 second
    let x = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    //let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        alert("EL TEMPS HA FINALITZAT");

        showResult();
    }
    }, 1000);
}

//Crear la caja de estadisticas para las preguntas random
function createEstadistiques(){

    const div = document.createElement("div");
    div.id="numeropregunta";
    div.className="titolsestadistiques";

    const span = document.createElement("span");
    span.innerText="Número pregunta:";

    const span1 = document.createElement("span");
    span1.id="numeropreguntaenbd";
    span1.innerHTML="&nbsp";

    estadistiques.append(div);

    const numeroPregunta = document.getElementById("numeropregunta");
    numeroPregunta.append(span,span1);


    const div1 = document.createElement("div");
    div1.id="titol1";
    div1.className="titolsestadistiques";
    estadistiques.append(div1);
    const span2 = document.createElement("span");
    span2.innerText="% Encert última pregunta";
    const titol1 = document.getElementById("titol1");
    titol1.append(span2);

    const div2 = document.createElement("div");
    div2.id="rectangle";
    div2.className="rectangle";
    div2.innerHTML=`
    <div id="demo"></div>
    `;
    estadistiques.append(div2);

    const div3 = document.createElement("div");
    div3.id="titol2";
    div3.className="titolsestadistiques";
    estadistiques.append(div3);
    const span3 = document.createElement("span");
    span3.innerText="% Promig encerts serie";
    const titol2 = document.getElementById("titol2");
    titol2.append(span3);
    const div4 = document.createElement("div");
    div4.id="rectangle";
    div4.className="rectangle";
    div4.innerHTML=`
    <div id="demo" class="demo1"></div>
    `
    estadistiques.append(div4);

}
//Crear la caja de estadisticas para el Examen
function createEstadistiquesTimer(){
    const div = document.createElement("div");
    div.id="numeropregunta";
    div.className="titolsestadistiques";

    const span = document.createElement("span");
    span.innerText="Número pregunta:";

    const span1 = document.createElement("span");
    span1.id="numeropreguntaenbd";
    span1.innerHTML="&nbsp";

    estadistiques.append(div);

    const numeroPregunta = document.getElementById("numeropregunta");
    numeroPregunta.append(span,span1);


    const div1 = document.createElement("div");
    div1.id="titol1";
    div1.className="titolsestadistiques";
    estadistiques.append(div1);
    const span2 = document.createElement("span");
    span2.innerText="Timer";
    const titol1 = document.getElementById("titol1");
    titol1.append(span2);

    const div2 = document.createElement("div");
    div2.id="rectangle";
    div2.className="rectangle";
    div2.innerHTML=`
        <div id="demo">${countdownTimer()}</div>
    `;
    estadistiques.append(div2);

    const div3 = document.createElement("div");
    div3.id="titol2";
    div3.className="titolsestadistiques";
    estadistiques.append(div3);
    const span3 = document.createElement("span");
    span3.innerText="% Encert última pregunta";
    const titol2 = document.getElementById("titol2");
    titol2.append(span3);
    const div4 = document.createElement("div");
    div4.id="rectangle";
    div4.className="rectangle";
    div4.innerHTML=`
    <div id="demo"></div>
    `
    estadistiques.append(div4);

}




//Número aleatorio sin repetir
function generarNumAleatorio(){

    let btn = document.querySelector('#botoseguent');
    let output = document.querySelector('#numeropreguntaenbd');
    function getRandomNumber(min, max) {
        let step1 = max - min + 1;
        let step2 = Math.random() * step1;
        let result = Math.floor(step2) + min;
        return result;
    }
    function createArrayOfNumbers(start, end){
        let myArray = [];
        for(let i = start; i <= end; i++) { 
            myArray.push(i);
        }
        return myArray;
    }
    let numbersArray = createArrayOfNumbers(1,7);
    console.log(numbersArray)
    btn.addEventListener('click', () => {
        if(numbersArray.length == 0){
            alert('No hi han més preguntes');
            return;
        }
        let randomIndex = getRandomNumber(0, numbersArray.length-1);
        let randomNumber = numbersArray[randomIndex];
        console.log(randomNumber)
        numbersArray.splice(randomIndex, 1)
        output.innerText = randomNumber;
    });
    let randomIndex = getRandomNumber(0, numbersArray.length-1);
    let randomNumber = numbersArray[randomIndex];
    console.log(randomNumber)
    numbersArray.splice(randomIndex, 1)
    output.innerText = randomNumber;
};

function showQuestions1(index){
    const que_text = document.querySelector(".que_text");
    const aclariment_text = document.querySelector("#aclariment_text");
    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+"<i class='fa fa-question-circle'></i></i>&nbspPregunta: "+ questions[index].numb + ". " + questions[index].question +'</span>';
    let aclariment_tag = '<span>'+"<i class='fa fa-exclamation-circle'></i>&nbspAclariment: " + questions[index].clear +'</span>';

    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    aclariment_text.innerHTML = aclariment_tag;
    
    const option = option_list.querySelectorAll(".option");
    // set onclick attribute to all available options
    // for(let i=0; i < option.length; i++){
    //     option[i].setAttribute("onclick", "optionSelected(this)");
    // }
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";
    for (let i = 0; i < questions[index].options.length; i++) {

        const div = document.createElement("div");
        const input = document.createElement("input");
        input.type="radio";
        input.name="simple";
        input.value=i;
        
      
        
    
        
        
        choicesContainer.append(div);
        let pregunta = document.getElementById('choices');
        const sinput = pregunta.getElementsByTagName('div')[i];
        sinput.className="option";
        sinput.append(input);
        sinput.append(questions[index].options[i]);
        sinput.classList.add('flex');
     
        input.setAttribute("onclick", "optionSelected(this)");
      
        }
}

function showQuestions2(index){
    const que_text = document.querySelector(".que_text");
    const aclariment_text = document.querySelector("#aclariment_text");
    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+"<i class='fa fa-question-circle'></i></i>&nbspPregunta: "+ questions[index].numb + ". " + questions[index].question +'</span>';
    let aclariment_tag = '<span>'+"<i class='fa fa-exclamation-circle'></i>&nbspAclariment: " + questions[index].clear +'</span>';

    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    aclariment_text.innerHTML = aclariment_tag;
    
    const option = option_list.querySelectorAll(".option");
    // set onclick attribute to all available options
    // for(let i=0; i < option.length; i++){
    //     option[i].setAttribute("onclick", "optionSelected(this)");
    // }
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";
    const divVF = document.createElement("div");
    divVF.id="VoF";
    
    const label1 = document.createElement("label");
    label1.textContent="Veritat";
    const label2 = document.createElement("label");
    label2.textContent="Fals";

    divVF.append(label1,label2);
    
    for (let i = 0; i < questions[index].options.length; i++) {

      const div = document.createElement("div");
      const input = document.createElement("input");
      input.type="radio";
      input.name="vf"+i;
      input.value='v';
      
      const input1 = document.createElement("input");
      input1.type="radio";
      input1.name="vf"+i;
      input1.value='f';
    
      
  
      
      
      choicesContainer.append(div);
      let pregunta = document.getElementById('choices');
      const sinput = pregunta.getElementsByTagName('div')[i];
      sinput.className="option";
      sinput.append(input,input1);
      sinput.append(questions[index].options[i]);
  
   
      input.setAttribute("onclick", "optionSelected2(this)");
      input1.setAttribute("onclick", "optionSelected2(this)");
      sinput.classList.add('grid');
      }
  
      choicesContainer.prepend(divVF);
      
}

