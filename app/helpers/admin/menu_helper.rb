module Admin::MenuHelper

  def build_menu_item(menu, label, fa_icon, path)
    menu[label.to_sym] = {
        :icon_css => fa_icon,
        :path     => path,
    }
    menu
  end

  def root_menu
    menu = ActiveSupport::OrderedHash.new
    menu[t('menus.dashboard').to_sym] = {
        :icon_css => 'fas fa-tachometer-alt',
        :path     => '#'
    }
    menu = build_menu_item(menu, Competitor.model_name.human, Competitor.icon, send("#{SpreeeedEngine.namespace}_#{Competitor.model_name.plural}_path"))

    menu = build_menu_item(menu, t('menus.sign_out'), 'fas fa-sign-out-alt', destroy_user_session_path)

    menu
  end


end