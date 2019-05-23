import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
    service = TestBed.get(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test service', () => {  
    expect(service.get().length).toBe(0);    
    service.add('test');
    expect(service.get().length).toBe(1);
    service.clear(); 
    expect(service.get().length).toBe(0);
  });

});
