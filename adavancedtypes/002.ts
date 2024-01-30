/**
 * ==========TYPE GUARDS========================
 * ```typeof``` for general functions
 * ```instanceof``` for classes 
 * ```in``` for existing property of an object
 * 
 * Feeling to lazy to implement the above in code
 * Might do them later
 */


// UserDefined type guard function
// function that simply returns ```arg is aType```
class Custoomer {
    isCreditAllowed(): boolean {
        return true;
    }
}

class Supplier {
    isInShortList(): boolean {
        return true;
    }
}


type BusinessPart = Supplier | Custoomer;

 function isCustomer(partner: any): partner is Custoomer{
    return partner instanceof Custoomer
 }

//  The above type guarad can be used as follows
function signContract(partner: BusinessPart): string{
    let message: string;

    if(isCustomer(partner)){
        message = partner.isCreditAllowed()? "Sign a new contract with customer": "Credit issue";
    }else {
        message = partner.isInShortList() ? "Sign a new contract with supplier" : "Need to evaluate further";
    }

    return message;
}