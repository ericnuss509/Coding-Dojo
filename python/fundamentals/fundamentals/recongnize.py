num1 = 42
#Data type, primitive, numbers

num2 = 2.3
#Data type, primitive, numbers, float

boolean = True
#Data type, primitive, boolean

string = 'Hello World'
#Data type, primitive, string

pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives']
#Composite, List

person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}
#Composite, Dictionary

fruit = ('blueberry', 'strawberry', 'banana')
#Composite, Tuple

print(type(fruit))
#type check, and the type is a tuple

print(pizza_toppings[1])
#string

pizza_toppings.append('Mushrooms')
#add value

print(person['name'])
#access value

person['name'] = 'George'
#change value of the Key  of the dict

person['eye_color'] = 'blue'
#add Key, value, pair

print(fruit[2])
#accessing value at banana in list, returns banana

if num1 > 45:
    print("It's greater")
else:
    print("It's lower")
#Conditional using if and else and returns It's lower


if len(string) < 5:
    print("It's a short word!")
elif len(string) > 15:
    print("It's a long word!")
else:
    print("Just right!")
#conditional using if and elif returns Just right!

for x in range(5):
    print(x)
#for loop

for x in range(2,5):
    print(x)
#for loop starting at 2 , 5 is the stopping point, incrementing by 1 is implied.

for x in range(2,10,3):
    print(x)
#for loop, x is the iterator, starting at 2, stopping at 10 and iterating by 3.

x = 0
while(x < 5):
    print(x)
    x += 1
#while loop, starting at 0 stoping at 5 and incrementing by 1.

pizza_toppings.pop()
#built in function that removes the last value from a list.Returns the last value 

pizza_toppings.pop(1)

#removes the  index of 1, returns pizza_toppings = ['Pepperoni','Jalepenos', 'Cheese', 'Olives']

print(person)
#printing the person object with eye_color
person.pop('eye_color')
# deleting the eye_color from the dictionary,

print(person)
#printing person object after eye_color key value pair was popped from dictionary.

for topping in pizza_toppings:
    if topping == 'Pepperoni':
        continue
    print('After 1st if statement')
    if topping == 'Olives':
        break
    # for loop through arry that starts at index 0 the hits the print statement after pepp, if statement each time until it hits the stoping point to break out of.

def print_hello_ten_times():
    #function parameter
    for num in range(10):
        #arguement
        print('Hello')
print_hello_ten_times()
#returns hello ten times

def print_hello_x_times(x):
    #parameter
    for num in range(x):
        #arguement that is not explict 
        print('Hello')

print_hello_x_times(4)
#returns hello 4 times

def print_hello_x_or_ten_times(x = 10):
    #parameter
    for num in range(x):
        #argument
        print('Hello')
        

print_hello_x_or_ten_times()
#returns 10 times 
print_hello_x_or_ten_times(4)
#returns 4 times 


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)