import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCollaboratedNotesComponent } from './get-all-collaborated-notes.component';

describe('GetAllCollaboratedNotesComponent', () => {
  let component: GetAllCollaboratedNotesComponent;
  let fixture: ComponentFixture<GetAllCollaboratedNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllCollaboratedNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllCollaboratedNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
