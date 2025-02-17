document.getElementById('menu-toggle').addEventListener('click', function() {
    const navList = document.getElementById('nav-list');
    const isVisible = navList.style.display === 'block';
    navList.style.display = isVisible ? 'none' : 'block';
    document.getElementById('menu-toggle').textContent = isVisible ? '▼' : '▲';
  });
  
  document.getElementById('exercise1-btn').addEventListener('click', function() {
    document.getElementById('exercise1').style.display = 'block';
    document.getElementById('exercise2').style.display = 'none';
  });
  
  document.getElementById('exercise2-btn').addEventListener('click', function() {
    document.getElementById('exercise2').style.display = 'block';
    document.getElementById('exercise1').style.display = 'none';
  });
  
  document.getElementById('transportation').addEventListener('input', function() {
    const transport = this.value.toLowerCase();
    const img = document.getElementById('transport-img');
    if (transport === 'bike') {
      img.src = 'images/bike.png';
    } else if (transport === 'scooter') {
      img.src = 'images/scooter.jpeg';
    } else if (transport === 'car') {
      img.src = 'images/car.png';
    } else if (transport === 'skateboard') {
      img.src = 'images.skateboard.png';
    } else {
      img.src = '';
    }
  });
  
  function changeColor(color) {
    document.getElementById('heart').style.backgroundColor = color;
  }
  