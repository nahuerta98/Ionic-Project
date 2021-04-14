import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { RYMApiService } from '../../services/rymapi.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.page.html',
  styleUrls: ['./characters-list.page.scss'],
})
export class CharactersListPage implements OnInit {
  protected characters: character[];
  protected page = 1;
  protected info: Info;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(private router: Router, private RYMService: RYMApiService) {
      RYMService.getData(this.page).subscribe((charactersData) =>{
        this.characters = charactersData.results;
        this.info = charactersData.info;
      });
      this.setNextPage();
   }

  ngOnInit() {
  }

  loadData(event){
    if(this.info.next){
      this.RYMService.getData(this.page).subscribe((newData) =>{
        this.characters.push(... newData.results);
        this.info = newData.info;
      });
      this.setNextPage();
    } else {
      this.infiniteScroll.disabled = true;
    }
    event.target.complete();
  }

  setNextPage(){
    this.page++;
  }
  //Navigation
  characterProfile(id: number){
    this.router.navigate(['/character-profile', id]);
  }

  characterList(){
    this.router.navigateByUrl('/characters-list');
  }

  profile(){
    this.router.navigateByUrl('/profile');
  }
}
