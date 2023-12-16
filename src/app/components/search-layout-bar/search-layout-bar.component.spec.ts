import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLayoutBarComponent } from './search-layout-bar.component';

describe('SearchLayoutBarComponent', () => {
  let component: SearchLayoutBarComponent;
  let fixture: ComponentFixture<SearchLayoutBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchLayoutBarComponent]
    });
    fixture = TestBed.createComponent(SearchLayoutBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
