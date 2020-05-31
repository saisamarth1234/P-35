class Form {

    constructor() {
      this.input = createInput("Name");
      this.input = createInput("Q1");
      this.input = createInput("Q2");
      this.input = createInput("Q3");
    }
    
  
    display(){
      var title = createElement('h2')
      title.html("quiz");
      title.position(130, 0);
  
      "name".position(130, 160);
      "Q1".position(130, 240);
      Text("Do you think we should have free lunch in the school canteen for kids that are very poor",130,220);   
      Text("1. yes",130,260);
      Text("2. no",130,280);
      "Q2".position(130, 300);
      Text("Would you be willing to contribute a small amount every month for such aprogram?",130,320)
      Text("1. yes",130,340);
      Text("2. no",130,360);
      "Q3".position(130, 380);
      Text("How much per month would you be willing to pay?",130,400);
      Text("1.100",130,420);
      Text("1.500",130,440);
      Text("3.1000",130,460);
      Text("4. more",130,480);
        
      
  
    }
  }
  