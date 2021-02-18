import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudjsonplaceholderComponent } from './crudjsonplaceholder.component';

describe('CrudjsonplaceholderComponent', () => {
  let component: CrudjsonplaceholderComponent;
  let fixture: ComponentFixture<CrudjsonplaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudjsonplaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudjsonplaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
