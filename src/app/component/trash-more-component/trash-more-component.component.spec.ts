import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashMoreComponentComponent } from './trash-more-component.component';

describe('TrashMoreComponentComponent', () => {
  let component: TrashMoreComponentComponent;
  let fixture: ComponentFixture<TrashMoreComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashMoreComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashMoreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
