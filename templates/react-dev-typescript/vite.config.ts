import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-oxc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
