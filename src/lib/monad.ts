class Monad {
    constructor(value) {
        this.value = value
    }

    bind(func) {
        value = func(this.value)
        return Monad(this.value)
    }
}