import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  sideBarOpen = true;

  constructor() { }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  // not, it's not in use
  offSideBar(){
    this.sideBarOpen = false;
  }
}
