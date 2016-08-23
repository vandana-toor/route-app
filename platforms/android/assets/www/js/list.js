/**
 * various keyword lists used in the ORS application
 */
list = {
    dontUpdateRoute: ["maxSpeedInput", "viaOptimize"],
    prefNames: ['pos', 'zoom', 'layer', 'routeOpt', 'avHigh', 'avToll', 'avArea', 'wp', 'lang', 'routeLang', 'distUnit', 'version', 'avUnpaved', 'avFerry', 'value_length', 'value_height', 'value_weight', 'value_width', 'value_axleload', 'surface', 'incline', 'slopedCurb', 'hazardous', 'routeWeight', 'avSteps', 'routeOptType', 'trackType', 'smoothness', 'avFords', 'maxspeed', 'avPaved', 'avTunnel', 'optimizeVia'],
    languages: ['de', 'en', 'es', 'fr', 'it', 'nl', 'hu', 'ru', 'ua', 'cz', 'pl', 'cnsimple', 'cn'],
    routingLanguages: ['de', 'en', 'es', 'fr', 'it', 'nl', 'hu', 'ru', 'ua', 'cz', 'pl', 'cnsimple', 'cn', 'bg', 'hr', 'nl_BE', 'eo', 'fi', 'fr', 'pl', 'pt_BR', 'ro', 'se', 'dk', 'tr', 'ca', 'ja', 'no', 'vi', 'nb', 'de-rheinl', 'de-opplat', 'de-berlin', 'de-swabia', 'de-ruhrpo', 'de-at-ooe', 'de-bay'],
    distanceUnits: ['m', 'km', 'yd', 'mi'],
    distanceUnitsPreferences: ['m', 'yd'],
    //as visible in the user preferences popup
    distanceUnitsInPopup: ['m / km', 'yd / mi'],
    version: ['standardVersion', 'extendedVersion'],
    poiCategories: ['amenity', 'public_tran', 'shop', 'tourism', 'leisure', 'sport'],
    poiTypes: new Hash({
        'amenity': ['atm', 'bank', 'bureau_de_change', 'biergarten', 'bus_station', 'cafe', 'cinema', 'college', 'courthouse', 'fast_food', 'fuel', 'hospital', 'library', 'nightclub', 'parking', 'pharmacy', 'place_of_worship', 'police', 'post_box', 'post_office', 'pub', 'public_building', 'restaurant', 'school', 'taxi', 'telephone', 'theatre', 'toilets', 'townhall', 'university'],
        'public_tran': ['bus_stop', 'bus_station', 'railway_station', 'tram_stop', 'subway_entrance', 'parking'],
        'shop': ['supermarket', 'convenience', 'bakery', 'butcher', 'kiosk'],
        'tourism': ['information', 'hotel', 'motel', 'guest_house', 'hostel', 'camp_site', 'caravan_site', 'chalet', 'viewpoint'],
        'leisure': ['sports_centre', 'golf_course', 'stadium', 'track', 'pitch', 'water_park', 'marina', 'slipway', 'fishing', 'nature_reserve', 'park', 'playground', 'garden', 'ice_rink', 'miniature_golf'],
        'sport': ['9pin', '10pin', 'archery', 'athletics', 'australian_football', 'baseball', 'basketball', 'beachvolleyball', 'boules', 'bowls', 'canoe', 'chess', 'climbing', 'cricket', 'cricket_nets', 'croquet', 'cycling', 'diving', 'dog_racing', 'equestrian', 'football', 'golf', 'gymnastics', 'hockey', 'horse_racing', 'korfball', 'motor', 'orienteering', 'paddle_tennis', 'squash', 'paragliding', 'pelota', 'racquet', 'rowing', 'rugby', 'shooting', 'skating', 'skateboard', 'skiing', 'soccer', 'swimming', 'table_tennis', 'team_handball', 'tennis', 'volleyball']
    }),
    //please make sure that each category contains at least one element. all names in the hash have to be unique.
    routePreferences: new Hash({
        'car': ['car', 'Car'],
        'bicycle': ['bicycle', 'Bicycle', 'BicycleSafety', 'BicycleRoute', 'BicycleMTB', 'BicycleRacer', 'BicycleTour'],
        'pedestrian': ['pedestrian', 'Pedestrian'],
        'heavyvehicle': ['heavyvehicle', 'HeavyVehicle'],
        'wheelchair': ['wheelchair', 'Wheelchair']
    }),
    elevationProfiles: ['Bicycle', 'BicycleRacer', 'BicycleMTB', 'BicycleTour', 'Pedestrian', 'BicycleSafety', 'Wheelchair'],
    //please make sure that each category contains at least one element. all names in the hash have to be unique.
    routePreferencesTypes: new Hash({
        'heavyvehicle': ['goods', 'hgv', 'bus', 'agricultural', 'forestry', 'delivery'],
    }),
    routeDangerousGoods: ['hazmat'],
    routeWeightSettings: ['Fastest', 'Shortest', 'Recommended'],
    routeAvoidables: ['Highway', 'Tollway', 'Unpavedroads', 'Ferry', 'Steps', 'Fords', 'Pavedroads', 'Tunnel'],
    truckParams: ['value_length', 'value_height', 'value_weigth', 'value_axleload', 'value_width'],
    routePreferencesImages: new Hash({
        'car': ['img/picto-car.png'],
        'bicycle': ['img/picto-bike.png'],
        'pedestrian': ['img/picto-dude.png'],
        'heavyvehicle': ['img/picto-truck.png'],
        'wheelchair': ['img/picto-wheelchair_beta.png']
            //'wheelchair': ['img/picto-wheelchair.png']
    }),
    //please make sure that each category contains at least one element. all names in the hash have to be unique.
    wheelchairParameters: new Hash({
        'Surface': ['concrete', 'cobblestone:flattened', 'cobblestone', 'compacted', 'any'],
        'Smoothness': ['excellent', 'good', 'intermediate', 'bad', 'any'],
        'Tracktype': ['grade1', 'grade2', 'grade3', 'grade4', 'any'],
        'Incline': ['3', '6', '10', '15', '31'],
        'SlopedCurb': ['0.03', '0.06', '0.1', '0.31']
    }),
    // divs to show or hide for specific profiles
    showElements: {
        car: {
            show: ['.ORS-car', '.ORS-all'],
            hide: ['.ORS-ped', '.ORS-bike', '.ORS-hgv', '.ORS-ped-wc']
        },
        wheelchair: {
            show: ['.ORS-wc', '.ORS-all', '.ORS-ped-wc'],
            hide: ['.ORS-ped', '.ORS-bike', '.ORS-hgv', '.ORS-car']
        },
        pedestrian: {
            show: ['.ORS-ped-wc', '.ORS-ped', '.ORS-all'],
            hide: ['.ORS-wc', '.ORS-bike', '.ORS-hgv', '.ORS-car']
        },
        bicycle: {
            show: ['.ORS-bike', '.ORS-all'],
            hide: ['.ORS-wc', '.ORS-ped', '.ORS-hgv', '.ORS-car', '.ORS-ped-wc']
        },
        heavyvehicle: {
            show: ['.ORS-hgv', '.ORS-all'],
            hide: ['.ORS-wc', '.ORS-ped', '.ORS-car', '.ORS-bike', '.ORS-ped-wc']
        },
    },
    menuElements: ['ORS-routeContent', 'ORS-aaContent', 'ORS-cloudContent'],
    // waytype and surface type information
    tmc: {},
    SteepnessType: [{
        '-5': {
            text: '16%+',
            color: '#028306'
        }
    }, {
        '-4': {
            text: '10-15%',
            color: '#2AA12E'
        }
    }, {
        '-3': {
            text: '7-9%',
            color: '#53BF56'
        }
    }, {
        '-2': {
            text: '4-6%',
            color: '#7BDD7E'
        }
    }, {
        '-1': {
            text: '1-3%',
            color: '#A4FBA6'
        }
    }, {
        '0': {
            text: '0%',
            color: '#ffcc99'
        }
    }, {
        '1': {
            text: '1-3%',
            color: '#F29898 '
        }
    }, {
        '2': {
            text: '4-6%',
            color: '#E07575'
        }
    }, {
        '3': {
            text: '7-9%',
            color: '#CF5352'
        }
    }, {
        '4': {
            text: '10-15%',
            color: '#BE312F'
        }
    }, {
        '5': {
            text: '16%+',
            color: '#AD0F0C'
        }
    }],
    divSteepnessTypes: '#steepnessType',
    listSteepnessTypesContainer: '#steepnessTypeList',
    WayType: {
        0: 'Other',
        1: 'StateRoad',
        2: 'Road',
        3: 'Street',
        4: 'Path',
        5: 'Track',
        6: 'Cycleway',
        7: 'Footway',
        8: 'Steps',
        9: 'Ferry',
        10: 'Construction'
    },
    WayTypeColors: ['#7d7de5', '#7070ce', '#6464b7', '#5757a0', '#4b4b89', '#3e3e72', '#32325b', '#252544', '#19192d', '#0c0c16'],
    divWayTypes: '#wayType',
    listWayTypesContainer: '#wayTypeList',
    SurfaceType: {
        0: 'Other',
        1: 'Paved',
        2: 'Unpaved',
        3: 'Asphalt',
        4: 'Concrete',
        5: 'Cobblestone',
        6: 'Metal',
        7: 'Wood',
        8: 'CompactedGravel',
        9: 'FineGravel',
        10: 'Gravel',
        11: 'Dirt',
        12: 'Ground',
        13: 'Ice',
        14: 'Salt',
        15: 'Sand',
        16: 'Woodchips',
        17: 'Grass',
        18: 'GrassPaver'
    },
    SurfaceTypeColors: ['#45C4F9', '#37A4F5', '#339AF3', '#257AEF', '#2070EE', '#1250EA', '#0D46E9', '#0431E6', '#0431E6', '#0027E5'],
    divSurfaceTypes: '#surfaceType',
    listSurfaceTypesContainer: '#surfaceTypeList'
};
var tmcCodes = {
    'UNDEFINED': [2, 11, 12, 20, 22, 23, 28, 36, 37, 39, 40, 41, 42, 51, 52, 53, 56, 57, 61, 62, 63, 64, 70, 71, 72, 73, 74, 75, 76, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 114, 121, 122, 123, 124, 125, 131, 132, 133, 135, 136, 137, 138, 139, 140, 141, 142, 143, 200, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 274, 275, 276, 277, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 385, 387, 388, 390, 391, 392, 393, 394, 395, 396, 397, 399, 404, 405, 406, 407, 408, 409, 417, 418, 419, 420, 421, 422, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 445, 446, 447, 448, 449, 450, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 467, 471, 472, 473, 474, 475, 476, 477, 517, 519, 522, 523, 524, 525, 526, 528, 529, 530, 531, 532, 533, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 568, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 583, 584, 585, 586, 587, 588, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 671, 672, 673, 675, 676, 679, 680, 681, 702, 703, 704, 705, 706, 708, 709, 717, 718, 719, 720, 721, 722, 723, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 757, 758, 759, 760, 761, 762, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 785, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 804, 805, 806, 807, 808, 809, 810, 811, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 848, 849, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 930, 932, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1090, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1143, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1165, 1166, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1190, 1191, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1251, 1252, 1253, 1254, 1255, 1256, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328, 1329, 1330, 1331, 1332, 1333, 1334, 1335, 1336, 1337, 1338, 1339, 1340, 1345, 1346, 1351, 1352, 1353, 1354, 1355, 1356, 1357, 1358, 1359, 1360, 1361, 1362, 1364, 1365, 1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408, 1449, 1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460, 1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470, 1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479, 1480, 1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1515, 1516, 1517, 1518, 1519, 1520, 1521, 1522, 1523, 1524, 1525, 1526, 1527, 1528, 1529, 1530, 1531, 1532, 1533, 1534, 1535, 1536, 1537, 1538, 1539, 1540, 1541, 1542, 1543, 1544, 1545, 1546, 1547, 1548, 1549, 1550, 1551, 1552, 1553, 1554, 1555, 1556, 1557, 1558, 1559, 1560, 1561, 1562, 1563, 1564, 1565, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621, 1622, 1623, 1624, 1625, 1626, 1627, 1628, 1629, 1630, 1631, 1632, 1633, 1634, 1635, 1636, 1637, 1638, 1639, 1640, 1641, 1642, 1643, 1644, 1645, 1646, 1647, 1648, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1695, 1696, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1720, 1721, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1751, 1752, 1753, 1754, 1755, 1756, 1757, 1758, 1759, 1760, 1761, 1762, 1763, 1764, 1765, 1766, 1767, 1768, 1769, 1770, 1780, 1781, 1782, 1783, 1784, 1785, 1786, 1787, 1788, 1789, 1790, 1801, 1802, 1803, 1804, 1805, 1806, 1807, 1808, 1809, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1840, 1841, 1842, 1843, 1844, 1845, 1846, 1847, 1848, 1849, 1850, 1851, 1852, 1854, 1855, 1858, 1868, 1869, 1870, 1875, 1876, 1877, 1878, 1879, 1880, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1985, 1986, 1990, 1991, 1993, 1994, 1995, 1998, 1999, 2000, 2006, 2007, 2013, 2021, 2022, 2028, 2029, 2030, 2032, 2033, 2034, 2035, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047],
    'WARNING': [201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 221, 228, 235, 256, 284, 331, 416, 423, 444, 451, 466, 468, 469, 470, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 510, 518, 527, 534, 567, 569, 582, 589, 605, 716, 730, 756, 763, 784, 786, 847, 850, 929, 931, 933, 1856, 1857, 1861, 1862, 1863, 1864, 1865, 1866, 1867, 1871, 1872, 1873, 1874, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1913, 1914, 1915, 1916, 1917, 1918, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1934, 1938],
    'STATIONARY_TRAFFIC': [101, 102, 103, 104, 105, 106, 107, 129, 215, 216, 217, 218, 219, 220, 250, 251, 252, 253, 254, 255, 278, 279, 280, 281, 282, 283, 410, 411, 412, 413, 414, 415, 438, 439, 440, 441, 442, 443, 495, 498, 521, 710, 711, 712, 713, 714, 715],
    'SLOW_TRAFFIC': [1, 55, 108, 109, 110, 111, 112, 113, 115, 116, 117, 118, 119, 120, 130, 134, 222, 223, 224, 225, 226, 227, 229, 230, 231, 232, 233, 234, 383, 496, 497, 499, 724, 725, 726, 727, 728, 729],
    'NORMAL_TRAFFIC': [126, 127, 128, 801, 970, 971, 1584, 1771],
    'ROADWORKS': [701, 707, 802, 803, 812, 813, 814, 815, 816],
    'PARTIALLY_CLOSED': [403, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 511, 512, 513, 514, 515, 516, 520, 678],
    'COMPLETELY_CLOSED': [16, 24, 25, 26, 27, 401, 402, 665, 666]
};
for (var key in tmcCodes) {
    for (var i = 0; i < tmcCodes[key].length; i++) {
        if (key == 'UNDEFINED') list.tmc[tmcCodes[key][i]] = ['./img/warning_undefined.png', '#EF0013'];
        if (key == 'WARNING') list.tmc[tmcCodes[key][i]] = ['./img/warning_undefined.png', '#EF0013'];
        if (key == 'STATIONARY_TRAFFIC') list.tmc[tmcCodes[key][i]] = ['./img/warning_stationary_traffic.png', '#A7000C'];
        if (key == 'SLOW_TRAFFIC') list.tmc[tmcCodes[key][i]] = ['./img/warning_slow_traffic.png', '#FF3916'];
        if (key == 'NORMAL_TRAFFIC') list.tmc[tmcCodes[key][i]] = ['./img/warning_normal_traffic.png', '#0CB20C'];
        if (key == 'ROADWORKS') list.tmc[tmcCodes[key][i]] = ['./img/warning_roadworks.png', '#A5A5A5'];
        if (key == 'PARTIALLY_CLOSED') list.tmc[tmcCodes[key][i]] = ['./img/warning_road_part_closed.png', '#BCBCBC'];
        if (key == 'COMPLETELY_CLOSED') list.tmc[tmcCodes[key][i]] = ['./img/warning_road_closed.png', '#A5A5A5'];
    }
}