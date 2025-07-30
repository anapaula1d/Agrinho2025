let xJogador = [0, 0, 0, 0];
let yJogador = [75, 150, 225, 300];
let jogador = ["🐮", "🚜", "💼", "🏢"];
let teclas = ["a", "s", "d", "f"];
let quantidade = jogador.length;

let jogoIniciado = false;
let jogadorEscolhido = null;
let respostaCorreta = 1;
let jogoFinalizado = false;
let resultado = "";

function setup() {
  createCanvas(400, 400);
  textFont("Arial");
}

function draw() {
  background("#E6F3D1");

  if (!jogoIniciado && !jogoFinalizado) {
    mostraInstrucoes();
  } else {
    ativaJogo();
    desenhaLinhaDeChegada();
    desenhaJogadores();

    if (!jogoFinalizado) {
      verificaVencedor();
    } else {
      mostraResultado();
    }
  }
}

function mostraInstrucoes() {
  fill("black");
  textAlign(LEFT);
  textSize(16);
  text("🎮 COMO JOGAR:", 20, 20);
  text("-Clique na tela para iniciar.", 20, 40);
  text("-Use A, S, D ou F para mover o personagem da\n sua resposta:", 20, 70);
  text("A: 🐮   S: 🚜   D: 💼    F: 🏢", 20, 120);

  textSize(16);
  text("🌱 AGRINHO 2025:", 20, 140);
  textSize(14);
  text("Tema: Do Campo para a Cidade - colhendo oportunidade.", 20, 160);
  text("O campo fornece alimentos, energia e recursos naturais.", 20, 180);
  text("A cidade oferece tecnologia, transporte e educação.", 20, 200);
  text("Um depende do outro para crescer e evoluir!", 20, 220);

  fill("#3F51B5");
  text("Por que o campo é essencial para a vida nas cidades?", 20, 240);
  text("A) Porque é onde estão os grandes centros comerciais.(a)", 20, 260);
  text("B) Porque fornece alimentos, matérias-primas e energia.(s)", 20, 280);
  text("C) Porque é o principal local de turismo urbano.(d)", 20, 300);
  text("D) Porque é onde se desenvolvem as tecnologias digitais(f).", 20, 320);

  fill("#E91E63");
  text(" Clique na tela para começar!", 20, 360);
}

function mousePressed() {
  if (!jogoIniciado && !jogoFinalizado) {
    jogoIniciado = true;
  }
}

function ativaJogo() {
  if (focused) {
    background("#D2EBB5");
  } else {
    background("rgb(238,178,178)");
  }
}

function desenhaJogadores() {
  textSize(40);
  for (let i = 0; i < quantidade; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }
}

function desenhaLinhaDeChegada() {
  fill("white");
  rect(350, 0, 10, 400);
  fill("black");
  for (let y = 0; y < 400; y += 20) {
    rect(350, y, 10, 10);
  }
}

function keyReleased() {
  if (jogoIniciado && !jogoFinalizado) {
    for (let i = 0; i < quantidade; i++) {
      if (key.toLowerCase() === teclas[i]) {
        if (jogadorEscolhido === null) {
          jogadorEscolhido = i; 
        }
        if (i === jogadorEscolhido) {
          xJogador[i] += random(20, 40);
        }
      }
    }
  }
}

function verificaVencedor() {
  if (jogadorEscolhido !== null && xJogador[jogadorEscolhido] > 350) {
    jogoFinalizado = true;

    if (jogadorEscolhido === respostaCorreta) {
      resultado = "✅ Você acertou! Parabéns!";
    } else {
      resultado = "Você errou! A resposta correta era a letra B.";
    }
  }
}

function mostraResultado() {
  fill("black");
  textSize(20);
  textAlign(CENTER);
  text(resultado, width / 2, height / 2);
}
