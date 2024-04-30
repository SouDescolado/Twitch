document.addEventListener('DOMContentLoaded', function() {
    fetch('data/skins.json')
      .then(response => response.json())
      .then(data => {
        exibirSkins(data.skins);
      })
      .catch(error => console.error('Erro ao carregar skins:', error));
  });
  
  function exibirSkins(skins) {
    const container = document.getElementById('skins');
    skins.forEach(skin => {
        const skinElement = document.createElement('div');
        skinElement.className = 'skin';

        const skinName = document.createElement('h2');
        skinName.textContent = skin;
        skinElement.appendChild(skinName);

        const skinImage = document.createElement('img');
        skinImage.src = `zomboidimg/${skin}.png`;
        skinImage.alt = `Imagem da skin ${skin}`;
        skinElement.appendChild(skinImage);

        container.appendChild(skinElement);
    });
  }