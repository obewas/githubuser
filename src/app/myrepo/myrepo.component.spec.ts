import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrepoComponent } from './myrepo.component';

describe('MyrepoComponent', () => {
  let component: MyrepoComponent;
  let fixture: ComponentFixture<MyrepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyrepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
