import { Component, Index, JSX } from "solid-js";
import { Button } from "./Button";
import { mod } from "./utils";

export const CarSelector: Component<{
    class?: string;
    selected: number;
    cars: Array<{ name: string }>;
    onChange?(index: number): void;
}> = (props) => {
    const handleChange: JSX.EventHandler<HTMLSelectElement, Event> = (evt) => {
        props.onChange?.(evt.currentTarget.selectedIndex);
    };

    const handleArrow = (diff: number) => {
        const newIndex = mod(props.selected + diff, props.cars.length);
        props.onChange?.(newIndex);
    };

    const randomize = () => {
        props.onChange?.(Math.floor(Math.random() * props.cars.length));
    };

    return (
        <div class={`flex gap-2 md:w-80 ${props.class}`}>
            <Button onClick={[handleArrow, -1]} title="Previous car">
                ⬅️
            </Button>
            <select
                class="p-2 flex-1 w-0 rounded bg-transparent border
                    border-stone-200
                    hover:bg-stone-100 focus:bg-stone-100
                    dark:border-stone-600
                    dark:hover:bg-stone-700 dark:focus:bg-stone-700
                "
                onChange={handleChange}
            >
                <Index each={props.cars}>
                    {(car, index) => {
                        return (
                            <option selected={index === props.selected}>
                                {String(index + 1).padStart(2, "0")}.{" "}
                                {car().name}
                            </option>
                        );
                    }}
                </Index>
            </select>
            <Button onClick={[handleArrow, +1]} title="Next car">
                ➡️
            </Button>
            <Button class="self-end" onClick={randomize} title="Random car">
                🔄
            </Button>
        </div>
    );
};
