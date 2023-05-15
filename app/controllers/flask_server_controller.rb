require 'rest-client'

class FlaskServerController < ApplicationController
    def forward_websocket
        url = 'http://localhost:5000/socket.io'  # Update with your Flask server's URL
        response = RestClient::Request.execute(
            method: request.method,
            url: url,
            headers: { 'Content-Type': 'application/json' },
            payload: request.body.read
        )
        render body: response.body, status: response.code
    end
end