MEAN Stack Architecture
============================
Mean Stack Server, which has a capability of serving js(client application) built up on any framework, and It has a rest server support which will help you to create and server REST services as well.

### Getting started
* Edit configuration `config/global.config.json` & `config/server.config.json` files with required parameters.
* Install npm dependencies <br/>
<code>npm install</code>

### Modules
* Every new module must be created under `/modules` directory.
* `/modules` directory contains two sub directories `/controllers`, `/models`, `/plugins`(optional) and a module.config.js

### Models (Database Logic)
* Models are the wrappers for database communications.

### Registration of Controllers and Models
* Each newly created controllers and models should be registered in module.config.js under 'controllers' and 'models' key.

