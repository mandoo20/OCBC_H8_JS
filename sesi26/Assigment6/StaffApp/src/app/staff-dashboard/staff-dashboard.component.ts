import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Staff } from '../shared/staff';
import { StaffService } from '../shared/staff.service';

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.css'],
})
export class StaffDashboardComponent implements OnInit {
  staff_id!: number;
  staffobj!: Staff;
  staffTable: Staff[] = [];

  ngOnInit(): void {
    this.getAllData();
  }

  form = {
    formEdit: new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      role: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    }),
  };

 

  constructor(private staffService: StaffService) {}

  get Title() {
    return this.form.formEdit.get('title');
  }

  get FirstName() {
    return this.form.formEdit.get('firstName');
  }

  get LastName() {
    return this.form.formEdit.get('lastName');
  }

  get Role() {
    return this.form.formEdit.get('role');
  }
  get Email() {
    return this.form.formEdit.get('email');
  }
  get Password() {
    return this.form.formEdit.get('password');
  }

  get ConfirmPassword() {
    return this.form.formEdit.get('confirmPassword');
  }

  getAllData() {
    this.staffService.getData().subscribe((res) => {
      this.staffTable = res;
    });
  }

  onEdit(data: any) {
    this.staff_id = data.id;
    this.form.formEdit.controls['title'].setValue(data.title);
    this.form.formEdit.controls['firstName'].setValue(data.firstName);
    this.form.formEdit.controls['lastName'].setValue(data.lastName);
    if (data.role == 'User') {
      this.form.formEdit.controls['role'].setValue('1');
    } else {
      this.form.formEdit.controls['role'].setValue('0');
    }
    this.form.formEdit.controls['email'].setValue(data.email);
    this.form.formEdit.controls['password'].setValue(data.password);
    this.form.formEdit.controls['confirmPassword'].setValue(
      data.confirmPassword
    );
  }

  editEmployee() {
    this.staffobj = this.form.formEdit.value;
    this.staffService.updateData(this.staffobj, this.staff_id).subscribe(
      (res) => {
        console.log(res);
        alert('Data Employee Successfully Edited');
        let c = document.getElementById('canceledit');
        c?.click();
        this.form.formEdit.reset();
        this.getAllData();
      },
      (err) => {
        alert('Something Went wrong');
      }
    );
  }

  deleteEmployee(data: any) {
    this.staffService.deleteData(data.id).subscribe((res) => {
      alert('Data has been deleted');
      this.getAllData();
    });
  }
}
