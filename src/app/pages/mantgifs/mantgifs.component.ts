import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GifLocal } from 'src/app/interfaces/interfaces';
import { GiphyService } from 'src/app/services/giphy.service';


@Component({
  selector: 'app-mantgifs',
  templateUrl: './mantgifs.component.html',
  styleUrls: ['./mantgifs.component.css']
})
export class MantgifsComponent implements OnInit {

  constructor(private fb: FormBuilder, private gifService: GiphyService, private router: Router) { }
  nuevoGif: GifLocal = {};

  nuevoGifForm: FormGroup = this.fb.group({
    "name": new FormControl(null, Validators.required), //valor por defecto null + validaciones
    "imagen": new FormControl(null, Validators.required)
  })
  ngOnInit(): void {
  }

  get name() {
    return this.nuevoGifForm.get("name");
  }
  get imagen() {
    return this.nuevoGifForm.get("imagen");
  }


  submitForm() {
    if (this.nuevoGifForm.valid) {
      this.nuevoGif.name = this.name?.value;
      this.nuevoGif.imagen = this.imagen?.value;

      this.gifService.postGif(this.nuevoGif)
        .subscribe(resp => {
          console.log(resp);
          this.router.navigate(["/about"]);
        })
    }
  }
}
