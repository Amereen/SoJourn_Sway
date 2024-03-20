class SessionsController < ApplicationController
  before_action :authorized, except: [:create]
  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      token = encode_token(user_id: user.id)
      render json: { token: token, user: user }
    else
      render json: { error: 'Invalid email/password combination' }, status: :unauthorized
    end
  end

  def destroy
    render json: { status: 'Logged out successfully' }, status: :ok
  end

  private

  def encode_token(payload)
    JWT.encode(payload, 'your_secret_key')
  end
end
