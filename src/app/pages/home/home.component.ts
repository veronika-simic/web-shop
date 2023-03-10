import { Component } from "@angular/core";

const ROWS_HEIGHTS: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  cols = 3;
  rowHeight = ROWS_HEIGHTS[this.cols];
  category: string | undefined;

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHTS[this.cols];
  }

  onCategoryChange(category: string): void {
    this.category = category;
  }
}
