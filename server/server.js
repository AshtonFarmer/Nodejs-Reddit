const path = require('path');
const fs = require('fs');
const request = require('request');

var dataPath = path.join(__dirname, "../data.json");

request ('https://reddit.com/r/popular.json', (err, res, body) => {
   
    if(err) console.log(err)

    JSON.parse(body).data.children.forEach(item => {
        console.log(item.data.title);
    });

    let arrayOfObjects = JSON.parse(data);
    arrayOfObjects.chirps.push(
        {
            "author": "t2_4lfrjfry",
            "chirp": "One of the largest LAN party in the world"
        },
        {
            "author": "t2_cgcpv4xi",
            "chirp": "Holup"
        },
        {
            "author": "t2_k0g6r",
            "chirp": "What are unpopular One Piece opinions that you have that the fanbase would hate you for?"
        },
        {
            "author": "t2_h2iw9a0i",
            "chirp": "Bring me the meat!"
        },
        {
            "author": "t2_no7oq1i",
            "chirp": "Handle the bread my friend"
        });

    fs.writeFile(dataPath, res.body, err => {
        if(err) console.log(err)
    });
});