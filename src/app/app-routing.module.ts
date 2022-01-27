import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { ServiceComponent } from './service/service.component';
import { BillComponent } from './bill/bill.component';

 
const routes:Routes =[
    {path:'index', component:IndexComponent},
    {path:'',component:MenuComponent},
    {path:'menu',component:MenuComponent},
    {path:'order',component:OrderComponent},
    {path:'service',component:ServiceComponent},
    {path:'bill',component:BillComponent}
  ];
  @NgModule({
      imports:[RouterModule.forRoot(routes)],
      exports: [RouterModule]
  })
  export class ApRoutingModule{}