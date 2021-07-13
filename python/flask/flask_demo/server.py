#----------------------#
from flask import Flask, render_template, request
app = Flask(__name__) 
#----------------------#
#renders form
@app.route("/") #route listeners (localhost:5000)
def index(): #functions
    return render_template ("index.html")

@app.route("/dashboard")
def dash():
    return render_template("dashboard.html", name="Eric Nies", age=30)

#route and fucntion to accept form info.
@app.route("/process", methods=["POST"])
def process():
    name = request.form["name"]
    email = request.form["email"]
    password = request.form["password"]
    print(request.form["fav_language"])
    return render_template("dash.html", name=name, email= email, pw=password)


# @app.route("/hello")#addin on routes
# def hello():
#     for i in range(0,10):
#         print(i)
#     return"WECLOME TO HEAVEN"#localhost:5000/hello

# @app.route("/dashboard")
# def dash():
#     return "welcome to your dashboard"

# @app.route("/test/<int:number>")
# def test(number):
#     if number < 10:
#         return "numberis less than 10."
#     else:
#         return "number is greater than 10."

# @app.route("/m/<stack_id>/<module_id>/<page_id>")
# def page_display(stack_id, module_id, page_id):
#     print(stack_id)
#     print(module_id)
#     print(page_display)
#     return "page display"



#----------------------#
if __name__ == "__main__":
    app.run(debug = True)
#----------------------#