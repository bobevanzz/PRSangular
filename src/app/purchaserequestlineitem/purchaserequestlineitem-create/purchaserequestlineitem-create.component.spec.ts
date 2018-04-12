import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequestlineitemCreateComponent } from './purchaserequestlineitem-create.component';

describe('PurchaserequestlineitemCreateComponent', () => {
  let component: PurchaseRequestlineitemCreateComponent;
  let fixture: ComponentFixture<PurchaseRequestlineitemCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRequestlineitemCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequestlineitemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
