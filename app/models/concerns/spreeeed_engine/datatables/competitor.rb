module SpreeeedEngine
  module Datatables
    module Competitor

      extend ActiveSupport::Concern

      class_methods do

        def datatable_cols
          [:name, :protocol, :host, :product_path_patterns]
        end

        def datatable_searchable_cols
          [:name, :protocol, :host]
        end

        def datatable_sortable_cols
          [:name, :protocol, :host, :product_path_patterns]
        end

        def datatable_default_sortable_cols
          [[:id, :ASC]]
        end

      end

    end

  end
end