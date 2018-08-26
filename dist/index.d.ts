import { InversionOfControlRegistration } from '@fluffy-spoon/autofake';
import Container from '@fluffy-spoon/inverse';
export default class InverseInversionOfControlRegistration extends InversionOfControlRegistration {
    private _container;
    constructor(_container: Container);
    registerTypeAsInstanceFromAccessor(type: new () => any, accessor: () => any): void;
    getConstructorArgumentTypesForClass<T extends new () => any>(type: T): (new () => any)[];
    resolveInstance<T>(type: new () => T): T;
}
