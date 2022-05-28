import { Routes } from '@angular/router';

export const DEFAULT_ROUTES: Routes = [
    {
        path: '',
        loadChildren:() => import('../cms/cms.module').then(Module => Module.CmsModule)
    },
    {
        path: 'auth',
        loadChildren:() => import('../authentication/authentication.module').then(module =>module.AuthenticationModule)
    },
]