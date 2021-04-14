import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CharacterProfilePage } from './character-profile.page';

describe('CharacterProfilePage', () => {
  let component: CharacterProfilePage;
  let fixture: ComponentFixture<CharacterProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
