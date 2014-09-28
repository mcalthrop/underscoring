var _ = require('underscore'),
    BaseObject,
    ExtendedObject,
    BaseClass,
    ExtendedClass,
    MixinClass,
    baseClassInstance,
    extendedClassInstance,
    mixinClassInstance;

BaseObject = {
    a: 1,
    baseObjectFunction: function () {
        console.log('baseObjectFunction');
    }
};

ExtendedObject = {};
_.extend(ExtendedObject, BaseObject, {
    b: 2,
    extendedObjectFunction: function () {
        console.log('extendedObjectFunction');
    }
});

BaseClass = function () {
    function baseClassPrivateFunction() {
        console.log('baseClassPrivateFunction');
    }

    this.baseClassThisFunction = function () {
        console.log('baseClassThisFunction');
    }
};
BaseClass.baseClassClassFunction = function () {
    console.log('baseClassClassFunction');
};
BaseClass.prototype.baseClassPrototypeFunction = function () {
    console.log('baseClassPrototypeFunction');
};

ExtendedClass = function () {
};
ExtendedClass.prototype.extendedClassPrototypeFunction = function () {
    console.log('extendedClassPrototypeFunction');
};
_.extend(ExtendedClass.prototype, BaseClass.prototype, {
    extendedClassFunction: function () {
        console.log('extendedClassFunction');
    }
});

MixinClass = function () {
};
MixinClass.prototype.mixinClassPrototypeFunction = function () {
    console.log('mixinClassPrototypeFunction');
};
_.extend(MixinClass.prototype, ExtendedClass.prototype, ExtendedObject, {
    mixinClassFunction: function () {
        console.log('mixinClassFunction');
    }
});

baseClassInstance = new BaseClass();

extendedClassInstance = new ExtendedClass();

mixinClassInstance = new MixinClass();

console.log('--- base object:');
console.log(BaseObject.a);
BaseObject.baseObjectFunction();
console.log('--- extended object:');
console.log(ExtendedObject.a);
console.log(ExtendedObject.b);
ExtendedObject.baseObjectFunction();
ExtendedObject.extendedObjectFunction();
console.log('--- base class:');
BaseClass.baseClassClassFunction();
baseClassInstance.baseClassThisFunction();
baseClassInstance.baseClassPrototypeFunction();
console.log('--- extended class:');
extendedClassInstance.baseClassPrototypeFunction();
extendedClassInstance.extendedClassFunction();
extendedClassInstance.extendedClassPrototypeFunction();
console.log('--- mixin class:');
console.log(mixinClassInstance.a);
console.log(mixinClassInstance.b);
mixinClassInstance.baseObjectFunction();
mixinClassInstance.extendedObjectFunction();
mixinClassInstance.baseClassPrototypeFunction();
mixinClassInstance.extendedClassFunction();
mixinClassInstance.extendedClassPrototypeFunction();
mixinClassInstance.mixinClassPrototypeFunction();
mixinClassInstance.mixinClassFunction();
