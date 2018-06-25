import { TestBed, inject } from '@angular/core/testing';

import { DemoModuleService } from './demo-module.service';

describe('DemoModuleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemoModuleService]
    });
  });

  it('should be created', inject([DemoModuleService], (service: DemoModuleService) => {
    expect(service).toBeTruthy();
  }));
});
