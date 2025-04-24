import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'calculadora',
    loadComponent: () => import('./calculadora/calculadora.component').then(m => m.CalculadoraComponent)
  },
  {
    path: 'lista-tarefas',
    loadComponent: () => import('./lista-tarefas/lista-tarefas.component').then(m => m.ListaTarefasComponent)
  },
  {
    path: 'cadastro-usuario',
    loadComponent: () => import('./cadastro-usuario/cadastro-usuario.component').then(m => m.CadastroUsuarioComponent)
  }
];
