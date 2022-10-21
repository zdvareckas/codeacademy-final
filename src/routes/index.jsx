import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/main-layout';
import HomePage from '../pages/home-page';
import BikesPage from '../pages/bikes-page';
import BikePage from '../pages/bike-page';
import EquipmentsPage from '../pages/equipments-page';
import CartPage from '../pages/cart-page';
import ContactsPage from '../pages/contacts-page';
import EquipmentPage from '../pages/equipment-page';
import LoginPage from '../pages/login-page';
import RegisterPage from '../pages/register-page';

const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="bikes" element={<BikesPage />} />
      <Route path="auth">
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route path="equipment" element={<EquipmentsPage />} />
      <Route path="bike/:bikeId" element={<BikePage />} />
      <Route path="equipment/:equipmentId" element={<EquipmentPage />} />
      <Route path="contacts" element={<ContactsPage />} />
      <Route path="cart" element={<CartPage />} />
    </Route>
  </Routes>
);

export default PageRoutes;
