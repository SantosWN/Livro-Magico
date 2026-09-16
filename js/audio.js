// ==========================================
// GERENCIADOR DE MÚSICA
// ==========================================

class GerenciadorDeMusica {

  constructor() {

    this.audioCtx = null;

    this.tocando = false;

    this.timer = null;

    this.indexNota = 0;

    this.notas = [
      261.63,
      329.63,
      392.00,
      523.25,
      493.88,
      392.00,
      329.63,
      261.63
    ];
  }


  // ========================================
  // INICIAR MÚSICA
  // ========================================

  iniciar() {

    try {

      if (!this.audioCtx) {

        const AudioContext =
          window.AudioContext ||
          window.webkitAudioContext;

        if (!AudioContext) {

          console.warn(
            "Web Audio API não é suportada neste navegador."
          );

          return;
        }

        this.audioCtx = new AudioContext();
      }


      if (this.audioCtx.state === "suspended") {

        this.audioCtx.resume();
      }


      if (!this.tocando) {

        this.tocando = true;

        this.tocarProximaNota();
      }

    } catch (erro) {

      console.error(
        "Erro ao iniciar a música:",
        erro
      );
    }
  }


  // ========================================
  // PARAR MÚSICA
  // ========================================

  parar() {

    this.tocando = false;

    if (this.timer) {

      clearTimeout(this.timer);

      this.timer = null;
    }
  }


  // ========================================
  // TOCAR PRÓXIMA NOTA
  // ========================================

  tocarProximaNota() {

    if (!this.tocando || !this.audioCtx) {

      return;
    }


    const oscilador =
      this.audioCtx.createOscillator();

    const ganho =
      this.audioCtx.createGain();


    oscilador.type = "sine";


    oscilador.frequency.setValueAtTime(
      this.notas[this.indexNota],
      this.audioCtx.currentTime
    );


    ganho.gain.setValueAtTime(
      0.08,
      this.audioCtx.currentTime
    );


    ganho.gain.exponentialRampToValueAtTime(
      0.0001,
      this.audioCtx.currentTime + 1.2
    );


    oscilador.connect(ganho);

    ganho.connect(
      this.audioCtx.destination
    );


    oscilador.start();


    oscilador.stop(
      this.audioCtx.currentTime + 1.2
    );


    this.indexNota =
      (this.indexNota + 1) %
      this.notas.length;


    // IMPORTANTE:
    // aqui usamos => e não &gt;

    this.timer = setTimeout(
      () => this.tocarProximaNota(),
      500
    );
  }
}


// ==========================================
// INSTÂNCIA GLOBAL
// ==========================================

const gerenciadorMusica =
  new GerenciadorDeMusica();


// ==========================================
// BOTÃO DE MÚSICA
// ==========================================

function toggleMusica() {

  const btn =
    document.getElementById("music-toggle");


  if (!btn) {

    return;
  }


  if (gerenciadorMusica.tocando) {

    gerenciadorMusica.parar();

    btn.innerText =
      "🎵 Música: Off";

  } else {

    gerenciadorMusica.iniciar();

    if (gerenciadorMusica.tocando) {

      btn.innerText =
        "🎶 Música: On";
    }
  }
}