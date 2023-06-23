import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'home',
    loadComponent: () => import('./pagina/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'conta',
    loadComponent: () => import('./pagina/conta/conta.page').then( m => m.ContaPage)
  },
  {
    path: 'extrato',
    loadComponent: () => import('./pagina/extrato/extrato.page').then( m => m.ExtratoPage)
  },
  {
    path: 'gastos',
    loadComponent: () => import('./pagina/gastos/gastos.page').then( m => m.GastosPage)
  },
];
