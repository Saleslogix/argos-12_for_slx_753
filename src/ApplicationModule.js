Ext.namespace("Mobile.Slx753");

Mobile.Slx753.ApplicationModule = Ext.extend(Sage.Platform.Mobile.ApplicationModule, {
    loadCustomizations: function() {
        Mobile.Slx753.ApplicationModule.superclass.loadCustomizations.apply(this, arguments);

        Ext.override(Mobile.SalesLogix.Application, {
            authenticateUser: function(credentials, options) {
                var service = this.getService()
                    .setUserName(credentials.username)
                    .setPassword(credentials.password || '');

                var request = new Sage.SData.Client.SDataSingleResourceRequest(service);
                request.setResourceKind('Users');
                request.setQueryArg(Sage.SData.Client.SDataUri.QueryArgNames.Where, String.format("UserName eq '{0}'", credentials.username));

                request.read({
                    success: this.onAuthenticateUserSuccess.createDelegate(this, [credentials, options.success, options.scope], true),
                    failure: this.onAuthenticateUserFailure.createDelegate(this, [options.failure, options.scope], true),
                    aborted: this.onAuthenticateUserFailure.createDelegate(this, [options.aborted, options.scope], true),
                    scope: this
                });
            },
            onAuthenticateUserSuccess: function(result, credentials, callback, scope) {

                var user = {
                    '$key': result['$key'],
                    '$descriptor': result['$descriptor'],
                    'UserName': result['userName']
                };

                this.context['user'] = user;

                if (credentials.remember)
                {
                    try
                    {
                        if (window.localStorage)
                            window.localStorage.setItem('credentials', Base64.encode(Ext.encode({
                                username: credentials.username,
                                password: credentials.password || ''
                            })));
                    }
                    catch (e) { }
                }

                if (callback)
                    callback.call(scope || this, {user: user});

            }
        });
    }
});
