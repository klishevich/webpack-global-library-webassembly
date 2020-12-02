import {
    SciChartSurface,
    sciChartSurfaceTest,
    loadWasm
} from "./Charting/Visuals/SciChartSurface";
import { Rect } from "./Core/Rect";
import { IS_TEST_ENV } from "./constants/app";

const SuperLib = {
    SciChartSurface,
    sciChartSurfaceTest,
    loadWasm,
    Rect,
    IS_TEST_ENV
};

export default SuperLib;
