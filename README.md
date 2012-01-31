# About

- - - - - -

### Overview
This module demonstrates how to make the Mobile Saleslogix 1.2 application compatible with SData server 7.5.3 which does not provide the function call getCurrentUser required on 7.5.4 and later during login.

### Included Examples
*  Make mobile-slx compatible with 7.5.3 server by overriding authenticateUser function at application level.

#Installation

- - - - - 

### Prerequisites
*	A web server

### Clone repository
1\.	Open a command prompt.

2\.	change to the base directory where you cloned [Argos SDK][argos-sdk], eg:

		cd \projects\sage\mobile

3\.	Execute the following commands (clone command shown with READ-ONLY URL; if you have commit rights, use the appropriate Read+Write URL).

		cd products
		git clone git://github.com/SageSalesLogix/argos-12_for_slx_753.git

    __Note:__ If you're downloading and extracting the zip file instead of using git directly, the top-level folder in your download will probably be named something like "SageSalesLogix-argos-12_for_slx_753-nnnnn". You'll want to rename this folder to argos-12_for_slx_753, and put it under your products sub-folder. You'll end up with a folder structure like this:

        ...\mobile\argos-sdk
        ...\mobile\products\argos-saleslogix
        ...\mobile\products\argos-12_for_slx_753

### Setup and run the application in "debug" mode

1\.  Make sure you're running v1.2 of both argos-sdk and argos-saleslogix
	if you've installed both from their Git repository source, using the command line checkout v1.2:
	cd ..\argos-sdk
	git checkout 1.2
	cd ..\products\argos-saleslogix
	git checkout 1.2

2\.  Follow the instructions for running the argos-saleslogix project in debug mode in that project's README.

3\.	Place index-dev-12_for_slx_753.html in the argos-saleslogix folder. In your browser, open index-dev-12_for_slx_753.html from the file system, or...navigate to the path `/mobile/products/argos-saleslogix/index-dev-12_for_slx_753.html` on your web server, eg:

		http://localhost/mobile/products/argos-saleslogix/index-dev-12_for_slx_753.html


### Building A Release Version

#### Requirements
*	Windows

#### Steps

1\.	Save this [gist](https://gist.github.com/815451) as `build-module.cmd` to the directory where you cloned [Argos SDK][argos-sdk] (The same folder where you created the Products folder).

2\.	Open a command prompt and execute the following, changing paths as appropriate, eg:

        cd \projects\sage\mobile
        build-module 12_for_slx_753

3\.	The deployed module will be in a `deploy` folder in the directory where you cloned [argos-12_for_slx_753][argos-12_for_slx_753].

4\.	Copy the entire contents of the module's deploy folder to the server folder where argos-saleslogix has been deployed (Likely a virtual directory named SlxMobile).

5\.	Add references to this module to the index.html, index.aspx and index-nocache.html files, right before the application is created and initialized.

        <script type="text/javascript">
        Ext.onReady(function() {
            var application = new Mobile.SalesLogix.Application();
            application.activate();
            application.init();
            application.run();
        });
        </script>

6\. The argos-12_for_slx_753 module will now be part of the SlxMobile client.


[argos-sdk]: https://github.com/Sage/argos-sdk "Argos SDK Source"
[argos-saleslogix]: https://github.com/SageSalesLogix/argos-saleslogix "Argos SalesLogix Source"
