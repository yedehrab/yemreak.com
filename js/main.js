/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Navigation Bar'ı çizer.
 * <div id="navbar"></div> şeklinde kullanılır.
 * @returns {navbar}
 */
$(function () {
    $("#navbar").load("products/navbar.html", setOneLinkActive);
});

function setOneLinkActive() {
    const linksId = ["mainPage", "lastAdded", "uniNotes", "progNotes", "randNotes", "references"];
    setOneLinkActive.activeLinkIndex = 0;
    
    linksId.forEach(setLinkDeActive);
    setLinkActive(linksId[setOneLinkActive.activeLinkIndex]);
}



function setLinkDeActive(linkId) {
    if (document.getElementById(linkId).classList.contains('active')) {
        document.getElementById(linkId).classList.remove('active');
    }
}

function setLinkActive(linkId) {
    if (!document.getElementById(linkId).classList.contains('active')) {
        document.getElementById(linkId).classList.add('active');
    }
}

// Global ve static olmadığı için çalışmıyor.
function setActiveLinkIndex(index) {
    setOneLinkActive.activeLinkIndex = index;   
}

