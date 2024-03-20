class UsersController < ApplicationController
  before_action :authorized, except: [:create]

  def create
    user = User.new(user_params)
    user.password = params["password"]
    if user.save
      token = encode_token(user_id: user.id)
      render json: { token: token, status: 'User signed up successfully' }, status: :ok
    else
      render json: { errors: user.errors.full_messages, status: 'Error in sign up' }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

  def encode_token(payload)
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end
end
