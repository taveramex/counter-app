import { retornaArreglo } from "../../src/baseTest/07-deses-arr";

describe("Test Suite for 07-deses-arr", ()=>{
    const [letras, numeros] = retornaArreglo();

    test("prueba basica de retorno string", ()=>{
        expect(letras).toEqual( expect.any(String) );
    });

    test("prueba especifica typeOf string", ()=>{
        expect(typeof letras).toBe('string');
    });

    test("prueba especifica typeOf number", ()=>{
        expect(typeof numeros).toBe('number');
    });
});