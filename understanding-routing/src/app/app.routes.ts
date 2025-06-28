import { Routes } from '@angular/router';
import { Home } from './myPages/home/home';
import { About } from './myPages/about/about';
import { Contact } from './myPages/contact/contact';
import { PageNotFound } from './myPages/page-not-found/page-not-found';
import { Profile } from './myPages/profile/profile';

export const routes: Routes = [
    {
        path:'home',
        component:Home
    },
    {
        path : 'about', 
        component:About
    },
    {
        path : 'contact', 
        component: Contact
    },
    {
        path: 'profile',
        component:Profile

    },
    {
        path: '**',
        component: PageNotFound
    }
   
];
