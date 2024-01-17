fetch('./textFile.txt')
    .then(response => response.json())
    .then(users => {
        // Oppgave 1
        console.log("---------- Oppgave 1 - Textfil ---------")
        for (let i = 0; i < users.length; i++) {
            if (users[i].name == "Clementine Bauch") {
                console.log(users[i].address)
            }
        }
        console.log(" ")

        // Oppgave 2
        console.log("---------- Oppgave 2 ----------")
        for (let i = 0; i < users.length; i++) {
            if (users[i].name == "Leanne Graham") {
                console.log("Det gamle nummeret til " + users[i].name + " er " + users[i].phone)
                users[i].phone = "40830369"
                console.log("Det nye nummeret er " + users[i].phone)
            }
        }
        console.log(" ")

        // Oppgave 3
        console.log("---------- Oppgave 3 ----------")
        for (let i = 0; i < users.length; i++) {
            if (users[i].email == "Sherwood@rosamond.me") {
                console.log("Den e-posten er eid av " + users[i].name + ", " + users[i].username + ".")
            }
        }
        console.log(" ")
    })

fetch("./fotograf.json")
    .then(response => response.json())
    .then(foto => {
        // Oppgave 1
        console.log("---------- Oppgave 1 - JSON fil ----------")
        let highestID = 0
        for (let i = 0; i < foto.length; i++) {
            if (foto[i].id > highestID) {
                highestID = foto[i].id
            }
        }
        console.log("Det er " + highestID + " bilder totalt.")
        console.log(" ")

        // Oppgave 2
        console.log("---------- Oppgave 2 ----------")

        let highestAlbums = 0
        for (let i = 0; i < foto.length; i++) {
            if (foto[i].albumId > highestAlbums) {
                highestAlbums = foto[i].albumId
            }
        }
        console.log("Det er " + highestAlbums + " albumer totalt.")
        console.log(" ")

        // Oppgave 3
        console.log("---------- Oppgave 3 ----------")
        for (let i = 0; i < foto.length; i++) {
            if (foto[i].id == 238) {
                console.log('Tittelen på bilde 238 er ' + '"' + foto[i].title + '"')
            }
        }
        console.log(" ")

        // Oppgave 4
        let bilde = document.createElement("img")
        for (let i = 0; i < foto.length; i++) {
            if (foto[i].id == 555) {
                bilde.src = foto[i].url
                document.body.appendChild(bilde)
            }
        }
    })

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(api => {
        // Oppgave 1
        console.log("---------- Oppgave 1 - API ----------")
        for (let i = 0; i < api.length; i++) {
            if (api[i].id == 95) {
                console.log("Tittelen til post 95 er " + api[i].title + ".")
            }
        }
        console.log(" ")

        // Oppgave 2
        console.log("---------- Oppgave 2 ----------")
        for (let i = 0; i < api.length; i++) {
            if (api[i].userId = 5) {
                api[i].body = "Dyna e morgovarm, åg e vel sova på min arm."
                console.log("Body til userId 5 er byttet til " + api[i].body)
                break
            }
        }
        console.log(" ")
    })