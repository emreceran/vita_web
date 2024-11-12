document.addEventListener("DOMContentLoaded", function () {

    function isOverlap(element1Id, element2Id) {
        const rect1 = document.getElementById(element1Id).getBoundingClientRect();
        const rect2 = document.getElementById(element2Id).getBoundingClientRect();
    
        return !(
            rect1.right < rect2.left || 
            rect1.left > rect2.right || 
            rect1.bottom < rect2.top || 
            rect1.top > rect2.bottom
        );
    }
    
    function checkOverlapContinuously() {
        if (isOverlap("side_menu", "bottom")) {
            console.log("Nesneler çakışıyor!");
            document.getElementById('side_menu').style.visibility = 'hidden';
        } else {
            console.log("Nesneler çakışmıyor.");
            document.getElementById('side_menu').style.visibility = 'visible';
        }
    
        requestAnimationFrame(checkOverlapContinuously);
    }
    
    // Fonksiyonu başlat
    checkOverlapContinuously();
    


});
