// This file either reads environment variables or uses hardcoded values.  This is the information that the client needs to connect to the mongodb that is setup on docker.
const mongoHost = process.env.MONGO_HOST || "localhost"
const mongoPort = process.env.MONGO_PORT || "27017"
const mongoUser = process.env.MONGO_USER || "twitter"
const mongoPassword = process.env.MONGO_PASSWORD || "pass"
const mongoDBName = process.env.MONGO_DB_NAME || "twitter-data"
const mongoURL = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDBName}`;
exports.mongoURL = mongoURL;
