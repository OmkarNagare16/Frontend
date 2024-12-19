import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Import HttpClient

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule],  // Only RouterOutlet is standalone here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'patient';
}
