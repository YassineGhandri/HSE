import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPEService } from '../ipe.service';
import { IPEdialogComponent } from '../ipedialog/ipedialog.component';

@Component({
  selector: 'app-store-mvt',
  templateUrl: './store-mvt.component.html',
  styleUrls: ['./store-mvt.component.css']
})
export class StoreMVTComponent implements OnInit {

  IPEform!: FormGroup;
  Actionbtn = 'Save';
  constructor(
    private formBuilder: FormBuilder,

    @Inject(MAT_DIALOG_DATA) public editData: any,

    private dialogRef: MatDialogRef<IPEdialogComponent>,
    private ipeService: IPEService
  ) { }

  ngOnInit(): void {
    this.IPEform = this.formBuilder.group({
      type: ['', Validators.required],
      code: ['', Validators.required],
      description: ['', Validators.required],
    });
    if (this.editData) {
      this.Actionbtn = 'Update';
      this.IPEform.patchValue(this.editData);
    }
  }

  addIPE() {
    if (!this.editData) {
      if (this.IPEform.valid) {
        this.ipeService.postIPE(this.IPEform.value).subscribe({
          next: (res) => {
            this.IPEform.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert('error on save');
          },
        });
      }
    } else {
      this.updateIPE();
    }
  }
  updateIPE() {
    this.ipeService.putIPE(this.IPEform.value, this.editData.id).subscribe({
      next: (res) => {
        this.IPEform.reset();
        this.dialogRef.close('update');
      },
      error: () => {
        alert('error on update');
      },
    });
  }

}


