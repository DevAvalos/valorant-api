import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-agentes',
  standalone: true,
  imports: [CommonModule, HttpClientModule], 
  templateUrl: './agentes.html',
  styleUrls: ['./agentes.css']
})
export class AgentesComponent implements OnInit {
  agentes: any[] = [];
  mapas: any[] = [];
  armas: any[] = [];
  rangos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://valorant-api-qhsh.onrender.com/agentes').subscribe(data => {
      this.agentes = data;
    });

    this.http.get<any[]>('https://valorant-api-qhsh.onrender.com/mapas').subscribe(data => {
      this.mapas = data;
    });

    this.http.get<any[]>('https://valorant-api-qhsh.onrender.com/armas').subscribe(data => {
      this.armas = data;
    });

    this.http.get<any[]>('https://valorant-api-qhsh.onrender.com/rangos').subscribe(data => {
      this.rangos = data;
    });
  }
}
