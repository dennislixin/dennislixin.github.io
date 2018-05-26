"use strict";

$().ready( ()=>{
    $("#party").click( e=>{
        e.preventDefault();

        const birdthday = getBirdthday();
        
        if(typeof birdthday !== "undefined"){
            showAge(birdthday);
            showBirdthdays(birdthday);
        }
    });
});

function getBirdthday() {
    const birdthday = $("#date").val();

    if (birdthday === ""){
        return undefined;
    }

    return new Date(birdthday);
}

// Your 10,000th day is Sat Sep 23 2045
// Your 20,000th day is Wed Feb 08 2073
// Your 500,000th hour is Wed May 22 2075
// Your one millionth minute is Wed Apr 01 2020
// Your ten millionth minute is Tue May 12 2037
// Your fifty millionth minute is Thu Jun 01 2113
// Your one billionth second is Fri Jan 14 2050

function showAge(birdthdate){
    $("#status").empty();
    
    const months = ["January", "February", "March", "April",
                    "May", "June", "July", "August",
                    "September", "October", "November", "December"];
    const now = new Date();
    const diff = now.getTime() - birdthdate.getTime();

    const monthName = months[birdthdate.getMonth()];
    $("#status").append("<p>Your birthday is " + monthName + " " + birdthdate.getDate() +"</p>");

    const yearOld = Math.ceil( diff / ( 1000 * 60 * 60 * 24 * 365 ) );
    $("#status").append("<p>You're  " + yearOld + " years old</p>");
    
    const dayOld = Math.ceil( diff / ( 1000 * 60 * 60 * 24 ) );
    $("#status").append("<p>You're  " + dayOld + " days old</p>");

    const minuteOld = Math.ceil( diff / ( 1000 * 60 ) );
    $("#status").append("<p>You're  " + minuteOld + " minutes old</p>");
}

function showBirdthdays(birdthdate) {
    $("#result").empty();

    const time = birdthdate.getTime();

    const tenKDay = new Date(time + 10000*24*60*60*1000);
    $("#result").append("<p>Your 10,000th day is " + tenKDay.toDateString());

    const twentyKDay = new Date(time + 20000*24*60*60*1000);
    $("#result").append("<p>Your 20,000th day is " + twentyKDay.toDateString());

    const fiveHundredKHour = new Date(time + 500000*60*60*1000);
    $("#result").append("<p>Your 500,000th hour is " + fiveHundredKHour.toDateString());

    const oneMillionMin = new Date(time + 1000000*60*1000);
    $("#result").append("<p>Your one millionth minute is " + oneMillionMin.toDateString());

    const tenMillionMin = new Date(time + 10000000*60*1000);
    $("#result").append("<p>Your ten millionth minute is " + tenMillionMin.toDateString());

    const fifthMillionMin = new Date(time + 50000000*60*1000);
    $("#result").append("<p>Your fifty millionth minute is " + fifthMillionMin.toDateString());

    const oneBillionSec = new Date(time + 1000000000*1000);
    $("#result").append("<p>Your one billionth second is " + oneBillionSec.toDateString());
}