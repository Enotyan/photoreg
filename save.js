document.getElementById('saveButton').addEventListener('click', function() {
    //  данные о рисунке 
    var drawingData = canvas.toDataURL();

    //  временный элемент ссылки для загрузки файла
    var link = document.createElement('a');
    link.href = drawingData;
    link.download = 'my_drawing.png'; // имя файла для загрузки
    link.click();
});
