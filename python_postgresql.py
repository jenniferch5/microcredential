"""
Pyton and postgreSQL exercises
Jennifer Cortez Herrera
"""

import math
import random


# ================ Activity a ================
fruitList = []
numFruits = int(input("Enter the number of fruits: "))

for countItem in range(1, numFruits + 1):
     fruitCounter = input("Fruit %s: " %(countItem))
     fruitList.append(fruitCounter)
print("User created a list of %s items and entered the values: %s" %(countItem, fruitList))


# ================ Activity b ================
num1 = int(input("Enter number 1: "))
num2 = int(input("Enter number 2: "))


while num1 == num2:
     num2 = int(input("Both numbers are the same. Enter a different number 2: "))

if num1 < num2:
     for n in range(num1, num2):
          print(n)
else: 
     for n in range(num2, num1):
          print(n)


# ================ Activity c ================
def volumeCylinder(h,r):
    total = round(math.pow(r,2)*math.pi*h, 2)
    return total

radius = int(input("Enter a radius: "))
height = int(input("Enter the height: "))
x = volumeCylinder(height, radius)
print("The volume with radius %s and height %s is %s" %(radius, height, x))
    

# ================ Activity d ================
def dice(numRolls):
    for rollNum in range(1, numRolls + 1):
        roll = random.randint(1,6)
        print("Roll %s = %s" %(rollNum, roll))
numRolls = int(input("How many times do you want to roll? "))
dice(numRolls)





    


