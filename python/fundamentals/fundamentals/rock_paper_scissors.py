import random

options = ["rock", "paper", "scissors"]

#user
computer_wins = 0
user_wins = 0
played_rounds = 0
while computer_wins < 3 and user_wins < 3 and played_rounds < 5:
    user_choice = input('Choose rock, paper or scissors. ') 
    while user_choice.lower() not in options: #validates
        user_choice = input('Choose Rock, Paper or Scissors. ')
        print(f'choice: {user_choice}')
    
    #computer

    computer_choice = options[random.randint(0,2)]

    #compare

    if user_choice.lower() == computer_choice:
        print("tie")
        print(f"the score is user:{user_wins} computer:{computer_wins}")
    elif user_choice.lower() == options[0] and computer_choice ==options[2]:
        print("win")
        user_wins += 1
        print(f"the score is user:{user_wins} computer:{computer_wins}")
    elif user_choice.lower() == options[1] and computer_choice == options[0]:
        print("win")
        user_wins += 1
        print(f"the score is user:{user_wins} computer:{computer_wins}")
    elif user_choice.lower() == options[2] and computer_choice == options [1]:
        print("win")
        user_wins += 1
        print(f"the score is user:{user_wins} computer:{computer_wins}")
    else:
        print("You lost")
        computer_wins += 1
        print(f"the score is user:{user_wins} computer:{computer_wins}")
    played_rounds += 1
    print(f'Round: {played_rounds}')

if computer_wins == 3:
    print("You lost best out of 5.")
    computer_wins = 0
    user_wins = 0
    played_rounds = 0
elif user_wins == 3:
    print("You won best out of 5.")
    computer_wins = 0
    user_wins = 0
    played_rounds = 0







