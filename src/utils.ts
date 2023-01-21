export function loadImg(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const image = new Image();

        function resetHandlers() {
            if (image.onload === onload) {
                image.onload = null;
            }
            if (image.onerror === onerror) {
                image.onerror = null;
            }
        }
        function onload() {
            resetHandlers();
            resolve(image);
        }
        function onerror() {
            resetHandlers();
            reject(new Error("Image loading failed"));
        }

        image.onload = onload;
        image.onerror = onerror;

        image.src = src;
    });
}

export function mod(a: number, b: number) {
    let m = a % b;
    if (m < 0) m += b;
    return m;
}
