import { usContext } from "../../src/baseTest/06-deses-obj";

describe("Test Suite for 06-deses-obj", () => {
    test("check basicFunction of usContext with person Object", () => {
        // creating the person to test
        const persona = {
            nombre: 'Tony',
            edad: 45,
            clave: 'Ironman'
        };

        const userClave = usContext(persona);


        expect(userClave.nombreClave).toBe(persona.clave);

    });
});