import { Component } from '@angular/core';
import { MenuService } from '../services/menu-service';
import { MenuModel } from '../models/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  constructor(private menuService: MenuService) { }

  menuStatus = 'closed';

  menuItens: Array<MenuModel> = [];

  ngOnInit() {

    const menu = this.menuService.getItems();

    this.menuItens = menu;
  }

  menuClick() {

    this.menuStatus = (this.menuStatus === 'open' ? 'closed' : 'open');
  }
}
