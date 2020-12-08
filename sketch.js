var x=105, y=120, opçao=1, tela=0;
var img, img1, ply, volta, title, mudo, som, tgame, hdphone, usfone, pergunta;
var waves;
var avancar, vmenu, feliz, triste, conseguiu, derrota1;
var pno, flt, viol;//imagens
var parabens;//músicas
var ac_violao;//instrumentos
var play, pause, stp;//controles
var um, dois, tres, quatro;//números
var erro, aplausos;
function preload() {
  //números
  um = loadImage('images/num/1.png')
  dois = loadImage('images/num/2.png')
  tres = loadImage('images/num/3.png')
  quatro = loadImage('images/num/4.png')
  //fotos dos colaboradores
  img = loadImage('images/eu.jpg')//minha foto
  img1 = loadImage('images/cleiton.jpg')//foto de cleiton
  //botões do jogo
  ply = loadImage('images/g18.png')// botão de play
  volta = loadImage('images/voltar.png')// botão de voltar
  mudo = loadImage('images/mute.png')// desliga o som
  som = loadImage('images/unmute.png')// liga o som
  play = loadImage('images/controles/play.png')// play do jogo
  pause = loadImage('images/controles/pause.png')// botão de pausa
  stp = loadImage('images/controles/stop.png')// botão de parar
  avancar = loadImage('archives pctures/avançar.png')
  vmenu = loadImage('archives pctures/v_menu.png')
  //imagens de instrumentos
  pno = loadImage('images/instrumentos/piano.png')// piano
  flt = loadImage('images/instrumentos/flute.jpg')//flauta
  viol = loadImage('images/instrumentos/violão.jpg')//violão
  //sons de instrumentos
  ac_violao = loadSound('Audios/ac_guit.ogg')
  //sons do jogo
  parabens = loadSound('Audios/Teclado/Parabéns.mp3')
  //outros sons
  erro = loadSound('Audios/erro.mp3')
  aplausos = loadSound('Audios/aplausos.mp3')
  //títulos
  title = loadImage('images/title.png')//título do menu
  tgame = loadImage('images/title_game.png')//título do jogo
  pergunta = loadImage('images/pergunta.png')// pergunta do jogo
  //outras imagens
  hdphone = loadImage('images/headphone.png')//Headphone
  usfone = loadImage('archives pctures/usefone.png')//use fone
  feliz = loadImage('archives pctures/feliz.png')
  triste = loadImage('archives pctures/triste.png')
  conseguiu = loadImage('archives pctures/conseguiu.png')
  derrota1 = loadImage('archives pctures/derrota1.png')
  //Gifs
  waves = loadImage('archives pctures/waves.gif')//ondas
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  image(img, 0, 0);
}
function draw() {
  background("#48fe67");
  if(tela==0){
     menu()
  }
  if(tela==1){ // tela com o botão de play - pré_jogo
    tela1()
  }
  if(tela==2){ // tela de instruções
    tela2()
  }
  if(tela==3){ // tela dos colaboradores
    tela3()
  }
  if(tela==4){ // tela da primeira fase do jogo
    tela11()
  }
  if(tela==5){ // tela da vitória
    tela4()
  }
  if(tela==6){ // tela do fracasso
    tela12()
  }
  if(tela==7){ // tela da segunda fase do jogo
    tela21()
  }
  if(tela==8){ // tela da terceira fase do jogo
    tela31()
  }
}
function menu(){ // menu principal
 
  fill("#48fe67")
  if(mouseX>windowWidth/2-125 && mouseX<windowWidth/2-125+250 && mouseY>y+75 && mouseY<y+200){
    rect(windowWidth/2-125, y+75, 250, 80, 5)
    if(mouseIsPressed){
      tela=1
    }
  }
  if(mouseX>windowWidth/2-125 && mouseX<windowWidth/2-125+250 && mouseY>y+175 && mouseY<(y+175)+80){
    rect(windowWidth/2-125, y+175, 250, 80, 5)
    if(mouseIsPressed){
      tela=2
    }
  }
  if(mouseX>windowWidth/2-125 && mouseX<windowWidth/2-125+250 && mouseY>y+275 && mouseY<(y+275)+80){
    rect(windowWidth/2-125, y+275, 250, 80, 5)
    if(mouseIsPressed){
      tela=3
    }
  }
  image(title, windowWidth/4, 80, 700, 80)//título do jogo
  image(mudo, 1200, 550, 80, 40)// desativa o som de fundo
  if(mouseX>1200 && mouseX<1280 && mouseY>550 && mouseY<590){
    if(mouseIsPressed){
      image(som, 1200, 550, 80, 40)// ativa o som de fundo
      //
    }else{//desativa o som de fundo
     //
    }
  }
  fill(10)
  textAlign(CENTER)
  textSize(37)
  text("INÍCIO", windowWidth/2, 250)
  text("INSTRUÇÕES", windowWidth/2, 350)
  text("CRÉDITOS", windowWidth/2, 450)
  image(waves, windowWidth/2-400, windowHeight/2+200, 800, 100)//Gif de ondas
}

