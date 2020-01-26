import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExportMedicineComponent } from './view-export-medicine.component';

describe('ViewExportMedicineComponent', () => {
  let component: ViewExportMedicineComponent;
  let fixture: ComponentFixture<ViewExportMedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewExportMedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExportMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
