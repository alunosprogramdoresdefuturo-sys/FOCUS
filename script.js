function validarLogin() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (email === "" || senha === "") {
    alert("Por favor, preencha todos os campos.");
    return false;
  }

  // Aqui você pode colocar validação real (ex: banco de dados)
  alert("Login realizado com sucesso!");
  return true; // redireciona para index.html
}
function participarDesafio() {
  alert("Você entrou no Desafio da Semana: Pratique a Gratidão!");
}

function publicar() {
  const feed = document.getElementById("feed");
  const textarea = document.querySelector("textarea");
  if (textarea.value.trim() !== "") {
    const post = document.createElement("article");
    post.innerHTML = `<h3>Você</h3><p>${textarea.value}</p>`;
    feed.prepend(post);
    textarea.value = "";
  } else {
    alert("Escreva algo antes de publicar!");
  }
}

function criarMeta() {
  alert("Nova meta criada com sucesso!");
}
function participarDesafio() {
  alert("Você entrou no Desafio da Semana: Pratique a Gratidão!");
}
function publicar() {
  const feed = document.getElementById("feed");
  const textarea = document.getElementById("postText");

  if (textarea.value.trim() !== "") {
    const post = document.createElement("article");
    post.innerHTML = `<h3>Você</h3><p>${textarea.value}</p>`;
    feed.prepend(post);
    textarea.value = "";
  } else {
    alert("Escreva algo antes de publicar!");
  }
}
function criarMeta() {
  alert("Nova meta criada com sucesso!");
}
function criarMeta() {
  alert("Nova meta criada com sucesso!");
}
function curtirReel() {
  alert("Você curtiu este Reel!");
}
let chatAtual = null;

function abrirChat(nome) {
  chatAtual = nome;
  document.getElementById("chatTitulo").innerText = "Conversando com " + nome;
  document.getElementById("chatMensagens").innerHTML = "";
}

function enviarMensagem() {
  const input = document.getElementById("mensagemInput");
  const texto = input.value.trim();
  if (texto !== "" && chatAtual) {
    const mensagens = document.getElementById("chatMensagens");
    const msg = document.createElement("p");
    msg.innerHTML = `<strong>Você:</strong> ${texto}`;
    mensagens.appendChild(msg);
    input.value = "";
    mensagens.scrollTop = mensagens.scrollHeight;
  } else {
    alert("Selecione um chat e escreva uma mensagem!");
  }
}
function editarPerfil() {
  alert("Função de edição de perfil em desenvolvimento!");
}
