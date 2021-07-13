from flask import Flask, render_template, redirect, session
app = Flask(__name__)
app.secret_key = 'code'

# @app.route('/')
# def counter():
#     session['refresh'] = 0 
#     return redirect("/thepage")

@app.route('/')
def count():
    if 'refresh' in session:
        session['refresh'] += 1
    else:
        session['refresh'] = 1
    return render_template("index.html")


@app.route('/reset', methods=['POST'])
def clearout():
    session.clear()
    return redirect('/')


if __name__=="__main__":
    app.run(debug=True)