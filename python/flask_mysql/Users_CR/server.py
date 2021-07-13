from flask import Flask, render_template, redirect, request
from flask.globals import request
# import the function that will return an instance of a connection
from mysqlconnection import connectToMySQL
app = Flask(__name__)


@app.route('/')
def index():
    mysql = connectToMySQL("Users_CR")
    users = mysql.query_db("SELECT * FROM users;")
    return render_template("index.html", users=users)


@app.route("/form")
def user_form():
    return render_template("form.html")


@app.route("/create_user", methods=["POST"])
def filled_out():
    query = " INSERT INTO users (first_name, last_name, email) VALUES (%(fn)s, %(ln)s, %(em)s);"
    data = {
        'fn' : request.form['fname'],
        'ln' : request.form['lname'],
        'em': request.form['ema']
    }
    db = connectToMySQL('Users_CR')
    db.query_db(query, data)
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)
