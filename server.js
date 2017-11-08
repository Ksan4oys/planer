var exs = require("express");
var app = exs();


app.all('/posts', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/posts', function(req, res, next) {
  setTimeout( () => {
    res.json([
        {
          author: 'andrew',
          date: '2017-08-08',
          text: '“Не нужно нам идти против того, что нас искушает. Об этом говорит и Евангелие: «Не противься злу». В это время сотворите молитву, и дело изменится, но без вашего возмущения.”'
        },
        {
          author: 'andrew',
          date: '2017-08-08',
          text: '“Не нужно нам идти против того, что нас искушает. Об этом говорит и Евангелие: «Не противься злу». В это время сотворите молитву, и дело изменится, но без вашего возмущения.”'
        }
      ]
    )
  }, 3000)
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log(`start server on port ${port}`);