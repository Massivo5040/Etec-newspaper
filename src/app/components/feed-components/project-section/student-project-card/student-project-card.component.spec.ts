import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProjectCardComponent } from './student-project-card.component';

describe('StudentProjectCardComponent', () => {
  let component: StudentProjectCardComponent;
  let fixture: ComponentFixture<StudentProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentProjectCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
