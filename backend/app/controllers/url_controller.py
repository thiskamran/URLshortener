import string
import random
from ..models.url import URL
from ..extensions import db

def generate_short_url():
    characters = string.ascii_letters + string.digits
    short_url = ''.join(random.choice(characters) for _ in range(6))
    return short_url

def create_short_url(original_url):
    short_url = generate_short_url()
    url = URL(original_url=original_url, short_url=short_url)
    db.session.add(url)
    db.session.commit()
    return short_url

def get_original_url(short_url):
    url = URL.query.filter_by(short_url=short_url).first()
    if url:
        return url.original_url
    return None