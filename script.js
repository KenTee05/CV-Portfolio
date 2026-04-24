// Haetaan painike HTML-sivulta
const portfolioBtn = document.getElementById('portfolioBtn');

// Haetaan portfolio-osio HTML-sivulta
const portfolio = document.getElementById('portfolio');

// Lisätään painikkeelle klikkaustapahtuma
portfolioBtn.addEventListener('click', () => {
  // Vaihdetaan näkyvyys päälle/pois
  portfolio.classList.toggle('show');

  // Muutetaan painikkeen teksti tilan mukaan
  if (portfolio.classList.contains('show')) {
    portfolioBtn.textContent = 'Sulje portfolio';
  } else {
    portfolioBtn.textContent = 'Avaa portfolio';
  }
});

