from types import MethodDescriptorType
from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.model_users import User
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)

@app.route('/user/create', methods = ['POST'])
def create_user():
    is_valid = User.is_validate_user(request.form)
    
    if is_valid:
        list_of_users = User.get_one_by_email(request.form['email'])
        if len(list_of_users) > 0:
            flash("email already exits")
            return redirect('/')
        pw_hash = bcrypt.generate_password_hash(request.form['pw'])


        info ={
            "first_name": request.form['first_name'],
            "last_name": request.form['last_name'],
            "email": request.form['email'],
            "pw": pw_hash,
        }
        new_user_id = User.new(info)
        print(new_user_id)
        session['uuid'] = new_user_id
        return redirect("/dashboard")
    else:
        return redirect('/')


@app.route('/user/logout')
def logout_user():
    session.clear()
    return redirect('/')

@app.route('/user/login', methods=['POST'])
def login_user():
    list_of_users = User.get_one_by_email(request.form['email'])
    print(list_of_users)
    if len(list_of_users) == 0:
        print("email not found")
        flash("invaid credentials")
        return redirect('/')
    else:
        print("email found")
        user = list_of_users[0]
        if bcrypt.check_password_hash(user['password'], request.form['pw']):
            session['uuid'] = user['id']
            return redirect('/dashboard')