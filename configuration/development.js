Ext.namespace("Configuration.development");

(function() {
    var merge = function(configuration, moduleConfiguration) {
        if (configuration)
        {
            if (configuration.modules && moduleConfiguration.modules)
                configuration.modules = configuration.modules.concat(moduleConfiguration.modules);

            if (configuration.connections && moduleConfiguration.connections)
                configuration.connections = Ext.apply(configuration.connections, moduleConfiguration.connections);
        }
    };

    merge(Configuration.development, {
        modules: [
            new Mobile.Slx753.ApplicationModule()
        ],
        connections: {
            'slx753': {
                isDefault: false,
                offline: true,
                serverName: '50.16.242.109',
                virtualDirectory: 'sdata',
                applicationName: 'slx',
                contractName: 'dynamic',
                port: 80,
                protocol: /https/i.test(window.location.protocol) ? 'https' : false,
                json: true
            }
        }
    });
})();