game.metaLayer.active = true
var incrementalstuff = new Decimal(2)
var incrementalstuff2 = new Decimal(1.003)
game.metaLayer.getMultiPS = function() {return incrementalstuff}
game.metaLayer.layer = new Decimal(0)
game.metaLayer.resource = new Decimal(1)
function doalngi() {
    incrementalstuff = incrementalstuff.pow(incrementalstuff2)
    incrementalstuff2 = incrementalstuff2.pow(1.003)
}
var lngiinterval = setInterval(doalngi,1000/60)
