const express = require("express");
const faker = require("faker");
const app = express();
const port = 3000;

// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`));

class User{
    constructor(){
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
class Company{
    constructor(){
        this._id = faker.datatype.uuid();
        this.name=faker.company.companyName();
        this.street=faker.address.streetAddress();
        this.stName=faker.address.streetName();
        this.city=faker.address.city();
        this.state=faker.address.state();
        this.zip=faker.address.zipCode();
        this.country=faker.address.country();
    }
}
app.get("/api/users", (req, res) => {
    res.json( new User() );
});
app.get("/api/company", (req, res) => {
    res.json( new Company() );
});

// app.get("/api/users/company", (req, res) => {
//     res.json({ users: new User(),company: new Company });
// });
app.get("/api/user/company", (req, res) => {
    res.json({user: new User(), company: new Company()} );
});