function tela1(){ // tela pré-jogo
  fill("#48fe67")
  image(ply, windowWidth/2-100, windowHeight/2-100, 200, 200)//botão de play
  if(mouseX> windowWidth/2-100 && mouseX< windowWidth/2-100+200 && mouseY>windowHeight/2-100 && mouseY<windowHeight/2-100+200){
    if(mouseIsPressed){
      tela=4
    }
  }
  image(usfone, windowWidth/5-150, windowHeight/4+250, 200, 50)
  image(hdphone, windowWidth/5+70, windowHeight/4+240, 80, 70)
}
function tela11(){ //Tela de jogo - Pimeira fase
  image(volta, 1200, 60, 80, 60)// botão de voltar ao menu
  image(tgame, windowWidth/2-150, 30, 300, 100)
  if(mouseX>1200 && mouseX<1280 && mouseY>60 && mouseY<120){
    if(mouseIsPressed){
      tela=0
      parabens.stop()
    }
  }
  //Controles do jogo
  image(play, windowWidth/2-150, windowHeight/4+30, 100, 100)//play
  if(mouseX>windowWidth/2-150 && mouseX<windowWidth/2-50 && mouseY>windowHeight/4+30 && mouseY<windowHeight/4+130){
    if(mouseIsPressed){
      parabens.play()// só piano tocando
    }
  }
  image(stp, windowWidth/2+50, windowHeight/4+30, 100, 100)
  if(mouseX>windowWidth/2+50 && mouseX<windowWidth/2+150 && mouseY>windowHeight/4+30 && mouseY<windowHeight/4+130){
    if(mouseIsPressed){
      parabens.stop()
    }
  }
  if(mouseX>350 && mouseX<390 && mouseY>450 && mouseY<490){//1
    rect(330, 430, 80, 80, 5)
    if(mouseIsPressed){
      tela=5 // tela da vitória
      parabens.stop()
      aplausos.play()
    }
  }
  if(mouseX>550 && mouseX<590 && mouseY>450 && mouseY<490){//2
    rect(530, 430, 80, 80, 5)
    if(mouseIsPressed){
      parabens.stop()
      erro.play()
      tela=6
    }
  }
  if(mouseX>750 && mouseX<790 && mouseY>450 && mouseY<490){//3
    rect(730, 430, 80, 80, 5)
    if(mouseIsPressed){
      parabens.stop()
      erro.play()
      tela=6
    }
  }
  if(mouseX>950 && mouseX<990 && mouseY>450 && mouseY<490){//4
    rect(930, 430, 80, 80, 5)
    if(mouseIsPressed){
      parabens.stop()
      erro.play()
      tela=6
    }
  }
  image(pergunta, windowWidth/2-275, windowHeight/2, 500, 70)//pergunta
  image(um, 350, 450, 40, 40)//1
  image(dois, 550, 450, 40, 40)//2
  image(tres, 750, 450, 40, 40)//3
  image(quatro, 950, 450, 40, 40)//4
}
function tela12(){//tela do fracasso
  image(derrota1, windowWidth/2-200, windowHeight/4-100, 400, 150)
}
function tela4(){//tela da vitória
  image(volta, 1200, 60, 80, 60)// botão de voltar ao menu
if(mouseX>1200 && mouseX<1280 && mouseY>60 && mouseY<120){
    if(mouseIsPressed){
      tela=0
      aplausos.stop()
    }
  }
  image(conseguiu, windowWidth/2-175, 155, 300, 60)
  //botão para a próxima fase
  if(mouseX>windowWidth/2-60 && mouseX<windowWidth/4+440 && mouseY>windowHeight/2-80 && mouseY<windowHeight/2){
    rect(windowWidth/2-80, windowHeight/2-80, 100, 100, 5)
    if(mouseIsPressed){
      aplausos.stop()
      tela=7 // fase 2 
    }
  }
  image(avancar, windowWidth/2-60, windowHeight/2-70, 60, 80)
  image(feliz, windowWidth/2-60, windowHeight/6-80, 100, 100)
}
function tela21(){// fase 2
  fill(50)
  text("Em breve", windowWidth/2, windowHeight/2)
}
function tela31(){// fase 3

}
function tela2(){// tela de instruçãoes
  image(volta, 1200, 60, 80, 60)// botão de voltar ao menu
  if(mouseX>1200 && mouseX<1280 && mouseY>60 && mouseY<120){
    if(mouseIsPressed){
      tela=0
    }
  }
  //instruções de como funciona o jogo.
  textSize(60)
  text("Instruções", windowWidth/2, 60)
  textSize(40)
  text("COMO JOGAR ?", windowWidth/5, 170)
  textSize(25)
  text("O objetivo do Jogo é clicar nas figuras dos", windowWidth/5, 240)
  text("instrumentos correspondentes, de acordo ",windowWidth/5, 270)
  text("com o som que estiver sendo executado.", windowWidth/5-8, 300)
  //Espaço para treinamento e ouvir o som dos instrumentos.
  textSize(40)
  text("VAMOS TREINAR...", windowWidth/2+300, 180)
  textSize(25)
  text("Toque nos instrumentos abaixo", windowWidth/2+300, 250)
  text("para ouvir o som que cada um ", windowWidth/2+300, 280)
  text("produzirá", windowWidth/2+300, 310)
  //toque no instrumento
  rect(windowWidth/2+100, 350, 80, 80, 5)
  image(viol, windowWidth/2+100, 350, 79, 79)
  if(mouseX>(windowWidth/2+100) && mouseX<(windowWidth/2+180) && mouseY>350 && mouseY<429){
    if(mouseIsPressed){
      ac_violao.play()
    }
  }
  rect(windowWidth/2+250, 350, 80, 80, 5)
  image(flt, windowWidth/2+250, 350, 79, 79)
  rect(windowWidth/2+400, 350, 80, 80, 5)
  image(pno, windowWidth/2+400, 350, 80, 80)
}
function tela3(){ // tela de créditos com os nomes dos desenvolvedores
  image(volta, 1200, 60, 80, 60)// botão de voltar ao menu
  if(mouseX>1200 && mouseX<1280 && mouseY>60 && mouseY<120){
    if(mouseIsPressed){
      tela=0
    }
  }
  image(img, 100, 170);
  image(img1, 1200, 400)
  textSize(60)
  text("Elaboração", windowWidth/2, 70)
  textSize(35)
  text("Thiago de Andrade", 250, 150)
  text("Cleiton J. Germano", 1150, 385)
  textSize(20)
  //Thiago - Descrição
  text("Estudante de Ciências e tecnologia da UFRN", 410, 210)
  text("Aluno da disciplina de lógica de Programação.", 415, 240)
  //Cleiton - Descrição
  text("Professor de Música (UFRN),", 1030, 450)
  text("Pós graduando em Musica e atua no ensino", 965, 480)
  text("de musica no segmento infanto-juvenil.", 990, 510)
}
function keyPressed(){
  if(key=="Enter"){
    tela=opçao
  }
  if(key=="Escape"){
    tela=0
  }
}
