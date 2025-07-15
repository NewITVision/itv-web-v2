import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'node:path';
import Sitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths(), Sitemap({ hostname: 'https://newitvision.pl' })],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
