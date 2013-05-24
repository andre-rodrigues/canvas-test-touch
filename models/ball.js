function Ball(x, y){
  if((typeof x == "undefined") || typeof y == "undefined") return;

  var self = this;

  this.status = "normal";
  this.radius = 10;
  this.velocity = new Vector(0, 0);
  this.position = new Vector(parseInt(x), parseInt(y));

  this.update = function(){
    if(self.status == "normal") self.position = self.position.add(self.velocity);
  }

  this.move = function(x, y){
    self.position = new Vector(parseInt(x), parseInt(y));;
  }

  this.checkBounds = function(bounds){
    if((self.position.x + self.radius) > bounds.width || (self.position.x - self.radius) < 0) self.velocity.x *= -1;
    if((self.position.y + self.radius) > bounds.height || (self.position.y - self.radius) < 0) self.velocity.y *= -1
  }

  this.draw = function(context){
    context.fillCircle(self.position.x, self.position.y, self.radius);
  }
}
