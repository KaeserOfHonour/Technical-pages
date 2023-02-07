import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                notFound: resolve(__dirname, "404.html"),
                offline: resolve(__dirname, "offline.html"),
            },
        },
    },
});
