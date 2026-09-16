```
# 📚 O Livro Mágico das Aventuras

&gt; **"Onde a criança não apenas lê a história — ela se torna a grande protagonista!"**

---

## 📖 Sobre o Projeto

**O Livro Mágico das Aventuras** é uma aplicação web interativa desenvolvida para promover a leitura e a alfabetização infantil de forma lúdica [1, 2]. A aplicação coloca a criança no centro da narrativa através da interpolação dinâmica do seu nome nos títulos e capítulos das histórias [3].

Toda a interface foi projetada utilizando a estética *sketch* (desenhado à mão) [3, 4], oferecendo uma experiência visual acolhedora, artesanal e livre de distrações, seguindo boas práticas de usabilidade infantil [1, 2].

---

## ✨ Funcionalidades

- **Protagonismo Personalizado**: A criança digita seu nome e ele é inserido instantaneamente em tempo de execução ao longo da história [3].
- **Estética Artesanal (*Sketch Style*)**: Interface estilizada com o framework **PaperCSS**, simulando bordas irregulares e páginas de papel [4, 5].
- **Ilustrações Dinâmicas**: Desenhos temáticos em estilo rascunho renderizados no Canvas em cada capítulo através da biblioteca **Rough.js** [4, 6].
- **Destaques Animados**: O nome do(a) protagonista recebe anotações animadas em marca-texto desenhadas à mão via **Rough Notation** [4, 7, 8].
- **Ambiente Sonoro Lúdico**: Trilha sonora suave em estilo caixinha de música sintetizada nativamente via Web Audio API, com controle de ligar/desligar.
- **Navegação Intuitiva**: Controles simples com botões de próximo/anterior, seleção de histórias e botão **`🏠 Início`** na barra superior [3].

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 &amp; CSS3**: Estrutura semântica e estilização artesanal.
- **JavaScript (ES6+)**: Lógica da aplicação, navegação de páginas e gerenciamento do estado.
- **[PaperCSS](https://www.getpapercss.com/)**: Framework CSS informal para visual de papel e rascunho [4, 9].
- **[Rough.js](https://roughjs.com/)**: Biblioteca gráfica para renderização de elementos no estilo feito à mão [4, 6].
- **[Rough Notation](https://roughnotation.com/)**: Animações e destaques de texto estilo marca-texto em SVG [4, 7, 8].
- **Web Audio API**: Sintetização nativa de som para ambiente sonoro relaxante.

---

## 📁 Estrutura do Projeto

```text
meu-livro-infantil/
├── index.html        # Estrutura principal da página
├── README.md         # Documentação do projeto
├── css/
│   └── style.css     # Estilos personalizados da aplicação
└── js/
    ├── audio.js      # Sintetizador e controle de áudio de fundo
    ├── stories.js    # Catálogo de histórias e ilustrações Rough.js
    └── main.js       # Lógica de navegação e interpolação de nomes

```