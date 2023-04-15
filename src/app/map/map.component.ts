import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{


/*----- set method -----*/
mapMethod1(){
  let map1 = new Map();
  map1.set(1, 'Dhaval');
  map1.set(2, 'Haresh');
  map1.set('Dhaval', 2 );
  map1.set(2, 2 );
  map1.set('Dhaval', 'Dhaval');
  map1.set(1, 'haresh');
  console.log(map1);
}

/*----- get method -----*/
mapMethod2(){
  let map2 = new Map();
  map2.set(1, 'abhishek');
  map2.set(2, 'abhishek');
  map2.set('abhishek', 2 );
  map2.set(2, 2 );
  map2.set('abhishek', 'abhishek');
  console.log(map2.get(2));
}

/*----- has method -----*/
mapMethod3(){
  let map3 = new Map(); 
  map3.set(1, 'abhishek');
  map3.set(2,'abhishek');
  map3.set('abhishek', 2 );
  map3.set(2, 2 );
  map3.set('abhishek', 'abhishek');
  map3.has(2);
  console.log(map3.has(1));
}

/*----- delete method -----*/
mapMethod4(){
  let map4 = new Map();
  map4.set(1, 'abhishek');
  map4.set(2, 'abhishek');
  map4.set('abhishek', 2 );
  map4.set(2, 2 );
  map4.set('abhishek', 'abhishek');
  map4.delete(3)
  console.log(map4.delete(3));
  console.log(map4);
}

/*----- size method -----*/
mapMethod5(){
  let map5 = new Map();
  map5.set(1, 'abhishek');
  map5.set(2, 'abhishek');
  map5.set('abhishek', 2 );
  map5.set(2, 2 );
  map5.set('abhishek', 'abhishek');
  console.log(map5);
  console.log(map5.size);
}

 /*----- clear method -----*/
 mapMethod6(){
  let map6 = new Map();
  map6.set(1, 'abhishek');
  map6.set(2, 'abhishek');
  map6.set('abhishek', 2 );
  map6.set(2, 2 );
  map6.set('abhishek', 'abhishek');
  console.log(map6.clear());
}



ngOnInit(): void {
    // this.mapMethod1();
    // this.mapMethod2();
    this.mapMethod3();
    // this.mapMethod4();
    // this.mapMethod5();
    // this.mapMethod6();
}


 

}
