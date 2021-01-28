def on_overlap_tile(sprite, location):
    game.over(True)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_red_crystal,
    on_overlap_tile)

mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(mySprite, 100, 100)
tiles.set_tilemap(tilemap("""
    level1
"""))
tiles.place_on_random_tile(mySprite, sprites.dungeon.chest_closed)
scene.camera_follow_sprite(mySprite)
info.start_countdown(120)