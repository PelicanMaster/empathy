#include <stdio.h>
#include <stdlib.h>

unsigned int fibonacci(unsigned int a) {
    if (a == 0) return 0;
    if (a == 1) return 1;

    return fibonacci(a - 1) + fibonacci(a - 2);
}

int main(int argc, char** argv) {
    if (argc < 2) return 1;

    int nth = atol(argv[1]);
    if (nth < 0 || nth > 45) return 1;

    for(int i = 0; i < nth; i++) {
        printf("%d -> %d\n", i, fibonacci(i));
    }

    return 0;
}
