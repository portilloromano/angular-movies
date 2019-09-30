import { Component, OnInit } from '@angular/core';
import { ActorsService } from 'src/app/services/actors.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.scss']
})
export class ActorDetailComponent implements OnInit {
  private id;
  private actor;

  constructor(
    private actorService: ActorsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.actorService.getActorsById(this.id).subscribe(
      res => this.actor = res,
      error => console.log(error)
    );
  }
}

