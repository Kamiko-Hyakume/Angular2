import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projeto2 } from './projeto2';

describe('Projeto2', () => {
  let component: Projeto2;
  let fixture: ComponentFixture<Projeto2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projeto2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Projeto2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
