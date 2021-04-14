import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CharactersListPage } from './characters-list.page';

describe('CharactersListPage', () => {
  let component: CharactersListPage;
  let fixture: ComponentFixture<CharactersListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CharactersListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
