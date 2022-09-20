import { Route, Routes } from 'react-router-dom';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export function AuthenticRoutes () {
   return (
      <Routes>
         <Route path="/" element={<SignIn />} />
         <Route path="/create-account" element={<SignUp />} />
      </Routes>
   );
}