let font;
let points = [];
let speed = 0.002;

function preload() {
  font = loadFont('assets/Amiri-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(64);
  let text = "نار\nأحبها أقوى من النار أشد من عويل إعصار فيا لها من دفق أمطاري لو مر تفكيري على صدرها أو أفلتت حلمتها .. صدفةً حدجتها بعين جزار كأنها تجري بأغواري ——— غيري هواها .. تلك أطواري أريد أن أطوي عليها يدي أحبها وحدي .. وما ضرني فيشرب الصباح أنوارها ويشرب الغروب أنواري ما دمت لي .. سر المساء معي وهذه الأقمار أقماري وفوق جفن الشرق مشواري أن تنقل النجوم أخباري فيشرب الصباح أنوارها ويشرب الغروب أنواري ——— ما دمت لي .. سر المساء معي وهذه الأقمار أقماري.. وأنجم المساء لي مئزرٌ وفوق جفن الشرق مشواري";
  points = font.textToPoints(text, 100, 200, 60, {
    sampleFactor: 0.3,
    simplifyThreshold: 0
  });
}

function draw() {
  background(0);

  noFill();
  strokeWeight(1);
  stroke(255);

  beginShape();
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    let noiseVal = noise(p.x * speed, p.y * speed, frameCount * speed);
    let distance = map(noiseVal, 0, 1, -20, 20);
    curveVertex(p.x + distance, p.y + distance);
  }
  endShape();

  // Color gradient
  for (let i = 0; i < height; i++) {
    let c = map(i, 0, height, 0, 1);
    stroke(lerpColor(color(0), color('#800080'), c));
    line(0, i, width, i);
  }
}