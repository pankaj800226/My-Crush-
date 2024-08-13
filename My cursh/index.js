let highestZ = 1
class Paper {
    holdingpaper = false

    prevMouseY = 0;
    prevMouseY = 0;

    mouseX = 0;
    mouseY = 0;

    velocityX = 0;
    velocityY = 0;

    curentPaperX = 0;
    curentPaperY = 0;

    init(paper) {

        paper.addEventListener('mousedown', (e) => {
            this.holdingpaper = true;
            paper.style.zIndex = highestZ
            highestZ += 1

            // left 0 center 1 tight 2
            if (e.button === 0) {
                this.prevMouseY = this.mouseY;
                this.prevMouseX = this.mouseX
                console.log(this.prevMouseX);
                console.log(this.prevMouseY);


            }
        })


        document.addEventListener('mousemove', (e) => {
            // clientXY means windows size show because client devise diffrent diffrent device windows size not same
            this.mouseX = e.clientX
            this.mouseY = e.clientY

            this.velocityX = this.mouseX - this.prevMouseX
            this.velocityY = this.mouseY - this.prevMouseY

            if (this.holdingpaper) {
                this.curentPaperX += this.velocityX
                this.curentPaperY += this.velocityY

                this.prevMouseX = this.mouseX
                this.prevMouseY = this.mouseY

                paper.style.transform = `translateX(${this.curentPaperX}px) translateY(${this.curentPaperY}px)`

            }

        })

        window.addEventListener('mouseup', (e) => {
            // console.log("Mouse up");
            this.holdingpaper = false;

        })
    }
}

const papers = document.querySelectorAll('.paper')

papers.forEach(paper => {
    const p = new Paper();
    p.init(paper);
})


