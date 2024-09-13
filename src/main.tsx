import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from '@/App';
import './index.scss';

const queryClient = new QueryClient(); //QueryClient 생성

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}> 
      <App />
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </QueryClientProvider>
  </StrictMode>,
)
