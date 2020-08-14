const express = require("express");
const app = express();
const fs = require("fs");
const { throttle } = require("underscore");
app.set("views", "views_file");
app.set("view engine", "pug");
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Connected, 3000 port!");
});

// app.get("/topic/new", (req, res) => {
//   res.render("new");
// });
app.get(["/topic", "/topic/:id"], (req, res) => {
  fs.readdir("data", (err, files) => {
    if (err) throw err;
    const id = req.params.id;
    if (id === "new") {
      res.render("new", { topics: files });
    } else if (id) {
      //id가 있을 때
      fs.readFile(`data/${id}`, "utf-8", (err, data) => {
        if (err) throw err;
        res.render("view", { topics: files, title: id, description: data });
      });
    } else {
      //id가 없을 때
      res.render("view", {
        topics: files,
        title: "어서오세요",
        description: "JavaScript 입니다!",
      });
    }
  });
});
// app.get("/topic/:id", (req, res) => {
//   const id = req.params.id;
//   fs.readdir("data", (err, files) => {
//     if (err) throw err;
//     fs.readFile(`data/${id}`, "utf-8", (err, data) => {
//       if (err) throw err;
//       res.render("view", { topics: files, title: id, description: data });
//     });
//   });
// });
app.post("/topic", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  fs.writeFile(`data/${title}.txt`, description, (err) => {
    if (err) throw err;
    res.redirect(`/topic/${title}.txt`);
  });
});
