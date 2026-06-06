// തീം മാറ്റാനുള്ള ഫങ്ഷൻ
function changeTheme() {
    const select = document.getElementById('themeStyle');
    const selectedTheme = select.value;
    
    // പഴയ തീമുകൾ റിമൂവ് ചെയ്യുക
    document.body.className = '';
    
    // പുതിയ തീം അപ്ലൈ ചെയ്യുക
    if (selectedTheme !== 'default') {
        document.body.classList.add('theme-' + selectedTheme);
    }
}

// ഫയൽ അപ്‌ലോഡ് ചെയ്യുമ്പോൾ പേര് കാണിക്കാൻ
function handlePhotoUpload(event) {
    const fileNameSpan = document.getElementById('fileName');
    if (event.target.files.length > 0) {
        fileNameSpan.innerHTML = "✅ " + event.target.files[0].name;
        fileNameSpan.style.color = "#2ecc71";
    }
}