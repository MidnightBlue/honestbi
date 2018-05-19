module SpreeeedEngine
  module Models
    module Competitor
      module Product

        extend ActiveSupport::Concern

        class_methods do
          def icon
            'fas fa-gift'
          end

          def displayable_attrs
            [:competitor_id, :name, :size, :url]
          end

          def editable_attrs
            [:competitor_id, :name, :size, :url]
          end

          def hidden_attrs
            []
          end

        end

      end
    end

  end
end
