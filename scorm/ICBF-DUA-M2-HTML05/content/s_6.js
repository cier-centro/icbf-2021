var slideTitle = "Educación inclusiva";
var slideContent =`
<div class="row info-container">
  <div class="col">
    <div class="row header-row align-items-center">
      <div class="main-logo-header-left col-md-1 col-2"><img class="img-fluid"src="./images/logo-header.png"></div>
      <div class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5"><p>Diseño Universal para el Aprendizaje - DUA &gt; Educación Inclusiva &gt; Módulo 2</p></div>
      <div class="col-2 col-md-3"><a href="#" onclick="currentSlide(1) " class="btn btn-link btn-home float-right"></a></div>
    </div>
    <div class="row title-row">
      <div class="col d-flex align-items-center row">
        <p class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5 mb-0">Opciones</p>
        <div class="col-2 col-md-3">
          <img class="img-fluid float-right" src="images/img_s2_1.png" alt="Educación inclusiva">
        </div>
      </div>
    </div>

    <div class="row content-row">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 list-of-items">
            <div class="col-sm-12 d-flex item-button">
              <div class="row">
                <div class="icon-holder col-4 align-items-center justify-content-center d-flex">
                  <img class="img-fluid" src="images/img_s4_opc1.png" alt="Ilustración elementos">
                </div>
                <div class="col-7 item-text d-flex">
                  <p><b>Principio II</b><br>Ofrecer múltiples formas de acción y expresión</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <p class="p-box mb-0">Da clic en cada número para conocer más opciones del principio.</p>
          </div>



          <div class="col-12 mt-5">
            <div class="row collapse-dark">
              <div class="col-12 col-sm-6 col-lg-4 my-5">
                <div>
                  <button class="btn btn-collapse-item" data-toggle="collapse" href="#collapse_1" role="button" aria-expanded="false" aria-controls="collapse_1">Opciones para la acción física:</button>
                </div>
                <div>
                  <div class="collapse collapse-body" id="collapse_1">
                    <ul>
                      <li>Modo de respuesta física</li>
                      <li>Medios de navegación</li>
                      <li>Herramientas y tecnologías de ayuda</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-lg-4 my-5">
                <div>
                  <button class="btn btn-collapse-item" data-toggle="collapse" href="#collapse_2" role="button" aria-expanded="false" aria-controls="collapse_2">Opciones de habilidades expresivas y de fluidez:</button>
                </div>
                <div>
                  <div class="collapse collapse-body" id="collapse_2">
                    <ul>
                      <li>Medios para la comunicación</li>
                      <li>Herramientas para la solución de problemas</li>
                      <li>Andamiaje de la práctica el funcionamiento</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-lg-4 my-5">
                <div>
                  <button class="btn btn-collapse-item" data-toggle="collapse" href="#collapse_3" role="button" aria-expanded="false" aria-controls="collapse_3">Opciones para las funciones ejecutivas:</button>
                </div>
                <div>
                  <div class="collapse collapse-body" id="collapse_3">
                    <ul>
                      <li>Establecimiento efectivo de objetivos</li>
                      <li>Planificación y estrategias de desarrollo</li>
                      <li>Gestión de la información y los recursos</li>
                      <li>Seguimiento de los progresos</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <a href="#" onclick="currentSlide(4) " class="btn btn-link btn-back float-left"></a>
        <a href="#" onclick="currentSlide(6) " id="btnNext" class="btn btn-link btn-next float-right"></a>
      </div>
    </div>
  </div>
</div>
<div class="modal fade master-modal" id="rta-correct-1">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-body">
        <h4 class="modal-title">¡Muy bien!</h4>
        <p>El ejemplo corresponde a Educación inclusiva ya que Diego estudia con pares de su edad, se le provee acceso y oportunidad de participación en la misma medida que a sus compañeros, y adicionalmente, recibe apoyo para cumplir con sus metas académicas.</p>
        <div class="row">
          <div class="col">
            <a href="#" class="btn btn-link btn-next float-right mt-4" data-dismiss="modal"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="modal fade master-modal" id="rta-incorrect-1">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-body">
        <h4 class="modal-title">¡Vuelva a intentarlo!</h4>
        <p>Revise las características de la educación inclusiva e intente resolver la actividad.</p>
        <div class="row">
          <div class="col">
            <a href="#" class="btn btn-link btn-next float-right mt-4" data-dismiss="modal"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<audio id="successAudio">
  <source src="media/success.mp3" type="audio/mpeg">
</audio>
<audio id="errorAudio">
  <source src="media/error.mp3" type="audio/mpeg">
</audio>
`;
var slideActivityContent = {};
var finishedActivity = false;
$(document).ready(function() {
  $("#btnNext").hide();
  setAnswerButtonFunction();
  setComplete(1);
});

function setAnswerButtonFunction() {
  $(".answers-buttons .btn-light").click(function() {
    if ($(this).data('target') === "#rta-correct-1") {
      $(".answers-buttons .btn-light").addClass("disabled");
      changeClass ($(this).find( ".circle" ), "incorrect", "correct");
      finishedActivity = true;
      $("#successAudio")[0].play();
    }
    else {
      $(this).addClass("disabled");
      changeClass ($(this).find( ".circle" ), "correct", "incorrect");
      $("#errorAudio")[0].play();
    }
  });
}
function changeClass (element, oldClass, newClass) {
  element.addClass(newClass);
  element.removeClass(oldClass);
}
function setCompletedActivityFunction(){
  $(".master-modal").on('hidden.bs.modal', function () {
    showNextButton();
  });
}

function showNextButton() {
  console.log(finishedActivity);
  if (finishedActivity) {
    $("#btnNext").fadeIn(500).delay(500).effect( "bounce", "slow" );
  }
}
