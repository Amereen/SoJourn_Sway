class ApplicationController < ActionController::API
  before_action :authorized

  def authorized
    render json: { error: 'Unauthorized access' }, status: :unauthorized unless logged_in?
  end

  def logged_in?
    !!current_user
  end

  def current_user
    if auth_header.present?
      token = auth_header
      begin
        decoded_token = JWT.decode(token, 'your_secret_key')
        user_id = decoded_token[0]['user_id']
        @current_user ||= User.find_by(id: user_id)
      rescue JWT::DecodeError
        nil
      end
    end
  end

  def auth_header
    request.headers['Authorization']
  end
end
