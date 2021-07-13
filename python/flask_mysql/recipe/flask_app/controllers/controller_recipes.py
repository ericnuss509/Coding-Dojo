from types import MethodDescriptorType
from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.model_recipes import Recipe

@app.route('/details/<int:id>')
def view_details(id):
    recipe = Recipe.get_recipe_by_id(id)
    return render_template('details.html', recipe = recipe)

@app.route('/delete/<int:id>')
def delete(id):
    Recipe.destroy(id)
    return redirect('/dashboard')


@app.route('/new/recipe', methods= ['POST'])
def create_new_recipe():
    is_valid = Recipe.is_validate_recipe(request.form)
    if is_valid:
        uuid = session['uuid']
        Recipe.create_recipe(request.form, uuid)
        return redirect('/dashboard')
    else:
        return redirect('/create/recipe')



@app.route('/create/recipe')
def create_recipe():
    return render_template('create.html')



@app.route('/update/<int:id>')
def update_recipe(id):
    recipe = Recipe.get_recipe_by_id(id)
    return render_template('edit_recipe.html',recipe = recipe)


@app.route('/edit/recipe/<int:id>', methods=['POST'])
def edit_recipe(id):
    is_valid = Recipe.is_validate_recipe(request.form)
    if is_valid:
        uuid = session['uuid']
        recipe = Recipe.edit_recipe(request.form, uuid)
        return redirect('/dashboard')
    else:
        dish = request.form['id']
        return redirect(f'/update/{id}')