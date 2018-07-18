import { Component } from '@angular/core';


@Component({
  selector: 'app-notfound',
  template:
    `
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4 text-center">
          <img src="../assets/error.png" width="300px;" />
        </div>
        <div class="col-md-4"></div>
      </div>
    `
})

export class PageNotFoundComponent  {
  constructor() { }
}
