//1. Create a program that checks a user’s purchase amount and applies discounts
// based on the following criteria:
// * If the total is less than one thousand, display “No discount.”
// * If the total is between one thousand and two thousand, display “Ten percent
// discount.”
// * If the total is between two thousand and five thousand, display “Twenty
// percent discount.”
// * If the total is above five thousand, display “Thirty percent discount and
// free delivery.”
// The program should prompt the user for the purchase amount and print a final
// bill summary, including the discount applied (if any).


let amount=prompt("enter the amount");
console.log("your total billing amount="+amount);
let discount=0;

if(amount<=1000){
    console.log("No discount");
    
}
 else if (amount>=1000 && amount<=2000)
    {
    console.log("after ten percent discount");
    discount=0.10*amount;
   
}
else if (amount>=2000 && amount<=5000){
    console.log("after Twenty percent discount");
    discount=0.20*amount;

}
else if (amount>5000) {
    console.log("thirty percent discount and free delivary");
    discount=0.30*amount;
}

let final = amount - discount;
console.log("final price of your bill ="+final);



// TASK-2//
// Build a program to calculate cinema ticket prices based on age:
// * Children below twelve years get half price.
// * Adults between twelve and sixty years get full price.
// * Senior citizens above sixty get twenty percent off.
// The program should ask for the user's age and display the actual ticket price
// after applying the appropriate discount.


let age=prompt("enter your age");
console.log("your age :"+age);
let price=250;
console.log("the real ticket price is :"+price);
dis=0;


if(age<12){
    console.log("ticket price");
    discount=0.50*price;
}
else if (age>=20 && age<=60){
    console.log("ticket price ");
    discount=0*price;
}
else if (age>60){
    console.log("ticket price");
    discount=0.20*price;
}

let ticket=price-discount;
console.log("you ticket price :"+ticket);


// 3. Student Grade Calculator
// Develop a program that calculates a student's grade based on their marks out of
// one hundred:
// * If the marks are above ninety, print “Excellent – Grade A.”
// * If the marks are between seventy-five and ninety, print “Good – Grade B.”
// * If the marks are between fifty and seventy-five, print “Average – Grade C.”
// * If the marks are below fifty, print “Failed – Needs Improvement.”
// The program should also print a motivational message along with the grade.

let marks=prompt("enter you marks");
console.log("marks you got"+marks);
totalmarks=100;
console.log("total marks :"+totalmarks);
if (marks>90){
    console.log("Exellent-Grade A");
    console.log("exellect keep going");
}
else if (marks>=75 && marks<=90){
    console.log("good -grade B");
    console.log("good try more");
}
else if(marks>=50 && marks<75){
    console.log("Avarage-Grade C");
    console.log("need more efforts");
}
else if (marks<50 && marks>0){
    console.log("failed-Need Improvement");
}
else {
    console.log("invalid marks");
    console.log("enter valid marks");
}

// 4. Create a program that provides weather condition alerts based on temperature:
// * If the temperature is below ten, display “It’s freezing cold, wear a
// jacket.”
// * If the temperature is between ten and twenty-five, display “Cool weather,
// perfect for outdoor activities.”
// * If the temperature is between twenty-five and thirty-five, display “Warm
// day, stay hydrated.”
// * If the temperature is above thirty-five, display “It’s too hot, avoid going
// out in the afternoon.”

let temp=prompt("enter temperature");
console.log("current temperature :"+temp );

if (temp<10){
    console.log("It’s freezing cold, wear a jacket.");
}
else if (temp>=10 && temp<25){
    console.log("Cool weather,perfect for outdoor activities.");
}
else if (temp>=25 && temp<35){
    console.log("Warmday, stay hydrated.");
}
else if (temp>=35){
    console.log("It’s too hot, avoid going out in the afternoon.");

}

// 5. Bank Loan Eligibility Checker
// Design a program to check a user's eligibility for a bank loan based on their
// monthly income and age:
// * If the income is below twenty thousand, the user is not eligible.
// * If the income is between twenty thousand and fifty thousand, the user is
// eligible for a personal loan.
// * If the income is above fifty thousand, the user is eligible for both
// personal and home loans.
// The program should print an eligibility message accordingly


