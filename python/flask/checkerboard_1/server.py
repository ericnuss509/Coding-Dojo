from flask import Flask,render_template
import math
app = Flask(__name__)


@app.route('/')
def home():
    return render_template('homepage.html')

@app.route('/<int:height>')
def columnChange(height):
    height = math.floor(height/2)
    return render_template('heightchange.html', height = height)

@app.route('/<int:x>/<int:y>')
def makeCheckerboardSize(x,y):
    x = math.floor(x/2)
    y = math.floor(y/2)
    return render_template('makesize.html', x = x, y = y)

@app.route('/<int:x>/<int:y>/<color1>/<color2>')
def sizeColor(x,y,color1,color2):
    x = math.floor(x/2)
    y = math.floor(y/2)

    return render_template('makeboth.html', x = x, y = y, color1= color1, color2 =color2)

if __name__=="__main__":
    app.run(debug=True) 