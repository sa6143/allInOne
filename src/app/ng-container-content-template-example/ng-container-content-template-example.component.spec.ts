import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContainerContentTemplateExampleComponent } from './ng-container-content-template-example.component';

describe('NgContainerContentTemplateExampleComponent', () => {
  let component: NgContainerContentTemplateExampleComponent;
  let fixture: ComponentFixture<NgContainerContentTemplateExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgContainerContentTemplateExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContainerContentTemplateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
