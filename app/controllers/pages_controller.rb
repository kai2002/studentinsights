class PagesController < ApplicationController

  skip_before_action :authenticate_educator!, only: [:about, :lets_encrypt_endpoint]  # Inherited from ApplicationController.

  def about
  end

  def no_homeroom
  end

  def no_section
  end

  def lets_encrypt_endpoint
    render text: ENV['LETS_ENCRYPT_STRING']
  end

  def spa
    @serialied_data = { spa: true }
    render 'shared/serialized_data'
  end
end
