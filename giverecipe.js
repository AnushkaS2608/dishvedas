document.getElementById("recipeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form values
    var recipeName = document.getElementById("recipeName").value;
    var ingredients = document.getElementById("ingredients").value;
    var instructions = document.getElementById("instructions").value;
    
    // Display submitted recipe
    var recipeDisplay = "Recipe Name: " + recipeName + "\n\n" +
                        "Ingredients: " + ingredients + "\n\n" +
                        "Instructions: " + instructions;
    alert(recipeDisplay);
    
    // Clear form inputs
    document.getElementById("recipeName").value = "";
    document.getElementById("ingredients").value = "";
    document.getElementById("instructions").value = "";
  });
  