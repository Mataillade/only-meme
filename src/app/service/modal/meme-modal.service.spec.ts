import { TestBed } from '@angular/core/testing';

import { MemeModalService } from './meme-modal.service';

describe('MemeModalService', () => {
  let service: MemeModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemeModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
