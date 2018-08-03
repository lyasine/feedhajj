import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthmapComponent } from './healthmap.component';

describe('HealthmapComponent', () => {
  let component: HealthmapComponent;
  let fixture: ComponentFixture<HealthmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
