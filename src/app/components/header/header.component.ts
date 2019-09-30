import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private category: string = 'Category';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() { 
    // this.route.paramMap.subscribe(params => {
    //   console.log(params);
      
    //   this.category = params.get("category")
    // })


    // console.log(this.route);
    
    this.route.params.subscribe( (params: any) => {
      this.category = params['category'] || 'Category';

    })

  }

  ChangeCategory(category:string){
    this.category = category;
  }
}
