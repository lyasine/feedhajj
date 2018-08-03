import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthmapeditComponent } from './healthmapedit.component';

describe('HealthmapeditComponent', () => {
  let component: HealthmapeditComponent;
  let fixture: ComponentFixture<HealthmapeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthmapeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthmapeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
