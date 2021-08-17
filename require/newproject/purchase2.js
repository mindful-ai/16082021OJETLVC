require.config({
  paths:{
    cdn4jquery: "https://code.jquery.com/jquery-3.5.0.js",
    c2: "./credit2"
  }
})


define(["c2", "cdn4jquery", "./product2"], function(credits,$,products) {

    console.log("Function : purchaseProduct");
  
    return {
        purchaseProduct: function() {
  
                var credit = credits.getCredits();
                if(credit > 0){
                  products.reserveProduct();
                  return true;
        };
        return false;
      }
    }
  });