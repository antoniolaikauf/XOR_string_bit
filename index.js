let Array_XOR = [];
let testi = [
    {
      testo_bit: "",
      testo:
        "315c4eeaa8b5f8aaf9174145bf43e1784b8fa00dc71d885a804e5ee9fa40b16349c146fb778cdf2d3aff021dfff5b403b510d0d0455468aeb98622b137dae857553ccd8883a7bc37520e06e515d22c954eba5025b8cc57ee59418ce7dc6bc41556bdb36bbca3e8774301fbcaa3b83b220809560987815f65286764703de0f3d524400a19b159610b11ef3e",
    },
    {
      testo_bit: "",
      testo:
        "234c02ecbbfbafa3ed18510abd11fa724fcda2018a1a8342cf064bbde548b12b07df44ba7191d9606ef4081ffde5ad46a5069d9f7f543bedb9c861bf29c7e205132eda9382b0bc2c5c4b45f919cf3a9f1cb74151f6d551f4480c82b2cb24cc5b028aa76eb7b4ab24171ab3cdadb8356f",
    },
    {
      testo_bit: "",
      testo:
        "32510ba9a7b2bba9b8005d43a304b5714cc0bb0c8a34884dd91304b8ad40b62b07df44ba6e9d8a2368e51d04e0e7b207b70b9b8261112bacb6c866a232dfe257527dc29398f5f3251a0d47e503c66e935de81230b59b7afb5f41afa8d661cb",
    },
    {
      testo_bit: "",
      testo:
        "32510ba9aab2a8a4fd06414fb517b5605cc0aa0dc91a8908c2064ba8ad5ea06a029056f47a8ad3306ef5021eafe1ac01a81197847a5c68a1b78769a37bc8f4575432c198ccb4ef63590256e305cd3a9544ee4160ead45aef520489e7da7d835402bca670bda8eb775200b8dabbba246b130f040d8ec6447e2c767f3d30ed81ea2e4c1404e1315a1010e7229be6636aaa",
    },
    {
      testo_bit: "",
      testo:
        "3f561ba9adb4b6ebec54424ba317b564418fac0dd35f8c08d31a1fe9e24fe56808c213f17c81d9607cee021dafe1e001b21ade877a5e68bea88d61b93ac5ee0d562e8e9582f5ef375f0a4ae20ed86e935de81230b59b73fb4302cd95d770c65b40aaa065f2a5e33a5a0bb5dcaba43722130f042f8ec85b7c2070",
    },
    {
      testo_bit: "",
      testo:
        "32510bfbacfbb9befd54415da243e1695ecabd58c519cd4bd2061bbde24eb76a19d84aba34d8de287be84d07e7e9a30ee714979c7e1123a8bd9822a33ecaf512472e8e8f8db3f9635c1949e640c621854eba0d79eccf52ff111284b4cc61d11902aebc66f2b2e436434eacc0aba938220b084800c2ca4e693522643573b2c4ce35050b0cf774201f0fe52ac9f26d71b6cf61a711cc229f77ace7aa88a2f19983122b11be87a59c355d25f8e4",
    },
    {
      testo_bit: "",
      testo:
        "32510bfbacfbb9befd54415da243e1695ecabd58c519cd4bd90f1fa6ea5ba47b01c909ba7696cf606ef40c04afe1ac0aa8148dd066592ded9f8774b529c7ea125d298e8883f5e9305f4b44f915cb2bd05af51373fd9b4af511039fa2d96f83414aaaf261bda2e97b170fb5cce2a53e675c154c0d9681596934777e2275b381ce2e40582afe67650b13e72287ff2270abcf73bb028932836fbdecfecee0a3b894473c1bbeb6b4913a536ce4f9b13f1efff71ea313c8661dd9a4ce",
    },
    {
      testo_bit: "",
      testo:
        "315c4eeaa8b5f8bffd11155ea506b56041c6a00c8a08854dd21a4bbde54ce56801d943ba708b8a3574f40c00fff9e00fa1439fd0654327a3bfc860b92f89ee04132ecb9298f5fd2d5e4b45e40ecc3b9d59e9417df7c95bba410e9aa2ca24c5474da2f276baa3ac325918b2daada43d6712150441c2e04f6565517f317da9d3",
    },
    {
      testo_bit: "",
      testo:
        "271946f9bbb2aeadec111841a81abc300ecaa01bd8069d5cc91005e9fe4aad6e04d513e96d99de2569bc5e50eeeca709b50a8a987f4264edb6896fb537d0a716132ddc938fb0f836480e06ed0fcd6e9759f40462f9cf57f4564186a2c1778f1543efa270bda5e933421cbe88a4a52222190f471e9bd15f652b653b7071aec59a2705081ffe72651d08f822c9ed6d76e48b63ab15d0208573a7eef027",
    },
    {
      testo_bit: "",
      testo:
        "466d06ece998b7a2fb1d464fed2ced7641ddaa3cc31c9941cf110abbf409ed39598005b3399ccfafb61d0315fca0a314be138a9f32503bedac8067f03adbf3575c3b8edc9ba7f537530541ab0f9f3cd04ff50d66f1d559ba520e89a2cb2a83",
    },
    // {
    //   testo_bit: "",
    //   testo:
    //     "32510ba9babebbbefd001547a810e67149caee11d945cd7fc81a05e9f85aac650e9052ba6a8cd8257bf14d13e6f0a803b54fde9e77472dbff89d71b57bddef121336cb85ccb8f3315f4b52e301d16e9f52f904",
    // },
];
//   ottenuto bit da testo cifrato 
  for (let i = 0; i < testi.length; i++) {
    let testobi = BigInt("0x" + testi[i].testo);
    testi[i].testo_bit = testobi.toString(2);
  }


