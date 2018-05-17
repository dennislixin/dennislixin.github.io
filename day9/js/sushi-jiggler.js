
$().ready(()=>{
    const animationName = ["hooray",
                            "grow",
                            "spin",
                            "hop",
                            "shake" ];

    $("img").click(e => {
        const randomIndex = Math.round(Math.random() * animationName.length);
        const className = animationName[randomIndex];
        console.log(randomIndex);
    
        $(e.currentTarget).addClass(className);
        setTimeout(()=>{
            $(e.currentTarget).removeClass(className);
        }, 2100);
    });
});

