Clone this repo with the recursive option `git clone --recursive`.


Install and run the backend API server
--------------------------------------

**Prerequisites:** Python and [Virtualenv](https://virtualenv.pypa.io/en/latest/installation.html). [Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/guide/current/_installing_elasticsearch.html) and [PostgreSQL](http://www.postgresql.org/download/) must be running with default settings.

```sh
$ cd ramses-tutorial/pizza_factory
$ virtualenv venv && . venv/bin/activate
(venv)$ pip install nefertari-sqla -r requirements.txt
(venv)$ pserve local.ini
```

In another terminal session, attach to the same virtual environment as the API server and post some seed data.

```sh
$ cd ramses-tutorial/pizza_factory
$ . venv/bin/activate
(venv)$ nefertari.post2api -f seeds/toppings.json -u http://localhost:6543/api/toppings
(venv)$ nefertari.post2api -f seeds/cheeses.json -u http://localhost:6543/api/cheeses
(venv)$ nefertari.post2api -f seeds/sauces.json -u http://localhost:6543/api/sauces
(venv)$ nefertari.post2api -f seeds/crusts.json -u http://localhost:6543/api/crusts
```


Generate the API documentation
------------------------------
```sh
$ npm i -g raml2html
$ raml2html ramses-tutorial/pizza_factory/api.raml > api-doc.html
$ open api-doc.html
```


Generate and try the client library in node
-------------------------------------------

Then go back to the root of this project and get cracking.

```sh
$ cd ../../
$ npm i -g raml-client-generator
$ raml-to-client ramses-tutorial/pizza_factory/api.raml -o pizza-factory-api -l javascript
$ npm install pizza-factory-api
```

You can see complete details of how to use the client in `pizza-factory-api/README.md`. Now you will have a client library that already knows how to use the Pizza Factory API.

```js
$ node
> var PizzaFactoryApi = require('pizza-factory-api');
> var client = new PizzaFactoryApi();
> var resource = client.resources.toppings;
> resource.get().then(function (res) { console.log(res.body) });
```


Install and run the frontend app
--------------------------------

**Prerequisites:** [Npm (ships with Node.js)](https://github.com/joyent/node/wiki/installing-node.js-via-package-manager) and [Gulp](http://gulpjs.com/) (`npm install -g gulp`)

```sh
$ npm install
$ gulp
```
