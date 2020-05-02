# Replay

Replay is a cross-platform JavaScript game engine inspired by
[React](https://reactjs.org/).

Its declarative API goes against the grain of typical game engines. It's small
yet powerful, giving you total control on how your game runs. With a great
testing library built in, Replay is ideal for writing bug-free games.

Build your game once and deploy it for web or iOS (with more platforms like
Android coming in the future).

## ⚠️ Status

Replay is still in early development and will go through many breaking changes.
However we encourage you to start making games now - your feedback will help
shape Replay's future!

## Quick Setup

Create a file, copy this in and open it in a browser:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Load Replay through a CDN (TODO) -->
  <script src="replay-core.min.js"></script>
  <script src="replay-web.min.js"></script>
  <title>Replay Game</title>
</head>
<body>
<script>

// Import from Replay
const { makeSprite, t } = replay;
const { renderCanvas } = replayWeb;

// Setup game size
const gameProps = {
  id: "Game",
  size: {
    landscape: {
      width: 600,
      height: 400,
      maxWidthMargin: 150,
    },
    portrait: {
      width: 400,
      height: 600,
      maxHeightMargin: 150,
    },
  },
  defaultFont: {
    name: "Courier",
    size: 10,
  },
};

// Create a Game Sprite
const Game = makeSprite({
  init() {
    // Our initial state
    return {
      posX: 0,
      posY: 0,
      targetX: 0,
      targetY: 0,
    };
  },

  // This is run 60 times a second. Returns next frame's state.
  loop({ state, device }) {
    const { pointer } = device.inputs;
    const { posX, posY } = state;
    let { targetX, targetY } = state;

    // Update our target when the mouse is clicked
    if (pointer.justPressed) {
      targetX = pointer.x;
      targetY = pointer.y;
    }

    return {
      // Update our position to move closer to target over time
      posX: posX + (targetX - posX) / 10,
      posY: posY + (targetY - posY) / 10,
      targetX,
      targetY,
    };
  },

  // Render Textures based on game state
  render({ state }) {
    return [
      t.text({
        color: "red",
        text: "Hello Replay!",
        position: { x: 0, y: 50 },
      }),
      t.circle({
        position: {
          x: state.posX,
          y: state.posY,
        },
        color: "blue",
        radius: 10,
      }),
    ];
  },
});

// Some Textures to show while loading
const loadingTextures = [
  t.text({
    color: "black",
    text: "Loading...",
  }),
];

// Render in the browser using canvas
renderCanvas(Game(gameProps), loadingTextures, {}, "scale-up");

</script>
</body>
</html>
```
