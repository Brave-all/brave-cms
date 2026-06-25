export default [
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      origin: ["https://brave.tech", "https://web-staging.brave.tech"],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"],
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
      credentials: true,
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  {
    name: "strapi::body",
    config: {
      formLimit: "256mb",        // forms
      jsonLimit: "256mb",        // JSON payloads
      textLimit: "256mb",        // text bodies
      formidable: {
        maxFileSize: 200 * 1024 * 1024, // 200 MB upload size
      },
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
