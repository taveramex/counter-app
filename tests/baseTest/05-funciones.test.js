import { getUser, getUsuarioActivo } from "../../src/baseTest/05-funciones";

describe("Test Suite 05-funciones", () => {
    test('Test getUser()', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(testUser).toEqual(user);

    });
    test('Test getUsuarioActivo("Mando")', () => {

        const nombre = 'Mando'
        const user = getUsuarioActivo(nombre);

        expect(user.username).toBe(nombre);

    });
});