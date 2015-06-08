Install and run the backend API server
--------------------------------------

**Prerequisites:** Elasticsearch and PostgreSQL must be running with default settings.

```sh
$ cd ramses-tutorial/pizza_factory
$ virtualenv venv && . venv/bin/activate
(venv)$ pip install ramses nefertari-sqla -r requirements.txt
(venv)$ pserve local.ini
```

In another terminal session, attach to the same virtual environment as the API server and post some seed data.

```sh
$ nefertari.post2api -f ramses-tutorial/pizza_factory/seeds/toppings.json -u http://localhost:6543/api/toppings
$ nefertari.post2api -f ramses-tutorial/pizza_factory/seeds/cheeses.json -u http://localhost:6543/api/cheeses
$ nefertari.post2api -f ramses-tutorial/pizza_factory/seeds/sauces.json -u http://localhost:6543/api/sauces
$ nefertari.post2api -f ramses-tutorial/pizza_factory/seeds/crusts.json -u http://localhost:6543/api/crusts
```


Generate and use the client library
-----------------------------------

With the backend API server running, open another terminal session and `cd` to the root directory of this `raml-javascript-client` project.

```sh
$ npm i -g raml-client-generator
$ raml-to-client ramses-tutorial/pizza_factory/api.raml -o pizza-factory-api -l javascript
$ npm install pizza-factory-api --save
```

Now you will have a client library that knows how to use the Pizza Factory API.

```js
$ node
> var PizzaFactoryApi = require('pizza-factory-api');
> var client = new PizzaFactoryApi();
> var resource = client.resources.toppings;
> resource.get().then(function (res) { console.log(res.body) });
```

You can see complete details of how to use the client in pizza-factory-api/README.md.