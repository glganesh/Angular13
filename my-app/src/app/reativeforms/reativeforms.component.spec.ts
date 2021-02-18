import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativeformsComponent } from './reativeforms.component';

describe('ReativeformsComponent', () => {
  let component: ReativeformsComponent;
  let fixture: ComponentFixture<ReativeformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReativeformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReativeformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