let ages=prompt("enter your age");
console.log("your age :"+ages);
let income=prompt("enter your monthly income");
console.log("your monthly income :"+income);
if (ages>=18){
    if(income<20000){
        console.log("not eligible for loan");
    }
    else if(income>=20000 && income<50000){
        console.log("your are eligible for persnol loan");

    }
else if(income>=50000){
    console.log("your are eligible for both personal and home loans");
}
}
else{
    console.log("you are too young for loans not eligible");
}

// *6. If the user’s order value is less than two hundred, display “Delivery not
// available.”
// * If the order value is between two hundred and five hundred, charge fifty as
// delivery fee.
// * If the order value is between five hundred and one thousand, charge twentyfive.
// * If the order value is above one thousand, offer free delivery.
// Additionally, if the user is a premium member, delivery should always be free.
// This task requires nested `if-else` statements within the main conditions.

let order=parseInt(prompt("enter the order value"));
console.log("order value :"+order);
let premium=prompt("are you premium member yes/no");
if (order<200){
   if(premium=="yes"){
     console.log("free for premium members");}
     else{
        console.log("delivary not available");
     }
}
else if(order>=200 && order<500){
    if(premium=="yes"){
     console.log("free for premium members");}
     else{
        console.log("delivary fee $50");
     }
}
else if(order>=500 && order<1000){

    if(premium=="yes"){
     console.log("free for premium members");}
     else{
        console.log("delivary fee $25");
     }
}
else if (order>1000){
    console.log("free delivary");
}
else{
    console.log("order invalid");
}




// 7. Hospital Appointment Scheduler
// Develop a program to schedule hospital appointments based on patient age and
// health issue type:
// * If the issue is “Emergency,” always print “Send to Emergency Room
// immediately.”
// * Else if the age is below ten, route to “Pediatric Section.”
// * Else if the age is between ten and sixty, route to “General Section.”
// * Else route to “Senior Citizen Section.”
// Students should combine both condition checks logically.

let age=parseInt(prompt("enter your age"));
console.log("your age "+age);
let issue =prompt(" is it emergency : yes/no");
if(issue=="yes"){
    console.log("Send to Emergency Room immediately.");
}
else if(age<10){
    if(issue=="yes"){
        console.log("Send to Emergency Room immediately.");
    }
    else{
        console.log("route to pediatic section");
    }
}
else if(age>=10 && age<60){
    if(issue=="yes"){
        console.log("Send to Emergency Room immediately.");
    }
    else{
        console.log("route to Genearl section");
    }

}
else{
    console.log("route to senior citizen section");
}

// 8. Electricity Bill Estimator
// Create a program to estimate electricity bills based on total units consumed:
// * If the units consumed are below one hundred, display “Minimum charge only.”
// * If the units consumed are between one hundred and three hundred, apply a
// rate for normal consumption.
// * If the units consumed are between three hundred and five hundred, apply a
// higher rate and display energy-saving tips.
// * If the units consumed are above five hundred, display “c” and add a penalty.
// Students must calculate the total payable amount and print it with appropriate
// messages.


let units=parseInt(prompt("Enter total units consumed :"));
console.log("units consumed :"+units);

let rate=0;
let penality=0;
let total=0;

if(units<100){
    total=100;
    console.log("minium charges are applicable ");
}
else if(units>=100 && units<300){
    rate=5;
    total=units*rate;
    console.log("normal conusmption");
}
else if(units>=300 && units<500){
    rate=8;
    total=units*rate;
    console.log("high rate conusmption , tips :use LED lights and switch off unwanted electic devices");
}

else if(units>500){
    rate=10;
    penality=500
    total=units*rate+penality;
    console.log("Alert :high conusmption, penality will applicable");
}

else{
    console.log("invalid units")
}

console.log("rate per unit"+rate);
console.log("penality "+penality);
console.log("total payable amount :" +total);


