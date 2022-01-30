export function last(list: any): any {
    if (Array.isArray(list) && list.length) {
        return list[list.length - 1];
    }
}

export function first(list: any): any {
    if (Array.isArray(list)) {
        return list[0];
    }
}

export function rangeRight(start: number, end: number, step: number): any {
    return range(start, end, step, true);
}

// eslint-disable-next-line max-params
export function range(start: number, end: number, step: number, isRight: boolean) {
    if (start !== undefined && end === undefined ) {
        end = start;
        start = 0;
    }
    step = step !== undefined ? step : (end > 0 ? 1 : (-1));
    const arr: number[] = [];
    for (let i = Math.abs(start); i < Math.abs(end); i += Math.abs(step) || 1) {
        arr.push(step === 0 ? start : (end > 0 || !i ? i : -i));
    }
    return isRight ? arr.reverse() : arr ;
}
