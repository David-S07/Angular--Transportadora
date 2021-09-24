import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookClienteComponent } from './book-cliente.component';

describe('HomeComponent', () => {
  let component: BookClienteComponent;
  let fixture: ComponentFixture<BookClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
