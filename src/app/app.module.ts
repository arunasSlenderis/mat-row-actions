import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatRowActionsModule } from 'mat-row-actions';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SampleTableComponent } from './sample-table/sample-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    SampleTableComponent
  ],
  imports: [
    BrowserModule,
    MatRowActionsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
