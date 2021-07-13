from flask_app import app

from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

from flask import render_template,request,redirect,session

from flask_app.config.mysqlconnection import connectToMySQL    # import the function that will return an instance of a connection
from flask_app.models.model_users import User

from flask import flash


@app.route("/")
def index():
    if 'uuid' in session:
        return redirect('/dashboard')
    return render_template("index.html")

@app.route("/user/create",methods=['POST'])
def create_user():
    is_valid = User.validate_user(request.form)
    if is_valid:
        list_of_users = User.get_one_by_email(request.form['email'])
        if len(list_of_users)> 0:
            flash("email already exists")
            return redirect('/')
        pw_hash = bcrypt.generate_password_hash(request.form['pw'])   
        print(pw_hash)

        info = {
            "first_name": request.form['first_name'],
            "last_name": request.form['last_name'],
            "email": request.form['email'],
            "pw_hash": pw_hash
        }
        new_user = User.user_id(info)
        print(new_user)
        session['uuid'] = new_user
        return redirect('/dashboard')
    else:
        return redirect("/")

@app.route('/dashboard')
def dashboard():
    if 'uuid' not in session:
        return redirect('/')
    return render_template('success.html')

@app.route('/user/login', methods=['POST'])
def login_user():
    list_of_users = User.get_one_by_email(request.form['email'])
    if len(list_of_users) == 0:
        print("email not found)")
        flash("Invalid credentials")
        return redirect('/')
    else:
        print("email found")
        user = list_of_users[0]
        if bcrypt.check_password_hash(user['pw_hash'], request.form['pw']):
            session['uuid'] = user['id']
            return redirect('/dashboard') 

@app.route('/user/logout')
def logout_user():
    session.clear()
    return redirect('/')