for (let i = 0; i < testi.length - 1; i+=2) { 
    let value_Xorata = "";
    let Bit_element = '';
    //   aggiunto 0 fino a che le due stringhe di bit non hanno la stessa lunghezza 
    while (testi[i].testo_bit.length > testi[i + 1].testo_bit.length) {
        testi[i + 1].testo_bit += "0";  
    }
    while (testi[i].testo_bit.length < testi[i + 1].testo_bit.length) {
        testi[i].testo_bit += "0";  
    }
    for (let j = 0; j <= testi[i].testo_bit.length; j++) {
        //   xor tra coppie di elementi 
        if (testi[i].testo_bit[j] === testi[i+1].testo_bit[j]) {
              value_Xorata += 0;
        } else {
              value_Xorata += 1;
        }
        // qua si attiava quando è a 7 essendo che j inizia da 0 e non da 1 
        if ((j+1) % 8 == 0) {
              Bit_element += value_Xorata.substring(j - 7, j+1)
        }
        //   si mette nell'array quandoj raggiunge la lunghezza della stringa 
        if (j == testi[i+1].testo_bit.length) {
            Array_XOR.push({
                Index:`primo indice ${i} + secondo indice ${i+1}` , Value:Bit_element
            });
        }
    }
}


// console.log(testi[0].testo_bit);
// console.log(testi[1].testo_bit);
// console.log(Array_XOR[0].Value);


var CipherTextxsCBC = [
  {
  C :'4ca00ff4c898d61e1edbf1800618fb2828a226d160dad07883d04e008a7897ee2e4b7465d5290d0c0e6c6822236e1daafb94ffe0c5da05d9476be028ad7c1d81',
  },
  {
  C :'5b68629feb8606f9a6667670b75b38a5b4832d0f26e1ab7da33249de7d4afc48e713ac646ace36e872ad5fb8a512428a6e21364b0c374df45503473c5242a253',
  },
]

var keyCBC = CryptoJS.enc.Hex.parse("140b41b22a29beb4061bda66b6747e14");

for (let i = 0; i < CipherTextxsCBC.length; i++) {
  var ivCBC =CipherTextxsCBC[i].C.substring(0, 32);
  ivCBC = CryptoJS.enc.Hex.parse(ivCBC);
  var encryptedCBC = CipherTextxsCBC[i].C.substring(32);
  // il testo cifrato viene convertito in modo tale che si possa usare nel algoritmo D 
  // quindi viene passato in modo tale che sia un arrayword
  var cipherParams = CryptoJS.lib.CipherParams.create({
    ciphertext: CryptoJS.enc.Hex.parse(encryptedCBC)
  });
  var decrypted = CryptoJS.AES.decrypt(cipherParams, keyCBC, {
    iv: ivCBC,
    // mette gai di base questa modalità quindi si potrebbe eliminare 
      mode: CryptoJS.mode.CBC,
  });
  console.log(decrypted.toString(CryptoJS.enc.Utf8));  
}

