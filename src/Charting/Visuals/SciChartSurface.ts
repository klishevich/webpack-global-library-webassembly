// @ts-ignore
import * as WasmTestModule from "../../_wasm/module_test1.js";

export class SciChartSurface {
    sayHello() {
        return "Hi, I am SciChartSurface class.";
    }

    sayWasmHello(wasmContext: any) {
        if (!wasmContext) {
            return "wasmContext can not be undefined!";
        }
        return `sayWasmHello ${wasmContext.lerp(1, 2, 0.5)}`;
    }
}

export function sciChartSurfaceTest() {
    return "Hi, I am sciChartSurfaceTest function.";
}

export function loadWasm() {
    (async () => {
        console.log(999);
    })();
    return new Promise((resolve, reject) => {
        // throw Error("error");
        // @ts-ignore
        new WasmTestModule().then((wasmContext: any) => {
            resolve(wasmContext);
        });
    });
}
