import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-role',
  imports: [FormsModule, CommonModule],
  templateUrl: './role.component.html',
  styleUrl: './role.component.css',
})
export class RoleComponent implements OnInit {
  roleList: IRole[] = [];
  http = inject(HttpClient); // new way to create instance to http client

  ngOnInit() {
    this.getAllRoles();
  }

  getAllRoles() {
    this.http
      .get<APIResponseModel>('/api/ClientStrive/GetAllRoles')
      .subscribe((res: APIResponseModel) => {
        this.roleList = res.data;
      });
  }

  // firstName: string = 'Rohit';
  // version: number = 3.9;
  // curDate: Date = new Date();
  // category: string = 'button';

  // shoeEvent() {
  //   alert('Hola');
  // }
}
