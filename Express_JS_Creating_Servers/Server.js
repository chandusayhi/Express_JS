const express = require("express");
const app = express();
const path = require("path")

const hostname = "127.0.0.1";
const port =5000;

app.get('/',(request,response) => {
    response.send(`<h2> Welcome to Express JS</h2>`);
});

app.get('/home', (request,response) => {
    response.sendFile(path.join(__dirname,'index.html'));
})

let models = [{brandID:1, id:1, name:'Swift'},{brandID:2, id:2, name:'alto'},{brandID:3, id:3, name:'balero'},{brandID:4, id:4, name:'Celerio'}];
app.get('/json',(request, response) => {
    response.json(models);
});

app.get('/downloads',(request, response)=>{
    response.download(path.join(__dirname,'First_Program.pdf'));
});

let profile = {
    "login": "chandusayhi",
    "id": 17869072,
    "node_id": "MDQ6VXNlcjE3ODY5MDcy",
    "avatar_url": "https://avatars.githubusercontent.com/u/17869072?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/chandusayhi",
    "html_url": "https://github.com/chandusayhi",
    "followers_url": "https://api.github.com/users/chandusayhi/followers",
    "following_url": "https://api.github.com/users/chandusayhi/following{/other_user}",
    "gists_url": "https://api.github.com/users/chandusayhi/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/chandusayhi/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/chandusayhi/subscriptions",
    "organizations_url": "https://api.github.com/users/chandusayhi/orgs",
    "repos_url": "https://api.github.com/users/chandusayhi/repos",
    "events_url": "https://api.github.com/users/chandusayhi/events{/privacy}",
    "received_events_url": "https://api.github.com/users/chandusayhi/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Chandrakant Hatti",
    "company": "Freelancer",
    "blog": "",
    "location": "GADAG",
    "email": null,
    "hireable": null,
    "bio": "Data is ruling the World. Rule the World with the Analysis and presentation of Data you have.",
    "twitter_username": null,
    "public_repos": 46,
    "public_gists": 0,
    "followers": 87,
    "following": 3,
    "created_at": "2016-03-16T04:21:32Z",
    "updated_at": "2023-07-19T12:59:48Z"
  };

  app.get('/profile',(request,response) => {
    response.json(profile);
  });

app.listen(port, hostname, () => {
    console.log(`Express Server is Started at http://${hostname}:${port}`);
});