// Copyright (c) 2009 by Doug Kearns <dougkearns@gmail.com>
//
// This work is licensed for reuse under an MIT license. Details are
// given in the LICENSE.txt file included with this file.


Components.utils.import("resource://gre/modules/XPCOMUtils.jsm");

function CommandLineHandler()
{
    this.wrappedJSObject = this;
}

CommandLineHandler.prototype = {

    classDescription: "Xulmus Command-line Handler",

    classID: Components.ID("{155807a6-02da-4812-981c-e910aa7eba42}"),

    contractID: "@mozilla.org/commandlinehandler/general-startup;1?type=xulmus",

    _xpcom_categories: [{
        category: "command-line-handler",
        entry: "m-xulmus"
    }],

    QueryInterface: XPCOMUtils.generateQI([Components.interfaces.nsICommandLineHandler]),

    handle: function (commandLine)
    {
        // TODO: handle remote launches differently?
        try
        {
            this.optionValue = commandLine.handleFlagWithParam("xulmus", false);
        }
        catch (e)
        {
            //"xulmus: option -xulmus requires an argument"
        }
    }
};

function NSGetModule(compMgr, fileSpec) XPCOMUtils.generateModule([CommandLineHandler]);

// vim: set fdm=marker sw=4 ts=4 et:
