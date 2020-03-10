/* /* 1- Create a JavaScript Class for converter ( name : CryptonatorAPI ) */
class CryptonatorAPI {
    /* 2 - Create a constructor for Classs */
    constructor(){
        /* 3- Add you API URL inside the constructor
        apiURL = "https://api.cryptonator.com/api/ticker";
*/
        this.apiURL = "https://api.cryptonator.com/api/ticker";

        // 1st Way:
/*        4- Inside the constructor ( or outside as a second way ), Select the class names and IDs for your fields, form, Input  */
      this.entryField = document.querySelector(".entryField");
        this.outputField = document.querySelector(".outputField");
        this.form = document.querySelector("#conversion-form");
        this.input = document.querySelector("#cryptoInput");
        this.output = document.querySelector("#cryptoOutput"); 
 
       
        
        /* 5- Inside the constructor ( or outside as a second way ), call class method ( name : registerEvents() ) */

         this.registerEvents();
    } // Constructor part finished here!

    // To add properties inside the object

  

    /* 6- Create a method ( name : registerEvents() ) (inside the class and outside the constructor) */
    registerEvents(){

        /* 7- Inside the method, add "submit" event for "form" with a paramater "e" */
            this.form.addEventListener("submit", e => {

            /* 8- Write ( e.preventDefault(); ) inside the submit event at first. We use preventDefault because we want to prevent the refreshing the form. It will just convert it without refreshing by this method. */
            e.preventDefault(); 
                
            /* 9- Write fetch() method. 
            Inside the fetch(``) : you will define full api url link as a string 
            like (`${apiURL}/${entryField.value}-${outputField.value}`) add missing parts in this link! */

            fetch(`${this.apiURL}/${this.entryField.value}-${this.outputField.value}`)

            /* 10 - use .then() method to parse api */
                .then( data => data.json()) // parse api

            
            /* 11 - use .then() method again, inside the .then, your "response" will return the calculation
                like ( output.value = (ticker.price * input.value) ) add missing parts!
                Bonus: make it with 2 digits only
            */
                .then(response => ( this.output.value = (response.ticker.price * this.input.value).toFixed(2)));

            })

    }

}

/* 12 - You first need to declare your class with "new" keyword. Then, access it with variable */
let cryptoRate =  new CryptonatorAPI(); 