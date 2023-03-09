import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WeatherModule } from "../weather/weather.module";
import { HeaderComponent } from "./header.component";

@NgModule({
    declarations: [
      HeaderComponent 
    ],
    imports: [
      CommonModule,
      WeatherModule
    ],
    exports: [
      HeaderComponent
    ]
  })
  export class HeaderModule { }