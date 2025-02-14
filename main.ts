input.onButtonPressed(Button.A, function () {
    snake.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("123456yuiokl")
})
input.onButtonPressed(Button.B, function () {
    snake.change(LedSpriteProperty.Y, -1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (game.isRunning()) {
        game.pause()
        basic.showNumber(game.score())
    } else {
        game.resume()
    }
})
let sprite: game.LedSprite = null
let snake: game.LedSprite = null
radio.setGroup(202)
snake = game.createSprite(2, 2)
let hasSprite = false
loops.everyInterval(500, function () {
    snake.move(1)
    snake.ifOnEdgeBounce()
})
basic.forever(function () {
    if (!(hasSprite)) {
        hasSprite = true
        sprite = game.createSprite(randint(0, 4), randint(0, 4))
        sprite.change(LedSpriteProperty.Brightness, -150)
    }
})
basic.forever(function () {
    if (snake.isTouching(sprite)) {
        sprite.delete()
        hasSprite = false
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
        game.addScore(1)
    }
})
basic.forever(function () {
    radio.setGroup(202)
})
