class Value {
    val;

    constructor(val) {
        this.val = val;
    }

    add(num) {
        this.val = this.val + num;
        return this;
    }

    mul(num) {
        this.val = this.val * num;
        return this;
    }

    pow2() {
        this.val = this.val * this.val;
        return this;
    }

    log() {
        console.log("Value is: " + this.val);
        return this;
    }
}

let val = new Value(2);
val.log().add(2).log().mul(3).log().pow2().log();