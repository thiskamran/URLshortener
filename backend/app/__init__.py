from flask import Flask
from .config import Config
from .extensions import db
from .routes.url_routes import url_routes
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app, resources={
        r"/*": {
            "origins": "*",
            "methods": ["GET", "POST", "OPTIONS"],
            "allow_headers": ["Content-Type"]
        }
    })

    app.config.from_object(Config)

    # Initialize extensions
    db.init_app(app)

    # Create database tables within app context
    with app.app_context():
        db.create_all()

    # Register blueprints
    app.register_blueprint(url_routes)

    return app