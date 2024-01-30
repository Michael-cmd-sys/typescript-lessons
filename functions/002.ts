/**\
 * Function overlaoding
 * In typescript, function overloadings allow you to establish
 * the relationship between the parameter types and result types of a function
 */

class Counter {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number) : number | number[]{
        if(target){
            let values:number[] = [];

            for(let start = this.current; start <= target; start++){
                values.push(start);
            }

            this.current = target;
            return values;
        }

        return ++this.current;
    }
}

let counter = new Counter();

console.log(counter.count());
console.log(counter.count(21));