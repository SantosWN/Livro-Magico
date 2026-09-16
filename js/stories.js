// ==========================================
// CATÁLOGO DE HISTÓRIAS
// ==========================================

const catalogoHistorias = [

  // ========================================
  // HISTÓRIA 1
  // ========================================

  {
    id: "floresta",

    titulo: "🌲 A Floresta Secreta",

    paginas: [

      `
      Era uma vez, em um reino repleto de árvores gigantes,
      um(a) jovem muito corajoso(a) chamado(a)
      <span class="highlight-name" id="name-tag">{nome}</span>.
      Todos adoravam quando
      <span class="highlight-name">{nome}</span>
      passava sorrindo!
      `,

      `
      Certo dia, no bosque,
      <span class="highlight-name" id="name-tag">{nome}</span>
      encontrou um pequeno baú de madeira com uma chave dourada
      e um mapa que brilhava no escuro!
      `,

      `
      Com inteligência,
      <span class="highlight-name" id="name-tag">{nome}</span>
      seguiu o mapa e encontrou o Tesouro da Sabedoria,
      tornando-se o(a) grande herói(na) do reino!
      `
    ],


    // ======================================
    // DESENHOS
    // ======================================

    desenhar: function (pagina, rc) {

      if (pagina === 0) {

        // Sol

        rc.circle(
          300,
          40,
          45,
          {
            fill: "#ffe082",
            fillStyle: "solid",
            roughness: 1.5
          }
        );


        // Tronco

        rc.rectangle(
          70,
          70,
          25,
          60,
          {
            fill: "#8d6e63",
            fillStyle: "hachure",
            roughness: 2
          }
        );


        // Copa

        rc.circle(
          82,
          50,
          65,
          {
            fill: "#81c784",
            fillStyle: "hachure",
            roughness: 2.5
          }
        );

      }


      else if (pagina === 1) {

        // Baú

        rc.rectangle(
          120,
          40,
          140,
          80,
          {
            fill: "#a1887f",
            fillStyle: "hachure",
            roughness: 2
          }
        );


        // Fechadura

        rc.circle(
          190,
          80,
          20,
          {
            fill: "#ffd54f",
            fillStyle: "solid"
          }
        );

      }


      else if (pagina === 2) {

        // Tesouro

        rc.circle(
          190,
          70,
          75,
          {
            fill: "#fff176",
            fillStyle: "cross-hatch",
            roughness: 2
          }
        );

      }
    }
  },


  // ========================================
  // HISTÓRIA 2
  // ========================================

  {
    id: "espaco",

    titulo: "🚀 A Viagem Espacial",

    paginas: [

      `
      O(A) jovem astronauta
      <span class="highlight-name" id="name-tag">{nome}</span>
      sempre olhava para as estrelas
      e sonhava em explorar o universo infinito.
      `,

      `
      Em sua nave especial,
      <span class="highlight-name" id="name-tag">{nome}</span>
      decolou rumo à Lua e descobriu um novo planeta
      cheio de luzes e cores mágicas!
      `,

      `
      Os amigáveis alienígenas do planeta fizeram uma grande festa
      para comemorar a visita do(a) corajoso(a)
      <span class="highlight-name" id="name-tag">{nome}</span>!
      `
    ],


    // ======================================
    // DESENHOS
    // ======================================

    desenhar: function (pagina, rc) {

      if (pagina === 0) {

        // Corpo do foguete

        rc.line(
          190,
          20,
          160,
          120,
          {
            stroke: "#42a5f5",
            strokeWidth: 3,
            roughness: 2
          }
        );


        rc.line(
          190,
          20,
          220,
          120,
          {
            stroke: "#42a5f5",
            strokeWidth: 3,
            roughness: 2
          }
        );


        // Cabeça do foguete

        rc.circle(
          190,
          40,
          20,
          {
            fill: "#ff7043",
            fillStyle: "solid"
          }
        );

      }


      else if (pagina === 1) {

        // Planeta

        rc.circle(
          190,
          75,
          70,
          {
            fill: "#ab47bc",
            fillStyle: "hachure",
            roughness: 2
          }
        );


        // Anel

        rc.ellipse(
          190,
          75,
          140,
          30,
          {
            stroke: "#ffee58",
            strokeWidth: 2
          }
        );

      }


      else if (pagina === 2) {

        // Planeta dos alienígenas

        rc.circle(
          190,
          75,
          80,
          {
            fill: "#ffee58",
            fillStyle: "solid",
            roughness: 1.5
          }
        );

      }
    }
  }

];