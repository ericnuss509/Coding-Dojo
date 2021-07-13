from flask_app.config.mysqlconnection import connectToMySQL

from flask import flash

import random
from random import shuffle

class Game:
    def __init__(self,data):
        self.id = data['id']
        self.name= data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.games =[]

# R
    @classmethod
    def get_by_id(cls,data):
        query = 'SELECT * FROM games WHERE id = %(games_id)s;'
        mysql = connectToMySQL('game_db')	
        game = mysql.query_db(query,data) 
        return cls(game[0]) 

    @classmethod
    def get_all_games(cls):
        query = 'SELECT * FROM games;'
        games_from_db = connectToMySQL('game_db').query_db(query)
        all_games =[]
        for game in games_from_db:
            all_games.append(cls(game))
        return all_games

class Player:
    def __init__(self, name, role, deck):
        self.name = name
        self.role = role
        self.hand = []
        self.deck = deck
        self.bust = False

    def draw(self):
        card = self.deck.deal()
        # print(card.title)
        self.hand.append(card)
        self.score()
        return self
    
    def printhand(self):
        print(f'{self.name} has')
        for card in self.hand:
            print(f'{card.title}')
        print('*' * 80)
        return self

    def score(self):
        total = 0
        for card in self.hand:
            total += card.value
        if total > 21:
            self.bust = True
            return total
        elif total == 21:
            # print ('blackjack')
            return total
        else:
            print(total)
            return total

class Deck:
    def __init__(self):
        self.cards = self.deckbuilder()

    
    def deckbuilder(self):
        suits = ['hearts', 'diamonds', 'spades', 'clubs']
        values = {
            'ace': 1,
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9,
            '10': 10,
            'jack': 10,
            'queen': 10,
            'king': 10
        }
        thedeck = []
        for suit in suits:
            for name in values:
                thedeck.append(Cards(suit, values[name], name))
        return thedeck

    def shuffledeck(self):
        random.shuffle(self.cards)
        return self

    def showdeck(self):
        for card in self.cards:
            print(card.value)
        return self

    
    def deal(self):
        drawncard = self.cards.pop()
        # print(drawncard.title)
        return drawncard



class Cards:
    def __init__(self, suit, value, name):
        self.suit = suit
        self.name = name
        self.value = value
        self.title = self.gettitle()

    def gettitle(self):
        title = f'{self.name} of {self.suit}'
        return title

    def printcard(self):
        print(self.title)
        return self

def runtime():
    deck1 = Deck()
    deck1 = deck1.shuffledeck()
    user = Player('user', 'player', deck1)
    computer = Player('computer', 'dealer', deck1)
    user.draw().draw().printhand()
    computer.draw().draw().printhand()

    playing = True
    while(playing):
        userinput = input('hit or stay')
        if userinput == 'hit':
            user.draw()
            if user.bust == True:
                print('you bust')
                playing = False
                return flash("you bust")
        elif userinput == 'stay':
            if computer.score() < user.score() and computer.score() < 21:
                computer.draw()
                if computer.bust == True:
                    return flash('you win, computer busts')
            elif user.score() > computer.score() and user.score() < 21:
                return flash ('you win')
            elif user.score() < computer.score() and userinput == 'stay': 
                return flash('you lose')
                
    
"""
1.call print hand function /to display all the cards(how?)
2. get all the buttons working
3. how to play the game out of the terminal

"""







