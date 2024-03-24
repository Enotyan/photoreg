document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let color = '#000000';
    let isDrawing = false;
    let isEraserMode = false;
    let brushSize = 10;
    let eraserSize = 10;

     canvas.width = 800;
    canvas.height = 800;
//
    // Функция для рисования
    function draw(event) {
        if (!isDrawing) return;
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        if (isEraserMode) {
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = eraserSize;
        } else {
            ctx.strokeStyle = color;
            ctx.lineWidth = brushSize;
        }
        ctx.lineTo(x, y);
        ctx.stroke();
    }

    // Событие для начала рисования
    canvas.addEventListener('mousedown', function(event) {
        isDrawing = true;
        ctx.beginPath();
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        ctx.moveTo(x, y);
    });

    // Событие для завершения рисования
    canvas.addEventListener('mouseup', function() {
        isDrawing = false;
    });

    // Событие для рисования при перемещении мыши
    canvas.addEventListener('mousemove', draw);

    // Обработчик изменения цвета
    document.getElementById('color-picker').addEventListener('change', function(event) {
        color = event.target.value;
        ctx.closePath();
        ctx.strokeStyle = color;
    });

    // Событие для включения режима ластика
    document.getElementById('eraser').addEventListener('click', function() {
        isEraserMode = true;
    });

    // Событие для выключения режима ластика
    document.getElementById('brush').addEventListener('click', function() {
        isEraserMode = false;
    });

    // Обработчик изменения размера кисти
    document.getElementById('brush-size').addEventListener('input', function(event) {
        brushSize = event.target.value;
    });

    // Обработчик изменения размера ластика
    document.getElementById('eraser-size').addEventListener('input', function(event) {
        eraserSize = event.target.value;
    });

    let isResizing = false;
    let startX;
    let startY;



    // Перерисовываем текущий рисунок
    function redraw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

    }

    document.getElementById('clear').addEventListener('click', function() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});

});
