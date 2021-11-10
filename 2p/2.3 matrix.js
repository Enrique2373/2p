//matrix4

let aMatrix = [
    [1,2],
    [4,5],
    [7,8]
]

console.log(aMatrix[0])   //
console.log(aMatrix[1][0])//
console.log(aMatrix[1][4])// ??
console.log(aMatrix[4])   // ??

//then
let A = new Array(3)
A[0]= new Array(3)
A[0][0]=-2
//Math.random()

let aMatrix = [
    [1,2],//f0
    [4,5],//f1
    [7,8]//f2
]

for (let f of aMatrix) {
    for (let c of f) {
	console.log(c)
    }
}