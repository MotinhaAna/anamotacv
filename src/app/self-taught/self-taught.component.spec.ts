import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfTaughtComponent } from './self-taught.component';

describe('SelfTaughtComponent', () => {
  let component: SelfTaughtComponent;
  let fixture: ComponentFixture<SelfTaughtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfTaughtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfTaughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
