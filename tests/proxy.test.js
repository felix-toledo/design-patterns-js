import {CryptocurrencyAPI, CrytpocurrencyProxy} from '../src/proxy/CryptoCurrency'

const api = new CryptocurrencyAPI;
const proxy = new CrytpocurrencyProxy;

test('En caso de que no hayamos buscado nunca', () => {
     const valor = proxy.getValue('peso');
     expect(valor).toBe("$1");
     const status = proxy.status;
     expect(status).toBe(true);
})

test('En caso de que lo hayamos buscado', () =>{
     const valor2 = proxy.getValue('peso');
     expect(valor2).toBe("$1");
     const status2 = proxy.status;
     expect(status2).toBe(false);
})