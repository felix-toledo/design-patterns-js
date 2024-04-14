//El programa tiene que hacer muchas requests.
//Es una mala idea si tenemos que hacer muchas ya que va a tardar mucho tiempo en retornar todo (entre otras cosas).

export class CryptocurrencyAPI {
     constructor() {
          this.getValue = function (coin) {
               console.log("Llamando a API externa...");
               switch (coin) {
                    case 'peso':
                         return "$1";
                    case 'bitcoin':
                         return "$1000";
               }
          };
     }
}

export class CrytpocurrencyProxy {
     constructor() {
          this.api = new CryptocurrencyAPI;
          this.cache = {};
          this.status = false;

          this.getValue = function(coin){
               if(this.cache[coin] == null){
                    this.cache[coin] = this.api.getValue(coin)
                    this.status = true;
               } else {
                    this.status = false;
               }
               return this.cache[coin];
          }
     }
}