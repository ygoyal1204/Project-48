class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("The Quirky Tournament");
      this.title.position(270, 0);
  
      this.input.position(300, 160);
      this.button.position(360, 200);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();

        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);

        this.greeting.html("Hello " + player.name);
        this.greeting.position(320, 100);
      });
  
    }
  }