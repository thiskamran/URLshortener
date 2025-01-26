from flask import Blueprint, request, redirect, jsonify
from ..controllers.url_controller import create_short_url, get_original_url
from sqlalchemy.exc import SQLAlchemyError

url_routes = Blueprint('url_routes', __name__)

@url_routes.route('/')
def index():
    return jsonify({'message': 'URL Shortener API'})

@url_routes.route('/shorten', methods=['POST'])
def shorten_url():
    try:
        data = request.get_json()
        if not data or 'url' not in data:
            return jsonify({'error': 'No URL provided'}), 400
            
        original_url = data['url']
        short_url = create_short_url(original_url)
        return jsonify({'short_url': short_url, 'original_url': original_url}), 201
    except SQLAlchemyError as e:
        return jsonify({'error': 'Database error occurred'}), 500
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@url_routes.route('/<short_url>')
def redirect_url(short_url):
    try:
        original_url = get_original_url(short_url)
        if original_url:
            return redirect(original_url)
        return jsonify({'error': 'URL not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500