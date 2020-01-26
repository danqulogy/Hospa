import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportStaffDataComponent } from './export-staff-data.component';

describe('ExportStaffDataComponent', () => {
  let component: ExportStaffDataComponent;
  let fixture: ComponentFixture<ExportStaffDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportStaffDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportStaffDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
