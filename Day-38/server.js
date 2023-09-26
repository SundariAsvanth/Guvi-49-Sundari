const bodyParser = require("body-parser");
const express = require("express");

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

let rooms = [
    {id:1,availableSeats:100,pricePerHr:3000},
    {id:2,availableSeats:150,pricePerHr:4000},
    {id:3,availableSeats:300,pricePerHr:7000},
];

app.post("/rooms",(req,res) =>{
    const newRoom = req.body;
    if(!newRoom.id || !newRoom.availableSeats || !newRoom.pricePerHr){
        return res.status(500).send("Room must have an id , available seats & price per hour");
    }
    rooms.push(newRoom);
    res.status(201).send(`Room added with ID : ${newRoom.id}!!`);
});

let bookRoom = [
    {customerId:1,customerName:"Varun",date:"11.11.2023",roomId:2},
    {customerId:2,customerName:"Divya",date:"28.10.2023",roomId:2},
    {customerId:3,customerName:"Krishna",date:"16.11.2023",roomId:1},
];

app.post("/bookingRooms",(req,res)=>{
    const newCustomer = req.body;
    if(!newCustomer.customerId || !newCustomer.customerName || !newCustomer.date || !newCustomer.roomId){
        return res.status(500).send("Booking details must have customerId, customerName, date & roomId");
    }
    bookRoom.push(newCustomer);
    res.status(201).send(`Room was Booked and its details added with customerID : ${newCustomer.customerId}!!`);
});

app.get("/viewRooms",(req,res) => {
    res.json(rooms);
});

app.get("/viewBookingDetails",(req,res) => {
    res.json(bookRoom);
});

app.listen(PORT, () => {
    console.log("Server is running on port : ",PORT);
});
