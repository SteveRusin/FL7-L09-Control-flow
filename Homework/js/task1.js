var sh = '#';
var sp = ' ';
var i = 0;
while (i < 8) {
    i++;
    if (i % 2 === 0) {
        console.log(sp + sh + sp + sh + sp + sh + sp + sh);
    } else {
        console.log(sh + sp + sh + sp + sh + sp + sh + sp);
    }
}