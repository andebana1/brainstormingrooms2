import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarsalaComponent } from './criarsala.component';

describe('CriarsalaComponent', () => {
  let component: CriarsalaComponent;
  let fixture: ComponentFixture<CriarsalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarsalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarsalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
