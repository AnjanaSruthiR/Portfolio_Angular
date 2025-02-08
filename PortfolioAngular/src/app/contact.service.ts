import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'http://localhost:3000/submit'; // Your backend endpoint

  constructor(private http: HttpClient) {}

  submitContactForm(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData, {
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json' // Ensure the response type is JSON
    });
  }  
}
