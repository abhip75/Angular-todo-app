import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos = [{ text: 'Default Todo' }];
  newTodo = '';

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {}

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({ text: this.newTodo.trim() });
      this.newTodo = '';
      
    }
  }

  deleteTodo(todo: any) {
    this.todos = this.todos.filter(t => t !== todo);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
    this.toastr.success('Logout Successful !');
  }

  toggleMobileMenu() {
    const menu = document.querySelector('.mobile-menu');
    if (menu) {
      menu.classList.toggle('hidden');
    }
  }
}
