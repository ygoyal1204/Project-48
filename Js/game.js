class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form();
        form.display();
      }
      player1 = createSprite(25, 750, 20, 20);
    player1.addImage("player1",player1Img);
    player1.scale=0.6;
    player2 = createSprite(25, 50, 20, 20);
    player2.addImage("player2",player2Img);
    player2.scale=0.6;
    player3 = createSprite(800-25, 50, 20, 20);
    player3.addImage("player3",player3Img);
    player3.scale=0.6;
    player4 = createSprite(800-25, 750, 20, 20);
    player4.addImage("player4",player4Img);
    player4.scale=0.6;
    }

  
    play(){
      form.hide();
      background("lightgreen");
      //textSize(30);
      //text("Game Start", 120, 100)
      Player.getPlayerInfo();
  
      if(allPlayers !== undefined){
        //background("lightgreen");
        drawSprites();

        var index = 0;

        for(var plr in allPlayers){
          index = index+1;
        }
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.y = player.y-2;
        player.update();
      }
    }
  }