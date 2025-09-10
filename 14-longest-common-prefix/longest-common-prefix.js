var longestCommonPrefix = function(strs) {
    strs.sort();
    var ans = "";
    var first = strs[0].split("");
    var last = strs[strs.length - 1].split("");

    for (var i = 0; i < first.length; i++) {
        if (last[i] == first[i]) {
            ans = ans + last[i];
        } else {
            break;
        }
    }

    return ans;
};