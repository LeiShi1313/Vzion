'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'smart-table'
  ])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
    
    $ocLazyLoadProvider.config({
      debug:true,
      events:true,
    });

    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'views/dashboard/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'sbAdminApp',
                    files:[
                    'scripts/directives/header/header.js',
                    'scripts/directives/header/header-notification/header-notification.js',
                    'scripts/directives/sidebar/sidebar.js',
                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                    ]
                }),
                $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                          "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngAnimate',
                  files:['bower_components/angular-animate/angular-animate.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['bower_components/angular-cookies/angular-cookies.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngResource',
                  files:['bower_components/angular-resource/angular-resource.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngSanitize',
                  files:['bower_components/angular-sanitize/angular-sanitize.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngTouch',
                  files:['bower_components/angular-touch/angular-touch.js']
                })
            }
        }
    })
      .state('dashboard.home',{
        url:'/home',
        controller: 'MainCtrl',
        templateUrl:'views/dashboard/home.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'scripts/controllers/main.js',
              'scripts/directives/timeline/timeline.js',
              'scripts/directives/notifications/notifications.js',
              'scripts/directives/chat/chat.js',
              'scripts/directives/dashboard/stats/stats.js'
              ]
            })
          }
        }
      })
      .state('dashboard.form',{
        templateUrl:'views/form.html',
        url:'/form'
    })
      .state('dashboard.blank',{
        templateUrl:'views/pages/blank.html',
        url:'/blank'
    })
      .state('login',{
        templateUrl:'views/pages/login.html',
        url:'/login',
        controller: 'AuthCtrl',
        resolve: {
            loadMyFile:function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'ngResource',
                    files:['bower_components/angular-resource/angular-resource.js']
                }),
                    $ocLazyLoad.load({
                    name: 'sbAdminApp',
                    files: [
                        'scripts/services/token.js',
                        'scripts/services/login.js',
                        'scripts/controllers/auth.js'
                    ]
                })
            }
        }
    })
      .state('dashboard.chart',{
        templateUrl:'views/chart.html',
        url:'/chart',
        controller:'ChartCtrl',
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'chart.js',
              files:[
                'bower_components/angular-chart.js/dist/angular-chart.min.js',
                'bower_components/angular-chart.js/dist/angular-chart.css'
              ]
            }),
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:['scripts/controllers/chartContoller.js']
            })
          }
        }
    })
      .state('dashboard.table',{
        templateUrl:'views/table.html',
        url:'/table'
    })
      .state('dashboard.panels-wells',{
          templateUrl:'views/ui-elements/panels-wells.html',
          url:'/panels-wells'
      })
      .state('dashboard.buttons',{
        templateUrl:'views/ui-elements/buttons.html',
        url:'/buttons'
    })
      .state('dashboard.notifications',{
        templateUrl:'views/ui-elements/notifications.html',
        url:'/notifications'
    })
      .state('dashboard.typography',{
       templateUrl:'views/ui-elements/typography.html',
       url:'/typography'
   })
      .state('dashboard.icons',{
       templateUrl:'views/ui-elements/icons.html',
       url:'/icons'
   })
      .state('dashboard.grid',{
       templateUrl:'views/ui-elements/grid.html',
       url:'/grid'
   })
        
    .state('dashboard.masterdata_product',{
    templateUrl:'views/pages/master-data/product.html',
    url:'/masterdata/product',
    controller:'masterProductTableCtrl',
    resolve: {
        loadMyFiles: function($ocLazyLoad) {
            return $ocLazyLoad.load({
                  name:'ngResource',
                  files:['bower_components/angular-resource/angular-resource.js']
                }),
                $ocLazyLoad.load({
                    files: [
                        'scripts/services/masterProductTableService.js'
                    ],
                    serie: true
                }),
                $ocLazyLoad.load({
                    name: 'sbAdminApp',
                    files: [
                        'scripts/controllers/masterProductTable.js'
                    ],
                    serie: true
                })
        }
        
    }
   })
    .state('dashboard.masterdata_process',{
    templateUrl:'views/pages/master-data/process.html',
    url:'/masterdata/process',
    controller:'masterProcessTableCtrl',
    resolve: {
        loadMyFiles: function($ocLazyLoad) {
            return $ocLazyLoad.load({
                  name:'ngResource',
                  files:['bower_components/angular-resource/angular-resource.js']
                }),
                $ocLazyLoad.load({
                    name: 'masterProcessTableService',
                    files: [
                        'scripts/services/masterProcessTableService.js'
                    ],
                    serie: true
                }),
                $ocLazyLoad.load({
                    name: 'sbAdminApp',
                    files: [
                        'scripts/controllers/masterProcessTable.js'
                    ],
                    serie: true
                })
        }
    }
   })
    .state('dashboard.masterdata_tool',{
    templateUrl:'views/pages/master-data/tool.html',
    url:'/masterdata/tool',
    controller:'masterToolTableCtrl',
    resolve: {
        loadMyFiles: function($ocLazyLoad) {
            return $ocLazyLoad.load({
                  name:'ngResource',
                  files:['bower_components/angular-resource/angular-resource.js']
                }),
                $ocLazyLoad.load({
                    name: 'masterToolTableService',
                    files: [
                        'scripts/services/masterToolTableService.js'
                    ],
                    serie: true
                }),
                $ocLazyLoad.load({
                    name: 'sbAdminApp',
                    files: [
                        'scripts/controllers/masterToolTable.js'
                    ],
                    serie: true
                })
        }
    }
   })
    .state('dashboard.masterdata_fixture',{
    templateUrl:'views/pages/master-data/fixture.html',
    url:'/masterdata/fixture',
    controller:'masterFixtureTableCtrl',
    resolve: {
        loadMyFiles: function($ocLazyLoad) {
            return $ocLazyLoad.load({
                  name:'ngResource',
                  files:['bower_components/angular-resource/angular-resource.js']
                }),
                $ocLazyLoad.load({
                    name: 'masterFixtureTableService',
                    files: [
                        'scripts/services/masterFixtureTableService.js'
                    ],
                    serie: true
                }),
                $ocLazyLoad.load({
                    name: 'sbAdminApp',
                    files: [
                        'scripts/controllers/masterFixtureTable.js'
                    ],
                    serie: true
                })
        }
    }
   })
    .state('dashboard.masterdata_equipment',{
    templateUrl:'views/pages/master-data/equipment.html',
    url:'/masterdata/equipment',
    controller:'masterEquipmentTableCtrl',
    resolve: {
        loadMyFiles: function($ocLazyLoad) {
            return $ocLazyLoad.load({
                  name:'ngResource',
                  files:['bower_components/angular-resource/angular-resource.js']
                }),
                $ocLazyLoad.load({
                    name: 'masterEquipmentTableService',
                    files: [
                        'scripts/services/masterEquipmentTableService.js'
                    ],
                    serie: true
                }),
                $ocLazyLoad.load({
                    name: 'sbAdminApp',
                    files: [
                        'scripts/controllers/masterEquipmentTable.js'
                    ],
                    serie: true
                })
        }
    }
   })
    .state('dashboard.masterdata_characterclassification',{
    templateUrl:'views/pages/master-data/characterclassification.html',
    url:'/masterdata/characterclassification',
    controller:'masterClassTableCtrl',
    resolve: {
        loadMyFiles: function($ocLazyLoad) {
            return $ocLazyLoad.load({
                  name:'ngResource',
                  files:['bower_components/angular-resource/angular-resource.js']
                }),
                $ocLazyLoad.load({
                    name: 'masterClassTableService',
                    files: [
                        'scripts/services/masterClassTableService.js'
                    ],
                    serie: true
                }),
                $ocLazyLoad.load({
                    name: 'sbAdminApp',
                    files: [
                        'scripts/controllers/masterClassTable.js'
                    ],
                    serie: true
                })
        }
    }
   })
        
      .state('dashboard.product_ecl',{
       templateUrl:'views/pages/product/ecl.html',
       url:'/product/ecl'
   }) 
      .state('dashboard.product_bom',{
       templateUrl:'views/pages/product/bom.html',
       url:'/product/bom'
   })
        .state('dashboard.product_dfmea',{
        templateUrl:'views/pages/product/dfmea.html',
        url:'/product/dfmea',
        controller:'dfmeaTableCtrl',
        resolve: {
            loadMyFiles: function($ocLazyLoad) {
                return $ocLazyLoad.load({
                      name:'ngResource',
                      files:['bower_components/angular-resource/angular-resource.js']
                    }),
                    $ocLazyLoad.load({
                        name: 'dfmeaTableService',
                        files: [
                            'scripts/services/dfmeaTableService.js'
                        ],
                        serie: true
                    }),
                    $ocLazyLoad.load({
                        name: 'sbAdminApp',
                        files: [
                            'scripts/controllers/dfmeaTable.js'
                        ],
                        serie: true
                    })
            }
        }
   }) 
      .state('dashboard.product_characteristics',{
       templateUrl:'views/pages/product/characteristics.html',
       url:'/product/characteristics'
   }) 
      .state('dashboard.product_dvp',{
       templateUrl:'views/pages/product/dvp.html',
       url:'/product/dvp'
   })
        
      .state('dashboard.process_design',{
       templateUrl:'views/pages/process/design.html',
       url:'/process/design'
   })  
      .state('dashboard.process_pfmea',{
       templateUrl:'views/pages/process/pfmea.html',
       url:'/process/pfmea'
   })
        
      .state('dashboard.attachment_drawing',{
       templateUrl:'views/pages/attachment/drawing.html',
       url:'/attachment/drawing'
   }) 
      .state('dashboard.attachment_specification',{
       templateUrl:'views/pages/attachment/specification.html',
       url:'/attachment/specification'
   })

      .state('dashboard.change_ecn',{
       templateUrl:'views/pages/change-management/ecn.html',
       url:'/change/ecn'
   })
      .state('dashboard.change_pcn',{
       templateUrl:'views/pages/change-management/pcn.html',
       url:'/change/pcn'
   })
      .state('product',{
        templateUrl:'views/pages/product.html',
        url:'/product',
        resolve: {
            loadMyFiles: function($ocLazyLoad) {
                return $ocLazyLoad.load({
                      name:'ngResource',
                      files:['bower_components/angular-resource/angular-resource.js']
                    }),
                    $ocLazyLoad.load({
                        files: [
                            'scripts/services/masterProductTableService.js',
                            'scripts/services/token.js'
                        ]
                    }),
                    $ocLazyLoad.load({
                        name: 'sbAdminApp',
                        files: [
                            'scripts/controllers/product.js'
                        ]
                    })
            }
        }
    })
      .state('productdetail',{
        templateUrl:'views/pages/product-detail.html',
        url:'/detail',
        resolve: {
          loadMyDirectives:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
                    'scripts/controllers/product/product-detail.js',
                    'scripts/directives/product/header-product.js',
                    'scripts/directives/product/sidebar/sidebar-product.js',
                    'scripts/directives/product/topbar/topbar-product.js',
                    'scripts/directives/header/header-notification/header-notification.js',
                    'styles/button.css',
                    'styles/product.css',
              ]
            })
          }
        }
    })
      .state('productdetail.product', {
       templateUrl:'views/pages/product/characteristics.html',
       url:'/characteristics'
      })
      .state('select',{
        templateUrl:'views/pages/select.html',
        url:'/select',
        resolve: {
            loadMyFiles: function($ocLazyLoad) {
                return $ocLazyLoad.load({
                      name:'sbAdminApp',
                      files:['styles/buttons.css']
                    })
            }
        }
    })
  }]);

    
