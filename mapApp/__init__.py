from flask import Flask
# from flask_cors import CORS
app = Flask(__name__, static_url_path='',
                  static_folder='drawyourmap/build',
                  template_folder='build')
# cors = CORS(app)

from mapApp import routes
