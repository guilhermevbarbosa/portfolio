import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Routing from './Routes';
import './index.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routing />
  </StrictMode>,
)
