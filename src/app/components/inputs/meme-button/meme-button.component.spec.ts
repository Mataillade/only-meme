import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeButtonComponent } from './meme-button.component';

describe('MemeButtonComponent', () => {
  let component: MemeButtonComponent;
  let fixture: ComponentFixture<MemeButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemeButtonComponent]
    });
    fixture = TestBed.createComponent(MemeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
