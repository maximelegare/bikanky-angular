import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Material } from 'src/app/shared/context/materials/materials.model';
import { GeneralState } from 'src/app/shared/context/general/general.state';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-material-card',
  templateUrl: './material-card.component.html',
  styleUrls: ['./material-card.component.css']
})
export class MaterialCardComponent implements OnInit {

  @Select(GeneralState.getLang) lang$:Observable<string>

  constructor() { }
  @Input() material:Material

  ngOnInit(): void {
  }

}
