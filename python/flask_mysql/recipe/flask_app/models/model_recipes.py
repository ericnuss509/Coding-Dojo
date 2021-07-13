from flask_app.config.mysqlconnection import MySQLConnection, connectToMySQL
from flask import flash
import re

db = 'user_Recipes'

class Recipe:#User MUST MATCH ON LINE 4 in the CONTROLLERS import ..
    def __init__(self, data):
        self.id = data['id']

    @classmethod
    def create_recipe(cls, info, uuid):
        query = 'INSERT INTO recipes (name, description, instructions, users_id) VALUES( %(name)s , %(description)s, %(instructions)s, %(users_id)s)'
        data = {
            'name': info['name'],
            'description': info['description'],
            'instructions':info['instructions'],
            'users_id': uuid
        }
        new_recipe = connectToMySQL(db).query_db(query, data)
        return new_recipe


    @classmethod
    def get_all_recipies(cls):
        query = 'SELECT * FROM recipes;'
        all_recipes = connectToMySQL(db).query_db(query)
        return all_recipes

    @classmethod
    def get_recipe_by_id(cls, id):
        query = 'SELECT * FROM recipes WHERE id = %(id)s'
        data = {
            'id' : id
        }
        recipe = connectToMySQL(db).query_db(query, data)[0]
        return recipe


    @classmethod
    def destroy(cls, id):
        query = 'DELETE FROM recipes WHERE id = %(id)s'
        data = {
            'id': id
        }

        return connectToMySQL(db).query_db(query,data)

    @classmethod
    def edit_recipe(cls, info, uuid):
        print("+" * 50)
        query = 'UPDATE recipes SET name = %(name)s, description = %(description)s, instructions = %(instructions)s, users_id = %(users_id)s WHERE id = %(id)s '
        data = {
            'id': info['id'],
            'name': info['name'],
            'description': info['description'],
            'instructions': info['instructions'],
            'users_id': uuid
        }
        updated_recipe = connectToMySQL(db).query_db(query, data)
        
        return updated_recipe



    @staticmethod
    def is_validate_recipe(recipe_data):
        is_valid = True
        
        if len(recipe_data['name']) < 3:
            is_valid = False
            flash("Recipe name must be greater than 3 characters")
        if len(recipe_data['description']) < 3:
            is_valid = False
            flash("Recipe description must be greater than 3 characters")
        if len(recipe_data['instructions']) < 3:
            is_valid = False
            flash("Recipe instructions must be greater than 3 characters")

        return is_valid