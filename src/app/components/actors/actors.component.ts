import { Component, OnInit } from '@angular/core';
import { ActorsService } from 'src/app/services/actors.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {
  public id: string;
  public actors: object[];

  constructor(
    public ActorsService: ActorsService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    this.ActorsService.getActorsByMovieId(this.id).subscribe(
      res => this.actors = res['cast'],
      error => console.log(error)
    )
  }

}
