# W05D05 - Mid-term Project Kickoff

### Outcomes
* Much closer to a real-life experience
* Learn to work as a team
* Solidify your learnings

* merge conflicts

### Pick a Project

### User Stories
* user stories describe how a user uses our app

* As a _____, I can _____, because _____
* As a logged in user, I can favourite a blog post, because I want to read it later
* As a user, I can see a list of maps, because I want to whats available in my area

* As a non-logged in user, I cannot favourite a map, because I'm not allowed to

* As a logged in user, I can favourite a blog post, because I want to read it later AND the heart icon turns red

### Nouns become Entities
* Turn user stories into an ERD

### Routes
* Build BREAD routes for each resource
* REpresentational State Transfer

GET /users/:id/maps
GET /users/:id/maps/:map_id
GET /users/:id/favourites

GET /resources/new
GET /resources/:id/edit

B GET   /resources
R GET   /resources/:id
E POST  /resources/:id
A POST  /resources
D POST  /resources/:id/delete
D DELETE /resources/:id

### MVP
* Minimum Viable Product
* Minimum Viable Demo (MVD)
* If you're not going to demo it, DON'T BUILD IT

### Front-end Wireframes/Mockups
* moqups
* balsamiq
* draw.io
* pen and paper
* figma

### User Login
* Don't do it

/login/7
/login/12

```js
app.get('/login/:id', (req, res) => {
  req.session.user_id = req.params.id;
  res.redirect('/');
});
```

### Tech Choices
* BE === Node/Express/Postgres
* FE === HTML/CSS/JS/jQuery/Bootstrap/Flexbox/SCSS


### SPA vs Multi-page
* Not mutually exclusive

### Git
* Use branches
* I WILL NOT CODE ON MASTER
* Choose where the merges happen (locally or in the cloud)

* Work on your branch

* Save your branch (commit)
* Checkout master
* Pull latest
* Checkout branch
* Merge master into branch

git push origin master
git push origin my-branch

git pull origin master

git remote add origin git@github

### Splitting up the work
* Horizontal
* Vertical
* Pair programming

### Deployment
* Not a requirement
* Heroku

### Communication
* Please communicate

### Kanban
* To do, in progress, complete
* Trello






# 
