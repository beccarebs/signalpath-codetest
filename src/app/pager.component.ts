import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'pagination-pager',
  templateUrl: './pager.component.html'
})
export class DemoPaginationPagerComponent {

	constructor(
    private router: Router
	) { }


	public totalItems: number = 100000;
	public currentPage: number = 1;
	public smallnumPages: number = 0;

	public pageChanged(event: any): void {
		// console.log('Page changed to: ' + event.page);
		// console.log('Number items per page: ' + event.itemsPerPage);

		var pageID = event.page;

    this.router.navigate(['/trials'], { queryParams: { page: pageID } });

	}


}
