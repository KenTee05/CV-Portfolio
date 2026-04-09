const portfolioBtn = document.getElementById('portfolioBtn');
const portfolio = document.getElementById('portfolio');

portfolioBtn.addEventListener('click', () => {
  portfolio.classList.toggle('show');

  if (portfolio.classList.contains('show')) {
    portfolioBtn.textContent = 'Sulje portfolio';
  } else {
    portfolioBtn.textContent = 'Avaa portfolio';
  }
});
