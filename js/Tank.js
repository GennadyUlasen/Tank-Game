import { Container, AnimatedSprite, Texture } from "./pixi.mjs";

export class Tank {
    constructor() {
        this._view = new Container();

        this._trackLeft = new AnimatedSprite([
                Texture.from('TrackСFrame1'), Texture.from('TrackСFrame2'),
            ]);
        this._view.addChild(this._trackLeft);
    }

    get view() {
        return this._view;
    }
}