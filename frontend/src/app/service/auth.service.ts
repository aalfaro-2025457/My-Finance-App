import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { AuthResponse, LoginPayload, RegisterPayload } from "../models/auth.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private apiUrl = "http://localhost:3000/api/auth";

  constructor(private http: HttpClient) {}

  login(payload: LoginPayload): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, payload).pipe(
      tap((res) => this.saveToken(res.token))
    );
  }

  register(payload: RegisterPayload): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, payload).pipe(
      tap((res) => this.saveToken(res.token))
    );
  }

  private saveToken(token: string): void {
    localStorage.setItem("authToken", token);
  }

  getToken(): string | null {
    return localStorage.getItem("authToken");
  }

  logout(): void {
    localStorage.removeItem("authToken");
  }
}