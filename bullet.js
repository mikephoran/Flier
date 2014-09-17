var Bullet = function(x, y, rot, vx, vy){
  this.x = x;
  this.y = y;
  this.rot = rot;
  this.vx = vx;
  this.vy = vy;
  this.speed = 3;
  this.$bullet = $('<span class = "bullet">.</span>');
  this.init();
  game.objects.push(this);
  setTimeout(this.delete.bind(this), 1000);
}

Bullet.prototype.init = function(){

  $('div').append(this.$bullet);
  var styleSettings = {
    top: this.y,
    left: this.x,
    transform: "rotate(" + this.rot + "deg)"
  }

  this.$bullet.css(styleSettings);
}
Bullet.prototype.update = function(){
  //this.x += this.vx * 2;
  //this.y += this.vy * 2;

  this.x -=  Math.cos(this.degToRad(this.rot)) * this.speed;
  this.y -=  Math.sin(this.degToRad(this.rot)) * this.speed;

    var styleSettings = {
    top: this.y,
    left: this.x,
    transform: "rotate(" + this.rot + "deg)"
  }
  this.speed += 0.1;
  this.$bullet.css(styleSettings);
}

Bullet.prototype.delete = function() {
  this.$bullet.remove();
}

Bullet.prototype.degToRad = function(rotation){
  return rotation * Math.PI / 180;
}
