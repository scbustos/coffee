import { Component, OnInit } from '@angular/core';
import { Coffee } from './coffee';
import { CoffeeService } from './coffee.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css'],
})
export class CoffeeComponent implements OnInit {
  coffees: Coffee[] = [];
  countOrigen: number = 0;
  countBlend: number = 0;

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit() {
    this.getCoffees();
  }

  getCoffees() {
    this.coffeeService.getCoffees().subscribe((coffees) => {
      this.coffees = coffees;
      this.countOrigen = coffees.filter(
        (coffee) => coffee.type === 'Café de Origen'
      ).length;
      this.countBlend = coffees.filter(
        (coffee) => coffee.type === 'Blend'
      ).length;
    });
  }
}
