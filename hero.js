var Hero = function(){
  this.xPos = 200;
  this.yPos = 200;
  this.velocityX = 0;
  this.velocityY = 0;
  this.speed = .05;
  this.rotateSpeed = 5;
  this.rotation = 0;
  this.friction = 0.95;
  this.$hero = $('span.hero');
  this.init();
  this.velocity = 0;
  this.keys = {};

  var that= this;
  $(document).on('keydown',function(event) {
    that.keys[event.which] = true;
  });
  $(document).on('keyup',function(event) {
    delete that.keys[event.which];
  });
   $(document).on('keydown',function(event) {
    if (event.which == 32) {
    that.fire();
  }
  });
};

Hero.prototype.init = function(){
  var styleSettings = {
    top: this.yPos,
    left: this.xPos
  }
  this.$hero.css(styleSettings);
};

Hero.prototype.update = function(){
  this.fly();
  this.bounce();

};

Hero.prototype.bounce = function() {
  var width = $(window).width() - 60;
  var height = $(window).height() - 60;
  //console.log(width, height)

  if(this.xPos < 0){
    //console.log(this.xPos);
    console.log(this.velocityX);
    this.velocityX *= -.1;
    console.log(this.xVelocity);

    this.xPos = 5;
  }
  if(this.xPos > width) {
    this.xPos = width-5;
    this.velocityX *= -.1;
  }

  if(this.yPos < 0){
    this.velocityY *= -.1;
    this.yPos = 5;
  }
  if(this.yPos > height) {
    this.yPos = height-5;
    this.velocityY *= -.1;
  }

}

Hero.prototype.degToRad = function(rotation){
  return rotation * Math.PI / 180;
}

Hero.prototype.fly = function() {
  this.xPos += this.velocityX;
  this.yPos += this.velocityY;

    var styleSettings = {
    top: this.yPos,
    left: this.xPos,
    transform: "rotate(" + this.rotation + "deg)"
  }
  this.$hero.css(styleSettings);

  //left
  if(this.keys[37]){
    this.rotation -= this.rotateSpeed;
  }
  if(this.keys[39]){
    this.rotation += this.rotateSpeed;
  }
  if(this.keys[38]){
    if (this.velocityX < 5 || this.velocityY < 5) {
      this.velocityX -= Math.cos(this.degToRad(this.rotation)) * this.speed;
      this.velocityY -= Math.sin(this.degToRad(this.rotation)) * this.speed;
    }
  }
  if(this.keys[40]){
    if (this.velocityX < 5 || this.velocityY < 5) {
     this.velocityX += Math.cos(this.degToRad(this.rotation)) * this.speed;
      this.velocityY += Math.sin(this.degToRad(this.rotation)) * this.speed;
   }
  }
}

Hero.prototype.fire = function() {
  var bulletcounter = true;
  if (bulletcounter) {
    bulletcounter = false;
    var bullet = new Bullet(this.xPos,this.yPos,this.rotation, this.velocityX, this.velocityY);
    var bulletfunction = function() {
      bulletcounter = true;
    }.bind(this);

    setTimeout(bulletfunction, 1000);
  }
}

