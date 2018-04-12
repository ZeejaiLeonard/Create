function JSVector(x, y, z){
  this.x = x;
  this.y = y;
  this.z = z;
}
//add
JSVector.prototype.add = function(v){
  this.x += v.x;
  this.y += v.y;
  this.z += v.z;
}
JSVector.addGetNew = function(v1, v2){
  return new JSVector(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
}
//sub
JSVector.prototype.sub = function(v){
  this.x -= v.x;
  this.y -= v.y;
  this.z -= v.z;
}
JSVector.subGetNew = function(v1, v2){
  return new JSVector(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
}
//mult
JSVector.prototype.mult = function(s){
  this.x *= s;
  this.y *= s;
  this.z *= s;
}
//div
JSVector.prototype.div = function(s){
  this.x /= s;
  this.y /= s;
  this.z /= s;
}
//extra
JSVector.prototype.limit = function(l){
  if(this.x > l){
    this.x = l;
  }
  if(this.y > l){
    this.y = l;
  }
  if(this.z > l){
    this.z = l;
  }
}
