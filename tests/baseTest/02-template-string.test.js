import { getSaludo } from "../../src/baseTest/02-template-string";

describe("Test Suit 02-template-string", ()=>{

    test("message shoud be 'Hola Mando'", ()=>{

        const name = "Mando";
        const message = getSaludo(name);

        expect(message).toBe('Hola Mando');

    });
});