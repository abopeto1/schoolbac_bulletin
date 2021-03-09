import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import ResourceListView from 'src/views/resource/ResourceListView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/product/ProductListView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';
import Results from "./views/resource/ResourceListView/Results";
import AlbumCreateForm from "./views/album/AlbumCreateForm";
import ArtistCreateForm from "./views/artist/ArtistCreateForm";
import AlbumOne from "./views/album/AlbumOne";
import AddTrackToAlbumForm from "./views/track/AddTrackToAlbumForm";
// import axios from 'axios'

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      {
        path: 'albums',
        element: <ResourceListView resourceName={'album'} />,
        children: [
          { path: '/', element: <Results resourceName={'album'} />, },
          { path: ':id', element: <AlbumOne resourceName={'album'} /> , },
          { path: 'create', element: <AlbumCreateForm />},
          { path: ':albumId/tracks/add', element: <AddTrackToAlbumForm />},
        ]
      },
      {
        path: 'artists',
        element: <ResourceListView resourceName={'artist'} />,
        children: [
          { path: '/', element: <Results resourceName={'artist'} />, },
          { path: ':id', element: <div>okk</div>, },
          { path: 'create', element: <ArtistCreateForm />},
        ]
      },
      {
        path: 'genres',
        element: <ResourceListView resourceName={'genre'} />,
        children: [
          { path: '/', element: <Results resourceName={'genre'} />, },
          { path: ':id', element: <div>okk</div>, },
          { path: 'create', element: <ArtistCreateForm />},
        ]
      },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'products', element: <ProductListView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> },
    ]
  }
];

export default routes;
