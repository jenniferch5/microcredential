#Jennifer Cortez Herrera: activity 19

import math
import random


#ex 1: using built-in function math to calculate the circumference given the radius
radius = float(input("Enter a radius: "))
circumference = 2*math.pi*radius
circumference = round(circumference, 2)

area = math.floor(math.pow(radius, 2)*math.pi)
print("The circumference with radius %s is %s and the area is %s" %(radius, circumference, area))


#ex 2: randomly pick a color from a list
color = ['red','blue','green']
randomIndex = random.randint(0,2)
print(randomIndex)
print("The picked color is: %s" %(color[randomIndex]))


#ex 3: defined functions w/ no parameter nor return value
def my_function():
    print("Hello from a function")


#ex 4: defined functions w/ parameter and no return value
def name(fname):
    print("Welcome to the program: %s" %(fname))
    

#ex 5: defined functions w/ default parameter and no return value
def country(c="Norway"):
    print("I am from %s" %(c))


#ex 6: defined functions w/ parameter and return value
def sum(num1,num2):
    total = num1 + num2
    return total

def number():
    n1 = int(input("Enter number 1: "))
    n2 = int(input("Enter number 2: "))
    x = sum(n1, n2)
    print("The sum of %s and %s is %s" %(n1,n2,x))


#ex 7: boolean functions
def is_divisible(x,y):
    if x%y == 0 or y%x == 0:
        return True
    else:
        return False


#ex 8: pass statement
def filter_num():
    pass

