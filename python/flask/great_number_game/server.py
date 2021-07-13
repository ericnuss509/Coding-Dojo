from flask import Flask, render_template, session, redirect, request
app = Flask(__name__)
import random
app.secret_key="stuff"

@app.route('/')
def game():
    if 'random_number' not in session:
        session['random_number'] = random.randint(1,100)
        session['result'] = "n/a"
    print(session['random_number'])
    return render_template("index.html")

@app.route('/guess', methods = ['POST'])
def guess():
    session['result'] = ""
    if request.form["guess"].isdigit():
        if int(request.form['guess']) == session['random_number']:
            session['result'] = "correct"
            session['background_color']  = "green"
        elif int(request.form['guess']) < session['random_number']:
            session['result'] = "too low"
            session['background_color']  = "red"
        elif int(request.form['guess']) > session['random_number']:
            session['result'] = "too high"
            session['background_color']  = "red"
    return redirect("/")

@app.route('/clear')
def clear_number():
    session.clear()
    return redirect('/')


if __name__=="__main__":
    app.run(debug=True)