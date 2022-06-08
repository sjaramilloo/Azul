//Definiciones

async function handleSubmit(event, form) {
  event.preventDefault();
  var status_positive = document.getElementById("positive");
  var status_negative = document.getElementById("negative");

  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {

        status_positive.classList.remove("hidden");

        //desactivar la clase hidden del mensaje positivo
        form.reset();
      } else {
        response.json().then((data) => {
          status_negative.classList.remove("hidden");
        });
      }
    })
    .catch((error) => {
      //desactivar la clase hidden del mensaje negativo
      status_negative.classList.remove("hidden");
    });
}

function loadHomeCarousel() {
  var options = {
    numVisible: 3,
    fullwidth: true,
    indicators: true
  };
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems, options);
  });
}

function initFormListener() {
  var form = document.getElementById("form_contactenos");
  form.addEventListener("submit", (event) => {
    handleSubmit(event,form)
  });
}

//Ejecución

loadHomeCarousel();
initFormListener();
