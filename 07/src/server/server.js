const http = require('http');

const hostname = 'localhost';
const port = 8080;

const jokes = [
  "Chuck Norris was once in a knife fight, and the knife lost.",
  "Chuck Norris doesn't stub his toes. He accidentally destroys chairs, bedframes, and sidewalks.",
  "Chuck Norris once busted every player in a poker game on the first hand with nothing but a five deuce off suite and his fists.",
  "When Chuck Norris was born he roundhouse kicked his way out of the womb",
  "Chuck Norris will personally roundhouse kick you if you don't get off this website and get back to work!",
  "Chuck Norris doesn't need to use AJAX because pages are too afraid to postback anyways.",
  "Chuck Norris uses a violin bow as a toothpick.",
  "Chuck Norris is also known as Donkey Dong Norris!",
  "How come there are no pictures of Chuck Norris and Santa Claus together because Chuck Norris is f**king real.",
  "The Tomahawk Cruise Missile is Chuck Norris Bottle Rocket",
  "Chuck Norris attacks people from the age of 1-120 and people from A-z",
  "Chuck Norris is, and has always been where it's at.",
  "Chuck Norris can fly on an airplane to Maine from Hawaii in 30 seconds. he just has to tell the pilot to move over...",
  "There were originally 11 commandments. Unfortunately Moses did not catch the last. 'Thou shalt not fuck with Chuck Norris.'",
  "The end of the world is scared to come because Chuck Norris will round house kick is ass.",
  "Chuck Norris can play Candy Crush on a public phone",
  "Chuck Norris turned 70 today...In reality Chuck Norris is over 2000 years old, after 99 his age resets to 0.",
  "Atomic bombs are Chuck Norris favourite food. They are so crisply and spicy.",
  "Chuck Norris invented Gravity to prevent people from leaving Earth.",
  "If Chuck Norris starts a Twerk flash mob in Syria the government of Syria would surrender.",
  "Chuck Norris doesn't eat cereal with a spoon.... He eats spoons with 1 rice krispie"
];

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
    Connection: 'keep-alive'
  });
  return setInterval(() => {
    res.write(
      `data: ${jokes[Math.floor(Math.random() * jokes.length)]}\n\n`,
    );
  }, 2000);
}).listen(port, hostname, () => {
  console.log(`server started on port ${port}`);
});