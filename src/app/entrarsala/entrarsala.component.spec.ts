import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrarsalaComponent } from './entrarsala.component';

describe('EntrarsalaComponent', () => {
  let component: EntrarsalaComponent;
  let fixture: ComponentFixture<EntrarsalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrarsalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrarsalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
