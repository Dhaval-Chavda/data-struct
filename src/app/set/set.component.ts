import { Component, OnInit } from '@angular/core';
import {Set, Map} from 'immutable';
import { lastValueFrom } from 'rxjs';




  @Component({
    selector: 'app-set',
    templateUrl: './set.component.html',
    styleUrls: ['./set.component.scss']
  })
  export class SetComponent implements OnInit {

    constructor() { }


    /*-------- Add method --------*/
    // setmethod1() {
    // let set1 = new Set();
    // let set2: any = new Set();
    // set1.add(1);
    // set1.add(2);
    // set1.add(1);
    // set1.add({a:1, b:2});
    // set1.add({a:1, b:2});
    // set1.add({a:1, b:2});
    // set1.add({a:4, b:5});
    // console.log((set1));
    // console.log(set1.size)

  ////////// one Raferance

    // remove duplicate from set
  duplicateRemoveFromSet() {
    
    let Obj1 = { 'car': 50 };
    let Obj2 = { 'car': 19 };
    let Obj3 = { 'car': 19 };
    let Obj4 = { 'car': 19 };
   

    let set1 = Set();

    set1 = set1.add(Map(Obj1));
    set1 = set1.add(Map(Obj2));
    set1 = set1.add(Map(Obj3));
    set1 = set1.add(Map(Obj4));
    

    console.log(set1.toJS());
    

  }


  

  /*-------- Has method --------*/

  // setmethod2() {
  //   let set2: any = new Set();
  //   set2.add({aa:11, bb: 22});
  //   set2.add({aa:11, bb: 22});
  //   set2.add(3);
  //   set2.add(4);
  //   set2.add(5).add(6).add(7).add(8);

  //   console.log(set2.has(11));
  // }

  // /*-------- Delete method --------*/
  // setmethod3() {
  //   let set3: any = new Set();
  //   set3.add(1);
  //   set3.add({aa:11, bb: 22}, {cc:11, dd: 22});
  //   set3.add({aa:11, bb: 22}, {cc:11, dd: 22});
  //   set3.add(3);
  //   set3.add(4);
  //   set3.add(4);
  //   set3.add(5).add(6).add(7).add(8);
  //   set3.delete(5)
  //   console.log(set3);
  // }

  // /*-------- Size method --------*/
  // setmethod4() {
  //   let set4: any = new Set();
  //   set4.add(1);
  //   set4.add([1,2,3]);
  //   set4.add({aa:11, bb: 22});
  //   set4.add(3);
  //   set4.add(4);
  //   set4.add(4);
  //   set4.add(5).add(6).add(7).add(8);
  //   console.log(set4.size);  
  // }

  // /*-------- Size method --------*/
  // setmethod5() {
  //   let set4: any = new Set();
  //   set4.add(1);
  //   set4.add([1,2,3]);
  //   set4.add({aa:11, bb: 22});
  //   set4.add(3);
  //   set4.add(4);
  //   set4.add(4);
  //   set4.add(5).add(6).add(7).add(8);
  //   set4.clear();
  //   console.log(set4)
  // }


  
  ngOnInit(): void {
    this.duplicateRemoveFromSet();
    // this.setmethod2();
    // this.setmethod3();
    // this.setmethod4();
    // this.setmethod5();
  }

  };


  
 



