class Value {
    val;

    constructor(val) {
        this.val = val;
    }

    add(num) {
        this.val = this.val + num;
    }

    mul(num) {
        this.val = this.val * num;
    }

    pow2() {
        this.val = this.val * this.val;
    }

    log() {
        console.log("Value is: " + this.val);
    }
}

let val = new Value(2);
val.log();
val.add(2);
val.log();
val.mul(3);
val.log();
val.pow2();
val.log();