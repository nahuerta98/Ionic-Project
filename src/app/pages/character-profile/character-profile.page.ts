import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RYMApiService } from '../../services/rymapi.service';

@Component({
  selector: 'app-character-profile',
  templateUrl: './character-profile.page.html',
  styleUrls: ['./character-profile.page.scss'],
})
export class CharacterProfilePage implements OnInit {
  protected character: character;
  protected episodes: episode[] = [];
  protected flag = false;

  constructor(private router:Router, private route: ActivatedRoute, private RYMService: RYMApiService) {
      this.getCharacter();
   }

  ngOnInit() {
  }

  getCharacter(){
    let id = this.route.snapshot.paramMap.get('id');
    this.RYMService.getCharacter(id).subscribe((character) =>{
        this.character = character;
        this.getEpisodes();
    });
  }

  getEpisodes(){
    for(let i=0; i<this.character.episode.length; i++){
      this.RYMService.getEpisode(this.character.episode[i]).subscribe((episode)=>{
        this.episodes.push(episode);
      });
    }
    this.flag = true;
  }
  //Navigation
  episodeDetails(id: number){
    this.router.navigate(['/episode', id]);
  }
}
