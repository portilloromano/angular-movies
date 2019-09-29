import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public category: string = 'Category';

  constructor(
    public route: ActivatedRoute
  ) { }

  ngOnInit() { }

  ChangeCategory(category:string){
    this.category = category;
  }
}
