import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsCreationComponent } from './transactions-creation.component';

describe('TransactionsCreationComponent', () => {
  let component: TransactionsCreationComponent;
  let fixture: ComponentFixture<TransactionsCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
