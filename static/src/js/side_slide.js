
document.addEventListener("DOMContentLoaded", function () {
    const sideMenu = document.querySelector(".side-menu");
    const targetElement1 = document.getElementById("o_wblog_blog_top");
    const targetElement2 = document.getElementById("o_wblog_post_top");
    const targetElement3 = document.getElementById("products_grid");
    const targetElement4 = document.getElementById("product_detail");
    const bottomElement = document.getElementById("bottom");
    const ScrollElement = document.getElementById("wrapwrap");
    function getActiveTarget(target1, target2, target3, target4) {
        if (target1) {
            return target1; // Eğer target1 mevcutsa onu döndür
        } else if (target2) {
            return target2; // Eğer target2 mevcutsa onu döndür
        } else if (target3) {
            return target3; // Eğer target3 mevcutsa onu döndür    
        } else if (target4) {
            return target4; // Eğer target4 mevcutsa onu döndür    
        } else {
            console.warn("Hiçbir targetElement bulunamadı.");
            return null; // Eğer hiçbir target yoksa null döndür
        }
    }
    
    const activeTarget = getActiveTarget(targetElement1, targetElement2, targetElement3, targetElement4);
    if (!sideMenu || !activeTarget || !bottomElement) {
        console.warn("Gerekli elementlerden biri bulunamadı.");
        return;
    }
    

    function isOverlap(element1, element2) {
        const rect1 = element1.getBoundingClientRect();
        const rect2 = element2.getBoundingClientRect();

        return !(
            rect1.right < rect2.left ||
            rect1.left > rect2.right ||
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom
        );
    }
   
    function updateSidebarPosition() {
        const targetRect = activeTarget.getBoundingClientRect();
        if (activeTarget == targetElement2 && activeTarget == targetElement1)
        {
            // Hedef element görünüyorsa
            if (targetRect.bottom > 0) {
                const scrollY = ScrollElement.scrollTop; // Scroll miktarını al
                sideMenu.style.transform = `translateY(${-scrollY}px)`;
            } 
        }

        // Footer ile çakışma kontrolü (Bu kısım değişmedi)
        if (isOverlap(sideMenu, bottomElement)) {
            sideMenu.style.visibility = "hidden";
            console.log("kapalı")
        } else {
            sideMenu.style.visibility = "visible";
            console.log("açık")
        }

        // Sürekli kontrol için animasyon döngüsü
        requestAnimationFrame(updateSidebarPosition);
    }

    // Fonksiyonu başlat
    updateSidebarPosition();
});
