import invariant from "tiny-invariant";
import { Component, onMount, lazy, createEffect } from "solid-js";
import { cars } from "./cars";
import spriteSrc from "./cars.webp?inline";
import { loadImg } from "./utils";

console.log("SPSR:", spriteSrc);

interface CanvasProps {
    class?: string;
    carIndex: number;
    hue: number;
    sprite: HTMLImageElement;
}

const [MAX_W, MAX_H] = cars.reduce(
    ([w, h], car) => [Math.max(w, car.slice[2]), Math.max(h, car.slice[3])],
    [0, 0]
);

const RELATIVE_PADDING = 0.1;

export const Canvas: Component<CanvasProps> = (props) => {
    let canvas: HTMLCanvasElement | undefined;
    let octx: CanvasRenderingContext2D | null = null;
    let ctx: CanvasRenderingContext2D | null = null;

    const car = () => cars[props.carIndex];

    function drawSprite(car: typeof cars[number], targetHue: number) {
        const sprite = props.sprite;

        invariant(octx, "Offscreen context is already defined");
        invariant(ctx, "Context is already defined");
        invariant(sprite.height % 2 === 0, "Sprite has even height");

        const { slice } = car;
        const [sx, sy, w, h] = slice;
        const sourceShift = props.sprite.height / 2;

        const x = Math.round((octx.canvas.width - w) / 2);
        const y = Math.round((octx.canvas.height - h) / 2);

        // Prepare mask
        octx.globalCompositeOperation = "copy";
        octx.drawImage(sprite, sx, sy, w, h, x, y, w, h);

        octx.globalCompositeOperation = "source-atop";
        octx.fillStyle = `hsl(${targetHue}deg 100% 50%)`;
        octx.fillRect(x, y, w, h);

        // Draw original sprite
        ctx.globalCompositeOperation = "copy";
        ctx.drawImage(sprite, sx, sy + sourceShift, w, h, x, y, w, h);

        // Apply mask
        ctx.globalCompositeOperation = "hue";
        ctx.drawImage(octx.canvas, 0, 0);
    }

    onMount(() => {
        invariant(canvas, "Canvas is accessible inside onMount");

        const offscreenCanvas = document.createElement("canvas");
        octx = offscreenCanvas.getContext("2d");
        ctx = canvas.getContext("2d");

        const max = Math.ceil(Math.max(MAX_H, MAX_W) * (1 + RELATIVE_PADDING));

        canvas.width = max;
        canvas.height = max;

        offscreenCanvas.width = max;
        offscreenCanvas.height = max;
    });

    createEffect(() => {
        drawSprite(car(), props.hue);
    });

    return (
        <div class={`flex items-stretch ${props.class}`}>
            <canvas
                class="w-full h-full canvas-drop-shadow"
                style={{ "image-rendering": "pixelated" }}
                ref={canvas}
            ></canvas>
        </div>
    );
};

export const LazyCanvas = lazy(async () => {
    const sprite = await loadImg(spriteSrc);
    return {
        default: (props: Omit<CanvasProps, "sprite">) => {
            return <Canvas sprite={sprite} {...props} />;
        },
    };
});
