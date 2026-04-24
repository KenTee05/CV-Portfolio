// Haetaan painike ja portfolio-osio
const portfolioBtn = document.getElementById('portfolioBtn');
const portfolio = document.getElementById('portfolio');

// Lisätään painikkeelle klikkaustapahtuma
portfolioBtn.addEventListener('click', function() {

  // Vaihdetaan show-luokka päälle/pois
  portfolio.classList.toggle('show');

  // Muutetaan painikkeen teksti tilanteen mukaan
  if (portfolio.classList.contains('show')) {
    portfolioBtn.textContent = 'Piilota portfolio';
  } else {
    portfolioBtn.textContent = 'Näytä portfolio';
  }
});
