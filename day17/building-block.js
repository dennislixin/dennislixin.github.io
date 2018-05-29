$().ready( ()=>{
    $("body").droppable({
        accept: ".draggable",
        drop: function (event, ui) {
            if( $(ui.draggable).hasClass("original") ){
                const position = ui.position;            
                let cloned = $(ui.draggable).clone();
                cloned.removeClass("original");
                cloned.css({
                    top: position.top, 
                    left: position.left, 
                    position: "absolute"
                });
                cloned.draggable({
                    containment: 'document',
                    stack: '.draggable',
                    snap: true,
                    snapMode: 'outer',
                    snapTolerance: 5,
                    cursor: "move"
                });
                cloned.appendTo(this);
            }
        }
    });

	$('.draggable').draggable({
		containment: 'document',
		stack: '.draggable',
		snap: true,
		snapMode: 'outer',
        snapTolerance: 5,
        helper: "clone",
        cursor: "move", 
        zIndex: 9999
    });
    
    $(".draggable").mousedown( ()=>{
        $("h1, h2").fadeOut('slow');
    });
});