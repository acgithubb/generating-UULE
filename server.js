const express = require('express');
const createUule = require('create-uule');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    // const uule = createUule('New York');
    //  res.send(`https://www.google.com/search?q=digital+marketing+agency&gl=us&hl=en&gws_rd=cr&pws=0&uule=${uule}`);
    //  console.log(`https://www.google.com/search?q=digital+marketing+agency&gl=us&hl=en&gws_rd=cr&pws=0&uule=${uule}`);
    res.sendFile(__dirname + '/form.html');
  });

  app.post("/",function(req,res){
      const uule = createUule(req.body.location);
          res.send(`https://www.google.com/search?q=digital+marketing+agency&gl=us&hl=en&gws_rd=cr&pws=0&uule=${uule}`);
     console.log(`https://www.google.com/search?q=digital+marketing+agency&gl=us&hl=en&gws_rd=cr&pws=0&uule=${uule}`);
   })

  let port = process.env.PORT;
  if (port == null || port == "") {
    port = 3000;
  }
  
  app.listen(port, function () {
    console.log("Server started succesfully");
  });