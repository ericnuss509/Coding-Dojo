from flask import Flask, render_template
app = Flask(__name__)


@app.route('/play')
def page1(color = "blue,", number=3):
    return render_template('index.html', color = color, number = number)

@app.route('/play/<int:number>')
def page2(color = "blue,", number=3):
    return render_template('index2.html', color = color, number = number)

@app.route('/play/<int:number>/<color>')
def page3(color = "blue,", number=3):
    return render_template('index3.html', color = color, number = number)
    
if __name__=="__main__":
    app.run(debug=True) 