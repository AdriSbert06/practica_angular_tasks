import { Component } from "@angular/core";
import { HeaderProva } from "./prova/header/header";
import { FooterProva } from "./prova/footer/footer";

import { DUMMY_BOOKS } from "./dummy_books";
import { DUMMY_USERS } from "./dummy_users";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderProva, FooterProva],
  templateUrl: './app.prova.html',
  styleUrl: './app.css',
})
export class ProvaComponent {

  users = DUMMY_USERS;
  books = DUMMY_BOOKS;

  selectedUserId: string | null = null;

  selectUser(id:string){
    this.selectedUserId = id;
  }

  get selectedBooks(){
    return this.books.filter(
      book  => book.userId === this.selectedUserId
    )
  }

}