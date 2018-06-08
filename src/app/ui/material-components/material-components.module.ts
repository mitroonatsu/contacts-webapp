import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatDialogModule,
  MatDividerModule,
  MatIconModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';

const materialModules = [
  MatButtonModule,
  MatSidenavModule,
  BrowserAnimationsModule,
  MatToolbarModule,
  MatIconModule,
  MatDividerModule,
  MatListModule,
  MatSnackBarModule,
  MatDialogModule,
];

@NgModule({
  imports: [
    materialModules
  ],
  exports: [
    materialModules
  ]
})

export class MaterialComponentsModule {
}
