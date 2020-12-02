import WasmTestModule from "../../_wasm/module_test1.js";

export class SciChartSurface {
    sayHello() {
        return "Hi, I am SciChartSurface class.";
    }

    sayWasmHello(wasmContext) {
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
    // console.log(1011);
    // new WasmTestModule().then((wasmContext) => {
    //     console.log(102);
    //     console.log(103, wasmContext);
    // });
    (async () => {
        console.log(999);
    })();
    return new Promise((resolve, reject) => {
        // console.log(101);
        new WasmTestModule().then((wasmContext) => {
            // console.log(102);
            resolve(wasmContext);
        });
    });
}
