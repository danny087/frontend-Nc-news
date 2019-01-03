My northcoders news application. Check out the latest articles about topics like coding, football and cooking. Vote on your best articles and comments and even write a article and comment of your own.

This is my front-end for my NC-news project. When interating with it, it sends requests to my back-end api and updates the database when you create a new article and comment or like a comment or an article.

This applaction was made for me to get to grips with everything I learnt when on the back-end side of the course at northcoders.




Getting Started


For developers
Clone the source locally: https://github.com/danny087/FE2-NC-News.git

Install project dependencies:

$ npm install

now we need to set up a new con


Run npm start to run on your browser as it was made with React.

Routes:
Articles:
/articles
GET all articles

/articles/:article_id
PUT update vote on a certain article

GET get a specific article by it's ID

/articles/:article_id/comments
GET all comments belonging to an article

POST comment to an article

Topics:
/topics
GET get all topics available

/topics/:topic_slug/articles
GET get all articles belonging to a certain topic

POST post a new article to the specified topic

Users:
/users
GET all users

users/:user_id
GET all information belonging to a user

Comments:
/comments
GET all comments

/comments/:comment_id
PUT update vote count on a comment

DELETE delete comment from the database




