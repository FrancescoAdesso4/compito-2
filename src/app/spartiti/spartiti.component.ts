import { Component, Input } from '@angular/core';
import { Spartito } from '../model/streaming.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spartiti',
  templateUrl: './spartiti.component.html',
  styleUrls: ['./spartiti.component.css']
})
export class SpartitiComponent {
  @Input() spartiti: Spartito[]
  constructor(private router:Router){
    this.spartiti =this.router.getCurrentNavigation().extras.state as Spartito[];
  }
  
}
