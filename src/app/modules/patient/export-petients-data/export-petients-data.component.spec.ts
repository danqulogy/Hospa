import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportPetientsDataComponent } from './export-petients-data.component';

describe('ExportPetientsDataComponent', () => {
  let component: ExportPetientsDataComponent;
  let fixture: ComponentFixture<ExportPetientsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportPetientsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportPetientsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
