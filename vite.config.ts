import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/dm/', // <-- имя твоего репозитория!
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
