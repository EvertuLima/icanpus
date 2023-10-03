import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsIdComponent } from './rooms-id.component';

describe('RoomsIdComponent', () => {
  let component: RoomsIdComponent;
  let fixture: ComponentFixture<RoomsIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomsIdComponent]
    });
    fixture = TestBed.createComponent(RoomsIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
