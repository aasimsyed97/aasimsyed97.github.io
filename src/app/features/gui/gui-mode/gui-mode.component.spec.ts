import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiModeComponent } from './gui-mode.component';

describe('GuiModeComponent', () => {
  let component: GuiModeComponent;
  let fixture: ComponentFixture<GuiModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuiModeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuiModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
