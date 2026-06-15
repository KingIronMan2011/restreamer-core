import { defineConfig } from 'vite';

export default defineConfig({
	publicDir: false,
	build: {
		outDir: 'build',
		emptyOutDir: false,
		sourcemap: false,
		cssCodeSplit: false,
		lib: {
			entry: 'src/public-player/videojs/index.ts',
			name: 'RestreamerVideoJSBundle',
			formats: ['iife'],
			fileName: () => '_player/videojs/dist/videojs-public.js',
		},
		rollupOptions: {
			output: {
				assetFileNames: (assetInfo) => {
					if (
						assetInfo.names?.some((name) => name.endsWith('.css'))
					) {
						return '_player/videojs/dist/videojs-public.css';
					}

					return '_player/videojs/dist/[name][extname]';
				},
			},
		},
	},
});
