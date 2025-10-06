// 🔄 Alterna entre seções visíveis
function showSection(id) {
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.add('hidden');
  });
  const target = document.getElementById(id);
  if (target) target.classList.remove('hidden');
}

// 🌗 Alterna entre tema claro/escuro e salva preferência
function toggleTheme() {
  document.body.classList.toggle('dark');
  const temaAtual = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', temaAtual);
}

// 🧠 Aplica tema salvo ao carregar
window.addEventListener('DOMContentLoaded', () => {
  const temaSalvo = localStorage.getItem('theme');
  if (temaSalvo === 'dark') {
    document.body.classList.add('dark');
  }

  carregarProjetosGitHub();
});

// 🐙 Carrega repositórios públicos do GitHub dinamicamente
function carregarProjetosGitHub() {
  fetch('https://api.github.com/users/Hubertvariant/repos')
    .then(res => res.json())
    .then(repos => {
      const lista = document.getElementById('github-projects');
      repos.forEach(repo => {
        const item = document.createElement('li');
        item.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
        lista.appendChild(item);
      });
    })
    .catch(error => {
      console.error('Erro ao carregar repositórios:', error);
    });
}

// 📬 Validação simples do formulário de contato
document.getElementById('contact-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Mensagem enviada com sucesso!');
  this.reset();
});