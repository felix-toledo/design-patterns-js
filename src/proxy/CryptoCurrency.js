//El programa tiene que hacer muchas requests.
//Es una mala idea si tenemos que hacer muchas ya que va a tardar mucho tiempo en retornar todo (entre otras cosas).

//Creamos CryptocurrencyAPI que va a servir como un ejemplo de servicio de api donde podemos consultar valores.
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

//Ahora creamos el proxy que va a servir como un ejemplo de servicio de cache donde podemos guardar los datos y luego retornarlos cuando se requiera.
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