let ocultarPreguntas = document.querySelector('#configuradorpregunta');
let mostrarResultados = document.querySelector('#boxgrafica');


let llistamenuprincipal = document.getElementById('llistamenuprincipal');



let preguntesaleatories = document.getElementById('preguntesaleatories');
let configuradorpregunta = document.getElementById('configuradorpregunta');
let estadistiques = document.getElementById('estadistiques');
let titulotipo = document.getElementById('titulotipo');

let instruccionesload = document.getElementById('creaciopregunta');




//Función para quitar el boton de marcha atrás
//  function nobackbutton(){
//      window.history.pushState(null, "", window.location.href);
//     window.onpopstate = () => {
//       window.history.pushState(null, "", window.location.href);
//       callback();
//     };
//  }
    
  
function tiraratras(){
    window.onbeforeunload = function() { return "Your work will be lost."; };
}
tiraratras();

 //Función que al cargar la página aparecen las intrucciones
  
 

  document.body.onload = function () {
    
    
    configuradorpregunta.innerHTML=`
    <h2 id="instruccionssimulador">Instruccions Simulador Actic</h2>
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

    llistamenuprincipal.addEventListener("click", (e) => {
    console.log(e.target.innerText); 
    let a=e.target.innerText;
    let b= e.target.value;
    console.log(b);
   
    llistamenuprincipal.className= 'disable';
    


    if(b==0){
        generarPreguntasAleatorias();
    }else if(b==1){
        alert('adeu');
        main();
    }else if(b==2){
        generarExamen();
    }
 

    });

    
 // preguntesaleatories.addEventListener ("click", generarPreguntas, false);
  function generarPreguntasAleatorias(){
    
    
    
    configuradorpregunta.innerHTML=`
    
    <div id="configuraciopregunta" style="display: none;">
    <label>Tipus de pregunta:</label>
    <span id="tipuspregunta">1</span>
    <label>Competencia:</label>
    <span id="competenciapregunta">2</span>
</div>

<div id="cabecerapregunta">
    <div class="hijoscabecera">
        <label><i class='fa fa-question-circle'></i></i>&nbspPregunta:</label>
        <span id="titolpregunta">Quina és la ruta més adient per realitzar la instal-lació d'una impressora?</span>
    </div>
    <div class="hijoscabecera">
        <label><i class='fa fa-exclamation-circle'></i>&nbspAclariment:</label>
        <span id="subtitolpregunta">Selecciona la resposta correcte.</span>
    </div>
</div>
<div id="pregunta">


    <div>
        <input type="radio" name="simple" value="0">EL Meu PC &gt; Propietats &gt; Instal-lar impressores
    </div>
    <div>
        <input type="radio" name="simple" value="1">Inici &gt; Xarxes &gt; Impressores
    </div>
    <div>
        <input type="radio" name="simple" value="2">Inici &gt;Taulell de control &gt; Impressores
    </div>
    <div>
        <input type="radio" name="simple" value="3">Configuració &gt; Xarxes &gt; Impressores
    </div>
</div>
<div id="soluciopregunta" style="display: none;">
    <span id="resultatpregunta">f;f;v;f</span>
</div>
<div id="explicaciopregunta" style="display: none;">
    <label>SOLUCIÓ:</label>
    <span id="explicapregunta">Totes les accions que afectin a la instal-lació de dispositius físics (hardware) i software (programari) es configuren sempre des del 'Taulell de control' i l'opció adient, en aquesta pregunta, 'Impressores'.</span>
</div>
<div id="botonspregunta">
    <button id="botosolucio" corregido="no"> Resoldre </button>
    <button id="botoseguent" numerodemode="0"> Següent <i id="fletxaseguent" numerodemode="0" class="far fa-arrow-alt-circle-right"></i></button>
    <button id="botofinalitzar"> Finalitzar Mode</button>
</div>
    `

    estadistiques.innerHTML=`                    
    <div id="numeropregunta" class="titolsestadistiques"><span>Número pregunta:</span>&nbsp<span id="numeropreguntaenbd"><h1 id="output" style="text-align: center"></h1></span></div>
    <div id="titol1" class="titolsestadistiques"><span>% Encert última pregunta</span></div>
    <div id="grafic1" class="grafics">
        <svg viewBox="0 0 100 100">
            <circle id="circuloexterior1" cx="50" cy="50" r="48" fill="#FDB900"></circle>
            <path fill="none" stroke-linecap="butt" stroke-width="16" stroke="#6CDB2C" id="circulo1" stroke-dasharray="0,251.2" d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"></path>
            <circle cx="50" cy="50" r="35" fill="gray"></circle>
            <text x="50" y="50" text-anchor="middle" dy="7" font-size="17" id="textocirculo1">0%</text>
        </svg>
    </div>
    <div id="titol2" class="titolsestadistiques"><span>% Promig encerts serie</span></div>
    <div id="grafic2" class="grafics">
        <svg viewBox="0 0 100 100">
            <circle id="circuloexterior2" cx="50" cy="50" r="48" fill="#FDB900"></circle>
            <path fill="none" stroke-linecap="butt" stroke-width="16" stroke="#F3494A" id="circulo2" stroke-dasharray="0,251.2" d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"></path>
            <circle cx="50" cy="50" r="35" fill="gray"></circle>
            <text x="50" y="50" text-anchor="middle" dy="7" font-size="17" id="textocirculo2">0.0%</text>
        </svg>
    </div>
    <div id="totalpreguntes" class="titolsestadistiques"><span>Preguntes realitzades:</span><i id="preguntesrealitzades">30</i></div>
    `

    mostrarSoluciones()
    generarNumAleatorio();
    finishSimulation();
    
    
  };

  function generarExamen(){
    configuradorpregunta.innerHTML=`
    
    <div id="configuraciopregunta" style="display: none;">
    <label>Tipus de pregunta:</label>
    <span id="tipuspregunta">1</span>
    <label>Competencia:</label>
    <span id="competenciapregunta">2</span>
</div>

<div id="cabecerapregunta">
    <div class="hijoscabecera">
        <label><i class='fa fa-question-circle'></i></i>Pregunta:</label>
        <span id="titolpregunta">Quina és la ruta més adient per realitzar la instal-lació d'una impressora?</span>
    </div>
    <div class="hijoscabecera">
        <label><i class='fa fa-exclamation-circle'></i>Aclariment:</label>
        <span id="subtitolpregunta">Selecciona la resposta correcte.</span>
    </div>
</div>
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
        </div>
<div id="soluciopregunta" style="display: none;">
    <span id="resultatpregunta">f;f;v;f</span>
</div>
<div id="explicaciopregunta" style="display: none;">
    <label>SOLUCIÓ:</label>
    <span id="explicapregunta">Totes les accions que afectin a la instal-lació de dispositius físics (hardware) i software (programari) es configuren sempre des del 'Taulell de control' i l'opció adient, en aquesta pregunta, 'Impressores'.</span>
</div>
<div id="botonspregunta">
    <button id="botosolucio" corregido="no"> Resoldre </button>
    <button id="botoseguent" numerodemode="0"> Següent <i id="fletxaseguent" numerodemode="0" class="far fa-arrow-alt-circle-right"></i></button>
    <button id="botofinalitzar"> Finalitzar Mode</button>
</div>


    `

    estadistiques.innerHTML=`                    
    <div id="numeropregunta" class="titolsestadistiques"><span>Número pregunta:</span>&nbsp<span id="numeropreguntaenbd">463</span></div>
    <div id="titol1" class="titolsestadistiques"><span>Timer</span></div>
    <div id="grafic1" class="grafics">
        <svg viewBox="0 0 100 100">
            <circle id="circuloexterior1" cx="50" cy="50" r="48" fill="#FDB900"></circle>
            <path fill="none" stroke-linecap="butt" stroke-width="16" stroke="#6CDB2C" id="circulo1" stroke-dasharray="0,251.2" d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"></path>
            <circle cx="50" cy="50" r="37" fill="gray"></circle>
            <text x="50" y="50" text-anchor="middle" dy="7" font-size="14" id="demo"></text>
        </svg>
    </div>
    <div id="titol2" class="titolsestadistiques"><span>% Promig encerts serie</span></div>
    <div id="grafic2" class="grafics">
        <svg viewBox="0 0 100 100">
            <circle id="circuloexterior2" cx="50" cy="50" r="48" fill="#FDB900"></circle>
            <path fill="none" stroke-linecap="butt" stroke-width="16" stroke="#F3494A" id="circulo2" stroke-dasharray="0,251.2" d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"></path>
            <circle cx="50" cy="50" r="35" fill="gray"></circle>
            <text x="50" y="50" text-anchor="middle" dy="7" font-size="17" id="textocirculo2">0.0%</text>
        </svg>
    </div>
    <div id="totalpreguntes" class="titolsestadistiques"><span>Preguntes realitzades:</span><i id="preguntesrealitzades">30</i></div>
    `
    generarNumAleatorio();
    countdownTimer();
  };
  
// Funcion para que aparezcan las estadisticas del usuario cuando empieza el simulador



llistamenuprincipal.addEventListener ("click", startSimulation, false);
function startSimulation(){
    
    estadistiques.style.visibility = 'visible';
    
   
};
// Funcion para que desaparezcan las estadisticas del usuario cuando acaba el simulador


//botofinalitzar.addEventListener ("click", finishSimulation, false);
function finishSimulation(){
   
    let botofinalitzar = document.getElementById('botofinalitzar');
    
       
    estadistiques.style.visibility = 'hidden';
    
    botofinalitzar.addEventListener('click', () => {
        configuradorpregunta.innerHTML=`
        <div id="boxgrafica">
            <div id="boxgraficatitle" style="background-color: rgb(243, 73, 74);">
            <span id="qualificaciofinal">Sèrie - NO APTE ( 13.33 % ) - Preguntes: 15</span>
            </div>
        
            <div id="boxgraficabotonsfooter">
                <button id="sortirestadistiquessimulacio">Sortir</button>
            </div>
        </div>
        `
        
        sortirResultats();
    });

  
};

function sortirResultats(){
    let sortirestadistiquessimulacio = document.getElementById('sortirestadistiquessimulacio');
    sortirestadistiquessimulacio.addEventListener('click', () => {
        
        location.reload();
    
    })
};

function mostrarSoluciones(){
    let botosolucio = document.getElementById('botosolucio');
    botosolucio.addEventListener('click', () => {
        createExplicacioPregunta()
        createSolucioPregunta()
        function createSolucioPregunta(){
            const div = document.createElement("div");
            div.id="soluciopregunta";
            
            pregunta.append(div);
        
            const solucioPregunta = document.getElementById("soluciopregunta");
            const span =document.createElement("span");
            span.id="resultatpregunta";
            span.innerText="f;f;v;f";//Agafar valor de BD
            solucioPregunta.append(span);
        }
        
        function createExplicacioPregunta(){
            const div = document.createElement("div");
            div.id="explicaciopregunta";
            
    pregunta.append(div);
        
            
            const explicacioPregunta = document.getElementById("explicaciopregunta");
            const label =document.createElement("label");
            label.innerText="SOLUCIÓ:";
            explicacioPregunta.append(label);
        
        
        
            
            const span =document.createElement("span");
            span.id="competenciapregunta";
            span.innerText="Totes les accions que afectin a la instal-lació de dispositius físics (hardware) i software (programari) es configuren sempre des del 'Taulell de control' i l'opció adient, en aquesta pregunta, 'Impressores'.";//Agafar de BD
            explicacioPregunta.append(span);
        
        
        }

        botosolucio.className= 'disable';

    
    })
}

//Número aleatorio sin repetir
function generarNumAleatorio(){
    let btn = document.querySelector('#botoseguent');
    let output = document.querySelector('#output');
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
    let numbersArray = createArrayOfNumbers(1,100);
    
    btn.addEventListener('click', () => {
        if(numbersArray.length == 0){
            alert('No hi han més preguntes');
            return;
        }
        let randomIndex = getRandomNumber(0, numbersArray.length-1);
        let randomNumber = numbersArray[randomIndex];
        numbersArray.splice(randomIndex, 1)
        output.innerText = randomNumber;
    });
};




//Condicional para el tipo de preguntas

// switch (key) {
//     case 1:
        
//         break;
//     case 2:

//         break;
//     case 3:

//         break;
//     case 4:

//         break;
//     case 5:

//         break;

//     default:
//         break;
// }



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
        configuradorpregunta.innerHTML=`
        <div id="boxgrafica">
            <div id="boxgraficatitle" style="background-color: rgb(243, 73, 74);">
            <span id="qualificaciofinal">Sèrie - NO APTE ( 13.33 % ) - Preguntes: 15</span>
            </div>
        
            <div id="boxgraficabotonsfooter">
                <button id="sortirestadistiquessimulacio">Sortir</button>
            </div>
        </div>
        `
        sortirResultats();
    }
    }, 1000);
}









