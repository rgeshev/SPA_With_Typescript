export function Log(target: object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        console.log(`Method ${methodName} called!`);
        const result = originalMethod.call(this, ...args);
        return result;
    }

    return descriptor;
}