import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    test: {
        passWithNoTests: true,
        coverage: {
            all: true,
        }
    },
});