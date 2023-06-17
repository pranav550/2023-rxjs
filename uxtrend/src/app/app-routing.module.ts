import { PromiseComponent } from './components/promise/promise.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './components/observable/observable.component';
import { AsyncAwaitComponent } from './components/async-await/async-await.component';

const routes: Routes = [
  { path: '', redirectTo: '/promise', pathMatch: 'full' },
  { path: 'promise', component: PromiseComponent },
  { path: 'asyncAwait', component: AsyncAwaitComponent },
  { path: 'observable', component: ObservableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
