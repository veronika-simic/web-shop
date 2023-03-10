import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
})
export class FiltersComponent {
  @Output() categoryChange = new EventEmitter<string>();
  categories = ["ranchera", "cumbia", "pop"];

  onCategoryChanged(category: string): void {
    this.categoryChange.emit(category);
  }
}
