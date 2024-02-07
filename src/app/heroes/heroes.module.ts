import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { HeroPageComponent } from './pages/heroPage/heroPage.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { HeroImagePipe } from './pipes/heroImage.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirmDialog/confirmDialog.component';


@NgModule({
  declarations: [
    CardComponent,
    ConfirmDialogComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    HeroPageComponent,
    HeroImagePipe
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
