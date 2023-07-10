import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialInstancesComponent } from './official-instances.component';

describe('OfficialInstancesComponent', () => {
  let component: OfficialInstancesComponent;
  let fixture: ComponentFixture<OfficialInstancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficialInstancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficialInstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
