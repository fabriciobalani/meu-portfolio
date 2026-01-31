import { Injectable } from '@angular/core';
import { Menu } from '../menu/menu';
import { UrlCodec } from '@angular/common/upgrade';

@Injectable({
  providedIn: 'root',
})
export class MenuService {

  getItems(): Array<Menu> {

    const menu: Array<Menu> = [
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
