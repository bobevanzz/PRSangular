import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { CanReviewGuard } from '@guards/can-review.guard';

import { UserService } from '@services/user.service';
import { VendorService } from '@services/vendor.service';
import { ProductService } from '@services/product.service';
import { PurchaseRequestService } from '@services/purchaserequest.service';
import { PurchaseRequestLineitemService } from '@services/purchaserequestlineitem.service';
import { SystemService } from '@services/system.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './support/home/home.component';
import { AboutComponent } from './support/about/about.component';
import { MenuComponent } from './support/menu/menu.component';
import { MenuItemComponent } from './support/menu/menu-item.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';

import { PurchaseRequestListComponent } from './purchaserequest/purchaserequest-list/purchaserequest-list.component';
import { PurchaseRequestDetailComponent } from './PurchaseRequest/purchaserequest-detail/purchaserequest-detail.component';
import { PurchaseRequestEditComponent } from './purchaseRequest/purchaserequest-edit/purchaserequest-edit.component';
import { PurchaseRequestCreateComponent } from './purchaseRequest/purchaserequest-create/purchaserequest-create.component';
import { PurchaseRequestLinesComponent } from './purchaseRequest/purchaserequest-lines/purchaserequest-lines.component';
import { PurchaseRequestReviewComponent } from './purchaseRequest/purchaserequest-review/purchaserequest-review.component';
import { PurchaseRequestReviewItemComponent } from './purchaseRequest/purchaserequest-review-item/purchaserequest-review-item.component';

import { PurchaseRequestLineItemListComponent } from './purchaseRequestLineitem/purchaserequestlineitem-list/purchaserequestlineitem-list.component';
import { PurchaseRequestLineItemDetailComponent } from './purchaseRequestLineitem/purchaserequestlineitem-detail/purchaserequestlineitem-detail.component';
import { PurchaseRequestLineItemEditComponent } from './purchaseRequestLineitem/purchaserequestlineitem-edit/purchaserequestlineitem-edit.component';
import { PurchaseRequestLineItemCreateComponent } from './purchaseRequestLineitem/purchaserequestlineitem-create/purchaserequestlineitem-create.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { SortPipe } from './pipes/sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,

    MenuComponent,
    MenuItemComponent,
    
    ProductListComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductEditComponent,
    
    VendorListComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorCreateComponent,
    
    PurchaseRequestListComponent,
    PurchaseRequestDetailComponent,
    PurchaseRequestEditComponent,
    PurchaseRequestCreateComponent,
    PurchaseRequestReviewComponent,
    PurchaseRequestReviewItemComponent,
    
    PurchaseRequestLinesComponent,
    PurchaseRequestLineItemListComponent,
    PurchaseRequestLineItemDetailComponent,
    PurchaseRequestLineItemEditComponent,
    PurchaseRequestLineItemCreateComponent,    

    SortPipe,

    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    VendorService,
    ProductService,
    PurchaseRequestService,
    PurchaseRequestLineitemService,
    SystemService,
    CanReviewGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
