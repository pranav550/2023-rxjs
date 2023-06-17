import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  promiseVal: any;

  dell = {
    brand: "Dell",
    hardisk: "2tb",
    color: "black"
  }

  hp = {
    brand: "Hp",
    hardisk: "2tb",
    color: "Silver"
  }

  noAvail = {
    brand: "na",
    hardisk: "na",
    color: "na"
  }

  ngOnInit(): void {
    let buyLaptop = new Promise((resolve, reject) => {
      if (this.DellAvailable()) {
        return setTimeout(() => {
          // resolve("Dell Is Purchased")
          resolve(this.dell)
        }, 3000)
      } else if (this.HpAvailable()) {
        return setTimeout(() => {
          // resolve("HP Is Purchased")
          resolve(this.hp)
        }, 3000)
      } else {
        return setTimeout(() => {
          // reject("Laptop is not available for store")
          resolve(this.noAvail)
        })
      }

    })

    buyLaptop.then(res => {
      console.log("resolve", res)
      this.promiseVal = res;
    }).catch(res => {
      console.log("reject", res)
      this.promiseVal = res;
    })


  }

  DellAvailable() {
    return false;
  }

  HpAvailable() {
    return false;
  }





}
