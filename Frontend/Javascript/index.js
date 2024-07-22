function solution(N) {
    for (let i = 1; i <= N; i++) {
        if (isPowerOfTwo(i)) {
            process.stdout.write('POWER\n');
        } else {
            process.stdout.write(`${i}\n`);
        }
    }
}

function isPowerOfTwo(num) {
    if (num <= 0) return false;
    while (num > 1) {
        if (num % 2 !== 0) return false;
        num = num / 2;
    }
    return true;
}

// Example usage
//solution(7); 
solution(16);
