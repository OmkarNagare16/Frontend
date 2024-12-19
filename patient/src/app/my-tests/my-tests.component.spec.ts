import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTestsComponent } from './my-tests.component';

describe('MyTestsComponent', () => {
  let component: MyTestsComponent;
  let fixture: ComponentFixture<MyTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
