import React from 'react'
import {
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from './HomePage';
import { LoginoPage } from './LoginoPage';
import { AboutPage } from './AboutPage';
import { NavBa } from './NavBa';
import { UserProvider } from './context/UserProvider';

export const MainPage = () => {
  return (
    <UserProvider>
      <NavBa/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginoPage />} />
        <Route path="about" element={<AboutPage />} />

        <Route path="/*" element={<Navigate to='/about' />} />
      </Routes>
    </UserProvider>
  )
}
