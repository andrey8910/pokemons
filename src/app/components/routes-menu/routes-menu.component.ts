import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-routes-menu',
  templateUrl: './routes-menu.component.html',
  styleUrls: ['./routes-menu.component.scss']
})
export class RoutesMenuComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  isDarkTheme = false;

  toggleTheme(){
    this.isDarkTheme = !this.isDarkTheme;
  }

  public burgerActive: boolean = false;
  
  clickBurgerActive(){
    if(this.burgerActive){
      this.renderer.removeClass(document.body, 'no-scroll')
      return  this.burgerActive = false;
    } else {
      this.renderer.addClass(document.body, 'no-scroll');
      return this.burgerActive = true;
    }
  }

}
