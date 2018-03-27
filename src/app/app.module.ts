import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { UserService } from './services/user.service';
import {VendorService} from './services/vendor.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './support/home/home.component';
import { AboutComponent } from './support/about/about.component';
import { MenuComponent } from './support/menu/menu/menu.component';
import { MenuItemComponent } from './support/menu/menu-item/menu-item.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { PurchaserequestListComponent } from './purchaserequest/purchaserequest-list/purchaserequest-list.component';
import { PurchaserequestCreateComponent } from './purchaserequest/purchaserequest-create/purchaserequest-create.component';
import { PurchaserequestDetailComponent } from './purchaserequest/purchaserequest-detail/purchaserequest-detail.component';
import { PurchaserequestEditComponent } from './purchaserequest/purchaserequest-edit/purchaserequest-edit.component';
import { PurchaserequestlineitemCreateComponent } from './purchaserequestlineitem/purchaserequestlineitem-create/purchaserequestlineitem-create.component';
import { PurchaserequestlineitemDetailComponent } from './purchaserequestlineitem/purchaserequestlineitem-detail/purchaserequestlineitem-detail.component';
import { PurchaserequestlineitemEditComponent } from './purchaserequestlineitem/purchaserequestlineitem-edit/purchaserequestlineitem-edit.component';
import { PurchaserequestlineitemListComponent } from './purchaserequestlineitem/purchaserequestlineitem-list/purchaserequestlineitem-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    MenuItemComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    VendorListComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorEditComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent,
    PurchaserequestListComponent,
    PurchaserequestCreateComponent,
    PurchaserequestDetailComponent,
    PurchaserequestEditComponent,
    PurchaserequestlineitemCreateComponent,
    PurchaserequestlineitemDetailComponent,
    PurchaserequestlineitemEditComponent,
    PurchaserequestlineitemListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    VendorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
