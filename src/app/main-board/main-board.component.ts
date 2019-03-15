import { Component, OnInit } from '@angular/core';
import {EmpCrud } from "../emp-crud";
import {EmpServiceService } from "../emp-service.service";

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css']
})
export class MainBoardComponent implements OnInit {

  // constructor() { }

  // ngOnInit() {
  // }



  employees: EmpCrud[];
  constructor(private _employeeService: EmpServiceService) { }
 
  ngOnInit() {
    this.getEmployees();
  }
 
  public getEmployees() {
    this._employeeService.getEmployees().subscribe((data: EmpCrud[]) => {
      this.employees = data;
      console.log(this.employees)
    });
  }







}
