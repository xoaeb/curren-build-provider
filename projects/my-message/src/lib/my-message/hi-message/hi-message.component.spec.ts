import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiMessageComponent } from './hi-message.component';

describe('HiMessageComponent', () => {
  let component: HiMessageComponent;
  let fixture: ComponentFixture<HiMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HiMessageComponent]
    });
    fixture = TestBed.createComponent(HiMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
