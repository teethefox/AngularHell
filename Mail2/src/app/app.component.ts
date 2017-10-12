import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  emails = [
    {email: 'SPacedout@gmail.com', importance: true, subject: "krfngjk", content: "nonsense"}, {email: 'yomama@bill.com', importance: false, subject: "No idea", content: "Hello darkness my old friend"}, {email: "sushi@fish.carp", importance: false, subject: "I am hungry", content: "Super hungry"}]
}
