import { InversionOfControlRegistration } from '@fluffy-spoon/autofake';
import Container from '@fluffy-spoon/inverse';

import { getOrCreateArgumentsMetadataForTarget } from '@fluffy-spoon/inverse/dist/src/Utilities';

export default class InverseInversionOfControlRegistration extends InversionOfControlRegistration {
    constructor(private _container: Container) {
        super();
    }

    registerTypeAsInstanceFromAccessor(type: new () => any, accessor: () => any): void {
        this._container.whenResolvingType(type).useFactory(accessor).asSingleInstance();
    }
    
    getConstructorArgumentTypesForClass<T extends new () => any>(type: T): (new () => any)[] {
        const args = getOrCreateArgumentsMetadataForTarget(type);
        return args.toParameterArray();
    }
    
    resolveInstance<T>(type: new () => T): T {
        return this._container.resolveInstance(type);
    }
}