var alphadivide = new Decimal(0.005).mul(game.layers.length).add(1)
function thefunction() {game.layers[0].resource = game.layers[0].resource.div(alphadivide)}
var divideinterval = setInterval(thefunction,1000/60)
