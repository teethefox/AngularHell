import {OneComponent} from './one/one.component';
import {TwoComponent} from './two/two.component';
import {ThreeComponent} from './three/three.component';
import {FourComponent} from './four/four.component';
import {FiveComponent} from './five/five.component';
import {SixComponent} from './six/six.component';
import {SevenComponent} from './seven/seven.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
  path:'', redirectTo:'sanjose',
  pathMatch:'full'

},
{
  path:'dc',
  pathMatch:'full',
  component:TwoComponent,
  children:[]

},
{
  path:'seattle',
  pathMatch:'full',
  component:ThreeComponent,
  children:[]

},
{
  path:'chicago',
  pathMatch:'full',
  component:FourComponent,
  children:[]

},
{
  path:'burbank',
  pathMatch:'full',
  component:FiveComponent,
  children:[]

},
{
  path:'dallas',
  pathMatch:'full',
  component:SixComponent,
  children:[]

},
{
  path:'sanjose',
  pathMatch:'full',
  component:SevenComponent,
  children:[]

},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
