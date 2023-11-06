import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Coffee } from './coffee';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getCoffees(): Observable<Coffee[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((coffees) =>
        coffees.map(
          (coffee) =>
            ({
              id: coffee.id,
              name: coffee.nombre,
              type: coffee.tipo,
              region: coffee.region,
              flavor: coffee.sabor,
              height: coffee.altura,
              image: coffee.imagen,
            } as Coffee)
        )
      )
    );
  }
}
