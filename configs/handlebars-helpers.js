module.exports = {
    lengthOfList: (list = []) => list.length,
    eq: (val1, val2) => val1 == val2,
    datestring: (isoString) => new Date(isoString).toLocaleDateString()
}

