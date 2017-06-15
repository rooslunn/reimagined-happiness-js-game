/**
 * Created by russ on 15/06/17.
 */

require('./bootstrap');

const renderer = new PIXI.autoDetectRenderer(
    window.innerWidth,
    window.innerHeight,
    {
        "antialias": true,
        "autoResize": true,
        "transparent": true,
        "resolution": 2,
    },
)

document.body.appendChild(renderer.view)

const sprite = new PIXI.Sprite.fromImage(
    "path/to/sprites/player-idle.png",
)

sprite.x = window.innerWidth / 2
sprite.y = window.innerHeight / 2

const stage = new PIXI.Container()
stage.addChild(sprite)

const animate = function() {
    requestAnimationFrame(animate)
    renderer.render(stage)
}

animate()

