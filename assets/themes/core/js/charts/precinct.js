// First - 
// find: 
// ^([a-z0-9]+)\t([a-z A-Z]+)\t(\d+)\t(\d+)\t(\d+)\t(\d+)\t(\d+)
// replace:
// \r%%1\1%%2\rseries: \[\{\r\tname: '\2',\r\tdata: \[\3, \4, \5, \6, \7\]
// 
// second 
// find: 
// \t([a-z A-Z]+)\t(\d+)\t(\d+)\t(\d+)\t(\d+)\t(\d+)
// replace:
// \r\}, \{\r\tname: '\1',\r\tdata: \[\2, \3, \4, \5, \6\]





%%1container1%%2
series: [{
	name: 'burglary',
	data: [911, 609, 571, 426, 155]
}, {
	name: 'assault',
	data: [186, 218, 166, 167, 95]
}, {
	name: 'gla',
	data: [897, 529, 308, 157, 59]
}, {
	name: 'grlarceny',
	data: [3872, 3333, 2749, 2100, 983]
}, {
	name: 'murder',
	data: [11, 2, 1, 1, 0]
}, {
	name: 'rape',
	data: [11, 5, 7, 5, 13]
}, {
	name: 'robbery',
	data: [869, 533, 334, 192, 102]
}, {
	name: 'total',
	data: [6757, 5229, 4136, 3048, 1407]

%%1container5%%2
series: [{
	name: 'burglary',
	data: [787, 570, 331, 236, 121]
}, {
	name: 'assault',
	data: [303, 226, 239, 136, 117]
}, {
	name: 'gla',
	data: [337, 244, 148, 97, 27]
}, {
	name: 'grlarceny',
	data: [1587, 1228, 919, 657, 562]
}, {
	name: 'murder',
	data: [10, 6, 3, 3, 0]
}, {
	name: 'rape',
	data: [12, 12, 6, 3, 11]
}, {
	name: 'robbery',
	data: [827, 515, 319, 250, 127]
}, {
	name: 'total',
	data: [3863, 2801, 1965, 1382, 965]

%%1container6%%2
series: [{
	name: 'burglary',
	data: [810, 813, 380, 294, 184]
}, {
	name: 'assault',
	data: [307, 232, 221, 140, 112]
}, {
	name: 'gla',
	data: [773, 487, 267, 165, 48]
}, {
	name: 'grlarceny',
	data: [2574, 1736, 1622, 1222, 1004]
}, {
	name: 'murder',
	data: [1, 4, 4, 1, 1]
}, {
	name: 'rape',
	data: [12, 8, 6, 8, 15]
}, {
	name: 'robbery',
	data: [861, 593, 446, 290, 156]
}, {
	name: 'total',
	data: [5338, 3873, 2946, 2120, 1520]

%%1container7%%2
series: [{
	name: 'burglary',
	data: [392, 352, 108, 185, 83]
}, {
	name: 'assault',
	data: [222, 242, 162, 121, 120]
}, {
	name: 'gla',
	data: [398, 226, 125, 129, 40]
}, {
	name: 'grlarceny',
	data: [458, 393, 283, 233, 318]
}, {
	name: 'murder',
	data: [11, 6, 2, 3, 5]
}, {
	name: 'rape',
	data: [20, 17, 15, 13, 14]
}, {
	name: 'robbery',
	data: [823, 492, 242, 209, 129]
}, {
	name: 'total',
	data: [2324, 1728, 937, 893, 709]

%%1container9%%2
series: [{
	name: 'burglary',
	data: [942, 766, 385, 316, 208]
}, {
	name: 'assault',
	data: [580, 448, 272, 198, 141]
}, {
	name: 'gla',
	data: [545, 337, 200, 151, 50]
}, {
	name: 'grlarceny',
	data: [1704, 1440, 1239, 738, 750]
}, {
	name: 'murder',
	data: [17, 4, 4, 2, 1]
}, {
	name: 'rape',
	data: [38, 22, 17, 12, 13]
}, {
	name: 'robbery',
	data: [1000, 642, 424, 246, 186]
}, {
	name: 'total',
	data: [4826, 3659, 2541, 1663, 1349]

%%1container10%%2
series: [{
	name: 'burglary',
	data: [639, 439, 298, 108, 119]
}, {
	name: 'assault',
	data: [249, 253, 197, 103, 94]
}, {
	name: 'gla',
	data: [512, 449, 312, 127, 46]
}, {
	name: 'grlarceny',
	data: [828, 766, 576, 447, 635]
}, {
	name: 'murder',
	data: [8, 6, 4, 3, 3]
}, {
	name: 'rape',
	data: [27, 19, 12, 5, 13]
}, {
	name: 'robbery',
	data: [617, 496, 272, 135, 138]
}, {
	name: 'total',
	data: [2880, 2428, 1671, 928, 1048]

%%1container13%%2
series: [{
	name: 'burglary',
	data: [1649, 1139, 692, 552, 245]
}, {
	name: 'assault',
	data: [303, 248, 205, 177, 126]
}, {
	name: 'gla',
	data: [1286, 701, 444, 216, 42]
}, {
	name: 'grlarceny',
	data: [2765, 2184, 1878, 1753, 1419]
}, {
	name: 'murder',
	data: [6, 7, 2, 2, 2]
}, {
	name: 'rape',
	data: [21, 17, 7, 10, 17]
}, {
	name: 'robbery',
	data: [1050, 691, 433, 308, 189]
}, {
	name: 'total',
	data: [7080, 4987, 3661, 3018, 2040]

%%1container14%%2
series: [{
	name: 'burglary',
	data: [2687, 1893, 1020, 876, 327]
}, {
	name: 'assault',
	data: [670, 470, 397, 318, 178]
}, {
	name: 'gla',
	data: [356, 253, 188, 103, 26]
}, {
	name: 'grlarceny',
	data: [9365, 6315, 5133, 4245, 2174]
}, {
	name: 'murder',
	data: [11, 4, 3, 4, 2]
}, {
	name: 'rape',
	data: [41, 39, 15, 12, 15]
}, {
	name: 'robbery',
	data: [2520, 1329, 881, 528, 177]
}, {
	name: 'total',
	data: [15650, 10303, 7637, 6086, 2899]

%%1container17%%2
series: [{
	name: 'burglary',
	data: [1230, 940, 548, 265, 96]
}, {
	name: 'assault',
	data: [161, 151, 79, 103, 53]
}, {
	name: 'gla',
	data: [639, 408, 203, 111, 21]
}, {
	name: 'grlarceny',
	data: [2287, 2164, 1490, 1312, 703]
}, {
	name: 'murder',
	data: [0, 0, 0, 0, 0]
}, {
	name: 'rape',
	data: [14, 11, 7, 8, 10]
}, {
	name: 'robbery',
	data: [619, 309, 247, 149, 63]
}, {
	name: 'total',
	data: [4950, 3983, 2574, 1948, 946]

%%1container18%%2
series: [{
	name: 'burglary',
	data: [2161, 1647, 993, 462, 185]
}, {
	name: 'assault',
	data: [496, 366, 343, 251, 112]
}, {
	name: 'gla',
	data: [511, 377, 331, 201, 28]
}, {
	name: 'grlarceny',
	data: [7683, 5288, 4242, 3966, 1754]
}, {
	name: 'murder',
	data: [11, 7, 3, 5, 0]
}, {
	name: 'rape',
	data: [26, 18, 22, 17, 11]
}, {
	name: 'robbery',
	data: [1388, 841, 595, 394, 137]
}, {
	name: 'total',
	data: [12276, 8544, 6529, 5296, 2227]

%%1container19%%2
series: [{
	name: 'burglary',
	data: [3019, 2028, 1028, 701, 251]
}, {
	name: 'assault',
	data: [295, 275, 185, 127, 108]
}, {
	name: 'gla',
	data: [3457, 1996, 997, 320, 83]
}, {
	name: 'grlarceny',
	data: [3792, 2807, 2167, 2208, 1238]
}, {
	name: 'murder',
	data: [5, 1, 6, 1, 3]
}, {
	name: 'rape',
	data: [30, 18, 17, 9, 15]
}, {
	name: 'robbery',
	data: [1378, 884, 459, 359, 137]
}, {
	name: 'total',
	data: [11976, 8009, 4859, 3725, 1835]

%%1container20%%2
series: [{
	name: 'burglary',
	data: [921, 573, 324, 162, 74]
}, {
	name: 'assault',
	data: [99, 151, 95, 112, 49]
}, {
	name: 'gla',
	data: [1153, 648, 393, 160, 19]
}, {
	name: 'grlarceny',
	data: [1798, 1316, 813, 877, 635]
}, {
	name: 'murder',
	data: [1, 2, 3, 1, 0]
}, {
	name: 'rape',
	data: [20, 13, 17, 7, 11]
}, {
	name: 'robbery',
	data: [610, 420, 283, 174, 77]
}, {
	name: 'total',
	data: [4602, 3123, 1928, 1493, 865]

%%1container22%%2
series: [{
	name: 'burglary',
	data: [34, 4, 5, 7, 1]
}, {
	name: 'assault',
	data: [37, 19, 21, 10, 10]
}, {
	name: 'gla',
	data: [11, 3, 0, 0, 0]
}, {
	name: 'grlarceny',
	data: [176, 90, 76, 69, 70]
}, {
	name: 'murder',
	data: [2, 1, 1, 1, 0]
}, {
	name: 'rape',
	data: [11, 7, 4, 3, 2]
}, {
	name: 'robbery',
	data: [204, 146, 80, 37, 18]
}, {
	name: 'total',
	data: [475, 270, 187, 127, 101]

%%1container23%%2
series: [{
	name: 'burglary',
	data: [489, 431, 362, 190, 95]
}, {
	name: 'assault',
	data: [579, 585, 478, 329, 243]
}, {
	name: 'gla',
	data: [410, 261, 156, 134, 32]
}, {
	name: 'grlarceny',
	data: [567, 291, 300, 249, 263]
}, {
	name: 'murder',
	data: [27, 23, 15, 9, 5]
}, {
	name: 'rape',
	data: [64, 51, 37, 31, 28]
}, {
	name: 'robbery',
	data: [933, 704, 479, 379, 209]
}, {
	name: 'total',
	data: [3069, 2346, 1827, 1321, 875]

%%1container24%%2
series: [{
	name: 'burglary',
	data: [1071, 694, 419, 251, 89]
}, {
	name: 'assault',
	data: [460, 413, 271, 181, 126]
}, {
	name: 'gla',
	data: [990, 551, 356, 193, 43]
}, {
	name: 'grlarceny',
	data: [1126, 733, 523, 522, 451]
}, {
	name: 'murder',
	data: [23, 4, 2, 3, 5]
}, {
	name: 'rape',
	data: [35, 31, 17, 12, 12]
}, {
	name: 'robbery',
	data: [889, 644, 430, 341, 187]
}, {
	name: 'total',
	data: [4594, 3070, 2018, 1503, 913]

%%1container25%%2
series: [{
	name: 'burglary',
	data: [540, 464, 286, 172, 118]
}, {
	name: 'assault',
	data: [670, 500, 342, 296, 227]
}, {
	name: 'gla',
	data: [342, 193, 111, 110, 35]
}, {
	name: 'grlarceny',
	data: [387, 356, 277, 165, 243]
}, {
	name: 'murder',
	data: [37, 23, 6, 7, 9]
}, {
	name: 'rape',
	data: [41, 44, 41, 27, 23]
}, {
	name: 'robbery',
	data: [925, 668, 399, 275, 231]
}, {
	name: 'total',
	data: [2942, 2248, 1462, 1052, 886]

%%1container26%%2
series: [{
	name: 'burglary',
	data: [624, 448, 271, 124, 57]
}, {
	name: 'assault',
	data: [290, 268, 198, 132, 100]
}, {
	name: 'gla',
	data: [360, 188, 114, 133, 27]
}, {
	name: 'grlarceny',
	data: [663, 496, 386, 326, 274]
}, {
	name: 'murder',
	data: [14, 4, 3, 1, 2]
}, {
	name: 'rape',
	data: [26, 25, 16, 9, 7]
}, {
	name: 'robbery',
	data: [772, 523, 339, 220, 155]
}, {
	name: 'total',
	data: [2749, 1952, 1327, 945, 622]

%%1container28%%2
series: [{
	name: 'burglary',
	data: [877, 627, 291, 141, 127]
}, {
	name: 'assault',
	data: [724, 671, 439, 282, 214]
}, {
	name: 'gla',
	data: [151, 125, 75, 112, 16]
}, {
	name: 'grlarceny',
	data: [483, 352, 248, 155, 313]
}, {
	name: 'murder',
	data: [35, 30, 8, 7, 6]
}, {
	name: 'rape',
	data: [44, 50, 28, 21, 18]
}, {
	name: 'robbery',
	data: [892, 602, 410, 244, 224]
}, {
	name: 'total',
	data: [3206, 2457, 1499, 962, 918]

%%1container30%%2
series: [{
	name: 'burglary',
	data: [785, 567, 391, 209, 135]
}, {
	name: 'assault',
	data: [680, 578, 416, 380, 189]
}, {
	name: 'gla',
	data: [323, 194, 134, 126, 25]
}, {
	name: 'grlarceny',
	data: [348, 263, 171, 163, 179]
}, {
	name: 'murder',
	data: [56, 37, 13, 11, 2]
}, {
	name: 'rape',
	data: [45, 37, 27, 28, 21]
}, {
	name: 'robbery',
	data: [715, 571, 466, 290, 246]
}, {
	name: 'total',
	data: [2952, 2247, 1618, 1207, 797]

%%1container32%%2
series: [{
	name: 'burglary',
	data: [974, 666, 388, 243, 152]
}, {
	name: 'assault',
	data: [968, 880, 666, 474, 322]
}, {
	name: 'gla',
	data: [258, 199, 138, 148, 52]
}, {
	name: 'grlarceny',
	data: [432, 326, 264, 207, 301]
}, {
	name: 'murder',
	data: [56, 30, 6, 22, 10]
}, {
	name: 'rape',
	data: [89, 67, 42, 33, 27]
}, {
	name: 'robbery',
	data: [958, 850, 568, 435, 244]
}, {
	name: 'total',
	data: [3735, 3018, 2072, 1562, 1108]

%%1container33%%2
series: [{
	name: 'burglary',
	data: [186, 556, 366, 199, 129]
}, {
	name: 'assault',
	data: [155, 371, 379, 315, 182]
}, {
	name: 'gla',
	data: [133, 415, 283, 194, 61]
}, {
	name: 'grlarceny',
	data: [99, 370, 269, 199, 248]
}, {
	name: 'murder',
	data: [0, 22, 6, 8, 7]
}, {
	name: 'rape',
	data: [16, 44, 35, 19, 26]
}, {
	name: 'robbery',
	data: [142, 506, 327, 273, 230]
}, {
	name: 'total',
	data: [731, 2284, 1665, 1207, 883]

%%1container34%%2
series: [{
	name: 'burglary',
	data: [1921, 1183, 748, 419, 275]
}, {
	name: 'assault',
	data: [839, 425, 334, 273, 237]
}, {
	name: 'gla',
	data: [1830, 854, 386, 367, 89]
}, {
	name: 'grlarceny',
	data: [1184, 546, 330, 290, 376]
}, {
	name: 'murder',
	data: [50, 18, 9, 7, 8]
}, {
	name: 'rape',
	data: [89, 45, 34, 27, 18]
}, {
	name: 'robbery',
	data: [1312, 599, 363, 316, 287]
}, {
	name: 'total',
	data: [7225, 3670, 2204, 1699, 1290]

%%1container40%%2
series: [{
	name: 'burglary',
	data: [1364, 1020, 530, 317, 241]
}, {
	name: 'assault',
	data: [1082, 845, 673, 484, 455]
}, {
	name: 'gla',
	data: [653, 446, 270, 293, 131]
}, {
	name: 'grlarceny',
	data: [766, 612, 451, 376, 412]
}, {
	name: 'murder',
	data: [70, 27, 15, 27, 21]
}, {
	name: 'rape',
	data: [80, 75, 60, 46, 23]
}, {
	name: 'robbery',
	data: [1908, 1116, 793, 577, 397]
}, {
	name: 'total',
	data: [5923, 4141, 2792, 2120, 1680]

%%1container41%%2
series: [{
	name: 'burglary',
	data: [1055, 711, 279, 224, 207]
}, {
	name: 'assault',
	data: [512, 494, 801, 548, 432]
}, {
	name: 'gla',
	data: [437, 262, 142, 181, 93]
}, {
	name: 'grlarceny',
	data: [446, 296, 179, 175, 297]
}, {
	name: 'murder',
	data: [42, 18, 8, 12, 5]
}, {
	name: 'rape',
	data: [32, 37, 26, 18, 18]
}, {
	name: 'robbery',
	data: [858, 602, 314, 239, 300]
}, {
	name: 'total',
	data: [3382, 2420, 1749, 1397, 1352]

%%1container42%%2
series: [{
	name: 'burglary',
	data: [1100, 791, 443, 355, 178]
}, {
	name: 'assault',
	data: [961, 802, 526, 439, 315]
}, {
	name: 'gla',
	data: [475, 334, 221, 239, 140]
}, {
	name: 'grlarceny',
	data: [363, 324, 210, 211, 249]
}, {
	name: 'murder',
	data: [37, 32, 12, 18, 10]
}, {
	name: 'rape',
	data: [76, 65, 52, 44, 28]
}, {
	name: 'robbery',
	data: [1293, 946, 572, 339, 325]
}, {
	name: 'total',
	data: [4305, 3294, 2036, 1645, 1245]

%%1container43%%2
series: [{
	name: 'burglary',
	data: [1944, 1440, 741, 734, 387]
}, {
	name: 'assault',
	data: [950, 877, 742, 605, 541]
}, {
	name: 'gla',
	data: [2052, 1420, 866, 779, 285]
}, {
	name: 'grlarceny',
	data: [790, 706, 500, 536, 601]
}, {
	name: 'murder',
	data: [69, 35, 13, 14, 19]
}, {
	name: 'rape',
	data: [69, 86, 72, 64, 21]
}, {
	name: 'robbery',
	data: [2057, 1473, 933, 594, 534]
}, {
	name: 'total',
	data: [7931, 6037, 3867, 3326, 2388]

%%1container44%%2
series: [{
	name: 'burglary',
	data: [2137, 1672, 844, 515, 342]
}, {
	name: 'assault',
	data: [1361, 1251, 780, 677, 557]
}, {
	name: 'gla',
	data: [1279, 950, 519, 472, 201]
}, {
	name: 'grlarceny',
	data: [802, 655, 447, 431, 446]
}, {
	name: 'murder',
	data: [69, 44, 18, 31, 19]
}, {
	name: 'rape',
	data: [99, 121, 82, 63, 35]
}, {
	name: 'robbery',
	data: [2044, 1487, 970, 702, 473]
}, {
	name: 'total',
	data: [7791, 6180, 3660, 2891, 2073]

%%1container45%%2
series: [{
	name: 'burglary',
	data: [803, 516, 387, 370, 286]
}, {
	name: 'assault',
	data: [231, 242, 238, 183, 162]
}, {
	name: 'gla',
	data: [2185, 1379, 1089, 629, 193]
}, {
	name: 'grlarceny',
	data: [415, 398, 412, 472, 408]
}, {
	name: 'murder',
	data: [17, 12, 4, 5, 6]
}, {
	name: 'rape',
	data: [22, 36, 29, 22, 13]
}, {
	name: 'robbery',
	data: [457, 416, 318, 212, 214]
}, {
	name: 'total',
	data: [4130, 2999, 2477, 1893, 1282]

%%1container46%%2
series: [{
	name: 'burglary',
	data: [2365, 1857, 1022, 619, 247]
}, {
	name: 'assault',
	data: [1036, 1085, 681, 654, 401]
}, {
	name: 'gla',
	data: [875, 588, 412, 427, 126]
}, {
	name: 'grlarceny',
	data: [961, 646, 451, 422, 383]
}, {
	name: 'murder',
	data: [64, 43, 21, 17, 20]
}, {
	name: 'rape',
	data: [82, 100, 87, 63, 31]
}, {
	name: 'robbery',
	data: [2132, 1591, 870, 548, 406]
}, {
	name: 'total',
	data: [7515, 5910, 3544, 2750, 1614]

%%1container47%%2
series: [{
	name: 'burglary',
	data: [1851, 1366, 976, 549, 412]
}, {
	name: 'assault',
	data: [850, 720, 569, 417, 489]
}, {
	name: 'gla',
	data: [1617, 1272, 823, 597, 295]
}, {
	name: 'grlarceny',
	data: [545, 576, 426, 248, 296]
}, {
	name: 'murder',
	data: [35, 46, 21, 17, 21]
}, {
	name: 'rape',
	data: [79, 85, 73, 50, 34]
}, {
	name: 'robbery',
	data: [1417, 1055, 656, 460, 434]
}, {
	name: 'total',
	data: [6394, 5120, 3544, 2338, 1981]

%%1container48%%2
series: [{
	name: 'burglary',
	data: [1313, 957, 669, 431, 201]
}, {
	name: 'assault',
	data: [698, 430, 513, 430, 343]
}, {
	name: 'gla',
	data: [603, 445, 298, 316, 141]
}, {
	name: 'grlarceny',
	data: [463, 359, 292, 282, 364]
}, {
	name: 'murder',
	data: [40, 15, 23, 13, 12]
}, {
	name: 'rape',
	data: [59, 56, 40, 36, 19]
}, {
	name: 'robbery',
	data: [1173, 779, 578, 421, 413]
}, {
	name: 'total',
	data: [4349, 3041, 2413, 1929, 1493]

%%1container49%%2
series: [{
	name: 'burglary',
	data: [1511, 1053, 655, 576, 393]
}, {
	name: 'assault',
	data: [346, 358, 264, 227, 265]
}, {
	name: 'gla',
	data: [1919, 1482, 986, 576, 231]
}, {
	name: 'grlarceny',
	data: [581, 500, 405, 397, 455]
}, {
	name: 'murder',
	data: [15, 11, 8, 5, 3]
}, {
	name: 'rape',
	data: [36, 28, 30, 22, 18]
}, {
	name: 'robbery',
	data: [690, 569, 404, 284, 372]
}, {
	name: 'total',
	data: [5098, 4001, 2752, 2087, 1737]

%%1container50%%2
series: [{
	name: 'burglary',
	data: [1151, 860, 599, 357, 207]
}, {
	name: 'assault',
	data: [271, 177, 146, 147, 115]
}, {
	name: 'gla',
	data: [1786, 1305, 917, 458, 107]
}, {
	name: 'grlarceny',
	data: [457, 445, 306, 295, 379]
}, {
	name: 'murder',
	data: [11, 2, 3, 8, 4]
}, {
	name: 'rape',
	data: [24, 17, 22, 21, 9]
}, {
	name: 'robbery',
	data: [622, 425, 292, 199, 192]
}, {
	name: 'total',
	data: [4322, 3231, 2285, 1485, 1013]

%%1container52%%2
series: [{
	name: 'burglary',
	data: [2344, 1991, 1102, 766, 449]
}, {
	name: 'assault',
	data: [627, 698, 541, 524, 397]
}, {
	name: 'gla',
	data: [1464, 992, 626, 555, 146]
}, {
	name: 'grlarceny',
	data: [922, 734, 582, 528, 634]
}, {
	name: 'murder',
	data: [43, 19, 20, 23, 8]
}, {
	name: 'rape',
	data: [60, 57, 60, 53, 22]
}, {
	name: 'robbery',
	data: [1727, 1228, 871, 603, 519]
}, {
	name: 'total',
	data: [7187, 5719, 3802, 3052, 2175]

%%1container60%%2
series: [{
	name: 'burglary',
	data: [993, 789, 481, 302, 200]
}, {
	name: 'assault',
	data: [735, 566, 572, 312, 281]
}, {
	name: 'gla',
	data: [1174, 753, 493, 262, 88]
}, {
	name: 'grlarceny',
	data: [691, 579, 605, 436, 487]
}, {
	name: 'murder',
	data: [20, 24, 16, 11, 6]
}, {
	name: 'rape',
	data: [42, 54, 45, 27, 12]
}, {
	name: 'robbery',
	data: [1074, 845, 554, 462, 251]
}, {
	name: 'total',
	data: [4729, 3610, 2766, 1812, 1325]

%%1container61%%2
series: [{
	name: 'burglary',
	data: [2146, 1343, 1086, 728, 256]
}, {
	name: 'assault',
	data: [314, 292, 272, 178, 152]
}, {
	name: 'gla',
	data: [3298, 1998, 1281, 636, 146]
}, {
	name: 'grlarceny',
	data: [1463, 875, 912, 671, 467]
}, {
	name: 'murder',
	data: [8, 10, 7, 5, 14]
}, {
	name: 'rape',
	data: [23, 30, 30, 13, 11]
}, {
	name: 'robbery',
	data: [893, 669, 492, 365, 192]
}, {
	name: 'total',
	data: [8145, 5217, 4080, 2596, 1238]

%%1container62%%2
series: [{
	name: 'burglary',
	data: [1693, 1213, 812, 678, 251]
}, {
	name: 'assault',
	data: [303, 272, 271, 193, 162]
}, {
	name: 'gla',
	data: [1830, 1265, 903, 511, 158]
}, {
	name: 'grlarceny',
	data: [774, 551, 570, 501, 461]
}, {
	name: 'murder',
	data: [10, 4, 2, 4, 2]
}, {
	name: 'rape',
	data: [24, 20, 17, 20, 11]
}, {
	name: 'robbery',
	data: [753, 481, 332, 300, 173]
}, {
	name: 'total',
	data: [5387, 3806, 2907, 2207, 1218]

%%1container63%%2
series: [{
	name: 'burglary',
	data: [1165, 673, 537, 339, 257]
}, {
	name: 'assault',
	data: [314, 270, 208, 161, 190]
}, {
	name: 'gla',
	data: [2730, 1621, 845, 497, 125]
}, {
	name: 'grlarceny',
	data: [653, 537, 566, 536, 522]
}, {
	name: 'murder',
	data: [14, 7, 4, 3, 2]
}, {
	name: 'rape',
	data: [24, 19, 25, 17, 16]
}, {
	name: 'robbery',
	data: [708, 462, 413, 265, 235]
}, {
	name: 'total',
	data: [5608, 3589, 2598, 1818, 1347]

%%1container66%%2
series: [{
	name: 'burglary',
	data: [1692, 979, 795, 552, 336]
}, {
	name: 'assault',
	data: [314, 261, 215, 212, 164]
}, {
	name: 'gla',
	data: [1821, 1313, 805, 445, 130]
}, {
	name: 'grlarceny',
	data: [661, 434, 416, 353, 453]
}, {
	name: 'murder',
	data: [10, 3, 4, 1, 2]
}, {
	name: 'rape',
	data: [19, 22, 20, 17, 8]
}, {
	name: 'robbery',
	data: [747, 431, 406, 282, 191]
}, {
	name: 'total',
	data: [5264, 3443, 2661, 1862, 1284]

%%1container67%%2
series: [{
	name: 'burglary',
	data: [2127, 1730, 1141, 827, 473]
}, {
	name: 'assault',
	data: [1234, 1069, 974, 735, 634]
}, {
	name: 'gla',
	data: [2042, 1255, 692, 702, 276]
}, {
	name: 'grlarceny',
	data: [781, 673, 527, 611, 521]
}, {
	name: 'murder',
	data: [55, 43, 25, 21, 22]
}, {
	name: 'rape',
	data: [101, 90, 82, 58, 46]
}, {
	name: 'robbery',
	data: [2377, 1390, 913, 669, 530]
}, {
	name: 'total',
	data: [8717, 6250, 4354, 3623, 2502]

%%1container68%%2
series: [{
	name: 'burglary',
	data: [1144, 793, 598, 456, 209]
}, {
	name: 'assault',
	data: [281, 253, 198, 169, 145]
}, {
	name: 'gla',
	data: [1946, 1362, 837, 408, 122]
}, {
	name: 'grlarceny',
	data: [479, 475, 363, 440, 371]
}, {
	name: 'murder',
	data: [4, 4, 1, 0, 1]
}, {
	name: 'rape',
	data: [28, 17, 14, 17, 9]
}, {
	name: 'robbery',
	data: [552, 365, 267, 198, 102]
}, {
	name: 'total',
	data: [4434, 3269, 2278, 1688, 959]

%%1container69%%2
series: [{
	name: 'burglary',
	data: [640, 552, 387, 291, 233]
}, {
	name: 'assault',
	data: [275, 238, 289, 267, 200]
}, {
	name: 'gla',
	data: [2178, 1029, 631, 449, 126]
}, {
	name: 'grlarceny',
	data: [414, 334, 352, 340, 275]
}, {
	name: 'murder',
	data: [10, 5, 6, 7, 6]
}, {
	name: 'rape',
	data: [24, 18, 28, 35, 16]
}, {
	name: 'robbery',
	data: [712, 562, 472, 363, 232]
}, {
	name: 'total',
	data: [4253, 2738, 2165, 1752, 1088]

%%1container70%%2
series: [{
	name: 'burglary',
	data: [2915, 1549, 1291, 914, 338]
}, {
	name: 'assault',
	data: [866, 708, 605, 503, 338]
}, {
	name: 'gla',
	data: [2391, 1336, 879, 629, 124]
}, {
	name: 'grlarceny',
	data: [1120, 863, 826, 680, 704]
}, {
	name: 'murder',
	data: [46, 19, 9, 13, 10]
}, {
	name: 'rape',
	data: [111, 69, 61, 64, 21]
}, {
	name: 'robbery',
	data: [2157, 1296, 1008, 883, 380]
}, {
	name: 'total',
	data: [9606, 5840, 4679, 3686, 1915]

%%1container71%%2
series: [{
	name: 'burglary',
	data: [1873, 1297, 899, 511, 236]
}, {
	name: 'assault',
	data: [926, 892, 707, 490, 385]
}, {
	name: 'gla',
	data: [1383, 927, 431, 481, 122]
}, {
	name: 'grlarceny',
	data: [689, 638, 602, 514, 382]
}, {
	name: 'murder',
	data: [37, 11, 15, 14, 9]
}, {
	name: 'rape',
	data: [73, 79, 52, 38, 20]
}, {
	name: 'robbery',
	data: [1690, 1140, 878, 603, 301]
}, {
	name: 'total',
	data: [6671, 4984, 3584, 2651, 1455]

%%1container72%%2
series: [{
	name: 'burglary',
	data: [1163, 960, 804, 545, 205]
}, {
	name: 'assault',
	data: [516, 452, 397, 259, 255]
}, {
	name: 'gla',
	data: [975, 818, 484, 403, 99]
}, {
	name: 'grlarceny',
	data: [469, 420, 344, 285, 391]
}, {
	name: 'murder',
	data: [18, 11, 7, 6, 5]
}, {
	name: 'rape',
	data: [38, 30, 30, 32, 24]
}, {
	name: 'robbery',
	data: [1045, 690, 511, 410, 243]
}, {
	name: 'total',
	data: [4224, 3381, 2577, 1940, 1222]

%%1container73%%2
series: [{
	name: 'burglary',
	data: [789, 632, 501, 522, 341]
}, {
	name: 'assault',
	data: [1143, 955, 816, 665, 628]
}, {
	name: 'gla',
	data: [713, 416, 309, 296, 129]
}, {
	name: 'grlarceny',
	data: [949, 636, 418, 409, 448]
}, {
	name: 'murder',
	data: [74, 28, 26, 26, 26]
}, {
	name: 'rape',
	data: [88, 72, 74, 54, 31]
}, {
	name: 'robbery',
	data: [2252, 1470, 879, 625, 542]
}, {
	name: 'total',
	data: [6008, 4209, 3023, 2597, 2145]

%%1container75%%2
series: [{
	name: 'burglary',
	data: [1854, 1531, 1170, 568, 517]
}, {
	name: 'assault',
	data: [1474, 1280, 1068, 1053, 880]
}, {
	name: 'gla',
	data: [2662, 1717, 1020, 845, 322]
}, {
	name: 'grlarceny',
	data: [965, 918, 651, 737, 826]
}, {
	name: 'murder',
	data: [126, 44, 41, 35, 29]
}, {
	name: 'rape',
	data: [122, 144, 112, 89, 54]
}, {
	name: 'robbery',
	data: [3152, 2397, 1628, 1146, 779]
}, {
	name: 'total',
	data: [10355, 8031, 5690, 4473, 3407]

%%1container76%%2
series: [{
	name: 'burglary',
	data: [438, 294, 269, 203, 98]
}, {
	name: 'assault',
	data: [307, 236, 167, 131, 96]
}, {
	name: 'gla',
	data: [401, 351, 201, 106, 38]
}, {
	name: 'grlarceny',
	data: [235, 180, 161, 152, 267]
}, {
	name: 'murder',
	data: [8, 12, 7, 4, 3]
}, {
	name: 'rape',
	data: [15, 12, 14, 4, 8]
}, {
	name: 'robbery',
	data: [398, 283, 199, 132, 126]
}, {
	name: 'total',
	data: [1802, 1368, 1018, 732, 636]

%%1container77%%2
series: [{
	name: 'burglary',
	data: [1582, 1291, 722, 575, 373]
}, {
	name: 'assault',
	data: [1190, 727, 648, 498, 361]
}, {
	name: 'gla',
	data: [774, 738, 291, 347, 105]
}, {
	name: 'grlarceny',
	data: [599, 526, 346, 387, 396]
}, {
	name: 'murder',
	data: [82, 30, 9, 19, 10]
}, {
	name: 'rape',
	data: [71, 77, 52, 43, 22]
}, {
	name: 'robbery',
	data: [2202, 1546, 772, 487, 356]
}, {
	name: 'total',
	data: [6500, 4935, 2840, 2356, 1623]

%%1container78%%2
series: [{
	name: 'burglary',
	data: [797, 577, 498, 344, 134]
}, {
	name: 'assault',
	data: [268, 218, 158, 108, 70]
}, {
	name: 'gla',
	data: [1034, 705, 370, 244, 75]
}, {
	name: 'grlarceny',
	data: [510, 386, 452, 369, 413]
}, {
	name: 'murder',
	data: [7, 3, 1, 1, 0]
}, {
	name: 'rape',
	data: [26, 13, 12, 11, 8]
}, {
	name: 'robbery',
	data: [865, 553, 464, 251, 173]
}, {
	name: 'total',
	data: [3507, 2455, 1955, 1328, 873]

%%1container79%%2
series: [{
	name: 'burglary',
	data: [1268, 1293, 555, 449, 355]
}, {
	name: 'assault',
	data: [1131, 974, 716, 599, 444]
}, {
	name: 'gla',
	data: [558, 463, 224, 332, 91]
}, {
	name: 'grlarceny',
	data: [858, 573, 354, 288, 410]
}, {
	name: 'murder',
	data: [55, 37, 17, 25, 13]
}, {
	name: 'rape',
	data: [76, 76, 67, 42, 33]
}, {
	name: 'robbery',
	data: [2086, 1436, 838, 636, 514]
}, {
	name: 'total',
	data: [6032, 4852, 2771, 2371, 1860]

%%1container81%%2
series: [{
	name: 'burglary',
	data: [863, 733, 448, 377, 301]
}, {
	name: 'assault',
	data: [850, 793, 547, 421, 289]
}, {
	name: 'gla',
	data: [588, 296, 154, 197, 85]
}, {
	name: 'grlarceny',
	data: [386, 294, 219, 226, 430]
}, {
	name: 'murder',
	data: [26, 35, 10, 18, 12]
}, {
	name: 'rape',
	data: [79, 55, 29, 31, 16]
}, {
	name: 'robbery',
	data: [1229, 853, 584, 410, 334]
}, {
	name: 'total',
	data: [4021, 3059, 1991, 1680, 1467]

%%1container83%%2
series: [{
	name: 'burglary',
	data: [1386, 1250, 677, 522, 481]
}, {
	name: 'assault',
	data: [845, 721, 498, 537, 359]
}, {
	name: 'gla',
	data: [942, 672, 334, 334, 118]
}, {
	name: 'grlarceny',
	data: [566, 414, 284, 280, 376]
}, {
	name: 'murder',
	data: [44, 17, 12, 12, 17]
}, {
	name: 'rape',
	data: [62, 69, 46, 57, 30]
}, {
	name: 'robbery',
	data: [1528, 1164, 700, 551, 446]
}, {
	name: 'total',
	data: [5373, 4307, 2551, 2293, 1827]

%%1container84%%2
series: [{
	name: 'burglary',
	data: [820, 641, 392, 312, 146]
}, {
	name: 'assault',
	data: [432, 375, 280, 200, 127]
}, {
	name: 'gla',
	data: [733, 572, 273, 149, 45]
}, {
	name: 'grlarceny',
	data: [1136, 831, 732, 736, 560]
}, {
	name: 'murder',
	data: [11, 9, 1, 3, 1]
}, {
	name: 'rape',
	data: [22, 22, 16, 5, 3]
}, {
	name: 'robbery',
	data: [1314, 764, 462, 279, 172]
}, {
	name: 'total',
	data: [4468, 3214, 2156, 1684, 1054]

%%1container88%%2
series: [{
	name: 'burglary',
	data: [1099, 568, 229, 232, 127]
}, {
	name: 'assault',
	data: [479, 357, 188, 209, 156]
}, {
	name: 'gla',
	data: [748, 592, 310, 319, 80]
}, {
	name: 'grlarceny',
	data: [544, 436, 207, 331, 446]
}, {
	name: 'murder',
	data: [25, 13, 10, 11, 2]
}, {
	name: 'rape',
	data: [32, 44, 18, 16, 14]
}, {
	name: 'robbery',
	data: [1188, 775, 399, 419, 295]
}, {
	name: 'total',
	data: [4115, 2785, 1361, 1537, 1120]

%%1container90%%2
series: [{
	name: 'burglary',
	data: [1322, 943, 490, 484, 314]
}, {
	name: 'assault',
	data: [579, 461, 314, 279, 235]
}, {
	name: 'gla',
	data: [941, 662, 465, 336, 189]
}, {
	name: 'grlarceny',
	data: [556, 436, 300, 372, 588]
}, {
	name: 'murder',
	data: [22, 14, 2, 12, 5]
}, {
	name: 'rape',
	data: [34, 40, 29, 24, 23]
}, {
	name: 'robbery',
	data: [1297, 883, 585, 507, 385]
}, {
	name: 'total',
	data: [4751, 3439, 2185, 2014, 1739]

%%1container94%%2
series: [{
	name: 'burglary',
	data: [1128, 659, 301, 223, 157]
}, {
	name: 'assault',
	data: [267, 211, 146, 108, 93]
}, {
	name: 'gla',
	data: [919, 538, 421, 258, 114]
}, {
	name: 'grlarceny',
	data: [369, 250, 178, 173, 320]
}, {
	name: 'murder',
	data: [9, 4, 7, 5, 1]
}, {
	name: 'rape',
	data: [8, 6, 16, 4, 3]
}, {
	name: 'robbery',
	data: [597, 356, 213, 197, 129]
}, {
	name: 'total',
	data: [3297, 2024, 1282, 968, 817]

%%1container100%%2
series: [{
	name: 'burglary',
	data: [432, 359, 177, 115, 143]
}, {
	name: 'assault',
	data: [212, 180, 142, 93, 133]
}, {
	name: 'gla',
	data: [310, 177, 88, 71, 21]
}, {
	name: 'grlarceny',
	data: [194, 195, 115, 94, 148]
}, {
	name: 'murder',
	data: [5, 1, 0, 1, 1]
}, {
	name: 'rape',
	data: [13, 11, 11, 10, 5]
}, {
	name: 'robbery',
	data: [278, 190, 133, 63, 87]
}, {
	name: 'total',
	data: [1444, 1113, 666, 447, 538]

%%1container101%%2
series: [{
	name: 'burglary',
	data: [768, 614, 370, 216, 134]
}, {
	name: 'assault',
	data: [524, 448, 418, 301, 182]
}, {
	name: 'gla',
	data: [460, 338, 184, 158, 46]
}, {
	name: 'grlarceny',
	data: [330, 291, 203, 189, 123]
}, {
	name: 'murder',
	data: [16, 14, 9, 6, 8]
}, {
	name: 'rape',
	data: [42, 24, 32, 17, 17]
}, {
	name: 'robbery',
	data: [710, 577, 413, 247, 128]
}, {
	name: 'total',
	data: [2850, 2306, 1629, 1134, 638]

%%1container102%%2
series: [{
	name: 'burglary',
	data: [1503, 1485, 965, 622, 298]
}, {
	name: 'assault',
	data: [362, 401, 440, 309, 260]
}, {
	name: 'gla',
	data: [3495, 2150, 1303, 803, 253]
}, {
	name: 'grlarceny',
	data: [583, 523, 538, 378, 419]
}, {
	name: 'murder',
	data: [12, 11, 3, 2, 6]
}, {
	name: 'rape',
	data: [34, 35, 23, 21, 23]
}, {
	name: 'robbery',
	data: [1238, 908, 672, 459, 269]
}, {
	name: 'total',
	data: [7227, 5513, 3944, 2594, 1528]

%%1container103%%2
series: [{
	name: 'burglary',
	data: [1166, 1055, 598, 449, 261]
}, {
	name: 'assault',
	data: [853, 787, 611, 406, 359]
}, {
	name: 'gla',
	data: [1591, 1088, 602, 472, 204]
}, {
	name: 'grlarceny',
	data: [1214, 985, 578, 587, 415]
}, {
	name: 'murder',
	data: [28, 16, 16, 10, 11]
}, {
	name: 'rape',
	data: [74, 69, 45, 27, 37]
}, {
	name: 'robbery',
	data: [1742, 1488, 751, 530, 436]
}, {
	name: 'total',
	data: [6668, 5488, 3201, 2481, 1723]

%%1container104%%2
series: [{
	name: 'burglary',
	data: [1955, 1760, 1024, 790, 402]
}, {
	name: 'assault',
	data: [305, 251, 261, 262, 250]
}, {
	name: 'gla',
	data: [3418, 2041, 1374, 892, 249]
}, {
	name: 'grlarceny',
	data: [678, 620, 485, 551, 544]
}, {
	name: 'murder',
	data: [19, 6, 7, 5, 2]
}, {
	name: 'rape',
	data: [21, 16, 24, 15, 14]
}, {
	name: 'robbery',
	data: [1027, 765, 490, 359, 262]
}, {
	name: 'total',
	data: [7423, 5459, 3665, 2874, 1723]

%%1container105%%2
series: [{
	name: 'burglary',
	data: [1640, 1485, 854, 630, 494]
}, {
	name: 'assault',
	data: [409, 406, 400, 329, 279]
}, {
	name: 'gla',
	data: [3476, 2423, 1360, 913, 420]
}, {
	name: 'grlarceny',
	data: [593, 642, 444, 456, 455]
}, {
	name: 'murder',
	data: [23, 19, 7, 18, 5]
}, {
	name: 'rape',
	data: [41, 48, 52, 35, 27]
}, {
	name: 'robbery',
	data: [1082, 824, 557, 395, 343]
}, {
	name: 'total',
	data: [7264, 5847, 3674, 2776, 2023]

%%1container106%%2
series: [{
	name: 'burglary',
	data: [1230, 978, 662, 417, 331]
}, {
	name: 'assault',
	data: [408, 308, 297, 241, 221]
}, {
	name: 'gla',
	data: [3304, 1918, 1370, 778, 283]
}, {
	name: 'grlarceny',
	data: [595, 527, 440, 381, 378]
}, {
	name: 'murder',
	data: [21, 14, 7, 4, 4]
}, {
	name: 'rape',
	data: [33, 31, 40, 19, 10]
}, {
	name: 'robbery',
	data: [891, 756, 545, 344, 267]
}, {
	name: 'total',
	data: [6482, 4532, 3361, 2184, 1494]

%%1container107%%2
series: [{
	name: 'burglary',
	data: [1425, 1187, 862, 632, 269]
}, {
	name: 'assault',
	data: [239, 241, 226, 153, 126]
}, {
	name: 'gla',
	data: [4902, 2527, 1560, 802, 214]
}, {
	name: 'grlarceny',
	data: [616, 591, 614, 572, 435]
}, {
	name: 'murder',
	data: [8, 4, 5, 4, 3]
}, {
	name: 'rape',
	data: [32, 27, 30, 15, 13]
}, {
	name: 'robbery',
	data: [1039, 732, 514, 375, 238]
}, {
	name: 'total',
	data: [8261, 5309, 3811, 2553, 1298]

%%1container108%%2
series: [{
	name: 'burglary',
	data: [1563, 1396, 971, 564, 292]
}, {
	name: 'assault',
	data: [317, 235, 248, 147, 123]
}, {
	name: 'gla',
	data: [2123, 1653, 942, 704, 180]
}, {
	name: 'grlarceny',
	data: [914, 733, 605, 570, 510]
}, {
	name: 'murder',
	data: [10, 11, 5, 3, 2]
}, {
	name: 'rape',
	data: [12, 23, 24, 18, 11]
}, {
	name: 'robbery',
	data: [1026, 685, 464, 313, 155]
}, {
	name: 'total',
	data: [5965, 4736, 3259, 2319, 1273]

%%1container109%%2
series: [{
	name: 'burglary',
	data: [2378, 1485, 1440, 964, 399]
}, {
	name: 'assault',
	data: [350, 308, 363, 327, 242]
}, {
	name: 'gla',
	data: [4153, 2481, 1668, 1075, 287]
}, {
	name: 'grlarceny',
	data: [1367, 988, 993, 1175, 695]
}, {
	name: 'murder',
	data: [11, 22, 3, 5, 8]
}, {
	name: 'rape',
	data: [34, 21, 28, 22, 19]
}, {
	name: 'robbery',
	data: [1217, 826, 480, 388, 252]
}, {
	name: 'total',
	data: [9510, 6131, 4975, 3956, 1902]

%%1container110%%2
series: [{
	name: 'burglary',
	data: [2165, 1547, 720, 485, 316]
}, {
	name: 'assault',
	data: [497, 458, 383, 315, 268]
}, {
	name: 'gla',
	data: [2302, 1535, 814, 493, 123]
}, {
	name: 'grlarceny',
	data: [1280, 986, 665, 605, 552]
}, {
	name: 'murder',
	data: [29, 29, 11, 9, 2]
}, {
	name: 'rape',
	data: [34, 26, 27, 44, 22]
}, {
	name: 'robbery',
	data: [1541, 1121, 718, 614, 332]
}, {
	name: 'total',
	data: [7848, 5702, 3338, 2565, 1615]

%%1container111%%2
series: [{
	name: 'burglary',
	data: [965, 792, 580, 348, 204]
}, {
	name: 'assault',
	data: [130, 98, 88, 58, 49]
}, {
	name: 'gla',
	data: [3301, 1791, 1169, 640, 107]
}, {
	name: 'grlarceny',
	data: [575, 500, 261, 325, 386]
}, {
	name: 'murder',
	data: [4, 7, 2, 1, 2]
}, {
	name: 'rape',
	data: [15, 8, 6, 2, 6]
}, {
	name: 'robbery',
	data: [341, 280, 151, 154, 79]
}, {
	name: 'total',
	data: [5331, 3476, 2257, 1528, 833]

%%1container112%%2
series: [{
	name: 'burglary',
	data: [1391, 769, 605, 350, 150]
}, {
	name: 'assault',
	data: [126, 135, 84, 98, 62]
}, {
	name: 'gla',
	data: [3382, 1973, 925, 622, 103]
}, {
	name: 'grlarceny',
	data: [1028, 789, 741, 668, 493]
}, {
	name: 'murder',
	data: [5, 2, 2, 0, 2]
}, {
	name: 'rape',
	data: [10, 7, 7, 3, 9]
}, {
	name: 'robbery',
	data: [659, 453, 272, 213, 105]
}, {
	name: 'total',
	data: [6601, 4128, 2636, 1954, 924]

%%1container113%%2
series: [{
	name: 'burglary',
	data: [1150, 962, 651, 461, 495]
}, {
	name: 'assault',
	data: [758, 616, 488, 401, 482]
}, {
	name: 'gla',
	data: [1833, 1526, 793, 520, 241]
}, {
	name: 'grlarceny',
	data: [3982, 2046, 1049, 855, 690]
}, {
	name: 'murder',
	data: [39, 28, 10, 10, 17]
}, {
	name: 'rape',
	data: [78, 76, 66, 48, 29]
}, {
	name: 'robbery',
	data: [1177, 890, 562, 355, 416]
}, {
	name: 'total',
	data: [9017, 6144, 3619, 2650, 2370]

%%1container114%%2
series: [{
	name: 'burglary',
	data: [2345, 1897, 1043, 855, 467]
}, {
	name: 'assault',
	data: [748, 607, 445, 385, 347]
}, {
	name: 'gla',
	data: [2684, 1566, 1152, 873, 188]
}, {
	name: 'grlarceny',
	data: [1129, 1058, 783, 744, 647]
}, {
	name: 'murder',
	data: [26, 21, 8, 5, 5]
}, {
	name: 'rape',
	data: [45, 42, 33, 33, 27]
}, {
	name: 'robbery',
	data: [1713, 1102, 801, 586, 332]
}, {
	name: 'total',
	data: [8690, 6293, 4265, 3481, 2013]

%%1container115%%2
series: [{
	name: 'burglary',
	data: [1979, 1558, 829, 503, 321]
}, {
	name: 'assault',
	data: [424, 448, 376, 311, 364]
}, {
	name: 'gla',
	data: [2214, 1399, 791, 606, 189]
}, {
	name: 'grlarceny',
	data: [1432, 1306, 982, 875, 575]
}, {
	name: 'murder',
	data: [21, 18, 13, 5, 4]
}, {
	name: 'rape',
	data: [36, 39, 22, 24, 42]
}, {
	name: 'robbery',
	data: [1316, 969, 609, 435, 347]
}, {
	name: 'total',
	data: [7422, 5737, 3622, 2759, 1842]

%%1container120%%2
series: [{
	name: 'burglary',
	data: [1705, 1402, 708, 581, 371]
}, {
	name: 'assault',
	data: [791, 700, 517, 451, 386]
}, {
	name: 'gla',
	data: [1347, 847, 525, 320, 168]
}, {
	name: 'grlarceny',
	data: [589, 511, 439, 424, 410]
}, {
	name: 'murder',
	data: [21, 17, 9, 7, 12]
}, {
	name: 'rape',
	data: [56, 48, 38, 30, 42]
}, {
	name: 'robbery',
	data: [1016, 826, 359, 272, 248]
}, {
	name: 'total',
	data: [5525, 4351, 2595, 2085, 1637]

%%1container122%%2
series: [{
	name: 'burglary',
	data: [1351, 737, 401, 258, 260]
}, {
	name: 'assault',
	data: [313, 271, 166, 132, 129]
}, {
	name: 'gla',
	data: [2809, 1920, 889, 524, 117]
}, {
	name: 'grlarceny',
	data: [839, 654, 371, 443, 386]
}, {
	name: 'murder',
	data: [3, 4, 2, 4, 2]
}, {
	name: 'rape',
	data: [19, 21, 13, 6, 10]
}, {
	name: 'robbery',
	data: [317, 232, 151, 77, 112]
}, {
	name: 'total',
	data: [5651, 3839, 1993, 1444, 1016]

%%1container123%%2
series: [{
	name: 'burglary',
	data: [341, 248, 186, 149, 101]
}, {
	name: 'assault',
	data: [114, 80, 62, 54, 49]
}, {
	name: 'gla',
	data: [720, 533, 315, 179, 47]
}, {
	name: 'grlarceny',
	data: [243, 177, 154, 96, 175]
}, {
	name: 'murder',
	data: [1, 5, 1, 2, 2]
}, {
	name: 'rape',
	data: [4, 5, 4, 2, 1]
}, {
	name: 'robbery',
	data: [64, 53, 25, 32, 37]
}, {
	name: 'total',
	data: [1487, 1101, 747, 514, 412]
