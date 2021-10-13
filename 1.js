
function Search(){
    item_search = document.getElementById("search_bar").value; 
    localStorage.setItem("item_search", item_search); 
    if (item_search == "face"){
        window.location = "face_page.html"
    }
    if (item_search == "food"){
        window.location = "food_page.html"
    }
    if (item_search == "hair"){
        window.location = "hair_page.html"
    }
}
function AddProduct(){ 
    Score = 10; 
    Product_Name = document.getElementById("Product_Name").value; 
    Customer_Rating = document.getElementById("Customer_Rating").value;
    Product_Description = document.getElementById("Product_Description").value;
    Ingredient1 = document.getElementById("Ingredient1").value;
    Ingredient2 = document.getElementById("Ingredient2").value;
    Ingredient3 = document.getElementById("Ingredient3").value;
    Ingredient4 = document.getElementById("Ingredient4").value;
    Ingredient5 = document.getElementById("Ingredient5").value;
    Ingredient6 = document.getElementById("Ingredient6").value; 
    Customer_Review = document.getElementById("Customer_Review").value;
    Similar_Products = document.getElementById("Similar_Products").value; 
    if (Ingredient1 == "Yes"){
        Score = Score -2; 
    }
    if (Ingredient2 == "Yes"){
        Score = Score -2; 
    }
    if (Ingredient3 == "Yes"){
        Score = Score -2; 
    }
    if (Ingredient4 == "Yes"){
       Score = Score -1.5; 
    }
    if (Ingredient5 == "Yes"){
        Score = Score -1.5; 
    }
    if (Ingredient6 == "Yes"){
        Score = Score -1; 
    }
    console.log(Score); 
    localStorage.setItem("Score", Score);
    document.getElementById("Score").innerHTML = "Sustainability Rating: " + Score; 
}