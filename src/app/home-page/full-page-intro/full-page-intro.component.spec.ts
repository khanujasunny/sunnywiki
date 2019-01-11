import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPageIntroComponent } from './full-page-intro.component';

describe('FullPageIntroComponent', () => {
  let component: FullPageIntroComponent;
  let fixture: ComponentFixture<FullPageIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullPageIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullPageIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
