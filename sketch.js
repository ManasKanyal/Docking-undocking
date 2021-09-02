var hasDocked = false


function setup() {

  createCanvas(1000,600);

spaceCraft = createSprite(410,460,50,50);
spaceCraft.addImage(sp1);
spaceCraft.scale = 0.25

  ISS = createSprite(400, 250, 50, 50);
  ISS.addImage(ISS_image);
 // ISS.scale = 0.9;

}

function preload(){

space_bg = loadImage("spacebg.jpg");
ISS_image = loadImage("iss.png");
sp1 = loadImage("spacecraft1.png");
sp2 = loadImage("spacecraft2.png");
sp3 = loadImage("spacecraft3.png");
sp4 = loadImage("spacecraft4.png");

}

function draw() {

  background(space_bg);  

  if(!hasDocked){

spaceCraft.x = spaceCraft.x + random(-1,1); 


  if(keyDown(LEFT_ARROW)){

spaceCraft.addImage(sp4)
spaceCraft.x = spaceCraft.x - 2

  }

  if(keyDown(RIGHT_ARROW)){

    spaceCraft.addImage(sp3)
    spaceCraft.x = spaceCraft.x + 2
    
      }

      if(keyDown(DOWN_ARROW)){

        spaceCraft.addImage(sp2)
       // spaceCraft.x = spaceCraft.x - 2
        
      }
      
          if(keyDown(UP_ARROW)){

            spaceCraft.addImage(sp1)
            spaceCraft.y = spaceCraft.y - 2
            
              }




            }

if(spaceCraft.x < 337 && spaceCraft.y < 335){

hasDocked = true


}

if(spaceCraft.x < 327){

  hasDocked = false
  
  }

    

if(hasDocked === true){

  textSize(30)
  text("Docking successful!",300,460);

}



//console.log(spaceCraft.x,spaceCraft.y)

  drawSprites();
  


}



