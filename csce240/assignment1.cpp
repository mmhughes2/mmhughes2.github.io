// Copyright Mackenzie Hughes
#include <iostream>
#include <string>
#include <cmath>

int main() {
    int value;
    int base;
    char continue_input;
    int count = 0;
    int largest_value = 0;
    int largest_value_position = 0;

    do {
        std::cin >> value >> base;
        if (base < 2 || base > 9) {
            std::cout << "Base Not Accepted" << std::endl;
            return 0;
        }

        int temp_value = value;
        while (temp_value > 0) {
            int digit = temp_value % 10;
            if (digit >= base) {
                std::cout << "Invalid Digit(s) in Number" << std::endl;
                return 0;
            }
            temp_value /= 10;
        }

        int decimal_value = 0;
        int power = 0;
        while (value > 0) {
            int digit = value % 10;
            decimal_value += digit * std::pow(base, power);
            power++;
            value /= 10;
        }

        std::cout << decimal_value << std::endl;
        count++;

        if (decimal_value > largest_value) {
            largest_value = decimal_value;
            largest_value_position = count;
        }

        std::cin >> continue_input;
    } while (continue_input != 'n');

    std::string suffix = "th";
    if (largest_value_position == 1) suffix = "st";
    else if (largest_value_position == 2) suffix = "nd";
    else if (largest_value_position == 3) suffix = "rd";

    std::cout << "Of the " << count << " values input, the " << largest_value_position << suffix << " value entered (" << largest_value << ") was the largest" << std::endl;

    return 0;
}
