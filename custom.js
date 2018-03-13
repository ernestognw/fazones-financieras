var activo_circulante = [];
var activo_no_circulante = [];
var activos_totales = [];

var pasivo_circulante = [];
var pasivo_no_circulante = [];
var pasivos_totales = [];

var capital_total = [];
var pasivos_y_capital_totales = [];

var total = 0;

var bg = $("#bg").find(".form-control");
var bgColumnsQuantity = $(".columna").length;
var bgCols = new Array(bgColumnsQuantity);
for (var i = 0; i < bgColumnsQuantity; i++) {
	bgCols[i] = new Array(bgColumnsQuantity);
}

for (var n = 0; n < bgColumnsQuantity; n++) {
	for (i = n; i < bg.length; i = i + bgColumnsQuantity) {
		bgCols[n].push(bg[i]);
	}
}

var er = $("#er").find(".form-control");
var erColumnsQuantity = $(".columna").length;
var erCols = new Array(erColumnsQuantity);
for (var i = 0; i < erColumnsQuantity; i++) {
	erCols[i] = new Array(erColumnsQuantity);
}

for (var n = 0; n < erColumnsQuantity; n++) {
	for (i = n; i < er.length; i = i + erColumnsQuantity) {
		erCols[n].push(er[i]);
	}
}

console.log(bgCols);
console.log(erCols);

for (var i = 4; i <= 8; i++) {
	total += parseInt(bgCols[0][i].value);
}

bgCols[0][9].value = total;

/*
var rowsQuantity = $(".form-control").length/columnsQuantity;

for (var i = 0; i <= columnsQuantity; i++) {
	for (var n = 1; n <= rowsQuantity; n++) {
		position = n * (columnsQuantity);
		tdPerColumns.push(td[position]);
	}
}

console.log(tdPerColumns);
console.log(td);

$('#activo-circulante-1').val(x+y);
*/