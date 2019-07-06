import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeadComponent } from "./header.component";
import { FootComponent } from "./footer.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, HeadComponent, FootComponent],
  bootstrap: [AppComponent, HeadComponent, FootComponent]
})
export class AppModule {}
