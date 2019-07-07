import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeadComponent } from "./header.component";
import { FootComponent } from "./footer.component";
import { ItemComponent } from "./item.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, HeadComponent, FootComponent, ItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
