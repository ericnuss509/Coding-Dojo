from flask import Flask, render_template
from mysqlconnection import connectToMySQL    # import the function that will return an instance of a connection
app = Flask(__name__)


@app.route('/')
def index():
    mysql = connectToMySQL("first_flask")
    friends = mysql.query_db("SELECT * FROM friends;")
    print(friends)
    return render_template("index.html", all_friends = friends)

@app.route("/create_friend", methods=["POST"])
def add_friend_to_db():
    print(request.form)
    
if __name__ == "__main__":
    app.run(debug=True)