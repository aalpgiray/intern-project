import App from './App/App';

import DataStore from './DataStore/DataStore';

var entry = document.getElementById('app');

if (entry == null) throw 'Entry not found';

var dataStore = new DataStore(localStorage);

var app = new App(entry, dataStore);

app.render();
