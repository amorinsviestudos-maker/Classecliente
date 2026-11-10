// este arquivo esta aqui apenas como referencia de como testar models
// Originalmente ele foi executado a partir da pasta SRC
// usando o comando :
//
// npx tsx .\src\testeProduto.ts
import { Produto } from "./models/Produto.js";
const iphone = new Produto(1, 'Iphone 11 da Apple feito de ouro', 200000.00, 1);
console.log('produto 1', iphone);
