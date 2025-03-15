import { Component } from '@angular/core';
import {MatIconModule} from  '@angular/material/icon' ;
import {MatButtonModule} from  '@angular/material/button' ;
import {MatToolbarModule} from  '@angular/material/toolbar' ;

export class AppModule { }


@Component({
  selector: 'app-nav',
  standalone: true, 
  imports : [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent { }
