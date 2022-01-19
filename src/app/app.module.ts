import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './index/index.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { ServiceComponent } from './service/service.component';
import { BillComponent } from './bill/bill.component';
import { ApRoutingModule } from './app-routing.module';
 


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MenuComponent,
    OrderComponent,
    ServiceComponent,
    BillComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ApRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
