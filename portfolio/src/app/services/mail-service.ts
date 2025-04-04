import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Service for sending emails through a backend API.
 * 
 * This service provides a method to send email data via an HTTP POST request to the backend.
 */
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  /** The API URL for sending the email. */
  private apiUrl = 'https://benjamin-kloss.de/backend/sendMail.php';

    /**
   * Creates an instance of the EmailService.
   * 
   * @param {HttpClient} http - The HttpClient instance used for making HTTP requests.
   */
  constructor(private http: HttpClient) {}


    /**
   * Sends an email using the provided form data.
   * 
   * @param {any} formData - The data to be sent in the email, usually obtained from a form.
   * @returns {Observable<any>} - An observable that represents the HTTP response.
   * 
   * This method formats the form data as URL-encoded, sets the appropriate headers, 
   * and sends the data to the backend via a POST request.
   */
  sendEmail(formData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams(formData).toString();
    return this.http.post(this.apiUrl, body, { headers });
  }
}
