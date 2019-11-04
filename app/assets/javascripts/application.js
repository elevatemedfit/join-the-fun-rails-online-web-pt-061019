// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
initializer :set_default_precompile do |app|
  if using_sprockets4?
    raise ManifestNeededError unless ::Rails.root.join("app/assets/config/manifest.js").exist?
    app.config.assets.precompile += %w( manifest.js )
  else
    app.config.assets.precompile += [LOOSE_APP_ASSETS, /(?:\/|\\|\A)application\.(css|js)$/]
  end
end
