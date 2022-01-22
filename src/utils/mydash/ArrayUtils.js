export function last(list) {
    if (Array.isArray(list) && list.length) {
        return list[list.length - 1];
    }
}

export function first(list) {
    if (Array.isArray(list)) {
        return list[0];
    }
}

export function rangeRight(start, end, step) {
    return range(start, end, step, true);
}

export function range(start, end, step, isRight) {
    if (start !== undefined && end === undefined ) {
        end = start;
        start = 0;
    }
    step = step !== undefined ? step : (end > 0 ? 1 : (-1));
    arr = [];
    for (let i = Math.abs(start); i < Math.abs(end); i += Math.abs(step) || 1) {
        arr.push(step === 0 ? start : (end > 0 || !i ? i : -i));
    }
    return isRight ? arr.reverse() : arr ;
}
