var boy, path, pathImg, boyImg,backgroundImg, background



function preload(){
  
    pathImg=loadImage("path.jpg")    
    boyImg=createImg("proman.gif")
backgroundImg= loadImage("background.jpg")

}

function setup() {
    createCanvas(windowWidth, windowHeight)     
  path=createSprite(width/2,height/1.2, windowWidth, windowHeight)
    path.addImage(pathImg);
   
   
    
background=createSprite(width/2,height/2.7)
background.addImage(backgroundImg)
   
    // boy=createSprite(50,height-70,20,50)
    // boy.scale= 0.2
    // boy.addImage(boyImg)
    boyImg.position(width/2-370,height-365)
boyImg.size(130,150)
path.velocityX=-5

if (path.x < 0){
    path.x = path.width/2;
   }

}

function draw() {
  
    
 drawSprites();
}