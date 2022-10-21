import { BrowserRouter } from 'react-router-dom';
import { AuthenticRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export function Routes() {
   return (
      < BrowserRouter >
         <AuthenticRoutes />
      </BrowserRouter >
   );
}