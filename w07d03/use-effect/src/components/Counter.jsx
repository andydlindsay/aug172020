import React from 'react';
import axios from 'axios';

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const [title, setTitle] = React.useState('hello world');
  const [user, setUser] = React.useState({ username: 'johnstamos' });
  const [recipes, setRecipes] = React.useState([]);
  const [ingredients, setIngredients] = React.useState([]);

  const clickHandler = () => {
    setCount(count + 1);
  };

  React.useEffect(() => {
    const baseUrl = 'https://my-json-server.typicode.com/andydlindsay/chef-andy';

    const promiseOne = axios.get(`${baseUrl}/recipes`);
    const promiseTwo = axios.get(`${baseUrl}/ingredients`);

    const promises = [promiseOne, promiseTwo];

    Promise.all(promises)
      .then((arrOfResponses) => {
        console.log(arrOfResponses[0].data); // recipes
        console.log(arrOfResponses[1].data); // ingredients

        setRecipes(arrOfResponses[0].data);
        setIngredients(arrOfResponses[1].data);
      });
  }, []);

  React.useEffect(() => {
    console.log('document title changed');
    document.title = title;
  });

  const moreStuff = () => {
    console.log('more stuff');
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      console.log(`the current value for count is ${count}`);
    }, 1000);

    const cleanup = () => {
      console.log('cleaning up interval');
      clearInterval(interval);
      moreStuff();
    };

    return cleanup;
  }, [count, user.username]);

  return (
    <div>
      <h1>The Counter Component</h1>
      <h2>Count: {count}</h2>
      <button onClick={clickHandler}>Click</button>
      <br/>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <br/>
      <h2>{user.username}</h2>
      <input
        value={user.username}
        onChange={(event) => setUser({username: event.target.value})}
      />

      <div>
        <h2>Recipes</h2>
        { recipes.map(recipe => (
          <h2 key={recipe.id}>{recipe.title} ({recipe.id})</h2>
        )) }
      </div>

      <div>
        <h2>Ingredients in Andy's Kitchen</h2>
        { ingredients.map(ingredient => (
          <h2 key={ingredient.id}>{ingredient.name}</h2>
        )) }
      </div>

    </div>
  );
};

export default Counter;
