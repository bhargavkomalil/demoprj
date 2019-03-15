import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  API_URL = 'https://www.w3schools.com/angular/customers.php';
  constructor(private httpClient: HttpClient) { }
  getEmployees() {
      return this.httpClient.get(`${this.API_URL}/employees`);
  }

}
