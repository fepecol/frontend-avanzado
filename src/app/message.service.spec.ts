import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let messageService: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
  });

  it('should be created', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));

  it('test service', inject([MessageService], (service: MessageService) => {  
    expect(service.get().length).toBe(0);    
    service.add('test');
    expect(service.get().length).toBe(1);
    service.clear(); 
    expect(service.get().length).toBe(0);
  }));

});
