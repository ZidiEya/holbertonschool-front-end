/*
func to create an object named roomDimensions with the following three attributes:
    width: 50
    length: 100
    getArea: function that returns the surface area of a the object using the width and length
Create a variable named boundGetArea, that will bind the object roomDimensions to the getArea fun
*/

const roomDimensions = {
    with: 50,
    length: 100,
    getArea() {return this.with * this.length;}
}
const area = roomDimensions.getArea;
let boundGetArea = area.bind(roomDimensions)
console.log(boundGetArea());