// 9. Mobile Data Plan Advisor
// Design a program to advise users on the best mobile data plan based on their
// monthly data usage in GB:
// * If the usage is less than five, suggest “Basic Plan.”
// * If the usage is between five and twenty, suggest “Standard Plan.”
// * If the usage is between twenty and fifty, suggest “Premium Plan.”
// * If the usage is above fifty, suggest “Unlimited Plan.”
// If the user's plan choice does not match their usage, show an alert message
// suggesting a better plan.

let usage=parseInt(prompt(" enter your mothly data usage in GB "));
console.log("your data usage "+usage+"GB");
if(usage<5 && usage>=0){
    console.log("suggested basic plan");
}
else if (usage>=5 && usage<20){
    console.log("suggested standard plan");
}
else if (usage>=20 && usage<50){
    console.log("suggested permium plan");
}
else if (usage>=50){
    console.log("suggested unlimited plan");
}
else{
    console.log("invalid usage of data");
}


// 10. Online Exam Result Evaluator
// Develop a program to evaluate the results of an online exam with three subjects:
// * If all subjects have marks above thirty-five, print “Passed.”
// * If one subject is below thirty-five, print “Supplementary.”
// * If more than one subject is below thirty-five, print “Failed.”
// Show the average marks and an overall performance remark based on the result.


let sub1=parseInt(prompt("enter you marks in HTML"));
console.log("html marks :"+sub1);
let sub2=parseInt(prompt("enter your marks in js"));
console.log("js marks :"+sub2);
let sub3=parseInt(prompt("enter your marks in css"));
console.log("cs marks :"+sub3);

let fail=0;
 if (sub1<35)fail++;
 if(sub2<35)fail++;
if(sub3<35)fail++;

avg=(sub1+sub2+sub3)/3;

console.log("average marks :"+avg +"%");

if(fail==0){
    console.log("passed");
}
else if (fail==1){
    console.log("supplementary");
}
else{
    console.log("failed");
}

if(avg>=90){
    console.log("excellent");
}
else if(avg<90 && avg<=65){
    console.log("good");

}
else if (avg<65 && avg>=50){
console.log("need to improve");
}
else if (avg<50 && avg>=35){
console.log("work hard");
}
else {
    console.log("invalid");
}


// 11. Cab Fare Estimator
// Students must calculate cab fare based on multiple conditions:
// * If the distance is less than five kilometers, charge a minimum fare.
// * If the distance is between five and fifteen kilometers, apply a mid-tier
// fare.
// * If the distance is above fifteen, apply a long-distance fare.
// Additionally, if the ride time is during night hours (e.g., after ten PM or
// before five AM), add a twenty percent night charge. If the user has a promo
// code, apply an extra discount.


let distance=parseInt(prompt("enter distance :"));
console.log("distance :"+distance);
let time = parseInt(prompt("enter time in 24hrs formate"));
console.log("time :"+time);
let promo =prompt("enter your promo  yes/no");
console.log("your promo code :"+promo);

let fare=0;

if(distance<5){
    console.log("minimum fare");
    fare=100;
}
else if (distance>=5 && distance<15){
    console.log("mid-tier fare")
    fare=distance*10;
}
else if(distance>=15){
    console.log("long distance fare");
    fare=distance*15;
}
else{
    fare=distance*20;
}

if(time>22 || time<5){
    console.log("night ride");
    fare=fare+(fare*0.20);
}

if(promo=="yes"){
    console.log("promo is applied");
    fare=fare-(fare*0.30);
}

console.log("total fare"+fare);


// 12. Smart Shopping Cart Price Adjuster
// Ask for the total cart amount, membership type (silver, gold, platinum), and
// coupon availability:
// * Silver members get five percent off.
// * Gold members get ten percent off.
// * Platinum members get fifteen percent off.
// If a coupon is also applied, stack an extra five percent off. Students must
// print the final payable amount after combining all conditions logically.

