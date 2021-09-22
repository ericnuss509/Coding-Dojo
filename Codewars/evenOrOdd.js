function even_or_odd(number) {
    if (Math.abs(number % 2) == 1) {
        return "Odd"
    } else if (number % 2 == 0) {
        return "Even"
    }
}