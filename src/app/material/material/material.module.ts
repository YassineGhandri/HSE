import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import { HighchartsChartModule } from 'highcharts-angular';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
const materials=[MatToolbarModule,
                  MatListModule,
                  MatSidenavModule,
                  MatIconModule,
                  MatSlideToggleModule,
                  MatButtonModule,
                  MatTableModule,
                  MatPaginatorModule,
                  MatDialogModule,
                  MatFormFieldModule,
                  MatSelectModule,
                  MatInputModule,
                  MatDatepickerModule,
                  MatNativeDateModule,
                  MatProgressBarModule,
                  MatCardModule,
                  MatGridListModule,
                  MatMenuModule,
                  MatRadioModule,
                  MatExpansionModule,
                  CommonModule,
                
]
@NgModule({
  imports: [...materials],
  exports: [...materials],
})
export class MaterialModule { }