let cart=parseInt(prompt("enter total cart value"));
console.log("your cart value :"+cart);
let member=prompt(" membership type silver/ gold/ platinum");
console.log("mebership type :"+member);
let coupon=prompt("do you have coupon yes/no");
console.log("coupon applied :"+coupon);

let discount=0;

if(member=="sliver"){
    discount=5;
}
else if (member=="gold"){
    discount=10;

}
else if(member=="platinum"){
discount=15;
}
else {
    console.log("invalid type");
}

if(coupon=="yes"){
    discount+=5;
}

finalamount= cart-(cart*discount/100);

console.log("discount applied :"+discount);
console.log("final amount :"+finalamount);

// 13. Hotel Room Booking System
// Input room type, number of nights, and customer rating:
// * If the room is “Standard,” the base cost is one thousand per night.
// * If the room is “Deluxe,” the cost is two thousand.
// * If the room is “Suite,” the cost is three thousand.
// Add a ten percent service charge if the rating is below four. Add a discount of
// five percent for stays longer than five nights. Students must calculate and
// print the total payable amount with messages.


let room=prompt("what is your room type standard/deluxe/suite");
console.log("your room type :"+room);
let ngt=parseInt(prompt(" no. of nights want to stay"));
console.log("number of nights :"+ngt);
let rating=parseInt(prompt("customer raking from 1-5"));
console.log("your rating :"+rating);


let ngtstay=0;

if(room=="standard"){
    ngtstay=1000;
}
else if (room=="deluxe"){
    ngtstay=2000;
}
else if (room=="suite"){
    ngtstay=3000;
}
else{
    console.log("invalid")
}
let total=ngtstay*ngt;

if (rating<4){
    total +=total*0.10;
}
if (ngt>5){
    total -=total*0.05;

}
console.log("total amount :"+total);


// 14. Employee Performance Bonus Calculator
// Inputs are employee rating, experience in years, and department:
// * If the rating is excellent and experience is above five years, give a
// twenty percent bonus.
// * If the rating is good and experience is above three years, give a ten
// percent bonus.
// * If the rating is average, give a five percent bonus.
// Additionally, if the department is “Sales,” add a two percent incentive. Print
// the bonus percentage and remarks like “Outstanding,” “Good,” or “Needs
// Improvement.”

let rating=prompt("what is you rating excellent/good/average");
console.log("your rating :"+rating);
let exp=parseInt(prompt("enter you experience in years"));
console.log("your experience :"+exp);
let depart=prompt("enter your deparment");
console.log("your department :"+depart);

let bonous=0;
remarks="";

if(rating=="excellent" && exp>5){
    bonous=20;
    remarks="outstanding";
}
else if (rating=="good" &&  exp>3){
    bonous=10;
    remarks="good and continue";
}
else if(rating=="average"){
    bonous=5;
    remarks="needs";
}
else{
    console.log("bonous is not applicable");
}
let incentives=0

if (depart=="sales"){
bonous+=2;
}

console.log("bonous percentage :"+bonous +"%"); 
console.log("your remarks :"+remarks);


// 15. Smart Traffic Fine System
// Input vehicle type, speed, and road type:
// * If the speed exceeds the limit on a highway, show “Fine of one thousand.”
// * If in a city area, the fine is doubled.
// * If the vehicle is a heavy type such as a truck or bus, increase the fine by
// fifty percent.
// If none of the conditions match, show “Safe Driving – No Fine.” Students must
// combine multiple layered `if-else if` conditions to calculate the total fine
// dynamically.


let type= prompt("enter vehicle type car/bike/truck/bus");
console.log("your vechile :"+type);
let road=prompt("enter you road where highway/city");
console.log("road type :"+road);
let speed=parseInt(prompt("what is speed in KM/hr"));
console.log("your speed :"+speed);

let fine=0;

if(road=="highway" && speed>100){
    fine=1000;
}
else if (road=="city" && speed>70){
      fine=2000;

}
else{
    console.log("Safe Driving – No Fine.");

}
if(type=="truck" || type=="bus" && fine>0){
fine+=fine*0.50;
}

console.log("your vechicle fine :" +fine);