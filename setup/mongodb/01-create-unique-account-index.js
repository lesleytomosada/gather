conn = Mongo();
db = conn.getDB("accounts");


db.accounts.createIndex({ email: 1 }, { unique: true });
