/**
 * =============INTERSECTION TYPES===============================
 * INTERSECTION TYPE creates a new type by combining 
 * multiple existing types. The new type has all features of 
 * the existing types
 * 
 * The order you use the types doesn't matter
 * Also, when there's a specific type in both or more of the 
 *      types you're trying to generate the new type from, 
 *      You only have to make sure they all have the same data type
 * 
 * Syntax:
 *          type typeAB = typeA & typeB
 */


interface BusinessPartner {
    name: string;
    credit: number
}

interface Identity {
    id: number;
    name: string
}

interface Contact {
    email: string;
    phone: string;
}

type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;

let e:Employee = {
    name: "John Doe",
    id: 1,
    email: "john.doe@example.com",
    phone: "+233-20-200-5000"
}

let c: Customer = {
    name: "ABC.Inc",
    credit: 10_000,
    email: "sales@abc.inc.com",
    phone: "+233-25-234-0234"
}

// We've already met the union type
// '|' creates a new type from either but not both, all