import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SimulationResult {
  totalGames: number;
  winsWhenChanged: number;
  winsWhenStayed: number;
}

@Injectable({
  providedIn: 'root',
})
export class MontyHallService {
  private apiUrl = 'https://localhost:7116/api/montyhall';

  constructor(private http: HttpClient) {}

  // Method to simulate the Monty Hall problem
  simulate(
    numberOfGames: number,
    switchDoor: boolean
  ): Observable<SimulationResult> {
    let params = new HttpParams()
      .set('numberOfGames', numberOfGames.toString())
      .set('switchDoor', switchDoor.toString());
    return this.http.get<SimulationResult>(`${this.apiUrl}/simulate`, {
      params,
    });
  }
}
