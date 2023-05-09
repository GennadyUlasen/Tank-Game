import * as PIXI from './pixi.mjs';
import { assetsMap } from './assetsMap.js';
import { Tank } from './Tank.js';
let app = new PIXI.Application({ width: 740, height: 740, backgroundColor: 0xc2c2c2});
document.body.appendChild(app.view);

const runGame = () => {
    const marker = new PIXI.Graphics();
    marker.beginFill(0xff0000, 1);
    marker.drawCircle(0, 0, 10);
    marker.endFill();
    const tank = new Tank;
    app.stage.addChild(tank.view)
    app.stage.addChild(marker); 
    app.stage.position.set(740/2, 740/2)

    
}

assetsMap.sprites.forEach((value) => app.loader.add(value.name, value.url));
app.loader.load(runGame);