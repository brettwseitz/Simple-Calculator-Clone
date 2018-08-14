$(document).ready(function () {
    var result = 0
    var firstNum = 0
    var operation = null
    var secondNum = '0'
    updateScreen(result)

    $('.button').on('click', function (evt) {
        var input = $(this).html()
        var foo = true
        switch (foo) {
            case input === 'C':
                result = 0
                secondNum = '0'
                $('#clear').html('AC')
                break
            case input === 'AC':
                result = 0
                secondNum = '0'
                break
            case input === '+/-':
                secondNum *= -1
                break
            case input === '.':
                secondNum += '.'
                break
            case isNumber(input) && secondNum === '0':
                secondNum = input
                $('#clear').html('C')
                break
            case isNumber(input) && secondNum != '0':
                secondNum = secondNum + input
                $('#clear').html('C')
                break
            case isOperator(input):
                firstNum = parseFloat(secondNum)
                operation = input
                secondNum = ''
                break
            case input === '%':
                secondNum = secondNum / 100
                break
            case input === '=':
                secondNum = operate(firstNum, secondNum, operation)
                operation = null
        }
        updateScreen(secondNum)
    });
});

updateScreen = function (displayValue) {
    var displayValue = displayValue.toString()
    $('.input').html(displayValue.substring(0, 10))
};

isNumber = function (value) {
    return !isNaN(value)
}

isOperator = function (value) {
    return value === '/' || value === '*' || value === '+' || value === '-'
}

operate = function (a, b, operation) {
    a = parseFloat(a)
    b = parseFloat(b)
    if (operation === '+') return a + b
    if (operation === '-') return a - b
    if (operation === '*') return a * b
    if (operation === '/') return a / b
}
