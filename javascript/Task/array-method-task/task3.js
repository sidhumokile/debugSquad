// Task 3: Remove the First Notification
// Objective: Remove the first element from the list using shift()
// Instructions:
// 1. Create an array named notifications = ["Welcome!", "New Offer!", "Your Order is
// Shipped!"]
// 2. Display all notifications.
// 3. Add a button named “Remove Oldest”.
// 4. When clicked, remove the first notification using shift().
// Expected Output:Click 1 → removes “Welcome!”Click 2 → removes “New Offer!”

let notifications = ["Welcome!", "New Offer!", "Your Order is Shipped!"];

console.log("notificaion :",notifications);

function remove(){
    if(notifications.length > 0){
        notifications.shift();
        console.log("after removal:",notifications);
    }
    else{
        console.log("no notifications");
    }
}
