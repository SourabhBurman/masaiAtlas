import data from "../../submissionData.json";

// const data = [
//   {
//     submission_link: "http://localhost:8080",
//     id: "shanti-local",
//     json_server_link: `http://localhost:9090/`,
//   },
// ];

let mock = {
  states: [
    {
      id: 1,
      stateName: "Haryana",
      population: 28941133,
      GDPRanking: 25,
      image: "https://source.unsplash.com/500x300?Haryana",
      language: "Hindi",
      capital: "Chandigarh",
      region: "North India",
      tourismPlaces: ["Kurukshetra", "Panipat", "Gurugram"],
      forestCoverArea: 1586,
      famousSportsPerson: "Virender Sehwag",
    },
    {
      id: 2,
      stateName: "Himachal Pradesh",
      population: 7316708,
      GDPRanking: 22,
      image: "https://source.unsplash.com/500x300?HimachalPradesh",
      language: "Hindi",
      capital: "Shimla",
      region: "North India",
      tourismPlaces: ["Manali", "Shimla", "Dharamshala"],
      forestCoverArea: 37033,
      famousSportsPerson: "Shiva Keshavan",
    },
    {
      id: 3,
      stateName: "Jammu & Kashmir",
      population: 13606320,
      GDPRanking: 21,
      image: "https://source.unsplash.com/500x300?Jammu&Kashmir",
      language: "Urdu",
      capital: "Srinagar (summer), Jammu (winter)",
      region: "North India",
      tourismPlaces: ["Srinagar", "Gulmarg", "Leh"],
      forestCoverArea: 20243,
      famousSportsPerson: "Parvez Rasool",
    },
    {
      id: 4,
      stateName: "Goa",
      population: 154243,
      GDPRanking: 23,
      image: "https://source.unsplash.com/500x300?Goa",
      language: "Konkani",
      capital: "Panaji",
      region: "West India",
      tourismPlaces: ["Baga Beach", "Dudhsagar Waterfalls", "Old Goa"],
      forestCoverArea: 1424,
      famousSportsPerson: "Leander Paes",
    },
    {
      id: 5,
      stateName: "Tamil Nadu",
      population: 77841267,
      GDPRanking: 2,
      image: "https://source.unsplash.com/500x300?TamilNadu",
      language: "Tamil",
      capital: "Chennai",
      region: "South India",
      tourismPlaces: ["Chennai", "Madurai", "Ooty"],
      forestCoverArea: 23223,
      famousSportsPerson: "Dhanraj Pillay",
    },
    {
      id: 6,
      stateName: "West Bengal",
      population: 91276115,
      GDPRanking: 6,
      image: "https://source.unsplash.com/500x300?WestBengal",
      language: "Bengali",
      capital: "Kolkata",
      region: "East India",
      tourismPlaces: ["Darjeeling", "Sundarbans", "Kolkata"],
      forestCoverArea: 16999,
      famousSportsPerson: "Sourav Ganguly",
    },
    {
      id: 7,
      stateName: "Madhya Pradesh",
      population: 85358965,
      GDPRanking: 10,
      image: "https://source.unsplash.com/500x300?MadhyaPradesh",
      language: "Hindi",
      capital: "Bhopal",
      region: "Central India",
      tourismPlaces: ["Khajuraho", "Sanchi", "Kanha National Park"],
      forestCoverArea: 77752,
      famousSportsPerson: "Arjun Singh",
    },
    {
      id: 8,
      stateName: "Uttar Pradesh",
      population: 224979000,
      GDPRanking: 5,
      image: "https://source.unsplash.com/500x300?UttarPradesh",
      language: "Hindi",
      capital: "Lucknow",
      region: "North India",
      tourismPlaces: ["Taj Mahal", "Varanasi", "Lucknow"],
      forestCoverArea: 16348,
      famousSportsPerson: "Sania Mirza",
    },
    {
      id: 9,
      stateName: "Telangana",
      population: 35193978,
      GDPRanking: 9,
      image: "https://source.unsplash.com/500x300?Telangana",
      language: "Telugu",
      capital: "Hyderabad",
      region: "South India",
      tourismPlaces: ["Charminar", "Golconda Fort", "Hyderabad"],
      forestCoverArea: 27815,
      famousSportsPerson: "Pullela Gopichand",
    },
    {
      id: 10,
      stateName: "Kerala",
      population: 35699443,
      GDPRanking: 11,
      image: "https://source.unsplash.com/500x300?Kerala",
      language: "Malayalam",
      capital: "Thiruvananthapuram",
      region: "South India",
      tourismPlaces: ["Kochi", "Alappuzha", "Munnar"],
      forestCoverArea: 9928,
      famousSportsPerson: "P. T. Usha",
    },
    {
      id: 11,
      stateName: "Assam",
      population: 35607039,
      GDPRanking: 17,
      image: "https://source.unsplash.com/500x300?Assam",
      language: "Assamese",
      capital: "Dispur",
      region: "North East India",
      tourismPlaces: ["Kaziranga National Park", "Guwahati", "Majuli"],
      forestCoverArea: 20302,
      famousSportsPerson: "Bhupen Hazarika",
    },
    {
      id: 12,
      stateName: "Jharkhand",
      population: 38593948,
      GDPRanking: 19,
      image: "https://source.unsplash.com/500x300?Jharkhand",
      language: "Hindi",
      capital: "Ranchi",
      region: "East India",
      tourismPlaces: ["Dhanbad", "Bokaro Steel City", "Jamshedpur"],
      forestCoverArea: 25283,
      famousSportsPerson: "Mahendra Singh Dhoni",
    },
    {
      id: 13,
      stateName: "Chhattisgarh",
      population: 29969272,
      GDPRanking: 18,
      image: "https://source.unsplash.com/500x300?Chhattisgarh",
      language: "Chhattisgarhi",
      capital: "Raipur",
      region: "Central India",
      tourismPlaces: ["Bastar", "Raipur", "Jagdalpur"],
      forestCoverArea: 55693,
      famousSportsPerson: "Shekhar Naik",
    },
    {
      id: 14,
      stateName: "Arunachal Pradesh",
      population: 1382611,
      GDPRanking: 31,
      image: "https://source.unsplash.com/500x300?ArunachalPradesh",
      language: "English",
      capital: "Itanagar",
      region: "North East India",
      tourismPlaces: ["Tawang", "Ziro", "Bomdila"],
      forestCoverArea: 66487,
      famousSportsPerson: "Anshu Jamsenpa",
    },
    {
      id: 15,
      stateName: "Manipur",
      population: 3091545,
      GDPRanking: 27,
      image: "https://source.unsplash.com/500x300?Manipur",
      language: "Meiteilon",
      capital: "Imphal",
      region: "North East India",
      tourismPlaces: ["Loktak Lake", "Kangla Fort", "Imphal"],
      forestCoverArea: 17134,
      famousSportsPerson: "Mary Kom",
    },
    {
      id: 16,
      stateName: "Meghalaya",
      population: 3366710,
      GDPRanking: 26,
      image: "https://source.unsplash.com/500x300?Meghalaya",
      language: "Khasi, Garo, English",
      capital: "Shillong",
      region: "North East India",
      tourismPlaces: ["Shillong", "Cherrapunji", "Mawlynnong"],
      forestCoverArea: 17896,
      famousSportsPerson: "Eugeneson Lyngdoh",
    },
    {
      id: 17,
      stateName: "Mizoram",
      population: 1239244,
      GDPRanking: 32,
      image: "https://source.unsplash.com/500x300?Mizoram",
      language: "Mizo, English",
      capital: "Aizawl",
      region: "North East India",
      tourismPlaces: ["Aizawl", "Champhai", "Lunglei"],
      forestCoverArea: 19535,
      famousSportsPerson: "Lalremsiami",
    },
    {
      id: 18,
      stateName: "Punjab",
      population: 30141373,
      GDPRanking: 10,
      image: "https://source.unsplash.com/500x300?Punjab",
      language: "Punjabi",
      capital: "Chandigarh",
      region: "North India",
      tourismPlaces: ["Amritsar", "Golden Temple", "Jallianwala Bagh"],
      forestCoverArea: 1601,
      famousSportsPerson: "Milkha Singh",
    },
    {
      id: 19,
      stateName: "Sikkim",
      population: 689141,
      GDPRanking: 28,
      image: "https://source.unsplash.com/500x300?Sikkim",
      language: "Nepali",
      capital: "Gangtok",
      region: "North East India",
      tourismPlaces: ["Gurudongmar Lake", "Nathula Pass", "Rumtek Monastery"],
      forestCoverArea: 3464,
      famousSportsPerson: "Baichung Bhutia",
    },
    {
      id: 20,
      stateName: "Andhra Pradesh",
      population: 53903393,
      GDPRanking: 8,
      image: "https://source.unsplash.com/500x300?AndhraPradesh",
      language: "Telugu",
      capital: "Amaravati",
      region: "South India",
      tourismPlaces: ["Tirupati", "Visakhapatnam", "Vijayawada"],
      forestCoverArea: 37420,
      famousSportsPerson: "Pullela Gopichand",
    },
    {
      id: 21,
      stateName: "Bihar",
      population: 124799926,
      GDPRanking: 15,
      image: "https://source.unsplash.com/500x300?Bihar",
      language: "Hindi",
      capital: "Patna",
      region: "East India",
      tourismPlaces: ["Bodh Gaya", "Patna Sahib", "Nalanda"],
      forestCoverArea: 721,
      famousSportsPerson: "Milkha Singh",
    },
    {
      id: 22,
      stateName: "Gujarat",
      population: 63872399,
      GDPRanking: 3,
      image: "https://source.unsplash.com/500x300?Gujarat",
      language: "Gujarati",
      capital: "Gandhinagar",
      region: "West India",
      tourismPlaces: ["Ahmedabad", "Gir Forest National Park", "Rann of Kutch"],
      forestCoverArea: 11507,
      famousSportsPerson: "Dhyan Chand",
    },
    {
      id: 23,
      stateName: "Karnataka",
      population: 65798000,
      GDPRanking: 4,
      image: "https://source.unsplash.com/500x300?Karnataka",
      language: "Kannada",
      capital: "Bengaluru",
      region: "South India",
      tourismPlaces: ["Mysuru", "Hampi", "Coorg"],
      forestCoverArea: 38785,
      famousSportsPerson: "Prakash Padukone",
    },
    {
      id: 24,
      stateName: "Maharashtra",
      population: 123144223,
      GDPRanking: 1,
      image: "https://source.unsplash.com/500x300?Maharashtra",
      language: "Marathi",
      capital: "Mumbai",
      region: "West India",
      tourismPlaces: ["Mumbai", "Pune", "Ajanta Caves"],
      forestCoverArea: 50872,
      famousSportsPerson: "Sachin Tendulkar",
    },
    {
      id: 25,
      stateName: "Nagaland",
      population: 2165465,
      GDPRanking: 30,
      image: "https://source.unsplash.com/500x300?Nagaland",
      language: "English",
      capital: "Kohima",
      region: "North East India",
      tourismPlaces: ["Kohima", "Dimapur", "Dzukou Valley"],
      forestCoverArea: 16328,
      famousSportsPerson: "Neiphiu Rio",
    },
    {
      id: 26,
      stateName: "Odisha",
      population: 43671000,
      GDPRanking: 14,
      image: "https://source.unsplash.com/500x300?Odisha",
      language: "Odia",
      capital: "Bhubaneswar",
      region: "East India",
      tourismPlaces: ["Puri", "Konark Sun Temple", "Bhubaneswar"],
      forestCoverArea: 51152,
      famousSportsPerson: "Dutee Chand",
    },
    {
      id: 27,
      stateName: "Rajasthan",
      population: 77262239,
      GDPRanking: 7,
      image: "https://source.unsplash.com/500x300?Rajasthan",
      language: "Hindi",
      capital: "Jaipur",
      region: "North India",
      tourismPlaces: ["Jaipur", "Udaipur", "Jodhpur"],
      forestCoverArea: 32495,
      famousSportsPerson: "Vijay Amritraj",
    },
    {
      id: 28,
      stateName: "Ladakh",
      population: 274000,
      GDPRanking: 36,
      image: "https://source.unsplash.com/500x300?Ladakh",
      language: "Ladakhi, Urdu, Hindi, English",
      capital: "Leh",
      region: "North India",
      tourismPlaces: ["Pangong Lake", "Nubra Valley", "Thiksey Monastery"],
      forestCoverArea: 26322,
      famousSportsPerson: "Sonam Wangchuk",
    },
    {
      id: 29,
      stateName: "Puducherry",
      population: 1506478,
      GDPRanking: 29,
      image: "https://source.unsplash.com/500x300?Puducherry",
      language: "Tamil, Malayalam, Telugu, French",
      capital: "Puducherry",
      region: "South India",
      tourismPlaces: ["Paradise Beach", "Auroville", "Promenade Beach"],
      forestCoverArea: 293,
      famousSportsPerson: "R. Ashwin",
    },
    {
      id: 30,
      stateName: "Delhi (National Capital Territory of Delhi)",
      population: 16787941,
      GDPRanking: 13,
      image: "https://source.unsplash.com/500x300?Delhi",
      language: "Hindi, English",
      capital: "New Delhi",
      region: "North India",
      tourismPlaces: ["India Gate", "Qutub Minar", "Red Fort"],
      forestCoverArea: 297,
      famousSportsPerson: "Sushil Kumar",
    },
    {
      id: 31,
      stateName: "Lakshadweep",
      population: 73713,
      GDPRanking: 35,
      image: "https://source.unsplash.com/500x300?Lakshadweep",
      language: "Malayalam",
      capital: "Kavaratti",
      region: "South India",
      tourismPlaces: ["Agatti Island", "Bangaram Atoll", "Kadmat Island"],
      forestCoverArea: 2.9,
      famousSportsPerson: "Mohammed Anas Yahiya",
    },
    {
      id: 32,
      stateName: "Dadra and Nagar Haveli and Daman and Diu",
      population: 615724,
      GDPRanking: 34,
      image: "https://source.unsplash.com/500x300?Dadra",
      language: "Gujarati, Marathi, Konkani",
      capital: "Daman",
      region: "West India",
      tourismPlaces: ["Daman Fort", "Devka Beach", "Moti Daman"],
      forestCoverArea: 1222,
      famousSportsPerson: "Hansa Jivraj Mehta",
    },
    {
      id: 33,
      stateName: "Chandigarh",
      population: 1179614,
      GDPRanking: 16,
      image: "https://source.unsplash.com/500x300?Chandigarh",
      language: "Punjabi, Hindi",
      capital: "Chandigarh",
      region: "North India",
      tourismPlaces: ["Rock Garden", "Sukhna Lake", "Rose Garden"],
      forestCoverArea: 114,
      famousSportsPerson: "Jeev Milkha Singh",
    },
    {
      id: 34,
      stateName: "Uttarakhand",
      population: 11141000,
      GDPRanking: 20,
      image: "https://source.unsplash.com/500x300?Uttarakhand",
      language: "Hindi",
      capital: "Dehradun",
      region: "North India",
      tourismPlaces: ["Nainital", "Mussoorie", "Haridwar"],
      forestCoverArea: 24068,
      famousSportsPerson: "Milkha Singh",
    },
  ],
};

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("React Assignment", function () {
    let acc_score = 1;
    beforeEach(() => {
      cy.clearCookies();
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
      if (server_url.charAt(server_url.length - 1) != "/") {
        server_url = server_url + "/";
      }
      cy.writeFile("db.json", mock, (err) => {
        if (err) {
          console.error(err);
        }
      });
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
    it("Shows the correct initial data", () => {
      cy.intercept("GET", "**/states?**").as("getStates");
      cy.visit(url);
      cy.wait("@getStates").then(() => {
        const numOfStates = 5;
        const cards = ".data-list-wrapper .card-list .card";
        cy.get(".card-list").children().should("have.length", numOfStates);
        cy.get(cards)
          .should("have.length", numOfStates)
          .first()
          .should("contain", mock.states[0].stateName);
        cy.get(cards)
          .eq(Math.ceil(numOfStates / 2))
          .should("contain", mock.states[Math.ceil(numOfStates / 2)].stateName);
        cy.get(cards)
          .should("have.length", numOfStates)
          .last()
          .should("contain", mock.states[numOfStates - 1].stateName);
        cy.then(() => {
          acc_score += 3;
        });
      });
    }); // 3
    it("Able to add new state", () => {
      cy.intercept("GET", "**/states?**").as("getStates");
      cy.intercept("POST", "**/states").as("postRequest");
      cy.visit(url);
      cy.wait("@getStates").then(() => {
        let data = {
          stateName: "Andaman and Nicobar Islands",
          population: 417036,
          GDPRanking: "24",
          image: "./server-files/images/AndamanandNicobarIslands.jpg",
          language: "Hindi, Bengali, Tamil, Malayalam, Telugu",
          capital: "Port Blair",
          region: "South India",
          tourismPlaces: ["Cellular Jail", "Radhanagar Beach", "Ross Island"],
          forestCoverArea: 6408,
          famousSportsPerson: "Shibhnath De",
        };
        cy.get("#state-Name").type(data.stateName);
        cy.get("#state-image").type(data.image);
        cy.get("#state-population").type(data.population);
        cy.get("#state-GDPRanking").type(data.GDPRanking);
        cy.get("#state-language").type(
          "Hindi, Bengali, Tamil, Malayalam, Telugu"
        );
        cy.get("#state-capital").type(data.capital);
        cy.get("#state-region").type(data.region);
        cy.get("#state-tourismPlaces").type(
          "Cellular Jail, Radhanagar Beach, Ross Island"
        );
        cy.get("#add-state").should("be.visible").click();
        cy.wait("@postRequest").then(() => {
          cy.wait("@getStates").then(() => {
            cy.wait(1000);
            cy.request(`${server_url}states`).then((res) => {
              const lastData = res.body[res.body.length - 1];
              expect(lastData.stateName).equal(data.stateName);
              expect(+lastData.population).equal(+data.population);
              expect(+lastData.GDPRanking).equal(+data.GDPRanking);
              expect(lastData.image).equal(data.image);
              expect(lastData.language).equal(data.language);
              expect(lastData.capital).equal(data.capital);
              expect(lastData.region).equal(data.region);
              for (let i = 0; i < data.tourismPlaces; i++) {
                expect(lastData.tourismPlaces[i]).equal(data.tourismPlaces[i]);
              }
            });
            cy.then(() => {
              acc_score += 2;
            });
          });
        });
      });
    });
    it("Check by adding a new state the pagination button should increased", () => {
      cy.intercept("GET", "**/states?**").as("getStates");
      cy.intercept("POST", "**/states").as("postRequest");
      cy.visit(url);
      cy.wait("@getStates").then(() => {
        cy.get("#pagination-wrapper").children().should("have.length", 7);
        let data = {
          stateName: "Tripura",
          population: 3990322,
          GDPRanking: "33",
          image: "./server-files/images/Tripura.png",
          language: "Bengali, Kokborok",
          capital: "Agartala",
          region: "North East India",
          tourismPlaces: ["Ujjayanta Palace", "Neermahal", "Unakoti"],
          forestCoverArea: 10486,
          famousSportsPerson: "Dipa Karmakar",
        };
        cy.get("#state-Name").type(data.stateName);
        cy.get("#state-image").type(data.image);
        cy.get("#state-population").type(data.population);
        cy.get("#state-GDPRanking").type(data.GDPRanking);
        cy.get("#state-language").type("Bengali, Kokborok");
        cy.get("#state-capital").type(data.capital);
        cy.get("#state-region").type(data.region);
        cy.get("#state-tourismPlaces").type(
          "Ujjayanta Palace, Neermahal, Unakoti"
        );
        cy.get("#add-state").should("be.visible").click();
        cy.wait("@postRequest").then(() => {
          cy.wait("@getStates");
          cy.wait(1000).then(() => {
            cy.get("#pagination-wrapper").children().should("have.length", 7);
            cy.get("#pagination-wrapper").children().last().click();
            cy.wait(500);
            cy.get(".card-list").children().should("have.length", 5);
            cy.get(".card-list").children().last().contains("Tripura");
            cy.get(".card-list").children().last().contains("Agartala");

            cy.then(() => {
              acc_score += 1;
            });
          });
        });
      });
    }); //1
    it("Able to delete a state", () => {
      cy.intercept("GET", "**/states?**").as("getStates");
      cy.intercept("DELETE", "**/states/**").as("deleteRequest");
      cy.visit(url);
      cy.wait("@getStates").then(() => {
        cy.wait(500);
        cy.get(".card-list").children().first().find(".card-button").click();
        const cards = ".data-list-wrapper .card-list .card";
        cy.wait("@deleteRequest").then(() => {
          cy.wait("@getStates").then(() => {
            cy.wait(1000);
            cy.get(".card-list").children().should("have.length", 5);
            cy.get(cards).first().should("contain", "Himachal Pradesh");
            cy.get(cards).last().should("contain", "Kolkata");
            cy.then(() => {
              acc_score += 2;
            });
          });
        });
      });
    }); //2
    it("Able to edit all fields of the state", () => {
      cy.intercept("PATCH", `**/states/*`).as("patchedState");
      cy.intercept("GET", "**/states?**").as("getStates");
      cy.visit(url);
      cy.wait("@getStates").then(() => {
        cy.wait(500);
        const cards = ".data-list-wrapper .card-list .card";
        cy.get(cards).last().find(".card-link").click();
        cy.wait(1000).then(() => {
          cy.get("#update-state-Name")
            .clear()
            .type("Andaman and Nicobar Islands");
          cy.get("#update-state-image")
            .clear()
            .type("./server-files/images/AndamanandNicobarIslands.jpg");
          cy.get("#update-state-population").clear().type(164512);
          cy.get("#update-state-language").clear().type("Marathi,english");
          cy.get("#update-state-GDPRanking").clear().type(40);
          cy.get("#update-state-region").clear().type("south India");
          cy.get("#update-state-tourismPlaces")
            .clear()
            .type("Cellular Jail, Radhanagar Beach, Ross Island");
          cy.get("#update-state").should("be.visible").click();
          cy.wait("@patchedState");
          cy.wait("@getStates").then(() => {
            cy.wait(1000).then(() => {
              cy.get(cards).last().contains("Andaman and Nicobar Islands");
              cy.get(cards).last().contains("1645");
              cy.get(cards).last().contains("Cellular Jail");
              cy.get(cards).last().contains("Chennai");
              cy.get(cards).last().contains("40");
              cy.then(() => {
                acc_score += 2;
              });
            });
          });
        });
      });
    }); //2
    it("Able to edit the GDP ranking", () => {
      cy.intercept("PATCH", `**/states/*`).as("patchedState");
      cy.intercept("GET", "**/states?**").as("getStates");
      cy.visit(url);
      cy.wait("@getStates").then(() => {
        cy.wait(500);
        const cards = ".data-list-wrapper .card-list .card";
        cy.get(cards).first().find(".card-link").click();
        cy.wait(1000);
        cy.get("#update-GDP-state-GDPRanking").clear().type(41);
        cy.get("#update-GDP-stateBtn").click();
        cy.wait("@patchedState");
        cy.wait("@getStates").then(() => {
          cy.wait(1000);
          cy.get(cards).first().contains(41);
          cy.then(() => {
            acc_score += 1;
          });
        });
      });
    }); //1
    it("Low-to-high Sorts as expected", () => {
      cy.intercept("GET", "**/states?**").as("getStates");
      cy.visit(url);
      cy.wait("@getStates").then(() => {
        cy.wait(500);
        const cards = ".data-list-wrapper .card-list .card";
        cy.get("#sort-low-to-high").click();
        cy.wait(500).then(() => {
          let arr = [];
          cy.get(cards)
            .each(($el) => {
              arr.push(+$el.find(".card-GDPRanking").text());
            })
            .then(() => {
              const isSorted = arr.reduce(
                (n, item) => n !== false && item >= n && item
              );
              expect(!!isSorted).to.be.true;
              expect(arr.length).to.be.greaterThan(0);
            });
        });

        cy.then(() => {
          acc_score += 1;
        });
      });
    }); // 1
    it("high-to-low Sorts as expected", () => {
      cy.intercept("GET", "**/states?**").as("getStates");
      cy.visit(url);
      cy.wait("@getStates").then(() => {
        cy.wait(500);
        const cards = ".data-list-wrapper .card-list .card";
        cy.get("#sort-high-to-low").click();
        cy.wait(500).then(() => {
          let arr2 = [];
          cy.get(cards)
            .each(($el) => {
              arr2.push(+$el.find(".card-GDPRanking").text());
            })
            .then(() => {
              //console.log(arr2, arr2.length);
              const isSorted = arr2.reduce(
                (n, item) => n !== false && item <= n && item
              );
              expect(!!isSorted).to.be.true;
              expect(arr2.length).to.be.greaterThan(0);
            });
        });

        cy.then(() => {
          acc_score += 1;
        });
      });
    }); // 1
    it("Filters as expected", () => {
      cy.intercept("GET", "**/states?**").as("getStates");
      cy.visit(url);
      cy.wait("@getStates").then(() => {
        cy.wait(500);
        cy.get("#filter-North-East-India").click();
        const cards = ".data-list-wrapper .card-list .card";
        cy.wait(500).then(() => {
          let arr = [];
          cy.get(cards)
            .each((el) => {
              arr.push(el.find(".card-region").text().trim());
            })
            .then(() => {
              const is = arr.reduce(
                (n, item) => n !== false && item === "North East India"
              );
              expect(!!is).to.be.true;
              expect(arr.length).to.be.greaterThan(0);
            });
        });

        cy.get("#filter-West-India").click();
        cy.wait(500).then(() => {
          let arr2 = [];
          cy.get(cards)
            .each((el) => {
              arr2.push(el.find(".card-region").text().trim());
            })
            .then(() => {
              //console.log(arr2, arr2.length);
              const isKidsroom = arr2.reduce(
                (n, item) => n !== false && item === "West India"
              );
              expect(!!isKidsroom).to.be.true;
              expect(arr2.length).to.be.greaterThan(0);
            });
        });

        cy.then(() => {
          acc_score += 1;
        });
      });
    }); // 1
    it("Low-to-high Sorts as expected with pagination", () => {
      cy.intercept("GET", "**/states?**").as("getStates");
      cy.visit(url);
      cy.wait("@getStates").then(() => {
        cy.wait(500);
        cy.get("#pagination-wrapper").children().should("have.length", 7);
        const cards = ".data-list-wrapper .card-list .card";
        cy.get("#sort-low-to-high").click();
        cy.wait(500).then(() => {
          cy.get("#pagination-wrapper").children().should("have.length", 7);
          let arr = [];
          cy.get(cards)
            .each(($el) => {
              arr.push(+$el.find(".card-GDPRanking").text());
            })
            .then(() => {
              // console.log(arr, arr.length);
              const isSorted = arr.reduce(
                (n, item) => n !== false && item >= n && item
              );
              expect(!!isSorted).to.be.true;
              expect(arr.length).to.be.greaterThan(0);
            });
        });

        cy.get("#pagination-wrapper").children().last().click();
        cy.wait(500).then(() => {
          let arr2 = [];
          cy.get(cards)
            .each(($el) => {
              arr2.push(+$el.find(".card-GDPRanking").text());
            })
            .then(() => {
              // console.log(arr, arr.length);
              const isSorted = arr2.reduce(
                (n, item) => n !== false && item >= n && item
              );
              expect(!!isSorted).to.be.true;
              expect(arr2.length).to.be.greaterThan(0);
            });
        });

        cy.then(() => {
          acc_score += 1;
        });
      });
    }); // 1
    it("high-to-low Sorts as expected with pagination", () => {
      cy.intercept("GET", "**/states?**").as("getStates");
      cy.visit(url);
      cy.wait("@getStates").then(() => {
        cy.wait(500);
        cy.get("#pagination-wrapper").children().should("have.length", 7);
        const cards = ".data-list-wrapper .card-list .card";
        cy.get("#sort-high-to-low").click();
        cy.wait(500).then(() => {
          cy.get("#pagination-wrapper").children().should("have.length", 7);
          let arr2 = [];
          cy.get(cards)
            .each(($el) => {
              arr2.push(+$el.find(".card-GDPRanking").text());
            })
            .then(() => {
              //console.log(arr2, arr2.length);
              const isSorted = arr2.reduce(
                (n, item) => n !== false && item <= n && item
              );
              expect(!!isSorted).to.be.true;
              expect(arr2.length).to.be.greaterThan(0);
            });
        });

        cy.get("#pagination-wrapper").children().last().click();
        cy.wait(500).then(() => {
          let arr3 = [];
          cy.get(cards)
            .each(($el) => {
              arr3.push(+$el.find(".card-GDPRanking").text());
            })
            .then(() => {
              const isSorted = arr3.reduce(
                (n, item) => n !== false && item <= n && item
              );
              expect(!!isSorted).to.be.true;
              expect(arr3.length).to.be.greaterThan(0);
            });
        });

        cy.then(() => {
          acc_score += 1;
        });
      });
    }); // 1
    it("Filters as expected with pagination", () => {
      cy.intercept("GET", "**/states?**").as("getStates");
      cy.visit(url);
      cy.wait("@getStates").then(() => {
        cy.wait(500);
        cy.get("#pagination-wrapper").children().should("have.length", 7);
        cy.get("#filter-North-East-India").click();
        const cards = ".data-list-wrapper .card-list .card";
        cy.wait(500).then(() => {
          cy.get("#pagination-wrapper").children().should("have.length", 2);
          let arr = [];
          cy.get(cards)
            .each((el) => {
              arr.push(el.find(".card-region").text().trim());
            })
            .then(() => {
              const is = arr.reduce(
                (n, item) => n !== false && item === "North East India"
              );
              expect(!!is).to.be.true;
              expect(arr.length).to.be.greaterThan(0);
            });
        });

        cy.get("#filter-West-India").click();
        cy.wait(500).then((res) => {
          cy.get("#pagination-wrapper").children().should("have.length", 1);
          let arr2 = [];
          cy.get(cards)
            .each((el) => {
              arr2.push(el.find(".card-region").text().trim());
            })
            .then(() => {
              //console.log(arr2, arr2.length);
              const isKidsroom = arr2.reduce(
                (n, item) => n !== false && item === "West India"
              );
              expect(!!isKidsroom).to.be.true;
              expect(arr2.length).to.be.greaterThan(0);
            });
        });

        cy.then(() => {
          acc_score += 1;
        });
      });
    }); // 1
    it("check for pagination functionality", () => {
      cy.intercept("GET", "**/states?**").as("getStates");
      cy.visit(url);
      cy.wait("@getStates").then(() => {
        cy.wait(500);
        cy.get("#pagination-wrapper").children().should("have.length", 7);
        cy.get("#pagination-wrapper").children().last().click();
        cy.wait(500).then(() => {
          cy.get(".card-list").children().should("have.length", 4);
          cy.get(".card-list").children().first().contains("Lakshadweep");
          cy.get(".card-list").children().first().contains("Malayalam");
          cy.get(".card-list").children().last().contains("Dehradun");
          cy.get(".card-list").children().last().contains("Nainital");
        });

        cy.then(() => {
          acc_score += 2;
        });
      });
    }); //2
    it("Able to search by stateName", () => {
      cy.intercept("GET", "**/states?**").as("getStates");
      cy.visit(url);
      cy.wait("@getStates").then(() => {
        cy.wait(500);
        cy.get("#search-by-select").select("stateName");
        cy.get("#search-by-input").clear().type("Puducherry");
        cy.get("#search-by-button").click();
        cy.wait(500).then(() => {
          cy.get(".card-list").children().should("have.length", 1);
          cy.get(".card-list").children().first().contains("Puducherry");
          cy.get(".card-list").children().first().contains("1506478");
        });

        cy.then(() => {
          acc_score += 1;
        });
      });
    }); //1
    it("Able to search by the language", () => {
      cy.intercept("GET", "**/states?**").as("getStates");
      cy.visit(url);
      cy.wait("@getStates").then(() => {
        cy.wait(500);
        cy.get("#search-by-select").select("language");
        cy.get("#search-by-input").clear().type("Hindi");
        cy.get("#search-by-button").click();
        cy.wait(500).then(() => {
          const arr = mock.states.filter((el) => el.language === "Hindi");
          cy.get(".card-list")
            .children()
            .each((card, index) => {
              cy.wrap(card)
                .find(".card-language")
                .should("contain", arr[index].language);
            });
        });

        cy.then(() => {
          acc_score += 1;
        });
      });
    });

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
