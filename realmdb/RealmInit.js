'use strict';
const Realm = require('realm');

var migrations = [
    require('./migrations/v001'),
];

var version = Realm.schemaVersion(Realm.defaultPath);
if(version < 0){
    version = 0;
}
while (version < migrations.length - 1) {
    var schema = migrations[version];
    schema.schemaVersion = version + 1;
    var migratedRealm = new Realm(schema);
    migratedRealm.close();
    version++;
}

var schema = migrations[migrations.length - 1];
schema.schemaVersion = migrations.length;
module.exports = new Realm(schema);