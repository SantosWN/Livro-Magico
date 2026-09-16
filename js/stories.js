// ==========================================
// CATÁLOGO DE HISTÓRIAS
// O LIVRO MÁGICO DE LEITURA
// ==========================================

const catalogoHistorias = [

  // =========================================================
  // HISTÓRIA 1 - A FLORESTA SECRETA
  // =========================================================

  {
    id: "floresta",

    titulo: "🌲 A Floresta Secreta",

    paginas: [

      // PÁGINA 1
      `
      Era uma vez, em um reino cercado por montanhas e rios
      cristalinos, vivia um(a) jovem muito corajoso(a) chamado(a)
      <span class="highlight-name" id="name-tag">{nome}</span>.

      Desde pequeno(a), <span class="highlight-name">{nome}</span>
      adorava explorar os lugares mais misteriosos do reino.
      Tinha muita curiosidade, gostava de ajudar as pessoas
      e nunca deixava um amigo para trás.
      `,


      // PÁGINA 2
      `
      Certa manhã, enquanto caminhava perto da vila,
      <span class="highlight-name" id="name-tag">{nome}</span>
      encontrou uma pequena folha dourada caída no caminho.

      A folha brilhava como se tivesse sido feita de ouro.

      Ao tocá-la, uma pequena luz apareceu e apontou para
      uma antiga trilha escondida entre as árvores.
      `,


      // PÁGINA 3
      `
      <span class="highlight-name" id="name-tag">{nome}</span>
      seguiu a trilha e chegou diante de uma enorme floresta.

      Os moradores do reino chamavam aquele lugar de
      Floresta Secreta.

      Diziam que poucas pessoas conseguiam encontrar sua entrada
      e que somente alguém de coração bondoso poderia descobrir
      seus maiores segredos.
      `,


      // PÁGINA 4
      `
      Assim que entrou na floresta,
      <span class="highlight-name" id="name-tag">{nome}</span>
      ouviu um pequeno som vindo de trás de uma árvore.

      — Socorro! Tem alguém aí? — perguntou uma voz baixinha.

      Era um pequeno coelho chamado Lupi.

      Ele estava perdido e não conseguia encontrar o caminho
      de volta para sua família.
      `,


      // PÁGINA 5
      `
      <span class="highlight-name" id="name-tag">{nome}</span>
      decidiu ajudar Lupi.

      Os dois caminharam juntos pela floresta enquanto
      observavam as árvores gigantes, flores coloridas
      e pequenas luzes mágicas que dançavam pelo ar.

      Depois de algum tempo, encontraram uma ponte de madeira
      sobre um riacho cristalino.
      `,


      // PÁGINA 6
      `
      No meio da ponte havia uma pequena placa:

      "Somente quem ajudar sem pedir nada em troca
      poderá encontrar o caminho verdadeiro."

      <span class="highlight-name" id="name-tag">{nome}</span>
      sorriu.

      — Acho que estamos no caminho certo, Lupi.

      De repente, a folha dourada começou a brilhar novamente
      e mostrou uma nova direção.
      `,


      // PÁGINA 7
      `
      Seguindo a luz, <span class="highlight-name" id="name-tag">{nome}</span>
      encontrou uma clareira escondida.

      No centro havia uma árvore enorme, tão alta que seus galhos
      pareciam tocar as nuvens.

      Na base da árvore existia um pequeno baú de madeira.
      `,


      // PÁGINA 8
      `
      O baú estava trancado.

      Ao lado dele havia uma chave dourada.

      <span class="highlight-name" id="name-tag">{nome}</span>
      pegou a chave e abriu o baú.

      Dentro havia um mapa mágico, uma pequena pedra brilhante
      e uma mensagem:

      "A verdadeira riqueza está em ajudar aqueles que precisam."
      `,


      // PÁGINA 9
      `
      Assim que <span class="highlight-name" id="name-tag">{nome}</span>
      terminou de ler a mensagem, uma luz dourada iluminou toda
      a floresta.

      As árvores começaram a brilhar.

      Pequenos pássaros apareceram.

      Flores mágicas se abriram por toda a clareira.

      E então surgiu uma linda guardiã da floresta.
      `,


      // PÁGINA 10
      `
      — Você encontrou o Tesouro da Sabedoria — disse a guardiã.

      <span class="highlight-name" id="name-tag">{nome}</span>
      olhou para o baú e perguntou:

      — Mas onde está o tesouro?

      A guardiã sorriu.

      — O tesouro não é ouro. É a coragem, a amizade
      e a bondade que você demonstrou durante sua jornada.
      `,


      // PÁGINA 11
      `
      A guardiã então entregou a <span class="highlight-name" id="name-tag">{nome}</span>
      a pequena pedra brilhante.

      — Quando alguém precisar de ajuda, esta pedra lembrará
      você de que nunca deve desistir de fazer o bem.

      Depois disso, a folha dourada começou a flutuar
      e mostrou o caminho de volta para a vila.
      `,


      // PÁGINA 12
      `
      No caminho de volta, <span class="highlight-name" id="name-tag">{nome}</span>
      finalmente encontrou a família de Lupi.

      O pequeno coelho correu para seus pais.

      — Muito obrigado! — disse Lupi.

      <span class="highlight-name">{nome}</span> ficou muito feliz
      ao ver a família reunida novamente.
      `,


      // PÁGINA 13
      `
      Quando voltou para a vila, todos ficaram admirados
      ao ouvir a história.

      <span class="highlight-name" id="name-tag">{nome}</span>
      contou sobre a floresta, a guardiã e o Tesouro da Sabedoria.

      A partir daquele dia, todos passaram a chamar
      <span class="highlight-name">{nome}</span>
      de Guardião(ã) da Floresta.
      `,


      // PÁGINA 14
      `
      E assim, a Floresta Secreta deixou de ser apenas
      uma lenda misteriosa.

      Ela se tornou um lugar de amizade, esperança e coragem.

      <span class="highlight-name" id="name-tag">{nome}</span>
      continuou vivendo muitas aventuras,
      sempre ajudando quem precisava.

      E dizem que, em noites de lua cheia,
      a pequena folha dourada ainda aparece
      para chamar <span class="highlight-name">{nome}</span>
      para uma nova aventura.

      🌟 E todos viveram felizes para sempre! 🌟
      `

    ],


    // =======================================================
    // ILUSTRAÇÕES DA FLORESTA
    // =======================================================

    desenhar: function (pagina, rc) {

      // PÁGINA 1
      if (pagina === 0) {

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


      // PÁGINA 2
      else if (pagina === 1) {

        rc.ellipse(
          190,
          75,
          70,
          45,
          {
            fill: "#ffd54f",
            fillStyle: "solid",
            roughness: 2
          }
        );

        rc.line(
          120,
          100,
          260,
          45,
          {
            stroke: "#66bb6a",
            strokeWidth: 3,
            roughness: 2
          }
        );
      }


      // PÁGINA 3
      else if (pagina === 2) {

        rc.rectangle(
          150,
          45,
          25,
          100,
          {
            fill: "#795548",
            fillStyle: "hachure",
            roughness: 2
          }
        );

        rc.circle(
          162,
          40,
          80,
          {
            fill: "#66bb6a",
            fillStyle: "hachure",
            roughness: 2
          }
        );
      }


      // PÁGINA 4
      else if (pagina === 3) {

        // Coelho

        rc.ellipse(
          190,
          90,
          65,
          45,
          {
            fill: "#eeeeee",
            fillStyle: "solid",
            roughness: 2
          }
        );

        rc.circle(
          155,
          65,
          35,
          {
            fill: "#eeeeee",
            fillStyle: "solid",
            roughness: 2
          }
        );

        rc.line(
          145,
          35,
          140,
          5,
          {
            stroke: "#757575",
            strokeWidth: 3
          }
        );

        rc.line(
          160,
          35,
          165,
          5,
          {
            stroke: "#757575",
            strokeWidth: 3
          }
        );
      }


      // PÁGINA 5
      else if (pagina === 4) {

        // Ponte

        rc.line(
          70,
          100,
          310,
          100,
          {
            stroke: "#795548",
            strokeWidth: 8,
            roughness: 2
          }
        );

        rc.line(
          100,
          100,
          120,
          140,
          {
            stroke: "#795548",
            strokeWidth: 5
          }
        );

        rc.line(
          280,
          100,
          260,
          140,
          {
            stroke: "#795548",
            strokeWidth: 5
          }
        );

        // Água

        rc.line(
          50,
          140,
          330,
          140,
          {
            stroke: "#42a5f5",
            strokeWidth: 3,
            roughness: 2
          }
        );
      }


      // PÁGINA 6
      else if (pagina === 5) {

        rc.rectangle(
          100,
          40,
          180,
          80,
          {
            fill: "#fff9c4",
            fillStyle: "solid",
            roughness: 2
          }
        );

        rc.line(
          130,
          80,
          250,
          80,
          {
            stroke: "#795548",
            strokeWidth: 2
          }
        );
      }


      // PÁGINA 7
      else if (pagina === 6) {

        rc.rectangle(
          170,
          20,
          40,
          120,
          {
            fill: "#795548",
            fillStyle: "hachure",
            roughness: 2
          }
        );

        rc.circle(
          190,
          30,
          110,
          {
            fill: "#66bb6a",
            fillStyle: "hachure",
            roughness: 2
          }
        );
      }


      // PÁGINA 8
      else if (pagina === 7) {

        rc.rectangle(
          120,
          60,
          140,
          70,
          {
            fill: "#8d6e63",
            fillStyle: "hachure",
            roughness: 2
          }
        );

        rc.circle(
          190,
          95,
          15,
          {
            fill: "#ffd54f",
            fillStyle: "solid"
          }
        );
      }


      // PÁGINA 9
      else if (pagina === 8) {

        rc.circle(
          190,
          75,
          80,
          {
            fill: "#fff176",
            fillStyle: "solid",
            roughness: 2
          }
        );

        rc.line(
          190,
          0,
          190,
          150,
          {
            stroke: "#ffd54f",
            strokeWidth: 2,
            roughness: 3
          }
        );
      }


      // PÁGINA 10
      else if (pagina === 9) {

        // Guardiã

        rc.circle(
          190,
          45,
          25,
          {
            fill: "#ffccbc",
            fillStyle: "solid"
          }
        );

        rc.line(
          190,
          70,
          190,
          130,
          {
            stroke: "#7e57c2",
            strokeWidth: 8,
            roughness: 2
          }
        );

        rc.line(
          190,
          85,
          150,
          110,
          {
            stroke: "#7e57c2",
            strokeWidth: 5
          }
        );

        rc.line(
          190,
          85,
          230,
          110,
          {
            stroke: "#7e57c2",
            strokeWidth: 5
          }
        );
      }


      // PÁGINA 11
      else if (pagina === 10) {

        rc.circle(
          190,
          75,
          55,
          {
            fill: "#81d4fa",
            fillStyle: "solid",
            roughness: 2
          }
        );

        rc.circle(
          190,
          75,
          25,
          {
            fill: "#fff176",
            fillStyle: "solid"
          }
        );
      }


      // PÁGINA 12
      else if (pagina === 11) {

        // Família do coelho

        rc.ellipse(
          150,
          90,
          55,
          40,
          {
            fill: "#eeeeee",
            fillStyle: "solid",
            roughness: 2
          }
        );

        rc.ellipse(
          230,
          90,
          55,
          40,
          {
            fill: "#eeeeee",
            fillStyle: "solid",
            roughness: 2
          }
        );

        rc.circle(
          190,
          60,
          30,
          {
            fill: "#eeeeee",
            fillStyle: "solid"
          }
        );
      }


      // PÁGINA 13
      else if (pagina === 12) {

        rc.circle(
          190,
          70,
          70,
          {
            fill: "#ffd54f",
            fillStyle: "solid",
            roughness: 2
          }
        );

        rc.line(
          120,
          130,
          260,
          130,
          {
            stroke: "#66bb6a",
            strokeWidth: 5
          }
        );
      }


      // PÁGINA 14
      else if (pagina === 13) {

        // Lua

        rc.circle(
          270,
          40,
          45,
          {
            fill: "#fff9c4",
            fillStyle: "solid",
            roughness: 2
          }
        );

        // Estrelas

        rc.circle(
          80,
          40,
          8,
          {
            fill: "#ffd54f",
            fillStyle: "solid"
          }
        );

        rc.circle(
          130,
          100,
          7,
          {
            fill: "#ffd54f",
            fillStyle: "solid"
          }
        );

        rc.circle(
          220,
          20,
          6,
          {
            fill: "#ffd54f",
            fillStyle: "solid"
          }
        );
      }

    }
  },


  // =========================================================
  // HISTÓRIA 2 - A VIAGEM ESPACIAL
  // =========================================================

  {
    id: "espaco",

    titulo: "🚀 A Viagem Espacial",

    paginas: [

      // PÁGINA 1
      `
      Desde muito pequeno(a), o(a) jovem astronauta
      <span class="highlight-name" id="name-tag">{nome}</span>
      adorava observar as estrelas.

      Todas as noites, olhava para o céu e imaginava
      como seria viajar pelo espaço e conhecer planetas distantes.

      Um dia, seu maior sonho estava prestes a se realizar.
      `,


      // PÁGINA 2
      `
      Certa manhã, <span class="highlight-name" id="name-tag">{nome}</span>
      recebeu uma mensagem misteriosa.

      — Preparar para a missão! — dizia a mensagem.

      <span class="highlight-name">{nome}</span> ficou muito feliz.

      Era o convite para participar de uma missão espacial
      nunca realizada antes.
      `,


      // PÁGINA 3
      `
      No centro espacial, <span class="highlight-name" id="name-tag">{nome}</span>
      encontrou uma enorme nave chamada Estrela Azul.

      A nave tinha janelas brilhantes, computadores inteligentes
      e um grande painel cheio de botões coloridos.

      — Pronto para a aventura? — perguntou o computador.

      — Mais do que pronto! — respondeu <span class="highlight-name">{nome}</span>.
      `,


      // PÁGINA 4
      `
      A contagem regressiva começou:

      5... 4... 3... 2... 1...

      🚀 DECOLAR!

      A Estrela Azul subiu rapidamente em direção ao céu.

      <span class="highlight-name" id="name-tag">{nome}</span>
      olhou pela janela e viu a Terra ficando cada vez menor.
      `,


      // PÁGINA 5
      `
      Depois de algum tempo, a nave chegou ao espaço.

      As estrelas brilhavam por todos os lados.

      <span class="highlight-name" id="name-tag">{nome}</span>
      ficou maravilhado(a).

      — É ainda mais bonito do que eu imaginava!

      O computador respondeu:

      — Ainda temos muitas maravilhas para descobrir.
      `,


      // PÁGINA 6
      `
      De repente, um pequeno sinal apareceu no painel.

      Uma luz misteriosa vinha de um planeta desconhecido.

      <span class="highlight-name" id="name-tag">{nome}
      </span> decidiu investigar.

      A Estrela Azul mudou de direção e seguiu até o planeta.
      `,


      // PÁGINA 7
      `
      O planeta era diferente de tudo que
      <span class="highlight-name" id="name-tag">{nome}</span>
      já tinha visto.

      O céu era roxo.

      As árvores brilhavam.

      Pequenos rios luminosos atravessavam os campos.

      Parecia um mundo mágico.
      `,


      // PÁGINA 8
      `
      Quando a nave pousou, três pequenos alienígenas
      apareceram.

      Eles tinham olhos grandes, eram coloridos
      e pareciam muito amigáveis.

      Um deles acenou para
      <span class="highlight-name" id="name-tag">{nome}</span>.

      — Bem-vindo ao planeta Lumina!
      `,


      // PÁGINA 9
      `
      Os alienígenas contaram que tinham um problema.

      O Cristal de Luz, que iluminava todo o planeta,
      havia perdido seu brilho.

      Sem ele, as plantas mágicas estavam começando a desaparecer.

      <span class="highlight-name" id="name-tag">{nome}</span>
      decidiu ajudar.
      `,


      // PÁGINA 10
      `
      <span class="highlight-name" id="name-tag">{nome}</span>
      e seus novos amigos começaram a procurar
      o Cristal de Luz.

      Eles atravessaram uma floresta brilhante,
      passaram por uma montanha azul
      e chegaram até uma enorme caverna.
      `,


      // PÁGINA 11
      `
      Dentro da caverna havia um grande cristal.

      Porém, ele estava completamente apagado.

      <span class="highlight-name" id="name-tag">{nome}</span>
      percebeu que havia pequenos símbolos ao redor dele.

      Depois de observar cuidadosamente,
      descobriu que os símbolos formavam uma mensagem:

      "A luz cresce quando compartilhada."
      `,


      // PÁGINA 12
      `
      <span class="highlight-name" id="name-tag">{nome}</span>
      teve uma ideia.

      Reuniu todos os habitantes de Lumina ao redor do cristal.

      Cada pessoa colocou uma pequena luz nas mãos
      e compartilhou sua energia com o cristal.

      Pouco a pouco, ele começou a brilhar.
      `,


      // PÁGINA 13
      `
      De repente...

      ✨ BOOOOM! ✨

      O Cristal de Luz voltou a brilhar como um pequeno sol.

      Todo o planeta ficou iluminado novamente.

      As árvores voltaram a florescer.

      Os rios ficaram ainda mais brilhantes.

      E os habitantes começaram a comemorar.
      `,


      // PÁGINA 14
      `
      Os habitantes de Lumina fizeram uma grande festa
      para agradecer a <span class="highlight-name" id="name-tag">{nome}</span>.

      Houve música, dança e muitas luzes coloridas.

      O líder do planeta entregou a
      <span class="highlight-name">{nome}</span>
      uma pequena estrela de cristal.

      — Para você nunca esquecer nossa amizade.
      `,


      // PÁGINA 15
      `
      Chegou a hora de voltar para a Terra.

      <span class="highlight-name" id="name-tag">{nome}</span>
      entrou na Estrela Azul e se despediu dos novos amigos.

      — Voltaremos a nos encontrar! — disse um dos alienígenas.

      A nave começou sua viagem de volta para casa.
      `,


      // PÁGINA 16
      `
      Quando chegou à Terra,
      <span class="highlight-name" id="name-tag">{nome}</span>
      contou tudo sobre o planeta Lumina.

      Todos ficaram impressionados com a aventura.

      Mas <span class="highlight-name">{nome}</span> sabia que aquela
      não era apenas uma história sobre espaço.

      Era uma história sobre amizade, coragem
      e sobre como uma pequena ajuda pode iluminar
      o mundo inteiro.
      `,


      // PÁGINA 17
      `
      Naquela noite, <span class="highlight-name" id="name-tag">{nome}</span>
      colocou a estrela de cristal ao lado da janela.

      Quando olhou para o céu, uma pequena luz piscou
      entre as estrelas.

      <span class="highlight-name">{nome}</span> sorriu.

      Talvez seus amigos de Lumina estivessem dizendo:

      "Boa noite, nosso amigo astronauta!"

      🌟 E assim, <span class="highlight-name">{nome}</span>
      continuou sonhando com novas aventuras.

      🚀 E todos viveram felizes para sempre! 🚀
      `

    ],


    // =======================================================
    // ILUSTRAÇÕES DO ESPAÇO
    // =======================================================

    desenhar: function (pagina, rc) {

      // PÁGINA 1
      if (pagina === 0) {

        rc.circle(
          300,
          35,
          40,
          {
            fill: "#fff176",
            fillStyle: "solid"
          }
        );

        rc.circle(
          80,
          40,
          8,
          {
            fill: "#ffffff",
            fillStyle: "solid"
          }
        );

        rc.circle(
          130,
          90,
          7,
          {
            fill: "#ffffff",
            fillStyle: "solid"
          }
        );
      }


      // PÁGINA 2
      else if (pagina === 1) {

        rc.rectangle(
          130,
          45,
          120,
          70,
          {
            fill: "#90caf9",
            fillStyle: "solid",
            roughness: 2
          }
        );

        rc.circle(
          190,
          80,
          25,
          {
            fill: "#ffd54f",
            fillStyle: "solid"
          }
        );
      }


      // PÁGINA 3
      else if (pagina === 2) {

        // Nave

        rc.rectangle(
          150,
          45,
          80,
          70,
          {
            fill: "#e0e0e0",
            fillStyle: "solid",
            roughness: 2
          }
        );

        rc.circle(
          190,
          65,
          30,
          {
            fill: "#42a5f5",
            fillStyle: "solid"
          }
        );

        rc.line(
          165,
          115,
          150,
          145,
          {
            stroke: "#ff7043",
            strokeWidth: 8,
            roughness: 2
          }
        );

        rc.line(
          215,
          115,
          230,
          145,
          {
            stroke: "#ff7043",
            strokeWidth: 8,
            roughness: 2
          }
        );
      }


      // PÁGINA 4
      else if (pagina === 3) {

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


      // PÁGINA 5
      else if (pagina === 4) {

        // Estrelas

        rc.circle(
          70,
          40,
          10,
          {
            fill: "#fff176",
            fillStyle: "solid"
          }
        );

        rc.circle(
          300,
          60,
          8,
          {
            fill: "#fff176",
            fillStyle: "solid"
          }
        );

        rc.circle(
          200,
          30,
          7,
          {
            fill: "#fff176",
            fillStyle: "solid"
          }
        );

        rc.circle(
          150,
          110,
          9,
          {
            fill: "#fff176",
            fillStyle: "solid"
          }
        );
      }


      // PÁGINA 6
      else if (pagina === 5) {

        rc.circle(
          190,
          75,
          65,
          {
            fill: "#ab47bc",
            fillStyle: "hachure",
            roughness: 2
          }
        );

        rc.ellipse(
          190,
          75,
          130,
          30,
          {
            stroke: "#ffee58",
            strokeWidth: 3
          }
        );
      }


      // PÁGINA 7
      else if (pagina === 6) {

        // Planeta mágico

        rc.circle(
          190,
          80,
          100,
          {
            fill: "#7e57c2",
            fillStyle: "hachure",
            roughness: 2
          }
        );

        rc.circle(
          130,
          50,
          15,
          {
            fill: "#81d4fa",
            fillStyle: "solid"
          }
        );

        rc.circle(
          250,
          100,
          18,
          {
            fill: "#81d4fa",
            fillStyle: "solid"
          }
        );
      }


      // PÁGINA 8
      else if (pagina === 7) {

        // Alienígena

        rc.circle(
          190,
          65,
          60,
          {
            fill: "#81c784",
            fillStyle: "solid",
            roughness: 2
          }
        );

        rc.circle(
          170,
          60,
          10,
          {
            fill: "#263238",
            fillStyle: "solid"
          }
        );

        rc.circle(
          210,
          60,
          10,
          {
            fill: "#263238",
            fillStyle: "solid"
          }
        );
      }


      // PÁGINA 9
      else if (pagina === 8) {

        rc.circle(
          190,
          75,
          70,
          {
            fill: "#fff176",
            fillStyle: "cross-hatch",
            roughness: 2
          }
        );
      }


      // PÁGINA 10
      else if (pagina === 9) {

        rc.line(
          100,
          130,
          190,
          30,
          {
            stroke: "#42a5f5",
            strokeWidth: 8,
            roughness: 2
          }
        );

        rc.line(
          190,
          30,
          280,
          130,
          {
            stroke: "#7e57c2",
            strokeWidth: 8,
            roughness: 2
          }
        );
      }


      // PÁGINA 11
      else if (pagina === 10) {

        rc.polygon(
          [
            [190, 15],
            [230, 70],
            [190, 135],
            [150, 70]
          ],
          {
            fill: "#81d4fa",
            fillStyle: "solid",
            roughness: 2
          }
        );
      }


      // PÁGINA 12
      else if (pagina === 11) {

        rc.circle(
          190,
          75,
          70,
          {
            fill: "#81d4fa",
            fillStyle: "solid",
            roughness: 2
          }
        );

        rc.circle(
          190,
          75,
          35,
          {
            fill: "#fff176",
            fillStyle: "solid"
          }
        );
      }


      // PÁGINA 13
      else if (pagina === 12) {

        rc.circle(
          190,
          75,
          80,
          {
            fill: "#fff176",
            fillStyle: "solid",
            roughness: 1.5
          }
        );

        rc.circle(
          100,
          40,
          8,
          {
            fill: "#ffffff",
            fillStyle: "solid"
          }
        );

        rc.circle(
          280,
          110,
          8,
          {
            fill: "#ffffff",
            fillStyle: "solid"
          }
        );
      }


      // PÁGINA 14
      else if (pagina === 13) {

        // Festa

        rc.circle(
          190,
          70,
          60,
          {
            fill: "#ab47bc",
            fillStyle: "solid",
            roughness: 2
          }
        );

        rc.circle(
          100,
          50,
          20,
          {
            fill: "#81c784",
            fillStyle: "solid"
          }
        );

        rc.circle(
          280,
          50,
          20,
          {
            fill: "#42a5f5",
            fillStyle: "solid"
          }
        );
      }


      // PÁGINA 15
      else if (pagina === 14) {

        rc.rectangle(
          150,
          40,
          80,
          70,
          {
            fill: "#e0e0e0",
            fillStyle: "solid",
            roughness: 2
          }
        );

        rc.line(
          165,
          110,
          150,
          145,
          {
            stroke: "#ff7043",
            strokeWidth: 8
          }
        );

        rc.line(
          215,
          110,
          230,
          145,
          {
            stroke: "#ff7043",
            strokeWidth: 8
          }
        );
      }


      // PÁGINA 16
      else if (pagina === 15) {

        rc.circle(
          190,
          75,
          70,
          {
            fill: "#90caf9",
            fillStyle: "solid",
            roughness: 2
          }
        );

        rc.circle(
          165,
          65,
          10,
          {
            fill: "#263238",
            fillStyle: "solid"
          }
        );

        rc.circle(
          215,
          65,
          10,
          {
            fill: "#263238",
            fillStyle: "solid"
          }
        );
      }


      // PÁGINA 17
      else if (pagina === 16) {

        // Lua

        rc.circle(
          270,
          45,
          45,
          {
            fill: "#fff9c4",
            fillStyle: "solid",
            roughness: 2
          }
        );


        // Estrela de cristal

        rc.polygon(
          [
            [150, 30],
            [165, 65],
            [200, 70],
            [175, 90],
            [180, 125],
            [150, 105],
            [120, 125],
            [125, 90],
            [100, 70],
            [135, 65]
          ],
          {
            fill: "#81d4fa",
            fillStyle: "solid",
            roughness: 2
          }
        );
      }

    }
  }

];