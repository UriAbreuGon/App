import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeClientsComponent } from './we-clients.component';

describe('WeClientsComponent', () => {
  let component: WeClientsComponent;
  let fixture: ComponentFixture<WeClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeClientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
