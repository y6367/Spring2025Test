from flask import Flask, render_template

app = Flask(__name__)

@app.route('/') # Home URL, the HTML page displayed when website first loads
def home():
    return render_template('home.html')

@app.route('/about') # About page, accessed by link or by adding "/about" to home URL
def about():
    return render_template('about.html')

@app.route('/contact') # Contact page, accessed by link or by adding "/contact" to home URL
def contact():
    return render_template('contact.html')

if __name__ == "__main__":
    app.run(debug=True)