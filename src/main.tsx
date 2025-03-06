import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
const queryClient = new QueryClient();



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#161B22",
              color: "#E3E6E8",
              border: "1px solid #3DDC97",
            },
            success: {
              icon: "✅",
              style: { background: "#3DDC97", color: "black" },
            },
            error: {
              icon: "❌",
              style: { background: "#FF6969", color: "white" },
            },
          }}
        />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
