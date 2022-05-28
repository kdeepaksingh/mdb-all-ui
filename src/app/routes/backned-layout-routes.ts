import { Routes } from '@angular/router';

export const BACKEND_ROUTES: Routes = [
    {
        path:'dashboard',
        loadChildren:() => import('../dashboard/dashboard.module').then(module => module.DashboardModule)
    },
    {
        path:'product',
        loadChildren:()=> import('../product/product.module').then(module => module.ProductModule)
    }
]