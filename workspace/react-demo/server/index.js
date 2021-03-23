require('ignore-styles'); 

require('@babel/register') ({
    presets : ["@babel/preset-react", "@babel/preset-env"], 
    ignore : ["/(node_modules)/"]
})


require('./server');