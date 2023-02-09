import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilityServiceComponent } from './mobility-service.component';

describe('MobilityServiceComponent', () => {
  let component: MobilityServiceComponent;
  let fixture: ComponentFixture<MobilityServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilityServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilityServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
