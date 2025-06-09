import { Component } from '@angular/core';
import { RoleComponent } from '../role/role.component';
import { DesignationComponent } from '../designation/designation.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  imports: [RoleComponent, DesignationComponent, CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css',
})
export class MasterComponent {
  currentComponent: string = '';
  disPlay(str: string) {
    this.currentComponent = str;
  }
}
