class Polygon {
  constructor(sides){
  this.sides = sides
  }
  get countSides ( ){
   return (this.sides).length
  }
  get perimeter() {
   return (this.sides).reduce((previous, current) => previous + current)
  }
}

class Triangle extends Polygon {
  get isValid() {
    const a = this.sides[0]
    const b = this.sides[1]
    const c = this.sides[2]

    let result;

    // for a triang to be considered a triangle, ALL THREE of the below conditions must be met

    if(((a + b ) > c) && ((a + c) > b) && ((b + c) > a)){
      result = true 
    } else {
      result = false
    }
    return result
  }
}

class Square extends Polygon{
  get isValid() {
    return (this.sides).every(value => value === this.sides[0] )
  }
  get area(){
    if(this.isValid === true)
    return this.sides[0] ** 2
  }
}