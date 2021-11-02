import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Staff } from '../shared/staff';
import { StaffService } from '../shared/staff.service';

@Component({
  selector: 'app-staff-add',
  templateUrl: './staff-add.component.html',
  styleUrls: ['./staff-add.component.css']
})
export class StaffAddComponent implements OnInit {
  staffobj!: Staff;
  staffTable: Staff[] = [];

  form = {
    formAdd: new FormGroup({
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
  }

  constructor(private staffService: StaffService) { }

  ngOnInit(): void {
  }

  get Title() {
    return this.form.formAdd.get('title');
  }

  get FirstName() {
    return this.form.formAdd.get('firstName');
  }

  get LastName() {
    return this.form.formAdd.get('lastName');
  }

  get Role() {
    return this.form.formAdd.get('role');
  }
  get Email() {
    return this.form.formAdd.get('email');
  }
  get Password() {
    return this.form.formAdd.get('password');
  }

  get ConfirmPassword() {
    return this.form.formAdd.get('confirmPassword');
  }

  postEmployee() {
    this.staffobj = this.form.formAdd.value;
    this.staffService.postEmployee(this.staffobj).subscribe(
      (res) => {
        console.log(res);
        alert('Data Employee Added Successfully');
        let c = document.getElementById('cancel');
        c?.click();
        this.form.formAdd.reset();
        location.reload();
      },
      (err) => {
        alert('Something Went wrong');
      }
    );
  }

  resett(){
    this.form.formAdd.reset();
  }


}
