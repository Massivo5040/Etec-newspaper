import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigNewsComponent } from './big-news.component';

describe('BigNewsComponent', () => {
  let component: BigNewsComponent;
  let fixture: ComponentFixture<BigNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BigNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
