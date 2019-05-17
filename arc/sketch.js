let w = window.innerWidth,
  h = window.innerHeight;

let head;
let body = [];
let num = 4;

function setup() {
  createCanvas(w, h);
  head = new Head();
  body.push(new Body());
}

function draw() {
  background(15);
  head.display();
  head.move(num);

  for (var i = 0; i < body.length; i++) {
    body[i].display(head.x, head.y);
  }
  text(body.length, 500, 500);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    num = 1;
  } else if (keyCode === DOWN_ARROW) {
    num = 2;
  }else if (keyCode === LEFT_ARROW) {
    num = 3;
  } else if (keyCode === RIGHT_ARROW) {
    num = 4;
  }

}

function mousePressed() {
  body.push(new Body());
}

class Head {
  constructor() {
    this.size = 10;
    this.x = int(random(this.size+100, 100));
    this.y = int(random(this.size+100, h-100));
  }

  move(dir) {
    if(dir == 1){            // 1 = up [-y]
      this.y -= 2;
    }else if (dir == 2) {    // 2 = down [+y]
      this.y += 2;
    }else if (dir == 3) {    // 3 = left [-x]
      this.x -= 2;
    }else if (dir == 4) {    // 4 = right [+x]
      this.x += 2;
    }
  }

  display() {
    fill(255, 0, 0);
    rect(this.x, this.y, this.size, this.size);
  }
}

class Body extends Head {
  constructor() {
    super();
    this.size = 10;
    this.x = head.x;
    this.y = head.y;
  }

  display(hx, hy) {
    fill(255, 255, 255);
    rect(hx-12, hy, this.size, this.size);
  }
}
