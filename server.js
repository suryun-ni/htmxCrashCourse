import express from "express";

const app = express();

//set static folder
app.use(express.static("public"));
//Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
//Parse JSON bodies (as sent by API clinets)
app.use(express.json());

//Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

//Handle GET request to fetch users
app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Bob Williams" },
    { id: 3, name: "Shannon Jackson" },
  ];
  res.send(`
  <h1 class="text-2xl font-bold my-4"> Users</h1>
  <ul>
  ${users.map((user) => `<li>${user.name}</li>`).join("")}
  </ul>
  `);
});
