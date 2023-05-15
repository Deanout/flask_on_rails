from flask import Flask
from flask_socketio import SocketIO, emit


app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins='*')


@app.route('/')
def index():
    return 'Hello world'


@app.route('/socket.io')
def socketRoute():
    return 'SocketIO'


@socketio.on('connect')
def handle_connect():
    emit('message', 'Connected')


@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')


@socketio.on('message')
def handle_message(message):
    print('Received message: ' + message)
    print('Broadcasting message...')
    emit('message', message, broadcast=True)


if __name__ == '__main__':
    socketio.run(app, host='localhost', port=5000)
