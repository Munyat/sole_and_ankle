import { createServer, Model } from "miragejs";

export function makeServer() {
  let server = createServer({
    models: {
      shoe: Model, // Singular, as Mirage auto-pluralizes
    },

    seeds(server) {
      server.create("shoe", {
        slug: "tech-challenge",
        name: "NikeCourt Tech Challenge 20",
        imageSrc: "/assets/Images/tech-challenge.jpg",
        price: 16500,
        salePrice: null,
        releaseDate: Date.now() - 1000 * 60 * 60 * 1,
        numOfColors: 2,
      });

      server.create("shoe", {
        slug: "metcon-5",
        name: "Nike Metcon 5 AMP",
        imageSrc: "/assets/Images/metcon-5.jpg",
        price: 16500,
        salePrice: null,
        releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 2,
        numOfColors: 1,
      });

      server.create("shoe", {
        slug: "phantom",
        name: "Nike Phantom Vision",
        imageSrc: "/assets/Images/phantom.jpg",
        price: 16500,
        salePrice: null,
        releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 4,
        numOfColors: 4,
      });

      server.create("shoe", {
        slug: "pegasus",
        name: "Nike Air Zoom Pegasus",
        imageSrc: "/assets/Images/pegasus.jpg",
        price: 16500,
        salePrice: null,
        releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 16,
        numOfColors: 1,
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/shoes", (schema) => {
        return schema.shoes.all(); // ✅ Correct way to fetch all models
      });

      // Handle unknown requests (important for Vite)
      this.passthrough();
    },
  });

  return server;
}
