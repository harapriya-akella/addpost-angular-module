import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildpostComponent } from './childpost.component';

describe('ChildpostComponent', () => {
  let component: ChildpostComponent;
  let fixture: ComponentFixture<ChildpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
