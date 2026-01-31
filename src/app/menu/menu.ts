import { Component } from '@angular/core';
import { MenuService } from '../services/menu-service';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  constructor(private menuService: MenuService){}

}
