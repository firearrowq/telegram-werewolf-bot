var config = {
  "token": "1480132437:AAF9MGIVwY_C8F7sn75jMysh91U10cJBtTE",
  "update_type": "long-polling", // or "webhook"
  "webhook": "https://werewolfsbot.herokuapp.com/<token>",
  //"proxy": "http://127.0.0.1:8118",
  //"bot_name": "example_bot", // check bot name,
  "admin_id": "1144225359",
  "db": {
    host: '127.0.0.1',
    port: 27017,
    //username: '',
    //password: '',
  }
};

module.exports = config;
