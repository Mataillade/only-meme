import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeedComponent } from './home-feed.component';

describe('HomeFeedComponent', () => {
  let component: HomeFeedComponent;
  let fixture: ComponentFixture<HomeFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeFeedComponent]
    });
    fixture = TestBed.createComponent(HomeFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
