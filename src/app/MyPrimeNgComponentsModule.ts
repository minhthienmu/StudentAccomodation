import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {CardModule} from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { SliderModule } from 'primeng/slider';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FileUploadModule} from 'primeng/fileupload';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    DataViewModule,
    PanelModule,
    DropdownModule,
    DialogModule,
    InputTextModule,
    RatingModule,
    RippleModule,
    CardModule,
    CarouselModule,
    SliderModule,
    InputNumberModule,
    InputTextareaModule,
    FileUploadModule,
    TableModule
  ],
  exports: [
    ButtonModule,
    DataViewModule,
    PanelModule,
    DropdownModule,
    DialogModule,
    InputTextModule,
    RatingModule,
    RippleModule,
    CardModule,
    CarouselModule,
    SliderModule,
    InputNumberModule,
    InputTextareaModule,
    FileUploadModule,
    TableModule
  ]
})
export class MyPrimeNgComponentsModule {
}
