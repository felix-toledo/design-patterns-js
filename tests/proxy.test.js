import {CryptocurrencyAPI, CrytpocurrencyProxy} from '../src/proxy/CryptoCurrency'

const api = new CryptocurrencyAPI;
const proxy = new CrytpocurrencyProxy;

//Test para ver que el proxy ingrese a la API cuando no hayamos buscado nunca.
test('En caso de que no hayamos buscado nunca', () => {
     const valor = proxy.getValue('peso');
     expect(valor).toBe("$1");
     const status = proxy.status;
     expect(status).toBe(true);
})

//Test para ver que el proxy NO ingrese a la API cuando lo hayamos buscado.
test('En caso de que lo hayamos buscado', () =>{
     const valor2 = proxy.getValue('peso');
     expect(valor2).toBe("$1");
     const status2 = proxy.status;
     expect(status2).toBe(false);
})