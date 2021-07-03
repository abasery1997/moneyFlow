import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsCreationComponent } from './accounts-creation.component';

describe('AccountsCreationComponent', () => {
  let component: AccountsCreationComponent;
  let fixture: ComponentFixture<AccountsCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
