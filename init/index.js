const mongoose = require("mongoose");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
require("dotenv").config(); // load .env so MAP_TOKEN is available

const MONGO_URL = process.env.ATLASDB_URL;

const MAP_TOKEN = process.env.MAP_TOKEN; // read from .env (never committed to git)
const geocodingClient = mbxGeocoding({ accessToken: MAP_TOKEN });

main()
  .then(() => console.log("✅ Connected to Atlas DB"))
  .catch((err) => console.log("❌ Connection error:", err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  console.log("🗑️  Cleared existing listings");

  const dataWithGeometry = [];

  for (let obj of initData.data) {
    const query = `${obj.location}, ${obj.country}`;
    let coordinates = [0, 0]; // fallback

    try {
      const response = await geocodingClient
        .forwardGeocode({ query, limit: 1 })
        .send();

      if (
        response.body.features &&
        response.body.features.length > 0
      ) {
        coordinates = response.body.features[0].geometry.coordinates;
        console.log(`📍 Geocoded: ${query} → [${coordinates}]`);
      } else {
        console.warn(`⚠️  No result for: ${query}`);
      }
    } catch (err) {
      console.warn(`⚠️  Geocoding failed for: ${query}`, err.message);
    }

    dataWithGeometry.push({
      ...obj,
      owner: new mongoose.Types.ObjectId("000000000000000000000001"),
      geometry: {
        type: "Point",
        coordinates,
      },
    });
  }

  await Listing.insertMany(dataWithGeometry);
  console.log(`🌱 Seeded ${dataWithGeometry.length} listings with real coordinates!`);
  mongoose.connection.close();
};

initDB();
