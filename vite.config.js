<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
>>>>>>> ae5e8464a361a5e05d9a125f9398607a06cdb2d9

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
<<<<<<< HEAD
        plugins: [['babel-plugin-react-compiler']],
=======
        plugins: [["babel-plugin-react-compiler"]],
>>>>>>> ae5e8464a361a5e05d9a125f9398607a06cdb2d9
      },
    }),
    tailwindcss(),
  ],
<<<<<<< HEAD
  build: {
    target: 'es2022',
  },
  server: {
    allowedHosts: ['77d696cdc8c2.ngrok-free.app'],
  },
})
=======
});
>>>>>>> ae5e8464a361a5e05d9a125f9398607a06cdb2d9
