import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'https://benjamin-kloss.de/backend/sendMail.php';
  constructor(private http: HttpClient) {}

  sendEmail(formData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams(formData).toString();
    return this.http.post(this.apiUrl, body, { headers });
  }
}
