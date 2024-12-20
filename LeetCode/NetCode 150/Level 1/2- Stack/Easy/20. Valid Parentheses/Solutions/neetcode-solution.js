const isValid = (s) => {
    const stack = [];
    const closeToOpen = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let c of s) {
        if (closeToOpen[c]) {
            if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[c]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(c);
        }
    }
    return stack.length === 0;
}
