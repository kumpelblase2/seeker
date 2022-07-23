import { defineConfig, loadEnv } from 'vite';
import vue from "@vitejs/plugin-vue2";

const DEFAULT_REDIRECT = "http://localhost:8080";

export default defineConfig(({ mode }) => {
    let env = loadEnv(mode, process.cwd(), 'SEEKER_');
    let __TWITCH_CLIENT_ID__ = JSON.stringify(env.SEEKER_CLIENT_ID);
    let __TWITCH_REDIRECT_URL__ = JSON.stringify(mode === 'production' ? env.SEEKER_REDIRECT_URL : DEFAULT_REDIRECT);
    return {
        server: {
            port: 8080,
        },
        define: {
            __TWITCH_CLIENT_ID__,
            __TWITCH_REDIRECT_URL__
        },
        base: mode === 'production' ? '/seeker/' : '/',
        plugins: [vue()]
    }
});
