//t=1e5,draw=_=>{for(createCanvas(w=windowWidth,h=windowHeight),background(0),translate(w/2,h/2),scale(225),noStroke(),fill(255),n=map(mouseX,0,w,0,5),m=map(mouseY,0,h,0,10),a=0;a<TWO_PI;a+=4e-4)x=1e4*a,y=cos(a+t)/sin(x),e=cos(x)%a,f=2*noise(tan(e)),circle(sin(tan(cos(y))+n)*f*e,sin(tan(sin(y))+m)*f,.0091);t-=.003}//#つぶやきProcessing
/*
t=1e4,s=0
setup=_=>{createCanvas(w=windowWidth,h=windowHeight),noiseSeed(fxrand()*999999)}
  draw=_=>{
    for(
      background(0),
      translate(w/2,h/2),
      scale(200),
      noStroke(),
      fill(255),
      n=map(mouseX,0,w,0,3),
      m=map(mouseY,0,h,0,15),
      a=0;
      a<5;
      a+=4e-4
    )
    x=1e4*a,
    y=cos(a)/sin(t/x),
    e=cos(x)%a,
    f=2.5*noise(tan(e)),
    circle(sin(tan(cos(y))+n)*f*e,sin(tan(sin(y))+s+m)*f,.012);
    t += .03,
    s+=.003
  }; //#つぶやきProcessing
*/
t=1e4,
z=c=r=g=b=0,s=125,
setup=_=>{
  c=createCanvas(w=windowWidth, h=windowHeight),
  c.id('elcanvas');
  colorMode(HSB, 360),
  noiseSeed(fxrand()*999999),
  randomSeed(fxrand()*999999),
  r=random(360),g=random(360), b=random(360)
}
draw=_=>{
  for(
    background(0),
    translate(w/2,h/2),
    scale(s),
    noStroke(),
    n=map(mouseX,0,w,0,3),
    m=map(mouseY,0,h,0,15),
    a=0;
    a<5;
    a+=4e-4
  )
  x=1e4*a,
  y=cos(a)/sin(t/x),
  e=cos(x)%a,
  f=2.5*noise(tan(e)),
  fill(
    a+r+b,
    g*a,
    360),
  circle(sin(tan(cos(y))+n)*f*e, sin(tan(sin(y))+z+m)*f,.015);
  t += .03,
  z +=.003;
  s=!0===mouseIsPressed?200:125
}
