function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          
          fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
            .then(response => response.json())
            .then(data => {
              const location = data.display_name || 'Localização desconhecida';
              document.getElementById('local').value = location; // Preenche o campo "local" com o endereço
            })
            .catch(error => {
              console.error('Erro ao obter o local:', error);
              document.getElementById('local').value = 'Erro ao obter localização';
            });
        },
        function(error) {
          console.error('Erro ao obter geolocalização:', error);
          document.getElementById('local').value = 'Localização não disponível';
        }
      );
    } else {
      alert('A geolocalização não é suportada neste navegador.');
    }
  }

  

  window.onload = function() {
    getLocation();
  };