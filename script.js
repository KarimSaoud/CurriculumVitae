function toggleMoreInfo() {
    var moreInfo = document.getElementById('more-info');
    var button = document.getElementById('show-more');
    
    if (moreInfo.classList.contains('hidden')) {
        moreInfo.classList.remove('hidden');
        button.textContent = "Mostra di meno";
    } else {
        moreInfo.classList.add('hidden');
        button.textContent = "Mostra di più";
    }
}
