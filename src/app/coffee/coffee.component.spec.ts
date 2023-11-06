import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoffeeComponent } from './coffee.component';
import { CoffeeService } from './coffee.service';

describe('CoffeeComponent', () => {
  let component: CoffeeComponent;
  let fixture: ComponentFixture<CoffeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CoffeeComponent],
      providers: [CoffeeService],
    });
    fixture = TestBed.createComponent(CoffeeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a table with three rows plus the header', () => {
    const coffeeData = [
      {
        id: '1',
        name: 'Coffee 1',
        type: 'Blend',
        region: 'Region 1',
        flavor: 'Flavor 1',
        height: 100,
        image: 'coffee1.jpg',
      },
      {
        id: '2',
        name: 'Coffee 2',
        type: 'Origen',
        region: 'Region 2',
        flavor: 'Flavor 2',
        height: 120,
        image: 'coffee2.jpg',
      },
      {
        id: '3',
        name: 'Coffee 3',
        type: 'Blend',
        region: 'Region 3',
        flavor: 'Flavor 3',
        height: 110,
        image: 'coffee3.jpg',
      },
    ];

    component.coffees = coffeeData;
    fixture.detectChanges();

    const table = fixture.nativeElement.querySelector('table');
    const headerRow = table.querySelector('thead tr');
    const rows = table.querySelectorAll('tbody tr');

    expect(table).toBeTruthy();
    expect(headerRow).toBeTruthy();
    expect(rows.length).toBe(3);
  });
});
