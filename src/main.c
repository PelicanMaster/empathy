#include <stdio.h>


unsigned int fibonacci(unsigned int a) {
    if (a == 0) return 0;
    if (a == 1) return 1;
    return fibonacci(a - 1) + fibonacci(a - 2);
}

int main(int argc, char** argv) {
    for(int i = 0; i < 10; i++) printf("%d -> %d\n", i, fibonacci(i));

    return 0;
}
