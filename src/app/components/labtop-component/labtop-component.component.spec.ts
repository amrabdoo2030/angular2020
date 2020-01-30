import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtopComponentComponent } from './labtop-component.component';

describe('LabtopComponentComponent', () => {
  let component: LabtopComponentComponent;
  let fixture: ComponentFixture<LabtopComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabtopComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabtopComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
