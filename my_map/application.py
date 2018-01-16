import os
import sqlite3
import requests
from flask import Flask, jsonify, render_template, request, redirect, url_for
from flask_jsglue import JSGlue

# setup database connection
conn = sqlite3.connect('mashup.db')
c = conn.cursor()

app = Flask(__name__)
jsglue = JSGlue(app)

@app.route("/", methods=["GET", "POST"])
def index():
	if request.method == "GET":
	    # if not os.environ.get("API_KEY"):
	    #     raise RuntimeError("API_KEY not set")
	    return render_template("index.html")
	if request.method == "POST":
	    user_input = request.form.get("n")
	    # data = c.execute("SELECT * FROM places WHERE (admin_code1 LIKE :user_input) OR (place_name LIKE :user_input)", {'user_input': user_input,}).fetchall()
	    # print(data)
	    # conn.close()
	    # return render_template("index.html", data=data)
	    # return jsonify(data)
	    return redirect(url_for("articles"))

@app.route("/articles")
def articles():
	url = ('https://newsapi.org/v2/top-headlines?'
       'country=us&'
       'apiKey=68737df699b54c3983955eb5746d72f0')
	response = requests.get(url)
	articles = response.json()['articles']
	return jsonify(articles)

   

