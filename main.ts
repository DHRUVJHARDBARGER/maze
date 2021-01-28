scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 4 2 2 2 2 2 2 2 4 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . 2 . . 
    . 2 2 2 . . . 2 . . . . 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . 2 2 . 2 2 . . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    . . . . 2 2 . . . 2 2 . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.chestClosed)
scene.cameraFollowSprite(mySprite)
info.startCountdown(120)
forever(function () {
    music.playMelody("G B A G C5 B A B ", 120)
})
