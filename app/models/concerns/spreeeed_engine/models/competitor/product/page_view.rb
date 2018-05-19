module SpreeeedEngine
  module Models
    module Competitor
      module Product
        module PageView

          extend ActiveSupport::Concern

          class_methods do
            def icon
              'fas fa-shoe-prints'
            end

            def displayable_attrs
              [:product, :uuid, :name, :price, :quantity]
            end

            def editable_attrs
              [:product, :uuid, :name, :price, :quantity]
            end

            def hidden_attrs
              []
            end

          end

        end
      end
    end

  end
end
