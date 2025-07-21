import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'node:path';
import Sitemap from 'vite-plugin-sitemap';
import compression from 'vite-plugin-compression2';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		Sitemap({ hostname: 'https://newitvision.pl' }),
		compression(),
	],
	base: '/',
	build: {
		outDir: 'dist',
		chunkSizeWarningLimit: 1000,
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['react', 'react-dom'],
					router: ['react-router-dom'],
					utils: ['@tanstack/react-query'],
					ui: ['framer-motion', 'lucide-react'],
				},
			},
		},
		sourcemap: false,
		minify: 'esbuild',
		terserOptions: {
			compress: {
				drop_console: true,
			},
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
