from flask import Flask, render_template, request
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/result', methods = ["POST"])
def result():
    name = request.form['name']
    email = request.form['email']
    fav_language = request.form['fav_language']
    comment = request.form['comment']
    return render_template("result.html", name = name, email = email, fav_language = fav_language, comment = comment)



    
if __name__=="__main__":
    app.run(debug=True) 