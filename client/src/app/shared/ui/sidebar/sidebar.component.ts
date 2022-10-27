import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  constructor(private sidebar:NbSidebarService) { }

 toggle(){
  this.sidebar.toggle()
 }
}
