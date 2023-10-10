document.getElementById('startAnimation').addEventListener('click', function(event) {
  event.preventDefault(); // Prevenir el envío del formulario

  var loadingContainer = document.getElementById('loadingContainer');
  loadingContainer.style.display = 'block';

  var text = document.querySelector('.text');
  var percentaje = document.querySelector('.percentaje');
  var progreso = document.querySelector('.progreso');
  var count = 0;
  var per = 0;
  var loading = setInterval(animate, 50);

  function animate() {
      if (count == 100 && per == 400) {
          text.textContent = "Completado";
          text.style.fontSize = "70px";
          text.classList.add("add");
          clearInterval(loading);
          // Redirigir a la página de inicio 
          window.location.href = "index.html";
      } else {
          per = per + 4;
          count = count + 1;
          progreso.style.width = per + 'px';
          percentaje.textContent = count + '%';
      }
  }
});