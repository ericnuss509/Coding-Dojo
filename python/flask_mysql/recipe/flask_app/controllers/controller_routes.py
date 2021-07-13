from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.model_users import User
from flask_app.models.model_recipes import Recipe


@app.route('/')
def index():
    if 'uuid' in session:
        return redirect('/dashboard')
    return render_template('index.html')

@app.route('/dashboard')
def dashboard():
    if 'uuid' not in session:
        flash("You must be logged in to continue.")
        return redirect('/')
    recipes = Recipe.get_all_recipies()
    return render_template('dashboard.html', recipes = recipes)