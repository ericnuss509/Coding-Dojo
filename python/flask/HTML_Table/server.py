from flask import Flask,render_template
app = Flask(__name__)


@app.route('/')
def render_lists():
    user = [
        {'first_name' : 'Eric', 'last_name' : 'Nies'},
        {'first_name' : 'Sommer', 'last_name' : 'Simonson'},
        {'first_name' : 'Mark', 'last_name' : 'Cooper'},
        {'first_name' : 'Gary', 'last_name' : 'Mckinnon'}
    ]
    return render_template("lists.html", people = user)


if __name__=="__main__":
    app.run(debug=True) 
