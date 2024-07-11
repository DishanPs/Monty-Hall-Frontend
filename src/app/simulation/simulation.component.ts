import { Component } from '@angular/core';
import { MontyHallService, SimulationResult } from '../monty-hall.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simulation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './simulation.component.html',
  styleUrl: './simulation.component.css',
})
export class SimulationComponent {
  numberOfGames: number = 1000;
  switchDoor: boolean = true;
  result: SimulationResult | null = null;

  constructor(private montyHallService: MontyHallService) {}

  startSimulation(): void {
    this.montyHallService
      .simulate(this.numberOfGames, this.switchDoor)
      .subscribe((result) => {
        this.result = result;
      });
  }
}
