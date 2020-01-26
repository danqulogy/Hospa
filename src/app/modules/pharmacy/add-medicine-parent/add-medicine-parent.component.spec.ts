import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicineParentComponent } from './add-medicine-parent.component';

describe('AddMedicineParentComponent', () => {
  let component: AddMedicineParentComponent;
  let fixture: ComponentFixture<AddMedicineParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMedicineParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedicineParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
