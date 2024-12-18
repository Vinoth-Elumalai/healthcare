import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() card: any; // Card data input
  @Input() index: number = 0; // Index of the card
  @Input() selectedCard: number | null = null; // Selected card index
  @Output() cardClick = new EventEmitter<number>(); // Emit event on card click

  APP_COLORS = {
    Primary: '#D6E7EE', // Primary color
  };

  onCardClick(): void {
    this.cardClick.emit(this.index);
  }
}
