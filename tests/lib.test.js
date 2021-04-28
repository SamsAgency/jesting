const lib = require('../lib')

// the first test

describe('absolute', () => {
    it('should positive if input is positive', () => {
        const result = lib.absolute(1)
        expect(result).toBe(1)
    })
    
    it('should be positive if input is negative' , () => {
        const result = lib.absolute(-1)
        expect(result).toBe(1)
    })
    
    it('should be zero if input is zero' , () =>{
        const result = lib.absolute(0)
        expect(result).toBe(0)
    })
});

// testing strings
describe('greet', () => {
    it('should return greeting message', () => {
        const result = lib.greet('Jose')
        expect(result).toMatch(/Jose/)
    })
})

// testing arrays
describe('getCurrencies', () =>{
    it('should return supported currencies', () => {
        const result = lib.getCurrencies()
        expect(result).toContain('USD')
        expect(result).toContain('AUD')
        expect(result).toContain('EUR')

        // or
        expect(result).toEqual(expect.arrayContaining(['USD', 'AUD', 'EUR']))
    } )
})

// testing objects
describe('getProduct', () => {
    it('should check the object property', () => {
        const result = lib.getProduct(90)
        expect(result).toMatchObject({id : 90})

        // or
        expect(result).toHaveProperty("id", 90)
    })
})