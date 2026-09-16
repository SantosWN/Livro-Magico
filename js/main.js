// ==========================================
// VARIÁVEIS PRINCIPAIS
// ==========================================

let historiaAtiva = null;

let nomeCrianca = "";

let paginaAtual = 0;


// ==========================================
// ESCAPAR HTML
// Evita que o nome digitado seja interpretado
// como código HTML.
// ==========================================

function escaparHtml(texto) {

  const mapa = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  };


  return texto.replace(
    /[&<>"']/g,
    function (caractere) {

      return mapa[caractere];
    }
  );
}


// ==========================================
// INICIAR HISTÓRIA
// ==========================================

function iniciarHistoria() {

  const inputNome =
    document.getElementById("child-name");


  const selectHistoria =
    document.getElementById("story-select");


  if (!inputNome || !selectHistoria) {

    console.error(
      "Elementos da tela inicial não foram encontrados."
    );

    return;
  }


  const nomeDigitado =
    inputNome.value.trim();


  // ========================================
  // VALIDAR NOME
  // ========================================

  if (!nomeDigitado) {

    alert(
      "Por favor, digite o nome da criança!"
    );

    inputNome.focus();

    return;
  }


  // ========================================
  // PEGAR HISTÓRIA
  // ========================================

  const idHistoria =
    parseInt(
      selectHistoria.value,
      10
    );


  if (
    isNaN(idHistoria) ||
    !catalogoHistorias[idHistoria]
  ) {

    alert(
      "Não foi possível encontrar a história selecionada."
    );

    return;
  }


  historiaAtiva =
    catalogoHistorias[idHistoria];


  nomeCrianca =
    nomeDigitado;


  paginaAtual = 0;


  // ========================================
  // INICIAR MÚSICA
  // ========================================

  if (
    typeof gerenciadorMusica !== "undefined" &&
    !gerenciadorMusica.tocando
  ) {

    toggleMusica();
  }


  // ========================================
  // ALTERAR TÍTULO
  // ========================================

  document.getElementById(
    "main-title"
  ).innerText =
    `📚 Aventuras de ${nomeCrianca}`;


  document.getElementById(
    "story-title"
  ).innerText =
    historiaAtiva.titulo;


  // ========================================
  // TROCAR TELAS
  // ========================================

  document.getElementById(
    "welcome-screen"
  ).style.display = "none";


  document.getElementById(
    "story-screen"
  ).style.display = "block";


  document.getElementById(
    "btn-home"
  ).style.display = "inline-block";


  // ========================================
  // MOSTRAR PRIMEIRA PÁGINA
  // ========================================

  exibirPagina();
}


// ==========================================
// EXIBIR PÁGINA
// ==========================================

function exibirPagina() {

  if (!historiaAtiva) {

    console.error(
      "Nenhuma história está ativa."
    );

    return;
  }


  const pagina =
    historiaAtiva.paginas[paginaAtual];


  if (!pagina) {

    console.error(
      "Página da história não encontrada."
    );

    return;
  }


  // ========================================
  // NOME SEGURO
  // ========================================

  const nomeSeguro =
    escaparHtml(nomeCrianca);


  // ========================================
  // SUBSTITUIR {nome}
  // ========================================

  const texto =
    pagina.replaceAll(
      "{nome}",
      nomeSeguro
    );


  document.getElementById(
    "story-text"
  ).innerHTML = texto;


  // ========================================
  // INDICADOR DA PÁGINA
  // ========================================

  document.getElementById(
    "page-indicator"
  ).innerText =
    `Página ${paginaAtual + 1} de ${historiaAtiva.paginas.length}`;


  // ========================================
  // BOTÃO ANTERIOR
  // ========================================

  const btnPrev =
    document.getElementById("btn-prev");


  if (paginaAtual === 0) {

    btnPrev.style.display = "none";

  } else {

    btnPrev.style.display =
      "inline-block";
  }


  // ========================================
  // BOTÃO PRÓXIMA
  // ========================================

  const btnNext =
    document.getElementById("btn-next");


  const btnRestart =
    document.getElementById("btn-restart");


  if (
    paginaAtual ===
    historiaAtiva.paginas.length - 1
  ) {

    btnNext.style.display = "none";

    btnRestart.style.display =
      "inline-block";

  } else {

    btnNext.style.display =
      "inline-block";

    btnRestart.style.display =
      "none";
  }


  // ========================================
  // DESENHAR NO CANVAS
  // ========================================

  const canvas =
    document.getElementById(
      "sketch-canvas"
    );


  if (canvas) {

    const ctx =
      canvas.getContext("2d");


    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );


    if (
      typeof rough !== "undefined" &&
      typeof historiaAtiva.desenhar === "function"
    ) {

      try {

        const rc =
          rough.canvas(canvas);


        historiaAtiva.desenhar(
          paginaAtual,
          rc
        );

      } catch (erro) {

        console.error(
          "Erro ao desenhar a ilustração:",
          erro
        );
      }

    } else {

      console.warn(
        "Rough.js não foi carregado."
      );
    }
  }


  // ========================================
  // DESTAQUE DO NOME
  // ========================================

  setTimeout(
    aplicarEfeitoDestaque,
    100
  );
}


