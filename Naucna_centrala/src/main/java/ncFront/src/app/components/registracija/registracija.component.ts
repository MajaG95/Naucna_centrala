import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../Model/Korisnik';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistracijaService } from '../../services/registracija.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  korisnik: Korisnik;
  constructor(private regService: RegistracijaService, private router: Router) { }

  ngOnInit() {
  }

  OnSubmit(korisnik: Korisnik, form: NgForm)
  {
    this.regService.registrujKorisnika(korisnik)
    .subscribe(
      data => {
        console.log(korisnik);
      },
      error =>{
        alert("Password must have six carachters with one upper case + one sign + one number!")
        console.log(error);
      }
    );     
    form.reset();
  }
}
