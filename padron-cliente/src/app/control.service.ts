import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  public API_URI = 'http://165.232.151.148:3000/api'
  constructor(private http: HttpClient, private router: Router) { }
}
