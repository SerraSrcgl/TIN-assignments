const operations = {
    "multiply": {
        sign: "*",
        action: (a, b) => {
            return a * b;
        }
    },
    "divide": {
        sign: "/",
        action: (a, b) => {
            return a / b;
        }
    },
    "add": {
        sign: "+",
        action: (a, b) => {
            return a + b;
        }
    },
    "substract": {
        sign: "-",
        action: (a, b) => {
            return a - b;
        }
    }
};

exports.calc = function(data) {
    let result = operations[data.operator].action(parseInt(data.val1), parseInt(data.val2));
    return result;
}

exports.format = function(data, result) {
    let t =
        data.operator = operations[data.operator].sign;
    data["result"] = result;
    return data;
}