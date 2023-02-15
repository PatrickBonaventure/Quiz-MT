` <!-- <div id="configuraciopregunta" style="display: none;">
<label>Tipus de pregunta:</label>
<span id="tipuspregunta">1</span>
<label>Competencia:</label>
<span id="competenciapregunta">2</span>
</div>
<div id="cabecerapregunta">
<div class="hijoscabecera">
    <label>Pregunta:</label>
    <span id="titolpregunta">Quina és la ruta més adient per realitzar la instal-lació d'una impressora?</span>
</div>
<div class="hijoscabecera">
    <label>Aclariment:</label>
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
</div> -->

<!-- 
<div id="boxgrafica">
<div id="boxgraficatitle" style="background-color: rgb(243, 73, 74);">
    <span id="qualificaciofinal">Sèrie - NO APTE ( 13.33 % ) - Preguntes: 15</span>
</div>
<div id="boxgraficaleft">
    <div>Estadístiques generals</div>
    <div id="boxgrafico">
        <div class="chartjs-size-monitor">
            <div class="chartjs-size-monitor-expand">
                <div class=""></div>
            </div>
            <div class="chartjs-size-monitor-shrink">
                <div class="">

                </div>
            </div>
        </div>
        <canvas id="migrafica" width="465" height="232" style="display: block; width: 465px; height: 232px;" class="chartjs-render-monitor"></canvas>
    </div>
</div>
<div id="boxgraficaright">
    <div>Desglossament per competència</div>
    <div id="boxdatosgenerales">
        <div class="chartjs-size-monitor">
            <div class="chartjs-size-monitor-expand">
                <div class=""></div>
            </div>
            <div class="chartjs-size-monitor-shrink">
                <div class=""></div>
            </div>
        </div>
        <canvas id="migraficahorizontal" width="484" height="242" style="display: block; width: 484px; height: 242px;" class="chartjs-render-monitor"></canvas>
    </div>
</div>
<div id="boxgraficabotonsfooter">
    <button id="sortirestadistiquessimulacio">Sortir</button>
</div>
</div> -->`
+
`<!-- <div id="pregunta"><div> <span> Pot apilar les dades. </span> <select name="selectRelacionar"><option value="error">------ Selecciona una opció ------</option><option value="1">Circular</option><option value="2">Línia</option></select> </div><div> <span> Només podem mostrar una sèrie de dades. </span> <select name="selectRelacionar"><option value="error">------ Selecciona una opció ------</option><option value="1">Circular</option><option value="2">Línia</option></select> </div><div> <span> Podem crear una línia de tendència. </span> <select name="selectRelacionar"><option value="error">------ Selecciona una opció ------</option><option value="1">Circular</option><option value="2">Línia</option></select> </div><div> <span> Permet separar les porcions del seu eix central </span> <select name="selectRelacionar"><option value="error">------ Selecciona una opció ------</option><option value="1">Circular</option><option value="2">Línia</option></select> </div><div> <span> Es pot combinar amb altres tipus de gràfics en un de sol. </span> <select name="selectRelacionar"><option value="error">------ Selecciona una opció ------</option><option value="1">Circular</option><option value="2">Línia</option></select> </div></div>
       <div id="soluciopregunta" style="display: none;"><span id="resultatpregunta">2;1;2;1;2</span></div>
       <br>

       <div id="pregunta"><p>Els filtres automàtics permeten 
           <select name="selectCompletar">
               <option value="error">--- Selecciona una opció ---</option>
               <option value="tamany">tamany</option>
               <option value="color">color</option>
               <option value="mostrar">mostrar</option>
               <option value="substituir">substituir</option>
               <option value="monedes">monedes</option>
               <option value="eliminar">eliminar</option>
               <option value="eliminar">eliminar</option>
               <option value="dates">dates</option>
               <option value="ocultar">ocultar</option>
            </select> tots els registres que no compleixen els criteris. Podem aplicar filtres sobre columnes que continguin text, números i 
            <select name="selectCompletar"><option value="error">--- Selecciona una opció ---</option>
                <option value="tamany">tamany</option>
                <option value="color">color</option>
                <option value="mostrar">mostrar</option>
                <option value="substituir">substituir</option>
                <option value="monedes">monedes</option>
                <option value="eliminar">eliminar</option>
                <option value="eliminar">eliminar</option>
                <option value="dates">dates</option>
                <option value="ocultar">ocultar</option>
            </select>. A més, hi ha la possibilitat de filtrar els registres  a partir del seu 
            <select name="selectCompletar">
                <option value="error">--- Selecciona una opció ---</option>
                <option value="tamany">tamany</option>
                <option value="color">color</option>
                <option value="mostrar">mostrar</option>
                <option value="substituir">substituir</option>
                <option value="monedes">monedes</option>
                <option value="eliminar">eliminar</option>
                <option value="eliminar">eliminar</option>
                <option value="dates">dates</option>
                <option value="ocultar">ocultar</option>
            </select> sempre i quan se'ls hagi aplicat prèviament un format condicional. Els filtres es poden 
            <select name="selectCompletar">
                <option value="error">--- Selecciona una opció ---</option>
                <option value="tamany">tamany</option>
                <option value="color">color</option>
                <option value="mostrar">mostrar</option>
                <option value="substituir">substituir</option>
                <option value="monedes">monedes</option>
                <option value="eliminar">eliminar</option>
                <option value="eliminar">eliminar</option>
                <option value="dates">dates</option>
                <option value="ocultar">ocultar</option>
            </select> prement el mateix botó que s'ha utilitzat per activar-los.</p></div>
       <div id="soluciopregunta" style="display: none;"><span id="resultatpregunta">ocultar;dates;color;eliminar;eliminar;mostrar;monedes;tamany;substituir</span></div>

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
                Els usuaris escriuen sota un pseudònim anomenat `nick`.
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
        </div> -->`