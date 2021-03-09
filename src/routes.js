import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
// import AccountView from 'src/views/account/AccountView';
import ResourceListView from 'src/views/resource/ResourceListView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/bulletin/ProductListView';
import RegisterView from 'src/views/auth/RegisterView';
import Home from "./views/home/ClassesListView";
// import SettingsView from 'src/views/settings/SettingsView';
import Results from "./views/resource/ResourceListView/Results";
// import AlbumCreateForm from "./views/album/AlbumCreateForm";
import ArtistCreateForm from "./views/artist/ArtistCreateForm";
import Dashboard from "./views/reports/DashboardView";
// import Promotion from "./views/promotion/ClassesListView";
import {ResourceCardListView} from "./views/resource/ResourceCardListView";
import SchoolCreateForm from "./views/school/SchoolCreateForm";
import ClassroomCreateForm from "./views/classroom/ClassroomCreateForm";
import StudentCreateForm from "./views/student/StudentCreateForm";
import Classroom from "./views/classroom/Classroom";
import AddStudentsInClassroom from "./views/student/AddStudentsInClassroom";
import Bulletin from "src/views/bulletin/ProductListView";
// import AlbumOne from "./views/album/AlbumOne";
// import AddTrackToAlbumForm from "./views/track/AddTrackToAlbumForm";
// import axios from 'axios'

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      {
        path: 'school',
        element: <ResourceListView resourceName={'school'} />,
        children: [
          {
            path: '/',
            element: (
              <ResourceCardListView
                entity={'school'} title={'Ecoles'} navigateTo={(id) => `${id}/promotions`}
              />
              )
          },
          { path: ':id', element: <div>okk</div>,},
          { path: 'create', element: <SchoolCreateForm />},
          {
            path: ':school/promotions',
            element: (
              <ResourceCardListView title={'Promotions'} entity={'promotion'}
                navigateTo={(id) => `${id}/classrooms` }
              />
              ),
          },
          {
            path: ':school/promotions/:promotion/classrooms',
            element: (
              <ResourceCardListView
                title={'Classe'} entity={'classroom'}
                navigateTo={(id) => `/app/classroom/${id}` }
              />
            ),
          },
          {
            path: ':school/classrooms/create',
            element: <ClassroomCreateForm />,
          },
        ]
      },
      {
        path: 'promotion',
        element: <ResourceListView resourceName={'promotion'} />,
        children: [
          { path: '/', element: <Results resourceName={'promotion'} />, },
        ]
      },
      {
        path: 'classroom',
        element: <ResourceListView resourceName={'classroom'} />,
        children: [
          {
            path: ':classrooms',
            element: (
              <Classroom />
              ),
          },
          // { path: ':id', element: <div>okk</div>, },
          { path: ':classrooms/:students', element: <Bulletin />, },
          { path: ':classrooms/add/students', element: <AddStudentsInClassroom />, },
          { path: 'create', element: <ArtistCreateForm />},
        ]
      },
      {
        path: 'students',
        element: <ResourceListView resourceName={'student'} />,
        children: [
          {
            path: '/',
            element: (
              <Classroom />
            ),
          },
          { path: ':id', element: <div>okk</div>, },
          { path: 'create', element: <StudentCreateForm />},
        ]
      },
      { path: 'home', element: <Home /> },
      { path: 'bulletin', element: <ProductListView /> },
      // { path: 'settings', element: <SettingsView /> },
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
