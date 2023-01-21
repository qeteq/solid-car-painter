import { Component, JSX } from "solid-js";

export const Button: Component<JSX.ButtonHTMLAttributes<HTMLButtonElement>> = (
    props
) => {
    return (
        <button
            type="button"
            {...props}
            class={`
                p-2 rounded border select-none
                border-stone-200
                hover:bg-stone-100 focus:bg-stone-100 active:bg-stone-200

                dark:border-stone-600
                dark:hover:bg-stone-700 dark:focus:bg-stone-700 dark:active:bg-stone-600
                ${props.class}
            `}
        />
    );
};
