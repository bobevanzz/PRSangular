import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './support/home/home.component';
import { AboutComponent } from './support/about/about.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { PurchaseRequestListComponent } from './purchaserequest/purchaserequest-list/purchaserequest-list.component';
import { PurchaseRequestDetailComponent } from './purchaserequest/purchaserequest-detail/purchaserequest-detail.component';
import { PurchaseRequestEditComponent } from './purchaserequest/purchaserequest-edit/purchaserequest-edit.component';
import { PurchaseRequestCreateComponent } from './purchaserequest/purchaserequest-create/purchaserequest-create.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { PurchaseRequestLineItemCreateComponent } from './purchaserequestlineitem/purchaserequestlineitem-create/purchaserequestlineitem-create.component';
import { PurchaseRequestLineItemEditComponent } from './purchaserequestlineitem/purchaserequestlineitem-edit/purchaserequestlineitem-edit.component';
import { PurchaseRequestLineItemDetailComponent } from './purchaserequestlineitem/purchaserequestlineitem-detail/purchaserequestlineitem-detail.component';
import { PurchaseRequestLineItemListComponent } from './purchaserequestlineitem/purchaserequestlineitem-list/purchaserequestlineitem-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'users/detail/:id', component: UserDetailComponent },
  { path: 'users/edit/:id', component: UserEditComponent },
  { path: 'users/list', component: UserListComponent },
  { path: 'users/create', component: UserCreateComponent },
  { path: 'vendors/detail/:id', component: VendorDetailComponent },
  { path: 'vendors/edit/:id', component: VendorEditComponent },
  { path: 'vendors/list', component: VendorListComponent },
  { path: 'vendors/create', component: VendorCreateComponent },
  { path: 'purchaserequests/detail/:id', component: PurchaseRequestDetailComponent },
  { path: 'purchaserequests/edit/:id', component: PurchaseRequestEditComponent },
  { path: 'purchaserequests/list', component: PurchaseRequestListComponent },
  { path: 'purchaserequests/create', component: PurchaseRequestCreateComponent },
  { path: 'products/detail/:id', component: ProductDetailComponent },
  { path: 'products/edit/:id', component: ProductEditComponent },
  { path: 'products/list', component: ProductListComponent },
  { path: 'products/create', component: ProductCreateComponent },
  { path: 'purchaserequestlineitems/detail/:rid/:rlid', component: PurchaseRequestLineItemDetailComponent },
  { path: 'purchaserequestlineitems/edit/:rid/:rlid', component: PurchaseRequestLineItemEditComponent },
  { path: 'purchaserequestlineitems/list/:id', component: PurchaseRequestLineItemListComponent },
  { path: 'purchaserequestlineitems/create/:id', component: PurchaseRequestLineItemCreateComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
