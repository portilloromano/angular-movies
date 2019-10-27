import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private category: string = 'Category';
  private search: string = '';
  private inputSearch:string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.category = params['category'] || 'Category';
    })
  }

  ChangeCategory(category: string) {
    this.category = category;
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      this.queryExecute();
    }
  }

  queryExecute() {
    this.search = encodeURI(this.inputSearch);
    this.router.navigate([`/movies-search/${this.search}`]);
  }
}