// CIFRATURA CON CTR 
var CipherTextxsCTR = [
  {
  C :'69dda8455c7dd4254bf353b773304eec0ec7702330098ce7f7520d1cbbb20fc388d1b0adb5054dbd7370849dbf0b88d393f252e764f1f5f7ad97ef79d59ce29f5f51eeca32eabedd9afa9329',
  },
  {
  C :'770b80259ec33beb2561358a9f2dc617e46218c0a53cbeca695ae45faa8952aa0e311bde9d4e01726d3184c34451',
  },
]
// key
var keyCTR = CryptoJS.enc.Hex.parse('36f18357be4dbd77f050515c73fcf9f2')

for (let i = 0; i < CipherTextxsCTR.length; i++) {
  // preso iv dal testo cifrato 
  var ivCTR = CipherTextxsCTR[i].C.substring(0, 32)
  ivCTR = CryptoJS.enc.Hex.parse(ivCTR)
  // preso testo cifrato e trasformato in modo che si riesca ad usare nell'decoder di Crypto.js
  var encryptedCTR = CipherTextxsCTR[i].C.substring(32)
  var cipherParams = CryptoJS.lib.CipherParams.create({
    ciphertext:CryptoJS.enc.Hex.parse(encryptedCTR)
  })
  // decifrato il messaggio (occhio al padding)
  var decryptCTR = CryptoJS.AES.decrypt(cipherParams, keyCTR, {
    iv: ivCTR,
    padding: CryptoJS.pad.NoPadding,
    mode: CryptoJS.mode.CTR,
  })
  
  console.log(decryptCTR.toString(CryptoJS.enc.Utf8));
}


// esercizio 3 attacco padding oracle


let testo_cifrato = 'b655328bfc7259b372828363c5f6af39de5997294f4cb7eb0fcad1cff664d300d913e5a88ba97eb190392ea82549c6a4d03a799d37b52f38381ad3bcf1259034'
// // console.log(testo_cifrato.length)

let iv = testo_cifrato.substring(0, 32)
iv = CryptoJS.enc.Hex.parse(iv)
let blocco1=testo_cifrato.substring(32,64)
let blocco2 = testo_cifrato.substring(64, 94)
// console.log(blocco2);

let blocco3 = testo_cifrato.substring(96, 128)
const call = async() => {
 for (let i = 0; i < 256; i++) {
  blocco2 = testo_cifrato.substring(64, 94)
  let change = i.toString(16).padStart(2, '0');

  blocco2 = blocco2 + change
  let chimata =blocco1+blocco2+blocco3
   try {
     const res = await axios.get('http://crypto-class.appspot.com/po?er='+chimata)
     if (res.status === 404) {
       console.log(`Byte che causa 404: ${i}`);
       console.log(res.data);
    }
   } catch (error) {
    // console.log(error);
   }
  }
}
call()


// Estrazione del byte originale - l'ultimo byte del blocco che stai attaccando
let byteOriginaleHex = testo_cifrato.substring(94, 96);
// si trasforma  il valore in numero , 16 sarebbe la radice e specifica quale base numeri usare 
let byteOriginale = parseInt(byteOriginaleHex, 16);
console.log(byteOriginale);

// // padding  corretto 176 qua non c'è bisogno di trasformarlo essendo che la xor prende solo numeri 
let numero_corretto = 176;

// // Il valore del padding che stai cercando di ottenere ultimo byte 
let paddingValue = 0x01;

// // Calcolo del plaintext, per fare la xor in js i valori devono essere numeri 
let plaintextByte = numero_corretto ^ byteOriginale ^ paddingValue;
// // valore esadecimale che rappresenta l'ultimo byte del blocco 2 
console.log(plaintextByte.toString(16));



// // ciclo per automatizzare 
// let lunghezza_blocco = 30
// let plaintextByte = '';
// for (let i = lunghezza_blocco; i >= 0; i -= 2) {
//   let byteOriginaleHex = blocco2.substring(i, i + 2)
//   console.log(byteOriginaleHex);
//   let byteOriginale = parseInt(byteOriginaleHex, 16)
//   let numero_corretto = 1 // inserire numero corretto 
//   let paddingValue = 0x01 // posizione di quel padding
  
//    plaintextByte += byteOriginale ^ numero_corretto ^ paddingValue
// } 

// console.log(plaintextByte);









