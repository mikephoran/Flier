var Game = function(){
  this.objects = [];
}

Game.prototype.init = function(){
  this.objects.push(new Hero);
  this.update();
};

Game.prototype.draw = function(){
  for(var i = 0; i < this.objects.length; i++){
    this.objects[i].draw();
  }
};

Game.prototype.update = function(){
  for(var i = 0; i < this.objects.length; i++){
    this.objects[i].update();
  }

  setTimeout(this.update.bind(this), 10);

};

Game.prototype.addObjects = function(obj){
  this.objects.push(obj);
}

$(document).ready(function() {
game = new Game();
game.init();
});

