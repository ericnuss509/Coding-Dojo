from flask import Flask, render_template
app = Flask(__name__)


@app.route('/play')
def page1():
    return render_template("welcome.html")

@app.route('/play/<int:number>')
def page2(number):
    return render_template("number.html", number = number)

@app.route('/play/<int:number>/<color>')
def page3(number, color):
    return render_template("number_color.html", number = number, color = color)









if __name__=="__main__":
    app.run(debug=True)