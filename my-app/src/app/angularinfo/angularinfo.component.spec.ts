import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularinfoComponent } from './angularinfo.component';

describe('AngularinfoComponent', () => {
  let component: AngularinfoComponent;
  let fixture: ComponentFixture<AngularinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
