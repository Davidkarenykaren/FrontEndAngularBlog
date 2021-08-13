import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Publicacion } from '../interfaces/publicacion.interface';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicacionComponent implements OnInit {
  @Input() publicacion: Publicacion;

  //@Output() addToCartClick = new EventEmitter<Product>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }




}
