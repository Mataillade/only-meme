import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeComponent } from './meme.component';

describe('MemeComponent', () => {
  let component: MemeComponent;
  let fixture: ComponentFixture<MemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemeComponent]
    });
    fixture = TestBed.createComponent(MemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
