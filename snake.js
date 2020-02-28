function Snake(){
  this.xscl = floor(random(width/scl));
  this.yscl = floor(random(height/scl));
  this.x = this.xscl * scl;
	this.y = this.yscl * scl;
	this.xspeed = 1 //floor(random(-1, 1));
	this.yspeed = 0 //floor(random(-1, 1));
	this.total = 0
  this.score = 0;
  this.mult = 10;
  this.tail = [];

  this.eat = function(pos) {
  	var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      this.score += this.mult;
      console.log("Points = " + this.score);
    	return true;
    } else {
    	return false;
    }
  }

  this.death = function() {
  	for (var i = 0; i < this.tail.length; i++){
    	var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        gState = 2;
      }
    }
  }

  this.dir = function(x, y) {
		this.xspeed = x;
    this.yspeed = y;
  }

  this.wall = function(direction) {
  	if (this.x < 0) {
    	this.x = width - scl;
    } else if (this.x > width - scl) {
      this.x = 0;
    } else if (this.y < 0) {
      this.y = height - scl;
    } else if (this.y > height - scl) {
    	this.y = 0;
    }
  }

	this.update = function() {
    if (this.total === this.tail.length) {
    	for (var i = 0; i < this.tail.length - 1; i++){
    		this.tail[i] = this.tail[i+1];
    	}
    }

    this.tail[this.total - 1] = createVector(this.x, this.y);

		this.x = this.x + (this.xspeed * scl);
		this.y = this.y + (this.yspeed * scl);
  }

	this.show = function() {
    fill(0, 255, 0);

		for (var i = 0; i < this.tail.length; i++) {
    	rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }

		rect(this.x, this.y, scl, scl);
	}
}