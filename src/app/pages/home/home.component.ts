import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
 
  cols = 3;
  category: string | undefined

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum
  }

  onCategoryChange(category: string): void {
    this.category = category;
  }
}
