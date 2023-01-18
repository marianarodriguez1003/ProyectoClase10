var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6ea0e544-7f37-4d42-8d7f-0af19899fd85","98473a67-c245-4d63-867a-9449c31b2ce1","8fac9862-eb1b-4342-91e2-cf2857637886"],"propsByKey":{"6ea0e544-7f37-4d42-8d7f-0af19899fd85":{"name":"cars","sourceUrl":"assets/api/v1/animation-library/gamelab/a5_FgEhp7359xUv.ANs.RSjNaZJ7HJUh/category_vehicles/cars.png","frameSize":{"x":73,"y":133},"frameCount":5,"looping":true,"frameDelay":2,"version":"a5_FgEhp7359xUv.ANs.RSjNaZJ7HJUh","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":133},"rootRelativePath":"assets/api/v1/animation-library/gamelab/a5_FgEhp7359xUv.ANs.RSjNaZJ7HJUh/category_vehicles/cars.png"},"98473a67-c245-4d63-867a-9449c31b2ce1":{"name":"boy","sourceUrl":"assets/api/v1/animation-library/gamelab/ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I/category_people/blue_shirt2.png","frameSize":{"x":136,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":136,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I/category_people/blue_shirt2.png"},"8fac9862-eb1b-4342-91e2-cf2857637886":{"name":"carro","sourceUrl":"assets/v3/animations/KKsamed-W0t6RC-8IvcIJrX43D4X10vIhz9vrq9HPeE/8fac9862-eb1b-4342-91e2-cf2857637886.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":4,"version":"E_hPhbYrrr59iO.WCHiGdh0jP3cLBVAb","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/v3/animations/KKsamed-W0t6RC-8IvcIJrX43D4X10vIhz9vrq9HPeE/8fac9862-eb1b-4342-91e2-cf2857637886.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var calle1=createSprite(190,120,420,3);
calle1.shapeColor="black";

var calle2=createSprite(190,260,420,3);
calle2.shapeColor="black";

var car1=createSprite(100,150,10,10);
car1.setAnimation("carro");
car1.scale=0.6;

var car2=createSprite(215,150,10,10);
car2.setAnimation("carro");
car2.scale=0.6;

var car3=createSprite(165,230,10,10);
car3.setAnimation("carro");
car3.scale=0.6;

var car4=createSprite(270,230,10,10);
car4.setAnimation("carro");
car4.scale=0.6;

var sam=createSprite(20,190,13,13);
sam.setAnimation("boy");
sam.scale=0.12;

car1.velocityY=8;
car2.velocityY=8;
car3.velocityY=-8;
car4.velocityY=-8;

var vidas=3;

function draw() {
  background("#E5E8E8");
  textSize(30);
  text("VIDAS: "+vidas, 150, 70);
  noStroke();
  fill("#ABEBC6");
  rect(0,120,52,140);
  fill("#F08080");
  rect(345,120,52,140);
  
  car1.bounceOff(calle1);
  car1.bounceOff(calle2);
  car2.bounceOff(calle1);
  car2.bounceOff(calle2);
  car3.bounceOff(calle1);
  car3.bounceOff(calle2);
  car4.bounceOff(calle1);
  car4.bounceOff(calle2);
  
  if (keyDown("RIGHT")) {
    sam.x=sam.x+2;
  }
  if (keyDown("LEFT")) {
    sam.x=sam.x-2;
  }
  
  if (sam.isTouching(car1)||sam.isTouching(car3)||sam.isTouching(car3)||sam.isTouching(car4)) {
    sam.x=20;
    sam.y=190;
    vidas=vidas-1;
  }
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
