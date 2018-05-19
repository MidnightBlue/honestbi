module SpreeeedEngine
  module Datatables
    module Competitor
      module Product
        module PageView

          extend ActiveSupport::Concern

          class_methods do

            def datatable_cols
              [:product, :uuid, :name, :price, :quantity]
            end

            def datatable_searchable_cols
              [:uuid, :name, :price, :quantity]
            end

            def datatable_sortable_cols
              [:product, :uuid, :name, :price, :quantity]
            end

            def datatable_default_sortable_cols
              [[:id, :DESC]]
            end

          end

        end
      end
    end

  end
end