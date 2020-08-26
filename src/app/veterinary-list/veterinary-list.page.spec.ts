import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VeterinaryListPage } from './veterinary-list.page';

describe('VeterinaryListPage', () => {
  let component: VeterinaryListPage;
  let fixture: ComponentFixture<VeterinaryListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeterinaryListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VeterinaryListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
