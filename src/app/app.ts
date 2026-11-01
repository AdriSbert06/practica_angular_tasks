import { Component, signal } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';

import { DUMMY_BOOKS } from './dummy_books';
import { DUMMY_USERS } from './dummy_users';

@Component({
  imports: [HeaderComponent, FooterComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class AppComponent {
  protected readonly title = signal('booknest');

  users = DUMMY_USERS;
  books = DUMMY_BOOKS;

  selectedUserId: string | null = null;

  selectUser(id:string){
    this.selectedUserId = id;
  }

  get selectedBooks (){
    return this.books.filter(
      book => book.userId === this.selectedUserId
    );
  }

}
