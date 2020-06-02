import { turnSyncOff, turnSyncOn } from "./sync";


/* global Excel, OfficeExtension */

export async function runOperation(operation, ...rest) {
    const turnedOff = turnSyncOff();
    var result;
    try {
        await Excel.run(async context => {
            result = await operation(context, ...rest);
        });
    } catch (error) {
        console.error(error);
        if (error instanceof OfficeExtension.Error) {
            console.error(error.debugInfo);
        }
        result = false;
    }
    // we only turn sync on if it was on originally
    if (turnedOff) {
        turnSyncOn();
    }
    return result;
}

export async function runOperationHandleError(operation, errorHandler, ...rest) {
    const turnedOff = turnSyncOff();
    var result;
    try {
        await Excel.run(async context => {
            result = await operation(context, ...rest);
        });
    } catch (error) {
        result = await errorHandler(error);
    }
    if (turnedOff) {
        turnSyncOn();
    }
    return result;
}

export async function runOperationNoSync(operation, ...rest) {
    turnSyncOff();
    var result;
    try {
        await Excel.run(async context => {
            result = await operation(context, ...rest);
        });
    } catch (error) {
        console.error(error);
        if (error instanceof OfficeExtension.Error) {
            console.error(error.debugInfo);
        }
        result = false;
    }
    return result;
}

export async function runOperationHandleErrorNoSync(operation, errorHandler, ...rest) {
    turnSyncOff();
    var result;
    try {
        await Excel.run(async context => {
            result = await operation(context, ...rest);
        });
    } catch (error) {
        result = await errorHandler(error);
    }
    return result;
}