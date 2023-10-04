"use strict";
describe("Users class", () => {
    const { expect } = chai;
    it("should be defined", () => {
        expect(Users).to.not.be.undefined;
    });
    it("should define constructor that accepts users list", () => {
        const users = new Users(data.users);
        expect(users.list).to.equal(data.users);
    });
    describe("getUsersNames method", () => {
        // ✔ - Написати метод що повератє масив імен усіх користувачів у форматі "John, Smith" ("firstName, lastName")
        it("should be defined", () => {
            const users = new Users(data.users);
            expect(users.getUsersNames).to.not.be.undefined;
        });
        it("should return list of user names", () => {
            const mockData = [
                { firstName: "Bob", lastName: "Smith" },
                { firstName: "Jack", lastName: "Chan" },
            ];
            const users = new Users(mockData);
            expect(users.getUsersNames()).to.deep.equal(["Bob, Smith", "Jack, Chan"]);
        });
        it("should work for blank data", () => {
            const users = new Users([]);
            // ✔ - Виправити getUsersNames так, що цей юніт-тест проходив
            expect(users.getUsersNames()).to.deep.equal([]);
        });
        it("should work for real data", () => {
            const users = new Users(data.users);
            // ✔ - Дописати цей юніт-тест, так щоб використовувалися data.users
            expect(users.getUsersNames()).to.deep.equal(["Terry, Medhurst", "Sheldon, Quigley", "Terrill, Hills", "Miles, Cummerata", "Mavis, Schultz", "Alison, Reichert", "Oleta, Abbott", "Ewell, Mueller", "Demetrius, Corkery", "Eleanora, Price", "Marcel, Jones", "Assunta, Rath", "Trace, Douglas", "Enoch, Lynch", "Jeanne, Halvorson", "Trycia, Fadel", "Bradford, Prohaska", "Arely, Skiles", "Gust, Purdy", "Lenna, Renner", "Doyle, Ernser", "Tressa, Weber", "Felicity, O'Reilly", "Jocelyn, Schuster", "Edwina, Ernser", "Griffin, Braun", "Piper, Schowalter", "Kody, Terry", "Macy, Greenfelder", "Maurine, Stracke"]);
        });
    });
    describe("updateUsersAge method", () => {
        // ✔ - Написати метод що виправляє вік користувачів, апдейтить дані користувачів правильним віком (age) на поточну дату, 2023 рік (використати день народження birthDate для обчислення віку)
        it("should be defined", () => {
            const users = new Users(data.users);
            expect(users.updateUsersAge).to.not.be.undefined;
        });
        it("should update users age", () => {
            const mockData = [
                {
                    firstName: "Bob",
                    lastName: "Smith",
                    age: 18,
                    birthDate: "2003-02-13",
                },
                {
                    firstName: "Jack",
                    lastName: "Chan",
                    age: 28,
                    birthDate: "1993-02-13",
                },
            ];
            const users = new Users(mockData);
            users.updateUsersAge();
            const usersAges = users.list.map((user) => user.age);
            expect(usersAges).to.deep.equal([20, 30]);
        });
        it("should work for blank data", () => {
            const users = new Users([]);
            users.updateUsersAge();
            const usersAges = users.list.map((user) => user.age);
            // ✔ - Виправити updateUsersAge так, що цей юніт-тест проходив 
            expect(usersAges).to.deep.equal([]);
        });
        it("should work for real data", () => {
            const users = new Users(data.users);
            users.updateUsersAge();
            const usersAges = users.list.map((user) => user.age);
            // ✔ - Виправити updateUsersAge так, що цей юніт-тест проходив
            // ✔ - Дописати цей юніт-тест, так щоб використовувалися data.users - замінити 1, 2, 3 на правильні дані
            expect(usersAges).to.deep.equal([23, 20, 31, 54, 55, 54, 41, 59, 52, 65, 62, 33, 56, 44, 27, 60, 48, 65, 34, 43, 40, 36, 56, 57, 23, 58, 40, 44, 47, 59]);
        });
    });
    describe("getUsersFromUkraine method", () => {
        // ✔ - Написати функцію що повератє список користувачів з України (номер телефону +380).
        it("should be defined", () => {
            const users = new Users(data.users);
            expect(users.getUsersFromUkraine).to.not.be.undefined;
        });
        it("should return list of users from Ukraine", () => {
            const mockData = [
                { firstName: "Bob", lastName: "Smith", phone: "+7 813 117 7139" },
                { firstName: "Jack", lastName: "Chan", phone: "+7 813 117 7139" },
                { firstName: "Ove", lastName: "Malyk", phone: "+3809525426549" },
                { firstName: "Myk", lastName: "Franko", phone: "+3809625426549" },
            ];
            const users = new Users(mockData);
            const usersNamesAndPhones = users
                .getUsersFromUkraine()
                .map(({ firstName, lastName, phone }) => ({
                firstName,
                lastName,
                phone,
            }));
            expect(usersNamesAndPhones.length).to.equal(2);
            expect(usersNamesAndPhones).to.deep.include({
                firstName: "Myk",
                lastName: "Franko",
                phone: "+3809625426549",
            });
            expect(usersNamesAndPhones).to.deep.include({
                firstName: "Ove",
                lastName: "Malyk",
                phone: "+3809525426549",
            });
        });
        it("should work for real data", () => {
            const users = new Users(data.users);
            const usersNamesAndPhones = users
                .getUsersFromUkraine()
                .map(({ firstName, lastName, phone }) => ({
                firstName,
                lastName,
                phone,
            }));
            expect(usersNamesAndPhones.length).to.equal(1);
            // ✔ - Виправити метод getUsersFromUkraine так, щоб цей юніт-тест проходив
            expect(usersNamesAndPhones).to.deep.include({
                firstName: "Assunta",
                lastName: "Rath",
                phone: "+380 962 542 6549",
            });
        });
    });
    describe("getStatePostalCodes method", () => {
        // ✔ - Написати функцію що на основі даних усіх користувачів повератє масив штатів і їх поштових індексів у вигляді масиву обєктів [{"name": "AK", "postalCodes": ["99503", "..."]}]. Штати не повинні повторюватися.
        it("should be defined", () => {
            const users = new Users(data.users);
            expect(users.getStatePostalCodes).to.not.be.undefined;
        });
        it("should return list of postal codes for all states", () => {
            const mockData = [
                {
                    firstName: "Joe",
                    address: {
                        postalCode: "80003",
                        state: "CO",
                    },
                },
                {
                    firstName: "Bob",
                    address: {
                        postalCode: "80004",
                        state: "CO",
                    },
                },
                {
                    firstName: "Mike",
                    address: {
                        postalCode: "10001",
                        state: "AK",
                    },
                },
            ];
            const users = new Users(mockData);
            expect(users.getStatePostalCodes()).to.deep.equal([
                { name: "CO", postalCodes: ["80003", "80004"] },
                { name: "AK", postalCodes: ["10001"] },
            ]);
        });
        it("should work for real data", () => {
            const users = new Users(data.users);
            // ✔ - Виправити метод getUsersFromUkraine так, щоб цей юніт-тест проходив
            // ✔ - Дописати цей юніт-тест, так щоб використовувалися data.users - замінити XXX на правильні дані
            expect(users.getStatePostalCodes()).to.deep.equal([
                { name: 'DC', postalCodes: ['20020', '20001', '20003'] },
                { name: 'TN', postalCodes: ['37076', '37209', '37206', '37211', '37013'] },
                { name: 'KY', postalCodes: ['40219', '40206', '40208'] },
                { name: 'AZ', postalCodes: ['85305', '85301', '85306'] },
                { name: 'CA', postalCodes: ['95945', '94591', '90810', '93908', '95631', '95060', '93645'] },
                { name: 'VT', postalCodes: ['05452', '05753', '05037', '05401'] },
                { name: 'CT', postalCodes: ['06040', '06042'] },
                { name: 'MD', postalCodes: ['21114', '21061', '20751'] },
                { name: 'CO', postalCodes: ['80004', '80003', '81504'] },
                { name: 'AR', postalCodes: ['72704', '72703'] },
                { name: 'MA', postalCodes: ['02664', '01040'] },
                { name: 'AL', postalCodes: ['36108', '36111'] },
                { name: 'AK', postalCodes: ['99502', '99503'] },
                { name: 'GA', postalCodes: ['31415'] }
            ]);
        });
    });
    describe("getAverageWomenAge method", () => {
        // ✔ - Написати функцію що повератє середній вік всіх жінок ("gender": "female")
        it("should be defined", () => {
            const users = new Users(data.users);
            expect(users.getAverageWomenAge).to.not.be.undefined;
        });
        it("should work for real data", () => {
            const users = new Users(data.users);
            // ✔ - Виправити метод getUsersFromUkraine так, щоб цей юніт-тест проходив
            // ✔ - Дописати цей юніт-тест, так щоб використовувалися data.users - замінити 12345 на правильні дані
            expect(users.getAverageWomenAge()).to.deep.equal(36.15384615384615);
        });
    });
    // ✔ - Написати юніт-тести для наступних методів
    // ✔ - getMostCommonWoomanHairColor - метод що повератє найбільш поширений колір волося серед жінок
    describe("getMostCommonWoomanHairColor method", () => {
        it("should return null for empty user list", () => {
            const users = new Users([]);
            expect(users.getMostCommonWoomanHairColor()).to.equal(null);
        });
        it("should return null if there are no women in the user list", () => {
            const users = new Users([
                { gender: "male", hairColor: "brown" },
                { gender: "male", hairColor: "blonde" },
            ]);
            expect(users.getMostCommonWoomanHairColor()).to.equal(null);
        });
        it("should return the most common hair color among women", () => {
            const users = new Users([
                { gender: "female", hairColor: "brown" },
                { gender: "female", hairColor: "blonde" },
                { gender: "female", hairColor: "brown" },
                { gender: "female", hairColor: "black" },
            ]);
            expect(users.getMostCommonWoomanHairColor()).to.equal("brown");
        });
    });
    // ✔ - getMostCommonManBlodType - метод що повератє найбільш поширениу групу крові серед чоловіків
    describe("getMostCommonManBlodType method", () => {
        it("should return null for empty user list", () => {
            const users = new Users([]);
            expect(users.getMostCommonManBlodType()).to.equal(null);
        });
        it("should return null if there are no men in the user list", () => {
            const users = new Users([
                { gender: "female", bloodType: "A+" },
                { gender: "female", bloodType: "B-" },
            ]);
            expect(users.getMostCommonManBlodType()).to.equal(null);
        });
        it("should return the most common blood type among men", () => {
            const users = new Users([
                { gender: "male", bloodType: "A+" },
                { gender: "male", bloodType: "O+" },
                { gender: "male", bloodType: "A+" },
                { gender: "male", bloodType: "AB-" },
            ]);
            expect(users.getMostCommonManBlodType()).to.equal("A+");
        });
    });
});
