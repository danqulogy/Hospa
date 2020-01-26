import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineStatisticsComponent } from './medicine-statistics.component';

describe('MedicineStatisticsComponent', () => {
  let component: MedicineStatisticsComponent;
  let fixture: ComponentFixture<MedicineStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
