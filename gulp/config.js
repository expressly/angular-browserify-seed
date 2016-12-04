global.SRC_FOLDER = 'src';
global.BUILD_FOLDER = 'build';
global.RELEASE_FOLDER = 'release';
global.TMP_FOLDER = 'tmp';

global.config = {
    paths: {
        src: {
            index: SRC_FOLDER + '/index.html',
            assets: [SRC_FOLDER + '/assets/**/*', '!' + SRC_FOLDER + '/assets/images/**/*'],
            images: SRC_FOLDER + '/assets/images/**/*',
            scripts: SRC_FOLDER + '/modules/**/*.js',
            bowerStyles: ['bower_components/**/*.min.css', "bower_components/material-date-picker/app/styles/mbdatepicker.css"],
            styles: SRC_FOLDER + '/styles/app.scss',
            stylesGlob: SRC_FOLDER + '/styles/**/*.scss',
            templates: SRC_FOLDER + '/modules/**/*.html',
            templatesHTML: SRC_FOLDER + '/modules/**/*.html',
            templatesCompiled: TMP_FOLDER,
            livereload: [BUILD_FOLDER + '/**/*', '!' + BUILD_FOLDER + '/assets/**/*'],
            modules: './' + SRC_FOLDER + '/modules/index.js',
            config: SRC_FOLDER + '/modules/app/config.json',
            fontAwesome: 'bower_components/components-font-awesome/fonts/*.*'
        },
        dest: {
            build: {
                styles: BUILD_FOLDER,
                scripts: BUILD_FOLDER,
                images: BUILD_FOLDER + '/assets/images',
                assets: BUILD_FOLDER + '/assets',
                fonts: BUILD_FOLDER + '/assets/fonts',
                index: BUILD_FOLDER,
                server: BUILD_FOLDER
            },
            release: {
                styles: RELEASE_FOLDER,
                scripts: RELEASE_FOLDER,
                images: RELEASE_FOLDER + '/assets/images',
                assets: RELEASE_FOLDER + '/assets',
                fonts: BUILD_FOLDER + '/assets/fonts',
                index: RELEASE_FOLDER,
                server: RELEASE_FOLDER
            }
        }
    },
    filenames: {
        build: {
            styles: 'bundle.css',
            bowerStyles: 'vendor.css',
            scripts: 'bundle.js',
            config: 'config.js'
        },
        release: {
            styles: 'bundle.min.css',
            bowerStyles: 'vendor.min.css',
            scripts: 'bundle.min.js',
            config: 'config.min.js'
        },
        templates: {
            compiled: 'templates.js',
            angular: {
                moduleName: 'app.templates',
                prefix: '',
                stripPrefix: 'app/'
            }
        }
    },
    ports: {
        staticServer: 1337,
        livereloadServer: 35729
    }
};
