module SpreeeedEngine
  module Datatables
    module Competitor
      module Product

        extend ActiveSupport::Concern

        class_methods do

          def datatable_cols
            [:competitor, :name, :size, :url]
          end

          def datatable_searchable_cols
            [:name, :size, :url]
          end

          def datatable_sortable_cols
            [:name, :size, :url]
          end

          def datatable_default_sortable_cols
            [[:id, :ASC]]
          end

        end

      end
    end

  end
end