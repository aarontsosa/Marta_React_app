const rewire = require("rewire")
const MartaDashboard = rewire("./MartaDashboard")
const getMartaData = MartaDashboard.__get__("getMartaData")
// @ponicode
describe("getMartaData", () => {
    test("0", () => {
        let callFunction = () => {
            getMartaData()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentWillUnmount", () => {
    let inst

    beforeEach(() => {
        inst = new MartaDashboard.default("Michael")
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillUnmount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
