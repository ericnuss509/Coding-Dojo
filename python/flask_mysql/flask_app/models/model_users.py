from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

import re

class User:
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name'] #
        self.last_name = data['last_name']
        self.pw_hash = data['pw_hash']
        self.confirm_pw = data['confirm_pw']
        self.email= data['email']
        self.created_at = data['created_at']

    @classmethod
    def user_id(cls,data):
        query = "INSERT INTO users (first_name, last_name, email,pw_hash) VALUES (%(first_name)s,%(last_name)s,%(email)s,%(pw_hash)s);"
        info = {
            "first_name": data['first_name'],
            "last_name": data['last_name'],
            "email": data['email'],
            "pw_hash": data['pw_hash']
        }
        result = connectToMySQL('my_site').query_db(query,info)
        print(result)
        return result


    @classmethod
    def get_one_by_email(cls,email):
        query = 'SELECT * FROM users WHERE email = %(users_email)s;'  # SELECT queries will return the data from the database as a LIST OF DICTIONARIES
        data = {
            "users_email": email
        }
        mysql = connectToMySQL('my_site')	
        user = mysql.query_db(query,data) 
        print(f"this is user {user}")           #this returns all info of one user in a dictionary with in alist 
        return (user)

    @staticmethod
    def validate_user(user_data):
        is_valid = True # we assume this is true
        if len(user_data['first_name']) < 3:
            is_valid = False
            flash("Name must be at least 3 characters.")
        if len(user_data['last_name']) < 3:
            is_valid = False
            flash("Last name must be at least 3 characters.")

        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if len(user_data['email']) < 3:
            is_valid = False
            flash("email must be at least 3 characters.")

        if not EMAIL_REGEX.match(user_data['email']): 
            flash("Invalid email address!")
            is_valid = False

        if len(user_data['pw']) < 8:
            is_valid = False
            flash("Password must be at least 8 characters.")
        if re.search('[0-9]',user_data['pw']) is None:
            flash("Make sure your password has a number in it")
        if re.search('[A-Z]',user_data['pw']) is None: 
            flash("Make sure your password has a capital letter in it")
        if user_data['pw'] != user_data['confirm_pw']:
            is_valid = False
            flash("passwords don't match")   
        return is_valid
