const { syncDB } = require("../../taks/sync-db")

describe('Pruebas en Sync-db', () => {
    test('debe de ejecutar el proceso 2 veces ', () =>{
        syncDB();
        const times= syncDB();
        //console.log('Se llamo ', times);
        expect(times).toBe(2);
    })
})