var Visitor = require("./node");

describe('Visitor()', () => {
    let visitor;
    beforeEach(() => {
        visitor = new Visitor("Alice", 
        21, 
        "01/08/2019",
        "14h00",
        "Enquiries",
        "Thembi");
    })
    it('should define visitor', () => {
        expect(visitor).toBeDefined();
    });

})

describe('Visitor.save()', () => {
    let visitor;
    beforeEach(() => {
        visitor = new Visitor("Rea Ear", 22, "22 January 2013", "09h32", "slight fever", "nurse B")
    })
    it('save() should be defined', () => {
        expect(visitor.save()).toBeDefined()
    })
    it('save() should create a new .json file', () => {
        visitor = new Visitor("Rea Ear", 22, "22 January 2013", "09h32", "slight fever", "nurse B")
        expect(visitor.save()).toBe('File was saved');
    });
    it('should throw an error when the function is unable to create a new file ', () => {
        visitor = function () {
            throw ('Cannot save file');
        }
        expect(visitor).toThrow('Cannot save file');
    });
})

describe('Visitor.load()', () => {
    let visitor = new Visitor("Alice", 21, "01/08/2019", "14h00", "Enquiries", "Thembi")
    beforeEach(() => {
      return visitor;
    })
    
    fit('should return the file with the defined ID', () => {
        expect(visitor.load(1)).toEqual({
            fullName: "Alice",
            age: 21,
            visitDate: "01/08/2019",            
            visitTime: "14h00",            
            comments: "Enquiries",
            assistedBy: "Thembi",
        });
    })
})
