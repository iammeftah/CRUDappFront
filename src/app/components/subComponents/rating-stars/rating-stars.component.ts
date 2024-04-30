import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.css']
})
export class RatingStarsComponent {
  @Output() ratingSelected = new EventEmitter<number>();

  onRatingChange(value: number) {
    console.log('Emitting rating:', value);
    this.ratingSelected.emit(value);
  }
}
