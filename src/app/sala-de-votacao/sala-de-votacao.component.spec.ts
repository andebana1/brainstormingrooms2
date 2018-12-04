import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaDeVotacaoComponent } from './sala-de-votacao.component';

describe('SalaDeVotacaoComponent', () => {
  let component: SalaDeVotacaoComponent;
  let fixture: ComponentFixture<SalaDeVotacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaDeVotacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaDeVotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
