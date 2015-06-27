var engineer = { name: 'Joe Sixpack', salary: 50 };

var interceptor = {
    set: function (receiver, property, value) {
        console.log(property, 'is changed to', value);
        receiver[property] = value;
    }
};

engineer = Proxy(engineer, interceptor);


// http://ariya.ofilabs.com/2013/07/es6-and-proxy.html