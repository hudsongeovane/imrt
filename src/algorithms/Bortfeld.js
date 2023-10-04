function isEqualSegment(a, b) {
    for(let i = 0; i < a.length; i++) {
        if (a[i][0] !== b[i][0] || a[i][1] !== b[i][1]) return false;
    }
    return true;
}


function max(a, b) {
    if (a > b) return a;
    return b;
}

function min(a, b) {
    if (a < b) return a;
    return b;
}

function solveRow(row) {
    var line = structuredClone(row);
    line.unshift(0);
    line.push(0);

    let p = [];
    let q = [];
    let L = 0;
    for(let i = 0; i < line.length; ++i) {
        L = max(line[i], L);
    }
    for(let k = 1; k <= L; ++k) {
        for(let i = 1; i < line.length; ++i) {
            if ((line[i-1] < k) && (k <= line[i])) p.push(i);
            if ((line[i] >= k) && (k > line[i+1])) q.push(i);
        }
    }

    let lineSegments = [];
    for(let i = 0; i < p.length; i++) {
        lineSegments.push([min(p[i], q[i])-1, max(p[i], q[i]) - 1])
    }
    return lineSegments;
}

function bortfeld(matrix) {
    let segments = [];
    let coefficients = [];

    let lineSegments = [];
    let maxS = 0;
    for(let i = 0; i < matrix.length; i++) {    
        let solved_row = solveRow(matrix[i]);
        lineSegments.push(solved_row);
        maxS = max(maxS, solved_row.length);
    }
    for(let k = 0; k < maxS; k++) {
        let currentSegment = [];
        for(let i = 0; i < matrix.length; i++) {
                let tmp = [];
                if (k < lineSegments[i].length) {
                    tmp = lineSegments[i][k];
                }
                else {
                    if (segments.length === 0) {
                        tmp = [1, 0];
                    }
                    else {
                        let idx = segments.length - 1;
                        let a = segments[idx][i][0];
                        let b = segments[idx][i][1];
                        tmp = [max(a,b), max(a,b)-1];
                    }
                }
                currentSegment.push(tmp);
        }
        let sameSegment = false;
        for(let i = segments.length - 1; i >= 0; i--) {
            if (isEqualSegment(currentSegment, segments[i])) {
                coefficients[i]++;
                sameSegment = true;
                break;
            }
        }
        if (!sameSegment) {
            segments.push(currentSegment);
            coefficients.push(1);
        }
    }
    return [coefficients, segments];
}

export default bortfeld;