import { HttpClientXsrfModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export default class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;
  
  //constructor(private http: HttpClient) {} 2

  
  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    //this.http.get('https://localhost:5001/api/users').subscribe({}); 3
    /*
    { next }

    */
    
  }
}
