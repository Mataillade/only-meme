import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMemeComponent } from './search-meme.component';

describe('SearchMemeComponent', () => {
  let component: SearchMemeComponent;
  let fixture: ComponentFixture<SearchMemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchMemeComponent]
    });
    fixture = TestBed.createComponent(SearchMemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
