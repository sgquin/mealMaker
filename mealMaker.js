const menu = {
    _courses:{
        appetizers:[],
        mains: [],
        desserts: [],
    },
    get appetizers(){
      return this._courses.appetizers
    },
    get appetizers(){
      return this._courses.mains
    },
    get appetizers(){
      return this._courses.desserts
    },
    set appetizers(app){
      this._courses.appetizers = app;
    },
    set mains(main){
      this._courses.mains = main;
    },
    set desserts(dess){
      this._courses.desserts = dess;
    },
    get courses(){
      return{
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      } 
    },
    addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
        name: dishName,
        price: dishPrice,
      }
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      const ind = Math.floor(Math.random()*dishes.length);
      return dishes[ind];
    },
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, and the total price is ${totalPrice}`
    }
};

menu.addDishToCourse('appetizers', 'salad', 4)
menu.addDishToCourse('appetizers', 'wings', 5)
menu.addDishToCourse('appetizers', 'bread', 7)

menu.addDishToCourse('mains', 'spaghetti', 18)
menu.addDishToCourse('mains', 'steak', 25)
menu.addDishToCourse('mains', 'salmon', 28)

menu.addDishToCourse('appetizers', 'ice cream', 3)
menu.addDishToCourse('appetizers', 'tiramisu', 5)
menu.addDishToCourse('appetizers', 'tres leches', 5)

menu.generateRandomMeal();
