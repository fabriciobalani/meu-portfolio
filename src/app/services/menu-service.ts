import { Injectable } from '@angular/core';
import { MenuModel } from '../models/menu';


@Injectable({
  providedIn: 'root',
})
export class MenuService {

  getItems(): Array<MenuModel> {

    const menu: Array<MenuModel> = [
      {
        name: 'Início',
        url: '#banner'
      },
      {
        name: 'Sobre mim',
        url: '#about'
      },
      {
        name: 'Habilidades',
        url: '#skills'
      },
      {
        name: 'Projetos',
        url: '#projects'
      },
      {
        name: 'Contato',
        url: '#contact'
      }
    ];

    return menu;
  }

}
