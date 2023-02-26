var input = [
    '10000', '-28208', '5757', '-8375', '-15181', '13297',
    '-19736', '-16663', '-73', '-27036', '18708', '-2916',
    '-29580', '11706', '3512', '-25804', '-2656', '14204',
    '-409', '-20159', '20722', '16283', '-15160', '-758',
    '4362', '18715', '-29220', '-1810', '19502', '17741',
    '-24844', '-8417', '18595', '1290', '-26414', '-26868',
    '-20743', '7097', '-24820', '29620', '-15586', '24679',
    '24135', '24933', '-12719', '12681', '-2807', '1420',
    '1589', '10489', '277', '-22844', '-9287', '7803',
    '6706', '17836', '24765', '-16083', '-13463', '17971',
    '-16690', '21340', '-2480', '18543', '1826', '12396',
    '-7743', '3643', '-3294', '22955', '11911', '-239',
    '-28348', '-27901', '-21108', '26205', '18970', '14243',
    '17343', '-5112', '-27911', '16361', '-1465', '5816',
    '13765', '13015', '6015', '-10210', '13608', '-22023',
    '-19960', '15841', '-12950', '-16239', '19031', '-5166',
    '22023', '17539', '-26594', '-5631',
].map(Number);

interface MinSum {
    peak: number;
    startIndex: number;
    endIndex: number;
    actual: number;
}

function findNextConsecutiveNegative(index: number) {
    let search: MinSum = {
        peak: 0,
        startIndex: index,
        endIndex: index,
        actual: 0,
    };

    let currentIndex = index;
    while (search.actual <= 0 && currentIndex < input.length) {
        search.actual += input[currentIndex];

        if (search.actual < search.peak) {
            search.peak = search.actual;
            search.endIndex = currentIndex;
        }

        currentIndex++;
    }

    return search;
}

function resolve() {
    let sum = 0;
    const rolls = input.shift() ?? 0;
    console.log(input);
    let minSums: MinSum[] = [];
    for (let i = 0; i < rolls; i++) {
        let item = input[i];
        if (item < 0) {
            minSums.push(
                findNextConsecutiveNegative(i)
            );
        }
    }

    console.log(minSums)
    let min = 0
    let minSearch = null;
    minSums.forEach(item => {
        if (item.peak < min) {
            min = item.peak;
            minSearch = item;
        }
    })
    console.log({ result: minSearch, min })
}


resolve();
