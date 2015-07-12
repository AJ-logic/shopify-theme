var config = {}

config.app                  = './app/';
config.themeName            = 'crackhouse'
config.source               = config.app + 'src/';
config.sourceAssets         = config.source + 'assets/';
config.dest                 = config.app + 'build/';
config.destAssets           = config.dest + 'assets/';
config.bowerComponents      = './bower_components/';

module.exports                    = config;