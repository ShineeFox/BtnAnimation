const loadBtn = document.getElementById('loadbtn');
const loader = document.getElementById('loader');
const demoForm = document.getElementById('btn-form');

loadBtn.addEventListener('click', ()=> {
    // Disable the btn and prevent further clicks
    loadBtn.disabled = true;
    loader.style.display = 'inline-block';

    setTimeout(()=> {
        // Restore the btn state after the operation is done
        loadBtn.disabled = false;
        loader.style.display = 'none';
        demoForm.reset();
    }, 2000);
});