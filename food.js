function Food() {
  this.xscl = floor(random(width/scl));
  this.yscl = floor(random(height/scl));
  this.x = this.xscl * scl;
  this.y = this.yscl * scl;
	this.type = floor(random(0, 31));
  this.color = ""
  
  this.location = function() {
	  this.xscl = floor(random(width/scl));
    this.yscl = floor(random(height/scl));
    this.x = this.xscl * scl;
	  this.y = this.yscl * scl;
    this.type = floor(random(0, 31));

    for (var i = 0; i < snake.tail.length; i++){
    	var pos = snake.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
    	if ((d < 1) && (snake.tail.length > 0)) {
        this.xscl = floor(random(width/scl));
    		this.yscl = floor(random(height/scl));
    		this.x = this.xscl * scl;
			  this.y = this.yscl * scl;
        console.log("funcionou");
  		}
    }
  }
  
  this.show = function() {
    if ((0 < this.type) && (this.type <= 10)) {
    	//Apple
      this.color = "red"
    	fill(255, 0, 0);
	  	rect(this.x, this.y, scl, scl);
    } else if ((10 < this.type) && (this.type <= 20)) {
      //Banana
      this.color = "yellow"
      fill(255, 204, 0);
      rect(this.x, this.y, scl, scl);
    } else if ((20 < this.type) && (this.type <= 30)) {
      //BlueBerry
      this.color = "blue"
      fill(0, 0, 255);
      rect(this.x, this.y, scl, scl);
    } else if (this.type === 0) {
      //Super Fruit
      this.color = "white"
      fill(255, 255, 255);
      rect(this.x, this.y, scl, scl);
    }
  }
}