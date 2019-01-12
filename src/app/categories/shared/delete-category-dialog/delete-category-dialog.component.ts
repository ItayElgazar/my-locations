import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-delete-category-dialog',
  templateUrl: './delete-category-dialog.component.html',
  styleUrls: ['./delete-category-dialog.component.scss']
})
export class DeleteCategoryDialogComponent {

  constructor(private readonly dialogRef: MatDialogRef<DeleteCategoryDialogComponent>) { }

  noClick() {
    this.dialogRef.close();
  }
}
