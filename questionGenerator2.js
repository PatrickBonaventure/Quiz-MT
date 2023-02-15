//Pruevas para hacer questiones de tipo 2 con la opcion de v o f




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
    divVF.name="VoF";
    choicesContainer.prepend(divVF);
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
  
   
      input.setAttribute("onclick", "optionSelected(this)");
    
      }
  

}