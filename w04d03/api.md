# Posts API

### **GET** `/api/posts`
  #### Example body: none  
  #### Example response:
  ```json
  {
    "1": {
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "content": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
        "author_id": 1
    },
    "2": {
        "id": 2,
        "title": "qui est esse",
        "content": "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam ",
        "author_id": 2
    },
    "3": {
        "id": 3,
        "title": "quasi exercitationem repellat qui ipsa sit",
        "content": "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
        "author_id": 3
    },
    "4": {
        "id": 4,
        "title": "um et est occaecati",
        "content": "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum",
        "author_id": 2
    },
    "5": {
        "id": 5,
        "title": "nesciunt quas odio",
        "content": "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis",
        "author_id": 1
    }
  }
  ```

**GET** `/api/posts/:id`
  ### Example body: none  
  ### Example response:
  ```json
  {
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "content": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
    "author_id": 1
  }
  ```