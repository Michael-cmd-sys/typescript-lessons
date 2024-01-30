/**
 * #############EXTEND INTERFACES IN INTERFACES###############
 */

interface Mailable {
    send(email: string): boolean
    queue(email: string): boolean
}


// Assuming you have a new interface method you want to add to the Mailable interface without breaking the codebase,

interface FutureMailable extends Mailable {
    later(email:string, after: number) : boolean
}

class Mail implements FutureMailable {
    later(email: string, after: number): boolean{
        console.log(`Send email to ${email} in ${after} ms`);
        return true;
    }

    send(email: string): boolean{
        console.log(`Sent email to ${email}`);
        return true;
    }

    queue(email: string): boolean{
        console.log(`Queue an email to ${email}`);
        return true;
    }
}


// Interfaces extending classes
class Control {
    private state: boolean;
}


interface Stateful extends Control {
    enable():void
}

class Button extends Control implements Stateful {
    enable(){}
}

class Label extends Control{}

// class Chart implements Stateful {
//     enable(){}
// }
// Generates an error because it's not a subclass or a class of the class the interface 'Stateful' is inheriting from
// Thus restricts(customizes) it's implementaion