module SpreeeedEngine
  module Models
    module Competitor

      extend ActiveSupport::Concern

      class_methods do
        def icon
          'fas fa-eye'
        end

        def displayable_attrs
          [:name, :protocol, :host, :product_path_patterns]
        end

        def editable_attrs
          [:name, :protocol, :host, :product_path_patterns]
        end

        def hidden_attrs
          []
        end

      end

    end

  end
end
