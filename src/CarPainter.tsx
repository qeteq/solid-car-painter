import { batch, Component, createSignal, Suspense } from "solid-js";
import { LazyCanvas } from "./Canvas";
import { CarSelector } from "./Selector";
import { cars } from "./cars";
import { Button } from "./Button";

export const CarPainter: Component = () => {
    const [carIndex, setCarIndex] = createSignal(0);
    const [hue, setHue] = createSignal(0);
    const [isDefaultColor, setIsDefaultColor] = createSignal(true);

    const resultHue = () => (isDefaultColor() ? cars[carIndex()].hue : hue());

    return (
        <div class="grid gap-3 grid-rows-[min-content_1fr] max-w-xs md:max-w-none">
            <Suspense fallback={"Loading..."}>
                <LazyCanvas
                    class={`
                        row-span-3
                        w-72 md:w-96
                        border border-stone-300 dark:border-stone-600
                    `}
                    carIndex={carIndex()}
                    hue={resultHue()}
                />
            </Suspense>

            <CarSelector
                class="md:col-start-2"
                cars={cars}
                selected={carIndex()}
                onChange={(i) => setCarIndex(i)}
            ></CarSelector>

            <div class="md:col-start-2 flex flex-col gap-4">
                <label for="hue-input" class="block text-center">
                    Color
                </label>
                <input
                    id="hue-input"
                    type="range"
                    min="0"
                    max="360"
                    step="1"
                    value={resultHue()}
                    class="hue-input block w-full appearance-none rounded h-2 bg-stone-200 dark:bg-stone-700"
                    onInput={({ currentTarget }) => {
                        batch(() => {
                            setIsDefaultColor(false);
                            setHue(Number(currentTarget.value));
                        });
                    }}
                />
                <div
                    class="block h-6"
                    style={{
                        "background-color": `hsl(${resultHue()}deg, 90%, 45%)`,
                    }}
                ></div>
                <Button
                    onClick={() => {
                        batch(() => {
                            setIsDefaultColor(true);
                            setHue(cars[carIndex()].hue);
                        });
                    }}
                >
                    Reset color
                </Button>
            </div>
            <aside class="md:col-start-2 self-end text-right">
                <small class="text-sm">
                    Art from{" "}
                    <a
                        class="underline"
                        href="https://www.kenney.nl/assets/pixel-vehicle-pack"
                    >
                        Pixel Vehicle Pack
                    </a>
                </small>
            </aside>
        </div>
    );
};
