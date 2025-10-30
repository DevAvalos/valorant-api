import { Component } from '@angular/core';
import { AgentesComponent } from './componentes/agentes/agentes';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgentesComponent, HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'proyecto';
}
