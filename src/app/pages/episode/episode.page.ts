import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RYMApiService } from '../../services/rymapi.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.page.html',
  styleUrls: ['./episode.page.scss'],
})
export class EpisodePage implements OnInit {
  protected episode: episode;
  protected flag = false;

  constructor(private route: ActivatedRoute, private RYMService: RYMApiService) {
    let id = this.route.snapshot.paramMap.get('id');
    RYMService.getEpisodeDetails(id).subscribe((episode) =>{
      this.episode = episode;
      this.flag = true;
    });
   }

  ngOnInit() {
  }

}
