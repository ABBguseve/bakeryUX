const fs = require('fs')

console.log("Generating...")

function gen() {
    var faker = require("faker")
    var _ = require("lodash")
    return {
        staff: _.times(5, function (n) {
            return {
                id: n,
                name: faker.name.findName(),
                email: faker.internet.email(),
                phone: faker.phone.phoneNumber(),
                role: "baker",
                dateOfBirth: faker.date.past(),
                avatar: faker.internet.avatar()
            }
        }),
        customers: _.times(20, function (n) {
            return {
                id: n,
                isAuth: false,
                name: faker.name.findName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                timestamp: faker.date.recent(),
                avatar: faker.internet.avatar()
            }
        }),
        orders: _.times(20, function (n) {
            return {
                id: n,
                customerId: _.random(1, 20),
                cakes: _.times(_.random(1, 5), function (n) {
                    return {
                        cakeId: _.random(1, 16),
                        quantity: _.random(1, 5)
                    }
                }),
                totalPrice: _.random(10, 50),
                timestamp: faker.date.recent(),
            }

        })
    }
}

let data = gen()

// console.log(data)

const dataString = JSON.stringify(data);

// console.log(typeof(dataString))

fs.writeFileSync('db.json', dataString, (err) => {
    if(err){
        throw err;
    }

    console.log("Done generating")
})