// ==========================================
// EFEITO ROUGH NOTATION
// ==========================================

function aplicarEfeitoDestaque() {

  const elementoNome =
    document.getElementById(
      "name-tag"
    );


  if (
    elementoNome &&
    window.RoughNotation
  ) {

    try {

      const anotacao =
        RoughNotation.annotate(
          elementoNome,
          {
            type: "highlight",

            color: "#fff176",

            animationDuration: 800
          }
        );


      anotacao.show();

    } catch (erro) {

      console.error(
        "Erro no destaque do nome:",
        erro
      );
    }

  }
}


// ==========================================
// PRÓXIMA PÁGINA
// ==========================================

function proximaPagina() {

  if (!historiaAtiva) {

    return;
  }


  if (
    paginaAtual <
    historiaAtiva.paginas.length - 1
  ) {

    paginaAtual++;

    exibirPagina();
  }
}


// ==========================================
// PÁGINA ANTERIOR
// ==========================================

function paginaAnterior() {

  if (!historiaAtiva) {

    return;
  }


  if (paginaAtual > 0) {

    paginaAtual--;

    exibirPagina();
  }
}


// ==========================================
// REINICIAR
// ==========================================

function reiniciar() {

  // Parar música

  if (
    typeof gerenciadorMusica !== "undefined"
  ) {

    gerenciadorMusica.parar();
  }


  // Atualizar botão

  const musicButton =
    document.getElementById(
      "music-toggle"
    );


  if (musicButton) {

    musicButton.innerText =
      "🎵 Música: Off";
  }


  // Resetar variáveis

  historiaAtiva = null;

  nomeCrianca = "";

  paginaAtual = 0;


  // Resetar título

  document.getElementById(
    "main-title"
  ).innerText =
    "📚 O Livro Mágico";


  // Mostrar tela inicial

  document.getElementById(
    "welcome-screen"
  ).style.display = "block";


  // Esconder história

  document.getElementById(
    "story-screen"
  ).style.display = "none";


  // Esconder botão início

  document.getElementById(
    "btn-home"
  ).style.display = "none";


  // Limpar nome

  document.getElementById(
    "child-name"
  ).value = "";


  // Voltar seleção para primeira história

  document.getElementById(
    "story-select"
  ).selectedIndex = 0;


  // Limpar texto

  document.getElementById(
    "story-text"
  ).innerHTML = "";


  // Limpar canvas

  const canvas =
    document.getElementById(
      "sketch-canvas"
    );


  if (canvas) {

    const ctx =
      canvas.getContext("2d");


    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );
  }
}


// ==========================================
// ENTER PARA INICIAR
// ==========================================

document.addEventListener(
  "DOMContentLoaded",
  function () {

    const input =
      document.getElementById(
        "child-name"
      );


    if (input) {

      input.addEventListener(
        "keydown",
        function (evento) {

          if (
            evento.key === "Enter"
          ) {

            iniciarHistoria();
          }
        }
      );
    }


    console.log(
      "📚 O Livro Mágico foi carregado com sucesso!"
    );
  }
);