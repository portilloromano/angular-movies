import { Component, OnInit } from '@angular/core';
import { CreditsService } from 'src/app/services/credits.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {
  public id: string;
  public credits: object[];

  constructor(
    public creditsService: CreditsService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    this.creditsService.getCreditsById(this.id).subscribe(
      res => this.credits = res['results'],
      error => console.log(error)
    )
    console.log('Credits',this.id, this.credits);
  }

}
