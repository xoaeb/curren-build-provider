import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentBuildComponent } from './current-build-provider.component';

describe('HiMessageComponent', () => {
  let component: CurrentBuildComponent;
  let fixture: ComponentFixture<CurrentBuildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentBuildComponent]
    });
    fixture = TestBed.createComponent(CurrentBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
