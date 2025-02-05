const Sitemap = require("react-router-sitemap").default;
// const fs = require("fs");

const generateSitemap = () => {
    new Sitemap({
        "/": { page: "App" },
    })
        .build("https://nmrobert.com")
        .save("./public/sitemap.xml");
};

generateSitemap();