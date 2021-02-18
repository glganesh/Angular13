import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadinglazyComponent } from './loadinglazy.component';

describe('LoadinglazyComponent', () => {
  let component: LoadinglazyComponent;
  let fixture: ComponentFixture<LoadinglazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadinglazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadinglazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
