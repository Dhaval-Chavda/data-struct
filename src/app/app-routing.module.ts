import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetComponent } from './set/set.component';
import { MapComponent } from './map/map.component';
import { ArrayComponent } from './array/array.component';

const routes: Routes = [
  {
    path: 'set',
    component: SetComponent
  }
  ,
  {
    path: 'map',
    component: MapComponent
  }
  ,
  {
    path: 'array',
    component: ArrayComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit{




  

  ngOnInit(): void {
    
  }
 }
