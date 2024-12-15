import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/router';
import { HelmetProvider } from 'react-helmet-async';
import Authprovider from './Provider/Authprovider';
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <Authprovider>
        <RouterProvider router={router} />
      </Authprovider>
    </HelmetProvider>
    <Toaster />
  </StrictMode>,
)
