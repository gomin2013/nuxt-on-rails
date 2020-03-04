# == Schema Information
#
# Table name: jwt_blacklist
#
#  id  :bigint           not null, primary key
#  exp :datetime         not null
#  jti :string           not null
#
# Indexes
#
#  index_jwt_blacklist_on_jti  (jti)
#

FactoryBot.define do
  factory :jwt_blacklist do
    jti { 'MyString' }
    exp { '2020-02-07 05:55:09' }
  end
end
