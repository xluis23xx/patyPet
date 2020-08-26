import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VeterinaryPage } from './veterinary.page';

describe('VeterinaryPage', () => {
  let component: VeterinaryPage;
  let fixture: ComponentFixture<VeterinaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeterinaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VeterinaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
