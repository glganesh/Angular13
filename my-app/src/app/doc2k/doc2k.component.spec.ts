import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Doc2kComponent } from './doc2k.component';

describe('Doc2kComponent', () => {
  let component: Doc2kComponent;
  let fixture: ComponentFixture<Doc2kComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Doc2kComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc2kComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
