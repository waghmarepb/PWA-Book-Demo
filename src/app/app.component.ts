import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BooksService } from './books/books.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularBooksPWA';
  searchForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router) {
  }

  public ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: ['', Validators.required],
    });
  }

  onSearch() {
    if (!this.searchForm.valid) { return; }
    this.router.navigate(['search'], { queryParams: { query: this.searchForm.get('search').value } });
  }
}
