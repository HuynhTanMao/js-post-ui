// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				'post-detail': resolve(__dirname, 'post-detail.html'),
				'add-edit-post': resolve(__dirname, 'add-edit-post.html'),
			},
		},
	},
})
