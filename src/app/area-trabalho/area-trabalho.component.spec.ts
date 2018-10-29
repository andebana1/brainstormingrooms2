import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaTrabalhoComponent } from './area-trabalho.component';

describe('AreaTrabalhoComponent', () => {
  let component: AreaTrabalhoComponent;
  let fixture: ComponentFixture<AreaTrabalhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaTrabalhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaTrabalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
