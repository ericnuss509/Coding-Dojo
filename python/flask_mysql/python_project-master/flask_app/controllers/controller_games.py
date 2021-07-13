from flask import render_template, request, redirect,session,url_for
from flask_app import app

from flask import flash

from flask_app.models.model_games import Game, runtime
from flask_app.controllers import controller_users
from flask_app.controllers import controller_games

from flask_app.models.model_users import User
from flask_app.models.model_games import Player, Deck, Cards

import json

""" @app.route('/show')
def show():
    
    return render_template('show.html') """

@app.route("/view/pacman")
def view_pacman():
    return render_template('pacman.html')

@app.route('/show')
def show():
    return render_template("black_jack.html")

@app.route('/deal')
def deal():
    deck1 = Deck().shuffledeck()
    user = User.get_one_by_id(session['uuid'])
    player1 = Player(user['first_name'],'user',deck1)
    dealer1 = Player('computer','dealer',deck1)
    player1.draw().draw()
    dealer1.draw().draw()
    player1.printhand()
    game = {
        'deck': deck1,
        'player': player1,
        'dealer': dealer1
    }

    #result = runtime()
    content = {
            'game':game
    }
    return render_template("black_jack.html", **content)

@app.route('/hit')
def hit():
    user_input = "hit"
    return render_template("black_jack.html")

@app.route('/stay')
def stay():

    return render_template("black_jack.html")

""" @app.route("/view/game/<id>")
def show_game(id):
    data = {
            "games_id":id
    } 
    return render_template('pacman.html',game=Game.get_by_id(data))  """


"""   if 'uuid' not in session:
    flash("You must be logged in to continue.")
    return redirect('/')
games = Game.get_all_games() 
, games = games
"""
    
