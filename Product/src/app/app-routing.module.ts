import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {EditComponent} from './edit/edit.component';
import {AddComponent} from './add/add.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [  
  {
    path:'',
    pathMatch:'full',
    component:HomeComponent,
    children:[]
  
  },{
    path:'list',
    pathMatch:'full',
    component:ListComponent,
    children:[]
  
  },
  {
    path:'list/edit/:id',
    pathMatch:'full',
    component:EditComponent,
    children:[]
  
  },{
    path:'add',
    pathMatch:'full',
    component:AddComponent,
    children:[]
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
