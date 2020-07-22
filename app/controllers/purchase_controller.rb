class PurchaseController < ApplicationController
  before_action :set_card,:set_product
  require 'payjp'

  def set_card
    @card = Card.where(user_id: current_user.id).first
  end

  def index
    if @card.blank?
      redirect_to card_index_path
    else
      Payjp.api_key = Rails.application.credentials.payjp[:PAYJP_SECRET_KEY]
      customer = Payjp::Customer.retrieve(@card.customer_id)
      @default_card_infomation = customer.cards.retrieve(@card.card_id)
    end
  end

  def pay
    Payjp.api_key = Rails.application.credentials.payjp[:PAYJP_SECRET_KEY]
    Payjp::Charge.create(
      :amount => 50000,
      :customer => @card.customer_id,
      :currency => 'jpy',
    )
    @product_purchaser = Product.find(params[:product_id])
    @product_purchaser.update(buyer_id: current_user.id)
    redirect_to done_product_purchase_index_path
  end

  private
  def set_product
    @product = Product.find(params[:product_id])
  end
end
