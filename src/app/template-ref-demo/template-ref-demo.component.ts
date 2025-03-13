import { Component, OnInit, TemplateRef, ViewChild, ChangeDetectorRef } from '@angular/core';

interface User {
  id: number;
  name: string;
  role: string;
}

@Component({
  selector: 'app-template-ref-demo',
  templateUrl: './template-ref-demo.component.html',
  styleUrls: ['./template-ref-demo.component.scss']
})
export class TemplateRefDemoComponent implements OnInit {
  // @ViewChild('userTemplate') userTemplate: TemplateRef<any>;
  @ViewChild('adminTemplate') adminTemplate: TemplateRef<any>;

  @ViewChild('userTemplate', { read: TemplateRef }) userTemplate: TemplateRef<any>;

  users: User[] = [
    { id: 1, name: 'Alice', role: 'user' },
    { id: 2, name: 'Bob', role: 'admin' },
    { id: 3, name: 'Charlie', role: 'user' },
    { id: 4, name: 'Diana', role: 'admin' }
  ];

  selectedTemplate: TemplateRef<any> | null = null;
  selectedUser: User | null = null;
  activeView = 'list';

  // Context object that will be available in the template
  createContext(user: User) {
    return {
      $implicit: user,
      controller: this
    };
  }

  constructor(
    private ref:ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  showUserDetails(user: User): void {
    this.selectedUser = user;
    this.selectedTemplate = user.role === 'admin' ? this.adminTemplate : this.userTemplate;
    this.activeView = 'details';
  }

  goBackToList(): void {
    this.activeView = 'list';
    this.selectedUser = null;
  }
}
