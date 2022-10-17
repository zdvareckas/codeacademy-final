import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/main-layout';
import BikesPage from '../pages/bikes-page';
import CartPage from '../pages/cart-page';
import ContactsPage from '../pages/contacts-page';
import EquipmentPage from '../pages/equipment-page';
import HomePage from '../pages/home-page';
import ItemPage from '../pages/item-page';

const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="bikes" element={<BikesPage />} />
      <Route path="item/:itemId" element={<ItemPage />} />
      <Route path="contacts" element={<ContactsPage />} />
      <Route path="equipment" element={<EquipmentPage />} />
      <Route path="cart" element={<CartPage />} />
    </Route>
  </Routes>
);

export default PageRoutes;
