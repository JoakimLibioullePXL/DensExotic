import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class EventService {
  private http: HttpClient = inject(HttpClient);

  private readonly apiUrl: string = 'http://localhost:8080/event/api/event';

  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(`${this.apiUrl}`, event);
  }

  // 2. EventModel bijwerken (PUT)
  updateEvent(id: number, event: Event): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, event);
  }

  // 3. EventModel verwijderen (DELETE)
  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // 4. Alle events ophalen (GET)
  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiUrl}`);
  }

  // 5. EventModel ophalen op basis van ID (GET)
  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.apiUrl}/${id}`);
  }
}
