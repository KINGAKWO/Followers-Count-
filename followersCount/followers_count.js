//count variable initialized to 0
let count = 0;

//function to increase count of followers 
function increaseCount() {
    count++; //increments the count by 1
}

//function to display the count
function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
} 


function increaseCount() {
  count++; // Increment the count by 1
  displayCount(); // Display the count
}

function checkValue() {
    if (count === 10){
        alert("Your instagram post gained 10 followers! congratulations!");

    } else if (count == 20) {
        alert("Your instagram post gained 20 followers! keep it up")   
     }
}
function increaseCount(){
    count++;
    displayCount();
    checkValue();//check count value and display messages
}