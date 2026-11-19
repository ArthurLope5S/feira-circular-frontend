
// FEIRA CIRCULAR - DEMONSTRAÇÃO FRONT-END

// Informações apresentadas para cada perfil.
const perfis = {
  feirante: {
    titulo: "Perfil Feirante selecionado!",
    texto: "Na plataforma completa, o feirante poderá anunciar excedentes, oferecer descontos e acompanhar suas ofertas."
  },

  consumidor: {
    titulo: "Perfil Consumidor selecionado!",
    texto: "Na plataforma completa, o consumidor poderá encontrar ofertas de alimentos e contribuir para a redução do desperdício."
  },

  ong: {
    titulo: "Perfil Organização Social selecionado!",
    texto: "Na plataforma completa, organizações sociais poderão conhecer oportunidades de doação e solicitar alimentos."
  }
};

// Executada ao clicar em um dos três cartões.
function selecionarPerfil(perfil) {
  const dados = perfis[perfil];

  if (!dados) {
    return;
  }

  // Salva o perfil escolhido no navegador.
  localStorage.setItem("feiracircular_perfil", perfil);

  // Atualiza o conteúdo da demonstração.
  document.getElementById("resultado-titulo").textContent =
    dados.titulo;

  document.getElementById("resultado-texto").textContent =
    dados.texto;

  // Exibe a mensagem de demonstração.
  const resultado = document.getElementById("resultado");
  resultado.hidden = false;

  resultado.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
}

// Permite selecionar outro perfil.
function voltar() {
  localStorage.removeItem("feiracircular_perfil");

  document.getElementById("resultado").hidden = true;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
