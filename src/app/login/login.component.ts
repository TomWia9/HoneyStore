import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  @Input() mini = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  onSubmit(){
    console.log(this.form);
    this.authService.login(this.form.value).subscribe(x => {
      if(x){
        if(this.authService.getCurrentUserValue().email === 'admin@admin'){
          this.router.navigate(['/admin']);
        } else if(this.authService.getCurrentUserValue().email !== null && this.authService.getCurrentUserValue().email !== 'admin@admin'){
          this.router.navigate(['']);
        }
      }
    });
  }

}
