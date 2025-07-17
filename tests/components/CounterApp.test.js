describe("Primer Suite de test de CounterApp", ()=>{
    
    test("Primer test, no debe fallar", ()=>{
    if(1==0){
        throw new Error("Shiet boy, we got and error");
    }
    const message = "damn gurl";

    expect(message).toBe("damn gurl");
    });
});