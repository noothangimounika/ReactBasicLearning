class Car {
    constructor(name) {
      this.brand = name;
    }
  }

  hello = function() {
    return( 
      "hello World!");
  }


  function renderApp() {
    document.getElementById("demo").innerHTML = "Welcome!";
  }
  
  function renderLogin() {
    document.getElementById("demo").innerHTML = "Please log in";
  }
  
  let authenticated = true;
  
  if (authenticated) {
    renderApp();
  } else {
    renderLogin();
  }