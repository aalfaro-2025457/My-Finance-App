import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { AuthService } from "../../service/auth.service";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLogout(): void {
    this.authService.logout(); // Delete token
    this.router.navigate(["/login"]);
  }
}