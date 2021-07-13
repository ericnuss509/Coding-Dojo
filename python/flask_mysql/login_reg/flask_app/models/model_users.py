from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re

db = 'my_site' #NEED TO CHANGE TO NAME OF DB IN MYSQL

class User:#User MUST MATCH ON LINE 4 in the CONTROLLERS import ..
    def __init__(self, data):
        self.id = data['id']

#C
    @classmethod
    def new(cls, info):
        query = "INSERT INTO users (first_name, last_name, email, password) VALUES (%(first_name)s,%(last_name)s,%(email)s,%(pw)s)"
        data = {
            "first_name" : info['first_name'],
            "last_name" : info['last_name'],
            "email" : info['email'],
            "pw" : info['pw']
        }
        new_users_id = connectToMySQL(db).query_db(query, data)

        return new_users_id
#R
    @classmethod
    def get_one_by_email(cls, email):
        query = 'SELECT * FROM users WHERE email = %(email)s;'
        data = {
            "email" : email
        }
        one_user = connectToMySQL(db).query_db(query, data)
        return one_user

    @classmethod
    def get_all(cls):
        query = 'SELECT * FROM users;'
        all_users = connectToMySQL(db).query_db(query)
        return all_users

    @classmethod
    def get_one(cls, id):
        query = 'SELECT * FROM users WHERE id = %(user_id)s;'
        data ={
            "user_id" : id
        }
        one_user = connectToMySQL(db).query_db(query, data)[0]
        return one_user
#U
    @classmethod
    def update_one():
        pass
#D
    @classmethod
    def delete_one():
        pass

    @staticmethod
    def is_validate_user(user_data):
        is_valid = True


        if len(user_data['first_name']) < 3:
            is_valid = False
            flash("first name must be greater than 3 characters")
        if len(user_data['last_name']) < 3:
            is_valid = False
            flash("last name must be greater than 3 characters")

        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
        if len(user_data['email']) < 3:
            is_valid = False
            flash("email must be greater than 3 characters")
        if not EMAIL_REGEX.match(user_data['email']):
            is_valid = False
            flash('Invalid email address.')

        if len(user_data['pw']) < 3:
            is_valid = False
            flash("pasword must be greater than 3 characters")
        if user_data['pw'] != user_data['confirm_password']:
            is_valid = False
            flash("passwords don't match.")
        return is_valid