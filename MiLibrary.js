function bounceIt(bla1,bla2)
{
  if (bla1.x - bla2.x < bla2.width/2 + bla1.width/2
    && bla2.x - bla1.x < bla2.width/2 + bla1.width/2) {
  bla1.velocityX = bla1.velocityX * (-1);
  bla2.velocityX = bla2.velocityX * (-1);
  }
  if (bla1.y - bla2.y < bla2.height/2 + bla1.height/2
  && bla2.y - bla1.y < bla2.height/2 + bla1.height/2){
  bla1.velocityY = bla1.velocityY * (-1);
  bla2.velocityY = bla2.velocityY * (-1);
}
}